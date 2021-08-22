const caret = document.getElementById("caret");
const caret1 = document.getElementById("caret1");
const caretRotate1 = document.getElementById("caret-1");
const caretRotate2 = document.getElementById("caret-2");
const dropdown = document.getElementById("dropdown-content");
const dropdown1 = document.getElementById("dropdown-content1");
const hamburger = document.getElementById("hamburger");
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.getElementById("nav-links");


// target all tabs
const tabs = document.querySelectorAll(".btn-services");

// parent container
const services = document.querySelector(".all-services");


// target all content
const contents = document.querySelectorAll(".content");


// navbar
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

services.addEventListener('click', function (e) {
	const id = e.target.dataset.id;
	if (id) {
		// remove active tab
		tabs.forEach(function (tab) {
			tab.classList.remove("active");
			e.target.classList.add("active");
		});
		
		// hide other services
		contents.forEach(function (service) {
		service.classList.remove("show-content");
		});
		
		//show individual service
		const element = document.getElementById(id);
		element.classList.add("show-content");
	}
});

// tabs.forEach(function (tab) {
// 	const btn = tab.querySelector(".btn-services");
// 	btn.addEventListener('click', function () {
// 		services.forEach(function (service) {
// 			if (service !== tab) {
// 				service.classList.remove("show-content");
// 				// tab.classList.add("hide-content");
// 			}
// 		})
		
// 	})
// })


// target all questions
const questions = document.querySelectorAll(".question");

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



