const menu = document.getElementById("menuIcon");
const nav = document.getElementById("navLinks");

menu.addEventListener("click", () => {
  nav.classList.toggle("show");
});
