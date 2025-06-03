document.addEventListener("DOMContentLoaded", function () {
  const bullets = document.querySelectorAll(".bullet-item");
  const emojis = document.querySelectorAll(".emoji");
  const texts = document.querySelectorAll(".bullet-text");
  const quotes = document.querySelectorAll(".quote");
  const observerOptions = {
    threshold: 0.1
  };

  const animateOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll, observerOptions);
  bullets.forEach((bullet) => observer.observe(bullet));
  emojis.forEach((emoji) => observer.observe(emoji));
  texts.forEach((text) => observer.observe(text));
  quotes.forEach((quote) => observer.observe(quote));
});
