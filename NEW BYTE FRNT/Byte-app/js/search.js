const router = require("express").Router()

const User = require("../models/User")
const Post = require("./models/Post")

router.get("/", async(req,res)=>{

const query = req.query.q

try{

const users = await User.find({
username: { $regex: query, $options: "i" }
})

const posts = await Post.find({
content: { $regex: query, $options: "i" }
})

res.json({
users,
posts
})

}catch(err){

res.status(500).json(err)

}

})

module.exports = router