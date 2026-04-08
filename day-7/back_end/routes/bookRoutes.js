import express from "express";
import {
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

const router = express.Router();

router.post("/addbooks", addBook);
router.put("/update", updateBook);
router.delete("/deletebook", deleteBook);

export default router;
