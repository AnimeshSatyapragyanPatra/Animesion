// script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Welcome to Animesion!");

  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll('nav a[href^="#"]');

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Animate header text on page load
  const headerTitle = document.querySelector("header h1");
  if (headerTitle) {
    headerTitle.style.opacity = 0;
    headerTitle.style.transform = "translateY(-20px)";
    setTimeout(() => {
      headerTitle.style.transition = "opacity 1s ease, transform 1s ease";
      headerTitle.style.opacity = 1;
      headerTitle.style.transform = "translateY(0)";
    }, 100);
  }
});
