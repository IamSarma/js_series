// Declaring variables and storing elements
let noteInput, noteName, textEneterd, target;

noteName = document.getElementById("noteName");
noteInput = document.getElementById("noteInput");

// recordContorls function
function recordContorls(e) {
  if (!e) {
    e = window.event;
  }
  target = e.target;
  e.preventDefault();

  switch (target.getAttribute("data-state")) {
    case "record":
      record(target);
      break;
    case "stop":
      stop(target);
      break;
  }
}

// Adding event listeners
document.addEventListener(
  "click",
  function (e) {
    recorderControls(e);
  },
  false
);
noteInput.addEventListener("input", writeLabel, false);
