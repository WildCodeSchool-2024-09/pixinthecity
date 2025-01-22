import argon2 from "argon2";
import type { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
// Import access to data
import userRepository from "../user/userRepository";
const login: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific user from the database based on the provided email
    const user = await userRepository.readByEmailWithPassword(
      req.body.email,
      req.body.password,
    );
    if (user == null) {
      res.sendStatus(422);
      return;
    }
    const { user_password, ...userWithoutHashedPassword } = user;
    const myPayload = {
      sub: user.id.toString(),
      // isAdmin: user.is_admin,
    };
    const token = await jwt.sign(myPayload, process.env.APP_SECRET as string, {
      expiresIn: "1h",
    });
    //console.log(token);

    res.status(200).json({
      token,
      user: userWithoutHashedPassword,
    });
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

export default { login };
