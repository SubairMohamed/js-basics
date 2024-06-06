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
console.log(car.name);
car.stop();
car.start();
