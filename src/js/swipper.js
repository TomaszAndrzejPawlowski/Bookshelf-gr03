let isScrolled = false;

function scrollSlider() {
    const slider = document.getElementById('charitiesSlider');
    const sliderItemHeight = slider.children[0].offsetHeight;
    const scrollAmount = 6 * sliderItemHeight; // Przewiń o wysokość 3 elementów

    if (!isScrolled) {
        slider.style.transform = `translateY(-${scrollAmount}px)`;
        for (let i = 0; i < 3; i++) {
            slider.children[i].style.visibility = 'hidden';
        }
        rotateArrow('down');
    } else {
        slider.style.transform = 'translateY(0)';
        for (let i = 0; i < 6; i++) {
            slider.children[i].style.visibility = 'visible';
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