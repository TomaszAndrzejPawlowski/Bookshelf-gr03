let isScrolled = false;

function scrollSlider() {
    const slider = document.querySelector('.slider_items');
    const sliderItemHeight = document.querySelector('.slider_item').offsetHeight;
    const scrollAmount = 3 * sliderItemHeight; // Przewiń o wysokość 3 elementów

    if (!isScrolled) {
        slider.style.transform = `translateY(-${scrollAmount}px)`;
        for (let i = 0; i < 3; i++) {
            document.querySelectorAll('.slider_item')[i].style.visibility = 'hidden';
        }
        rotateArrow('down');
    } else {
        slider.style.transform = 'translateY(0)';
        for (let i = 0; i < 3; i++) {
            document.querySelectorAll('.slider_item')[i].style.visibility = 'visible';
        }
        rotateArrow('up');
    }

    isScrolled = !isScrolled;
}

function rotateArrow(direction) {
    const arrowIcon = document.querySelector('.arrow i');
    if (direction === 'up') {
        arrowIcon.style.transform = 'rotate(180deg)';
    } else {
        arrowIcon.style.transform = 'rotate(0deg)';
    }
}