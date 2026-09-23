
let questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Markup Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which language is used to style a webpage?",
        answers: [
            "HTML",
            "CSS",
            "Java",
            "Python"
        ],
        correct: 1
    },

    {
        question: "Which language is used to add interactivity to a webpage?",
        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],
        correct: 2
    },

    {
        question: "Which tag is used to create a paragraph in HTML?",
        answers: [
            "<h1>",
            "<p>",
            "<div>",
            "<br>"
        ],
        correct: 1
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",
        answers: [
            ".",
            "#",
            "*",
            "@"
        ],
        correct: 1
    }
];


let currentQuestion = 0;

let score = 0;


let questionElement = document.getElementById("question");

let answerButtons = document.querySelectorAll(".answer");

let nextButton = document.getElementById("next");

let quiz = document.getElementById("quiz");

let result = document.getElementById("result");

let scoreElement = document.getElementById("score");

let restartButton = document.getElementById("restart");


// Display question

function showQuestion() {

    let question = questions[currentQuestion];

    questionElement.textContent = question.question;

    answerButtons.forEach(function(button, index) {

        button.textContent = question.answers[index];

        button.classList.remove("correct");
        button.classList.remove("wrong");

        button.disabled = false;

    });

}


// Check answer

answerButtons.forEach(function(button, index) {

    button.addEventListener("click", function() {

        let question = questions[currentQuestion];

        if (index === question.correct) {

            button.classList.add("correct");

            score++;

        } else {

            button.classList.add("wrong");

            answerButtons[question.correct].classList.add("correct");

        }

        answerButtons.forEach(function(btn) {

            btn.disabled = true;

        });

    });

});


// Next question

nextButton.addEventListener("click", function() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        quiz.style.display = "none";

        result.style.display = "block";

        scoreElement.textContent =
            "You scored " + score + " out of " + questions.length;

    }

});


// Restart quiz

restartButton.addEventListener("click", function() {

    currentQuestion = 0;

    score = 0;

    quiz.style.display = "block";

    result.style.display = "none";

    showQuestion();

});


// Start quiz

showQuestion();

