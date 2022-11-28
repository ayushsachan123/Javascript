//prints the number from 1 to 100. print "Fizz" if multiples of three & print "Buzz" 
//if multiples of five If the Multiples of both print "FizzBuzz"

var output=[];
function fizzBuzz(){
 for(var count =1; count<101;count++){
if(count%3==0 && count%5==0){
   output.push("fizzBuzz");
  }
else if(count%3==0){
  output.push("fizz");
 }
  
 else if(count%5==0){
  output.push("Buzz");
 }
 else{
output.push(count);
}
  count++;
 }
  console.log(output);
}

 fizzBuzz();

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Output--
// [
//   1,      'fizz',     'Buzz',     7,
//   'fizz', 11,         13,         'fizzBuzz',
//   17,     19,         'fizz',     23,
//   'Buzz', 'fizz',     29,         31,
//   'fizz', 'Buzz',     37,         'fizz',
//   41,     43,         'fizzBuzz', 47,
//   49,     'fizz',     53,         'Buzz',
//   'fizz', 59,         61,         'fizz',
//   'Buzz', 67,         'fizz',     71,
//   73,     'fizzBuzz', 77,         79,
//   'fizz', 83,         'Buzz',     'fizz',
//   89,     91,         'fizz',     'Buzz',
//   97,     'fizz'
// ]
