const usersControllers={};

//DB
const User= require("../models/user.model"); 

//Controllers

usersControllers.userList = async (req,res)=>{
   const users = await User.find();
   res.json(users);
}
usersControllers.getOne = (req,res)=>{
    res.send("getOne");
}

usersControllers.updateOne = (req,res)=>{
    res.send("updateOne");
}

usersControllers.deleteOne = (req,res)=>{
    res.send("deleteOne");
}

usersControllers.createOne = async (req,res)=>{
    const newUser = new User(req.body);
    await newUser.save();
    res.send("User created");
}

module.exports=usersControllers;