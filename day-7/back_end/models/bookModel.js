import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
});

const booksModel = mongoose.model("books", booksSchema);

export default booksModel;
