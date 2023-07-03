const planets = require("./planets.json");

module.exports = {
  list: async () => {
    return planets;
  },
  create: async () => {
    throw Error("hay un error al crear el planeta");
  },
};
