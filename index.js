// variables

// var x = 10;
// let y = 12;
// const z = 14;
// console.log(x + y + z);
// var iskugayn = x + y + z;
// console.log(iskugayn);

// laws in varaibles
// inaanad isticmaali karin javascript keywords
// waa inuu noqdaa meningfull
// waa inaanad ku bilaawin number
// waa inaanad space u dhaxiisiin

// Javascript Operators

// 01 Arithmetic operator
//==========================
// +  Addition
//  - Substraction
//  * Multiplication
//  / Division
//  % Modulus (Remainder)
// ** Exponentiation  (waa square oo kale )
// ++ Increment
// -- Decrement

// let mod = 10;
// let mod2 = 8;
// console.log(mod % mod2);

// let mod = 5;
// let mod2 = 2;
// console.log(mod ** mod2);

// let dec = 10;
// console.log(dec--);
// console.log(dec);

// let inc = 100;
// console.log(inc++);
// console.log(inc);

// 02 comparison operator
//========================
// == Equalvalue
// === Equal type and value
// != is not equal value
// !== is not equal type and value
// > greater then
// >= greather then or equal to
// < less then
// <= less then or equal to

// let num1 = 20;
// let num2 = "20";

// console.log(num1 == 10);
// console.log(num2 === num1);

//console.log(num1 !== num2); // true
//console.log(num1 != num2);  //false

// let aa = 20;
// let bb = 20;

//console.log(aa > bb);
//console.log(aa >= bb);

// console.log(bb < aa);
// console.log(aa <= bb);

// 03 Logical operator
//====================
//  && = And
//  || = OR
//  ! = NOT

// let ss = 20;
// let dd = 30;

//console.log(ss === 20 && dd === 29);
//console.log(dd === 30 || ss === 210);

// console.log(dd !== ss);
//  let cagsi = true;
//  console.log(!cagsi);

//  let cagsikale = false;
//  console.log(!cagsikale);

//Exercise
//==========
//1) all types Of javascript versions?
// 2) diffrences Of (var), (let), (const)?
// 3) what is the js comments? and what is used?
// 4) all types Of javascript operators?

// Data Type
// =========

// 01 Primitive data type

//  Number = 123456789;
//  String = "subeer";
//  Boolean = true , false;
//  null = "wax madham";
//  undefined = "wax aan jirin";

// let numbers = 100;
// let Strings = "alpha";
// let tureorfalse = true;

// let number = "100";
// console.log(typeof number);

////////console///////
// let number = 100;
// undefined
// console.log(typeof number);
// VM2524:1 number
// undefined
// let magacyada = "alpha";
// undefined
// console.log(typeof magacyada);
// VM2931:1 string
// undefined
// let magacyada = "alpha";
// undefined
// typeof magacyada
// 'string'
///////////////////////

//  02 Non-Primitive Datatype

// functions
// Objects
// Array

// 01 function
//==============

//  ES5
// function Name(x, y) {
//   console.log("parameter 1 is ", x, "parameter 2 is ", y);
// }

// ES6
// value number
// const Addttion = (num) => {
//     return num * 5;
// }
// let num = Addttion(10);
// console.log(num);

// value string
// function sayhello(name) {
//     console.log("hello " + name + " how are you");
// }

// function sceneraio(name) {
//     return "my name is " + name;
// }
// const choice = sceneraio("subeer maxamed");
// let choicetwo = sceneraio("subeer maxamed");

// value variable
// function readvariable(name) {
//     return "Hello mr/mrs " + name;
// }
// const mohamed = "subeer maxamed harbi";
// let cali = "subeer cali harbi";

//console
// let ayaan = "AYN"
// undefined
// ayaan
// 'AYN'
// readvariable(ayaan)
// 'Hello mr/mrs AYN'

// fahrenhiet to celsium
// formula = °C = (°F - 32) × 5/9,
// function tocel(fahrenhiet) {
//     return (fahrenhiet - 32) * 5/9;
// }

// Exercise 2
// celsium to fahrenhiet?
//== °F = (°C × 9/5) + 32
// Radius of circle?
//== radius is r=c/2b..
// circumference of circle?
//== C = 2πR = 2 * π * 14

