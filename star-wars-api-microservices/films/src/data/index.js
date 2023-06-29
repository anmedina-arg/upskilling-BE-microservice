const films = require("./films.json");

module.exports = {
  list: async () => {
    return films;
  },
  create: async () => {
    throw Error("este es el error que traigo desde el index de data");
  },
};
