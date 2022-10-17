// Declaring variables and storing elements
let noteInput, noteName, textEneterd, target;

noteName = document.getElementById("noteName");
noteInput = document.getElementById("noteInput");

// writelabel function
function writeLabel(e) {
  if (!e) {
    e = window.event;
  }
  target = e.target;
  textEneterd = target.value;
  noteName.textContent = textEneterd;
}

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

// record function
function record(target) {
  target.setAttribute("data-state", "stop");
  target.textContent = "stop";
}

// stop function
function stop(target) {
  target.setAttribute("data-state", "record");
  target.textContent = "record";
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
