let inStock;
let shipping;

inStock = true;
shipping = false;

// Due to some process, the script might need to change these values

inStock = false;
shipping = true;

let elStock = document.getElementById("stock");
elStock.className = inStock;

let elShipping = document.getElementById("shipping");
elShipping.className = shipping;
