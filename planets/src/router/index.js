const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/planets", controllers.getPlanets);
router.post("/planets", controllers.createPlanet);

module.exports = router;