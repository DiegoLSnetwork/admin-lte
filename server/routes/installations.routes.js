const { Router } = require("express");
const router = Router();
const installationsControllers = require("../controllers/installations.controllers");

//Routes

router.get("/", installationsControllers.getAll);

router.post("/create", installationsControllers.createOne);

router.patch("/update/:id", installationsControllers.updateOne);

router.delete("/delete/:id", installationsControllers.deleteOne);

module.exports = router;