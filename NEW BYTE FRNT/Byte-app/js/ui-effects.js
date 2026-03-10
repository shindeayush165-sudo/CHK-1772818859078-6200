/* =========================
DOUBLE TAP LIKE (INSTAGRAM STYLE)
========================= */

document.querySelectorAll(".post-image").forEach(post => {

post.addEventListener("dblclick", (e)=>{

const heart = document.createElement("div")

heart.innerHTML="❤️"
heart.classList.add("like-animation")

heart.style.left = e.offsetX + "px"
heart.style.top = e.offsetY + "px"

post.appendChild(heart)

setTimeout(()=>{
heart.remove()
},600)

})

})


/* =========================
SCROLL HEADER SHADOW
========================= */

window.addEventListener("scroll",()=>{

const header = document.querySelector(".app-header")

if(!header) return

if(window.scrollY > 10){
header.style.boxShadow="0 10px 30px rgba(0,0,0,0.5)"
}else{
header.style.boxShadow="none"
}

})


/* =========================
AUTO PLAY SHORTS VIDEO
========================= */

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

videos.forEach(video=>{
observer.observe(video)
})


/* =========================
RANDOM AVATARS
========================= */

document.querySelectorAll(".avatar").forEach((img,i)=>{

img.src = `https://i.pravatar.cc/150?img=${i+10}`

})