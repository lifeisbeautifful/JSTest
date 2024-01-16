//3 - 5
const person = {
    citizenship : "UA"
}

const engineer = Object.create(person);
engineer.team = "GeekForLess";
engineer.direction = "QA";

const qaEngineer = {
    name :"testName",
    surname : "testSurname",
    __proto__:engineer
}


console.log(Object.entries(qaEngineer));
console.log(qaEngineer.team, qaEngineer.direction);
console.log(qaEngineer.citizenship);

//1 & 2
function animals(isAnimal)   {
    this.isAnimal = true
}

// const domesticAnimals = new animals(true);
// domesticAnimals.houseAdopted = true;

// const cat = {
//     ...domesticAnimals(true),
//     isVaccinated : true,
//     weight:""
// }

// let fatCat = new domesticAnimals(true);
// console.log(Object.entries(fatcat.isVaccinated));