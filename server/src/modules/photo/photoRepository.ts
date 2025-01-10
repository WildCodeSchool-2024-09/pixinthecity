import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

type Photo = {
  id: number;
  title: string;
  content: string;
  picture: string;
};

class PhotoRepository {
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
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from photo");

    // Return the array of photos
    return rows as Photo[];
  }
}

export default new PhotoRepository();
