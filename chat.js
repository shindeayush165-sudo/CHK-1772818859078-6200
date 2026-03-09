function sendMessage(){

const input=document.getElementById("messageInput")

const message=input.value

const box=document.getElementById("messages")

box.innerHTML += `<p>${message}</p>`

input.value=""

}
