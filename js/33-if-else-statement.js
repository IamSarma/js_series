let pass = 50;
let score = 75;
let msg;

// Select message to write based on score
if (score >= pass) {
  msg = "Congratulations, you passed!";
} else {
  msg = "Have another go!";
}

let elAnswer = document.getElementById("answer");
elAnswer.textContent = msg;
