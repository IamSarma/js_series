function itemDone(e) {
  // Remove item from the list
  let target, elParent, elGrandParent;
  target = e.target;
  elParent = target.parentNode;
  elGrandParent = target.parentNode.parentNode;
  elGrandParent.removeChild(elParent);

  e.preventDefault();
}

// Set up event listener
let el = document.getElementById("shoppingList");
el.addEventListener(
  "click",
  function (e) {
    itemDone(e);
  },
  false
);
