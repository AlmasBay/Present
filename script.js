document.addEventListener("DOMContentLoaded", function() {
    const compliments = document.querySelectorAll('#compliments-list p');
    compliments.forEach((compliment, index) => {
        setTimeout(() => {
            compliment.style.opacity = 1;
        }, index * 1000);
    });
});

function toggleCompliments() {
    const complimentsList = document.getElementById('compliments-list');
    if (complimentsList.classList.contains('hidden')) {
        complimentsList.classList.remove('hidden');
    } else {
        complimentsList.classList.add('hidden');
    }
}

