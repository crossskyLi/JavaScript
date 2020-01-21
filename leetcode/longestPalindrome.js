/* 
给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"
 */
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (str) {
  const length = str.length;

  if (str.length <= 2) {
    if (str[0] === str[1]) {
      return str;
    }
    return str[0] ? str[0] : ''
  }

  function isTarget(str) {
    const length = str.length;
    const odd = length % 2 > 0;
    const mid = odd ? Math.ceil(length / 2) : length / 2;
    if (length === 2) {
      if (str[0] == str[1]) {
        return true;
      }
      return false;
    }
    let flag = false;
    let i = 0;
    if (odd) {
      while (i < mid) {
        if (str[i] !== str[length - i - 1]) {
          flag = false;
          return false;
        } else {
          flag = true;
        }
        i++
      }
      return flag;
    } else {
      while (i <= mid) {
        if (str[i] !== str[length - i - 1]) {
          flag = false;
          return false;
        } else {
          flag = true;
        }
        i++
      }
      return flag;
    }
  }

  let left = 0;
  let _str = ''
  for (let i = length; i > 1; i--) {
    left = 0;
    while (left + i <= length) {
      _str = str.substr(left, i);
      const flag = isTarget(_str);
      if (flag) {
        return _str;
      }
      left++
    }
  }
  return str[0]
};

let result;
// result = longestPalindrome("babad");
// console.log(result)
// result = longestPalindrome("bbad");
// console.log(result)
// result = longestPalindrome("aabbag");
// console.log(result)
// result = longestPalindrome("ac");
// console.log(result)
// result = longestPalindrome("abcba");
// console.log(result)

result = longestPalindrome("abcda");
console.log(result)
