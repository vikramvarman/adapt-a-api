import { foodGetAll } from "./handlers/foodGetAll";
import { foodGet } from "./handlers/foodGet";
import { foodFindByIngredients } from "./handlers/foodFindByIngredients";

import { authenticate } from "src/common/middleware/auth";
import { T } from "src/common/middleware/handler";
import express from "express";

export const FoodRouter = express.Router();

FoodRouter.get("/all", authenticate(), T(foodGetAll));
FoodRouter.get("/find/ingredients", authenticate(), T(foodFindByIngredients));
FoodRouter.get(
  "/find/total-time/:time",
  authenticate(),
  T(foodFindByIngredients)
);
FoodRouter.get("/:id", authenticate(), T(foodGet));
