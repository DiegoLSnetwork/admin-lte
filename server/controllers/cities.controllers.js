const citiesControllers = {};
//DB
const City = require("../models/city.model");

//Controllers
citiesControllers.createOne = async (req, res) => {
    const newCity = new City(req.body);
    await newCity.save();
    res.json(newCity);
}

citiesControllers.getAll = async (req, res) => {
    const city = await City.find();
    res.json(city);
}

citiesControllers.updateOne = async (req, res) => {
    const data = req.body;
    const cityId = req.params.id;
    await City.findByIdAndUpdate(cityId, data);
    res.send("City " + cityId + " updated")
}

citiesControllers.deleteOne = async (req, res) => {
    const cityId = req.params.id;
    await City.findByIdAndDelete(cityId);
    res.send("City " + cityId + " deleted");
}

module.exports = citiesControllers;