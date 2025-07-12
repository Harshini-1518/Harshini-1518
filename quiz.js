const questions = [
  {
    question: "What color is the sky on a clear day?",
    options: ["blue", "red", "black", "green"],
    answer: 0
  },
  {
    question: "What is 2+2?",
    options: ["4", "5", "6", "8"],
    answer: 0
  },
  {
    question: "Which planet is known as red planet?",
    options: ["jupiter", "venus", "mars", "satrun"],
    answer: 2
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timer = 30;
let countdown;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const nextBtn = document.getElementById("nextBtn");
const resultBox = document.getElementById("resultBox");
const quizBox = document.getElementById("quizBox");
const scoreDisplay = document.getElementById("scoreDisplay");
const leaderboardForm = document.getElementById("leaderboardForm");
const leaderboardList = document.getElementById("leaderboardList");

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  quizBox.style.display = "block";
  resultBox.style.display = "none";
  loadQuestion();
  startTimer();
  updateLeaderboard();
}

function loadQuestion() {
  const current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => selectOption(i);
    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function selectOption(selected) {
  const current = questions[currentQuestionIndex];
  const allButtons = optionsEl.querySelectorAll("button");

  allButtons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === current.answer) btn.style.backgroundColor = "green";
    if (i === selected && i !== current.answer) btn.style.backgroundColor = "red";
  });

  if (selected === current.answer) score++;

  clearInterval(countdown);
  nextBtn.style.display = "block";
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    loadQuestion();
    startTimer();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timer = 30;
  timerEl.textContent = `Time: ${timer}`;
  countdown = setInterval(() => {
    timer--;
    timerEl.textContent = `Time: ${timer}`;
    if (timer <= 0) {
      clearInterval(countdown);
      selectOption(-1); // time's up, no answer
    }
  }, 1000);
}

function endQuiz() {
  quizBox.style.display = "none";
  resultBox.style.display = "block";
  scoreDisplay.textContent = `Your Score: ${score} / ${questions.length}`;
}

leaderboardForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("username").value;
  if (!name) return;

  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.push({ name, score });
  leaderboard.sort((a, b) => b.score - a.score);
  leaderboard.splice(5); // top 5 only
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  updateLeaderboard();
  leaderboardForm.reset();
});

function updateLeaderboard() {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboardList.innerHTML = leaderboard
    .map(entry => `<li>${entry.name} - ${entry.score}</li>`)
    .join("");
}

function restartQuiz() {
  startQuiz();
}

nextBtn.addEventListener("click", nextQuestion);
window.onload = startQuiz;
