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
export const proSchema = new mongoose.Schema({
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
    type: mongoose.Schema.types.objectId,
    required: true,
  },
  discount: {
    type: Number,
  },
});

export const proEco = await mongoose.model("products", proSchema);

// name , price , rate , img , description , categoryId , descount
