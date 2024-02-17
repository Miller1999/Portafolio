const containerF = document.querySelector(".Schools");

const createNewEducation = (logo, title, date, institution) => {
	const card = document.createElement("article");
	card.classList.add("Schools--item");
	const front = document.createElement("div");
	front.classList.add("Schools--item-front");
	const logoInstitution = document.createElement("img");
	logoInstitution.loading = "lazy";
	logoInstitution.src = logo;
	logoInstitution.alt = institution;
	const back = document.createElement("div");
	back.classList.add("Schools--item-back");
	const backTitle = document.createElement("h3");
	backTitle.textContent = title;
	const backInstitution = document.createElement("p");
	backInstitution.textContent = institution;
	const backDate = document.createElement("p");
	backDate.textContent = date;
	back.appendChild(backTitle);
	back.appendChild(backInstitution);
	back.appendChild(backDate);
	front.appendChild(logoInstitution);
	card.appendChild(front);
	card.appendChild(back);
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
