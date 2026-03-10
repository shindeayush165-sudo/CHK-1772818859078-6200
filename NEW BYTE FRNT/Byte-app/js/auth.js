async function login(){

const username = document.getElementById("username").value
const password = document.getElementById("password").value

const res = await fetch("/api/login",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({username,password})

})

const data = await res.json()

if(data.success){

window.location="feed.html"

}

}

async function signup(){

const username=document.getElementById("username").value
const email=document.getElementById("email").value
const password=document.getElementById("password").value

await fetch("/api/signup",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify({username,email,password})

})

alert("Account Created")

window.location="index.html"

}
function toggleDark(){

document.body.classList.toggle("dark")

}
function login(){

window.location="feed.html"

}

function signup(){

alert("Account created")

window.location="index.html"

}