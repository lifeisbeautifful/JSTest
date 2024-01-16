//Train to work with objects
//3 - 5
const person = {
    citizenship : "UA"
}

const engineer = Object.create(person);
engineer.team = "GeekForLess";
engineer.direction = "QA";

class QaEngineer  {
    name = "testName";
    surname = "testSurname";
    __proto__ = engineer
}

var automation = new QaEngineer();
var automation2 = new QaEngineer();
var manager = person;

//Property value will be changed for all class exemplares, created after changing prop value
automation.__proto__.citizenship = "PL";
automation2.__proto__.citizenship = "GE";

var automation3 = new QaEngineer();

console.log(Object.entries(automation));
console.log(automation.__proto__.team, automation.__proto__.direction);
console.log(automation.__proto__.citizenship);
console.log(manager.citizenship);
console.log(Object.getPrototypeOf(automation2));
console.log(automation3.__proto__.citizenship);

//Iterate via object keys and values
for(key in automation){
    console.log(key);
    console.log(automation[key]);
}

//1 & 2
function animals(isAnimal)   {
    this.isAnimal = isAnimal
}

var cow = new animals(true);
console.log(cow);

const dog =  {
    ...animals,
    isVaccinated : true,
    weight : "25"
}

const tuzik = dog;
tuzik.isAnimal = false;
console.log(Object.values(tuzik));

