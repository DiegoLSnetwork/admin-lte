const { Schema, model } = require("mongoose");

const installationSchema = new Schema(
    {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        name: { type: String, required: true },
        address: { type: String, required: true },
        phone: { type: Number, required: true },
        price: { type: Number, default: 0 },
        comment: { type: String, default: "" }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = model("Installation", installationSchema);