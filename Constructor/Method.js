function HouseKeeper(yearsOfExperience, name,cleaningRepertoire){
    this.yearsOfExperiece = yearsOfExperience;
    this.name = name;
    this.cleaningRepertoire = cleaningRepertoire;
this.clean = function(){
    console.log("Cleaning in progress...");
}
}

var HouseKeeper1= new HouseKeeper(12,"Arvind",["Bedroom"]);

HouseKeeper1.clean();

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Output--
// Cleaning in progress...
