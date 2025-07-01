// Love calculator

alert("Welcome to the love calculator App");
fist_name = prompt("Enter the First name");
second_name = prompt("Enter the second name");
n = Math.random();
x = Math.floor((n * 100)) + 1;
if (x >= 70 && x <= 100) {
    alert("Hello " + fist_name + " and " + second_name + ", your score number is of " + x + " You guys really match <3");
}
else if (x >= 50 && x <= 69) {
    alert("Hello " + fist_name + " and " + second_name + ", your score number is of " + x + " You guys Love each keep going <3");
}
else if (x < 50) {
    alert("Hello " + fist_name + " and " + second_name + ", your score number is of " + x + " ,well i think it is time to reconsider");
}

