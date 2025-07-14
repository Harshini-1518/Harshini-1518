const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Simple contact form alert (just for demo)
const form = document.getElementById('contact-form');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  form.reset();
});
