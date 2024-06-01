// Nav bar

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

//Scroll function for learn nav bar placement. Resets recorded scroll postion (up -> shows bar, down -> hides bar)
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

// Form function used to process the user's selected answers and add points for correct answers 

let score = 0;

function process() {

    //let score = 0;
    let correct = false;

    // question 1
    score += shortAnswer(document.querySelector('input#q1').value, "wicket keeper");

    // question 2
    score += shortAnswer(document.querySelector('input#q2').value, "extra");


    // question 3
    score += shortAnswer(document.querySelector('select#q3').value, "answer_2");

    // question 4 is handled within storeAnswer() function
   
    // question 5 is handled within storeAnswer() function

    // question 6
    score += shortAnswer(document.querySelector('input#q6').value, "batsman");

    // question 7 is handled within storeAnswer() function

    //question 8
    score += shortAnswer(document.querySelector('select#q8').value, "answer_6");


    // question 9
    score += shortAnswer(document.querySelector('input#q9').value, "strike rate");


    //question 10
    score += shortAnswer(document.querySelector('select#q10').value, "answer_2");

    // A comment about the player's score is added for encouragement

    let endMessage = ' ';

    if (score >= 8) {
     endMessage = 'Well done, you are ready to get started!';
    }

    if (score < 8 && score >= 6) {
    endMessage = 'Almost there, just need to brush up on a few topics!';
    }

    if (score < 6) {
    endMessage = 'Good effort but maybe you should review the Learning Hub and Content Hub...';
    }
    
    alert('Your score is: ' + score + '. ' + endMessage);

}

// Determines the score awarded for each input answer 

function shortAnswer(response, answer) {
    if (response.toLowerCase() == answer) {
        return 1;
    }
    else {
        return 0;
    }
}

// Determines if correct answer button was pressed and awards point if so 
let storedAnswer = "";

/* Increment score by 1, only if the point does not exceed the maximum value awarded for question. 
Ensures that the user cannot gain extra points by simply pressing the right answer button multiple times. */

let questionScores = {
    q4: false,
    q5: false,
    q7: false
};


function storeAnswer(answerId, correctAnswerId, questionId) {
    let button = document.getElementById(answerId);
    button.classList.add("selected");

    // Remove selected color from all other buttons in the same question group
    const questionButtons = document.querySelectorAll("#" + questionId + " button");
    questionButtons.forEach(button => {
        if (button.id != answerId) {
            button.classList.remove("selected");
        }
    });

    // Check if the question has already been answered correctly
    if (!questionScores[correctAnswerId]) {
        // Mark the question as answered correctly
        if (answerId == correctAnswerId) {
            questionScores[correctAnswerId] = true;
            // Increment score by 1
            score += 1;
        } 
        if (answerId != correctAnswerId) {
            questionScores[correctAnswerId] = false;
            // Increment score by 1
            score += 0;
        } 
    }

    // If the current answer is incorrect and point has already been awarded, remove the point
    if (questionScores[correctAnswerId]) {
    if (answerId != correctAnswerId) {
                score -= 1;
                questionScores[correctAnswerId] = false;
            }
    }
     
}



