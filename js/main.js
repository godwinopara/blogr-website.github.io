const hamburgerMenu = document.querySelectorAll(".hamburger-menu img");
const dropDown = document.querySelectorAll(".sub-drop-down");
const navLinks = document.querySelectorAll(".nav-li");

const nav = document.querySelector("nav");

const open = hamburgerMenu[0];
const close = hamburgerMenu[1];

hamburgerMenu.forEach((menuBtn) => {
	menuBtn.addEventListener("click", () => {
		if (open.classList.contains("show")) {
			open.classList.remove("show");
			close.classList.add("show");
			nav.classList.add("show-nav");
		} else if (close.classList.contains("show")) {
			close.classList.remove("show");
			open.classList.add("show");
			nav.classList.remove("show-nav");
		}
	});
});
