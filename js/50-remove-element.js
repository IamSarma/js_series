// The element to remove
let removeEl = document.getElementsByTagName("li")[3];

// Its containing/parent element
let containerEl = removeEl.parentNode;

// Removing the element
containerEl.removeChild(removeEl);
