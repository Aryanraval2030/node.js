import mongoose from "mongoose";

//categorySchema of items
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const cateEcomPro = mongoose.model("categories", categorySchema);

//productSchema
const proSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  discount: {
    type: Number,
  },
});

export const proEco = mongoose.model("products", proSchema);

// buyer Schema for register
