const prompt = require("prompt-sync")();

function swap(num){
var num1=num;
var a=Math.floor(num/10);
var b=num%10;
var c=b*10+a;
console.log(c);
if(num1>=c){
    console.log("true");
}
else{
    console.log("false");
}

}

swap(43);
