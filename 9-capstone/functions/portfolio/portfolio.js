/* Portfolio Projects */
const schoolProjects = $("#schoolProjects");
const sillyGames = $("#sillyGames");
const personalProjects = $("#personalProjects");
const internet = $("#internetProjects");
const freelancer = $("#freelancer");

const section = {
  schoolProjects: schoolProjects,
  sillyGames: sillyGames,
  personalProjects: personalProjects,
  internet: internet,
  freelancer: freelancer,
};

/* Accordion handler */
const accordion = document.getElementsByClassName("accordion");
const allPanels = $(".panel");

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function (e) {
    const panel = this.nextElementSibling;
    for (let onePanel of allPanels) {
      if (onePanel !== this.nextElementSibling) onePanel.style.maxHeight = null;
      // if (onePanel.classList.contains()) {
      // }
    }

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

class ProjectCard extends HTMLElement {
  /**
   *
   * @param {* string} id
   * @param {* string} title
   * @param {* primary || secundary} type
   * @param {* project URL string} link
   * @param {* image url} imgUrl
   * @param {* string } description
   */
  constructor(
    id,
    title,
    type,
    link,
    imgUrl,
    description,
    repoLink,
    repoSite,
    framework,
    technologies,
    deployed
  ) {
    super();

    this.internetContent = `
    <div class="internetProjectsContainer intChild ${framework} ${technologies.map(
      (tech) => ` ${tech}`
    )}" id=${id}>
      <div class="small-img-container">
          <a href=${link} target='blank'>
            <img src=${imgUrl} alt=${id} class="small-project-img">
          </a>
      </div>
      <div class="small-tech-container">
      <img src="./icons/${framework}.png" alt="githubRepo" class="tiny-framework">
      ${technologies.map(
        (tech, i) =>
          `<img key=${i} src="./icons/${tech}.png" alt=${tech} class="tiny-tech-img">`
      )}
      <img  src="./icons/${deployed}.png" alt=${deployed} class="tiny-tech-img">
      </div>
      
          <a href=${link}><p class="small-project-title">${title}</p></a>
      
      
      <a href="${repoSite}${repoLink}" target="blank">
          <img src="${
            repoSite.includes("github")
              ? "./icons/github.png"
              : "./icons/gitlab.png"
          }" alt="${repoSite}" class="small-tech-img">
      </a>
    </div>
    `;

    this.content = `<div class="project ${type} flip-in ${
      type === "secundary" ? "invisible" : ""
    }">
    
            <a href=${link} target='blank'>
                <div id=${id} class="projectImg">
                    <img src=${imgUrl} alt=${id} >
                </div>
            </a> 

            <div class="description">
                <h6 class="projectTitle"> "${title}" </h6>
                <p class="descriptionText">${description}</p>
            </div>

            <a href="${repoSite}${repoLink}" target="blank">
                <img src="${
                  repoSite.includes("github")
                    ? "./icons/github.png"
                    : "./icons/gitlab.png"
                }" alt="githubRepo" class="repoLink">
            </a>
            <span class="deployTech">
              <a href="https://${deployed}.com/" target="blank" class="deployedLink">  
                <p class="tiny-text">deploy</p>              
                <img  src="./icons/${deployed}.png" alt=${deployed} class="tiny-tech-img ">
              </a>
            </span>

           <div class="technologies-container">   
            <img src="./icons/${framework}.png" alt="githubRepo" class="framework">
            ${technologies.map(
              (tech, i) =>
                ` <img key=${i} src="./icons/${tech}.png" alt="githubRepo" class="technologies">`
            )}
           </div>
        </div>`;
  }
}

if ("customElements" in window) {
  customElements.define("project-card", ProjectCard);
}

projectsData.forEach((project) => {
  const {
    id,
    title,
    type,
    link,
    imgUrl,
    description,
    sectionId,
    repoLink,
    repoSite,
    framework,
    technologies,
    deployed,
  } = project;
  const newProject = new ProjectCard(
    id,
    title,
    type,
    link,
    imgUrl,
    description,
    repoLink,
    repoSite,
    framework,
    technologies,
    deployed
  );
  if (sectionId === "internet") {
    section[sectionId].innerHTML += newProject.internetContent;
  } else {
    section[sectionId].innerHTML += newProject.content;
  }
});

const techFilters = $(".tech_filter");

const selectChilds = (filterParam) => {
  const internetChilds = $(".intChild");
  internetChilds.forEach((child) => {
    if (filterParam === "all") {
      child.classList.remove("invisible");
    } else if (child.classList.contains(filterParam)) {
      child.classList.remove("invisible");
    } else {
      child.classList.add("invisible");
    }
  });
};

const changeFilter = (value) => {
  selectChilds(value);
};

techFilters.forEach((techFilter) => {
  techFilter.addEventListener("change", () => changeFilter(techFilter.value));
});

//hide/show projects
const showAllBtn = $("#showAll");
const secundaries = $(".secundary");
const projects = $(".projects");

let is_showing = false;
