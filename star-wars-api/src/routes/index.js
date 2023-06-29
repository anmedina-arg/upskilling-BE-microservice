const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.status(200).send("hello world");
});

router.use("/characters", require("./charactersRouter"));
router.use("/films", require("./filmsRouter"));
router.use("/planets", require("./planetsRouter"));

module.exports = router;
