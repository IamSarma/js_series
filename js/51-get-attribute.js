// Get first list item
let firstItem = document.getElementById("one");

// Check if it has a class attribute and get it
if (firstItem.hasAttribute("class")) {
  let attr = firstItem.getAttribute("class");

  // Add the value of the attribute after the list
  let el = document.getElementById("scriptResults");
  el.innerHTML = "<p>The first item has a class name: " + attr + "</p>";
}
