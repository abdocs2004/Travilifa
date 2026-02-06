const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        nav.classList.toggle("is-open");
    });
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
}
