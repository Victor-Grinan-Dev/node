//collapse menu
const collapse = document.querySelector(".collapse");
const navLinks = document.querySelectorAll(".nav-link");
const menuBtn = document.querySelector(".navbar-toggler");

collapse.style.backgroundColor = "white";
collapse.style.padding = "10px";

const removeShow = () => {
  collapse.classList.remove("show");
};

navLinks.forEach((link) => {
  link.addEventListener("click", removeShow);
});

//logo flying animation
const g = document.querySelector("#g");
const v = document.querySelector("#v");
const flying1 = document.querySelector("#welcome-to");
const flying2 = document.querySelector("#intro");
let angle = 0;
let lastTime = null;

const Fly = (time) => {
  if (lastTime != null) angle += (time - lastTime) * 0.002;
  lastTime = time;
  flying1.style.top = Math.sin(angle) * 40 + 40 + "px";
  flying1.style.left = Math.cos(angle) * 200 + 230 + "px";
  flying2.style.top = Math.sin(angle + Math.PI) * 40 + 40 + "px";
  flying2.style.left = Math.cos(angle + Math.PI) * 200 + 230 + "px";
  requestAnimationFrame(Fly, "animate");
};

Fly(lastTime);

//banner css explodes
const developer = document.querySelector(".developer");
const portfolio = document.querySelector(".portfolioWord");
const grinan = document.querySelector("#grinan");
const victor = document.querySelector("#victor");

let isV = false;
let isG = false;

const deattach = () => {
  grinan.classList.add("deattach");

  if (grinan.classList[0] === "deattach") {
    g.style.color = "#ce5d5d";
    isG = true;
  }
};

const turnlight = () => {
  victor.classList.add("lightsOn");

  if (victor.classList[0] === "lightsOn") {
    v.style.color = "#ce5d5d";
    isV = true;
  }
};

g.addEventListener("click", deattach);
v.addEventListener("click", turnlight);

const animatePorfolio = () => {
  victor.classList.forEach((classL) => {
    if (classL === "lightsOn") {
      portfolio.style.position = "absolute";
      portfolio.classList.add("spin");
    }
  });
};

const spinDeveloper = () => {
  grinan.classList[0] === "deattach" &&
    ((developer.style.position = "absolute"), developer.classList.add("spin"));
};

victor.addEventListener("click", animatePorfolio);
grinan.addEventListener("click", spinDeveloper);

//scrolls functions

const tabsNames = ["about", "portfolio", "skills", "certificates", "contact"];
let activeTab = 0;

// const handleScroll = () => {
//   const { pageYOffset, innerHeight } = window;
//   const currentTab = Math.floor(pageYOffset / (innerHeight - 200));
//   if (currentTab !== activeTab) {
//   }
// };

/***
element.scrollTop - is the pixels hidden in top due to the scroll. With no scroll its value is 0.

element.scrollHeight - is the pixels of the whole div.

element.clientHeight - is the pixels that you see in your browser.

element.getBoundingClientRect()


$("#thediv").each( function() 
{
   // certain browsers have a bug such that scrollHeight is too small
   // when content does not fill the client area of the element
   var scrollHeight = Math.max(this.scrollHeight, this.clientHeight);
   this.scrollTop = scrollHeight - this.clientHeight;
});



TODO: try to find the top scroll value from the sections!!!!!

 */

let pageSize = document.documentElement.scrollHeight;

const setPageSize = () => {
  pageSize = document.documentElement.scrollHeight;
};

window.onresize = () => setPageSize();

const windowHeight = window.innerHeight;

const scroll_about = [
  pageSize - (pageSize - windowHeight),
  pageSize - (pageSize - windowHeight * 2),
];

const scroll_portfolio = [
  pageSize - (pageSize - windowHeight * 2),
  pageSize - (pageSize - windowHeight * 3),
];

const scroll_skills = [
  pageSize - (pageSize - windowHeight * 3),
  pageSize - windowHeight * 2.5 - 5,
];

const scroll_certificates = [
  pageSize - windowHeight * 2.5 - 5,
  pageSize - windowHeight - 5,
];
const scroll_conctactMe = [
  pageSize - windowHeight - 100,
  pageSize - windowHeight - 10,
];

const scrollSection_about = document.querySelector("#aboutArticle");
const scrollSection_portfolio = document.querySelector("#portfolio");
const scrollSection_skills = document.querySelector("#skillsBoxes");
const scrollSection_certificates = document.querySelector("#certificates");
const scrollSection_contact = document.querySelector("#footer");

const sections = [
  scrollSection_about,
  scrollSection_portfolio,
  scrollSection_skills,
  scrollSection_certificates,
  scrollSection_contact,
];
//TODO: sections top scroll value
// sections.forEach((sec) => {
//   try {
//     console.log(sec.getBoundingClientRect().y);
//   } catch (error) {}
// });

