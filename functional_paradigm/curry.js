import curry from "lodash/curry";


export const curryAddDemo = (x) => {
  return function (y) {
    return x + y;
  }
}
const increment = curryAddDemo(1);
const addTen = curryAddDemo(10);
console.log(increment(2)) //3
console.log(addTen(2)) //12


// _______________________________

function add(a, b) {
  return a + b
}
let curryFunc = curry(add);
let addTwo = curryFunc(2)
console.log(addTwo(4));


