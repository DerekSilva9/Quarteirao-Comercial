const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide') || slides[0];
    const nextSlide = currentSlide.nextElementSibling || slides[0];
    moveToSlide(track, currentSlide, nextSlide);
});

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide') || slides[0];
    const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
    moveToSlide(track, currentSlide, prevSlide);
});

function openNav() {
document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
document.getElementById("sidebar").style.width = "0";
}

function toggleMenu() {
var sidebar = document.getElementById('sidebar');
if (sidebar.style.width === '200px') { 
sidebar.style.width = '0';
} else {
sidebar.style.width = '200px'; 
}
}


function adjustMenu() {
var navMenu = document.getElementById('nav-menu');
if (window.innerWidth > 768) {
    navMenu.style.display = 'flex';
} else {
    navMenu.style.display = 'none';
}
}

window.addEventListener('resize', adjustMenu);
window.addEventListener('load', adjustMenu);