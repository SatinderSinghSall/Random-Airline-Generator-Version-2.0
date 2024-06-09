var RandomNumber = Math.floor(Math.random() * 10) + 1;
var RandomAirlineImages = "airline" + RandomNumber + ".png";
var RandomAirlineImageSource = "Images/" + RandomAirlineImages;
var AirlineImage = document.querySelectorAll("img")[0];
AirlineImage.setAttribute("src", RandomAirlineImageSource);

var UserPrompt_Name = prompt("Enter your name : ")
document.querySelector("p").innerHTML = "Hey, " + UserPrompt_Name + ". Check the random airline image out.";
