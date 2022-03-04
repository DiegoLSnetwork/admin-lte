const jwt = require("jsonwebtoken");

const tokenFunctions = {}

tokenFunctions.verify= (req, res, next) =>{
    if (req.headers.authorization) {
        if (req.headers.authorization !== "null") {
           const token = req.headers.authorization.split(" ")[1];
           const payload = jwt.verify(token,"R7{^4Vhf|/Xz9E]");
           req.userId = payload._id;
           next();
        }else{
            res.status(401).send("Sent null");
        }
    } else {
        res.status(401).send("Not authorized");
    }
}
module.exports=tokenFunctions;