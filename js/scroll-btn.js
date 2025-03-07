const btnUp = document.querySelector('.scroll-btn');

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btnUp.classList.add("show");
    } else {
        btnUp.classList.remove("show");
    }
});

btnUp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});