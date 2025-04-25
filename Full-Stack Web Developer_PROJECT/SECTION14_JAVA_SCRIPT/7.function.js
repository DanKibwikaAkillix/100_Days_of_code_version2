function pacth(name) {
    var name = name.toUpperCase()
    console.log(name)
 }
 var name = "Hello world";
 pacth(name);


 
// First exercise

function main(){
    putBeeper();
    TurnAndBeeper();
    TurnAndBeeper();
    TurnAndBeeper();
    TurnAndBeeper();
  
  }
  
  function TurnAndBeeper() { 
     
    move();
    turnLeft();
    move();
    putBeeper();
    turnRight();
    
  }
     
  function turnRight(){
      turnLeft();
      turnLeft();
      turnLeft();
      turnLeft();
  }
  