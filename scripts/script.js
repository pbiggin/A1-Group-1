
//start of carousel script
const carouselItems = document.querySelectorAll('.carousel-item');
let currentIndex = 0;

// hides images in carousel
function showImage(index) {
    carouselItems.forEach(item => {
        item.style.display = 'none';
    }
);

//showing slide at set index
carouselItems[index].style.display = 'block';
}

function nextImage() {
    currentIndex = (currentIndex + 1)% carouselItems.length;
    showImage(currentIndex);
}

function previousImage() {
    currentIndex = (currentIndex -1 + carouselItems.length)% carouselItems.length;
    showImage(currentIndex);
}

showImage(currentIndex);
//end of carousel script
