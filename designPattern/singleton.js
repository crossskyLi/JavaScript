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
  function invoker(...args) {
    let _this;
    operators.forEach(operator => {
      _this = operator.apply(this, args)
    });
    return _this;
  }

  return invoker
}
// 函数重载 todo
const insert = function (target, base) {
  target.count = base || 0;
  return target;
}
// 只运行一次
const increase = function (target, base, increaseNum) {
  target.count += (increaseNum || 1)
  return target;
}

const decrease = function (target, base, increaseNum, decreaseNum) {
  const _decreaseNum = decreaseNum || 1;
  target.count -= _decreaseNum

  return target;
}

function test() {
  let obj = {};
  let obj2 = {};
  let base = 1;
  let increaseNum = 3;
  let decreaseNum = 2;
  let invoker = makeInvoker(generator, insert, increase, decrease)
  let invoker2 = makeInvoker(generator, insert, decrease, increase, increase)
  let invoker3 = makeInvoker(generator, decrease)

  let result = invoker(obj, base, 0, decreaseNum);
  console.log(result)
  let result2 = invoker2(obj2, base, increaseNum, decreaseNum);
  let result3 = invoker3(obj, undefined, 3)
  console.log(result2, result2 === result)
  console.log(result3, result3 === result)
}
test();

