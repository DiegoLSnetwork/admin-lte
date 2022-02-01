const { Schema, model } = require("mongoose");

const ticketSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    description: { type: String, required: true },
    status: { type: String, required: true },
    priority: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true }
},
    {
        timestamps: true,
        versionKey: false
    });

module.exports = model("Ticket", ticketSchema);