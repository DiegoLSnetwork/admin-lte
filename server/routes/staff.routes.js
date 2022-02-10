const { Router } = require("express");
const router = Router();
const staffControllers = require("../controllers/staff.controllers");

//Routes

router.get("/", staffControllers.getAll);

router.post("/create", staffControllers.createOne);

router.patch("/update/:id", staffControllers.updateOne);

router.delete("/delete/:id", staffControllers.deleteOne);

module.exports = router;