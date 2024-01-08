const carousel = document.querySelector('.carousel');
const carouselImg = document.querySelectorAll('.carousel__img');

const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

let currentPosition = 0;

btnLeft.addEventListener('click', () => {
    const minPosition = (carouselImg.length - Math.ceil(carouselImg.length / 2)) * 100 / carouselImg.length;
    const addPosition = 100 / carouselImg.length;

    currentPosition = currentPosition >= minPosition ? currentPosition : currentPosition + addPosition;

    if (currentPosition >= minPosition) { btnLeft.style.display = "none"; }
    btnRight.style.display = "block";

    carousel.style.transform = `translateX(${currentPosition}%)`;
});

btnRight.addEventListener('click', () => {
    const maxPosition = (Math.ceil(carouselImg.length / 2) - carouselImg.length) * 100 / carouselImg.length;
    const addPosition = 100 / carouselImg.length;

    currentPosition = currentPosition <= maxPosition ? currentPosition : currentPosition - addPosition;

    if (currentPosition <= maxPosition) { btnRight.style.display = "none"; }
    btnLeft.style.display = "block";

    carousel.style.transform = `translateX(${currentPosition}%)`;
});