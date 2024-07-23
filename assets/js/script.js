// For the initial setup
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

// For when user clicks on the start button
let startButton = document.getElementById("start-button");
let startScreen = document.querySelector(".start-screen");
let displayContainer = document.getElementById("display-container");

startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

// To hide the quiz area and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};

// To restart Quiz
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
        // to increment questionCount
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

// For the quiz display
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

// To create the quiz
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

// Checker Function to check if the user's answer/option is correct
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        incorrectCount++;
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    // To clear the question interval and stop the timer
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });

    updateScoreTracker();
}

// To update the score 
function updateScoreTracker() {
    document.getElementById("correct-score").innerText = scoreCount;
    document.getElementById("incorrect-score").innerText = incorrectCount;
}

// Array for quiz questions and answers/options

let quizArray = [
    {
        id: "0",
        question: "In which year did the gothic musical subculture begin?",
        options: ["1980:  the year Bauhaus released the album 'In the Flat Field'", "1979:  the year Joy Division released 'Unknown Pleasures'", "What are you, like a historian or something?", "There was no beginning...the darkness has always been waiting for us"],
        correct: "There was no beginning...the darkness has always been waiting for us",
    },
    {
        id: "1",
        question: "Who is the 'first lady of Goth'?",
        options: ["Siouxsie Sioux", "Theda Bara", "Helena Bonham Carter", "Every goth girl is a 'first lady' to me"],
        correct: "Every goth girl is a 'first lady' to me",
    },
    {
        id: "2",
        question: "Who is the most fun goth to watch a film with?",
        options: ["Peter Murphy", "Elvira, Mistress of the Dark", "Christina Ricci", "Cher"],
        correct: "Elvira, Mistress of the Dark",
    },
    {
        id: "3",
        question: "When true goths get an ear ache, what do they do?",
        options: ["Listen to the latest Taylor Swift single", "Get a home remedy from the Goth Medical Journal", "Pray to Hecate", "Scream into the void until the light and darkness become one"],
        correct: "Scream into the void until the light and darkness become one",
    },
    {
        id: "4",
        question: "Which classic goth song contains the line: 'The bats have left the belltower'?",
        options: ["'Red Light' By Siouxsie Sioux and the Banshees", "Ugh, if you have to ask, you'll never really know", "'One More Try' by Timmy T", "'Stay' by Shakespeare's Sister"],
        correct: "Ugh, if you have to ask, you'll never really know",
    },
    {
        id: "5",
        question: "What is the highest selling goth cassette single of all time?",
        options: ["'Black Monday' by New Order", "'Love Will Tear Us Apart' by Joy Division", "'Bela Legosi's Dead' by Bauhaus", "Umm...what is a cassette single?"],
        correct: "Umm...what is a cassette single?",
    }, {
        id: "6",
        question: "Why did goth kids in the 1980's never brush their hair?",
        options: ["As a sign of protest", "Because it drew attention away from the despair in their eyes", "Wait...are you saying they brush their hair now?", "Because they lost their hairbrushes during a pagan ritual"],
        correct: "Wait...are you saying they brush their hair now?",
    },
    {
        id: "7",
        question: "What is the essential accessory that all goths wear at some point in their lives?",
        options: ["Blood", "A leather harness", "Fishnet stockings", "Our own flesh is the accessory"],
        correct: "Our own flesh is the accessory",
    },
    {
        id: "8",
        question: "What 'mortal sin' are all goths guilty of?",
        options: ["Hold up...what are you, a cop?", "Blasphemy", "Envy", "Wishing harm on others"],
        correct: "Hold up...what are you, a cop?",
    },
    {
        id: "9",
        question: "What do all goths do to survive difficult times in their lives?",
        options: ["Take long walks in the park to clear their heads", "Go to the beach to feel the sunlight on their skin", "Go to a comedy club to let the power of laughter heal them", "Put on the Cure's 'Disintegration' album and scream through the tears"],
        correct: "Put on the Cure's 'Disintegration' album and scream through the tears",
    },
];