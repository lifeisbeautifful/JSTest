//function declaration 
function sum(number){
    let sumDigitsUpToNumber = [...new Array(number).keys()].reduce((a, b) => a + b);
    return sumDigitsUpToNumber;
}

//function expression
const calcFiboNumbers = function(number){
    let first = 1;
    let second = 1;

    number === 1 ? console.log(first): console.log(first,'\n',second);

    for(let i = 3; i <= number; i++){
        let tempVar = first;
        first = second;
        second = tempVar + first;
        console.log(second);
        }
    }

console.log(sum(5));
calcFiboNumbers(11);
