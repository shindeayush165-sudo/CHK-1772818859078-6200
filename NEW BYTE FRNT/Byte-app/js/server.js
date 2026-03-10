const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

/* =========================
IMPORT ROUTES
========================= */

const userRoutes = require("./routes/users")
const postRoutes = require("./routes/posts")
const commentRoutes = require("./routes/comments")
const shortRoutes = require("./routes/shorts")
const searchRoutes = require("./routes/search")

const app = express()

/* =========================
MIDDLEWARE
========================= */

app.use(cors())
app.use(express.json())

/* =========================
CONNECT DATABASE
========================= */

mongoose.connect("mongodb://127.0.0.1:27017/bytes")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err))

/* =========================
API ROUTES
========================= */

app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/shorts", shortRoutes)
app.use("/api/search", searchRoutes)

/* =========================
TEST ROUTE
========================= */

app.get("/",(req,res)=>{
res.send("Bytes Backend Running 🚀")
})

/* =========================
START SERVER
========================= */

const PORT = 5000

app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`)
})