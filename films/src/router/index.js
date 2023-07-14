const { Router } = require("express");
const controllers = require("../controllers");
const middleware = require("../middlewares");

const router = Router();

router.get("/films", controllers.getFilms);
router.post("/films", middleware.filmsValidation, controllers.createFilms);

module.exports = router;

