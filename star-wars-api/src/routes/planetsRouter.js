const planets = require("../data/planets.json");
const { Router } = require("express");

const planetsRouter = Router();

planetsRouter.get("/", (req, res) => {
  res.status(200).json(planets);
});

module.exports = planetsRouter;
