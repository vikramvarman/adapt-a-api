import express from "express";
import { authenticate } from "src/common/middleware/auth";
import { T, TPublic } from "src/common/middleware/handler";
import { login, signUp } from "./handlers";

export const UserRouter = express.Router();

UserRouter.post("/login", TPublic(login));
UserRouter.post("/signup", TPublic(signUp));
