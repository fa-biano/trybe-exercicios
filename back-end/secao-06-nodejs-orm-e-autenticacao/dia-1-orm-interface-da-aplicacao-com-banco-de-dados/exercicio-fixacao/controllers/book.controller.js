const bookService = require('../services/book.service');

const errorMsg = 'Algo deu errado';

const getAll = async (_req, res) => {
  try {
    const books = await bookService.getAll();
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
}

module.exports = {
  getAll,
  getById,
};