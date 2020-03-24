function flatAndSort(arr) {
  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr
    }
    let left = [];
    let right = [];
    let midIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(midIndex, 1)[0];;
    for (let i = 0; i < arr.length; i++) {
      let num = Number(arr[i])
      if (num < pivot) {
        left.push(num)
      } else {
        right.push(num)
      }
    }
    return quickSort(left).concat([Number(pivot)], quickSort(right))
  }
  /* flat 的变形需要有个 map 存起来 */
  function walk(arr) {
    let resultMap = {};
    while (arr.length) {
      let num = arr.shift();
      if (Array.isArray(num)) {
        arr = arr.concat(num)
      } else {
        resultMap[num] = true;
      }
    }
    return resultMap
  }
  let resultMap = walk(arr)
  let result = quickSort(Object.keys(resultMap))
  return result
}

let arr = [[2, 34, 5, 2, 1], 5, 5, 6, 9, [[21], [22, 11, 22, 6, 4, 5]]]
let result = flatAndSort(arr)

/* flat */
function flat(arr) {
  let result = []
  while (arr.length) {
    let num = arr.shift();
    if (Array.isArray(num)) {
      arr = arr.concat(num)
    } else {
      result.push(num)
    }
  }
  return result
}