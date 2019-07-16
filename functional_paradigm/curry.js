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


function _curry(fn, args) {
  var length = fn.length;  // 函数参数的长度

  // 闭包保存参数列表
  args = args || [];

  return function () {
    // 获取参数列表。
    var _args = args.slice(0);

    Array.prototype.push.apply(_args, Array.prototype.slice.call(arguments))

    if (_args.length < length) {
      // 如果传入的参数列表长度还没有超过函数定义时的参数长度，就 push 新的参数到参数列表中保存起来。

      // 自己调用自己，将保存的参数传递到下一个柯里化函数。
      return _curry.call(this, fn, _args);
    }
    else {
      // 如果传入的参数列表长度已经超过函数定义时的参数长度，就执行。
      return fn.apply(this, _args);
    }
  }
}


