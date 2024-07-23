// For the initial setup
let quizArea = document.getElementById("question-area");
let questionCount;
let scoreCount = 0;
let incorrectCount = 0;
let count = 11;

function initial() {
    quizArea.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    incorrectCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizGenerator();
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
        if (count === 0) {
            clearInterval(countdown);
            displayNext();
        } else {
            count--;
            timeLeftDisplay.innerText = `${count}s`;
        }
    }, 1000);
}

// To create the quiz
function quizGenerator() {
    quizArray.sort(() => Math.random() - 0.5);

    for (let i of quizArray) {
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        quizArea.appendChild(div);

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
        <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        `;
    }
}

// To display the quiz
function questionDisplay(questionCount) {
    let quizCards = document.querySelectorAll(".container-mid");
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
    document.querySelector(".question-number").innerHTML = `${questionCount + 1} of ${quizArray.length} questions`;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
}

// To check if the answer is correct or incorrect
function checker(userChoice) {
    let userAnswer = userChoice.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    if (userAnswer === quizArray[questionCount].correct) {
        userChoice.classList.add("correct");
        scoreCount++;
    } else {
        userChoice.classList.add("incorrect");
        incorrectCount++;
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    clearInterval(countdown);

    options.forEach((element) => {
        element.disabled = true;
    });

    updateScoreTracker();
}

// To display the next question
let nextButton = document.getElementById("next-button");
nextButton.addEventListener("click", displayNext);

function displayNext() {
    questionCount++;
    if (questionCount === quizArray.length) {
        displayArea.classList.add("hide");
        scoreArea.classList.remove("hide");
        let userScore = document.getElementById("user-score");
        userScore.innerHTML = `You got ${scoreCount} questions correct out of ${questionCount}`;
    } else {
        questionDisplay(questionCount);
    }
}

// To update the score tracker
function updateScoreTracker() {
    document.getElementById("correct-score").innerText = scoreCount;
    document.getElementById("incorrect-score").innerText = incorrectCount;
}

// Hide the quiz area and score container on initial load
displayArea.classList.add("hide");
scoreArea.classList.add("hide");

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