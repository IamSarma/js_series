// Declare variables and store elements
let elList, addLink, newEl, newText, counter, listItems;

elList = document.getElementById("list");
addLink = document.querySelector("a");
counter = document.getElementById("counter");

// Add event listeners
addLink.addEventListener("click", addItem, false);
elList.addEventListener("DOMNodeInserted", updateCount, false);
