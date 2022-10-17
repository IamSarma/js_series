// Declaring variables and storing elements
let noteInput, noteName, textEneterd, target;

noteName = document.getElementById("noteName");
noteInput = document.getElementById("noteInput");

// Adding event listeners
document.addEventListener(
  "click",
  function (e) {
    recorderControls(e);
  },
  false
);
noteInput.addEventListener("input", writeLabel, false);
