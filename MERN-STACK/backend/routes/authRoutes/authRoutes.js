import express from "express";
import {
  loginUser,
  registerUser,
} from "../../controllers/authControllers/authControllers.js";
import { registerValidation } from "../../validation/signupValidation.js";

export const userRoutes = express.Router();

userRoutes.post("/register", registerValidation, registerUser);
userRoutes.post("/login", loginUser);
