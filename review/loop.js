// Loops in javascript
// ===================

// 1) For loop
// 2) For...of loop
// 3) For...in loop
// 4) ForEach loop = HOF
// 5) While loop
// 6) Do.While loop

// 1) For loop

// console.log("loops 1");
// console.log("loops 2");
// console.log("loops 3");
// console.log("loops 4");
// console.log("loops 5");

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

const names = ["subair", "xusen", "cali", "ismacil", "sahra", "nasra"];

const AllName = {
  name: "xasan",
  grade: 100,
  marks: "A",
};

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

// 2) For...of loop

// for (students of names) {
//   console.log(students);
// }

// 3) For...in loop

// for (std in names) {
//   console.log(names[std]);
// }

// 4) ForEach loop = HOF

AllName.forEach((students) => {
  console.log(students.name);
});
