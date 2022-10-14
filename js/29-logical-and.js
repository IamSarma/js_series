let score1 = 8;
let score2 = 8;
let pass1 = 6;
let pass2 = 6;

// Check whether user passed both rounds and store result in variable
let passBoth = score1 >= pass1 && score2 >= pass2;

// Create message
let msg = "Both rounds passed: " + passBoth;

// Write the message into the page
var elAnswer = document.getElementById("answer");
elAnswer.textContent = msg;
