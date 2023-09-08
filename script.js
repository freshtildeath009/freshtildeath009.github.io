// Variables
// Menu
const menu = document.querySelector(".menu-logo");
const menuContainer = document.querySelector(".nav-links");
const all = document.querySelectorAll(".all");
// project one live demo
const closeProject = document.querySelector(".project-one-hidden-container");
const btnEcommerce = document.querySelector(".btn-e-commerce");
// Animate project-one-title from the DOM
const projectOneTitle = document.querySelector(".project-one-title");
const projectOneContent = document.querySelector(".project-one-content");
// Change photo
const programmerPhoto = document.querySelector(".profile");
const programmerContainerPhoto = document.querySelector(
  ".contact-logo-container"
);
// End variables

// Menu
menu.addEventListener("click", () => {
  menuContainer.classList.toggle("nav-link-active");
});
all.forEach((all) => {
  all.addEventListener("click", () => {
    menuContainer.classList.remove("nav-link-active");
  });
});
// End Menu

// project one live demo
closeProject.addEventListener("click", (e) => {
  let item = e.target;

  if (item.classList.contains("close-project")) {
    closeProject.classList.add("project-hide");
    closeProject.classList.remove("project-display");
  }
});

btnEcommerce.addEventListener("click", () => {
  closeProject.classList.add("project-display");
  closeProject.classList.remove("project-hide");
});
// End project one live demo

let options = {
  root: null,
  rootMargin: "-50px 0px",
  threshold: 0.06,
};

document.addEventListener("DOMContentLoaded", () => {
  // Animate project-one-title and project-one-content from the DOM
  const observerProjectOneTitle = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        projectOneTitle.classList.add("active");
      } else {
        projectOneTitle.classList.remove("active");
      }
    });
  }, options);
  observerProjectOneTitle.observe(projectOneTitle);

  const observerProjectOneContent = new IntersectionObserver(function (
    entries
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        projectOneContent.classList.add("active");
      } else {
        projectOneContent.classList.remove("active");
      }
    });
  },
  options);
  observerProjectOneContent.observe(projectOneContent, programmerPhoto);
  // Animate project-one-title and project-one-content from the DOM
});

// Animate programmer photo
let imageChange = {
  root: null,
  rootMargin: "-300px 0px",
  threshold: 0,
};
const observerProgrammerPhoto = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    let item = entry;
    if (
      item.isIntersecting === true ||
      item.intersectionRatio > 0 ||
      item.target.classList === "profile"
    ) {
      setTimeout(() => {
        programmerPhoto.src = "./assets/images/profile.png";
      }, 500);
    } else {
      programmerPhoto.src = "./assets/images/profile(1).png";
    }
  });
}, imageChange);

observerProgrammerPhoto.observe(programmerPhoto);

// Carousel
const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel-btn-right");
const prevButton = document.querySelector(".carousel-btn-left");
const dotsNav = document.querySelector(".carousel-nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange slides next to one another
// slides[0].style.left = slideWidth * 0 + "px";
// slides[1].style.left = slideWidth * 1 + "px";
// slides[2].style.left = slideWidth * 2 + "px";
const setSlideePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlideePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const hideShowArrows = (slides, prevButton, nextButton, targetIndex)=>{
  if(targetIndex === 0){
    prevButton.classList.add("is-hidden");
    nextButton.classList.remove("is-hidden");
  }else if(targetIndex === slides.length - 1){
    prevButton.classList.remove("is-hidden");
    nextButton.classList.add("is-hidden");
  }else{
    prevButton.classList.remove("is-hidden");
    nextButton.classList.remove("is-hidden");
  }
}
// When I click left, move slides to the left
prevButton.addEventListener("click", (event) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
});
// When I click right, move slides to the right
nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(".current-slide");
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);
  // const amountToMove = nextSlide.style.left;
  // // Move to the next slide
  // track.style.transform = "translateX(-" + amountToMove + ")";
  // currentSlide.classList.remove("current-slide");
  // nextSlide.classList.add("current-slide");
  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

dotsNav.addEventListener("click", (e) => {
  // What indicator was clicked
  const targetDot = e.target.closest("button");

  if (!targetDot) return;
  const currentSlide = track.querySelector(".current-slide");
  const currentDot = dotsNav.querySelector(".current-slide");
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);

  hideShowArrows(slides, prevButton, nextButton, targetIndex);
});
// End carousel
