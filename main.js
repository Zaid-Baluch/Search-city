const cities = [
  "Karachi",
  "Lahore",
  "Faisalabad",
  "Rawalpindi",
  "Multan",
  "Hyderabad",
  "Gujranwala",
  "Peshawar",
  "Quetta",
  "Islamabad",
  "Sialkot",
  "Bahawalpur",
  "Sukkur",
  "Larkana",
  "Mingora",
  "Sahiwal",
  "Dera Ghazi Khan",
  "Mirpur Khas",
  "Chiniot",
  "Okara",
];
var searchCity = prompt("search for islamabad").toLowerCase();
for (let i = 0; i < cities.length; i++) {
  if (searchCity === cities[i].toLowerCase()) {
    alert("islamabad is the cleanest city of pakistan");
  }
}