const aboutTab = document.querySelector("#aboutTab");
const portfolioTab = document.querySelector("#portfolioTab");
const skillsTab = document.querySelector("#skillsTab");
const certTab = document.querySelector("#certTab");
const contactTab = document.querySelector("#contactTab");

const menuBar = document.querySelector("#menuBar"); //bg change color not working.
const tabs = document.querySelectorAll("tab");
const scrollUp = document.querySelector(".scrollUp");

let scrollValue = 0;

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  scrollValue = document.body.scrollTop || document.documentElement.scrollTop;

  // console.log("scrollValue", scrollValue);

  resetActiveTab();
  if (scrollValue >= scroll_about[0] && scrollValue <= scroll_about[1]) {
    aboutTab.classList.add("activeTab");
  } else if (
    scrollValue >= scroll_portfolio[0] &&
    scrollValue <= scroll_portfolio[1]
  ) {
    portfolioTab.classList.add("activeTab");
  } else if (
    scrollValue >= scroll_skills[0] &&
    scrollValue <= scroll_skills[1]
  ) {
    skillsTab.classList.add("activeTab");
  } else if (
    scrollValue >= scroll_certificates[0] &&
    scrollValue <= scroll_certificates[1]
  ) {
    certTab.classList.add("activeTab");
  } else if (scrollValue >= scroll_conctactMe[0]) {
    contactTab.classList.add("activeTab");
  }

  if (scrollValue > 20) {
    scrollUp.classList.remove("invisible");
    menuBar.style.backgroundColor = "rgb(6, 30, 51)";
  } else {
    scrollUp.classList.add("invisible");
    menuBar.style.backgroundColor = "";
  }
}

const resetActiveTab = () => {
  aboutTab.classList.remove("activeTab");
  portfolioTab.classList.remove("activeTab");
  skillsTab.classList.remove("activeTab");
  certTab.classList.remove("activeTab");
  contactTab.classList.remove("activeTab");
};

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// menuBtn.addEventListener('blur', removeShow);

scrollUp.addEventListener("click", topFunction);

/* Portfolio Projects */
const schoolProjects = document.querySelector("#schoolProjects");
const sillyGames = document.querySelector("#sillyGames");
const personalProjects = document.querySelector("#personalProjects");
const internet = document.querySelector("#internetProjects");
const freelancer = document.querySelector("#freelancer");

const section = {
  schoolProjects: schoolProjects,
  sillyGames: sillyGames,
  personalProjects: personalProjects,
  internet: internet,
  freelancer: freelancer,
};

/* Accordion handler */
const accordion = document.getElementsByClassName("accordion");
const allPanels = document.querySelectorAll(".panel");

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

const techFilters = document.querySelectorAll(".tech_filter");

