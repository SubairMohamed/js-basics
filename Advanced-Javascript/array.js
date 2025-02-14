// Arrays
  // =======
  // Using Array constructor
// const arr1 = Array();
// console.log(arr1);

// or
// let arr2 = new Array();
// console.log(arr2);

  // Using square brackets []
// This syntax the most recommended way to create an empty list
// let arr3 = [];
// console.log(arr3);

 // Array with initial values
 let fruits = ["apple", "banana", "mango", "orange"];
 console.log(fruits.length);
 
  // Array can have items of different data types
 let diff = [
   true, 
   5, 
   "name", 
   null,
   {university: "is a apha university and unity university"},
   {skils: ["web deverloper", "full-strack"]}
 ];
 console.log(diff[5].skils[1]);

 //Modifying array element
let modi = [1, 2, 3, 4, 5];
modi[0] = 10;
modi[1] = 20;
console.log(modi);

// or

let countries = [
    "somaliland",
    "kenya",
    "ethiopia",
    "uganda",
];
countries[0] = "somalia";
let newCountry = countries.length -1
countries[newCountry] = "south africa";
console.log(countries);

// Checking array