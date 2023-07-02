// script.js
document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav");

    navLinks.forEach(link => {
        link.addEventListener("click", scrollToSection);
    });

    function scrollToSection(event) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        const offsetTop = targetSection.offsetTop;

        window.scrollTo({
            top: offsetTop - 70, // Adjust this offset to give some space between the top of the section and the navigation bar
            behavior: "smooth"
        });
    }
});
