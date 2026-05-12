import express from "express";
import { createCourse } from "../../controllers/courseControllers/createCourse.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { roleMiddleware } from "../../middleware/roleMIddleware.js";

export const courseRoutes = express.Router();

courseRoutes.post("/courses", authMiddleware, roleMiddleware, createCourse);
