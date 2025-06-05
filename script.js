/* ---------------------------------------------------------------
   HERO CTA – simple fade-in on load
   --------------------------------------------------------------- */
window.addEventListener('load', () => {
  const heroCTA = document.querySelector('.cta-button');
  if (heroCTA) {
    heroCTA.style.opacity = 0;
    heroCTA.style.transition = 'opacity 0.8s ease-out 0.3s';
    requestAnimationFrame(() => (heroCTA.style.opacity = 1));
  }
});

/* ---------------------------------------------------------------
   BULLET & QUOTE-MARK OBSERVERS
   --------------------------------------------------------------- */
const liObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      liObserver.unobserve(entry.target);
    });
  },
  { threshold: 0, rootMargin: '0px 0px -15% 0px' }
);

document
  .querySelectorAll('.bullet-steps li')
  .forEach((el) => liObserver.observe(el));

/* testimonials: add .visible to internal quote-mark */
const quoteObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const quote = entry.target.querySelector('.quote-mark');
      if (quote) quote.classList.add('visible');
      quoteObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.15 }
);

document
  .querySelectorAll('.testimonial')
  .forEach((box) => quoteObserver.observe(box));
  /* feature-list bullets: fade + pan-up */
document
  .querySelectorAll('.features li')
  .forEach(li => liObserver.observe(li));