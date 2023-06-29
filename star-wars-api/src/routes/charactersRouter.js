const characters = require("../data/characters.json");
const { Router } = require("express");

const charactersRoute = Router();

charactersRoute.get("/", (req, res) => {
  res.status(200).json(characters);
});

module.exports = charactersRoute;
