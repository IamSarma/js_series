// Adding items to start and end of list
// Get the ul element
let list = document.getElementsByTagName("ul")[0];

// Add new item to end of list
let newItemLast = document.createElement("li");
let newTextLast = document.createTextNode("cream");
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);
