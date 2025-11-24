window.addEventListener("scroll", () => {
    const header = document.getElementById("header");

    if (window.scrollY > 10) {
        header.classList.add("bg-[var(--tmave-seda)]");
    } else {
        header.classList.remove("bg-[var(--tmave-seda)]");
    }
});