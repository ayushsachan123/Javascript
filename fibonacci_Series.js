function fibonacciGenerator(n){
    var output=[];
      var sum=0;
    for(var i=0;i<n;i++){
     if(i==0){
      output.push(0);
     }
     else if(i==1){
     output.push(1);
     }
    else{
     output.push(output[i-1]+output[i-2]);
    }
    }
    console.log(output);
   }
   
   fibonacciGenerator(10);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Output--
// [
//   0, 1,  1,  2,  3,
//   5, 8, 13, 21, 34
// ]
