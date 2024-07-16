const navbarLinks = document.querySelector(".navbar .links");
const toggleMenuBtn = document.querySelector(".navbar .toggle-menu-btn");
const toggleMenuIcon = document.querySelector(".navbar .toggle-menu-btn i");
const navbarLinkItems = document.querySelectorAll(".navbar .links li a");

const toggleLinks = () => {
  navbarLinks.classList.toggle("show");
  toggleMenuIcon.classList.toggle("fa-xmark");
};

toggleMenuBtn.addEventListener("click", toggleLinks);

navbarLinkItems.forEach((link) => {
  link.addEventListener("click", toggleLinks);
});

AOS.init();