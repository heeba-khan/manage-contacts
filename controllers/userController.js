const asyncHandler=require('express-async-handler')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const User=require('../models/userModel')

const registerUser=asyncHandler(async(req,res)=>{
    const {username,email,password}=req.body;
    if(!username||!email||!password){
        res.status(400)
        throw new Error("Filling all fields in mandatory!!");
    }
    const userAvailable=await User.findOne({email});
    if(userAvailable){
        res.status(400)
        throw new Error("User already exists!!")
    }

    const hashPassword=await bcrypt.hash(password,10);
    console.log("Hashed Password: ",hashPassword);
    const user=await User.create({
        username,
        email,
        password:hashPassword,
    });
    console.log(`User created : ${user}`)
    if(user){
        res.status(201).json({_id:user_id,email:user.email});
    }else{
        res.status(400)
        throw new Error("Invalid User data")
    }
    res.json({message:"Register the user"})
});


const loginUser=asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){
        res.status(400);
        throw new Error("All fields are mandatory!1")
    }
    const user=await User.findOne({email});
    if(user&&(await bcrypt.compare(password,user.hashPassword))){
        const accessToken=jwt.sign(
            {
                user:{
                    username:user.username,
                    email:user.email,
                    id:user.id,
                },
            },
            process.env.TOKEN_SECRET,
            {expiresIn:"15m"}
        );
        res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error("Email or Password is invalid!!")
    }
});

const currentUser=asyncHandler(async(req,res)=>{
    res.json(req.user)
})

module.exports={registerUser,loginUser,currentUser}