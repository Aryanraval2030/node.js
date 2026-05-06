import express from "express";
import { userRegister } from "../controllers/userContro.js";

export const userRoutes = express.Router();

userRoutes.post("/register", userRegister);
