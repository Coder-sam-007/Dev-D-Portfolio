//header stuff

const header = document.querySelector("header");
const MenuBTN = document.querySelector(".menu-btn");
const crossBTN = document.querySelector(".cross-btn");

MenuBTN.addEventListener("click", () => {
  header.classList.toggle("active");
});

crossBTN.addEventListener("click", () => {
  header.classList.remove("active");
});

const links = document.querySelectorAll("nav>ul>*");

links.forEach((link) =>
  link.addEventListener("click", () => header.classList.remove("active"))
);

//slider

let swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  mousewheel: true,
  keyboard: true,
});
