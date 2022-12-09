import express, { Router } from "express";
import { FoodRouter } from "./pkg/food/route";
import { UserRouter } from "./pkg/user/route";
const router = Router();

router.use("/user", UserRouter);

router.use("/food", FoodRouter);

export default router;
