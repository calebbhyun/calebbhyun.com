// Change the style of the navigation on scroll
window.onscroll = function() {dropOnScroll()};
function dropOnScroll() {
    var navbar = document.getElementById("navigation");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("fullnavbar");
        navbar.classList.add("shadownavbar");
        navbar.classList.add("animatenavbar");
    } else {
        navbar.classList.remove("fullnavbar");
        navbar.classList.remove("shadownavbar");
        navbar.classList.remove("animatenavbar");
    }
}

// Mobile Navigation: close navigation on click of list item
var menu = document.getElementById("menu");
var box = document.getElementById("box");
menu.addEventListener('click', handleMenuClick);
function handleMenuClick(event) {
    if (event.target instanceof HTMLAnchorElement) {
    box.checked = false;
    }
}