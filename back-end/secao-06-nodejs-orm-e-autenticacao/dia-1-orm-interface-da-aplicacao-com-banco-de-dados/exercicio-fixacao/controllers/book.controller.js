const bookService = require('../services/book.service');

const errorMsg = 'Algo deu errado';

const getAll = async (req, res) => {
  try {
    const { author } = req.query;
    let books

    if (author) {
      books = await bookService.getByAuthor(author);
    } else {
      books = await bookService.getAll();
    }

    return res.status(200).json(books);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: errorMsg });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.getById(id);

    if (!book) return res.status(404).json({ message: 'book not found' });
    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: errorMsg });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, pageQuantity, publisher } = req.body;
    const newBook = await bookService.createBook(title, author, pageQuantity, publisher);
    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: errorMsg });
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, pageQuantity, publisher } = req.body;

    const book = await bookService.updateBook(id, title, author, pageQuantity, publisher);

    if (!book) return res.status(404).json({ message: 'book not found'});
    return res.status(200).json({ message: 'book updated sucessfully!'});
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: errorMsg });
  }
};

const removeBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await bookService.removeBook(id);

    if (!book) return res.status(404).json({ message: 'book not found'});
    return res.status(200).json({ message: 'book removed with sucess!'});
  } catch (e) {
    console.log(e.message);
    return res.status(500).json({ message: errorMsg });
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  removeBook,
};