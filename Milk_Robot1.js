//Returning function

function getMilk(money,costPerbottle) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
 
  console.log("buy " + calcBottles(money,costPerbottle) + " bottles of milk");

  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
 
  console.log("Hello master, here is your " + calcChange(money,costPerbottle) + " change");
}

function calcBottles(startingMoney,costPerbottle){
  
   var numberOfBottles = Math.floor(startingMoney/costPerbottle); 
  
  return numberOfBottles;
}

function calcChange(startingAmount,costPerBottle){
  var change = startingAmount % costPerBottle;
  return change;
}

getMilk(10,3);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Output--
// leaveHouse
// moveRight
// moveRight
// moveUp
// moveUp
// moveUp
// moveUp
// moveRight
// moveRight
// buy 3 bottles of milk
// moveLeft
// moveLeft
// moveDown
// moveDown
// moveDown
// moveDown
// moveLeft
// moveLeft
// enterHouse
// Hello master, here is your 1 change
