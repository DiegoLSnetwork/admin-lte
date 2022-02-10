const staffControllers = {};
//DB
const Staff = require("../models/staff.model");

//Controllers
staffControllers.createOne = async (req, res) => {
    const newStaff = new Staff(req.body);
    await newStaff.save();
    res.json(newStaff);
}

staffControllers.getAll = async (req, res) => {
    const staff = await Staff.find();
    res.json(staff);
}

staffControllers.updateOne = async (req, res) => {
    const data = req.body;
    const staffId = req.params.id;
    await Staff.findByIdAndUpdate(staffId, data);
    res.send("Staff " + staffId + " updated")
}

staffControllers.deleteOne = async (req, res) => {
    const staffId = req.params.id;
    await Staff.findByIdAndDelete(staffId);
    res.send("Staff " + staffId + " deleted");
}

module.exports = staffControllers;