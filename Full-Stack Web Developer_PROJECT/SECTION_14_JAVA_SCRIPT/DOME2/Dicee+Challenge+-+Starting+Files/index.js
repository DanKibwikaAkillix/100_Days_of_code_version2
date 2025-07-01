var randomNumber1  = Math.random(0,1);
x = randomNumber1 * 6;
x = (Math.floor(x));

var randomNumber2  = Math.random(0,1);
y = randomNumber2 * 6;
y = (Math.floor(x));


var image = ["dice1.png", "dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var image2 = [ "dice2.png",,"dice6.png", "dice1.png","dice3.png","dice5.png","dice4.png"];

document.querySelector("img.img1").setAttribute("src", "images/"+image[x]);
document.querySelector("img.img2").setAttribute("src", "images/"+image2[y]);

if (image[x] > image2[y]) {
    document.querySelector("h1").innerHTML="Player1 won";
}
else {
    document.querySelector("h1").innerHTML="Player2 won";
}