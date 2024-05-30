// Added button parameter to the function to receive the clicked button element
        function toggleText(button) {
            // Find the closest card element
            var card = button.closest('.card');
            // Find the .moreText paragraph within this card
            var text = card.querySelector('.moreText');
            // Toggle the hidden class and change button text
            if (text.classList.contains('hidden')) {
              text.classList.remove('hidden');
              button.innerHTML = 'Show Less';
            } else {
              text.classList.add('hidden');
              button.innerHTML = 'More information';
            }
          }
          // TEAM!!!! - COPY THIS IF YOU ARE COPYING THE NAV BAR CODE. CHARLENE IGNORE SINCE YOUR PAGE DOESN'T SCROLL tysm
//Scroll function for learn nav bar placemend. Resets recorded scroll postion (up -> shows bar, down -> hides bar)
let pastScroll = window.scrollY;
window.onscroll = function () {
  let userScroll = window.scrollY;

  if (pastScroll > userScroll) {
    document.getElementById("learnNav").style.top = "0";
    document.getElementById("nav-side").style.top = "0";
  } else {
    document.getElementById("nav-side").style.top = "-100px";
    document.getElementById("learnNav").style.top = "-100px";
  }
  pastScroll = userScroll;
};


/** NAVIGATION BAR CODE COPY THIS THIS IS IMPORTANT TO GET THE SLIDER TO WORK **/
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
