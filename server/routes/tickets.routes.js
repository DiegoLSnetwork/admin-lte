const { Router } = require("express");
const router = Router();
const ticketsControllers = require("../controllers/tickets.controllers");

//Routes

router.get("/", ticketsControllers.getAll);

router.post("/create", ticketsControllers.createOne);

router.patch("/update/:id", ticketsControllers.updateOne);

router.delete("/delete/:id", ticketsControllers.deleteOne);

module.exports = router;