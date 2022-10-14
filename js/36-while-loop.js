let i = 1;
let msg = "";

// Store 5 times table in a variable
while (i < 10) {
  msg += i + " x 5 = " + i * 5 + "<br />";
  i++;
}

document.getElementById("answer").innerHTML = msg;
