// Nav Bar 

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
// End nav bar

/* Form function used to process the user's selected answers and add points for correct answers */

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

    // question 4
    const q4Answers = document.getElementsByName('question_4');
    q4Answers.forEach(answer => {
        if (answer.checked && answer.value == "q4_answer_3") {
            score++;
        }
    });


    // question 5
    const q5Answers = document.getElementsByName('question_5');
    q5Answers.forEach(answer => {
        if (answer.checked && answer.value == "answer_2") {
            score++;
        }
    });


    // question 6
    score += shortAnswer(document.querySelector('input#q6').value, "batsman");

    // question 7
    const q7Answers = document.getElementsByName('question_7');
    q7Answers.forEach(answer => {
        if (answer.checked && answer.value == "answer_1") {
            score++;
        }
    });


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

/* Determines the score awarded for each input answer */

function shortAnswer(response, answer) {
    if (response.toLowerCase() == answer) {
        return 1;
    }
    else {
        return 0;
    }
}

/* Determines if correct answer button was pressed and awards point if so */
let storedAnswer = "";

/* Increment score by 1, only if the point does not exceed the maximum value awarded for question. 
Ensures that the user cannot gain extra points by simply pressing the right answer button multiple times. */

let questionScores = {
    q4: false,
    q5: false,
    q7: false
};

function storeAnswer(answerId, correctAnswerId) {
    storedAnswer = answerId;
    let button = document.getElementById(answerId);
    button.classList.add("selected");
    
    if ((!questionScores[correctAnswerId]) && (answerId == correctAnswerId)) {
        questionScores[correctAnswerId] = true; // Mark the question as answered correctly
        score += 1; // Increment score by 1
    }
    
}

/* Removes "selected" colour from a preciously selected button once a different one is clicked */
function removeFocus(questionId) {
    const questionButtons = document.querySelectorAll(`#${questionId} .button`);
    questionButtons.forEach(button => {
         if (button.classList.contains('selected')) {
            button.classList.remove('selected');
            button.classList.add('not-selected');
        }
    });
}
