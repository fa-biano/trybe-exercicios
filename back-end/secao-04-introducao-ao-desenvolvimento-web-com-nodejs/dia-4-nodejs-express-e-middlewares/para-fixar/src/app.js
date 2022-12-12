const express = require('express');

// Por padrão, o Express vai encaminhar todos os erros lançados para serem tratados pelos middlewares de erros. 
// No entanto, erros lançados em middlewares assíncronos não são tratados do mesmo jeito.
// para resolver isso podemos instalar o pacote express-async-errors para mostrar os erros
require('express-async-errors'); // não precisa definir uma variável

const teamsRouter = require('./routes/teamsRouter');

const app = express();

app.use(express.json());
app.use('/teams', teamsRouter);

app.use((err, _req, _res, next) => {
  console.error(err.stack);
  next(err);
});

app.use((err, _req, res, _next) => {
  res.status(500).json({ message: `Algo deu errado! Mensagem: ${err.message}` });
});

// app.use(apiCredentials);

// app.get('/teams', (req, res) => res.json(teams));

// app.get('/teams/:id', existingId, (req, res) => {
//   const id = Number(req.params.id);
//   const team = teams.find(t => t.id === id);
//   res.json(team);
// });

// app.post('/teams', validateTeam, (req, res) => {
//   if (
//     // confere se a sigla proposta está inclusa nos times autorizados
//     !req.teams.teams.includes(req.body.sigla)
//     // confere se já não existe um time com essa sigla
//     && teams.every((t) => t.sigla !== req.body.sigla)
//   ) {
//     return res.sendStatus(401);
//   }

//   const team = { id: nextId, ...req.body };
//   teams.push(team);
//   nextId += 1;
//   res.status(201).json(team);
// });

// app.put('/teams/:id', existingId, validateTeam, (req, res) => {
//   const id = Number(req.params.id);
//   const team = teams.find(t => t.id === id);
//   const index = teams.indexOf(team);

//   const updated = { id, ...req.body };

//   teams.splice(index, 1, updated);
//   res.status(201).json(updated);
// });

// app.delete('/teams/:id', existingId, (req, res) => {
//   const id = Number(req.params.id);
//   const team = teams.find(t => t.id === id);
//   const index = teams.indexOf(team);

//   teams.splice(index, 1);
//   res.sendStatus(204);
// });

module.exports = app;
