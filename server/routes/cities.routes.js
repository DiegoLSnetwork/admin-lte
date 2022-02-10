const { Router } = require("express");
const router = Router();
const citiesControllers = require("../controllers/cities.controllers");

//Routes

router.get("/", citiesControllers.getAll);

router.post("/create", citiesControllers.createOne);

router.delete("/delete/:id", citiesControllers.deleteOne);

router.patch("/update/:id", citiesControllers.updateOne);

module.exports = router;
