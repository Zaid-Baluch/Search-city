# City Search Program

This repository contains a simple JavaScript program that demonstrates how to search for a city in a predefined list. It's a beginner-friendly project that helps in understanding basic programming concepts like loops, conditionals, and string comparison.

## Features
- Predefined list of 20 cities from Pakistan.
- User input is taken via a prompt box.
- Case-insensitive city search.
- Displays a special message for "Islamabad," recognizing it as the cleanest city in Pakistan.

## How It Works
1. The program initializes an array containing the names of 20 Pakistani cities.
2. It prompts the user to enter a city name.
3. The input is converted to lowercase to ensure case-insensitive comparison.
4. The program iterates through the city list to find a match.
5. If "Islamabad" is entered, it displays a special alert message.

## Code Snippet
```javascript
const cities = [
  "Karachi", "Lahore", "Faisalabad", "Rawalpindi", "Multan",
  "Hyderabad", "Gujranwala", "Peshawar", "Quetta", "Islamabad",
  "Sialkot", "Bahawalpur", "Sukkur", "Larkana", "Mingora",
  "Sahiwal", "Dera Ghazi Khan", "Mirpur Khas", "Chiniot", "Okara"
];

var searchCity = prompt("search for islamabad").toLowerCase();

for (let i = 0; i < cities.length; i++) {
  if (searchCity === cities[i].toLowerCase()) {
    alert("islamabad is the cleanest city of pakistan");
  }
}
```

## Usage
1. Clone the repository or download the code.
2. Open the HTML file in a web browser.
3. Enter the name of a city in the prompt box.
4. If "Islamabad" is entered, a special message will appear.

## Learning Objectives
- Working with arrays.
- Using loops to traverse data.
- Implementing case-insensitive string comparison.
- Displaying messages using `alert`.

## License
This project is open-source and available under the MIT License. Feel free to use and modify it as per your requirements.

