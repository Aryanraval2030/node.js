import booksModel from "../models/bookModel.js";

// POST
export const addBook = async (req, res) => {
  try {
    const newBooks = new booksModel(req.body);
    await newBooks.save();

    res.status(200).json({
      status: true,
      message: "books created in DB",
      data: newBooks,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// UPDATE
export const updateBook = async (req, res) => {
  try {
    const id = req.query.id;

    const updateBook = await booksModel.findById(id);
    if (!updateBook) {
      return res
        .status(400)
        .json({ status: false, message: "books not found" });
    }

    updateBook.title = req.body.title ?? updateBook.title;
    updateBook.author = req.body.author ?? updateBook.author;
    updateBook.price = req.body.price ?? updateBook.price;

    await updateBook.save();

    res.status(200).json({
      status: true,
      message: "Book updated",
      data: updateBook,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

// DELETE
export const deleteBook = async (req, res) => {
  try {
    const id = req.query.id;

    const deleteBook = await booksModel.findByIdAndDelete(id);

    if (!deleteBook) {
      return res
        .status(400)
        .json({ status: false, message: "books not found" });
    }

    res.status(200).json({
      status: true,
      message: "book deleted",
      data: deleteBook,
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};
