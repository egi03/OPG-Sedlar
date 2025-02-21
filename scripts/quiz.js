let questions = [
    {
        question: "Koja je osnovna svrha plodoreda?",
        answers: [
            { text: "Smanjenje upotrebe strojeva", correct: false },
            { text: "Smanjenje prinosa", correct: false },
            { text: "Uništavanje korova", correct: false },
            { text: "Povećanje plodnosti tla", correct: true }
        ]
    },
    {
        question: "Koja žitarica je najčešće uzgajana u svijetu?",
        answers: [
            { text: "Kukuruz", correct: true },
            { text: "Pšenica", correct: false },
            { text: "Ječam", correct: false },
            { text: "Zob", correct: false }
        ]
    },
    {
        question: "Koja je najvažnija hranjiva tvar u gnojivu za rast biljaka?",
        answers: [
            { text: "Kalij", correct: false },
            { text: "Ugljik", correct: false },
            { text: "Dušik", correct: true },
            { text: "Sumpor", correct: false }
        ]
    },
    {
        question: "Kako se zove proces kojim biljke pretvaraju sunčevu energiju u hranu?",
        answers: [
            { text: "Fotosinteza", correct: true },
            { text: "Fermentacija", correct: false },
            { text: "Oksidacija", correct: false },
            { text: "Respiracija", correct: false }
        ]
    },
    {
        question: "Koji je glavni uzrok erozije tla?",
        answers: [
            { text: "Sadnja šuma", correct: false },
            { text: "Pretjerana obrada tla", correct: true },
            { text: "Uporaba komposta", correct: false },
            { text: "Redovita kiša", correct: false }
        ]
    },
    {
        question: "Koji je idealan pH tla za većinu poljoprivrednih kultura?",
        answers: [
            { text: "3-4", correct: false },
            { text: "5-7", correct: true },
            { text: "7-9", correct: false },
            { text: "10-12", correct: false }
        ]
    },
    {
        question: "Koji je najbolji način za sprječavanje širenja bolesti među biljkama?",
        answers: [
            { text: "Sadnja iste kulture svake godine", correct: false },
            { text: " Upotreba kontaminiranih sjemena", correct: false },
            { text: "Rotacija usjeva i pravilan razmak", correct: true },
            { text: "Sadnja usjeva u hladno doba godine", correct: false }
        ]
    },
    {
        question: "Kako se zove vrsta tla koje najbolje zadržava vodu?",
        answers: [
            { text: "Pjeskovito tlo", correct: false },
            { text: "Ilovasto tlo", correct: false },
            { text: "Šljunčano tlo", correct: false },
            { text: "Glineno tlo", correct: true }
        ]
    },
    {
        question: "Koji je najčešći uzrok slanosti tla?",
        answers: [
            { text: "Isparavanje vode", correct: true },
            { text: "Višak organskih tvari", correct: false },
            { text: "Sadnja voća", correct: false },
            { text: "Korištenje plodoreda", correct: false }
        ]
    },
    {
        question: "Koja je najvažnija hranjiva tvar za rast korijena biljaka?",
        answers: [
            { text: "Dušik", correct: false },
            { text: "Fosfor", correct: true },
            { text: "Kalij", correct: false },
            { text: "Magnezij", correct: false }
        ]
    },
    {
        question: "Koji je naziv tehnike sadnje biljaka bez tla?",
        answers: [
            { text: "Aeroponika", correct: false },
            { text: "Fotosinteza", correct: false },
            { text: "Hidroponika", correct: true },
            { text: "Plodored", correct: false }
        ]
    }
,
{
    question: "Koji je glavni uzrok kiselosti tla?",
    answers: [
        { text: "Prekomjerna upotreba gnojiva", correct: true },
        { text: "Sadnja drveća", correct: false },
        { text: "Navodnjavanje", correct: false },
        { text: "Korištenje komposta", correct: false }
    ]
},
{
    question: "Koja je najvažnija mikroelement za rast biljaka?",
    answers: [
        { text: "Željezo", correct: true },
        { text: "Kalcij", correct: false },
        { text: "Magnezij", correct: false },
        { text: "Sumpor", correct: false }
    ]
},
{
    question: "Koji je najbolji način za poboljšanje strukture tla?",
    answers: [
        { text: "Dodavanje pijeska", correct: false },
        { text: "Dodavanje organske tvari", correct: true },
        { text: "Navodnjavanje", correct: false },
        { text: "Sadnja drveća", correct: false }
    ]
},
{
    question: "Koji je glavni uzrok zbijanja tla?",
    answers: [
        { text: "Teška mehanizacija", correct: true },
        { text: "Navodnjavanje", correct: false },
        { text: "Sadnja usjeva", correct: false },
        { text: "Uporaba komposta", correct: false }
    ]
},
{
    question: "Koji je najbolji način za očuvanje vlage u tlu?",
    answers: [
        { text: "Navodnjavanje", correct: false },
        { text: "Malčiranje", correct: true },
        { text: "Sadnja drveća", correct: false },
        { text: "Uporaba gnojiva", correct: false }
    ]
}
]

const startBtn = document.getElementById("start-quiz");
const quizContainer = document.getElementById("quiz-container-id");
const questionTextDiv = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-container");
const endScreen = document.getElementById("end-screen");
const restartBtn = document.getElementById("restart-button");
let currentQuestionIndex = 0;
let score = 0;
let questionsIndexes = getRandomQuestionsIndexes();

startBtn.addEventListener("click", () => {
    startBtn.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    startQuiz();
});

restartBtn.addEventListener("click", () => {
    endScreen.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    currentQuestionIndex = 0;
    score = 0;
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    questionsIndexes = getRandomQuestionsIndexes()
    startQuiz();
});

function getRandomQuestionsIndexes(){
    let selectedQuestions = [];
    while (selectedQuestions.length < 5) {
        let randomIndex = Math.floor(Math.random() * questions.length);
        if (!selectedQuestions.includes(randomIndex)) {
            selectedQuestions.push(randomIndex);
        }
    }
    console.log(selectedQuestions);
    return selectedQuestions;
}

function startQuiz(){
    showQuestion(questionsIndexes[currentQuestionIndex]);
}

function showQuestion(questionIndex) {
    answerButtons.innerHTML = "";

    let question = questions[questionIndex];
    questionTextDiv.innerText = question.question;

    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("answer-btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

async function selectAnswer(){
    Array.from(answerButtons.children).forEach(button => {
        button.classList.add("disabled");
    });

    if (this.dataset.correct) {
        score++;
        this.classList.add("correct");
    }
    else{
        this.classList.add("incorrect");

        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct) {
            button.classList.add("correct");
            }
        });
    }

    setTimeout(() => {
        answerButtons.innerHTML = "";
        currentQuestionIndex++;
        if(currentQuestionIndex === 5){
            displayEndScreen();
        }
        else{
            showQuestion(questionsIndexes[currentQuestionIndex]);
        }
    }, 1000);
}

function displayEndScreen(){
    document.getElementById("final-score").innerHTML = `Vaš rezultat je: <br> ${score}/5`;
    quizContainer.classList.add("hidden");
    endScreen.classList.remove("hidden");
}