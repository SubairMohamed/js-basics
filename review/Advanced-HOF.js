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

// 2) returning function 

const higherOrder = n => {
    const doSomething = m => {
        const doWhatever = t => {
            return 2 * n + 3 * m + t ;
        }
       return doWhatever;
    }
    return doSomething;
}

console.log(higherOrder(2)(3)(2));
