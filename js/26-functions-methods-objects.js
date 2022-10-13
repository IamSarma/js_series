/* The script is placed inside an immediately invoked function expression (IIFE) 
which helps protect the scope of variables */

(function () {
  // Part 1: Create hotel object and write out the offer details
  // Create a hotel object using object literal syntax
  let hotel = {
    name: "Park",
    roomRate: 240,
    discount: 15,
    offerPrice: function () {
      let offerRate = this.roomRate * ((100 - this.discount) / 100);
      return offerRate;
    },
  };
})();
