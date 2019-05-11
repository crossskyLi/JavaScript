import './curry.js'
import { isNumber } from './compose.js';
import Container from './FunctionalContainer.js';

// console.log('isNumber(123)', isNumber(123)) // true
// console.log('isNumber(NaN)', isNumber(NaN)) // false
// console.log('isNumber(Infinity)', isNumber(Infinity)) // false

/* test Container */
(function (_this) {
  let arr = new Array(10).fill(0).map((i, index) => index + 1);
  /* test dispose */
  let squareArr = Container.of(arr).dispose((val) => {
    return val.map(i => i * i)
  })

  console.log('squareArr', squareArr)
  squareArr.dispose(function (arr) {
    console.log('squareArr dispose', arr)
  })


})()