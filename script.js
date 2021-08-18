"use strict";
const header = document.querySelector(".section__1");
const section2 = document.querySelector("#section--2");
const nav = document.querySelector("nav");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const slides = document.querySelectorAll(".slide");
const hamburger = document.querySelector(".menu__bars");
const menu = document.querySelector(".menu");
const menu__links = document.querySelectorAll(".menu a");
const mobile__menu = document.querySelector(".mobile_menu");
const modal = document.querySelectorAll(".modal");
const details_button = document.querySelectorAll(".details_button");
const close_button = document.querySelectorAll(".close_button");

////////////       STICKY NAVIGATION      /////////////

const stickyNav = function (entries) {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  treshold: 0,
  rootMargin: "-90px",
});

headerObserver.observe(header);

////////////       MOBILE MENU     /////////////

hamburger.addEventListener("click", function () {
  menu.classList.toggle("mobile_menu");
});

menu__links.forEach((i) =>
  i.addEventListener("click", function () {
    menu.classList.remove("mobile_menu");
  })
);

menu.addEventListener("click", function (e) {
  menu.classList.remove("mobile_menu");
});

////////////       SLIDER GALLERY    /////////////

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function () {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlide);

////////////       MODAL WINDOWS        /////////////

details_button.forEach((e, i) => {
  e.addEventListener("click", () => modal[i].classList.add("active_modal"));
});

close_button.forEach((e, i) =>
  e.addEventListener("click", () => modal[i].classList.remove("active_modal"))
);
