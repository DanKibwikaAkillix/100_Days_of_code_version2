function whosPaying(names) {
    
    /******Don't change the code above*******/
        
        //Write your code here.
        a = Math.random(0,1);
        
        
        var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
        for (i=0; i<names.length; i++ ) {
            index_of_names = names[i];
            x = a * names.length;
            x = Math.floor(x) + 1;
        }
        console.log( names[x]+" is going to buy lunch today!");
        
    
    
    /******Don't change the code below*******/    
    }