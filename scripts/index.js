const menuButton = document.getElementById("menu")
const nav = document.getElementById("nav")
const closeButton = document.getElementById("close")

menuButton.addEventListener("click", function(){
    nav.style.display = "inline-block"
    closeButton.style.display = "inline-block"
    menuButton.style.display = "none"
})

closeButton.addEventListener("click", function(){
    nav.style.display = ""
    menuButton.style.display = ""
    closeButton.style.display = ""
})