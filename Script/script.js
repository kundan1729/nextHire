document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    function toggleMenu() {
        const navLinks = document.querySelector(".nav-links");
        navLinks.style.display = (navLinks.style.display === "flex") ? "none" : "flex";
    }

    // Attach event listener to the hamburger menu
    const hamburger = document.querySelector(".hamburger-menu");
    if (hamburger) {
        hamburger.addEventListener("click", toggleMenu);
    }
});
