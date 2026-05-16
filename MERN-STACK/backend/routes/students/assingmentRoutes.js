import express from "express";
import { assingmentContro } from "../../controllers/studentData/assignmentControllers.js";

export const assingmentRoutes = express.Router();

assingmentRoutes.post("/assignments", assingmentContro);
