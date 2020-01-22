
/* 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 1:

输入: 123
输出: 321

示例 2:

输入: -123
输出: -321

示例 3:

输入: 120
输出: 21
注意:

假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2(31次方),  2(31次方) − 1]。
请根据这个假设，如果反转后整数溢出那么就返回 0。
 */
/* 递归 */
var reverse = function (number, arr1) {
  let minus = number < 0;
  let _number = minus ? 0 - number : number;
  let arr = arr1 || [];
  number = _number / 10 > 0 ? Math.floor(_number / 10) : _number / 10;
  arr.push(_number % 10)
  if (number) {
    reverse(number, arr)
  }
  let result = minus ? 0 - parseInt(arr.join('')) : parseInt(arr.join(''));
  let isLegal = result > Math.pow(-2, 31) && result < Math.pow(2, 31) - 1
  return isLegal ? result : 0
}


/* while 循环 */
var reverse = function (number) {
  let minus = number < 0;
  let _number = minus ? 0 - number : number;
  let str = '';
  while (_number) {
    str += _number % 10
    _number = _number / 10 > 0 ? Math.floor(_number / 10) : _number / 10;
  }
  let result = minus ? 0 - parseInt(str) : parseInt(str);
  let isLegal = result > Math.pow(-2, 31) && result < Math.pow(2, 31) - 1
  return isLegal ? result : 0
}

// let result;
// result = reverse(123)
// console.log(result)
// result = reverse(320)
// console.log(result)
// result = reverse(-320)
// console.log(result)
// result = reverse(1534236469)
// console.log(result)
