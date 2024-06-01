//FUNCTION: Carousel (image slideshow)
// first, finds the images with the class .carousel-item
const carouselItems = document.querySelectorAll(".carousel-item");
// sets the carousel first image
let currentIndex = 0;

// hides images in carousel through a For of, but simple
function showImage(index) {
  carouselItems.forEach((item) => {
    item.style.display = "none";
  });

  //makes sure the slides as locked as blocks in display (not that important to describe functionally)
  carouselItems[index].style.display = "block";
}

// button function for next image, move forward
function nextImage() {
  currentIndex = (currentIndex + 1) % carouselItems.length;
  // ads 1 to the index, changes to image 2.. 3 etc
  showImage(currentIndex);
}
// button function for next image, move backward
function previousImage() {
  // removes 1 from the index, changes image backwards 3.. 2.. etc
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  showImage(currentIndex);
}

showImage(currentIndex);
//shows the current image (again)


// Function: Little animation when the user scrolls to the bottom (pretty case & point)

const modTick = document.querySelector(".completemod");
// gets element class for the little animation

// activates animation when the little animation element is on screen
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

// FEATURE: Navigation bar slide
// TEAM!!!! - COPY THIS IF YOU ARE COPYING THE NAV BAR CODE.
//Scroll function for learn nav bar placemend. Resets recorded scroll postion (up -> shows bar, down -> hides bar)
let pastScroll = window.scrollY;
// sets user positon upon page load & after every movement
window.onscroll = function () {
  let userScroll = window.scrollY;

  if (pastScroll > userScroll) {
    // checks if the user has scrolled down, if so, closes nav
    document.getElementById("learnNav").style.top = "0";
    document.getElementById("nav-side").style.top = "0";
  } else {
    //checks if the user has scrolled up, if so, opens nav
    document.getElementById("nav-side").style.top = "-100px";
    document.getElementById("learnNav").style.top = "-100px";
  }
  pastScroll = userScroll;
};


// Feature: Navigation bar menu (slides across nav to show alt view)
/** NAVIGATION BAR CODE COPY THIS THIS IS IMPORTANT TO GET THE SLIDER TO WORK **/
const HamburgerMenu = document.getElementById("nav-side")
let menuCounter = 0
function toggleMenu(){
  // when the function is activated, adds a value to 'menuCounter' which insights the nav to be open / closed mode
    menuCounter += 1
    if (menuCounter % 2 == 0){
      // if menucounter is 0, close the box (variable sourced outside of function)
        HamburgerMenu.style.width = '0'
    } else {
      // if menucounter is 1, open the box (variable sourced inside function)
        HamburgerMenu.style.width = '100vw'
    }
}


//FEATURE: QUESTION - ANSWER DROPDOWNS (THE rounded edge 'click to show answer')
// first, finds the top question box element (theres two layered like a sandwitch)
let hide = document.getElementsByClassName("hideaway");

// does a for of loop for each of the many question box sets
for (let i = 0; i < hide.length; i++) {
  // when user clicks on the "Show answer" div..
  hide[i].addEventListener("click", function () {
    // changes the div's class to 'active' which adds CSS styles
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    let hideaway = this
    // if else to determine if the box is opened or closed
    if (content.style.maxHeight) {
      // if closed, open + change the shape to match the now appeared box, (via changing it's height)
      content.style.maxHeight = null;
      hideaway.style.borderRadius = "30px";
      hideaway.style.transition = "border-radius 0.2s";
      hideaway.style.transitionDelay = "0.3s";
    } else {
      // if open, close + change the shape back to rounded
      content.style.maxHeight = content.scrollHeight + "px";
      hideaway.style.borderRadius = "30px 30px 0 0";
      hideaway.style.transition = "none";
      hideaway.style.transitionDelay = "0.0s";
    }
  });
}

