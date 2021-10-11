const caret = document.getElementById("caret");
// const caret1 = document.getElementById("caret1");
const caretRotate1 = document.getElementById("caret-1");
// const caretRotate2 = document.getElementById("caret-2");
const dropdown = document.getElementById("dropdown-content");
const dropdown1 = document.getElementById("dropdown-content1");
const hamburger = document.getElementById("hamburger");
const hamburgerBtn = document.getElementById("hamburger-btn");
const navLinks = document.getElementById("nav-links");




// navbar
caret.addEventListener("click", () => {
	dropdown.classList.toggle("open");
	caretRotate1.classList.toggle("caret-open");
});

// caret1.addEventListener("click", () => {
// 	dropdown1.classList.toggle("open");
// 	caretRotate2.classList.toggle("caret-open");
// });

hamburger.addEventListener("click", () => {
	//console.log("clicked");
	hamburgerBtn.classList.toggle("open-hamburger");
	navLinks.classList.toggle("show-links");
});



// target all questions
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
	const btn = question.querySelector(".faq-btn");
	btn.addEventListener("click", function () {
		console.log("clicked");
		questions.forEach(function (item) {
			if (item !== question) {
				item.classList.remove("show");
			}
		});
		question.classList.toggle("show");
	});
});

// target all tabs
const tabs = document.querySelectorAll(".btn-services");

// parent container
const servicesContainer = document.querySelector(".all-services");
//console.log(servicesContainer);

// target all content
const contents = document.querySelectorAll(".content");


tabs.forEach(function (tab) {
	const btn = document.querySelector(".btn-services");
	//const btn = tab.querySelector(".btn-services");
	btn.addEventListener("click", function () {
        contents.forEach(function (service) {
            //console.log(services);
			if (service !== tab) {
				service.classList.remove("show-content");
				// tab.classList.add("hide-content");
			}
		});
	});
});

servicesContainer.addEventListener("click", function (e) {
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


