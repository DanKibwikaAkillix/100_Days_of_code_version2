// array to hold my color names
var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

// Function to generate a random number (0–3)
function nextSequence() {
    userClickedPattern = []; // Clear previous input
    level++;
    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random() * 4); // FIX: was 1–3
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // Animate the button
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    // Play sound
    var soundEffect = new Audio("sounds/" + randomChosenColor + ".mp3");
    soundEffect.play();
}

// Only start the game once
$(document).keypress(function (event) {
    if (!started) {
        $("h1").text("Level " + level);
        nextSequence();
        started = true;
    }
});

// Handle button clicks
$(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    // Animate user click
    $("#" + userChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    // Play user sound
    var soundEffect = new Audio("sounds/" + userChosenColour + ".mp3");
    soundEffect.play();

    // Add pressed class
    $("#" + userChosenColour).addClass("pressed");
    setTimeout(function () {
        $("#" + userChosenColour).removeClass("pressed");
    }, 100);

    // Check user answer
    checkAnswer(userClickedPattern.length - 1);
});

// Check the user's answer
function checkAnswer(currentIndex) {
    if (userClickedPattern[currentIndex] === gamePattern[currentIndex]) {
        // If entire sequence is correct
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
        }
    } else {
        // Wrong click
        var wrongEffect = new Audio("sounds/wrong.mp3");
        wrongEffect.play();

        $("body").addClass("red");
        setTimeout(function () {
            $("body").removeClass('red');
        }, 1000);

        $("h1").text("Lost. Press any key to start again.");

        // Reset everything
        startOver();
    }
}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    started = false;
}
