const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

const moviesPath = path.resolve(__dirname, './movies.json');

const readFile = async () => {
  try {
    const data = await fs.readFile(moviesPath);
    return JSON.parse(data);
  } catch (err) {
    console.error(`Arquivo não pôde ser lido: ${err}`);
  }
}

app.get('/movies/search', async (req, res) => {
  try {
    const movies = await readFile();
    const { q } = req.query;

    if(q) {
      const filteredMovies = movies.filter((element) => element.movie.includes(q));
      return res.status(200).json(filteredMovies);
    }

    res.status(200).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const { id } = req.params;
    const movie = movies.find((element) => element.id === Number(id));
    res.status(200).json(movie);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.post('/movies', async (req, res) => {
  try {
    const movies = await readFile();
    const newMovie = req.body;
    const updateMovies = [...movies, {id: movies.length + 1, ...newMovie}];
    await fs.writeFile(moviesPath, JSON.stringify(updateMovies));
    res.status(201).json(updateMovies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const { id } = req.params;
    const { movies: movie, price } = req.body;

    const index = movies.findIndex((element) => element.id === Number(id));
    movies[index] = { id: Number(id), movie, price };
    const updateMovies = JSON.stringify(movies, null, 2);

    await fs.writeFile(moviesPath, updateMovies);

    res.status(200).json(movies[index]);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const movies = await readFile();
    const { id } = req.params;

    const updateMovies = movies.filter((movie) => movie.id !== Number(id));
    await fs.writeFile(moviesPath, JSON.stringify(updateMovies, null, 2));

    res.status(204).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = { app };
