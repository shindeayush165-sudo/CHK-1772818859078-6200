const express = require("express")
const router = express.Router()

// Import Post Model
const Post = require("./models/Post")


/* =========================
GET ALL POSTS
========================= */

router.get("/", async (req, res) => {

  try {

    const posts = await Post.find().sort({ createdAt: -1 })

    res.json(posts)

  } catch (error) {

    res.status(500).json({ message: "Error fetching posts", error })

  }

})



/* =========================
CREATE POST
========================= */

router.post("/", async (req, res) => {

  try {

    const newPost = new Post({
      user: req.body.user,
      content: req.body.content,
      image: req.body.image
    })

    const savedPost = await newPost.save()

    res.json(savedPost)

  } catch (error) {

    res.status(500).json({ message: "Error creating post", error })

  }

})



/* =========================
LIKE POST
========================= */

router.put("/like/:id", async (req, res) => {

  try {

    const post = await Post.findById(req.params.id)

    if (!post) {
      return res.status(404).json({ message: "Post not found" })
    }

    post.likes += 1

    await post.save()

    res.json(post)

  } catch (error) {

    res.status(500).json({ message: "Error liking post", error })

  }

})


module.exports = router