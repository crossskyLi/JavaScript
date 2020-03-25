// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

// 1(!@#)  2(abc) 3(def) 
// 4(ghi)  5(jkl) 6(mno)
// 7(pqrs) 8(tuv) 9(wxyz)

// 示例:
// 输入："23"
// 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// 链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number

var letterCombinations = function (digits) {
  const maps = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz"
  }
  const res = [];
  for (let num of digits) {
    let w = maps[num];
    if (res.length > 0) {
      let tmp = [];
      for (let i = 0; i < res.length; i++) {
        let wl = w.length;
        for (let j = 1; j < wl; j++) {
          tmp.push(res[i] + w[j]);
        }
        // 在原来的数组已有元素上加上第一个字符,这样子就不需要改变原来数组的长度省了一次计算
        res[i] += w[0];
      }
      res.push(...tmp)
    } else {
      res.push(...w);
    }
  }
  return res;

};

let result = letterCombinations('323')