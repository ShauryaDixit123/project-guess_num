"use strict";

let secret_num = Math.round(Math.random() * 20);
let score = 20;
const message = document.querySelector(".message");

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  if (!guess) {
    message.textContent = "No number";
  }

  // console.log(secret_num);
  let high_score = 0;
  const guess_num = document.querySelector(".guess");
  const comp_val = Number(guess_num.value);
  const highscore = document.querySelector(".highscore");
  if (score > 1) {
    if (comp_val !== secret_num) {
      document.querySelector(".score").innerText = score;
      score--;
      if (comp_val > secret_num) message.textContent = "Too High";
      else message.textContent = "Too Low";
    } else if (comp_val === secret_num) {
      document.querySelector(".number").textContent = secret_num;
      message.textContent = "You found the answer!";
      document.body.style.backgroundColor = "green";
      const number = document.querySelector(".number");
      number.style.height = "2em";
      number.style.width = "4em";
      if (score > high_score) {
        high_score = score;
        document.querySelector(".highscore").innerText = high_score;
      }
    }
  } else {
    message.textContent = "You lost the game!";
    document.querySelector(".score").innerText = 0;
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  secret_num = Math.round(Math.random() * 20);
  document.querySelector(".score").innerText = score;
  document.querySelector(".number").textContent = "?";
  document.body.style.backgroundColor = "#333";
  const number = document.querySelector(".number");
  number.width = "15rem";
  message.textContent = "Guess the number!";

  // number.textContent = "";
  document.querySelector(".guess").value = "";
});
