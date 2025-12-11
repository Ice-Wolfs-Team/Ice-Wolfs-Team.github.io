document.addEventListener('DOMContentLoaded', () => {
    
    // Находим все элементы, которые хотим анимировать
    const hiddenElements = document.querySelectorAll('.hidden');

    // Настраиваем наблюдателя (Observer)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            // Если элемент пересек границу видимости
            if (entry.isIntersecting) {
                entry.target.classList.add('show'); // Добавляем класс анимации
            } 
            // else {
            //    entry.target.classList.remove('show'); // Раскомменть, если хочешь, чтобы анимация повторялась при скролле вверх
            // }
        });
    });

    // Говорим наблюдателю следить за каждым скрытым элементом
    hiddenElements.forEach((el) => observer.observe(el));
});