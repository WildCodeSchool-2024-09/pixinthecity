import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type User = {
  id: number;
  firstname: string;
  lastname: string;
  pseudo: string;
  email: string;
  zip_code?: number;
  city?: string;
  user_password: string;
  avatar?: string;
  is_gcu_accepted: boolean;
};

class UserRepository {
  //   // The C of CRUD - Create operation

  async create(user: Omit<User, "id">) {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await databaseClient.query<Result>(
      "insert into user (firstname, lastname, pseudo, email, zip_code, city, user_password, avatar, is_gcu_accepted) values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.pseudo,
        user.email,
        user.zip_code ?? null,
        user.city ?? null,
        user.user_password,
        user.avatar ?? null,
        user.is_gcu_accepted,
      ],
    );

    // Return the ID of the newly inserted item
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  //   async read(id: number) {
  //     // Execute the SQL SELECT query to retrieve a specific item by its ID
  //     const [rows] = await databaseClient.query<Rows>(
  //       "select * from item where id = ?",
  //       [id],
  //     );

  //     // Return the first row of the result, which represents the item
  //     return rows[0] as Item;
  //   }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await databaseClient.query<Rows>("select * from user");

    // Return the array of users
    return rows as User[];
  }

  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  // async update(item: Item) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an item by its ID

  // async delete(id: number) {
  //   ...
  // }
}

export default new UserRepository();
