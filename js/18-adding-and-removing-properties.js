let hotel = {
  name: "Park",
  rooms: 120,
  booked: 77,
};

hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

let elHotelName = document.getElementById("hotelName");
elHotelName.textContent = hotel.name;

let elPool = document.getElementById("pool");
elPool.className = "Pool: " + hotel.pool;

let elGym = document.getElementById("gym");
elGym.className = "Gym: " + hotel.gym;
