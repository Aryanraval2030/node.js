import express from "express";
import {
  addBulkPro,
  addProduct,
  getProduct,
  getSinglePro,
} from "../controllers/proContro.js";

const proRoute = express.Router();

proRoute.post("/product", addProduct);
proRoute.get("/product/:id", getProduct);
proRoute.get("/sglProduct/:id", getSinglePro);
proRoute.post("/bulkProducts", addBulkPro);

export default proRoute;

//prodects links:-

//post = // http://localhost:5050/api/product
//get = http://localhost:5050/api/product/ category id
// get = get all product // http://localhost:5050/api/product
// get = perticuler product find // http://localhost:5050/api/sglProduct/pass id
