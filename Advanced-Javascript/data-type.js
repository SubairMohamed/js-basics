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
// console.log(word);

let num1 = 3;
let num2 = 3;
// console.log(num1 == num2);

// let sum = num1;
// console.log(sum);

// 2) NON-Primitive Data Types
// Array = mutable
// Object = mutable

// Array

let arr = [1, 2, 3, 4, 5];
arr[0] = 85
// console.log(arr);

let num = [6, 7, 8, 9];
let numbers = [6, 7, 8, 9];
// console.log(num == numbers);

// Object = mutable

const person = {
    name: "subair",
    study: "alpha"
};

const per = {
    name: "subair",
    study: "alpha"
};

// console.log(per == person);

let name = per;
// console.log(name); 

// Numbers 
// Numbers are integers and decimal values which can do all the arithmetic operations

let age = 20;
let height = 5.7;
let bodyTempature = 37;
let pi = 3.14;

// console.log(age, height, bodyTempature, pi);

const py = Math.PI;
// console.log(py);

// Rounding closets number 
// if above 0.5 then round up otherwise round down if below 0.5

// console.log(Math.round(2.6));
// console.log(Math.round(1.3));
// console.log(Math.floor(1.3)); // floor rounding down
// console.log(Math.ceil(9.2)); // ceil roundin up
// console.log(Math.min(0, 1, 20, 99, 70, -80)); // min return the minimum value
// console.log(Math.max(0, 1, 20, 99, 70, -80)); // max return the maximun value

// Random number is a number between 0 and 0.999999
const rdm = Math.random();
// console.log(rdm);

// const rndom = Math.floor(Math.random() * 10);
// console.log(rndom);

// const rndom = Math.ceil(Math.random() * 10);
// console.log(rndom);

// absolute value
// console.log(Math.abs(1)); 

// squere root 
// console.log(Math.sqrt(100)); 

// power 
// console.log(Math.pow(10, 2)); 

// trigonometry
// console.log(Math.sin(60))
// console.log(Math.cos(60))

// Strings
// ======

// long literal string
let para = "My name is Asabeneh Yetayeh. I live in Finland, Helsinki. \ I am a teacher and I love teaching.\ I teach HTML, CSS, JavaScript, React,\ Redux, Node.js, Python, Data Analysis and";
// console.log(para);

// Escape sequences in string

// \n - new line
// \t - tab
// \\ - backslash
// \' - single quote
// \" - double quote"

let str = "I hope every one is enjoying! \"the\" JavaScript tutorial";
console.log(str);

// Template literal or template string

let a = 4;
let b = 5;
console.log(`the sum of ${a} and ${b} is ${a + b}`);

let firstname = "xasan";
let lastname = "faarax";
let Age = 30;
let country = "somaliland";
let job = "web developer";
let fullname = firstname + " " + lastname;

console.log(`my name is ${fullname}, and my age is ${Age}, i come from ${country}, i work for ${job}`);

// String Methods

  // 1.length

let pro = "javascript";
console.log(pro.length);

  // 2.accessing characters in a string

let pro1 = "javascript";
// console.log(pro1[9]);
let fIndex = pro1.length - 1;
console.log(fIndex);

  //3.toUpperCase()

let magac = "mohamed";
console.log(magac.toUpperCase());

  //4.toLowerCase()

let magac1 = "ALI";
console.log(magac1.toLowerCase());

  //5.substr() =  it extracts a part of a string and returns a new string

let school = "university";
console.log(school.substr(2, 9));

  //6.substring()
let Alphabet = "finland";
console.log(Alphabet.substring(0));

  //7. split()
let string = "30 days of javascript";
console.log(string.split(' '));

  //8.trim() removes space at beginning and ending of the string
let string1 = "    30 days of javascript ";
console.log(string1.trim());

  //9.includes() it checks if a substring exists in a string
console.log(string.includes("days"));

  //10.replace() it replaces a substring with another substring
      //first parameter = old
      //second parameter = new
