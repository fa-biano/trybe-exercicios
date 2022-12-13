const express = require('express');
const activitiesRouter = express.Router();

const validateName = require('../middleware/validateName');
const validatePrice = require('../middleware/validatePrice');
const validateDescription = require( '../middleware/validateDescription');
const validateCreatedAt = require('../middleware/validateCreatedAt');
const validateRating = require('../middleware/validateRating');
const validateDifficulty = require('../middleware/validateDifficulty');

activitiesRouter.get('/', (req, res) => {
  res.status(200).json({ message: 'Funcionando...' });
});

activitiesRouter.post('/',
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  (_req, res) => {
  res.status(201).json({ message: "Atividade cadastrada com sucesso!" });
});

module.exports = activitiesRouter;