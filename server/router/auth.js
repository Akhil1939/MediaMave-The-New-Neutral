const express = require("express");
const bcrypt = require("bcryptjs");
// const jwt = require('jsonwebtoken');
const isSignin = require("../middleware/isSignin");

const router = express.Router();
require("../db/conn");
const User = require("../model/userSchema");
// router.get("/", (req, res) => {
//   res.send("hello from router js app");
// });

router.post("/register", async (req, res) => {
  const {
    fname,
    lname,
    email,
    password,
  } = req.body;
  //   res.sendStatus("mera router");
  // res.json({message:req.body})

  if (
    !fname ||
    !lname ||
    !email ||
    !password
  ) {
    return res.status(422).json({ error: "fill the proper details" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Email already exist" });
    }else {
      const user = new User({
        fname, 
        lname,  
        email,
        password, 
       
      });
 
      //hash password
      //middleware

      await user.save();
      return res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});


//Login route

router.post("/login", async (req, res) => {
  // console.log(req.body);
  // res.json({message:'awosomw'})
  try {
      let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "plz fill the data" });
    }

    const userLogin = await User.findOne({ email: email });
    // console.log(userLogin);
    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

     token = await userLogin.generateAuthToken();
      // console.log(token);

      res.cookie("jwtoken", token, {
        expires:new Date(Date.now() +2592000000), 
        httpOnly:true 
      });

      if (!isMatch) {
        res.status(400).json({ error: "Invalid credentials" });

      } else {
        res.json({ message: "user signIn successfully" }); 
      }
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/logout", async(req,res,next)=>{
  res.clearCookie("jwtoken");
  next();
})
//  Business page
router.get("/business", isSignin, (req, res) => {
  console.log("business page")
  // res.send("business page")
  res.send(req.rootUser);
});
//  Entaitainment page
router.get("/entertainment", isSignin, (req, res) => {
  console.log("entertainment page")
  // res.send(req.rootUser);
});

router.get("/health",isSignin, (req, res) => {
  // res.send("Health page");
  console.log("health")
});
router.get("/science",isSignin, (req, res) => {
  // res.send("Science page");
  console.log("Science")

}); 
router.get("/sports",isSignin, (req, res) => {
  // res.send("Sports page");
  console.log("sports")

});
router.get("/technology",isSignin, (req, res) => {
  // res.send("Technology page");  
  console.log("technology")

});  

module.exports = router;
