// script.js
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("show"); // Toggle the 'show' class
    });
});
let currentIndex = 0;

function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove('active');
        if (i === index) {
            testimonial.classList.add('active');
        }
    });
}

function changeTestimonial(direction) {
    const testimonials = document.querySelectorAll('.testimonial');
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = testimonials.length - 1; // Loop to last testimonial
    } else if (currentIndex >= testimonials.length) {
        currentIndex = 0; // Loop to first testimonial
    }

    showTestimonial(currentIndex);
}

// Initial display
showTestimonial(currentIndex);

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
function toggleMenu() {
    const options = document.getElementById("options");
    const arrow = document.getElementById("arrow");

    if (options.style.display === "block") {
        options.style.display = "none";
        arrow.innerHTML = "▼"; // Down arrow
    } else {
        options.style.display = "block";
        arrow.innerHTML = "▲"; // Up arrow
    }
}
