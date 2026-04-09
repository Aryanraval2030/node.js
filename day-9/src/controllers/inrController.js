import booksModel from "../models/inrModel.js";

// POST
export const addBook = async (req, res) => {
  try {
    const newBooks = await booksModel.insertMany(req.body);

    res.status(200).json({
      status: true,
      message: "books created in DB",
      data: newBooks,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};
