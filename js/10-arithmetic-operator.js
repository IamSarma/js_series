let subtotal = (13 + 1) * 5;
let shipping = 0.5 * (13 + 1);
let total = subtotal + shipping;

let elSubtotal = document.getElementById("subtotal");
elSubtotal.textContent = subtotal;

let elShipping = document.getElementById("shipping");
elShipping.textContent = shipping;

let elTotal = document.getElementById("total");
elTotal.textContent = total;
