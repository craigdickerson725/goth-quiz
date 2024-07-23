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