const selectChilds = (filterParam) => {
  const internetChilds = document.querySelectorAll(".intChild");
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
const showAllBtn = document.querySelector("#showAll");
const secundaries = document.querySelectorAll(".secundary");
const projects = document.querySelectorAll(".projects");

let is_showing = false;

//TODO: a show all projects at once feature with search and filter

/* Skill functions */
const basicFrontend = document.querySelector("#basicFrontend div");
const frameworks = document.querySelector("#frameworks div");
const advanceFrontend = document.querySelector("#advanceFrontend div");
const advanceFrontend2 = document.querySelector("#advanceFrontend2 div");
const backendNode = document.querySelector("#backendNode div");
const backendPython = document.querySelector("#backendPython div");
const backendPHP = document.querySelector("#backendPHP div");
const cloudService = document.querySelector("#cloudService div");
const backendJava = document.querySelector("#backendJava div");
const embedSystems = document.querySelector("#embedSystems div");
const cms = document.querySelector("#cms div");
const cicd = document.querySelector("#cicd div");
const otherSkills = document.querySelector("#otherSkills div");

const skillGroups = {
  basicFrontend: basicFrontend,
  frameworks: frameworks,
  advanceFrontend: advanceFrontend,
  advanceFrontend2: advanceFrontend2,
  backendNode: backendNode,
  backendPython: backendPython,
  backendPHP: backendPHP,
  cloudService: cloudService,
  backendJava: backendJava,
  embedSystems: embedSystems,
  cms: cms,
  cicd: cicd,
  otherSkills: otherSkills,
};
//todo: move skills data to database

class SkillCard extends HTMLElement {
  /**
   *
   * @param {string} id
   * @param {string} skillName
   * @param {int} stars
   * @param {string} imgUrl
   */
  constructor(id, skillName, stars, imgUrl, isInvisible) {
    super();
    this.content = `<div id=${id} class="skill" ${
      isInvisible ? "invisible" : null
    } >
                <img class='techLogo' src="${imgUrl}" alt="icon">
                <div class='skillValues'>
                    <p class='skillTitle'>${skillName}</p>
                    <p class='skillRating'>${
                      stars > 0 ? "⭐".repeat(stars) : " - "
                    }</p> 
                    <div class="fill-bar"><div class="level" id="HTML-level"></div></div>
                </div> 
            </div>`;
  }
}

if ("customElements" in window) {
  customElements.define("skill-card", SkillCard);
}

const renderData = () => {
  renderSkills();
  calculatePercent();
};

const renderSkills = () => {
  skillsData.forEach((skill) => {
    const { id, skillName, stars, imgUrl, skillgroup, isInvisible } = skill;
    const newSkill = new SkillCard(id, skillName, stars, imgUrl, isInvisible);
    skillGroups[skillgroup].innerHTML += newSkill?.content;
  });
};

const round = (value, precision) => {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

/* Calculate XP% per skill group */
const allGroups = document.querySelectorAll(".skillGroup");
const calculatePercent = () => {
  let starText;
  allGroups.forEach((group) => {
    let stars = 0; //total of satrs in a skill group
    const overall = group.querySelector(".overall");
    const skillRatings = group.querySelectorAll(".skillRating");
    const skills = group.querySelector(".subSkills");
    skillRatings.forEach((rating) => {
      starText = rating.innerText;

      for (const char of starText) {
        if (char === "⭐") {
          stars++;
        }
      }
    });

    // const total = skills.childElementCount * 5
    const skillCount = skills.childElementCount;

    if (overall) {
      // overall.innerText = `${stars}/${total}`;

      overall.innerText = `${round(stars / skillCount, 1)}x⭐`;
    }
  });
};

renderData();

const showMoreSkills = document.querySelector(".showMoreSkills");
const secundarySkillGroup = document.querySelectorAll(".secundarySkillGroup");
const notStudiedSkill = document.querySelectorAll(".notStudiedSkill");
let visibleSkill = false;

const toogleMoreSkills = () => {
  visibleSkill = !visibleSkill;
  secundarySkillGroup.forEach((item) => {
    item.classList.toggle("invisible");
  });

  notStudiedSkill.forEach((item) => {
    item.classList.toggle("invisible");
  });

  if (visibleSkill) {
    showMoreSkills.innerText = "Show less";
  } else {
    showMoreSkills.innerText = "Show more";
  }
};

showMoreSkills.addEventListener("click", toogleMoreSkills);

//skill legend

const showSkillsLegend = document.querySelector(".showSkillsLegend");
const skillLegend = document.querySelector(".skillsLegend");
let isShowLegend = false;
const showSkillsLegendHandler = () => {
  skillLegend.classList.toggle("invisible");
  isShowLegend = !isShowLegend;
  isShowLegend
    ? (showSkillsLegend.innerText = "Hide Legend")
    : (showSkillsLegend.innerText = "Show Legend");
};

showSkillsLegend.addEventListener("click", showSkillsLegendHandler);

/* show certificates */

class CertificateCard extends HTMLElement {
  /**
   *
   * @param {string} id
   * @param {string} title
   * @param {string} docLink
   */
  constructor(id, title, docLink, isInvisible) {
    super();
    this.content = `
      <div id=${id} class="certificate ${
      isInvisible ? "irrelevant invisible" : ""
    }">
        <div>    
          <a class="certView" href=${docLink} target="_blank" >
            <div> 
              ${title} 
            </div>
            <div> 
              <img src=${docLink} frameborder="0" class='document docLink'/>  
            </div>
          </a>
        </div>
      </div>
    `;
  }
}

if ("customElements" in window) {
  customElements.define("certificate-cards", CertificateCard);
}

const mainCertificates = document.querySelector(".main-certificates");
const onlineCertificates1 = document.querySelector(".online-certificates1");
const onlineCertificates2 = document.querySelector(".online-certificates2");
const onlineCertificates3 = document.querySelector(".online-certificates3");
const onlineCertificates4 = document.querySelector(".online-certificates4");
const othersCertificates = document.querySelector(".othersCertificates");

const CertificateSections = {
  mainCertificates: mainCertificates,
  onlineCertificates1: onlineCertificates1,
  onlineCertificates2: onlineCertificates2,
  onlineCertificates3: onlineCertificates3,
  onlineCertificates4: onlineCertificates4,
  othersCertificates: othersCertificates,
};

const renderCerts = () => {
  allCertificate.forEach((cert) => {
    const { id, title, docLink, section } = cert;
    const newCertCard = new CertificateCard(id, title, docLink);
    CertificateSections[section].innerHTML += newCertCard.content;
  });
};
renderCerts();

const moreCertificatesBtn = document.querySelector(".moreCertificates"); //btn

let is_certificateShowing = false;

const showAllCertificates = () => {
  is_certificateShowing = !is_certificateShowing;
  othersCertificates.classList.toggle("invisible");
  is_certificateShowing
    ? (moreCertificatesBtn.textContent = "Hide Irrelevant certificates")
    : (moreCertificatesBtn.textContent = "Show Irrelevant certificates");
};
moreCertificatesBtn.addEventListener("click", showAllCertificates);

/*certificates carousel */
const carousel = document.querySelector(".carousel");
const track = document.querySelector(".carousel__track");
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const dotsNav = document.querySelector(".carousel__nav");

allCertificate;

allCertificate.forEach((cert, i) => {
  track.innerHTML += `
        <li id="slide${i}" name="slide${i}" class="carousel__slide slide${i} ${
    i === 0 ? "current_slide" : ""
  }">
            <a href="${cert.docLink}" target="blank">
              <img src="${cert.docLink}" alt="slide${
    cert.id
  }" class="carousel__image"/>
            </a>
        </li>
    `;
  dotsNav.innerHTML += `
        <button class="carousel__indicator ${
          i === 0 ? "current_dot" : ""
        } "></button
    `;
});

const slides = Array.from(track.children);
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, i) => {
  slide.style.left = `${i * slideWidth}px`;
};

slides.forEach(setSlidePosition);

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current_dot");
  targetDot.classList.add("current_dot");
};

