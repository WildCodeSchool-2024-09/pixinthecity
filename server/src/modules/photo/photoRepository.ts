import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Photo = {
  id: number;
  title: string;
  content: string;
  artist: string;
  dateoftheday: string;
  latitude: number;
  longitude: number;
  picture?: string;
  user_id: number;
};

class PhotoRepository {
  async create(photo: Omit<Photo, "id">) {
    // Execute the SQL INSERT query to add a new photo to the "photo" table
    const [result] = await databaseClient.query<Result>(
      "insert into photo (title, content, artist, dateoftheday, latitude, longitude, picture, user_id) values (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        photo.title,
        photo.content,
        photo.artist,
        photo.dateoftheday,
        photo.latitude,
        photo.longitude,
        photo.picture,
        photo.user_id,
      ],
    );

    // Return the ID of the newly inserted photo
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(photoId: number) {
    // Execute the SQL SELECT query to retrieve a specific photo by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from photo where id = ?",
      [photoId],
    );

    // Return the first row of the result, which represents the photo
    return rows[0] as Photo;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all photos from the "photo" table
    const [rows] = await databaseClient.query<Rows>("select * from photo");

    // Return the array of photos
    return rows as Photo[];
  }
}

export default new PhotoRepository();
