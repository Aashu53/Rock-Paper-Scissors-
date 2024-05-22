let userMove = "";

function computerMove() {
  let computerMove = Math.random() * 3;
  let computerSelection;
  if (computerMove >= 0 && computerMove < 1) {
    computerSelection = "Rock";
  } else if (computerMove >= 1 && computerMove < 2) {
    computerSelection = "Paper";
  } else {
    computerSelection = "Scissors";
  }
  return computerSelection;
}

function showResult() {
  if (!userMove) {
    alert("Please select a move");
    return;
  }

  let computerChoice = computerMove();

  let result;
  if (userMove === computerChoice) {
    result = "It's a draw";
  } else if (
    (userMove == "Rock" && computerChoice == "Paper") ||
    (userMove == "Paper" && computerChoice == "Scissors") ||
    (userMove == "Scissors" && computerChoice == "Rock")
  ) {
    result = "Computer Won";
  } else {
    result = "User You Won";
  }
  document.getElementById("resultText").textContent = result;

  if (result === "User You Won") {
    var end = Date.now() + 2 * 1000;

    // go Buckeyes!
    var colors = ["#bb0000", "#ffffff"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }
}
