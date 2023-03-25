const prompt = require("prompt-sync")();

var arr = [5,3,7,9,0,2];
var a=arr.length;
arr.sort();

var b=arr[0];
var c=arr[a-1];
console.log(b + " " +c);
