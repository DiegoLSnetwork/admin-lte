const { Schema, model } = require("mongoose");

const invoiceModel = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    issuanceDate: { type: Date, required: true },
    expirationDate: { type: Date, required: true },
    paymentDate: { type: Date, default: new Date() },
    disccount: { type: Number, default: 0 },
    tax: { type: Number, default: 0 },
    items: [{
        type: Schema.Types.ObjectId, ref: "Item", default: {
            name: "Set your item name",
            description: "Set your item description here",
            quantity: 1,
            value: 0
        }
    }]
});

module.exports = model("Invoice", invoiceModel);