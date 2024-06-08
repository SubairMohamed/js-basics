// ES5 BEFORE 2015
// function name(x, y) {
//   console.log("parameter 1 is ", x, "parameter 2 is ", y);
// }
// name(200, 300);

// function surname(first, last) {
//   console.log("my name is ", first, "and my father name is ", last);
// }
// surname("subair", "mohamed");

// function vn(num) {
//   return num * 5;
// }
// let add = vn(3);
// console.log(add);

// ES6 after 2015

// arrow function
// const addition = (name) => {
//   return "hello " + name;
// };

// let changeble = addition("dhamaan wn salaamatihn");
// const waliga = addition("alpha");

// console.log(changeble);

// fahrenhiet to celsium

// formula = C=  5/9(°F - 32)

const tocel = (fahrenhiet) => {
  return (5 / 9) * (fahrenhiet - 32);
};

// celsium to fahrenhiet

// formula F = (9/5 × °C) + 32

const tofah = (celsium) => {
  return (9 / 5) * celsium + 32;
};

// Kelvin to Celsius:

// formula C= K - 273

const tokel = (Kelvin) => {
  return Kelvin - 273;
};

// 2 objects
// =========
// wxa kaste oo a duunka dhexyaala ayaa objecti ah

const car = {
  name: "toyoto",
  color: "black",
  weight: "700kg",
  kilometer: "200km",

  start: function () {
    console.log("waa mrka gaadhigu la istaadho");
  },

  stop: function () {
    console.log("waa mrka gaadhigu la istaajiyo");
  },
};
// console.log(car.name);
// car.stop();
// car.start();

// 3 Arrays
// ========
// arraygu waa variable gooni ah kaas oo values badan kuu keediya

// const person = {
//   name: "nimco",
//   weight: "70kg",

//   flat: function () {
//     console.log("nimco way buuranthy");
//   },
// };

// const variables = [
//   "subeer",
//   "xusen",
//   "nimco",
//   "sahra",
//   2000,
//   function () {
//     return person;
//   },
// ];
// console.log(variables[5]().flat());

const fruit = ["watermelon", "cabage", "carro", "banana"];

// Array Methods
// ============

// 1) push()= adds last element from the array
// 2) pop() = deletes or removes the last element from the array
// 3) unshift()= adds the first element from the array
// 4) shift()= deletes or removes the first element from the array
// 5) splice()= it contains two function adding and removes from the array
// 6) slice()= it make selecting existing element from the array
// 7) concat() creates a new array by merging existing array

fruit.push("apple");

fruit.pop();

fruit.unshift("guava", "pineapple");

fruit.shift();

fruit.splice(3, 0, "apple");

const myfavor = fruit.slice(0, 3);
// console.log(myfavor);

const myhope = fruit.slice(0, 2);
const myhate = fruit.slice(2, 4);
const special = myhope.concat(myhate);
console.log(special);

console.log(fruit);

// control statements
// ==================

if (10 > 10.5) {
  console.log("waa sax");
} else if (0.5 <= 1) {
  console.log("way kala weyn yihin");
} else {
  console.log("isma leegka");
}
