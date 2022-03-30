// variables 
var startButton = document.getElementById('start-button');
var openingMessage = document.getElementById('opening-message');
var questionsContainer = document.getElementById ('questions-container');
var gameOver = document.getElementById('game-over');
var submitEl = document.getElementById('submit');
var questionsEl = document.getElementById('questions-p');
var answersButtonEl = document.getElementById('answers');
var timerEl = document.querySelector('.time-remaining');


// when you click the start button, the game starts
startButton.addEventListener('click', startGame)

// start game function
function startGame () {
    console.log('start game');
    openingMessage.style.display = "none";
    startButton.style.display = "none";
    
    //  shuffling questions 
    shuffledQuestions = questionsList.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionsContainer.classList.remove('hide');
    // console.log(availableQuestions);
    
    setNextQuestion();
    timer();
}

// timer
var secondsLeft = 100;

function timer() {
    var timerRemaining = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = 'Time Remaining: ' + secondsLeft + ' seconds';

        if (secondsLeft === 0) {
            clearInterval(timerRemaining);
            gameOver();
        }
    }, 1000);
}

var currentQuestionIndex, shuffledQuestions

// shuffles the questions 
function setNextQuestion () {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}
   
function showQuestion(question) {
    // Displays the question
    questionsEl.innerText = question.question;

    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answers.correct) {
            button.dataset.correct = answer.correct
        }
        answersButtonEl.appendChild(button)
    })
}
   
//     questionsEl.innerText = showQuestion.question;

//    showQuestion.forEach(answers => {
//        var button = document.createElement('button');
//        button.innerText = answers.text;
//        button.classList.add('btn')

//        if (answers.correct) {
//            button.dataset.correct = answers.correct;
//        } 
//        button:addEventListener('click', selectAnswer);
//        answers.appendChild(button)
//    })
// }




function isAnswerCorrect () {
    // if answer is not correct 
        secondsLeft -= 10;

        if (secondsLeft < 0) {
            secondsLeft = 0;
        }

        timerEl.textContent = 'Time Remaining: ' + secondsLeft + ' seconds';


}

// function showAnswers(questionsList) {
//     answersButtonEl.innerText = questionsList.answers
// }

// // showing the chosen question to user
// function showQuestion () {
//     questionsEl.textContent = setNextQuestion;
// }

// function selectAnswer() {
//     // if (answer === correct) {
//     //     // show if you're correct
//     // } else {
//     //     // show if you're wrong 
//     // }

//     // // then you go to next question
// }


// function gameOver (event) {
//     // clear timer 
//     questionsContainer.classList.remove('hide');
//     gameOver.display = "none";
//     event.preventDefault();
//     console.log(event);
// }

// array of all the questions
var questionsList = [
    {
        question: 'Which of the following below is a "string"?',
        answers: [
            { text: '10', correct: false },
            { text: '"Hello World"', correct: true },
            { text: 'True', correct: false },
            { text: 'All of the above', correct: false}
        ]
    },
    {
        question: 'What is an alt attribute for an image used for?',
        answers: [
            { text: 'To provide alternative information for an image if user cannot view it', correct: true },
            { text: 'To play Alternative music', correct: false},
            { text: 'To source where an image was taken from', correct: false},
            { text: 'To provide the user information on the creater of the image and where to contat them', correct: false}

        ]
    },
    {
        question: 'What is an array?',
        answers: [
            { text: 'An object which provides access to the browser debugging console', correct: false },
            { text: 'A block of code designed to perform a particular task', correct: false },
            { text: 'A data structure that allows us to put multiple values inside of', correct: false },
            { text: 'None of the above', correct: false }
        ]
    },
    {
        question: 'What is a method?',
        answers: [
            { text: 'An object', correct: false },
            { text: 'A type of candy', correct: false },
            { text: 'A brand of soap', correct: false },
            { text: 'A pre-built function', correct: true }
        ]
    },
    {
        question: 'What does API mean?',
        answers: [
            { text: 'Application Programming Interface', correct: true },
            { text: 'Application Program Interface', correct: false },
            { text: 'Apps Programs Interface', correct: false},
            { text: 'Appalachian Program Intern', correct: false }
        ]
    }
]