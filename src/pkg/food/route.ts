import { foodGetAll } from "./handlers/foodGetAll";

import express from "express";
import { authenticate } from "src/common/middleware/auth";
import { T } from "src/common/middleware/handler";

export const FoodRouter = express.Router();

FoodRouter.get("/all", authenticate(), T(foodGetAll));
