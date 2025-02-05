import argon2 from "argon2";
import type { RequestHandler } from "express";
import userRepository from "../user/userRepository";

import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
// Import access to data

const login: RequestHandler = async (req, res, next) => {
  try {
    if (!req.body.password || !req.body.email) {
      res.status(400).json({ error: "Email and password are required" });
      return;
    }
    const user = await userRepository.readByEmailWithPassword(req.body.email);

    const verified = await argon2.verify(
      user.hashed_password,
      req.body.password,
    );
    if (verified) {
      // Respond with the user in JSON format (but without the hashed password)
      const { hashed_password, ...userWithoutHashedPassword } = user;
      const myPayload: MyPayload = {
        sub: user.id.toString(),
        firstname: user.firstname,
        lastname: user.lastname,
        // avatar: user.avatar,
        // isAdmin: user.is_admin,
      };

      const token = await jwt.sign(
        myPayload,
        process.env.APP_SECRET as string,
        {
          expiresIn: "1h",
        },
      );
      res.cookie("authToken", token, {
        // httpOnly: true,
        // secure: true,
        sameSite: "strict",
        maxAge: 60 * 60 * 1000,
      });

      res.json({ user: userWithoutHashedPassword, token });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Options de hachage (voir documentation : https://github.com/ranisalt/node-argon2/wiki/Options)
// Recommandations **minimales** de l'OWASP : https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword: RequestHandler = async (req, res, next) => {
  try {
    // Extraction du mot de passe de la requête
    const { password } = req.body;
    // Hachage du mot de passe avec les options spécifiées
    const hashedPassword = await argon2.hash(password, hashingOptions);
    // Remplacement du mot de passe non haché par le mot de passe haché dans la requête
    req.body.hashed_password = hashedPassword;
    // Oubli du mot de passe non haché de la requête : il restera un secret même pour notre code dans les autres actions
    req.body.password = undefined;
    next();
  } catch (err) {
    next(err);
  }
};

const checkAuthCookie: RequestHandler = (req, res, next) => {
  const { authToken } = req.cookies;
  try {
    if (authToken) {
      const verified = jwt.verify(authToken, process.env.APP_SECRET as string);
      if (verified) {
        res.status(200).json({ user: req.auth });
      } else {
        res.clearCookie("authToken");
        res.status(401).json({ message: "Token expired or invalid" });
      }
      next();
    } else {
      res.status(401).json({ message: "No token provided" });
    }
  } catch (err) {
    next(err);
  }
};

const verifyToken: RequestHandler = (req, res, next) => {
  try {
    // Vérifier la présence de l'en-tête "Authorization" dans la requête
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    // Vérifier que l'en-tête a la forme "Bearer <token>"
    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    // Vérifier la validité du token (son authenticité et sa date d'expération)
    // En cas de succès, le payload est extrait et décodé
    const decodedToken = jwt.verify(
      token,
      process.env.APP_SECRET as string,
    ) as MyPayload;
    req.auth = decodedToken;

    next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};
export default { login, hashPassword, verifyToken, checkAuthCookie };
