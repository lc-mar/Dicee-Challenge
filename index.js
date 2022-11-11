var randomNumber1 = Math.floor(Math.random() * 6) + 1; // gives a random # between 1-6 for dice # 1

var randomDice = "dice" + randomNumber1 + ".png"; // retrieves random dice image from folder to attach # in random # on dice 1 


var randomImageSource = "images/" + randomDice; //changes dice images

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // gives a random # between 1-6 for dice #2 

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // retrieves random dice image from folder to attach # in random # on dice 2

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🎉 Player 1 Wins! 🎉"
}

else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "🎉 Player 2 Wins 🎉"
}