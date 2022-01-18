const Book = require("../models/bookModel");

exports.getLogin = (req, res) => {
  res.status(200).render("login");
};

exports.getSignUp = (req, res) => {
  res.status(200).render("signup");
};

exports.getBooks = async (req, res) => {
  const books = await Book.find();
  res.status(200).render("books", { books });
};
exports.getBook = async (req, res, next) => {
  const book = await Book.findOne({ title: req.params.title });
  if (!book) {
    return next("There is no book with that name.");
  }
  res.status(200).render("bookDetail", { title: `${book.title}`, book });
};
exports.createBook = (req, res) => {
  res.status(200).render("BookCreate");
};
