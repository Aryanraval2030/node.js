import express from "express";
import { userLogin, userRegiCntro } from "../controllers/authController.js";
import {
  loginValidation,
  registerValidator,
} from "../validation/authValidation.js";
import { validate } from "../middlewares/authMiddleWare.js";
// import { middleWare } from "../middlewares/authMiddleWare.js";

export const userRoute = express.Router();

userRoute.post("/register", registerValidator,validate, userRegiCntro);
userRoute.post("/login", loginValidation,validate, userLogin);

// APIs

//create = http://localhost:5050/api/auth/register
//create = http://localhost:5050/api/auth/login