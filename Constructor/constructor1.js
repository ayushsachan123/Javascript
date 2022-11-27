function BellBoy (name,age,hasWorkPermit,languages){
    this.name=name;
    this.age=age;
    this.hasWorkPermit=hasWorkPermit;
    this.languages=languages;
}

var BellBoy1 = new BellBoy("timmy",19,true,["french"],["English"]);

console.log(BellBoy1.name);
console.log(BellBoy1.age);


//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Output--
// timmy
// 19
