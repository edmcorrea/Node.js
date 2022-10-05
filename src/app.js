// src/app.js
const express = require('express');
const { validateName, validatePrice, validateCreatedAt } = require('./middleware/validateActivities');

const app = express();

app.use(express.json());

// const teams = [
//   {
//     id: 1,
//     name: 'São Paulo Futebol Clube',
//     initials: 'SPF',
//   },
//   {
//     id: 2,
//     name: 'Clube Atlético Mineiro',
//     initials: 'CAM',
//   },
// ];

// app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.post('/activities', validateName, validatePrice, validateCreatedAt, (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
});

app.post('/signup', (req, res) => {
  res.status(200).json({ updatedTeam });
});

module.exports = app;
