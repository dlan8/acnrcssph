// Function to toggle the menu
function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

// Function to close the menu
function closeMenu() {
    var menu = document.getElementById("menu");
    menu.classList.remove("active");
}

// Event listener to close the menu when clicking outside of it
document.addEventListener("click", function(event) {
    var menu = document.getElementById("menu");
    // Check if the click event target is not the menu itself or the menu toggle button
    if (!menu.contains(event.target) && !document.querySelector(".menu-toggle").contains(event.target)) {
        menu.classList.remove("active"); // Close the menu
    }
});


// Slide index and slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slides.fade');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    slides[slideIndex].style.display = 'block';
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}


// Navigation for slideshow
function plusSlides(n) {
    slideIndex += n;
    showSlides();
}
