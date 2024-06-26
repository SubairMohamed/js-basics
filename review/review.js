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

// const fruit = ["watermelon", "cabage", "carro", "banana"];

// Array Methods
// ============

// 1) push()= adds last element from the array
// 2) pop() = deletes or removes the last element from the array
// 3) unshift()= adds the first element from the array
// 4) shift()= deletes or removes the first element from the array
// 5) splice()= it contains two function adding and removes from the array
// 6) slice()= it make selecting existing element from the array
// 7) concat() creates a new array by merging existing array

// fruit.push("apple");

// fruit.pop();

// fruit.unshift("guava", "pineapple");

// fruit.shift();

// fruit.splice(3, 0, "apple");

// const myfavor = fruit.slice(0, 3);
// console.log(myfavor);

// const myhope = fruit.slice(0, 2);
// const myhate = fruit.slice(2, 4);
// const special = myhope.concat(myhate);
// console.log(special);

// console.log(fruit);

// control statements
// ==================

if (10 > 10.5) {
  // console.log("waa sax");
} else if (0.5 <= 1) {
  // console.log("way kala weyn yihin");
} else {
  // console.log("isma leegka");
}

// const zaad = 100;
// const eDahab = 20;
// // --------------
// const laptop = 80;
// const keyboard = 12;
// const mouse = 10;
// const suwaal = 9;
// const shaadh = 12;

// if (zaad >= laptop + keyboard + mouse) {
//   console.log("waxad ku iibsan kartaa by ZAAD");
// } else if (eDahab >= laptop + keyboard + mouse) {
//   console.log("waxad ku iibsan kartaa by eDahab");
// } else if (zaad + eDahab >= laptop + keyboard + mouse + suwaal + shaadh) {
//   console.log("waad ku iibsan kartaa zaad iyo edahab");
// } else if (zaad + eDahab > laptop + keyboard + mouse - suwaal + shaadh) {
//   console.log("waad ku iibsan kartaa!");
// } else {
//   console.log("hadhagagu kuguma filna macmiil");
// }

// making statement by function
// ---------------------------

// const zaad = 100;
// const eDahab = 50;
// const accounts = zaad + eDahab;
// console.log(accounts);

// -------------

// item
// const laptop = 800;
// const keyboard = 12;
// const mouse = 10;
// const suwaal = 9;
// const shaadh = 12;

// const Allitem = laptop + keyboard + mouse + suwaal + shaadh;
// console.log(Allitem);

// function counter(Allitem) {
//   if (accounts > Allitem) {
//     console.log("waad ku iibsan kartaa by Accounts");
//   } else {
//     console.log("kuma iibsan kartid macmiil!");
//   }
// }

// higher order function (HOF)
// ===========================

// 1) map
// 2) filter
// 3) reduce

// 1) map
// ------

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// num.map(function (value) {
//   console.log("numbers " + value + " * 10 = ", value * 10);
// });

// auto function eg 2

// const ArrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const MultipleByNumber = (number) => {
//   return ArrayNumbers.map((data) => data / number);
// };
// console.log(ArrayNumbers);

const lacag = [
  {
    name: "zaad",
    amount: 20000,
  },
  {
    name: "eDahab",
    amount: 100000,
  },
];

// lacag.map((money) => {
//   console.log("before :", money);
// });
// or
// const bank = lacag.map((value) => value.amount);
// console.log(bank);

// const substraction = (price) => {
//   return lacag.map((money) => {
//     return money.amount - price;
//   });
// };

// console.log(substraction(20000));

const classD = [
  {
    name: "xasan farax",
    gender: "Male",
    grade: 60,
  },
  {
    name: "nimco cabdi",
    gender: "Female",
    grade: 90,
  },
  {
    name: "maxamed cali",
    gender: "Male",
    grade: 70,
  },
  {
    name: "jibriil yooniz",
    gender: "Male",
    grade: 95,
  },
  {
    name: "sahra maxamud",
    gender: "Female",
    grade: 80,
  },
  {
    name: "basra axmed",
    gender: "Female",
    grade: 40,
  },
];

// 1) ClassD all name inside in ?

// classD.map(function (student) {
//   console.log(student.name);
// });

// or

// const Allstudents = classD.map((student) => {
//   return student.name;
// });
// console.log(Allstudents);

// or

// const Allstudentss = classD.map((student) => student.name);
// console.log(Allstudentss);

// 2) Filter
// ---------
// 2 classD only Males ?

// const boys = classD.filter((student) => {
//   return student.gender === "Male";
// });

// const boys = classD.filter((student) => student.gender === "Male");
// console.log(boys);

// 3) Reduce
// ---------
// sum or total, reduce it takes two argument

const Allgrades = classD.reduce((grade, student) => {
  // console.log(student.grade);
}, 0);
//total iniatial
// console.log(Allgrades);

// const totalgrades = classD.reduce((marks, student) => {
//   let total = marks + student.grade;
//   return total;
// }, 0);
// console.log(totalgrades);

// are same

const Allgrades2 = classD.reduce((grade, student) => {
  return grade + student.grade;
}, 0);
// console.log(Allgrades2);

// fetch only males total grade ?

const Onlymales = classD.filter((student) => {
  return student.gender === "Male";
});
// console.log(Onlymales);

const sumtotalmales = Onlymales.reduce((total, student) => {
  return total + student.grade;
}, 0);
// console.log(sumtotalmales);

// sort()
// ======
// sort is acending order or alphabetic order

// const numbers = [9, 5, 6, 4, 1, 0, 2, 7, 8, 3];
// const order = numbers.sort();
// console.log(order);

// Reverse()
// =========

// const vegetable = ["orange", "apple", "banana"];
// const vege = vegetable.reverse();
// console.log(vege);

// let strings = "welcome to my crash courses";
// const name = strings.split("").reverse().join("");
// console.log(name);
