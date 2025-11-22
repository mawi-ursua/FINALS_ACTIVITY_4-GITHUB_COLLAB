// Select hamburger button and nav menu container
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

// Toggle nav visibility on hamburger click
hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Optional: Close nav menu when clicking a nav link (on small screens)
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    if (navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
    }
  });
});
