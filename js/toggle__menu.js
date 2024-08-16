const toggleMenu = document.querySelector(".toggle__menu");
const headerNav = document.querySelector(".header__nav");

toggleMenu.addEventListener("click", () => {
  headerNav.classList.toggle("open");
  toggleMenu.classList.toggle("open");
});


window.onload = function () {
  document.querySelector('.services__baraha').classList.add('animate');
};