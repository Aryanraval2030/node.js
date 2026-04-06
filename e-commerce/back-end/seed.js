import dotenv from "dotenv";
import mongoose from "mongoose";
import products from "./data/products.js";
import productModel from "./models/productModel.js";

dotenv.config();
console.log(process.env.MONGO_URI);
mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("DB connected");
    await productModel.deleteMany();
    await productModel.insertMany(products);
    console.log("data instantly successfully");
    process.exit();
  })
  .catch((err) => console.log(err));
