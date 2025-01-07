import type { RequestHandler } from "express";
import photoRepository from "./photoRepository";

// Import access to data

// The B of BREAD - Browse (Read All) operation
const browse: RequestHandler = async (req, res, next) => {
  try {
    // Fetch all items
    const photos = await photoRepository.readAll();

    // Respond with the items in JSON format
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
    const photos = await photoRepository.read(photoId);

    // If the photo is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (photos == null) {
      res.sendStatus(404);
    } else {
      res.json(photos);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

// The A of BREAD - Add (Create) operation
// const add: RequestHandler = async (req, res, next) => {
//   try {
//     // Extract the item data from the request body
//     const newItem = {
//       title: req.body.title,
//       user_id: req.body.user_id,
//     };

//     // Create the item
//     const insertId = await itemRepository.create(newItem);

//     // Respond with HTTP 201 (Created) and the ID of the newly inserted item
//     res.status(201).json({ insertId });
//   } catch (err) {
//     // Pass any errors to the error-handling middleware
//     next(err);
//   }
// };

export default { browse, read };
