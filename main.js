// Toggle menu
let nav = document.getElementById("nav_links");
let menubar = document.getElementById("menubar")
function openMenu(){
    nav.style.right = "0 ";
    menubar.style.display="none";
}

function closeMenu(){
    nav.style.right = "-12.5rem";
    menubar.style.display="block";

}