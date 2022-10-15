// querySelector() only returns the first match
let el = document.querySelector("li.hot");
el.className = "cool";

// querySelectorAll() returns a NodeList
// The second matching element (the third list item) is selected and changed
let elements = document.querySelectorAll("li.hot");
elements[1].className = "cool";
