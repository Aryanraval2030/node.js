import express from "express";
import {
  createTask,
  dltTask,
  getedHere,
  getTask,
  updateTask,
} from "../controllers/userContro.js";
import { middleWare } from "../middleware/userAuth.js";

export let taskRoutes = express.Router();

taskRoutes.post("/tasks", middleWare, createTask);
taskRoutes.get("/get", middleWare, getTask);
taskRoutes.put("/update/:id", middleWare, updateTask);
taskRoutes.get("/geted/:id", middleWare, getedHere);
taskRoutes.delete("/delete/:id", middleWare, dltTask);
