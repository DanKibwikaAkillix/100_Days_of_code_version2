

var numbOfDrumButtons = document.querySelectorAll("button.drum").length;
for (var i = 0; i < numbOfDrumButtons; i++) {

    document.querySelectorAll('button.drum')[i].addEventListener("click", function () {

        var buttonInnerHtml = this.innerHTML;
        switch (buttonInnerHtml) {
            case "w":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;


            case "s":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var crash= new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case "k":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

            case "l":
                var kick_bass = new Audio("sounds/kick-bass.mp3");
                kick_bass.play();
                break;

            default: console.log(buttonInnerHtml);
               
        }
    })
}

