
// arry to hold my color names
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

//function to build a random number which will be used as index to generate random color from the buttonColors array
function nextSequence() {
    randomNumber = Math.floor(Math.random() * 3) + 1;
    return randomNumber;
}

function playNextSequence() {
    // call the function nextSequence's return statement. assigned it to the array as index. assigned the value to a variable called randomChosenColour
    var randomChosenColor = buttonColors[nextSequence()];
    gamePattern.push(randomChosenColor);

    // jquery to fade in and fade out button
    var fadeInANDout = $("#" + gamePattern).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var soundEffect = new Audio("sounds/" + gamePattern + ".mp3");
    soundEffect.play();

    $(".btn").click(function () {
        var userChosenColour = $(this).attr("id");
        var fadeInANDout = $("#" + userChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

        var soundEffect = new Audio("sounds/" + userChosenColour + ".mp3");
        soundEffect.play();
        userClickedPattern.push(userChosenColour);
        console.log(userClickedPattern);
    })

    
    $(".btn").click(function () {
        var userChosenColour = $(this).attr("id");
        $("#" + userChosenColour).toggleClass("pressed");
        //  $("#" + userChosenColour).removeClass("pressed");
    })


}

playNextSequence();









