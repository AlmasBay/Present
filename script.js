document.addEventListener("DOMContentLoaded", function() {
    const compliments = document.querySelectorAll('.compliments p');
    compliments.forEach((compliment, index) => {
        setTimeout(() => {
            compliment.style.opacity = 1;
        }, index * 1000);
    });
});
