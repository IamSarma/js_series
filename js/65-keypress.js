function charCount(e) {
  let textEntered, charDisplay, count, lastKey;
  textEntered = document.getElementById("message").value;
  charDisplay = document.getElementById("charactersLeft");
  count = 180 - textEntered.length;
  charDisplay.textContent = count;
  lastKey = document.getElementById("lastKey");
  lastKey.textContent = "Latst key in ASCII code: " + e.keyCode;
}

let el = document.getElementById("message");
el.addEventListener("keypress", charCount, false);
