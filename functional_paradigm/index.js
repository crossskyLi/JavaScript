import './curry.js'
import { isNumber } from './compose.js';
console.log('isNumber(123)', isNumber(123)) // true
console.log('isNumber(NaN)', isNumber(NaN)) // false
console.log('isNumber(Infinity)', isNumber(Infinity)) // false