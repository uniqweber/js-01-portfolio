const openMenu = document.querySelector("#openMenu");
const closeMenu = document.querySelector("#closeMenu");
const navLinks = document.querySelector("#navLinks");

openMenu.addEventListener("click", () => {
  navLinks.classList.remove("-right-[110%]");
  navLinks.classList.add("shadow-[-200px_0_0px_0px_rgba(0,0,0,0.7)]");
  navLinks.classList.add("right-0");
  openMenu.classList.add("hidden");
});

closeMenu.addEventListener("click", () => {
  navLinks.classList.add("-right-[110%]");
  navLinks.classList.remove("shadow-[-200px_0_0px_0px_rgba(0,0,0,0.7)]");
  navLinks.classList.remove("right-0");
  openMenu.classList.remove("hidden");
});
