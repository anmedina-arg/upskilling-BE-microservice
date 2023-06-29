const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

router.get("/", controllers.getCharacters);

router.post("/", controllers.createCharacters);

module.exports = router;
