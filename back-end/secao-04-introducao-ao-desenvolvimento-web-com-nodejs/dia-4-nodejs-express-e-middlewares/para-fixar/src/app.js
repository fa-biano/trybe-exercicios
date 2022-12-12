const express = require('express');

// Por padrão, o Express vai encaminhar todos os erros lançados para serem tratados pelos middlewares de erros. 
// No entanto, erros lançados em middlewares assíncronos não são tratados do mesmo jeito.
// para resolver isso podemos instalar o pacote express-async-errors para mostrar os erros
require('express-async-errors'); // não precisa definir uma variável

const app = express();
const { validateTeam } = require('./middlewares/validateTeam');
const apiCredentials = require('./middlewares/apiCredentials');

let nextId = 3;
const teams = [
  { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
  { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  
  if (teams.some((team) => team.id === id)) {
    return next();
  }

  res.status(404).json({ message: 'Team id dont exist' });
};

app.use(express.json());
app.use(apiCredentials);

app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  res.json(team);
});

app.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };
  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);

  const updated = { id, ...req.body };

  teams.splice(index, 1, updated);
  res.status(201).json(updated);
});

app.delete('/teams/:id', existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);

  teams.splice(index, 1);
  res.sendStatus(204);
});

module.exports = app;
