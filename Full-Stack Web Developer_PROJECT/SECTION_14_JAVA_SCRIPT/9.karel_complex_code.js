function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
      
      daysInYear = 365;
      weeksInYear = 52;
      monthsInYear = 12;
      
      finalMonths =  monthsInYear * 90
      finalWeeks = weeksInYear * 90
      finalDays  = daysInYear * 90
      
      monthsLeft = (finalMonths - (currentAge * monthsInYear));
      weekLeft = ( finalWeeks - (currentAge * weeksInYear));
      dayLeft = (finalDays - (currentAge * daysInYear));
      
      console.log("You have "+  dayLeft+ " days,  "+ weekLeft+ "  weeks, and  "+ monthsLeft + "  months left.")
        //Write your code here.
        
        
        
        
        
    /*************Don't change the code below**********/
    }
    currentAge = prompt("enter your current age: ...");
    lifeInWeeks(currentAge)
    
    