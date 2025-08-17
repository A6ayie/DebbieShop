// Toggle menu (if you add a burger menu later)
const navLinks = document.querySelector("nav ul");

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOnScroll = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

faders.forEach(fader => appearOnScroll.observe(fader));
