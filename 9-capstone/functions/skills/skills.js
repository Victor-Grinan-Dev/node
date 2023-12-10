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
const allGroups = $(".skillGroup");
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

const showMoreSkills = $(".showMoreSkills");
const secundarySkillGroup = $(".secundarySkillGroup");
const notStudiedSkill = $(".notStudiedSkill");
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

const showSkillsLegend = $(".showSkillsLegend");
const skillLegend = $(".skillsLegend");
let isShowLegend = false;
const showSkillsLegendHandler = () => {
  skillLegend.classList.toggle("invisible");
  isShowLegend = !isShowLegend;
  isShowLegend
    ? (showSkillsLegend.innerText = "Hide Legend")
    : (showSkillsLegend.innerText = "Show Legend");
};

showSkillsLegend.addEventListener("click", showSkillsLegendHandler);
