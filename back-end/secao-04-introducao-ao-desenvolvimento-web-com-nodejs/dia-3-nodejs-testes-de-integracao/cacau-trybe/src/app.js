const express = require('express');
const app = express();
const cacauTrybe = require('../src/cacauTrybe');

app.use(express.json());

app.get('/chocolate', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
});

app.get('/chocolate/total', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ totalChocolates: chocolates.length });
})

app.get('/chocolate/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await cacauTrybe.filterChocolatesByName(name);

  if(!chocolates) return res.status(404).json([]);
  return res.status(200).json({chocolates});
});

app.get('/chocolate/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacauTrybe.getChocolateById(Number(id));
  if (!chocolate) return res.status(404).json({ message: 'Chocolate not found' });
  return res.status(200).json({ chocolate });
});

app.get('/chocolate/brand/:brandId', async (req, res) => {
  const { brandId  } = req.params;
  const chocolates = await cacauTrybe.getChocolatesByBrand(Number(brandId));
  return res.status(200).json({ chocolates });
});

app.put('/chocolate/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;

  const chocolates = await cacauTrybe.updateChocolateById(Number(id), name, brandId);
  if (!chocolates) return res.status(404).json({ message: 'Chocolate not found' });
  return res.status(200).json({ chocolates });
})

module.exports = app;
