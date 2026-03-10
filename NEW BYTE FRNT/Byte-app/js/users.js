const express = require("express")
const router = express.Router()

const User = require("../models/User")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

/* =========================
SIGNUP
========================= */

router.post("/signup", async (req,res)=>{

try{

const {username,email,password} = req.body

// check if user exists
const existingUser = await User.findOne({email})

if(existingUser){
return res.status(400).json({message:"User already exists"})
}

// hash password
const hashedPassword = await bcrypt.hash(password,10)

// create user
const newUser = new User({
username,
email,
password:hashedPassword
})

await newUser.save()

res.json(newUser)

}catch(err){

res.status(500).json(err)

}

})



/* =========================
LOGIN
========================= */

router.post("/login", async (req,res)=>{

try{

const {email,password} = req.body

const user = await User.findOne({email})

if(!user){
return res.status(400).json({message:"User not found"})
}

// compare password
const validPassword = await bcrypt.compare(password,user.password)

if(!validPassword){
return res.status(400).json({message:"Wrong password"})
}

// create token
const token = jwt.sign({id:user._id},"bytes_secret",{expiresIn:"7d"})

res.json({
token,
user
})

}catch(err){

res.status(500).json(err)

}

})

module.exports = router