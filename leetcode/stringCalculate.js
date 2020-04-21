// 给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。

// 表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。

// 链接：https://leetcode-cn.com/problems/calculator-lcci

// 输入: "3+2*2"
// 输出: 7

// 示例 2:

// 输入: " 3/2 "
// 输出: 1

// 示例 3:

// 输入: " 3+5 / 2 "
// 输出: 5


/*  */
function calc(str) {
  const map = {
    "+": 1,
    "-": 2,
    "*": 3,
    "/": 4,
  }
  const reg = /\d+|[+\-*/]/g
  let i = 0;
  let arr = str.match(reg);

  let restArr = []
  for (let i = 0; i < arr.length; i++) {
    if (!map[arr[i]] || map[arr[i]] < 3) {
      restArr.push(arr[i]);
      // 非乘除 入栈
    }

    if (map[arr[i]] > 2) {
      let restArrLastIndex = restArr.length - 1
      let numb = restArr[restArrLastIndex];
      if (map[arr[i]] === 3) {
        restArr[restArrLastIndex] = numb * arr[i + 1];
      } else {
        restArr[restArrLastIndex] = Math.floor(numb / arr[i + 1]);
      }
      i = i + 1;
      if (i === arr.length) {
        break;
      }
    }
  }
  let result = restArr[0];
  for (let i = 1, length = restArr.length; i < length; i++) {
    if (map[restArr[i]] === 1) {
      result = parseInt(result) + parseInt(restArr[i + 1]);
    } else {
      result -= restArr[i + 1];
    }
    i = i + 1;
  }
  return result;
}
let str = "3+2*2"
calc(str)