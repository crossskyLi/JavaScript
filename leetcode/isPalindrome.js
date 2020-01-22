/* 
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

示例 1:

输入: 121
输出: true
示例 2:

输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
示例 3:

输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
 */
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  if (x % 10 === 0) {
    return false
  }

  const str = x.toString();

  if (x > 10 && x < 100) {
    if (str[0] === str[1]) {
      return true
    }
  }

  let flag = true;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      flag = false;
      break;
    }
  }
  return flag;
};


var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  if (x < 10) {
    return true;
  }

  if (x % 10 === 0) {
    return false
  }

  const str = x.toString();

  if (x > 10 && x < 100) {
    if (str[0] === str[1]) {
      return true
    }
  }

  const length = str.length;
  let flag = true;
  let i = Math.ceil(str.length / 2)
  while (i > 0) {
    if (str[i - 1] !== str[length - i]) {
      flag = false;
      break
    }
    i--
  }
  return flag;
};

var isPalindrome = function (x) {
  //思考：这里大家可以思考一下，为什么末尾为 0 就可以直接返回 false
  if (x < 0 || (x % 10 == 0 && x != 0)) return false;
  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + x % 10;
    x /= 10;
  }
  return x == revertedNumber || x == revertedNumber / 10;
}

// let flag;
// flag = isPalindrome(12121)
// console.log(flag)

// flag = isPalindrome(1211)
// console.log(flag)

// flag = isPalindrome(101)
// console.log(flag)