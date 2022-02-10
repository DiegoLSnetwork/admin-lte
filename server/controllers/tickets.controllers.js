const ticketsControllers = {};
//DB
const Ticket = require("../models/ticket.model");

//Controllers
ticketsControllers.createOne = async (req, res) => {
    const newTicket = new Ticket(req.body);
    await newTicket.save();
    res.json(newTicket);
}

ticketsControllers.getAll = async (req, res) => {
    const tickets = await Ticket.find();
    res.json(tickets);
}

ticketsControllers.updateOne = async (req, res) => {
    const data = req.body;
    const ticketId = req.params.id;
    await Ticket.findByIdAndUpdate(ticketId, data);
    res.send("Ticket " + ticketId + " updated")
}

ticketsControllers.deleteOne = async (req, res) => {
    const ticketId = req.params.id;
    await Ticket.findByIdAndDelete(ticketId);
    res.send("Ticket " + ticketId + " deleted");
}

module.exports = ticketsControllers;