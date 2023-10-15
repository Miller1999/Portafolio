const items = document.querySelectorAll(".move");
const header = document.querySelector("header");
const navlinks = document.querySelectorAll(".nav--link");
const title = document.querySelector(".header--titulo");
const mirarCajas = () => {
	//innerHeight -> mide el espacio de la pantalla
	const cabeOtro = (window.innerHeight / 5) * 4;
	items.forEach((item) => {
		//getBoundingClientRect -> Da el espacio de cada eje hasta el borde
		const tope = item.getBoundingClientRect().top;
		if (tope < cabeOtro) {
			item.classList.add("center");
		} else {
			item.classList.remove("center");
		}
	});
};
mirarCajas();
// scroll -> toma el desplazamiento de la pantalla
window.addEventListener("scroll", mirarCajas);

document.querySelectorAll(".nav--link").forEach((link) => {
	link.addEventListener("click", (e) => {
		e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

		const targetId = e.target.getAttribute("href").slice(1); // Obtener el ID del objetivo

		// Calcular la posición de destino teniendo en cuenta un espacio adicional antes de la seccion
		const targetElement = document.getElementById(targetId);
		const targetOffset = targetElement.getBoundingClientRect().top - 120;

		// Desplazar suavemente a la posición de destino ajustada
		window.scroll({
			top: targetOffset + window.scrollY,
			behavior: "smooth",
		});
	});
});

window.addEventListener("scroll", () => {
	if (scrollY >= 112) {
		header.style.backgroundColor = "#5CBEEC";
		navlinks.forEach((link) => {
			link.style.color = "#8003a5";
		});
		title.style.color = "#8003a5";
	} else {
		header.style.backgroundColor = "transparent";
		navlinks.forEach((link) => {
			link.style.color = "#307bd5";
		});
		title.style.color = "#307bd5";
	}
});
