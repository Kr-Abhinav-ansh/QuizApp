const questions = [
    {
        question: "What's your name?",
        answers: [
            { text: "Kumar", correct: false },
            { text: "Anshu", correct: false },
            { text: "Abhinav", correct: true },
            { text: "Aditya", correct: false },
        ]
    },
    {
        question: "Who is she?",
        answers: [
            { text: "Saloni", correct: true },
            { text: "Roshni", correct: false },
            { text: "Shivani", correct: false },
            { text: "Jiya", correct: false }
        ]
    }
]

const questionElem = document.getElementById("question");
const ansBtnsElem = document.getElementById("ansBtns");
const nextBtnElem = document.getElementById("nextBtn");

let currentQxnIndex = 0;
let score = 0;

function startQuiz() {
    currentQxnIndex = 0;
    score = 0;
    nextBtnElem.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {

    resetState();
    let currentQxn = questions[currentQxnIndex];
    let qxnNo = currentQxnIndex + 1;
    questionElem.innerHTML = qxnNo + ". " + currentQxn.question;

    currentQxn.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansBtnsElem.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextBtnElem.style.display = "none";
    while (ansBtnsElem.firstChild) {
        ansBtnsElem.removeChild(ansBtnsElem.firstChild);
    }
}

function selectAnswer(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect");
    }
    Array.from(ansBtnsElem.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtnElem.style.display = "block";
}

function showScore() {
    resetState();
    questionElem.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextBtnElem.innerHTML = "Play Again";
    nextBtnElem.style.display = "block";
}
function handleNextButton() {
    currentQxnIndex++;
    if (currentQxnIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtnElem.addEventListener("click", () => {
    if (currentQxnIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();