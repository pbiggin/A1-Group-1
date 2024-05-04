//start of carousel script
const carouselItems = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

// hides images in carousel
function showImage(index) {
  carouselItems.forEach((item) => {
    item.style.display = "none";
  });

  //showing slide at set index
  carouselItems[index].style.display = "block";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showImage(currentIndex);
}

function previousImage() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showImage(currentIndex);
}

showImage(currentIndex);
//end of carousel script

//learn run animation script

function moveRunner() {
  let id = null;
  const runnerElement = document.getElementById("run-animation");
  const runDiv = document.getElementById("run-container").offsetWidth;
  let runnerPos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);

  function frame() {
    if (runnerPos == runDiv) {
      clearInterval(id);
    } else {
      runnerPos++;
      runnerElement.style.left = runnerPos + "px";
    }
  }
}
