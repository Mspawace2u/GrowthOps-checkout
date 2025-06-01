// Fade + slide-in bullets
const bullets = document.querySelectorAll('.how-it-works-list li');

const bulletObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 150);
    }
  });
}, { threshold: 0.3 });

bullets.forEach(bullet => bulletObserver.observe(bullet));

// Quote mark animations
const quotes = document.querySelectorAll('.quote-mark');

const quoteObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

quotes.forEach(q => quoteObserver.observe(q));