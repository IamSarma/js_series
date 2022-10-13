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

  // Part 2: Calculate and write out the expiry details for the offer
  let expMessage, today, elOfferEnds;

  function offerExpires(today) {
    let weekFromToday, day, date, month, year, dayNames, monthNames;
    // Calculate 7 days time
    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    // Create arrays to hold names of days and months
    dayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    // Collect the parts of the date to show on the page
    day = dayNames[weekFromToday.getDay()];
    date = weekFromToday.getDate();
    month = monthNames[weekFromToday.getMonth()];
    year = weekFromToday.getFullYear();
    // Create the message
    expMessage = "Offer expires next ";
    expMessage += day + " <br />(" + date + " " + month + " " + year + ")";

    return expMessage;
  }
})();
