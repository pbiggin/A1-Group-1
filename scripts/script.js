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

// button function for next image, move forward
function nextImage() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  showImage(currentIndex);
}
// button function for next image, move backward
function previousImage() {
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showImage(currentIndex);
}

showImage(currentIndex);
//end of carousel script

//module complete animation script

// selects module tick svg to show animation
const modTick = document.querySelector(".completemod");

// coniditon parameters for when user's screen is on the prog mod.
const onScreen = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};
// variable to watch for when the user's screen scrolls across the prog module bar. "new" creates empty object
const animateStart = new IntersectionObserver(function (entries, animateStart) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // changes the style to slide up
      modTick.classList.add("show");
    } else {
      modTick.classList.remove("show");
    }
  });
}, onScreen);

animateStart.observe(modTick);

//Scroll function for learn nav bar placemend. Resets recorded scroll postion (up -> shows bar, down -> hides bar)
let pastScroll = window.scrollY;
window.onscroll = function () {
  let userScroll = window.scrollY;

  if (pastScroll > userScroll) {
    document.getElementById("learnNav").style.top = "0";
    document.getElementById("nav-side").style.top = "0";
  } else {
    document.getElementById("learnNav").style.top = "-100px";
    document.getElementById("nav-side").style.top = "-100px";
  }
  pastScroll = userScroll;
};

//dropdown modules
let hide = document.getElementsByClassName("hideaway");

for (let i = 0; i < hide.length; i++) {
  hide[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    let hideaway = this
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      hideaway.style.borderRadius = "30px";
      hideaway.style.transition = "border-radius 0.2s";
      hideaway.style.transitionDelay = "0.3s";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      hideaway.style.borderRadius = "30px 30px 0 0";
      hideaway.style.transition = "none";
      hideaway.style.transitionDelay = "0.0s";
    }
  });
}

/** deviation of Ryan's homepage js to match */
const HamburgerMenu = document.getElementById("nav-side")
let menuCounter = 0
function toggleMenu(){
    menuCounter += 1
    if (menuCounter % 2 == 0){
        HamburgerMenu.style.width = '0'
    } else {
        HamburgerMenu.style.width = '100vw'
    }
}

