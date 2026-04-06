import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  brand: String,
  stock: Number,
});

export default mongoose.model("clothesPro", productsSchema);
