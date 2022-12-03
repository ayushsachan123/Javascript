const prompt = require("prompt-sync")();

//For changing in Upper case and lower case


var name="Ayush";


//If you print the name then it will in lowercse
//so to save this upper toUpperCase
//for UpperCase
name= name.toUpperCase();


//for lowercase
name=name.toLowerCase();



//print first letter of name will UpperCase rest should be lower case
//Hello Ayush

var name= prompt("What is your name");

//slice first letter
var firstChar = name.slice(0,1);

var upperCasefirstChar = firstChar.toUpperCase();

var restOfName = name.slice(1,name.length);

var lowerCaseOtherChar = restOfName.toLowerCase();

var captaliseOfName = upperCasefirstChar + lowerCaseOtherChar;

console.log("Hello "+ captaliseOfName);

//----------------------------------------------------------------------------------------------------------------------------------------------------------
// Output--
// What is your nameAyush
// Hello Ayush
