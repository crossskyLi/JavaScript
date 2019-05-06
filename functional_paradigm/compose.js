const typeofNumber = function (num) {
  if (typeof num === "number") {
    return true
  } else {
    return false;
  }
}
const compose = function (...args) {

  if (!args.length || args.filter(func => typeof func !== 'function').length) {
    console.error(args.filter(func => typeof func !== 'function'))
    throw new Error('the arguments is illegal');
  }
  return function (...targetArgs) {
    let index = args.length - 1;
    let result = null;
    while (index >= 0) {
      if (index === args.length - 1) {
        result = args[index](...targetArgs);
      } else {
        result = args[index](result);
      }
      index -= 1;
    };
    return result;
  }
}

const check = function (tag) {
  return function (params) {
    console.log(tag, params)
    return params;
  }
}

const _isFinite = function (num) {
  const flag = isFinite(num);
  return flag ? num : false;
}
export const isNumber = compose(typeofNumber, check('checkNum'), _isFinite)