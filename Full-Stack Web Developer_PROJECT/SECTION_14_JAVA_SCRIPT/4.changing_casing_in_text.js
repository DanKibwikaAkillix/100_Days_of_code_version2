// var name = "angela";
// name.toLowerCase();
// name.toUpperCase();

var name_input = prompt("Hello enter your: ...")
name = name_input.toLowerCase()
nameFirstLetterUpper = name.slice(0,1)
nameRestOfTheLetter = name.slice(1,name.length)
firstLetter = nameFirstLetterUpper.toUpperCase()

alert("Hello Mr."+firstLetter +""+nameRestOfTheLetter)
