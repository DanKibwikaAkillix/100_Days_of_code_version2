var output = [];
var count = 1;
function fizzBuzz() {
    output.push(count);
    count ++;
    console.log(output)

    if (((count % 3) === 0) && ((count % 5) === 0 )) {
        output.push("FizzBuzz");
    }
    if ((count % 3) === 0) {
        output.push("Fizz");
    }
    else if ((count % 5) === 0 ) {
         output.push("Buzz");
    }
    
}
fizzBuzz()