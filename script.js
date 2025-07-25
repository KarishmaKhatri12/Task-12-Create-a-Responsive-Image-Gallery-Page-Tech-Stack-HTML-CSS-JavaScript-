// Lightbox functionality
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".image-card img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") lightbox.style.display = "none";
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Dark mode toggle
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
