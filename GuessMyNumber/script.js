"used strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let calculateScore = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (!guess) {
    displayMessage("🚫 NO Number");
  } else if (guess === secretNumber) {
    displayMessage("😱 Corrent Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (calculateScore > highscore) {
      highscore = calculateScore;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (calculateScore > 1) {
      displayMessage(guess > secretNumber ? "📈 To High" : "💀 To Low");
      calculateScore--;
      document.querySelector(".score").textContent = calculateScore;
    } else {
      displayMessage("😵 You Lost The Game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  calculateScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = calculateScore;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
