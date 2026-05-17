import express from "express";
import {
  createTeacher,
  updateTeacher,
} from "../../controllers/teacherControllers.js/teacherContro.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { roleMiddleware } from "../../middleware/roleMIddleware.js";

export const teachRoutes = express.Router();

teachRoutes.post("/teachers", authMiddleware, roleMiddleware, createTeacher);
teachRoutes.put("/teachers/:id", authMiddleware, roleMiddleware, updateTeacher);
