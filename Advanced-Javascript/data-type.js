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

let age = 20;
let height = 5.7;
let bodyTempature = 37;
let pi = 3.14;

console.log(age, height, bodyTempature, pi);

const py = Math.PI;
console.log(py);

// Rounding closets number 
// if above 0.5 then round up otherwise round down if below 0.5

console.log(Math.round(2.6));
console.log(Math.round(1.3));
console.log(Math.floor(1.3)); // floor rounding down