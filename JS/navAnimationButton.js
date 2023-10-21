const nav = document.querySelector(".nav");
const button = document.querySelector(".nav--button");
const links = document.querySelectorAll(".nav--link");
const barras = [
	document.querySelector(".barra1"),
	document.querySelector(".barra2"),
];
const linksArray = Array.from(links);

linksArray.forEach((link) => {
	if (window.screenY <= 425) {
		link.classList.add("nav--link-hidden");
	}
});
button.addEventListener("click", () => {
	nav.classList.toggle("nav--state-hidden");
	linksArray.forEach((link) => {
		link.classList.toggle("nav--link-hidden");
	});
});
button.addEventListener("click", () => {
	barras.forEach((barra) => barra.classList.toggle("girar"));
});
