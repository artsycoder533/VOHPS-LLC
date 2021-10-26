
const hamburger = document.getElementById("hamburger");
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.getElementById("nav-links");
const contents = document.querySelectorAll(".content");
const questions = document.querySelectorAll(".question");
const scrollBtn = document.getElementById("scroll");

navLinks.addEventListener("click", () => {
	hamburgerBtn.classList.toggle("open-hamburger");
	navLinks.classList.remove("show-links");
});


hamburger.addEventListener("click", () => {
	hamburgerBtn.classList.toggle("open-hamburger");
	navLinks.classList.toggle("show-links");
});

window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


questions.forEach(function (question) {
	const btn = question.querySelector(".faq-btn");
	btn.addEventListener("click", function () {
		questions.forEach(function (item) {
			if (item !== question) {
				item.classList.remove("show");
			}
		});
		question.classList.toggle("show");
	});
});

window.onscroll = function () {
	if (document.documentElement.scrollTop > 70) {
		scrollBtn.style.display = "block";
	} else {
		scrollBtn.style.display = "none";
	}
};

scrollBtn.addEventListener("click", () => {
	document.documentElement.scrollTop = 0;
});


