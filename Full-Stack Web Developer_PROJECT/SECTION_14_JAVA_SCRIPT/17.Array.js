var names = ["Dan", "Hope", "Kibwika", "Sanzila"];
// check if uer exist in records
var userName = prompt("Welcome to the party, what's your name?");
if (names.includes(userName)) {
    console.log("Welcome in "+ userName);
}
else {
    console.log("Oops your name is not recorded! here is the List :")
    for (i=0; i< names.length ; i ++) {
    console.log(names[i]);
    }
}
