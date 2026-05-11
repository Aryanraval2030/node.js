import express from "express";
import { registerUser } from "../controllers/register.js";

export const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
