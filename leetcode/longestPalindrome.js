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
/* 暴力解法 */
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

// result = longestPalindrome("abcda");
// console.log(result)

/* 中心扩展 */
var longestPalindrome = function (str) {
  let result = str[0] ? str[0] : "";
  let length = str.length;
  let left;
  let right;
  let max = 0;
  let samestr;

  for (let i = 0; i < length; i++) {
    left = i - 1;
    right = i + 1;
    max = result.length;

    /* 相同字符,右移位置 */
    while (str[i] === str[right]) {
      samestr = str.substr(i, right - i + 1);
      right += 1
      if (max < samestr.length) {
        result = samestr;
        max = result.length;
      }
    }

    let flag = str[left] === str[right];
    if (!flag) {
      continue;
    }

    while (flag && left > 0 && right < str.length) {
      let nextLeft = left - 1;
      let nextRight = right + 1;
      flag = str[nextLeft] === str[nextRight];
      if (!flag) {
        break;
      }
      left -= 1;
      right += 1;
    }
    let length = right - left + 1;
    if (length > max) {
      result = str.substring(left, right + 1)
    }
  }
  return result;
}

// result = longestPalindrome("babada");
// console.log(result)
// result = longestPalindrome("bbad");
// console.log(result)
// result = longestPalindrome("aabbag");
// console.log(result)
// result = longestPalindrome("ac");
// console.log(result)
// result = longestPalindrome("abcba");
// console.log(result)
// result = longestPalindrome("cbbd");
// console.log(result)
// result = longestPalindrome("cbbc");
// console.log(result)
// result = longestPalindrome("ccc");
// console.log(result)
// result = longestPalindrome("ddcfff");
// console.log(result)

// result = longestPalindrome("aaaabcbbbbb");
// console.log(result)


function preProcess(s) {
  let n = s.length;
  if (n == 0) {
    return "^$";
  }
  let ret = "^";
  for (let i = 0; i < n; i++) {
    ret += ("#" + s[i]);
  }
  ret += "#$";
  return ret;
}

// 马拉车算法
function longestPalindrome2(s) {
  let T = preProcess(s);
  let n = T.length;
  let P = new Array(n).fill(0);
  let C = 0, R = 0;

  for (let i = 1; i < n - 1; i++) {
    let i_mirror = 2 * C - i;
    if (R > i) {
      P[i] = Math.min(R - i, P[i_mirror]);// 防止超出 R
    } else {
      P[i] = 0;// 等于 R 的情况
    }

    // 碰到之前讲的三种情况时候，需要利用中心扩展法
    while (T.charAt(i + 1 + P[i]) == T.charAt(i - 1 - P[i])) {
      P[i]++;
    }

    // 判断是否需要更新 R
    if (i + P[i] > R) {
      C = i;
      R = i + P[i];
    }
  }

  // 找出 P 的最大值
  let maxLen = 0;
  let centerIndex = 0;
  for (let i = 1; i < n - 1; i++) {
    if (P[i] > maxLen) {
      maxLen = P[i];
      centerIndex = i;
    }
  }
  let start = (centerIndex - maxLen) / 2; //最开始讲的求原字符串下标
  return s.substring(start, start + maxLen);
}

result = longestPalindrome2("babada");
console.log(result)
// result = longestPalindrome2("bbad");
// console.log(result)
// result = longestPalindrome2("aabbag");
// console.log(result)
// result = longestPalindrome2("ac");
// console.log(result)
// result = longestPalindrome2("abcba");
// console.log(result)
// result = longestPalindrome2("cbbd");
// console.log(result)
// result = longestPalindrome2("cbbc");
// console.log(result)
// result = longestPalindrome2("ccc");
// console.log(result)
// result = longestPalindrome2("ddcfff");
// console.log(result)

// result = longestPalindrome2("aaaabcbbbbb");
// console.log(result)
