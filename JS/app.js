const menu = document.querySelector(".menu");
const listMenu = document.querySelector(".menu__deployed");
const home = document.querySelector(".home");

menu.addEventListener("click", () => {
	listMenu.classList.toggle("hidden");
	home.classList.toggle("hidden");
});

console.log(menu);
