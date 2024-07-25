/* jshint esversion: 11 */
// For the initial setup
let questionP = document.getElementById("question");
let optionDivs = document.querySelectorAll(".option-div");
let questionCount;
let scoreCount = 0;
let incorrectCount = 0;
let secCount = 11;
let userChoiceMade = false;

optionDivs.forEach(btn => {
    btn.addEventListener("click", function() {
        userChoiceMade = true;
        checker(btn);
    });
});

function initial() {
    questionCount = 0;
    scoreCount = 0;
    incorrectCount = 0;
    secCount = 11;
    userChoiceMade = false;
    clearInterval(countdown);
    timerDisplay();
    quizArray.sort(() => Math.random() - 0.5);
    questionDisplay(questionCount);
    updateScoreTracker();
}

// For when user clicks on the start button
let beginButton = document.getElementById("begin-button");
let beginScreen = document.querySelector(".begin-screen");
let displayArea = document.getElementById("display-area");

beginButton.addEventListener("click", () => {
    beginScreen.classList.add("hide");
    displayArea.classList.remove("hide");
    initial();
});

// To hide the quiz area and show the start screen
let restartButton = document.getElementById("restart");
let scoreArea = document.querySelector(".score-container");

restartButton.addEventListener("click", () => {
    beginScreen.classList.remove("hide");
    displayArea.classList.add("hide");
    scoreArea.classList.add("hide");
    initial();
});

// Timer
const timeLeftDisplay = document.querySelector(".time-left");
let countdown;

function timerDisplay() {
    clearInterval(countdown);
    countdown = setInterval(() => {
        if (secCount === 0) {
            clearInterval(countdown);
            disableButtons();
            incrementIncorrectScore();
            updateScoreTracker();
            userChoiceMade = true;
        } else {
            secCount--;
            timeLeftDisplay.innerText = `${secCount}s`;
        }
    }, 1000);
}

// To create the quiz
function quizGenerator() {
    questionP.innerText = quizArray[questionCount].question;
    quizArray[questionCount].options.sort(() => Math.random() - 0.5);
    optionDivs.forEach((btn, index) => {
        btn.innerText = quizArray[questionCount].options[index];
    });
}

// To display the quiz
function questionDisplay(questionCount) {
    quizGenerator();
    document.querySelector(".question-number").innerHTML = `${questionCount + 1} of ${quizArray.length} Questions`;
    secCount = 11;
    userChoiceMade = false;
    clearInterval(countdown);
    timerDisplay();
}

// To check if the answer is correct or incorrect
function checker(userChoice) {
    disableButtons();
    let userAnswer = userChoice.innerText;
    if (userAnswer === quizArray[questionCount].correct) {
        userChoice.classList.add("correct");
        incrementCorrectScore(userChoice);
    } else {
        userChoice.classList.add("incorrect");
        incrementIncorrectScore(userChoice);
    }

    clearInterval(countdown);

    updateScoreTracker();
}

function disableButtons() {
    optionDivs.forEach((btn) => {
        btn.disabled = true;
    });
}

function enableButtons() {
    optionDivs.forEach((btn) => {
        btn.disabled = false;
        btn.classList.remove("correct", "incorrect");
    });
}

function incrementCorrectScore() {
    scoreCount++;
}

function incrementIncorrectScore() {
    incorrectCount++;
    disableButtons();
    optionDivs.forEach((btn) => {
        if (btn.innerText == quizArray[questionCount].correct) {
            btn.classList.add("correct");
        }
    });
}

// To display the next question
let nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", displayNext);

function displayNext() {
    if (!userChoiceMade) {
        incrementIncorrectScore();
        updateScoreTracker();
    }
    enableButtons();
    questionCount++;
    if (questionCount === quizArray.length) {
        clearInterval(countdown);
        displayArea.classList.add("hide");
        scoreArea.classList.remove("hide");
        let userScore = document.getElementById("user-score");
        // To set up a message regarding the user's final score
        let message = "";
        if (scoreCount < 6) {
            message = "Woah...that score is depressing even to goths!";
        } else if (scoreCount < 10) {
            message = "Great score!  You really know your way around the goth scene!";
        } else {
            message = "Sweet Siouxsie's Ghost!  You are a global icon of Goth knowledge!";
        }
        userScore.innerHTML = `You got ${scoreCount} questions correct out of ${questionCount}. ${message}`;
    } else {
        questionDisplay(questionCount);
    }
}

// To update the score tracker
function updateScoreTracker() {
    document.getElementById("correct-score").innerText = scoreCount;
    document.getElementById("incorrect-score").innerText = incorrectCount;
}