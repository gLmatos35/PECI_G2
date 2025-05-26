document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector("[data-navbar]");
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const overlay = document.querySelector("[data-overlay]");

  const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
  }

  navTogglers.forEach(toggler => {
    toggler.addEventListener("click", toggleNav);
  });
});
