document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".how-it-works-list li");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 150); // 150ms cascade delay
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  steps.forEach((step) => {
    observer.observe(step);
  });
});