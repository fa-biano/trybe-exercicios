const express = require('express');
const Book = require('./controllers/book.controller');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/books', Book.getAll);
app.get('/books/:id', Book.getById);
app.post('/books', Book.createBook);
app.put('/books/:id', Book.updateBook);

app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`));
