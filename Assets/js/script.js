// global variables
var timerEl = document.getElementById("countdown");
var mainEl = document.getElementById("main");
var startBtn = document.getElementById("start");

var questionsEl = document.getElementById("questions");

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

startBtn.onclick = countdown;