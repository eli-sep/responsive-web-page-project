const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const scrollBtn = document.getElementById("scrollToPricing");
const yearEl = document.getElementById("year");
const form = document.getElementById("contactForm");
const statusEl = document.getElementById("formStatus");

yearEl.textContent = new Date().getFullYear();

// Mobile nav toggle
navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Smooth scroll button
scrollBtn.addEventListener("click", () => {
    document.querySelector("#pricing").scrollIntoView({ behavior: "smooth" });
});

// Simple form UX (no backend)
form.addEventListener("submit", (e) => {
    e.preventDefault();
    statusEl.textContent = "Thanks! Your message is ready to send (demo only).";
    form.reset();
});
