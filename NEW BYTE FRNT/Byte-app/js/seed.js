const mongoose = require("mongoose")

const Post = require("./models/Post")
const Short = require("./models/Short")
const Comment = require("./models/Comment")

mongoose.connect("mongodb://127.0.0.1:27017/bytes")
.then(()=>console.log("MongoDB Connected for seeding"))
.catch(err=>console.log(err))


/* =========================
POSTS
========================= */

const posts = [
{user:"Rahul",content:"Best websites to learn JavaScript 🚀"},
{user:"Ananya",content:"Top 5 AI tools every student should know 🤖"},
{user:"Karan",content:"Hackathon tip: Always build a simple working prototype first."},
{user:"Meera",content:"Free platforms to practice coding problems 💻"},
{user:"Arjun",content:"How I learned React in 30 days."},
{user:"Priya",content:"Best GitHub repositories for beginners."},
{user:"DevBytes",content:"Start building projects early — theory alone is not enough."},
{user:"TechGuide",content:"Top internship websites for students."},
{user:"Riya",content:"Learning Data Structures changed my coding confidence."},
{user:"CodeMentor",content:"Daily coding habit: 30 minutes every day."}
]


/* =========================
SHORTS
========================= */

const shorts = [
{
creator:"TechBytes",
video:"https://www.instagram.com/reel/C5t3Gf4pQJb",
caption:"Learn Git in 30 seconds"
},
{
creator:"AIHub",
video:"https://www.instagram.com/reel/C8Lq6q5yqkp",
caption:"Top AI tools for students"
},
{
creator:"CodeTips",
video:"https://www.instagram.com/reel/C5t3Gf4pQJb",
caption:"JavaScript trick you must know"
},
{
creator:"DevWorld",
video:"https://www.instagram.com/reel/C8Lq6q5yqkp",
caption:"How APIs work explained quickly"
},
{
creator:"CareerBytes",
video:"https://www.instagram.com/reel/C5t3Gf4pQJb",
caption:"How to prepare for hackathons"
}
]


/* =========================
COMMENTS
========================= */

const comments = [
{user:"Rahul",text:"Great post! 👏"},
{user:"Ananya",text:"Very useful information."},
{user:"Karan",text:"Thanks for sharing!"},
{user:"Meera",text:"This helped me a lot."},
{user:"Arjun",text:"Nice explanation."}
]


async function seedDatabase(){

try{

await Post.insertMany(posts)
await Short.insertMany(shorts)
await Comment.insertMany(comments)

console.log("Demo data inserted successfully")

mongoose.connection.close()

}catch(err){

console.log(err)

}

}

seedDatabase()
