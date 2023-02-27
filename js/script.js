// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika cake menu di klik
document.querySelector("#cake-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const cake = document.querySelector("#cake-menu");

document.addEventListener("click", function (e) {
  if (!cake.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
