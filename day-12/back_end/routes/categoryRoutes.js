import express from "express";
import {
  addCategory,
  getByIdCate,
  getCategory,
} from "../controllers/categoryContro.js";
// import {
//   addBulkPro,
//   addProduct,
//   getProduct,
//   getSinglePro,
// } from "../controllers/proContro.js";

const route = express.Router();

// for category
route.post("/category", addCategory);
route.get("/allCategory", getCategory);
route.get("/category/:id", getByIdCate);

// for product

// route.post("/product", addProduct);
// route.get("/product/:id", getProduct);
// route.get("/sglProduct/:id", getSinglePro);
// route.post("/bulkProducts", addBulkPro);

export default route;

//----------------------------

//category links:-

//post = // http://localhost:5050/api/category
//get = http://localhost:5050/api/allCategory
// get = get all categories // http://localhost:5050/api/category
// get = perticuler category find // http://localhost:5050/api/category/pass id

//----------------------------
