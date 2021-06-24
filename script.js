//initialize variables
var hamburger = document.getElementById("hamburger");
var navbarLinks = document.getElementById("x");

//add event listeners
hamburger.addEventListener("click", function(){
    // alert("hamburger menu clicked!");
    //toggle mobile nav links class on/off
    navbarLinks.classList.toggle("hide");
    // console.log("hidden.links");
});
