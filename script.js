//initialize variables
const hamburgerBtn = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");


//add event listeners
hamburgerBtn.addEventListener("click", function () {
    navLinks.classList.toggle("show-links");
    hamburgerBtn.classList.toggle("hamburger-close");
});
