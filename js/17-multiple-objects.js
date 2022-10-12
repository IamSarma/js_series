function Hotel(name, rooms, booked) {
  this.name = name;
  this.rooms = rooms;
  this.booked = booked;
  this.checkAvailability = function () {
    return this.rooms - this.booked;
  };
}

let quayHotel = new Hotel("Quay", 40, 25);
let parkHotel = new Hotel("Park", 120, 77);

let quayDetails = quayHotel.name + " rooms: ";
quayDetails += quayHotel.checkAvailability();

let parkDetails = parkHotel.name + " rooms: ";
parkDetails += parkHotel.checkAvailability();

let elHotel1 = document.getElementById("hotel1");
elHotel1.textContent = quayDetails;

let elHotel2 = document.getElementById("hotel2");
elHotel2.textContent = parkDetails;
