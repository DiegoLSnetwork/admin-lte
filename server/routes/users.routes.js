const { Router } = require("express");
const router = Router();
const usersControllers = require("../controllers/users.controllers");

//Routes

router.get("/", usersControllers.userList);

router.post("/create", usersControllers.createOne);

module.exports = router;
