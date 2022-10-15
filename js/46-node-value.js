// Get second list item
let itemTwo = document.getElementById("two");

// Get its text content
let elText = itemTwo.firstChild.nodeValue;

// Change 'pine nuts' to 'kale'
elText = elText.replace("pine nuts", "kale");

// Update the list item
itemTwo.firstChild.nodeValue = elText;
