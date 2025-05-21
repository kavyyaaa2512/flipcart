document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let slideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? "block" : "none";
        });
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === index);
        });
    }

    function moveSlide(step) {
        currentIndex += step;
        if (currentIndex >= slides.length) currentIndex = 0;
        if (currentIndex < 0) currentIndex = slides.length - 1;
        showSlide(currentIndex);
        resetAutoSlide();
    }

    function jumpToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
        resetAutoSlide();
    }

    function startAutoSlide() {
        slideInterval = setInterval(() => {
            moveSlide(1);
        }, 3000);
    }

    function resetAutoSlide() {
        clearInterval(slideInterval);
        startAutoSlide();
    }

    // Auto-Slideshow Starts
    startAutoSlide();

    // Attach event listeners
    document.querySelector(".prev").addEventListener("click", () => moveSlide(-1));
    document.querySelector(".next").addEventListener("click", () => moveSlide(1));
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => jumpToSlide(index));
    });

    // Show the first slide initially
    showSlide(currentIndex);
});