let score = 75;
let msg = "";

function congratulate() {
  msg += "Congratulations! ";
}

if (score >= 50) {
  congratulate();
  msg += "Please proceed to the next round.";
}

var elAnswer = document.getElementById("answer");
elAnswer.textContent = msg;
