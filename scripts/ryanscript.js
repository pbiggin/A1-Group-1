/* RYAN */
window.addEventListener("scroll", function(){
    const scrollPosition = window.scrollY
    const cricketHeading = this.document.getElementById("titleheading")
    const navBar = this.document.getElementById('mainnavbar')
    const hamburger = this.document.getElementById('hamburger')



    if (scrollPosition > 50){
        navBar.style.backgroundColor = "#238c41"
        cricketHeading.style.fontSize = '3vw'
        navBar.style.height = '10vh'
        hamburger.style.opacity = '100%'

    } else {
        navBar.style.backgroundColor = "#238c4100"
        cricketHeading.style.fontSize = '20vw'
        navBar.style.height = '35vh'
        hamburger.style.opacity = '0'

    }
})

const hamburgerMenu = document.getElementById("interactivenav")
let menuCounter = 0
function toggleMenu(){
    menuCounter += 1
    if (menuCounter % 2 == 0){
        hamburgerMenu.style.width = '0'
    } else {
        hamburgerMenu.style.width = '50vw'
    }
}
