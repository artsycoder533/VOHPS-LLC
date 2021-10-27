
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

// contact form
 let ifr = document.getElementById("JotFormIFrame-212995087813062");
 if (ifr) {
		let src = ifr.src;
		let iframeParams = [];
		if (window.location.href && window.location.href.indexOf("?") > -1) {
			iframeParams = iframeParams.concat(
				window.location.href
					.substr(window.location.href.indexOf("?") + 1)
					.split("&")
			);
		}
		if (src && src.indexOf("?") > -1) {
			iframeParams = iframeParams.concat(
				src.substr(src.indexOf("?") + 1).split("&")
			);
			src = src.substr(0, src.indexOf("?"));
		}
		iframeParams.push("isIframeEmbed=1");
		ifr.src = src + "?" + iframeParams.join("&");
 }
 window.handleIFrameMessage = function (e) {
		if (typeof e.data === "object") {
			return;
		}
		let args = e.data.split(":");
		if (args.length > 2) {
			iframe = document.getElementById(
				"JotFormIFrame-" + args[args.length - 1]
			);
		} else {
			iframe = document.getElementById("JotFormIFrame");
		}
		if (!iframe) {
			return;
		}
		switch (args[0]) {
			case "scrollIntoView":
				iframe.scrollIntoView();
				break;
			case "setHeight":
				iframe.style.height = args[1] + "px";
				break;
			case "collapseErrorPage":
				if (iframe.clientHeight > window.innerHeight) {
					iframe.style.height = window.innerHeight + "px";
				}
				break;
			case "reloadPage":
				window.location.reload();
				break;
			case "loadScript":
				if (!window.isPermitted(e.origin, ["jotform.com", "jotform.pro"])) {
					break;
				}
				let src = args[1];
				if (args.length > 3) {
					src = args[1] + ":" + args[2];
				}
				let script = document.createElement("script");
				script.src = src;
				script.type = "text/javascript";
				document.body.appendChild(script);
				break;
			case "exitFullscreen":
				if (window.document.exitFullscreen) window.document.exitFullscreen();
				else if (window.document.mozCancelFullScreen)
					window.document.mozCancelFullScreen();
				else if (window.document.mozCancelFullscreen)
					window.document.mozCancelFullScreen();
				else if (window.document.webkitExitFullscreen)
					window.document.webkitExitFullscreen();
				else if (window.document.msExitFullscreen)
					window.document.msExitFullscreen();
				break;
		}
		let isJotForm = e.origin.indexOf("jotform") > -1 ? true : false;
		if (
			isJotForm &&
			"contentWindow" in iframe &&
			"postMessage" in iframe.contentWindow
		) {
			let urls = {
				docurl: encodeURIComponent(document.URL),
				referrer: encodeURIComponent(document.referrer),
			};
			iframe.contentWindow.postMessage(
				JSON.stringify({ type: "urls", value: urls }),
				"*"
			);
		}
 };
 window.isPermitted = function (originUrl, whitelisted_domains) {
		let url = document.createElement("a");
		url.href = originUrl;
		let hostname = url.hostname;
		let result = false;
		if (typeof hostname !== "undefined") {
			whitelisted_domains.forEach(function (element) {
				if (
					hostname.slice(-1 * element.length - 1) === ".".concat(element) ||
					hostname === element
				) {
					result = true;
				}
			});
			return result;
		}
 };
 if (window.addEventListener) {
		window.addEventListener("message", handleIFrameMessage, false);
 } else if (window.attachEvent) {
		window.attachEvent("onmessage", handleIFrameMessage);
 }