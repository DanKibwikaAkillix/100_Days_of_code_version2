
function HouseKeeper(name, age, yOe, skills){
    this.name = name;
    this.age = age;
    this.yOe = yOe;
    this.skills = skills;

    return "hello my name is "+ name +" i am "+ age +" i have "+ yOe +"of experiences and my skills are "+ skills;
}

var houseKeeper1 = new HouseKeeper("Maria", "23", 23, ["Cook", "clean", "Iron"]);
var houseKeeper2 = new HouseKeeper("Eden", "23", 23, ["Cook", "clean", "Iron", "other"]);