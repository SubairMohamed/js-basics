// Template Literal
// ================

// var magac = "faarax";

// var magacKale = "magacaygu waa " + magac+  " wuxu jiraa 20 sano";

// var magacCusub = `waa kuma  ${magac} waxa iga yar laba caruura`;

// console.log(magacCusub);
// console.log(magacKale);
// -----------------------------------------------------------------------

// Type Conversion or Coersion
// ===========================

// String
// let tiro = String(20);
// // tiro = String(tiro);

// let nooc = typeof tiro;
// console.log(tiro);

// Number
// Number ("10") + Number ("2") waa isku mid  +"10" +  +"2"
// Number ("10") + "2" waa isku mid +"10" + 2
// Number(true) waa isku mid +true

// let tiro = +false + 4;
// let nooc = typeof tiro;
// console.log(`${tiro}, ${nooc}`);

// Data => Boolean
// ==============

// "", '', false, 0, -0, null, undefined, NaN => false

// let tiro = Boolean ();
// let nooc = typeof tiro;
// console.log(`${tiro}, ${nooc}`);
// if () console.log("qeemo ayaa ku dhex jira");
// ---------------------------------------------------------

// Array
// =====
// you can use two way

// let languages = new Array("somali", "english", "Arabic");
// let language = ["somali", "english", "Arabic", "Amharic"];

// laba siyoon ayd array waxa ugu dari kartaa?
// 01
// let language = ["somali", "english", "Arabic", "Amharic"];
// language[4] = "french";
// console.log(language);
// 02 Array Methods
// -----------------------------------------------------------------

// Objects
// =======
// you can use two way
// 01
// let persons = new Object();
// persons.name = "subeer";
// persons.Age = 21;

// 02
// let details = {

//     name: "faarax",
//     age: 25,
//     surname: "cabdi",
//     shaqaale: true,
// };
// // details.shaqaale = true;
// console.log(details.surname);

// array of objects

// let couserses = [

//     {
//         couser: "HTML",
//         price: 5,
//     },
//     {
//         couser: "css",
//         price: 200,
//         'arday ma yahay': true,
//     },

// ];
// console.log(couserses[1].price,['arday ma yahay']);
// --------------------------------------------------------------------------

// Object Destructuring 
// ====================

// Destructuring = it has two types , array Destructuring , object Destructuring .

// array Destructuring

// let colors = ["red", "blue", "green", "yellow", "gray"];

// let red = colors [0];
// let blue = colors [1];
// let green = colors [2];
// let yellow =  colors [3];
// console.log(yellow);

// Destructuring way 
// ,, ka butitaanka, inta hadhay sida loo baadho rest[2]
// let [red, blue,...rest] = colors;
// console.log(rest[2]);

// object Destructuring

// const employee = {

//     firstName: "faarax",
//     phone: 0634476,
//     Address: "Hergarsia",
//     department: {
//         manager: "top level",
//         social: "HR",
//     },
// };

// let {Address ,department:{manager,social}, firstName:name} = employee;

// console.log(Address);

