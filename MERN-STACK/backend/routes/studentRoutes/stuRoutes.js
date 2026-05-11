import express from "express";
import {
  createStud,
  deleteStud,
  getSingleData,
  getStud,
  updateStud,
} from "../../controllers/studentControllers/createStudent.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";

export const studRoutes = express.Router();

studRoutes.post("/students", authMiddleware, createStud);
studRoutes.get("/students", authMiddleware, getStud);
studRoutes.get("/students/:id", authMiddleware, getSingleData);
studRoutes.put("/students/:id", authMiddleware, updateStud);
studRoutes.delete("/students/:id",authMiddleware, deleteStud);
