document.addEventListener("DOMContentLoaded", function () {
    const bullets = document.querySelectorAll(".process-list li");
    const quoteMark = document.querySelector(".quote-mark");

    function animateOnScroll(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }

    const observer = new IntersectionObserver(animateOnScroll, {
        threshold: 0.5
    });

    bullets.forEach(bullet => observer.observe(bullet));

    if (quoteMark) {
        const quoteObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    quoteMark.style.opacity = 1;
                    quoteMark.style.transform = "scale(1)";
                }
            });
        }, { threshold: 0.5 });

        quoteObserver.observe(quoteMark);
    }
});
