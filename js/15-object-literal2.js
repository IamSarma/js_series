let hotel = {
  name: "Park",
  rooms: 120,
  booked: 77,
  checkAvailability: function () {
    return this.rooms - this.booked;
  },
};

let elName = document.getElementById("hotelName");
elName.textContent = hotel.name;

let elRooms = document.getElementById("rooms");
elRooms.textContent = hotel.checkAvailability();
