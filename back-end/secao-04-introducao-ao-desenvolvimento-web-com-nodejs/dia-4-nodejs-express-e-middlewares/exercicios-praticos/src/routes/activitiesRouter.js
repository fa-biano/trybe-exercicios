const express = require('express');
const activitiesRouter = express.Router();
const validateName = require('../middleware/validateName');

activitiesRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Funcionando...' });
});

activitiesRouter.post('/', validateName, (req, res) => {
  res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
});

module.exports = activitiesRouter;