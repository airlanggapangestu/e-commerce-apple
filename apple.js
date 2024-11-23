// memunculkan nav
const menuToggle = document.querySelector(".menu-toggle input");
const nav = document.querySelector(".nav-links");
menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});

// memunculkan cart
const menuTogglee = document.querySelector(".nav-icon input");
const cart = document.querySelector(".cart");
menuTogglee.addEventListener("click", function () {
  cart.classList.toggle("muncul");
});
