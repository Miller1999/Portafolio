const containerF = document.querySelector(".contenedorItemsF");

const createNewEducation = (logo, title, date, institution) => {
	const card = document.createElement("div");
	card.classList.add("itemF");
	const content = `
    <div class="front">
		<img loading="lazy" src="${logo}" alt="${institution}" />
	</div>
	<div class="back">
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
