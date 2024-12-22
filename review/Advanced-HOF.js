// advanced higher order function 
// ==============================

// 1) callback
// ===========

const back = (n) => {
  return n ** 2;
}

console.log(back(2));

const cube = (back, n) => {
   return back(n) * n;
}

console.log(cube(back, 3));
