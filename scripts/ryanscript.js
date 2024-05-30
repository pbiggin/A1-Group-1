/* RYAN */

// assign the elements to a constant variable
const cricketHeading = this.document.getElementById("titleheading")
const navBar = this.document.getElementById('mainnavbar')
const hamburger = this.document.getElementById('hamburger')
const credits = this.document.getElementById('credits')


// define the function that changes the navbar depending on the current scrolling of the page
// if scrolled more than 50px, the navbar shrinks and gets a background colour, the credits also disappear
function updateNav(scrollPosition) {
    if (scrollPosition > 50){
        navBar.style.backgroundColor = "#0F7D3D"
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
}

// on page load, the function runs, just in case of reloading the page, in which the navbar will need to be updated since there is no scroll movement occuring
updateNav(window.scrollY)

// event listener listens to every time the page is scrolled, and runs the updateNav() function
window.addEventListener("scroll", function(){
    updateNav(window.scrollY)
})

// assigns the menu toggle and counts the number of times the hamburger icon is clicked, the menu closes and opens respectively
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

// assigning the content of the page preview to constant variables in arrays
const sitePages = ["Learning Hub", "Content Hub", "Quiz yourself", "Calculator"]
const pageTaglines = ["Explore the fundamentals of cricket with our comprehensive guide!", "Dive into different aspects of the game, from the different competitions and essential equipment!", "Test your knowledge with our interactive quiz, covering all the content we have taught you!", "Utilise our calculators to evaluate the performance of a game!"]
const pageInfo = ["Learn the rules of cricket, the setup of the game, and the different formats available. This section provides all the essential information that you need in order to get started with the game.", "Here, you can discover detailed descriptions and insights into the various competitions held around Australia, as well as a comprehensive guide to the must buy gear in order to enjoy the game safely.", "Challenge yourself to see how much you have learnt, and identify areas for improvement. This section is perfect for reinforcing your knowledge of the game, and getting yourself game-ready.", "Measure a batsman’s or bowler’s performance on the field with this handy tool. Simply input your values into any of two boxes and our calculators will give you the missing value. Keep tabs on your progress with the data provided, in order to improve your game."]
const pageLinks = ["sites/learn-hub.html", "sites/content-hub.html", "sites/program-quiz.html", "sites/cricketcalc.html"]

// assigning the elements of the page preview that will change to constant variables
const pageNameOnIndex = document.getElementById("nameofpreview")
const taglineOnIndex = document.getElementById("tagline")
const infoOnIndex = document.getElementById("spiel")
const linkOnIndex = document.getElementById("linktopreview")

// the index is the counter
let index = 0

// runs when the next button is pressed, the modulus ensures that the index remains in the range of 0-3 (4 index values)
function nextPagePreview() {
    index = (index + 1) % 4
    updateContent()
}

// runs when prev button is pressed, + 4 is added to ensure that the index does not fall below 0, modulus used for same reason as above
function prevPagePreview() {
    index = (index - 1 + 4) % 4
    updateContent()
}

// changes the content based on the index position in the arrays
function updateContent() {
    pageNameOnIndex.innerHTML = sitePages[index]
    taglineOnIndex.innerHTML = pageTaglines[index]
    infoOnIndex.innerHTML = pageInfo[index]
    linkOnIndex.setAttribute("href", pageLinks[index])
}