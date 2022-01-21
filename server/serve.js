const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

//
app.set("port", process.env.PORT || 3000);
//node Middlewares
app.use(cors({
    origin:"http://localhost:4200"
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan("dev"));

app.use("/users",require("./routes/users.routes"));

module.exports= app;