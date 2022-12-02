// Kerel Id

// Putting beeper diagonally

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   //your code here
puttingBeeper();
puttingBeeper();
puttingBeeper();
puttingBeeper();
}

function puttingBeeper(){
   putBeeper();
   move();
   turnLeft();
   move();
   turnRight();
   putBeeper();
}


//Making Chess 

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   //your code here
   puttingBeeper1();
   puttingBeeper1();
   turning1();
   puttingBeeper2();
   puttingBeeper2();
   turning2();
   puttingBeeper1();
   puttingBeeper1();
   turning1();
    puttingBeeper2();
   puttingBeeper2();
   turning2();
   puttingBeeper1();
   puttingBeeper1();
}

function puttingBeeper1(){
   putBeeper();
   move();
   move();
    putBeeper();
}

function turning1(){
   turnLeft();
   move();
   turnLeft();
}

function puttingBeeper2(){
   move();
    putBeeper();
    move();
   }
   
function turning2(){
   turnRight();
   move();
   turnRight();
}

