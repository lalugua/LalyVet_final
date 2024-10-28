let currentIndex = 0;
const images = document.querySelectorAll('.carousel-inner img');
const dots = document.querySelectorAll('.dot');

function showImage(index) {
    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }

    currentIndex = index;

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;

    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });

    resetAutoSlide();
}

document.querySelector('.prev').addEventListener('click', () => {
    showImage(currentIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
    showImage(currentIndex + 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showImage(index);
    });
});

function autoSlide() {
    showImage(currentIndex + 1);
}

let slideInterval = setInterval(autoSlide, 3000);

function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = setInterval(autoSlide, 3000);
}