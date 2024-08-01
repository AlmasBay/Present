document.addEventListener("DOMContentLoaded", function() {
    const compliments = document.querySelectorAll('#compliments-list p');
    compliments.forEach((compliment, index) => {
        setTimeout(() => {
            compliment.style.opacity = 1;
        }, index * 1000);
    });
});
