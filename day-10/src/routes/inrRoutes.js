import express from "express";
import {
  addUser,
  deleteUser,
  updateUser,
} from "../controllers/inrcontroller.js";

const userRoutes = express.Router();

userRoutes.post("/user", addUser);
userRoutes.put("/user/:id", updateUser);
userRoutes.delete("/user/:id", deleteUser);

export default userRoutes;
