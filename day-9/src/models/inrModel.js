import mongoose from "mongoose";

const booksSchema = new mongoose.Schema({
  name: String,
  title: String,
  price: Number,
});

const booksModel = mongoose.model("searchingBook", booksSchema);

export default booksModel;
