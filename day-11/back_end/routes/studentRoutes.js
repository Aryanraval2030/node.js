import express from "express";
import {
  bulkCreateStu,
  createStudent,
  deleteStudent,
  getAllStudents,
  getStudentData,
  updateStudent,
  updateStudentPartial,
} from "../controllers/studentController.js";

const routes = express.Router();

routes.post("/student", createStudent); //http://localhost:6419/api/student
routes.post("/studentBulk", bulkCreateStu); //http://localhost:6419/api/studentBulk
routes.put("/student/:id", updateStudent); //http://localhost:6419/api/student
routes.put("/updateStuPartial/:id", updateStudentPartial); //http://localhost:6419/api/updateStuPartial
routes.delete("/student/:id", deleteStudent); //http://localhost:6419/api/student/69f0c07a1b1ec8072395a138
routes.get("/student/:id", getAllStudents); //http://localhost:6419/api/getAllStudents/69f1e8d92493660183d2c9da

export default routes;
