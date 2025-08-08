// Smooth scroll for "Get in Touch" button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.onclick = function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  };
});
