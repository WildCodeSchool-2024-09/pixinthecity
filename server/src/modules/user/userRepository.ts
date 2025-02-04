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
  hashed_password: string;
  is_gcu_accepted: boolean;
  is_admin: boolean;
};

class UserRepository {
  //   // The C of CRUD - Create operation

  async create(user: Omit<User, "id">): Promise<number> {
    // Execute the SQL INSERT query to add a new user to the "user" table
    const [result] = await databaseClient.query<Result>(
      "insert into user (firstname, lastname, pseudo, email, zip_code, city, hashed_password, is_gcu_accepted, is_admin) values (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [
        user.firstname,
        user.lastname,
        user.pseudo,
        user.email,
        user.zip_code ?? null,
        user.city ?? null,
        user.hashed_password,
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

  async readByEmailWithPassword(email: string) {
    // Execute the SQL SELECT query to retrieve a specific user by its email
    const [rows] = await databaseClient.query<Rows>(
      "select * from user where email = ?",
      [email],
    );

    // Return the first row of the result, which represents the user
    return rows[0] as User;
  }
  // The U of CRUD - Update operation
  // TODO: Implement the update operation to modify an existing item

  async update(user: User) {
    const { firstname, lastname, pseudo, email, zip_code, city, is_admin, id } =
      user;

    const query =
      "UPDATE user SET firstname = ?, lastname = ?, pseudo = ?, email = ?, zip_code = ?, city = ?,  is_admin = ? WHERE id = ?";
    const values = [
      firstname,
      lastname,
      pseudo,
      email,
      zip_code,
      city,
      is_admin,
      id,
    ];

    const [result] = await databaseClient.query<Result>(query, values);
    return result.affectedRows;
  }
  async delete(id: number) {
    // Execute the SQL DELETE query to delete an existing user from the "user" table
    const [result] = await databaseClient.query<Result>(
      "delete from user where id = ?",
      [id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

export default new UserRepository();
