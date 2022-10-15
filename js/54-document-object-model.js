// Adding items to start and end of list
// Get the ul element
let list = document.getElementsByTagName("ul")[0];

// Add new item to end of list
let newItemLast = document.createElement("li");
let newTextLast = document.createTextNode("cream");
newItemLast.appendChild(newTextLast);
list.appendChild(newItemLast);

// Add new item to start of list
let newItemStart = document.createElement("li");
let newTextStart = document.createTextNode("kale");
newItemStart.appendChild(newTextStart);
list.insertBefore(newItemStart, list.firstChild);

// Get all li elements
let listItems = document.querySelectorAll("li");

// Add a class of 'cool' to all list items
for (let i = 0; i < listItems.length; i++) {
  listItems[i].className = "cool";
}

// Add number of items in the list to the heading
let heading = document.querySelector("h2");
let headingText = heading.firstChild.nodeValue;
let totalItems = listItems.length;
let newHeading = headingText + "<span>" + totalItems + "</span>";
heading.innerHTML = newHeading;
