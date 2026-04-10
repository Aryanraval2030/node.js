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

export const getBooks = async (req, res) => {
  try {
    const { search = "", sortBy = "price", order = "asc" } = req.body;

    //for searching
    const searchQuery = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { title: { $regex: search, $options: "i" } },
      ],
    };
    //for shorting

    const sortOrder = order === "asc" ? 1 : -1;
    const books = await booksModel
      .find(search ? searchQuery : {})
      .sort({ [sortBy]: sortOrder });

    res.status(200).json({
      status: true,
      results: books.length,
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: error.message,
    });
  }
};
