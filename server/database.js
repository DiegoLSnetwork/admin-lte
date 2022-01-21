const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/admin_LTE",{
        useUnifiedTopology:true,
        useNewUrlParser:true
    })
    .then((db)=>console.log("Connected to DB"))
    .catch((err)=>console.error(err));