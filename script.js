window.addEventListener("scroll", function () {
  const steps = document.querySelectorAll(".bullet-steps li");
  steps.forEach((step, i) => {
    const rect = step.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      setTimeout(() => step.classList.add("visible"), i * 150);
    }
  });
});

window.addEventListener("load", () => {
  const cta = document.querySelector(".cta-button");
  cta.style.opacity = 0;
  setTimeout(() => {
    cta.style.opacity = 1;
  }, 500);
});
