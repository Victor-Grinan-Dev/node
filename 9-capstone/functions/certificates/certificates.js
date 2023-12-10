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

const mainCertificates = $(".main-certificates");
const onlineCertificates1 = $(".online-certificates1");
const onlineCertificates2 = $(".online-certificates2");
const onlineCertificates3 = $(".online-certificates3");
const onlineCertificates4 = $(".online-certificates4");
const othersCertificates = $(".othersCertificates");

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

const moreCertificatesBtn = $(".moreCertificates"); //btn

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
const carousel = $(".carousel");
const track = $(".carousel__track");
const nextButton = $(".carousel__button--right");
const prevButton = $(".carousel__button--left");
const dotsNav = $(".carousel__nav");

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
const gallery = $(".gallery");
const galleryBtn = $(".certDisplayMode");

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
