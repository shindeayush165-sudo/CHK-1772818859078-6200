const demoPosts = [

{
user:"Rahul Sharma",
time:"2h ago",
content:"Just completed my first Django project 🚀",
image:"assets/sample.jpg"
},

{
user:"Ananya Gupta",
time:"5h ago",
content:"AI Tip: Start with Python, then learn Machine Learning basics.",
image:"assets/sample.jpg"
},

{
user:"Dev Patel",
time:"1d ago",
content:"Hackathon advice: Build a simple MVP instead of a complex unfinished project.",
image:"assets/sample.jpg"
},

{
user:"Priya Singh",
time:"3h ago",
content:"Best resources to learn Web Development: HTML → CSS → JavaScript → React.",
image:"assets/sample.jpg"
}

]


const feed = document.getElementById("feed")

demoPosts.forEach(post=>{

feed.innerHTML += `

<div class="post-card">

<div class="post-header">

<img src="assets/user.png" class="avatar">

<div>

<strong>${post.user}</strong>
<div style="font-size:12px;color:gray">${post.time}</div>

</div>

</div>

<p>${post.content}</p>

<img src="${post.image}" class="post-image">

<div class="post-actions">

<button onclick="likePost()">❤️</button>
<button>💬</button>
<button>🔗</button>

</div>

</div>

`

})


function createPost(){

const input = document.getElementById("postInput")

if(input.value==="") return

feed.innerHTML = `

<div class="post-card">

<div class="post-header">

<img src="assets/user.png" class="avatar">

<div>

<strong>You</strong>
<div style="font-size:12px;color:gray">Now</div>

</div>

</div>

<p>${input.value}</p>

<div class="post-actions">

<button>❤️</button>
<button>💬</button>
<button>🔗</button>

</div>

</div>

` + feed.innerHTML

input.value=""

}


function likePost(){

alert("Liked ❤️")

}

async function loadPosts(){

const res = await fetch("http://localhost:5000/api/posts")

const posts = await res.json()

const feed = document.getElementById("feed")

feed.innerHTML=""

posts.forEach(post=>{

feed.innerHTML += `
<div class="post-card">
<h3>${post.user}</h3>
<p>${post.content}</p>
</div>
`

})

}

loadPosts()

async function createPost(){

const text = document.getElementById("postInput").value

await fetch("http://localhost:5000/api/posts",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
user:"Pranav",
content:text
})
})

loadPosts()

}

async function likePost(id){

await fetch(`/api/posts/like/${id}`,{
method:"PUT"
})

loadPosts()

}

localStorage.setItem("user",JSON.stringify(user))

if(!localStorage.getItem("user")){
window.location="login.html"
}

async function loadPosts(){

const res = await fetch("http://localhost:5000/api/posts")

const posts = await res.json()

const feed = document.getElementById("feed")

feed.innerHTML=""

posts.forEach(post => {

feed.innerHTML += `
<div class="post-card">

<div class="post-header">
<img class="avatar" src="https://i.pravatar.cc/150">
<div>
<div class="post-user">${post.user}</div>
<div class="post-time">${new Date(post.createdAt).toLocaleString()}</div>
</div>
</div>

<div class="post-content">${post.content}</div>

<div class="post-actions">
<button onclick="likePost('${post._id}')">❤️ ${post.likes}</button>
</div>

</div>
`

})

}

loadPosts()

async function createPost(){

const text = document.getElementById("postInput").value

await fetch("http://localhost:5000/api/posts",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
user:"Pranav",
content:text
})
})

document.getElementById("postInput").value=""

loadPosts()

}
