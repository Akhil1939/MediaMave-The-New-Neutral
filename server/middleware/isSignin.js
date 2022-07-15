const jwt = require("jsonwebtoken");
const express = require("express");

const User = require("../model/userSchema");
const app = express();
const cookieParser = require('cookie-parser')
app.use(cookieParser())

const isSignin = async (req, res, next) => {
    try{
        const token = req.cookies.jwtoken;
        const verifyToken = jwt.verify(token,process.env.SECRET_KEY);

        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token":token });

        if(!rootUser){ 
            throw new Error('User not Found') 
        } 
        console.log(req.token = token,
            req.rootUser = rootUser,
            req.userID = rootUser._id)
        req.token = token;
        req.rootUser = rootUser; 
        req.userID = rootUser._id;
        
        next();
           

    }catch(err){
        res.status(401).send("User is not login");
console.log(err)
    }
}
module.exports = isSignin;