// 02 Objects
//===========

// const car = {
//     name: "parado",
//     model: 2019,
//     color: "white",
//     weight: "850kg",
//
//     start: function () {
//         console.log("gaadhiga waa la istaadhay");
//     },
//     drive: function () {
//         console.log("gaadhiga waa la kixeeyay");
//     },
//     stop: function () {
//         console.log("gaadhiga waa la istaajiyay");
//     },
// };

// const person = {
//     name: "farah",
//     color: "black",
//     height: "tell",
//     weight: "fat",
// };

// Challenge
//   person {
//  #1 Method color
//  #2 Method Fat
//  #3 Method tell
// }

// 03 Arrays
//==========

// const vegetables1 = "banana";
// const vegetables2 = "Apple";
// const vegetables3 = "lemon";

// const vegetables = ["banana", "Apple", "lemon", 200, "4000", true, null, function () {
//     return car;
// },];
// markaan doonayo function ii haya object
//kaa soo leh properties io methods wxn ku soo saranayaa vegetables[7]().start()
//                                              namearrayka indexes function clmd . methodkaaga
//console.log(vegetables);

// Array methods
// =============

// 01 Push()
// 02 Pop()
// 03 Shift()
// 04 Unshift()
// 05 Splice()
// 06 Slice()
// 07 Concat()

// const fruits = ["orange", "apple", "lemon", "watermilen", "mango", "grapes"];

// push() = addes last element from the array.
//fruits.push("banana", "saled",);

// 02 Pop() = deletes or removes last element from the array.
//fruits.pop();

// 03 Shift() = deletes or removes first element from the array.
//fruits.shift();

// 04 Unshift() = addes first element from the array.
//fruits.unshift("bango");

// 05 Splice() = it contains two functions removes and adding from the array.
// fruits.splice(4, 5,);
// fruits.splice(4, 0, "muus");

// 06 Slice() = it make selecting element from the existing array.
//const myfavor = fruits.slice(0, 4);

// 07 Concat() = creates a new array by merging existing array.

// const myhopes = fruits.slice(0, 2);
// const myhates = fruits.slice(4, 6);
// const iskuDaririd = myhates.concat(myhopes);

// console.log("myhopes fruits: ", myhopes);
// console.log("myhates fruits: ", myhates);
// console.log("iskuDaririd: ", iskuDaririd);

// let sum = [1,2,3,4,];
// let multi = [5,6,7,8];
// let dhamaan = sum.concat(multi);

// if statements
//===============
// if (3 < 6) {
//      console.log("waxaad ii soo saartaa way is leegyihiin");
// }

// if (5 >= 10) {
//     console.log("waxaad ii soo saartaa waa run");
// } else {
//     console.log("waxaad ii soo saartaa waa been");
// }

// if (3 === 4) {
//     console.log("isma leegka");
// } else if (3 < 2) {
//     console.log("waa been");
// } else {
//     console.log("condition kani waa khalad");
// }

// const Zaad = 100;
// const eDahab = 300;
// const keyboard = 20;
// const mouse = 20;

// console.log("lacagta Zaad + eDahab waa = ", Zaad + eDahab);
// console.log("lacagta Zaad + eDahab waa = ", keyboard + mouse);

//   if (Zaad >= keyboard + mouse) {
//     console.log("waxaad ku iibsan kartaa by Zaad");
// } else if (eDahab >= keyboard + mouse) {
//     console.log("waxaad ku iibsan kartaa by eDahab");
// } else if (Zaad + eDahab >= keyboard + mouse) {
//     console.log("iibsan kartaa by Zaad + eDahab");
// } else {
//     console.log("lacag kugu filan kuguma jirto");
// }

// challenge exercise
//====================

// const Zaad = 11.5;
// const eDahab = 11.5;
// const Evc = 11.5;
// const Golis = 11.5;

//console.log("Money Transffer :",Zaad + eDahab + Evc + Golis);

// items
// const keyboard = 15;
// const mouse = 20;
// const laptopFan = 10;

//console.log("Alaab :",keyboard + mouse + laptopFan);

