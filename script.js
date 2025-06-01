document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".how-it-works-list li");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  steps.forEach((step) => {
    observer.observe(step);
  });
});