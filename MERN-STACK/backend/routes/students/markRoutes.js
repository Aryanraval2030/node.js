import express from "express";
import { addMarks } from "../../controllers/studentData/markControllers.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";
import { markMiddlware } from "../../middleware/markMiddlware.js";

export const markRoutes = express.Router();

markRoutes.post("/marks", authMiddleware, markMiddlware, addMarks);