// if (Zaad >= keyboard + mouse + laptopFan) {
//     console.log("kuma iibsan kartid by Zaad");
// } else if (eDahab >= keyboard + mouse + laptopFan) {
//     console.log("kuma iibsan kartid by eDahab");
// } else if (Evc >= keyboard + mouse + laptopFan) {
//     console.log("kuma iibsan kartid by Evc");
// } else if (Golis >= keyboard + mouse + laptopFan) {
//     console.log("kuma iibsan kartid by Golis");
// } else if (Zaad + eDahab >= keyboard + mouse + laptopFan) {
//     console.log("kuma iibsan kartid by Zaad + eDahab");
// } else if (Zaad + eDahab + Evc >= keyboard + mouse + laptopFan) {
//     console.log("kuma iibsan kartid by Zaad + eDahab + Evc");
// } else if (Zaad + eDahab + Evc + Golis >= keyboard + mouse + laptopFan) {
//     console.log("waad ku iibsan kartid by Zaad + eDahab + Evc + Golis");
// } else {
//     console.log("dhamaan midna kuma iibsan kartid");
// }
// waa ku cilis by make to function

// function counter (items) {
//    if (Zaad >= items) {
//       console.log("you can buy by Zaad");
//    } else if (eDahab >= items) {
//       console.log("you can buy by eDahab");
//    } else if (Evc >= items) {
//        console.log("you can buy by Evc");
//    } else if (Golis >= items) {
//        console.log("you can buy by Golis");
//    } else {
//        console.log("you don't have any money");
//    }
// }
// end chalenge one

// chalenge two
//=============

// Accounts
// const Zaad = 10;
// const eDahab = 20;
// const Evc = 5;
// const Golis = 6;
// const bank = 100;

// const Accounts = [Zaad + eDahab + Evc + Golis + bank];
// console.log("Accounts: ", Accounts);

// item
// const keyboard = 15;
// const mouse = 20;
// const laptopFan = 10;
// const macbookPro = 1500;

// const TotalItem = [keyboard + mouse + laptopFan + macbookPro];
// console.log("TotalItem: ", TotalItem);

// function broker (TotalItem) {
//      if (Accounts >= TotalItem) {
//          console.log("you can buy your All Account");
//      } else {
//          console.log("hmhmhmh: you can't buy your All Account");
//      }
// }

// Higher Order Functions
// =========================

// 01 Map
// 02 Filter
// 03 Reduce
// ------------

// 01 Map

// const numberHOF = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numberHOF.map(function (value) {
//     console.log("Number " + value + " * 10 = ", value * 10);
//     return value;
// });

// auto function example 2 map

// const ArrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const MultipleByNumber = (Number) => {
//     return ArrayNumbers.map((data) => data * Number);
// };

// console.log(ArrayNumbers);

// const lacag = [
//     {
//         name: "Zaad",
//         amount: 20000,
//     },
//     {
//         name: "Sahal",
//         amount: 30000,
//     }
// ];

// lacag.map((money) => { console.log("before:", money); });

// const FunBySubstraction = (price) => {
//    return lacag.map((Money) => {
//        return Money.amount - price;
//    });
// }

// const FunByNames = () => {
//     return lacag.map((magacaan) => {
//         return magacaan.name;
//     });
// }

// const Bank = lacag.map((value) => value.amount);

// console.log(Bank);

const classB = [
  {
    name: "maxamed ali",
    gender: "Male",
    grade: 100,
  },
  {
    name: "xamda maxamed",
    gender: "Female",
    grade: 90,
  },
  {
    name: "nasra jaamac",
    gender: "Female",
    grade: 50,
  },
  {
    name: "muhiim cali",
    gender: "Female",
    grade: 50,
  },
  {
    name: "nasri iid",
    gender: "Male",
    grade: 70,
  },
  {
    name: "suhayb mukhtaar",
    gender: "Male",
    grade: 80,
  },
  {
    name: "subeer maxamed",
    gender: "Male",
    grade: 80,
  },
  {
    name: "sakariye xasan",
    gender: "Male",
    grade: 60,
  },
  {
    name: "nimco faarax",
    gender: "Female",
    grade: 20,
  },
  {
    name: "xuseen muxumud",
    gender: "Male",
    grade: 30,
  },
];

