// Initial setup (start screen)
let quizContainer = document.getElementById("container");
let questionCount;
let scoreCount = 0;
let incorrectCount = 0;
let count = 11;

function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    incorrectCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
    updateScoreTracker();
}

// When user clicks the start button
let startButton = document.getElementById("start-button");
let startScreen = document.querySelector(".start-screen");
let displayContainer = document.getElementById("display-container");

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

// To hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};

// Restart Quiz
let restart = document.getElementById("restart");
let scoreContainer = document.querySelector(".score-container");

restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

// For the timer and countdown
let timeLeft = document.querySelector(".time-left");
let countdown;

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

// For the next Button
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let userScore = document.getElementById("user-score");

nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

// To display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    // Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    // Display current question card
    quizCards[questionCount].classList.remove("hide");
};
