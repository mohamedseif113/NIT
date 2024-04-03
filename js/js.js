window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.navbar');
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled >= 200) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
var navLinks = document.querySelectorAll('.nav-link');

var svg = document.querySelector('.navbar-brand svg');

// Get the path element inside the SVG
var path = svg.querySelector('path');

// Listen for the scroll event
window.addEventListener('scroll', function () {
    // Check the scroll position
    if (window.pageYOffset >= 200) {
        // Change the color of nav-link elements to #000
        navLinks.forEach(function (link) {
            link.style.color = '#000';
        });

        // Change the fill color of the SVG to #000
        path.setAttribute('fill', '#000');
    } else {
        // Reset the color of nav-link elements
        navLinks.forEach(function (link) {
            link.style.color = '';
        });

        // Reset the fill color of the SVG
        path.setAttribute('fill', '#fff');
    }
});





document.addEventListener('DOMContentLoaded', function () {
    var nextButton = document.querySelector('.swiper-button-next');
    var prevButton = document.querySelector('.swiper-button-prev');
    var bannerTextElements = document.querySelectorAll('.banner-text');

    function showBannerText() {
        // Remove the show class from all banner text elements
        bannerTextElements.forEach(function (element) {
            element.classList.remove('show');
        });

        // Delay the addition of the show class to allow the transition to take effect
        setTimeout(function () {
            // Add the show class to the current banner text element
            var activeSlide = document.querySelector('.swiper-slide-active');
            var activeBannerText = activeSlide.querySelector('.banner-text');
            activeBannerText.classList.add('show');
        }, 100);
    }

    nextButton.addEventListener('click', showBannerText);
    prevButton.addEventListener('click', showBannerText);
});