//en este index vamos a crear la conexion con la base de datos
const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs"); //<-- NO FUNCA EL .ENV

const conn = mongoose.createConnection(MONGO_URI);

// const Character = conn.model("Character", require("./schema/charactersSchema"));
// const Film = conn.model("Film", require("./schema/filmsSchema"));
// const Planet = conn.model("Planet", require("./schema/planetsSchema"));

// Character.find()
//   .populate("films", ["_id", "title"])
//   .populate("homeworld", ["name"])
//   .then((res) => console.log(res[0]));

module.exports = {
  Character: conn.model("Character", require("./schema/charactersSchema")),
  Film: conn.model("Film", require("./schema/filmsSchema")),
  Planet: conn.model("Planet", require("./schema/planetsSchema")),
};
