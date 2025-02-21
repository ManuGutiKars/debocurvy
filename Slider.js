// Archivo: Slider.js (Mejorado sin flechas y autoplay continuo)

let currentIndex = 0;
const slider = document.querySelector('.slider');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.style.width = '100%';
    item.style.height = '800px';
    item.querySelector('img').style.objectFit = 'cover';
    item.querySelector('img').style.width = '100%';
    item.querySelector('img').style.height = '100%';
});

function showSlide(index) {
    if (index < 0) currentIndex = galleryItems.length - 1;
    else if (index >= galleryItems.length) currentIndex = 0;
    else currentIndex = index;

    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Autoplay continuo sin flechas
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);
