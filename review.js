// ES5 

// function sayHello (name) {
//     console.log("Hello " + name + " How are you ? ");
// }


// function sayHello(name) {
//     return "Hello " + name;
// }

// const jamal = sayHello("waa ina kaygi");

// function 3 types are
// string
// number
// variable

// function multiby4(value) {
//     return value * 4;
// }

// function Hello(name) {
//     return "iska waran " + name;
// }

// const mo = " subeer maxamed ali xarbi";





// ES6

// const namearr = () => {
//     console.log("you start arrow function ");
// }

// namearr();

// celsius to fahrenheit
// radius of circle
// circumference of circle


// °F = °C×(9/5)+32

// const celTofah = (cel) => {
//     return cel * (9 / 5) + 32;
// }

// r = c / (2 * π)

// const radiOFcir = (c) => {
//     return c / (2 * 3.14);
// }



// const car = {
//     model: "white",
//     speed: 180,
//     drive: function () {
//         console.log("the car is driving");
//     },
//     stop: function () {
//         console.log("the car is stoping");
//     },

// }

// const newArr = ["Apple", "banana", function () {
//     console.log("this is array function: "); ku soo muujinaysaan = newArr[2]()
// }];

// const newArr1 = ["Apple", "banana", function () {
//     return car;  ku soo muujinaysaan = newArr[2]().stop()
// }];
// console.log(newArr);


// const fruit = ["banana", "Apple", "watermelon", "grapes", "guava", "papaya"];

// fruit.splice(3, 1, "fff");

// console.log(fruit);

// if statements
// =============

// if (5 === 5) {
//     console.log("waa been");
// } else if (3 > 3) {
//     console.log("waa runtaa ");
// } else {
//     console.log("laba condition way khaldan yihiin");
// }

// lacag aan haystay
// =================
// const zaad = 100;
// const eDahab = 250;
// console.log("waa lacag aan haystay: ", zaad + eDahab);

// // Alaab
// // =====
// const mouse = 200;
// const keyboard = 205;
// const hardDisk = 21;
// console.log("waa Alaabtaydi: ", mouse + keyboard + hardDisk);

// if (zaad >= mouse + keyboard + hardDisk) {
//     console.log("lacag kugu filan kuguma jirto by zaad ");
// } else if (eDahab >= mouse + keyboard + hardDisk) {
//     console.log("lacag taadu way kugu filan tahay by eDahab");
// } else {
//     console.log("zaada IYO eDahab taada kuma filna labaduba");
// }

// lacag aan haystay
// =================
// const zaad = 400;
// const eDahab = 650;
// const premierBank = 5000;

// console.log("accounts :", zaad + eDahab + premierBank);

// function saler(item) {
//     if (zaad >= item) {
//         console.log("you can buy by zaad");
//     } else if (eDahab >= item) {
//         console.log("you can buy by eDahab");
//     } else if (premierBank >= item) {
//         console.log("you can buy by premierBank");
//     } else if (zaad + eDahab + premierBank >= item) {
//         console.log("sum of my accounts");
//     } else {
//         console.log("you can't buy all accounts");
//     }
// }

// HOF
// ====
// map
// filter
// reduce

// function numby5(value) {
//     return value * 5
// }

// const likeloop = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// likeloop.map(function (value) {
//     console.log("number " + value + " * 5 =", value * 5);
//     return value;
// });

// auto func by map multiple
// =====================

// const multiple = (number) => {
//     return likeloop.map((value) => value * number);
// }

// const lacag = [
//     {
//         name: "zaad",
//         amount: 80000
//     },
//     {
//         name: "sahal",
//         amount: 60000
//     },
// ];

// lacag.map((money) => { console.log(money); });

// const subsbyMoney = (price) => {
//    return lacag.map((money) => {
//       return money.amount - price;
//    });
// }








