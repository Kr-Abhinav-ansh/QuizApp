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
    let currentQxn = questions[currentQxnIndex];
    let qxnNo = currentQxnIndex + 1;
    questionElem.innerHTML = qxnNo + ". " + currentQxn.question;

    currentQxn.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
    })
}