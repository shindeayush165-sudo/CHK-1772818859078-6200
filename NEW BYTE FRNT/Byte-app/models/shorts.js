const router = require("express").Router()
const Short = require("../models/Short")
const Comment = require("../models/Short")

/* =================================
GET ALL SHORTS
================================= */

router.get("/", async (req,res)=>{

try{

const shorts = await Short.find().sort({createdAt:-1})

res.json(shorts)

}catch(err){

res.status(500).json(err)

}

})



/* =================================
CREATE SHORT
================================= */

router.post("/", async (req,res)=>{

try{

const newShort = new Short({

creator:req.body.creator,
video:req.body.video,
caption:req.body.caption

})

const savedShort = await newShort.save()

res.json(savedShort)

}catch(err){

res.status(500).json(err)

}

})



/* =================================
LIKE SHORT
================================= */

router.put("/like/:id", async (req,res)=>{

try{

const short = await Short.findById(req.params.id)

short.likes += 1

await short.save()

res.json(short)

}catch(err){

res.status(500).json(err)

}

})



/* =================================
DELETE SHORT
================================= */

router.delete("/:id", async (req,res)=>{

try{

await Short.findByIdAndDelete(req.params.id)

res.json({message:"Short deleted"})

}catch(err){

res.status(500).json(err)

}

})



/* =================================
COMMENT ON SHORT
================================= */

router.post("/comment", async (req,res)=>{

try{

const comment = new Comment({

postId:req.body.shortId,
user:req.body.user,
text:req.body.text

})

await comment.save()

res.json(comment)

}catch(err){

res.status(500).json(err)

}

})



/* =================================
GET COMMENTS FOR SHORT
================================= */

router.get("/comments/:shortId", async (req,res)=>{

try{

const comments = await Comment.find({

postId:req.params.shortId

})

res.json(comments)

}catch(err){

res.status(500).json(err)

}

})


module.exports = router