const cors = require('cors');
const express = require('express');
const { getAllGames, getGamesById } = require('./controllers');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/games', async (req, res) => {
  const games = getAllGames();
  res.json({ games });
});

app.get('/games/details/:id', async (req, res) => {
  let game = getGamesById(parseInt(req.params.id));

  res.json({
    game,
  });
});

module.exports = { app };
