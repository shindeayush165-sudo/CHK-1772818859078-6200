/* ===============================
BYTES UI ENHANCEMENTS
=============================== */

/* LOAD FEED FROM BACKEND */

async function loadFeed(){

try{

const res = await fetch("http://localhost:5000/api/posts")
const posts = await res.json()

const feed = document.getElementById("feed")

if(!feed) return

feed.innerHTML=""

posts.forEach(post=>{

feed.innerHTML += `

<div class="post-card">

<div class="post-header">

<img src="https://i.pravatar.cc/150?img=${Math.floor(Math.random()*70)}" class="avatar">

<div>

<div class="post-user">${post.user}</div>
<div class="post-time">Just now</div>

</div>

</div>

<p class="post-content">${post.content}</p>

<img 
src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
class="post-image"
>

<div class="post-actions">

<button onclick="likePost('${post._id}')">❤️</button>
<button>💬</button>
<button>🔗</button>

</div>

</div>

`

})

}catch(err){

console.log("Feed error",err)

}

}


/* ===============================
CREATE POST
=============================== */

async function createPost(){

const input = document.getElementById("postInput")

if(!input || input.value==="") return

const user = JSON.parse(localStorage.getItem("user"))

await fetch("http://localhost:5000/api/posts",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({

user:user ? user.username : "Guest",
content:input.value

})

})

input.value=""

loadFeed()

}


/* ===============================
LIKE POST
=============================== */

async function likePost(id){

await fetch(`http://localhost:5000/api/posts/like/${id}`,{

method:"PUT"

})

}


/* ===============================
SHORTS AUTOPLAY
=============================== */

const videos = document.querySelectorAll("video")

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.play()

}else{

entry.target.pause()

}

})

},{threshold:0.7})

videos.forEach(video=>observer.observe(video))


/* ===============================
INIT APP
=============================== */

document.addEventListener("DOMContentLoaded",()=>{

loadFeed()

})