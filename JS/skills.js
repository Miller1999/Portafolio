const container = document.querySelector(".Skills");

const createNewSkill = (logo, title) => {
	const card = document.createElement("div");
	card.classList.add("item");
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
		const skills = data.skills;
		console.log(skills);
		skills.forEach((skill) => {
			const newSkill = createNewSkill(skill.img, skill.title);
			container.appendChild(newSkill);
		});
	});
