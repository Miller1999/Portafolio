const containerS = document.querySelector("#socialMedia");

const createNewSocial = (name, logo, link) => {
	const card = document.createElement("div");
	const content = `
<a href="${link}" target="_blank"
					><img loading="lazy" src="${logo}" alt="${name}"
				/></a>
	
  `;
	card.innerHTML = content;
	return card;
};

fetch("../info.json")
	.then((res) => res.json())
	.then((data) => {
		console.log(data.social);
		const socials = data.social;
		socials.forEach((social) => {
			const newSocial = createNewSocial(social.name, social.logo, social.link);
			containerS.appendChild(newSocial);
		});
	});
