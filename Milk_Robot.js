//give command to take how many bootles of milk

function getMilk(money) {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  var numberOfBottles = Math.floor(money/1.5) ; 
  console.log("buy " + numberOfBottles + " bootles of milk");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5);

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
// buy 3 bootles of milk
// moveLeft
// moveLeft
// moveDown
// moveDown
// moveDown
// moveDown
// moveLeft
// moveLeft
// enterHouse
