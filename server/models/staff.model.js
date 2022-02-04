const { Schema, model } = require("mongoose");

const staffSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type:String,required:true},
    profile:{type:Schema.Types.ObjectId,ref:"Profile"},
    logs:{type:Date,default:new Date()}
}, {
    timestamps: true,
    versionKey: false
})