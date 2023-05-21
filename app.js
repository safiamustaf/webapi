var quiz = [
  { question: "What is JAVA", choices: ["A animal", "A web application", "A type of food"], answer: "A web application" },
  { question: "What is CSS", choices: ["A style sheet", "A type of car", "A website"], answer: "A style sheet" },
  { question: "What is Jquery for", choices: ["Makes the use of java easier", "Helps style a website", "Does nothing"], answer: "Makes the use of java easier" },
];

var currentQuestion = 0;
var timeLeft = 100;
var timerInterval;

function startQuiz() {
  document.getElementById("start-btn").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  displayQuestion();
  startTimer();
}

function displayQuestion() {
  var q = quiz[currentQuestion];
  document.getElementById("question").textContent = q.question;
  var choicesList = document.getElementById("choices");
  choicesList.innerHTML = "";
  for (var i = 0; i < q.choices.length; i++) {
    var li = document.createElement("li");
    li.textContent = q.choices[i];
    li.addEventListener("click", checkAnswer);
    choicesList.appendChild(li);
  }
}

function checkAnswer() {
  if (this.textContent === quiz[currentQuestion].answer) {
    document.getElementById("result").textContent = "Correct!";
  } else {
    document.getElementById("result").textContent = "Incorrect!";
    timeLeft -= 10;
  }
  currentQuestion++;
  if (currentQuestion < quiz.length) {
    displayQuestion();
  } else {
    endQuiz();
  }
}

function startTimer() {
  timerInterval = setInterval(function () {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

function endQuiz() {
  clearInterval(timerInterval);
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").textContent = "Quiz Ended!";
  document.getElementById("timer").textContent = "0";
}