const express = require('express');
const app = express();

const activitiesRouter = require('./routes/activitiesRouter');

app.use(express.json());
app.use('/activities', activitiesRouter)

module.exports = app;
