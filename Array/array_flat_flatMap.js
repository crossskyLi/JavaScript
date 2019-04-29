/**
 * 递归造数据
 * @param  {array} arr
 * @param  {number} length
 * @param  {number} deep
 */
function insertArray(arr, length, deep) {
  let len = length;
  if (!arr.length) {
    while (len--) {
      arr.push([])
    }
    if (!deep) {
      arr.forEach((item) => item[0] = Math.floor(Math.random() * 10))
    }
  } else {
    arr.forEach(element => {
      insertArray(element, len, deep)
    });
  }
}
/**
 * @param  {number} deep=0
 * @param  {number} length=0
 * @param  {array} result=[]
 */
export function createNestedArray(deep = 0, length = 0, result = []) {

  const resultArr = result || [];

  while (deep--) {
    insertArray(resultArr, length, deep);
  }

  return resultArr
}

/**
 * 
 * @param  {} targetArr
 * @param  {} deepth=0
 */
export function flat(targetArr, deepth = 0) {
  let flatArr = targetArr.flat(deepth);
  return flatArr;
}

export function flatMap(flatMapArr, cb) {
  function _callback(currentValue, index, array, _this) {

    return currentValue.join(',')
  }
  const callback = cb && typeof cb === "function" ? cb : _callback;
  let flatMapResult = flatMapArr.flatMap(callback);

  return flatMapResult;
}