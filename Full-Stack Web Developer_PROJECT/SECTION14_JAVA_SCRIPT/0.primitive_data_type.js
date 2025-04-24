function test() {
    var a = "3";
    var b = "8";
    var c = "";

    var c = b;
    b = a;
    a = c;

    console.log("a is " + a);
    console.log("b is " + b)
}
test()