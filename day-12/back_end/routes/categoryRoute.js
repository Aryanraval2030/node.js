import express from "express";
import {
  addCategory,
  getByIdCate,
  getCategory,
} from "../controllers/categoryContro.js";
import { addProduct } from "../controllers/proContro.js";

const route = express.Router();

// for category
route.post("/product", addCategory); // http://localhost:5050/api/product
route.get("/product", getCategory); // get all categories // http://localhost:5050/api/product
route.get("/product/:id", getByIdCate); // perticuler category find // http://localhost:5050/api/product/pass id

// for product

route.post("/product", addProduct);

export default route;
