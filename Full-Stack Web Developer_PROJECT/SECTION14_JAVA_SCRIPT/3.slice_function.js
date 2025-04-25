var sentence = prompt("Write a comment 280 character : ")
n = 280
legth_of_sentence = sentence.length - n
alert("You have " + legth_of_sentence +" Character left \n" + sentence.slice(0, 281) )