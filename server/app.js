const dotenv = require('dotenv')
const express = require("express");
const app = express();
const cookieParser = require('cookie-parser')

const mongoose = require('mongoose');
dotenv.config({path:'./config.env'})
require('./db/conn')
// const User = require('./model/userSchema')
app.use(express.json());
app.use(cookieParser())

//router file for storing path
app.use(require('./router/auth')); 

const PORT = process.env.PORT;

// middleware()

app.get("/", (req, res) => { 
  res.send("HOME"); 
});
app.get("/login", (req, res) => {
  res.send("login"); 
});

// console.log("Subscribe");

app.listen(PORT, () => {
  console.log(`server is running on port no ${PORT}`);
});
