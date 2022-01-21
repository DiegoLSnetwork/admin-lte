const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    ID: { type: Number, required: true },
    email: { type: String, default: "N/A" },
    address: { type: String, required: true },
    city:{type:String, required:true},
    neighborhood: { type: String, default: "N/A" },
    phone: { type: Number, required: true },
},{
    timestamps:true,
    versionKey:false
});

module.exports=model("User",userSchema);