function makeInvoker(func) {
  var result;
  if (result) {
    return result;
  }
  const operators = Array.prototype.slice.call(arguments, 1, arguments.length)
  result = func.apply(this, operators);
  return result
}
function generator(...operators) {
  function invoke(...args) {
    let _this;
    operators.forEach(operator => {
      _this = operator.apply(this, args)
    });
    return _this;
  }

  return invoke
}
const insert = function (target, num) {
  target.count = num;
  return obj;
}
// 只运行一次
const increase = function (target) {
  ++target.count
  return target;
}

const decrease = function (target) {
  --target.count;
  return target;
}

let invoker = makeInvoker(generator, insert, increase, decrease, increase, increase, increase)
let invoker2 = makeInvoker(generator, insert, decrease, increase, increase)
let obj = {};
let count = 1;
let result = invoker(obj, count);
let result2 = invoker2(obj, count);
console.log(result)
console.log(result2 === result)
