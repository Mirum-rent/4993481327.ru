// Интеграция WhatsApp
document.querySelector('.whatsapp-btn').addEventListener('click', function() {
    // Можно добавить отправку данных через API Wazzup
    window.open('https://wa.me/79770005127', '_blank');
});

// Слайдер отзывов (простой вариант)
let currentReview = 0;
const reviews = document.querySelectorAll('.review-slide');

function showReview(index) {
    reviews.forEach((review, i) => {
        review.style.display = i === index ? 'block' : 'none';
    });
}

// Автопрокрутка отзывов
setInterval(() => {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
}, 5000);