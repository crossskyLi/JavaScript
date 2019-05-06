import './curry.js'
import { isNumber } from './compose.js';
console.log('isNumber(123)', isNumber(123))
console.log('isNumber(NaN)', isNumber(NaN))
console.log('isNumber(Infinity)', isNumber(Infinity))