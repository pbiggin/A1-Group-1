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
    score += shortAnswer(document.querySelector('input#q2').value, "bowler");


    //question 3
    score += shortAnswer(document.querySelector('select#q3').value, "answer_2");

    //question 4
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


    alert('Your score is: ' + score);


}



function shortAnswer(response, answer) {
    if (response.toLowerCase() == answer) {
        return 1;
    }
    else {
        return 0;
    }
}


let storedAnswer = "";

function storeAnswer(answerId, correctAnswerId) {
    storedAnswer = answerId;
    let button = document.getElementById(answerId);
    button.classList.add("selected");
    if (answerId == correctAnswerId) { // Check if answer 1 is selected
        score += 1; // Increment score by 1
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll('.question');
    let currentQuestionIndex = 0;

    // Hide all questions except the first one
    for (let i = 1; i < questions.length; i++) {
        questions[i].style.display = 'none';
    }

    // Function to show the next question
    function showNextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            questions[currentQuestionIndex].style.display = 'none';
            currentQuestionIndex++;
            questions[currentQuestionIndex].style.display = 'block';
        }
    }

    // Event listener for the Next button
    document.getElementById('nextButton').addEventListener('click', function () {
        showNextQuestion();
    });

    // Function to show the previous question
    function showPrevQuestion() {
        if (currentQuestionIndex > 0) {
            questions[currentQuestionIndex].style.display = 'none';
            currentQuestionIndex--;
            questions[currentQuestionIndex].style.display = 'block';
        }
    }

    document.getElementById('prevButton').addEventListener('click', function () {
        showPrevQuestion();
    });

    // Event listener for form submission
    document.getElementById('quizForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission
        process(); // Process the form
    });
})





