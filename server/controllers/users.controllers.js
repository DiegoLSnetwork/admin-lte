const usersControllers={};

//DB
const User = require("../models/user.model"); 

//Controllers

usersControllers.getAll = async (req,res)=>{
   const users = await User.find();
   res.json(users);
}
usersControllers.getOne = async (req,res)=>{
    const searchData=req.body.name;
    const getUser = await User.findOne({name:searchData});
    res.json(getUser);
}

usersControllers.updateOne = async (req,res)=>{
    const data = req.body;
    const userId = req.params.id;
    await User.findByIdAndUpdate(userId,data);
    res.send("User "+ userId +" updated" );
}

usersControllers.deleteOne = async (req,res)=>{
    const userId = req.params.id
    await User.findByIdAndDelete(userId)
    res.send("User "+ userId + " deleted");
}

usersControllers.createOne = async (req,res)=>{
    const newUser = new User(req.body);
    await newUser.save();
    res.json(newUser);
}

module.exports=usersControllers;