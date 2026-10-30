 function  affordableVisits ( credit, visitCost) {
    if( credit<0 || credit>10000 || !Number.isInteger(credit)){
        return null
    }
    if( visitCost<1 || visitCost>1000 || !Number.isInteger(visitCost)){
        return null
    }
    let counter=0;
   let remainingCredit=credit;

  while ( remainingCredit >= visitCost) { 
    remainingCredit = remainingCredit-visitCost
    counter=counter+1

    
  }  
return counter 
    
 }
 console.log(affordableVisits(11,4));
 console.log(affordableVisits(4,4));
 console.log(affordableVisits(3,4));
 console.log(affordableVisits(0,4));
 console.log(affordableVisits(10000,1));
 console.log(affordableVisits(10,0));
 console.log(affordableVisits(10,"2"));
 
 
 