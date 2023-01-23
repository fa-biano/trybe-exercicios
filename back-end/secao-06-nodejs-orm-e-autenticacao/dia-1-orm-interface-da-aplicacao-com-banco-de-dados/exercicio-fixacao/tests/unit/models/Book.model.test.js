const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
 } = require('sequelize-test-helpers');

 const BookModel = require('../../../models/book.model');

 describe('O model de Book', function () {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('possui o nome "Book"', function () {
    checkModelName(Book, 'Book');
  });

  describe('possui as propriedades "title", "author", "pageQuantity" e "publisher"', function () {
    ['title', 'author', 'pageQuantity', 'publisher'].forEach(checkPropertyExists(book));
  });
 });