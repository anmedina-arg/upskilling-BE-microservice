const films = require("../data/films.json");
const { Router } = require("express");

const filmsRouter = Router();

filmsRouter.get("/", (req, res) => {
  res.status(200).json(films);
});

module.exports = filmsRouter;
