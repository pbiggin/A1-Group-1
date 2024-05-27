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


const sitePages = ["Learning Hub", "Content Hub", "Quiz yourself", "Calculator"]
const pageTaglines = ["Explore the fundamentals of cricket with our comprehensive guide!", "Dive into different aspects of the game, from the different competitions and essential equipment!", "Test your knowledge with our interactive quiz, covering all the content we have taught you!", "Utilise our calculators to evaluate the performance of a game!"]
const pageInfo = ["Learn the rules of cricket, the setup of the game, and the different formats available. This section provides all the essential information that you need in order to get started with the game.", "Here, you can discover detailed descriptions and insights into the various competitions held around Australia, as well as a comprehensive guide to the must buy gear in order to enjoy the game safely.", "Challenge yourself to see how much you have learnt, and identify areas for improvement. This section is perfect for reinforcing your knowledge of the game, and getting yourself game-ready.", "Measure a batsman’s or bowler’s performance on the field with this handy tool. Simply input your values into any of two boxes and our calculators will give you the missing value. Keep tabs on your progress with the data provided, in order to improve your game."]

function nextPagePreview() {}

function prevPagePreview() {}

function setContent() {}