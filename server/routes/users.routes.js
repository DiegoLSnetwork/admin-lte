const { Router } = require("express");
const router = Router();
const usersControllers = require("../controllers/users.controllers");

//Routes

router.get("/", usersControllers.getAll);

router.post("/create", usersControllers.createOne);

router.get("/getOne",usersControllers.getOne);

router.delete("/delete/:id", usersControllers.deleteOne);

router.patch("/update/:id", usersControllers.updateOne);

module.exports = router;
