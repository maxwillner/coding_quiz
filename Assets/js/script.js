// global variables
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start");
var questionEl = document.getElementById("question-text")

// questions array
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        incorrect: "Strings",
        incorrect: "booleans",
        correct: "alerts",
        incorrect: "numbers"
    },
    {
        question: "The condition in an if/else statement is enclosed with __________.",
        incorrect: "quotes",
        incorrect: "curly brackets", 
        correct: "parenthesis",
        incorrect: "square brackets"
    },
    {
        question: "Arrays in JavaScript cana be used to store __________.",
        incorrect: "numbers and strings",
        incorrect: "other arrays",
        incorrect: "booleans",
        correct: "all of the above"
    },
    {
        question: "String alues must be enclosed within __________ when being assigned to variables.",
        incorrect: "commas",
        incorrect: "curly brackets",
        correct: "quotes",
        incorrect: "parenthesis"
    },
    {
        question: "A useful tool used during development and debugging for printing content to the debugger is:",
        incorrect: "JavaScript",
        incorrect: "terminal/bash",
        incorrect: "for loops",
        correct: "console.log"
    }
];

// starting score of 0
var score = 0;


// timer that counts down from 5 minutes
function countdown() {
    var timeLeft = 300;

    //setInterval() method
    var timeInterval = setInterval(function(){
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + " seconds remaining";
            timeLeft --;
        }
        else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + " second remaining";
            timeLeft --;
        }
        else {
            timerEl.textContent = "";

        // clearInterval
        clearInterval(timeInterval);
        }
    }, 1000);
};

//stuck start!!

// questions pushed from array into questions-section
function createQuestion () {
    for (var i = 0; i < questions.length; i++) {
        // dynamically create questions in HTML??


        // compare answer??
        if ((answer === correct)) {
            score++
        }
        else {
            ((answer === incorrect))
            timeLeft = timeLeft - 25
        };
    }       
};




startBtn.onclick = countdown;