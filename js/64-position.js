// Create required elements to hold values
let sx = document.getElementById("sx");
let sy = document.getElementById("sy");
let px = document.getElementById("px");
let py = document.getElementById("py");
let cx = document.getElementById("cx");
let cy = document.getElementById("cy");

function showPosition(event) {
  sx.value = event.screenX;
  sy.value = event.screenY;
  px.value = event.pageX;
  py.value = event.pageY;
  cx.value = event.clientX;
  cy.value = event.clientY;
}

let el = document.getElementById("body");
el.addEventListener("mousemove", showPosition, false);
