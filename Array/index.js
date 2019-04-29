import {
  lengthOperate,
  funtionLoop
} from './lengthOperate.js';

import {
  flat,
  flatMap,
  createNestedArray
} from "./array_flat_flatMap.js"

// lengthOperate();
// funtionLoop();

const length = 3;
const deep = 3;

const targetArr = createNestedArray(deep, length);

const flatResult = flat(targetArr, deep);
console.log(flatResult, 'flatResult')

const flatMapResult = flatMap(targetArr);
console.log(flatMapResult, 'flatMapResult')
