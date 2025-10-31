$(document).ready(function () {
  $("section").each(function () {
    const sectionDivs = $(this).find("[data-aos]");
    sectionDivs.each(function (index) {
      $(this).attr("data-aos-delay", (index + 1) * 100);
    });
  });

  AOS.init({
    offset: 20,
    delay: 50,
    duration: 750,
    once: true,
  });
});

let header = document.querySelector("header");
let main = document.querySelector("main");

window.addEventListener("scroll", () => {
  if (this.scrollY > 100) {
    header.classList.add("sticky");
    main.style.marginTop = header.offsetHeight + "px";
  } else {
    header.classList.remove("sticky");
    main.style.marginTop = "0px";
  }
});

var phoneImgs = new Swiper(".phoneImgs", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  spaceBetween: 60,
  speed: 1000,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 5,
    stretch: 10,
    depth: 200,
    modifier: 1.2,
    slideShadows: true,
  },
});

let navLinks = document.querySelectorAll(".nav_links a");
let sections = document.querySelectorAll("section");
let current;

window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    let secTop = sec.offsetTop;
    if (pageYOffset >= secTop - 100) {
      current = sec.getAttribute("id");
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});

const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".nav_links");
const layer = document.querySelector(".layer");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
  layer.classList.toggle("show");
});

layer.addEventListener("click", () => {
  menu.classList.remove("show");
  layer.classList.remove("show");
});
