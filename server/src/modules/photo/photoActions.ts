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
    const photoId = Number(req.params.id);
    const photo = await photoRepository.read(photoId);

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

    const picture = req.file;
    const userId = req.body.user_id || null;
    const newPhoto = {
      title: req.body.title,
      content: req.body.content,
      artist: req.body.artist,
      dateoftheday: req.body.date,
      latitude: req.body.latitude || 45.7597,
      longitude: req.body.longitude || 4.8422,
      picture: req.file?.filename,
      user_id: req.body.user_id || null,
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

export default { browse, add, read };
