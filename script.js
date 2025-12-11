// 1. Инициализация AOS (анимации при скролле)
AOS.init({
    duration: 1000, // Длительность анимации
    once: true,     // Анимация проигрывается 1 раз
});

// 2. Мобильное меню
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-menu');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
    // Анимация крестика
    burger.classList.toggle('toggle');
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

// Создаем звезды
function createStars() {
    stars = [];
    const starCount = 150; // Количество звезд
    for (let i = 0; i < starCount; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: Math.random() * 1.5,
            speed: Math.random() * 0.5
        });
    }
}

// Анимация звезд
function animate() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'white';

    stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();

        // Движение
        star.y -= star.speed;

        // Если звезда ушла за верхний край, возвращаем её вниз
        if (star.y < 0) {
            star.y = height;
            star.x = Math.random() * width;
        }
    });

    requestAnimationFrame(animate);
}

window.addEventListener('resize', () => {
    resize();
    createStars();
});

// Запуск
resize();
createStars();
animate();