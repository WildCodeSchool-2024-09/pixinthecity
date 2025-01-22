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
  is_admin: boolean;
};

class UserRepository {
  //   // The C of CRUD - Create operation

  async create(user: Omit<User, "id">): Promise<number> {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await databaseClient.query<Result>(
      "insert into user (firstname, lastname, pseudo, email, zip_code, city, user_password, avatar, is_gcu_accepted, is_admin) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
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
        user.is_admin,
      ],
    );

    // Return the ID of the newly inserted user
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id: number) {
    // Execute the SQL SELECT query to retrieve a specific user by its ID
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where id = ?",
      [id],
    );

    // Return the first row of the result, which represents the user
    return rows[0] as User;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all users from the "user" table
    const [rows] = await databaseClient.query<Rows>("select * from user");

    // Return the array of users
    return rows as User[];
  }

  async readByEmailWithPassword(email: string, user_password: string) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ? and user_password = ?",
      [email, user_password],
    );
    // console.log(
    //   `select * from user where email = ${email} and user_password = ${user_password}`,
    // );
    // Return the first row of the result, which represents the user
    return rows[0] as User;
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
