let score = 75;
let msg;

if (score >= 50) {
  msg = "Congratulations! ";
  msg += "Proceed to the next round.";
}

var elAnswer = document.getElementById("answer");
elAnswer.textContent = msg;
