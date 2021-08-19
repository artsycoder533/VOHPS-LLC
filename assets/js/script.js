const caret = document.getElementById("caret");
const caret1 = document.getElementById("caret1");
const caretRotate1 = document.getElementById("caret-1");
const caretRotate2 = document.getElementById("caret-2");
const dropdown = document.getElementById("dropdown-content");
const dropdown1 = document.getElementById("dropdown-content1");
const hamburger = document.getElementById("hamburger");
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.getElementById("nav-links");

// target all questions
const questions = document.querySelectorAll(".question");

caret.addEventListener("click", () => {
	dropdown.classList.toggle("open");
	caretRotate1.classList.toggle("caret-open");
});

caret1.addEventListener("click", () => {
	dropdown1.classList.toggle("open");
	caretRotate2.classList.toggle("caret-open");
});

hamburger.addEventListener("click", () => {
	hamburgerBtn.classList.toggle("open-hamburger");
	navLinks.classList.toggle("show-links");
});

questions.forEach(function (question) {
	const btn = question.querySelector(".faq-btn");
	btn.addEventListener('click', function () {
		questions.forEach(function (item) {
			if (item !== question) {
				item.classList.remove("show");
			}
		});
		question.classList.toggle("show");
	});
});