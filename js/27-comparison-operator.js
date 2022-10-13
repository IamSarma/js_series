let pass = 50;
let score = 90;

// Check if the user has passed
let hasPassed = score >= pass;

// Write the message into the page
let elAnswer = document.getElementById("answer");
elAnswer.textContent = "Level passed: " + hasPassed;