// classB all name inside in?

// 01
// const classBNames = classB.map(function(student) {
//    return student.name;
// });

// 02
// const classBNames = classB.map((student) => {
//     return student.name;
// });
// console.log(classBNames);

// are same
//const classBNames = classB.map((student) => student.name); wxa kuu qabanaya arrow fun ka
// console.log(classBNames);

// 02 Filter
// =========

// const classMales = classB.filter((student) => {
//    return student.gender === "Male";
// });

// const classUnderfiveth = classB.filter(function(student) {
//     return student.grade === 100;
// });
//  are same
// const classUnderfiveth = classB.filter((student) => student.grade <= 50);
// console.log(classUnderfiveth);

// 03 Reduce
// ==========

// reduce = means sum or total...

// const lookthegrade = classB.reduce((grade, student) => {console.log(student.grade)},0);
// look the grade total intial

// const totalSum = classB.reduce((grade, student) => {
//    let total = grade + student.grade;
//    return total;
// }, 0);
// console.log(totalSum);

// const boys = classMales.reduce((grade, student) => {
//     return grade + student.grade;
// },0);
// console.log(boys);

// example three reduce

// const classGirls = classB.filter((student) => {
//     return student.gender === "Male";
// });
// console.log(classGirls);

// const totalgrade = classGirls.reduce((grade, student) => {
//     return grade + student.grade;
// },0);
// console.log(totalgrade);

const rakaab = [
  {
    name: "maxamed cali faraax",
    amount: 5,
    price: 10,
  },
  {
    name: "suhayb yaasiin cabdi",
    amount: 8,
    price: 10,
  },
  {
    name: "xamda nuur cali",
    amount: 10,
    price: 10,
  },
];

// 01 magacada rakaabka ?
// 02 rakaabka ay lactu ku dhiman tahay ?
// 03 rakaabka lacagta wada bixiyay ?
// 04 dhamaan lacagta ay bixiyiin rakaabka ?
// 05 dhamaan lacagta laga doonayay ?
// 06 dhamaan lacagta dhiman ?
// 07 rakaab walba lacgta ku dhiman iyo magaciisa ?
// ---------------------------------------------------

// console.log(rakaab);

// 01 magacada rakaabka ?
const namesofpassenger = rakaab.map((passenger) => {
  return passenger.name;
});
// console.log(namesofpassenger);

// 02 rakaabka ay lactu ku dhiman tahay ?
const passengerBelowamount = rakaab.filter((passenger) => {
  return passenger.amount < passenger.price;
});
// console.log(passengerBelowamount);

// 03 rakaabka lacagta wada bixiyay ?
const passengerfullamount = rakaab.filter((passenger) => {
  return passenger.amount === passenger.price;
});
// console.log(passengerfullamount);

// 04 dhamaan lacagta ay bixiyiin rakaabka ?
const totalamountpassenger = rakaab.reduce((amount, passenger) => {
  return amount + passenger.amount;
}, 0); // 23
// console.log(totalamountpassenger);

// 05 dhamaan lacagta laga doonayay ?
const totalpricepassenger = rakaab.reduce((price, passenger) => {
  return price + passenger.price;
}, 0); // 30
// console.log(totalpricepassenger);

// 06 dhamaan lacagta dhiman ?
//const lacagtamaqan = totalpricepassenger - totalamountpassenger;
// console.log(lacagtamaqan);
// are same

const lacagtamaqan = rakaab.reduce((amount, passenger) => {
  return amount - passenger.amount;
}, totalpricepassenger);
// console.log(lacagtamaqan);

// 07 rakaab walba lacgta ku dhiman iyo magaciisa ?
const detail = rakaab.map((passenger) => {
  return {
    fullname: passenger.name,
    lacagtaKuDhiman: passenger.price - passenger.amount,
    lacagtaAyBixiyiin: passenger.amount,
    lacagtaLooGaBaahnaa: passenger.price,
  };
});

// console.log(detail);
// -------------------------
// ---------------------------------
// Exercise 4
// 01 Sort ()
// 02 Reverse ()
// 03 JS Classes
// 04 DOM Munipulation // project
// ----------------------------------
