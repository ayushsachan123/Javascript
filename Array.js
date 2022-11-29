const prompt = require("prompt-sync")();


var arr = ["ayush","sumit","ujjwal","shubham","sitanshu","sidh"];
//Printing whole array
console.log(arr);

//Calculating Length
console.log(arr.length);

//Printing first element
console.log(arr[0]);


//Checking the element present or not

var name = prompt("Enter your name");

var arr = ["ayush","sumit","ujjwal","shubham","sitanshu","sidh"];

if(arr.includes(name)){
  console.log("Welcome: ");
}
else{
  console.log("Better luck next time");
}

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Output--
// [ 'ayush', 'sumit', 'ujjwal', 'shubham', 'sitanshu', 'sidh' ]
// 6
// ayush
// Enter your nameayush
// Welcome: 
