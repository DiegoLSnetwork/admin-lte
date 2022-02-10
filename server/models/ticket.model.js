const { Schema, model } = require("mongoose");

const ticketSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    description: { type: String, required: true },
    status: { type: String, required: true },
    priority: { type: String, required: true },
    startDate: { type: Date, required: true, default: new Date() },
    endDate: { type: Date, required: true, default: new Date() }
},
    {
        timestamps: true,
        versionKey: false
    });

module.exports = model("Ticket", ticketSchema);