const { Schema, model, SchemaTypes } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    ID: { type: Number, required: true },
    email: { type: String, default: "N/A" },
    address: { type: String, required: true },
    city: {type:String, /*type: Schema.Types.ObjectId, ref: "City",*/ required: true },
    neighborhood: {type:String, /*type: Schema.Types.ObjectId, ref: "Neighborhood",*/ default: "N/A" },
    phone: { type: Number, required: true },
    tickets: [{ type: Schema.Types.ObjectId, ref: "Ticket", default: [] }],
    invoices: [{ type: Schema.Types.ObjectId, ref: "Invoice", default: [] }]
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model("User", userSchema);