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