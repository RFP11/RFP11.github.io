var navbar = document.getElementById("navbar")
var menu = document.getElementById("menu")
var card = document.getElementById("card")

window.onscroll = function() {
    if (window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add("sticky")
        card.classList.add("hilang")

    } else {
        navbar.classList.remove("sticky")
    }
}