// Declare variables and store elements
let elList, addLink, newEl, newText, counter, listItems;

elList = document.getElementById("list");
addLink = document.querySelector("a");
counter = document.getElementById("counter");

// addItem function
function addItem(e) {
  e.preventDefault();
  newEl = document.createElement("li");
  newText = document.createTextNode("New list item");
  newEl.appendChild(newText);
  elList.appendChild(newEl);
}

// updateCount function
function updateCount() {
  listItems = document.getElementsByTagName("li").length;
  counter.innerHTML = listItems;
}

// Add event listeners
addLink.addEventListener("click", addItem, false);
elList.addEventListener("DOMNodeInserted", updateCount, false);
