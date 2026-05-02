import express from "express";
import { addToCart } from "../controllers/cartController.js";
import { middleWare } from "../middlewares/authMiddleWare.js";

export const cartRoutes = express.Router();

cartRoutes.post("/add", middleWare, addToCart);
