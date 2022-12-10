const express = require('express');
const app = express();
const cacauTrybe = require('../src/cacauTrybe');

app.get('/chocolate', async (req, res) => {
  const chocolates = await cacauTrybe.getAllChocolates();
  res.status(200).json({ chocolates });
})

module.exports = app;
