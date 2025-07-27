// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Contact form submission (just a demo alert)
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message!');
});