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