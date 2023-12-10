//collapse menu
const collapse = $(".collapse");
const navLinks = $(".nav-link");
const menuBtn = $(".navbar-toggler");

collapse.style.backgroundColor = "white";
collapse.style.padding = "10px";

const removeShow = () => {
  collapse.classList.remove("show");
};

navLinks.forEach((link) => {
  link.addEventListener("click", removeShow);
});

//logo flying animation
const g = $("#g");
const v = $("#v");
const flying1 = $("#welcome-to");
const flying2 = $("#intro");
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
const developer = $(".developer");
const portfolio = $(".portfolioWord");
const grinan = $("#grinan");
const victor = $("#victor");

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

const scrollSection_about = $("#aboutArticle");
const scrollSection_portfolio = $("#portfolio");
const scrollSection_skills = $("#skillsBoxes");
const scrollSection_certificates = $("#certificates");
const scrollSection_contact = $("#footer");

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

const aboutTab = $("#aboutTab");
const portfolioTab = $("#portfolioTab");
const skillsTab = $("#skillsTab");
const certTab = $("#certTab");
const contactTab = $("#contactTab");

const menuBar = $("#menuBar"); //bg change color not working.
const tabs = $("tab");
const scrollUp = $(".scrollUp");

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

/***TODO: reset banner animations*/
const resetAll = () => {
  hexMap.innerHTML = "";
  grinan.classList.remove("deattach");
  g.style.color = "#white";
  victor.classList.remove("lightsOn");
  v.style.color = "#white";
  // developer.classList.remove("spin");
  portfolio.classList.remove("spin");
};

/***TODO: Add more. more animations*/
//https://animate.style/
