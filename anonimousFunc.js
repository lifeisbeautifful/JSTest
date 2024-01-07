//function anonimous
(function(greeting){
    console.log(greeting + " from anonimous selcall function")
})("Hi")

//arrow function
const getOddNumbers = numberArray => numberArray.filter(n => n%2 != 0);

console.log(getOddNumbers([1,2,3,4,5,6,7,8,9,10]));