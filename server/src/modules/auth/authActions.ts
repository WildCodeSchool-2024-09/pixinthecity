import argon2 from "argon2";
import type { RequestHandler } from "express";
import userRepository from "../user/userRepository";

import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
// Importe l'access aux data

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
      // Répond avec un user au format json (sans hashed password)
      const { hashed_password, ...userWithoutHashedPassword } = user;
      const myPayload = {
        sub: user.id.toString(),
      };

      const token = await jwt.sign(
        myPayload,
        process.env.APP_SECRET as string,
        {
          expiresIn: "1h",
        },
      );

      res.json({ user: userWithoutHashedPassword, token });
    } else {
      res.sendStatus(422);
    }
  } catch (err) {
    next(err);
  }
};

const hashingOptions = {
  type: argon2.argon2id,
  memoryCost: 19 * 2 ** 10 /* 19 Mio en kio (19 * 1024 kio) */,
  timeCost: 2,
  parallelism: 1,
};

const hashPassword: RequestHandler = async (req, res, next) => {
  try {
    // Extraction du mot de passe (mdp) de la requête
    const { password } = req.body;
    // Hachage du mdp avec les options spécifiées
    const hashedPassword = await argon2.hash(password, hashingOptions);
    // Remplacement du mdp non haché par le mot de passe haché dans la requête
    req.body.hashed_password = hashedPassword;
    // Oubli du mdp non haché de la requête : il restera un secret même pour notre code dans les autres actions
    req.body.password = undefined;
    next();
  } catch (err) {
    next(err);
  }
};
export default { login, hashPassword };
