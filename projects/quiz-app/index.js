
const questions = [
    {
        question : "What is the capital of France?",
        options : ["London", "Paris", "Berlin", "Madrid"],
        answar : "Paris"
    },

    {
        question : "Which language runsin a web browser?",
        options : ["Java", "C", "Python", "Javascript"],
        answar : "Javascript"
    },
    {
        question : "What does HTML stand for?",
        options : ["Hypertext Markup Language", "Hypertext Markdown Language", "Hyperloop Maching Language", "Helicopters Terminals Motorboats Lamborginis"],
        answar : "Hypertext Markup Language"
    }
]

// console.log(questions[0])


// Get DOM element

let questionElement = document.querySelector(".question")
let questionNumberElement = document.querySelector(".question-number")
let optionsContainer = document.querySelector(".options-container")
let nextButton = document.querySelector(".next-btn")
let resultContainer = document.querySelector(".result")

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null

// Next Question

function nextQuestion(){
    currentQuestionIndex++
    showQuestion()
}



// Display current question 
function showQuestion(){
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

        optionsContainer.appendChild(button)

    });

}

nextButton.addEventListener("click", nextQuestion)