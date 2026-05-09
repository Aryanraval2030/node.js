import express from "express";
import { userLogin, userRegister } from "../controllers/authController.js";

export const userRoutes = express.Router();

userRoutes.post("/register", userRegister);
userRoutes.post("/login", userLogin);
