
function pickupTheBroom(){
    console.log("PIck up the broom")
}

function CleanBy(){
    console.log("Clean Clean Clean ")
}


function HouseKeeper(name, age, yOe, skills){
    this.name = name;
    this.age = age;
    this.yOe = yOe;
    this.skills = skills;
    this.startCleaning = function() {
        alert("Let start cleaning !!! <3");

        pickupTheBroom();
        CleanBy();
    }

    
    return "hello my name is "+ name +" i am "+ age +" i have "+ yOe +"of experiences and my skills are "+ skills;
}
// examples 
var houseKeeper1 = new HouseKeeper("Maria", "23", 23, ["Cook", "clean", "Iron"]);
var houseKeeper2 = new HouseKeeper("Eden", "23", 23, ["Cook", "clean", "Iron", "other"]);