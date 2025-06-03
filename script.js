/* ---------------------------------------------------------------
   HERO CTA – simple fade-in on page load
   --------------------------------------------------------------- */
window.addEventListener('load', () => {
  const heroCTA = document.querySelector('.cta-button');
  heroCTA.style.opacity = 0;
  heroCTA.style.transition = 'opacity 0.8s ease-out 0.3s';
  requestAnimationFrame(() => heroCTA.style.opacity = 1);
});

/* ---------------------------------------------------------------
   INTERSECTION OBSERVER – bullets + quote marks
   --------------------------------------------------------------- */
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);        // fire once
    });
  },
  { threshold: 0.2 }
);

/* Observe each bullet list item and each quote mark */
document
  .querySelectorAll('.bullet-steps li, .quote-mark')
  .forEach(el => observer.observe(el));
