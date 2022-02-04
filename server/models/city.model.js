const { Schema, model } = require("mongoose");

const citySchema = new Schema({
    name: { type: String, required: true },
    clientAmount: { type: Number, default: 0 },
    lastModified: { type: Date, default: new Date() },
    settings: {
        sendEmail: { type: Boolean, default: true },
        creationInvoice: {
            day: { type: Number, default: 1 },
            hours: { type: Number, default: new Date().getHours() },
            minutes: { type: Number, default: new Date().getMinutes() }
        },
        payDay: { type: Number, default: 1 },
        notification: { type: Number, default: 20 },
        deferment: { type: Number, default: 30 }
    },
    neighborhood: [{ type: Schema.Types.ObjectId, ref: "Neigborhood" }]
},
    {
        timestamps: true,
        versionKey: false
    });
module.exports = model("City",citySchema);