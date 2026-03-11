const express = require("express")
const router = express.Router()

const Short = require("../models/Short")

/* =========================
GET ALL SHORTS
========================= */

router.get("/", async (req,res)=>{

try{

const shorts = await Short.find().sort({createdAt:-1})

res.json(shorts)

}catch(err){

res.status(500).json(err)

}

})



/* =========================
CREATE SHORT
========================= */

router.post("/", async (req,res)=>{

try{

const short = new Short({

creator:req.body.creator,
video:req.body.video,
caption:req.body.caption

})

const savedShort = await short.save()

res.json(savedShort)

}catch(err){

res.status(500).json(err)

}

})



/* =========================
LIKE SHORT
========================= */

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



module.exports = router

async function loadShorts(){

const res = await fetch("http://localhost:5000/api/shorts")

const shorts = await res.json()

const container = document.querySelector(".shorts-container")

shorts.forEach(short=>{

container.innerHTML += `
<div class="short">

<iframe src="${short.video}/embed"></iframe>

<div class="short-overlay">
<h3>${short.creator}</h3>
<p>${short.caption}</p>
</div>

</div>
`

})

}

loadShorts()

async function loadShorts(){

const res = await fetch("http://localhost:5000/api/shorts")

const shorts = await res.json()

const container = document.querySelector(".shorts-container")

container.innerHTML=""

shorts.forEach(short=>{

container.innerHTML += `
<div class="short">

<iframe src="${short.video}/embed"></iframe>

<div class="short-overlay">

<div class="short-text">
<h3>@${short.creator}</h3>
<p>${short.caption}</p>
</div>

</div>

</div>
`

})

}

loadShorts()
