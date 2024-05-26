/* RYAN */
window.addEventListener("scroll", function(){
    const scrollPosition = window.scrollY
    const cricketHeading = this.document.getElementById("titleheading")
    const navBar = this.document.getElementById('mainnavbar')
    const hamburger = this.document.getElementById('hamburger')
    const credits = this.document.getElementById('credits')



    if (scrollPosition > 50){
        navBar.style.backgroundColor = "#238c41"
        cricketHeading.style.fontSize = '3vw'
        cricketHeading.style.lineHeight = "10vh"
        navBar.style.height = '10vh'
        hamburger.style.opacity = '100%'
        credits.style.opacity = "0"
        credits.style.fontSize = "0.125vw"

    } else {
        navBar.style.backgroundColor = "#238c4100"
        cricketHeading.style.fontSize = '15vw'
        cricketHeading.style.lineHeight = "15vw"
        navBar.style.height = '30vh'
        hamburger.style.opacity = '0'
        credits.style.opacity = "100%"
        credits.style.fontSize = "1.125vw"
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


const sitePages = ["Content Hub", "Quiz yourself", "calculator"]

function nextPagePreview() {}

function prevPagePreview() {}

function setContent() {}