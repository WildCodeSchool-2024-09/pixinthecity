import type { RequestHandler } from "express";
import photoRepository from "./photoRepository";

// Import access to data

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all photos
    const photos = await photoRepository.readAll();

    // Respond with the photos in JSON format
    res.json(photos);
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The R of BREAD - Read operation
const read: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific item based on the provided ID
    const photoid = Number(req.params.id);
    const photo = await photoRepository.read(photoid);

    // If the photo is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (photo == null) {
      res.sendStatus(404);
    } else {
      res.json(photo);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
const add: RequestHandler = async (req, res, next) => {
  try {
    // Extract the photo data from the request body
    const { title, content, artist, date, user_id } = req.body;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    const defaultLatitude = 45.7597; // Latitude par défaut (centre de Lyon)
    const defaultLongitude = 4.8422; // Longitude par défaut (centre de Lyon)

    const newLatitude =
      latitude !== undefined ? Number.parseFloat(latitude) : defaultLatitude;
    const newLongitude =
      longitude !== undefined ? Number.parseFloat(longitude) : defaultLongitude;

    const newPhoto = {
      title,
      content,
      artist,
      dateoftheday: date,
      latitude: newLatitude, // Toujours utiliser les coordonnées par défaut
      longitude: newLongitude,
      picture: req.file?.filename || null, // Nom du fichier si présent
      user_id: user_id || null, // Gérer les utilisateurs non connectés
    };

    // Create the photo
    const insertId = await photoRepository.create(newPhoto);

    // Respond with HTTP 201 (Created) and the ID of the newly inserted photo
    res.status(201).json({ insertId });
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

const destroy: RequestHandler = async (req, res, next) => {
  try {
    // Fetch a specific photo based on the provided ID
    const photoid = Number(req.params.id);
    const photo = await photoRepository.delete(photoid);

    // If the photo is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the photo in JSON format
    if (photo == null) {
      res.sendStatus(404);
    } else {
      res.json(photo);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// Export them to import them somewhere else

export default { browse, read, add, destroy };
