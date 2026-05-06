import express, { Router } from 'express';
import { Register, userLogin } from '../Controllers/regiController.js';
import { createTask, deleteTask, getSingleTask, updateTask } from '../Controllers/productController.js';
import { middleWare } from '../Middleware/authMiddlewares.js';
import { get } from 'mongoose';

const router = express.Router()

//Register And Login
router.post("/Register", Register)
router.post("/login", userLogin)

//Task
router.post("/create",middleWare,  createTask)
router.get("/getByid/:id",middleWare, getSingleTask)
router.get("/getSearch/:id",middleWare,get)
router.put("/updateTask/:id",middleWare,updateTask)
router.delete("/deleteTask/:id",middleWare, deleteTask)
export default router;