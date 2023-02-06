import express from 'express';

const app = express();

const { PORT = 3000 } = process.env;

app.use(express.json());

app.get('/', (_req, res) => {
  res.status(200).send('Teste');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))