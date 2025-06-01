// Fade + slide-in bullets
const bullets = document.querySelectorAll('.bullet');

const bulletObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.4 });

bullets.forEach(bullet => bulletObserver.observe(bullet));

// Quote mark animations
const quotes = document.querySelectorAll('.quote-mark');

const quoteObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.4 });

quotes.forEach(q => quoteObserver.observe(q));