year = prompt("The the Year bellow");
first_condition = year % 4;
second_condition = year % 100;
third_condition = year % 400;

if (first_condition === 0) {
    console.log("after checking the first condition "+year + " is a Leaf year indeed");
}
else if (second_condition === 0) {
    console.log("after checking the second condition "+year + " is not a Leaf year indeed");
    if (third_condition === 0) {
        console.log("after checking the third condition "+year + " is a Leaf year indeed");
    }
}
else if (second_condition != 0) {
    console.log("after checking the second condition "+year + " is a Leaf year indeed");
}