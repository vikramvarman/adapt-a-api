import { foodDb } from "./../common/db";
import pgPromise = require("pg-promise");
import { Food } from "src/models/food";

export async function getAll(): Promise<Food[]> {
  const query = pgPromise.as.format(`select * from food`);
  return await foodDb.any(query);
}

export async function getById(id: string): Promise<Food> {
  const query = pgPromise.as.format(`select * from food where id= $(id)`, {
    id,
  });
  return await foodDb.oneOrNone(query);
}

export async function findByIngredients(
  ingredients: string[]
): Promise<Food[]> {
  const query = pgPromise.as.format(
    `
        select * 
        from food
        where 
        ingredients <@ $(ingredients)::text[]
    `,
    {
      ingredients,
    }
  );
  return await foodDb.any(query);
}

export async function findByMaxTotalTime(maxTime: number): Promise<Food[]> {
  const query = pgPromise.as.format(
    `
        select 
        *,
        (prep_time + cook_time) as total_time
        from food
        where total_time <=  $(maxTime)
      `,
    {
      maxTime,
    }
  );
  return await foodDb.any(query);
}
