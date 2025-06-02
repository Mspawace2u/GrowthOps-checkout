document.addEventListener("DOMContentLoaded", () => {
  const observerOptions = {
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".scroll-fade-in").forEach(el => {
    observer.observe(el);
  });

  document.querySelectorAll(".bullet-container").forEach(container => {
    observer.observe(container);
  });

  document.querySelectorAll(".quote-mark").forEach(quote => {
    observer.observe(quote);
  });
});