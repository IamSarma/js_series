// Create variables for the welcome message
let greeting = "Howdy ";
let username = "John";
let message = ", please check your order:";

// Concatenate the variables to create the welcome message
let welcomeMessage = greeting + username + message;

// Create variales to hold the details about the sign
let sign = "John Wick House";
let tiles = sign.length;
let subTotal = tiles * 5;
let shipping = 7;
let grandTotal = subTotal + shipping;

// Get the element that has an id of greeting and replace the content with welcome message
let elGreeting = document.getElementById("greeting");
elGreeting.textContent = welcomeMessage;

// Get the element that has an id of userSign and update its contents
let elSign = document.getElementById("userSign");
elSign.textContent = sign;

// Get the element that has an id of tiles and update its contents
let elTiles = document.getElementById("tiles");
elTiles.textContent = tiles;

// Get the element that has an id of subTotal and update its contents
let elSubTotal = document.getElementById("subTotal");
elSubTotal.textContent = "$" + subTotal;

// Get the element that has an id of shipping and update its contents
let elShipping = document.getElementById("shipping");
elShipping.textContent = "$" + shipping;

// Get the element that has an id of grandTotal and update its contents
let elGrandTotal = document.getElementById("grandTotal");
elGrandTotal.textContent = "$" + grandTotal;
