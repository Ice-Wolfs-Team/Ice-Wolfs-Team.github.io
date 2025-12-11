// 1. Инициализация AOS (анимации при скролле)
AOS.init({
    duration: 800, // Чуть быстрее
    easing: 'ease-out-cubic', // Плавнее
    once: true,    
    offset: 100, // Начинать анимацию чуть раньше
});

// 2. Мобильное меню (Burger)
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-menu');
const body = document.body;
const navLinks = document.querySelectorAll('.nav-menu a');

// Функция переключения меню
function toggleMenu() {
    nav.classList.toggle('active');
    burger.classList.toggle('toggle');
    body.classList.toggle('no-scroll'); // Блокируем скролл фона
}

burger.addEventListener('click', toggleMenu);

// Закрываем меню при клике на любую ссылку
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (nav.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// 3. Космический фон (Stars Effect)
const canvas = document.getElementById('space-canvas');
const ctx = canvas.getContext('2d');

let width, height;
let stars = [];

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}

function createStars() {
    stars = [];
    // Адаптивное количество звезд: меньше на телефоне
    const starCount = window.innerWidth < 768 ? 80 : 150; 
    
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5,
            speed: Math.random() * 0.3 + 0.1 // Разная скорость
        });
    }
}

function animate() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        star.y -= star.speed;

        if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
        }
    });

    requestAnimationFrame(animate);
}

// Слушатели
window.addEventListener('resize', () => {
    resize();
    createStars();
});

// Запуск
resize();
createStars();
animate();