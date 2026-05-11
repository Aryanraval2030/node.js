import express from "express";
import { loginUser, registerUser } from "../../controllers/authControllers/authControllers.js";

export const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
