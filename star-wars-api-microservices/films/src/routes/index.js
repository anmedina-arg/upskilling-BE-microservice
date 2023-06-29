const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/", controllers.getFilm);

module.exports = router;
