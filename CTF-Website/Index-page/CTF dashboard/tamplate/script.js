document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const nextButton = document.getElementById('next-button');
    const agreeCheckbox = document.getElementById('agree-checkbox');
    let currentSlide = 0;

    // Display the first slide
    showSlide(currentSlide);

    agreeCheckbox.addEventListener('change', () => {
        if (agreeCheckbox.checked) {
            nextButton.disabled = false;
        } else {
            nextButton.disabled = true;
        }
    });

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    window.nextSlide = function() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            showSlide(currentSlide);
            if (currentSlide === slides.length - 1) {
                nextButton.innerHTML = "Go to Challenges";
            }
        }
    }

    window.goToChallenges = function() {
        window.location.href = 'web-chall/web_dev.html';  // Adjust to your actual challenge page URL
    }
});
