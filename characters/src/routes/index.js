const { Router } = require("express");
const controllers = require("../controllers");

const router = Router();

router.get("/characters", controllers.getCharacters);
router.post("/characters", controllers.createCharacter);

module.exports = router;