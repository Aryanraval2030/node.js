import express from "express";
import {
  createStudent,
  getStudentData,
  updateStudent,
} from "../controllers/studentController.js";

const routes = express.Router();

routes.post("/student", createStudent);
routes.put("/student/bulk/:id", updateStudent);
// routes.delete("/student", deleteStudent);
routes.get("/student/:id", getStudentData);

export default routes;
