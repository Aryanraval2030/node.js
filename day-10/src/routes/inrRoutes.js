import express from "express";
import { addUser } from "../controllers/inrcontroller.js";

const userRoutes = express.Router();

userRoutes.post("/createUser", addUser);

export default userRoutes;