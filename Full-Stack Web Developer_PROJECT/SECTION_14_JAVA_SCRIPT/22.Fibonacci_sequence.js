function fibonacci(n){
    var mySequence = [];

    if (n === 1) {
        mySequence.push(0);
    } else if (n === 2) {
        for (var i = 0; i < n; i++) {
            mySequence.push(i);
        }
    } else {
        mySequence = [0, 1];
        for (var i = 2; i < n; i++) {
            mySequence.push(mySequence[i - 1] + mySequence[i - 2]);
        }
    }

    console.log(mySequence);
    return mySequence;
}
