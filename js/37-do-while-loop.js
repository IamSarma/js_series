let i = 1;
let msg = "";

// Store 5 times table in a variable
do {
  msg += i + " x 5 = " + i * 5 + "<br />";
  i++;
} while (i < 1); // Note how this is alredy 1 and it still runs

document.getElementById("answer").innerHTML = msg;