let repVar = "1month of python";
console.log(repVar.replace("python", "C++"));

  //11.charAt() it takes index and it returns the value at that index
let viewIndx = "university";
// console.log(viewIndx[9]);
console.log(viewIndx.charAt(7));

  //12.charCodeAt() ascii number
let asci = "all boys";
console.log(asci.charCodeAt(7));

  //13.indexOf() it returns the first index of a string
let frstIndx = "python";
console.log(frstIndx.indexOf("o"));

  //14.lastIndexOf() it returns the last index of a string  
let lstIndx = "javascript";
console.log(lstIndx.lastIndexOf('t'));

  //15.concat() it concatenates two or more strings 
let con = "i learned";
console.log(con.concat(' programming', ' language', ' that is ruby rails'));

  //16.startsWith() 
let start = "love is not good";
console.log(start.startsWith("good"));

 //17.startsWith() 
 let start1 = "love is not good";
 console.log(start.endsWith("good"));

 //18.repeat()
let rep = "great";
console.log(rep.repeat(5));

 // cheking data type and casting
let frstName = "nimco";
let AgE = 30;
let Bolen = true;
let nul = null;
let undefn  
// console.log(typeof undefn );

// string to int
  //parseInt()
  //Number()
  //plus sign(+)

// let number = "20";
// let nmber = parseInt(number);
// console.log(nmber);

// let number = "20";
// let nmber = Number(number);
// console.log(nmber);

// let number = "20";
// let nmber = +number;
// console.log(nmber);

// string to float
  //parseFloat()
  //Number()
  //plus sign(+)

// let number = "20.9";
// let nmber = parseFloat(number);
// console.log(nmber);

// let number = "20.9";
// let nmber = Number(number);
// console.log(nmber);

// let number = "20.9";
// let nmber = Number(number);
// console.log(nmber);

// let number = "20.9";
// let nmber = +(number);
// console.log(nmber);

// float to int 
let float = 30.9;
let int = parseInt(float);
console.log(int);

  // Booleans
// we will summary because it is easy to understand every one , so will enjoy it 

 // Ternary Operators

let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = true

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

  // windows methods
  // alert()
// alert("welcome to 30 days in javascript");

  // prompt()
// it takes two argument the second one is optional 
// prompt("requried button", "this is optional text");
// let Numbers = prompt("enter number", "number goes here");
// console.log(Number);

  //confirm() 
  // is used to ask a user to execute something
// let confm = confirm("do you like javascript?");
// console.log(confm);

  //Date Objects

//Getting time 
let time = new Date();
// console.log(time);

//Getting full year
let year = new Date();
console.log(year.getFullYear());

//Getting month
let month = new Date();
console.log(month.getMonth()); // 0 - 11 january - december

//Getting date
let date = new Date();
console.log(date.getDate());

//Getting day
let day = new Date();
console.log(day.getDay()); // 0 - 6 sunday - saturday 

//Getting hours
let hour = new Date();
console.log(hour.getHours());

//Getting minutes
let minute = new Date();
console.log(minute.getMinutes());

//Getting seconds
let second = new Date();  
console.log(second.getSeconds()); 

//Getting time
let time1 = new Date();
console.log(time1.getTime()); //this is the number of seconds passed from January 1, 
// 1970 to January 4,

// let weather = 'cloudy'
// switch (weather) {
//   case 'rainy':
//     console.log('You need a rain coat.')
//     break
//   case 'cloudy':
//     console.log('It might be cold, you need a jacket.')
//     break
//   case 'sunny':
//     console.log('Go out freely.')
//     break
//   default:
//     console.log(' No need for rain coat.')
// }

let grades = 'A';
switch (grades) {
  case 'A':
    console.log(100);
    console.log(90);
    break
  case 'B':
    console.log(90);
    break
  case 'C':
    console.log(80);
    break
  case 'D':
    console.log(70);
    break
  default:
    console.log("waad dhacday!");
}

