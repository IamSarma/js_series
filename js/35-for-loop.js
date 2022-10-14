let scores = ["25", "38", "32"];
let arrayLength = scores.length;
let roundNumber = 0;
let msg = "";

// Loop through the items in the array
for (let i = 0; i < arrayLength; i++) {
  // Arrays are 0 based
  // Add 1 to the current round
  roundNumber = i + 1;

  // Write the current round to message
  msg += "Round " + roundNumber + ": ";

  //   Get the score from the scores array
  msg += scores[i] + "<br />";
}

document.getElementById("answer").innerHTML = msg;
