let score1 = 90;
let score2 = 95;
let highScore1 = 70;
let highScore2 = 95;

// Check if scores are higher than the current high scores
let comparison = score1 + score2 > highScore1 + highScore2;

// Write message into the page
let elAnswer = document.getElementById("answer");
elAnswer.textContent = "New high score: " + comparison;
