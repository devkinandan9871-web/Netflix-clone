const slider = document.querySelector('.tranding-section-slider');
const leftBtn = document.getElementById('slider-left-btn');
const rightBtn = document.getElementById('slider-right-btn');

function updateButtonVisibility() {
    if (!slider || !leftBtn || !rightBtn) return;

    if (slider.scrollLeft <= 10) { 
        leftBtn.style.setProperty('display', 'none', 'important');
    } else {
        leftBtn.style.setProperty('display', 'flex', 'important');
    }

    const maxScroll = slider.scrollWidth - slider.clientWidth;
    if (slider.scrollLeft >= maxScroll - 10) {
        rightBtn.style.setProperty('display', 'none', 'important');
    } else {
        rightBtn.style.setProperty('display', 'flex', 'important');
    }
}

rightBtn.addEventListener('click', () => {
    slider.scrollBy({ left: 400, behavior: 'smooth' }); 
});

leftBtn.addEventListener('click', () => {
    slider.scrollBy({ left: -400, behavior: 'smooth' });
});

slider.addEventListener('scroll', updateButtonVisibility);

setTimeout(updateButtonVisibility, 100);