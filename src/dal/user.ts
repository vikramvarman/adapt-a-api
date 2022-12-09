import { foodDb } from "./../common/db";
import pgPromise = require("pg-promise");
import { User } from "src/models/user";

export async function createUser(
  username: string,
  hashedPassword: string
): Promise<User> {
  const query = pgPromise.as.format(
    `
      INSERT INTO users(
        username,
        password
      )
      VALUES(
        $(username),
        $(hashedPassword)
      )
        returning *
      `,
    {
      username,
      hashedPassword,
    }
  );

  return await foodDb.one(query);
}

export async function getUserByUsername(username: string): Promise<User> {
  const query = pgPromise.as.format(
    `
      select 
        * from users
      where 
        username=$(username)
      
      `,
    {
      username,
    }
  );

  return await foodDb.one(query);
}
