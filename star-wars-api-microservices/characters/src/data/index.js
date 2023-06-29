const characters = require("./characters.json");

module.exports = {
  list: async () => {
    return characters;
  },
  create: async () => {
    throw Error("hay un error al crear el personaje, desde el index de data");
  },
};
