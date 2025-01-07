import databaseClient from "../../../database/client";

import type { Rows } from "../../../database/client";

type Photo = {
  id: number;
  title: string;
  content: string;
  picture: number;
};

class PhotoRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>("select * from photo");

    // Return the array of items
    return rows as Photo[];
  }
}

export default new PhotoRepository();
