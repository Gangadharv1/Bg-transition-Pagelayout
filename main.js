let currentIndex = 0;

function changeBackground() {
    const images = document.querySelectorAll('.background-image');
    const totalImages = images.length;

    images.forEach((image) => {
        image.classList.remove('active');
    });

    images[currentIndex].classList.add('active');

    currentIndex = (currentIndex + 1) % totalImages; 
}

setInterval(changeBackground, 3000); 

document.addEventListener('DOMContentLoaded', () => {
    changeBackground(); 
});