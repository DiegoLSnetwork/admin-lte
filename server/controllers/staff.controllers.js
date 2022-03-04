const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//Object to export 
const staffControllers = {};
//DB
const Staff = require("../models/staff.model");

//Controllers
staffControllers.createOne = async (req, res) => {
    const newStaff = new Staff(req.body);
    const hashedPassword = await bcrypt.hash(newStaff.password, 10);
    newStaff.password = hashedPassword
    await newStaff.save();
    const token = jwt.sign({ _id: newStaff._id }, "R7{^4Vhf|/Xz9E]");
    res.status(200).json({ token });
}

staffControllers.getAll = async (req, res) => {
    const staff = await Staff.find();
    res.json(staff);
}

staffControllers.getOne = async (req, res) => {
    const staff = await Staff.findOne({ email: req.body.email });
    if (staff != null) {
        const dbPassword = staff.password;
        const formPassword = req.body.password;
        const auth = bcrypt.compareSync(formPassword, dbPassword);
        if (auth) {
            const token = jwt.sign({ _id: staff._id }, "R7{^4Vhf|/Xz9E]");
            return res.status(200).json({token});
        }
        else {
            res.status(401).send("Wrong password");
        }
    }
    else {
        return res.status(401).send("Email doesn't exist");
    }
}


staffControllers.getOneById= async (req, res) => {
    const staff = await Staff.findById(req.userId);
    res.staff=staff 
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