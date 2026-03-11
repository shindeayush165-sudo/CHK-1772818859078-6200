const express = require("express")
const router = express.Router()

const Comment = require("./models/Comment")


/* =========================
GET COMMENTS BY POST ID
========================= */

router.get("/:postId", async (req, res) => {

  try {

    const comments = await Comment.find({
      postId: req.params.postId
    }).sort({ createdAt: -1 })

    res.json(comments)

  } catch (error) {

    res.status(500).json({
      message: "Error fetching comments",
      error
    })

  }

})


/* =========================
CREATE COMMENT
========================= */

router.post("/", async (req, res) => {

  try {

    const newComment = new Comment({
      postId: req.body.postId,
      user: req.body.user,
      text: req.body.text
    })

    const savedComment = await newComment.save()

    res.json(savedComment)

  } catch (error) {

    res.status(500).json({
      message: "Error creating comment",
      error
    })

  }

})


module.exports = router

async function addComment(postId,text){

await fetch("http://localhost:5000/api/comments",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
postId:postId,
user:"Pranav",
text:text
})
})
