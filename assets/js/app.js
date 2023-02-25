const btnToggle = document.querySelector(".toggle");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

btnToggle.addEventListener("click", function () {
  header.classList.toggle("active");
  overlay.classList.toggle("active");
});

overlay.addEventListener("click", function (e) {
  this.classList.remove("active");
  header.classList.remove("active");
});
