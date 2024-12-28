// ADVANCED JAVASCRIPT 

// DATA TYPES 
//   1) Primitive Data Types immutable
//   2) NON-Primitive Data Types

//  1) Primitive Data Types
// Numbers - Integers, floats
// Strings - Any data under single quote, double quote or backtick quote
// Booleans - true or false value
// Null - empty value or no value
// Undefined - a declared variable without a value

// example

let word = "nlpha";
word[0] = "a";
console.log(word);

let num1 = 3;
let num2 = 3;
console.log(num1 == num2);

// let sum = num1;
// console.log(sum);

// 2) NON-Primitive Data Types
// Array = mutable
// Object = mutable

// Array

let arr = [1, 2, 3, 4, 5];
arr[0] = 85
console.log(arr);

let num = [6, 7, 8, 9];
let numbers = [6, 7, 8, 9];
console.log(num == numbers);

// Object = mutable

const person = {
    name: "subair",
    study: "alpha"
};

const per = {
    name: "subair",
    study: "alpha"
};

console.log(per == person);

let name = per;
console.log(name); 

// Numbers 
// Numbers are integers and decimal values which can do all the arithmetic operations