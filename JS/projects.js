const containerP = document.querySelector(".Projects");

const createNewProject = (
	title,
	subtitle,
	description,
	tech,
	repo,
	link,
	img,
	video
) => {
	const card = document.createElement("div");
	card.classList.add("project");
	const content = `
<div>
	<h3>${title}</h3>
</div>
<div class="project--description">
<div class="project--content">
			<h4>${subtitle}</h4>
			<p>
				${description}
			</p>
			<p>
			<strong>Made using: ${tech}</strong>
			</p>
			<div class="project--buttons">
				<a href="${repo}" target="_blank">
					<button class="button button--repository">
						Repo
					</button>
				</a>
				<a href="${link}" target="_blank">
					<button class="button button--link">
						${title}
					</button>
				</a>
			</div>
	</div>
		<div class="project--image">
		<a href="${video}" target="_blank">
			<img
				src="${img}"
				loading="lazy"
				alt="${title}"
			/>
		</a>
		</div>
</div>
	
  `;
	card.innerHTML = content;
	return card;
};

fetch("../info.json")
	.then((res) => res.json())
	.then((data) => {
		const projects = data.projects;
		projects.forEach((project) => {
			const newProject = createNewProject(
				project.title,
				project.subtitle,
				project.description,
				project.tech,
				project.repo,
				project.link,
				project.img,
				project.video
			);
			containerP.appendChild(newProject);
		});
	});