const hideShowArrows = (targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  } else {
    nextButton.classList.remove("is-hidden");
    prevButton.classList.remove("is-hidden");
  }
};

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current_slide");
  targetSlide.classList.add("current_slide");
};

nextButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current_slide");
  const nextSlide = currentSlide.nextElementSibling;
  const targetIndex = slides.findIndex((slide) => slide === nextSlide);
  const currentDot = dotsNav.querySelector(".current_dot");
  const targetDot = currentDot.nextElementSibling;
  moveToSlide(track, currentSlide, nextSlide);
  hideShowArrows(targetIndex);
  updateDots(currentDot, targetDot);
});

prevButton.addEventListener("click", () => {
  const currentSlide = track.querySelector(".current_slide");
  const prevSlide = currentSlide.previousElementSibling;
  const targetIndex = slides.findIndex((slide) => slide === prevSlide);
  const currentDot = dotsNav.querySelector(".current_dot");
  const targetDot = currentDot.previousElementSibling;
  moveToSlide(track, currentSlide, prevSlide);
  hideShowArrows(targetIndex);
  updateDots(currentDot, targetDot);
});

dotsNav.addEventListener("click", (e) => {
  const targetDot = e.target.closest("button");
  if (!targetDot) return;

  const currentSlide = track.querySelector(".current_slide");
  const currentDot = dotsNav.querySelector(".current_dot");
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  hideShowArrows(targetIndex);
});

/* SHOW certificates Mode */
const gallery = document.querySelector(".gallery");
const galleryBtn = document.querySelector(".certDisplayMode");

let showAsGallery = false;

const toggleModeCert = () => {
  carousel.classList.toggle("invisible");
  gallery.classList.toggle("invisible");

  showAsGallery = !showAsGallery;

  if (showAsGallery) {
    galleryBtn.innerText = "Show as carousel";
  } else {
    galleryBtn.innerText = "Show as gallery";
  }
};

galleryBtn.addEventListener("click", toggleModeCert);

/* copyrights */
const year = new Date();
const yearSpan = document.querySelector(".year");
yearSpan.innerText = `${year.getFullYear()}`;

/* reset animations */

const resetAll = () => {
  hexMap.innerHTML = "";
  grinan.classList.remove("deattach");
  g.style.color = "#white";
  victor.classList.remove("lightsOn");
  v.style.color = "#white";
  // developer.classList.remove("spin");
  portfolio.classList.remove("spin");
};

/* hex Map */
// const hexMap = document.querySelector(".hexMap");
// const hexSize = 50;

// let width = document.body.clientWidth;
// let height = document.body.clientHeight;
// let rows = height / 4 / hexSize;
// let columns = width / hexSize - 1;

// window.addEventListener("resize", () => {
//   resetAll();
// });

// const createHexMatrix = () => {
//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < columns; j++) {
//       const blank = document.createElement("img");
//       blank.id = `${i}${j}`;
//       blank.src = i % 2 === 0 ? "./hexes/selected.png" : "./hexes/hostile.png";
//       blank.classList = "hex";
//       blank.style.left =
//         i % 2 === 0 ? `${j * hexSize}px` : `${j * hexSize + hexSize / 2}px`;
//       blank.style.top = `${i * (hexSize * 0.75)}px`;
//       hexMap.appendChild(blank);
//     }
//   }
// };
