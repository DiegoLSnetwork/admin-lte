const { Schema, model } = require("mongoose");

const staffSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password:{type:String,required:true},
    phone: { type: Number, required: true },
    profile: { type: String/*type:Schema.Types.ObjectId,ref:"Profile"*/ },
    logs: { type: Date, default: new Date() }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model("Staff", staffSchema);