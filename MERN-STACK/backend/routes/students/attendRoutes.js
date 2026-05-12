import express from "express";
import { addAttendance } from "../../controllers/studentData/attendance.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { roleMiddleware } from "../../middleware/roleMIddleware.js";

export const attendRoutes = express.Router();
attendRoutes.post("/attendance", authMiddleware, roleMiddleware, addAttendance);
