//Love Calculator
const prompt = require("prompt-sync")();

prompt("What is your Name");
prompt("What is their Name");

var n = Math.random();

n=n*100;

n= Math.floor(n)+1;

if(n>70 ){
  console.log("Your love score is " + n+"%" + "You love each other like kanye loves kanye.");
}

if(n>30 && n<=70){
   console.log("Your love score is " + n+"%");
}

if(n<=30){
   console.log("Your love score is " + n+"%" + "you go together like oil and water.");
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Output--
// hat is your NameAyush
// What is their NameSachan
// Your love score is 38%
