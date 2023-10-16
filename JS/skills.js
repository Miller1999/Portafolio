const container = document.querySelector(".Skills");

const createNewSkill = (logo, title) => {
	const card = document.createElement("div");
	card.classList.add("Skills--item");
	const content = `
    <img src="${logo}" alt="${title} loading="lazy">
		<span class="tooltipText">${title}</span>
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
