var startBtn = document.querySelector(".start-btn"),
  nextBtn = document.querySelector(".next-btn"),
  questionElement = document.querySelector(".question"),
  answersContainer = document.querySelector(".q-container"),
  quizTitleElement = document.querySelector(".quiz-title"),
  quizDescElement = document.querySelector(".quiz-desc"),
  descElement = document.querySelector(".desc"),
  correctCount = document.querySelector(".correct-count"),
  failElement = document.querySelector(".fail"),
  congratsElement = document.querySelector(".congrats");
let currentQuestion = 0;
let correct = 0;

window.addEventListener("load", () => {
  quizTitleElement.innerHTML = quizData.title;
  quizDescElement.innerHTML = quizData.desc;
});

startBtn.addEventListener("click", () => {
  descElement.classList.add("hide");
  startQuiz();
});

nextBtn.addEventListener("click", () => {
  loadQuestion(currentQuestion);
});

function startQuiz() {
  startBtn.classList.add("hide");
  nextBtn.classList.remove("hide");
  questionElement.classList.remove("hide");
  answersContainer.classList.remove("hide");
  correctCount.classList.remove("hide");
  failElement.classList.add("hide");
  congratsElement.classList.add("hide");

  loadQuestion(currentQuestion);
}

function loadQuestion(questionNum) {
  if (currentQuestion === questions.length) {
    if(correct/questions.length > .7){
      congratsElement.classList.remove("hide");
      const scrpt = document.createElement("script");
      const node = document.createTextNode(`
          var duration = 20 * 1000;
          var animationEnd = Date.now() + duration;
          var scalar = 2;
          var lovered = confetti.shapeFromText({ text: '❤️', scalar });
          var loveblue = confetti.shapeFromText({ text: '💙', scalar });
          var lovegreen = confetti.shapeFromText({ text: '💚', scalar });
          var loveyellow = confetti.shapeFromText({ text: '💛', scalar });
          var defaults = { startVelocity: 30, 
            spread: 360, 
            ticks: 60, 
            zIndex: 0,
            shapes: [lovered, loveblue, lovegreen, loveyellow],
            scalar
          };

          function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
          }

          var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
              return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
          }, 250);
          let lagu = new Audio('./data/audio/lagu.mp3');
          console.log(lagu);
          lagu.play();`)
      scrpt.appendChild(node);
      congratsElement.appendChild(scrpt);
    }else{
      failElement.classList.remove("hide");
    }
    startBtn.classList.remove("hide");
    nextBtn.classList.add("hide");
    questionElement.classList.add("hide");
    answersContainer.classList.add("hide");
    startBtn.innerHTML = "Restart";
    correctCount.innerHTML = `Benar: ${correct}/${questions.length}`;
    correct = 0;
    currentQuestion = 0;
  } else {
    while (answersContainer.firstChild) {
      answersContainer.removeChild(answersContainer.firstChild);
    }
    answersContainer.dataset.type = null;
    questionElement.innerHTML = questions[questionNum].text;

    // Question types
    if (questions[questionNum].type === "mc") {
      var btnGrid = document.createElement("div");
      answersContainer.appendChild(btnGrid);
      questions[questionNum].answers.forEach((answer) => {
        var answerElement = document.createElement("button");
        btnGrid.classList.add("btn-grid");
        answerElement.innerHTML = answer.text;
        answerElement.dataset.correct = answer.correct;
        answerElement.addEventListener("click", (e) => {
          Array.from(btnGrid.children).forEach(
            (element) => (element.disabled = true)
          );
          e.target.dataset.clicked = "true";
          checkAnswer();
        });
        btnGrid.appendChild(answerElement);
      });
      answersContainer.dataset.type = "mc";
    } else if (questions[questionNum].type === "txt") {
      var inputElement = document.createElement("input");
      var checkBtn = document.createElement("button");
      checkBtn.innerHTML = "Cek";
      checkBtn.classList.add("check-btn");
      inputElement.type = "text";
      checkBtn.addEventListener("click", (e) => {
        checkAnswer();
      });
      answersContainer.appendChild(inputElement);
      answersContainer.appendChild(checkBtn);
      answersContainer.dataset.type = "txt";
    }

    //End types
    correctCount.innerHTML = `Benar: ${correct}`;
  }
}

function checkAnswer() {
  // Check different types

  switch (answersContainer.dataset.type) {
    case "mc":
      Array.from(answersContainer.children[0].children).forEach((button) => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
          if (
            button.dataset.correct === "true" &&
            button.dataset.clicked === "true"
          ) {
            correct++;
          }
        } else {
          button.classList.add("wrong");
        }
      });
      currentQuestion++;
      break;

    case "txt":
      var qInputElement = answersContainer.children[0];
      var foundValues = questions[currentQuestion].answers.find(
        (answer) => answer.toUpperCase() === qInputElement.value.toUpperCase()
      );
      if (foundValues) {
        qInputElement.classList.add("correct");
        correct++;
      } else {
        qInputElement.classList.add("wrong");
      }
      currentQuestion++;
      break;

    default:
      return;
      break;
  }
  //End different types
}

const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay");
const openModalBtn = document.querySelector(".btn-open");
const closeModalBtn = document.querySelector(".btn-close");

openModalBtn.addEventListener("click", () => {
  modalContainer.classList.remove("hidden");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
  modalContainer.classList.add("hidden");
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
});