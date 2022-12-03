
function whosPaying(names){
    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson =names[randomPersonPosition];
   
    return randomPerson + " is going to buy today";
   }
   
   names=["Ayush","Sumit","Ujjawal","Shubham","Siddh"];
   
   console.log(whosPaying(names));

//----------------------------------------------------------------------------------------------------------------------------------------------------------
// Output--
// Sumit is going to buy today
