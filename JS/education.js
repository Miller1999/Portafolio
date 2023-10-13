const containerH = document.querySelector(".contenedorItems");

const createNewHobbie = (logo, title, id) => {
	const card = document.createElement("div");
	card.classList.add("itemH");
	card.setAttribute("id", id);
	const content = `
    <img src="${logo}" alt="${title} loading="lazy">
    <p>${title}</p>
  `;
	card.innerHTML = content;
	return card;
};

fetch("../info.json")
	.then((res) => res.json())
	.then((data) => {
		const hobbies = data.hobbies;
		hobbies.forEach((hobbie) => {
			const newHobbie = createNewHobbie(hobbie.img, hobbie.title, hobbie.id);
			containerH.appendChild(newHobbie);
		});
	});
