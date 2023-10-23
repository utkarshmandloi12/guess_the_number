"use strict";

//Defining required values.

let isCorrect,
  score = Number(100),
  highScore = 0,
  requiredNumber = Math.trunc(Math.random() * 101); // The number to be guessed.

//Working of "Check" button

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // Nothing entered in the check box.
    isCorrect = "Enter A Value First.";
  } else if (guess > requiredNumber) {
    // if guessed number is higher than actual number.
    isCorrect = `${guess} is Too High !!!`;
  } else if (guess < requiredNumber) {
    // gussed number is less than required number.
    isCorrect = `${guess} is Too Low 👎`;
  } else {
    // when the number is gussed.
    isCorrect = "Congratulations🥳";
    document.querySelector(".number").textContent = requiredNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "18rem";
    document.querySelector(".number").style.padding = "3rem 2rem";
    document.querySelector(".number").style.fontSize = "8rem";
    score += 10;
  }

  score -= 10;
  document.querySelector(".message").textContent = isCorrect;
  document.querySelector(".guess").value = null;
  document.querySelector(".score").textContent = score;

  if (score > highScore && guess === requiredNumber) {
    document.querySelector(".highscore").textContent = score;
    highScore = score;
  }

  if (document.querySelector(".score").textContent < 10) {
    document.querySelector(".message").textContent = "You LOST.";
    score = 10;
  }
});

//Actions after clicking "Again" button.

document.querySelector(".again").addEventListener("click", function () {
  //resetting the values in game.

  score = 100;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = null;
  document.querySelector(".message").textContent = "Start guessing...";
  requiredNumber = Math.trunc(Math.random() * 101);

  //resetting the style of game.

  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "13rem";
  document.querySelector(".number").style.padding = "2rem 1rem";
  document.querySelector(".number").style.fontSize = "6rem";
});
