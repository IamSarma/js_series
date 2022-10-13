let today = new Date();
let current_year = today.getFullYear;
let est = new Date("Apr 16, 1996 15:45:55");

let difference = today.getTime() - est.getTime();
difference /= 31_556_900_000;

let elMessage = document.getElementById("message");
elMessage.textContent =
  Math.floor(difference) + " years of online travel advice";
