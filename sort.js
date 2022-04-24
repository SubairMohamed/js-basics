// Sort HOF
// ========

const even = [10, 40, 100, 30, 50, 200, 400,];

even.sort((a, b) => {
   return b.even - a.even;
});

console.log(even);
