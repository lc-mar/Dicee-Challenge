var randomNumber1 = Math.floor(Math.random() * 6) + 1; // gives a random # between 1-6 

var randomDice = "dice" + randomNumber1 + ".png"; // retrieves random dice image from folder


var randomImageSource = "images/" + randomDice; //changes dice images

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);