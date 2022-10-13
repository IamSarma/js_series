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

  // Write out the hotel name, standard rate and the special rate
  let hotelName, roomRate, specialRate;

  hotelName = document.getElementById("hotelName");
  roomRate = document.getElementById("roomRate");
  specialRate = document.getElementById("specialRate");

  hotelName.textContent = hotel.name;
  roomRate.textContent = "$" + hotel.roomRate;
  specialRate.textContent = "$" + hotel.offerPrice();
})();
