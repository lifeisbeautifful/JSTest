//Merge array task
var merge = function(nums1, m, nums2, n) {
    for(i = 0; i < nums1.length; i++){
        if(nums1[i] === 0 && n > 0){
            nums1[i] = nums2[n-1];
            n--;
        }

        if(i > 0 && nums1[i] < nums1[i-1]){
            for(let j = i; j > -1; j--){
                if(nums1[j] < nums1[j-1]){
                    let temp = nums1[j-1];
                    nums1[j-1] = nums1[j];
                    nums1[j] = temp;
                }
            } 
        }
    }

    //or sort instead of second if, but it takes more time to execute
    //return nums1.sort();
};


var arr3 = [-1,0,0,3,3,3,0,0,0];
var arr4 = [1,2,2];
console.log(merge(arr3, arr3.length, arr4, arr4.length));
console.log(arr3);

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

