// Плавная прокрутка для якорей
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Анимация появления элементов при скролле
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.service-card, .price-table, .review');
    elements.forEach(el => {
        const elPosition = el.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (elPosition < screenPosition) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }
    });
};

// Инициализация
window.addEventListener('load', () => {
    document.querySelectorAll('.service-card, .review').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
    });
});

window.addEventListener('scroll', animateOnScroll);