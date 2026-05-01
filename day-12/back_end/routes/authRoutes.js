import express from "express";
import { userLogin, userRegiCntro } from "../controllers/authController.js";
// import { middleWare } from "../middlewares/authMiddleWare.js";

export const userRoute = express.Router();

userRoute.post("/register", userRegiCntro);
userRoute.post("/login", userLogin);

// APIs

//create = http://localhost:5050/api/auth/register
