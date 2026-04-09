import express from "express";
import { addBook } from "../controllers/inrController.js";

const router = express.Router();

router.post("/addbooks", addBook);

export default router;
