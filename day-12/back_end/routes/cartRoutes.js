import express from "express";
import { addToCart } from "../controllers/cartController.js";
import { middleWare } from "../middlewares/authMiddleWare.js";

export const cartRoutes = express.Router();

cartRoutes.post("/add", middleWare, addToCart);


// add to cart http://localhost:5050/api/add