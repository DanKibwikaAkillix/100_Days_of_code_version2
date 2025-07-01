function makeChange(number, money) {
    amount_to_pay = number * 1.5;
    change = money - amount_to_pay ;
    console.log("You bought " + number + " bottle(s) of Milk, that's will be "+amount_to_pay +" USD");
    return change
}

payBack = makeChange(2,50)
console.log("Your change is of " + payBack +" USD");