const containerF = document.querySelector(".Schools");

const createNewEducation = (logo, title, date, institution) => {
	const card = document.createElement("div");
	card.classList.add("Schools--item");
	const content = `
    <div class="Schools--item-front">
		<img loading="lazy" src="${logo}" alt="${institution}" />
	</div>
	<div class="Schools--item-back">
		<h3>${title}</h3>
		<p>${institution}</p>
		<p>${date}</p>
	</div>
  `;
	card.innerHTML = content;
	return card;
};

fetch("../info.json")
	.then((res) => res.json())
	.then((data) => {
		const education = data.education;
		education.forEach((education) => {
			const neweducation = createNewEducation(
				education.logo,
				education.title,
				education.date,
				education.institution
			);
			containerF.appendChild(neweducation);
		});
	});
