//reverse
const reverseString = str => str.split("").reverse().join("");
console.log(reverseString("hello"));

//reverse digit array
const numArray = [2,4,67,3,56,5,8,32,9];
const reverseEvenNumbers = function(numArray){
    return numArray.filter(n => n%2 === 0).reverse();
}
console.log(reverseEvenNumbers(numArray));

//Palindrom
const isPalindrom = function(sentence){
    let testStr = sentence.toLowerCase();
    let length = testStr.length;

    for(let i = 0; i < length/2; i++){
        if(testStr[i] !== testStr[length - 1 - i]){
            return false;
        }
    }
    return true;
}

console.log(isPalindrom("anna, 00 ,anna"))