import type { RequestHandler } from "express";
import userRepository from "./userRepository";

// Import access to data

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch tous les users
    const users = await userRepository.readAll();

    // Répond avec les users au format JSON
    res.json(users);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetche un user particulier avec son id
    const userId = Number.parseInt(req.params.id);

    const user = await userRepository.read(userId);

    // Si l'utilisateur n'est pas trouvé, répondre avec une erreur 404
    // Sinon, répondre avec l'user au format json
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const edit: RequestHandler = async (req, res, next) => {
  try {
    const userId = Number.parseInt(req.params.id);

    // Vérifie si l'ID est valide
    if (Number.isNaN(userId)) {
      return;
    }

    const userData = {
      id: userId,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      pseudo: req.body.pseudo,
      email: req.body.email,
      zip_code: req.body.zip_code || null,
      hashed_password: req.body.hashed_password || null,
      is_gcu_accepted: req.body.is_gcu_accepted,
      is_admin: req.body.is_admin,
    };

    const affectedRows = await userRepository.update(userData);
    // Si l'utilisateur n'est pas trouvé, répondre avec une erreur 404
    // Sinon, répondre avec l'user au format json
    if (affectedRows === 0) {
      res.sendStatus(404); // Arrêtez ici
      return;
    }

    res.sendStatus(204); // Arrêtez ici aussi
  } catch (err) {
    next(err); // Passez l'erreur au middleware d'erreurs
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extret des datas de user depuis la requet body
    const newUser = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      pseudo: req.body.pseudo,
      email: req.body.email,
      zip_code: req.body.zip_code || null,
      city: req.body.city || null,
      hashed_password: req.body.hashed_password,
      is_gcu_accepted: req.body.is_gcu_accepted,
      is_admin: req.body.is_admin,
    };
    const insertId = await userRepository.create(newUser);
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    // Fetche un user spécifique à partir de l'ID fournie
    const id = Number(req.params.id);
    const user = await userRepository.delete(id);

    // Si l'utilisateur n'est pas trouvé, répondre avec une erreur 404
    // Sinon, répondre avec l'user au format json
    if (user == null) {
      res.sendStatus(404);
    } else {
      res.json(user);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};
export default { browse, read, edit, add, destroy };
