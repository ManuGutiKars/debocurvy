// Archivo: slider.js

let currentIndex = 0;

// Seleccionar elementos
const slider = document.querySelector('.slider');
const galleryItems = document.querySelectorAll('.gallery-item');

// Crear flechas globales para todo el slider
const leftArrow = document.createElement('button');
const rightArrow = document.createElement('button');

// Configuración de los botones de navegación
leftArrow.innerHTML = '&#9664;';
rightArrow.innerHTML = '&#9654;';

leftArrow.classList.add('slider-arrow', 'slider-arrow-left');
rightArrow.classList.add('slider-arrow', 'slider-arrow-right');

// Posicionar las flechas a los lados del contenedor del slider
leftArrow.style.position = 'absolute';
leftArrow.style.top = '50%';
leftArrow.style.left = '10px';
leftArrow.style.transform = 'translateY(-50%)';
leftArrow.style.zIndex = '10';
leftArrow.style.background = 'rgba(0, 0, 0, 0.5)';
leftArrow.style.color = '#fff';
leftArrow.style.border = 'none';
leftArrow.style.padding = '10px';
leftArrow.style.cursor = 'pointer';
leftArrow.style.borderRadius = '50%';

rightArrow.style.position = 'absolute';
rightArrow.style.top = '50%';
rightArrow.style.right = '10px';
rightArrow.style.transform = 'translateY(-50%)';
rightArrow.style.zIndex = '10';
rightArrow.style.background = 'rgba(0, 0, 0, 0.5)';
rightArrow.style.color = '#fff';
rightArrow.style.border = 'none';
rightArrow.style.padding = '10px';
rightArrow.style.cursor = 'pointer';
rightArrow.style.borderRadius = '50%';

// Agregar flechas de navegación al contenedor del slider
slider.appendChild(leftArrow);
slider.appendChild(rightArrow);

// Asegurar que todas las imágenes tengan el mismo tamaño
galleryItems.forEach(item => {
    item.style.width = '100%';
    item.style.height = '800px'; // Puedes ajustar la altura según necesites
    item.querySelector('img').style.objectFit = 'cover';
    item.querySelector('img').style.width = '100%';
    item.querySelector('img').style.height = '100%';
});

// Función para mostrar el slide correspondiente
function showSlide(index) {
    // Asegurarse de que el índice esté dentro de los límites
    if (index < 0) {
        currentIndex = galleryItems.length - 1;
    } else if (index >= galleryItems.length) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }
    // Mover el slider
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Eventos de las flechas
leftArrow.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

rightArrow.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Autoplay opcional
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000);