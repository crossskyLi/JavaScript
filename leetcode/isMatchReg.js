/* 
给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

说明:

s 可能为空，且只包含从 a - z 的小写字母。
p 可能为空，且只包含从 a - z 的小写字母，以及字符.和 *。

示例 1:

输入:
s = "aa"
p = "a"
输出: false
解释: "a" 无法匹配 "aa" 整个字符串。

示例 2:

输入:
s = "aa"
p = "a*"
输出: true
解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。

示例 3:

输入:
s = "ab"
p = ".*"
输出: true
解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'. '）。

示例 4:

输入:
s = "aab"
p = "c*a*b"
输出: true
解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。

示例 5:

输入:
s = "mississippi"
p = "mis*is*p*."
输出: false 
*/

var isMatch = function (s, p) {
  const repeatChar = '*'
  const matchAll = '.'
  let sStep = 0;
  let pStep = 0;

  let lastMatchChar = '';
  let isMatched = true;
  while (pStep <= p.length) {
    if (p[pStep] && s[sStep] === undefined) {
      isMatched = false;
      break;
    }

    if (s[sStep] && p[pStep] === undefined) {
      isMatched = false;
      break;
    }

    if (p[pStep] !== repeatChar && p[pStep] !== matchAll) {
      lastMatchChar = p[pStep];
      if (p[pStep + 1] === repeatChar && p[pStep + 1]) {
        while (p[pStep + 1] === repeatChar && p[pStep + 1]) {
          if (p[pStep + 2]) {
            lastMatchChar = p[pStep + 2]
          } else {
            isMatched = true;
            break;
          }
          pStep += 2;
        }
        continue
      }
    }

    /* 两者不相等,并且 两个都不是 . 或者 * */
    if (p[pStep] !== s[sStep] && p[pStep + 1] !== repeatChar && p[pStep] !== repeatChar && p[pStep] !== matchAll) {
      isMatched = false;
      break;
    }
    /* 两者相等 */
    if (p[pStep] === s[sStep]) {
      pStep++
      sStep++
    } else {
      /* 匹配是 * */
      if (p[pStep] === repeatChar) {
        if (s[sStep] === lastMatchChar) {
          while (s[sStep] === lastMatchChar) {
            sStep++;
          }
        }
        if (p[pStep + 1] === lastMatchChar) {
          pStep++
        }
      }

      if (p[pStep] === matchAll && p[pStep + 1] === repeatChar && !p[pStep + 2]) {
        isMatched = true;
        break;
      }

      if (p[pStep] === matchAll && p[pStep + 1] === repeatChar && p[pStep + 2]) {

        while (s[sStep] && s[sStep] !== p[pStep + 2]) {
          sStep++;
        }
      }

      if (p[pStep] === matchAll && p[pStep + 1] !== repeatChar) {
        sStep++;
      }
      pStep++
    }
  }
  console.log(isMatched)
  return isMatched
}

let s, p
// s = "mississippi"
// p = "mis*is*ip"
// isMatch(s, p)

// s = "aa"
// p = "a"
// isMatch(s, p)

// s = "aab"
// p = "c*a*b"
// isMatch(s, p)

// s = "mississippi"
// p = "mis*is*ip*."
// isMatch(s, p)

// s = "ab"
// p = ".*c"
// isMatch(s, p)

// s = "aaa"
// p = "a*a"
// isMatch(s, p)

s = "aaa"
p = "ab*a*c*a"
isMatch(s, p)
