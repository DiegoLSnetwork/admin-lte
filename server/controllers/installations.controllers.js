const installationsControllers = {};
//DB
const Installation = require("../models/installation.model");

//Controllers
installationsControllers.createOne = async (req, res) => {
    const newInstallation = new Installation(req.body);
    await newInstallation.save();
    res.json(newInstallation);
}

installationsControllers.getAll = async (req, res) => {
    const installation = await Installation.find();
    res.json(installation);
}

installationsControllers.updateOne = async (req, res) => {
    const data = req.body;
    const installationId = req.params.id;
    await Installation.findByIdAndUpdate(installationId, data);
    res.send("Installation " + installationId + " updated")
}

installationsControllers.deleteOne = async (req, res) => {
    const installationId = req.params.id;
    await Installation.findByIdAndDelete(installationId);
    res.send("Installation " + installationId + " deleted");
}

module.exports = installationsControllers;