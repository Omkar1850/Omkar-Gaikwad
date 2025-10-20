document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    toggle.classList.toggle("active");

    // Change icon between ☰ and ✖
    toggle.textContent = toggle.classList.contains("active") ? "✖" : "☰";
  });
});
