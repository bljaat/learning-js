
const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Paris", "Berlin", "Madrid"],
        answer: "Paris"
    },

    {
        question: "Which language runsin a web browser?",
        options: ["Java", "C", "Python", "Javascript"],
        answer: "Javascript"
    },
    {
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Maching Language", "Helicopters Terminals Motorboats Lamborginis"],
        answer: "Hypertext Markup Language"
    }
]

// console.log(questions[0])


// Get DOM element

let questionElement = document.querySelector(".question")
let questionNumberElement = document.querySelector(".question-number")
let optionsContainer = document.querySelector(".options-container")
let nextButton = document.querySelector(".next-btn")
let resultContainer = document.querySelector(".result")
let questionContainer = document.querySelector(".question-container")
let scoreElement = document.querySelector(".score")
let restartButton = document.querySelector(".restart-btn")

let currentQuestionIndex = 0;
let score = 0;
let selectAnswer = null

// Next Question

function nextQuestion() {

    if (selectAnswer === null) {
        alert("Please select an answer!")
        return;
    }
    if (selectAnswer === questions[currentQuestionIndex].answer) {
        score++
    }
    currentQuestionIndex++

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}



// Display current question 
function showQuestion() {
    selectAnswer = null

    // console.log("hello")
    resultContainer.classList.add("hidden")

    // Get current question
    let currentQuestion = questions[currentQuestionIndex]

    // update question number
    questionNumberElement.textContent = `question ${currentQuestionIndex + 1} of ${questions.length}`

    // update question text
    questionElement.textContent = currentQuestion.question;

    // clear previous text
    optionsContainer.innerHTML = ""

    // Add new options
    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option")

        button.addEventListener("click", () => selectedAnswer(option))
        optionsContainer.appendChild(button)

    });

}

// heandle Answer seletion

function selectedAnswer(answer) {
    document.querySelectorAll(".option").forEach((option) => {
        option.classList.remove("selected")
    })
    event.target.classList.add("selected");
    selectAnswer = answer
}

function showResults() {
    questionElement.innerHTML = "",
        questionNumberElement.textContent = "",
        optionsContainer.innerHTML = "",
        nextButton.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreElement.textContent = score

}


function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectAnswer = null;
    nextButton.classList.remove("hidden");
    showQuestion();

}

showQuestion()

restartButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", nextQuestion)