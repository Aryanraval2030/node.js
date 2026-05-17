import express from "express";
import { assingmentContro } from "../../controllers/studentData/assignmentControllers.js";
import { roleMiddleware } from "../../middleware/roleMIddleware.js";
import { authMiddleware } from "../../middleware/authMiddleware.js";

export const assingmentRoutes = express.Router();

assingmentRoutes.post(
  "/assignments",
  authMiddleware,
  roleMiddleware,
  assingmentContro,
);
