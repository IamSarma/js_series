// Create the array
let colors = ["white", "black", "custome"];

// Update the third item in the array
colors[2] = "beige";

// Get the element with an id of colors
let elColors = document.getElementById("colors");

// Replace with third item from the array
elColors.textContent = colors[2];
