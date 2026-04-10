import express from "express";
import { addBook, getBooks } from "../controllers/inrController.js";

const router = express.Router();

router.post("/addbooks", addBook);
router.get("/books", getBooks);

export default router;
