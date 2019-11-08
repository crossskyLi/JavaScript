import { strict } from 'assert';

/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = function(s, leftStr) {
  if (s.length < 2) {
    return s;
  }
  const length = s.length;
  const remainder = length % 2;
  let halfLength = Math.floor(length / 2);
  let result = '';
  let _leftStr = leftStr || s.substr(0, halfLength);
  let indexOfLeft = s.indexOf(_leftStr);
  let rightStr = _leftStr.split('').reverse().join('')
  let lastIndexOfRight = s.lastIndexOf(rightStr);

  if (_leftStr.length) {
    if (lastIndexOfRight === indexOfLeft + _leftStr.length + 1) {
      result =  _leftStr + s.substr(indexOfLeft + _leftStr.length, 1) + rightStr;
    }else {
      longestPalindrome(s);
    }
  }
  return result;
  // while (leftStr.length > 1) {
  //   // 单数
  //   if (remainder) {
  //     debugger;
  //   } else {
  //   }
  // }
};

const result = longestPalindrome('abcba');
console.log(result)
