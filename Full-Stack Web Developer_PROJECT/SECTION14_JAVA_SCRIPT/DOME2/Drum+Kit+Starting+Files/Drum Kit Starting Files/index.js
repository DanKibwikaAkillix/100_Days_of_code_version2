// function handleClick() {
//     alert("i got clicked!");
// }

// document.querySelector("button.w").addEventListener("click", handleClick)

var numbOfDrumButtons = document.querySelectorAll("button.drum").length;
for(var i=0; i<numbOfDrumButtons; i++) {
    document.querySelectorAll('button.drum')[i].addEventListener("click", function(){
        alert("i got clicked!");
    })
}
