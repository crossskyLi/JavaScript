// 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。

const { toUpper } = require("lodash");

// 函数 myAtoi(string s) 的算法如下：

// 读入字符串并丢弃无用的前导空格
// 检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。
// 如果两者都不存在，则假定结果为正。
// 读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
// 将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。
// 如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
// 如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。
// 具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
// 返回整数作为最终结果。
// 注意：

// 本题中的空白字符只包括空格字符 ' ' 。
function myAtoi(str) {
  //
  let res = str.trim().match(/^(-|\+)?\d+/g);
  // 先跟正则匹配，匹配到的结果是一个数组，数组的第一项就是匹配到的结果
  // 如果匹配不到，就返回null
  // 如果匹配到了，就返回匹配到的结果
  // 如果匹配到的结果是一个空数组，那么也返回null
  // 比较两个数的大小，如果第一个数比第二个数大，就返回第一个数，否则返回第二个数
  // 负数的最小数是-2的31次方，正数的最大数是2的31次方-1
  // 通过这个比较，就可以把超出范围的数给排除掉
  return res
    ? Math.max(Math.min(Number(res[0]), Math.pow(2, 31) - 1), Math.pow(-2, 31))
    : 0;
}

// 给你一个整数 x ，如果 x 是一个回文整数，返回 true ；否则，返回 false 。

// 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。

// 例如，121 是回文，而 123 不是。

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let str = x.toString();
  let str1 = str.split("").reverse().join("");
  if (str1 == str) {
    return true;
  } else {
    return false;
  }
};

// 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

// '.' 匹配任意单个字符
// '*' 匹配零个或多个前面的那一个元素
// 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
  // 这个函数检查字符串s中的字符是否与字符串p中给定的索引i和j处的字符匹配
  function matches(s, p, i, j) {
    if (i === 0) {
      return false;
    }
    if (p[j - 1] === ".") {
      return true;
    }
    return s[i - 1] === p[j - 1];
  }

  // 创建一个二维布尔数组来存储子问题的结果
  const dp = new Array(s.length + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(p.length + 1).fill(false);
  }

  // 空字符串与空模式匹配
  dp[0][0] = true;

  // 填充dp数组的第一行
  // 如果模式在索引j-1处有一个*，则如果没有*的模式与字符串匹配，则它与空字符串匹配
  for (let j = 1; j <= p.length; j++) {
    if (p[j - 1] === "*") {
      dp[0][j] = dp[0][j - 2];
    }
  }

  // 填充dp数组的其余部分
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === "*") {
        // 如果模式在索引j-1处有一个*，则如果没有*的模式与字符串匹配，则它与空字符串匹配
        // 或者如果带有*的模式与去掉最后一个字符的字符串匹配，则它与字符串匹配
        dp[i][j] = dp[i][j - 2];
        if (matches(s, p, i, j - 1)) {
          dp[i][j] = dp[i][j] || dp[i - 1][j];
        }
      } else {
        // 如果模式没有*，则如果当前字符匹配并且其余字符串匹配，则它匹配
        if (matches(s, p, i, j)) {
          dp[i][j] = dp[i - 1][j - 1];
        }
      }
    }
  }

  // 返回整个字符串和模式的子问题结果
  return dp[s.length][p.length];
};

// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。

// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

// 返回容器可以储存的最大水量。

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const len = height.length;
  let max = 0;
  let i = 0;
  let j = len - 1;
  while (i < j) {
    const area = Math.min(height[i], height[j]) * (j - i);
    max = Math.max(max, area);
    if (height[i] <= height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
};

// 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。

// 字符          数值
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// 例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

// 通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

// I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
// X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。
// C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
// 给你一个整数，将其转为罗马数字。

function intToRoman(num) {
  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const reps = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];
  let res = "";
  for (let i = 0; i < 13; i++) {
    while (num >= values[i]) {
      num -= values[i];
      res += reps[i];
    }
  }
  return res;
}

// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。
function longestCommonPrefix(strs) {
  if (!strs.length) return "";
  let res = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    for (; j < res.length && j < strs[i].length; j++) {
      if (res[j] !== strs[i][j]) break;
    }
    res = res.substr(0, j);
    if (!res) return "";
  }
  return res;
}

// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
// 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

// 你返回所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  const res = []; // 存储结果的数组
  nums.sort((a, b) => a - b); // 将数组排序, 从小到大
  for (let i = 0; i < nums.length - 2; i++) {
    // 遍历数组
    // 必须比0小，否则三数之和一定大于0
    if (nums[i] > 0) break; // 如果当前数大于0，跳出循环
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 如果当前数和前一个数相同，跳过当前循环
    let l = i + 1; // 左指针
    let r = nums.length - 1; // 右指针
    while (l < r) {
      // 双指针遍历
      const sum = nums[i] + nums[l] + nums[r]; // 三数之和
      if (sum === 0) {
        // 如果三数之和为0
        res.push([nums[i], nums[l], nums[r]]); // 将三个数加入结果数组
        while (l < r && nums[l] === nums[l + 1]) l++; // 跳过重复的左指针
        while (l < r && nums[r] === nums[r - 1]) r--; // 跳过重复的右指针
        l++; // 左指针右移
        r--; // 右指针左移
      } else if (sum < 0) {
        // 如果三数之和小于0
        l++; // 左指针右移
      } else {
        // 如果三数之和大于0
        r--; // 右指针左移
      }
    }
  }
  return res; // 返回结果数组
}

//给你一个长度为 n 的整数数组 nums 和 一个目标值 target。请你从 nums 中选出三个整数，使它们的和与 target 最接近。

// 返回这三个数的和。

// 假定每组输入只存在恰好一个解。

// 给定一个长度为 n 的整数数组 nums 和一个目标值 target。
// 请你从 nums 中选出三个整数，使它们的和与 target 最接近。
// 返回这三个数的和。
// 假定每组输入只存在恰好一个答案。

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// now ->           <-
//  1  2 3 4 5 6 7 8 9
function threeSumClosest(nums, target) {
  nums.sort((a, b) => a - b); // 将数组排序
  let res = nums[0] + nums[1] + nums[2]; // 初始化结果
  for (let i = 0; i < nums.length; i++) {
    // 遍历数组
    let l = i + 1; // 左指针
    let r = nums.length - 1; // 右指针
    while (l < r) {
      // 双指针遍历
      const sum = nums[i] + nums[l] + nums[r]; // 三数之和
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        // 如果当前三数之和与目标值的差小于结果与目标值的差
        res = sum; // 更新结果
      }
      if (sum > target) {
        // 如果三数之和大于目标值
        r--; // 右指针左移
      } else if (sum < target) {
        // 如果三数之和小于目标值
        l++; // 左指针右移
      } else {
        // 如果三数之和等于目标值
        return res; // 直接返回结果
      }
    }
  }
  return res; // 返回结果
}

//给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
// 这里是老式的手机九宫格按键，映射关系如下：
// 2 -> abc
// 3 -> def
// 4 -> ghi
// 5 -> jkl
// 6 -> mno
// 7 -> pqrs
// 8 -> tuv
// 9 -> wxyz
function letterCombinations(digits) {
  if (!digits) return [];
  const res = []; // 结果数组
  const map = {
    // 映射表
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  // 深度优先搜索（Depth-First-Search）
  const dfs = (curStr, i) => {
    // curStr是当前字符串，i是扫描的指针
    if (i > digits.length - 1) {
      // 指针越界，递归的出口
      res.push(curStr); // 将解推入res
      return; // 结束当前递归分支
    }
    const letters = map[digits[i]]; // 当前数字对应的字母
    for (const l of letters) {
      // 一个字母是一个选择，对应一个递归分支
      dfs(curStr + l, i + 1); // 生成新字符串，i指针右移，递归
    }
  };

  dfs("", 0); // 递归的入口，初始字符串为''，指针为0
  return res;
}

// 题目描述
// 已知rand5可以等概率随机获得[0,1,2,3,4]中的一个数字。
// 要求用rand5来实现一个rand7，使得rand7可以等概率获得[0,1,2,3,4,5,6]中的一个数字。

// 解题思路

function rand7() {
  // 为什么这样子概率是相等的？
  // 5 * rand5() + rand5() 可以等概率的生成[0,24]范围内的随机数
  // 5 * rand5() 是什么意思
  // 5 * rand5() 可以等概率的生成[0,20]范围内的随机数
  //  rand5()可以等概率的生成[0,4]范围内的随机数
  let num = 5 * rand5() + rand5(); // 生成[0,24]范围内的随机数
  // 为什么需要随机数小于20
  // 生成[0,24]范围内的随机数，只需要生成[0,20]范围内的随机数即可
  while (num > 20) {
    // 如果生成的随机数大于20，就重新生成
    num = 5 * rand5() + rand5();
  }
  return num % 7; // 对7取余，得到[0,6]范围内的随机数
}

// 给你一个下标从 0 开始的正整数数组 nums 。请你找出并统计满足下述条件的三元组 (i, j, k) 的数目：

// 0 <= i < j < k < nums.length
// nums[i]、nums[j] 和 nums[k] 两两不同 。
// 换句话说：nums[i] != nums[j]、nums[i] != nums[k] 且 nums[j] != nums[k] 。
// 返回满足上述条件三元组的数目。

/**
 * @param {number[]} nums
 * @return {number}
 */

var unequalTriplets = function (nums) {
  let len = nums.length;
  let res = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] !== nums[j] && nums[i] !== nums[k] && nums[j] !== nums[k]) {
          res++;
        }
      }
    }
  }
  return res;
};

// 给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

// 请你将两个数相加，并以相同形式返回一个表示和的链表。

// 你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/add-two-numbers
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

// 输入：l1 = [2,4,3], l2 = [5,6,4]
// 输出：[7,0,8]
// 解释：342 + 465 = 807

function ListNode(val) {
  this.val = val;
  this.next = null;
}
function addTwoNumbers(l1, l2) {
  let head = null,
    tail = null;
  let carry = 0;
  while (l1 || l2) {
    const n1 = l1 ? l1.val : 0;
    const n2 = l2 ? l2.val : 0;
    const sum = n1 + n2 + carry;
    if (!head) {
      head = tail = new ListNode(sum % 10);
    } else {
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
    }
    carry = Math.floor(sum / 10);
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next;
    }
  }
  if (carry > 0) {
    tail.next = new ListNode(carry);
  }
  return head;
}

// 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。
// 请你找出并返回满足下述全部条件且不重复的四元组 [nums[a], nums[b], nums[c], nums[d]]
// （若两个四元组元素一一对应，则认为两个四元组重复）：

// 0 <= a, b, c, d < n
// a、b、c 和 d 互不相同
// nums[a] + nums[b] + nums[c] + nums[d] == target
// 你可以按 任意顺序 返回答案 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/4sum
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

function fourSum(nums, target) {
  let result = [];
  if (nums == null || nums.length < 4) {
    return result;
  }
  nums.sort((a, b) => a - b);
  let length = nums.length;
  for (let k = 0; k < length - 3; k++) {
    if (k > 0 && nums[k] == nums[k - 1]) {
      continue;
    }
    let min1 = nums[k] + nums[k + 1] + nums[k + 2] + nums[k + 3];
    if (min1 > target) {
      break;
    }
    let max1 = nums[k] + nums[length - 1] + nums[length - 2] + nums[length - 3];
    if (max1 < target) {
      continue;
    }
    for (let i = k + 1; i < length - 2; i++) {
      if (i > k + 1 && nums[i] == nums[i - 1]) {
        continue;
      }
      let j = i + 1;
      let h = length - 1;
      let min = nums[k] + nums[i] + nums[j] + nums[j + 1];
      if (min > target) {
        continue;
      }
      let max = nums[k] + nums[i] + nums[h] + nums[h - 1];
      if (max < target) {
        continue;
      }
      while (j < h) {
        let curr = nums[k] + nums[i] + nums[j] + nums[h];
        if (curr == target) {
          result.push([nums[k], nums[i], nums[j], nums[h]]);
          j++;
          h--;
          while (j < h && nums[j] == nums[j - 1]) {
            j++;
          }
          while (j < h && nums[h] == nums[h + 1]) {
            h--;
          }
        } else if (curr > target) {
          h--;
        } else {
          j++;
        }
      }
    }
  }
  return result;
}

// 给你一个长度为 n 、下标从 1 开始的二进制字符串，所有位最开始都是 0 。
// 我们会按步翻转该二进制字符串的所有位（即，将 0 变为 1）。

// 给你一个下标从 1 开始的整数数组 flips ，其中 flips[i] 表示对应下标 i 的位将会在第 i 步翻转。

// 二进制字符串 前缀一致 需满足：在第 i 步之后，在 闭 区间 [1, i] 内的所有位都是 1 ，而其他位都是 0 。

// 返回二进制字符串在翻转过程中 前缀一致 的次数。

// 示例 1：

// 输入：flips = [3,2,4,1,5]
// 输出：2
// 解释：二进制字符串最开始是 "00000" 。
// 执行第 1 步：字符串变为 "00100" ，不属于前缀一致的情况。
// 执行第 2 步：字符串变为 "01100" ，不属于前缀一致的情况。
// 执行第 3 步：字符串变为 "01110" ，不属于前缀一致的情况。
// 执行第 4 步：字符串变为 "11110" ，属于前缀一致的情况。
// 执行第 5 步：字符串变为 "11111" ，属于前缀一致的情况。
// 在翻转过程中，前缀一致的次数为 2 ，所以返回 2 。
// 示例 2：

// 输入：flips = [4,1,2,3]
// 输出：1
// 解释：二进制字符串最开始是 "0000" 。
// 执行第 1 步：字符串变为 "0001" ，不属于前缀一致的情况。
// 执行第 2 步：字符串变为 "1001" ，不属于前缀一致的情况。
// 执行第 3 步：字符串变为 "1101" ，不属于前缀一致的情况。
// 执行第 4 步：字符串变为 "1111" ，属于前缀一致的情况。
// 在翻转过程中，前缀一致的次数为 1 ，所以返回 1 。
//

// 提示：

// n == flips.length
// 1 <= n <= 5 * 104
// flips 是范围 [1, n] 中所有整数构成的一个排列

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/number-of-times-binary-string-is-prefix-aligned
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {number[]} flips
 * @return {number}
 */

/**
 * 计算在翻转过程中，二进制字符串前缀一致的次数。
 * @param {number[]} flips - 一个整数数组，表示每次翻转的位置。
 * @return {number} - 在翻转过程中，二进制字符串前缀一致的次数。
 */
var numTimesAllBlue = function (flips) {
  let max = 0; // 记录当前最大值
  let result = 0; // 记录前缀一致的次数
  for (let i = 0; i < flips.length; i++) {
    max = Math.max(max, flips[i]); // 更新最大值
    if (max == i + 1) {
      // 如果最大值等于当前位置加一，说明前缀一致
      result++; // 前缀一致次数加一
    }
  }
  return result; // 返回前缀一致次数
};

// 给你一个字符串 s，请你对 s 的子串进行检测。

// 每次检测，待检子串都可以表示为 queries[i] = [left, right, k]。
// 我们可以 重新排列 子串 s[left], ..., s[right]，并从中选择 最多 k 项替换成任何小写英文字母。

// 如果在上述检测过程中，子串可以变成回文形式的字符串，那么检测结果为 true，否则结果为 false。

// 返回答案数组 answer[]，其中 answer[i] 是第 i 个待检子串 queries[i] 的检测结果。

// 注意：在替换时，子串中的每个字母都必须作为 独立的 项进行计数，也就是说，如果 s[left..right] = "aaa" 且 k = 2，
// 我们只能替换其中的两个字母。（另外，任何检测都不会修改原始字符串 s，可以认为每次检测都是独立的）

//

// 示例：

// 输入：s = "abcda", queries = [[3,3,0],[1,2,0],[0,3,1],[0,3,2],[0,4,1]]
// 输出：[true,false,false,true,true]
// 解释：
// queries[0] : 子串 = "d"，回文。
// queries[1] : 子串 = "bc"，不是回文。
// queries[2] : 子串 = "abcd"，只替换 1 个字符是变不成回文串的。
// queries[3] : 子串 = "abcd"，可以变成回文的 "abba"。 也可以变成 "baab"，先重新排序变成 "bacd"，然后把 "cd" 替换为 "ab"。
// queries[4] : 子串 = "abcda"，可以变成回文的 "abcba"。
//

// 提示：

// 1 <= s.length, queries.length <= 10^5
// 0 <= queries[i][0] <= queries[i][1] < s.length
// 0 <= queries[i][2] <= s.length
// s 中只有小写英文字母

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/can-make-palindrome-from-substring
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
/**
 * @param {string} s
 * @param {number[][]} queries
 * @return {boolean[]}
 */

/**
 * 判断给定字符串的子串是否可以通过最多 k 次字符替换变成回文字符串。
 * @param {string} s - 给定字符串。
 * @param {number[][]} queries - 待检测的子串数组，每个子串由三个数字组成：left、right 和 k。
 * @return {boolean[]} - 每个子串是否可以变成回文字符串的检测结果。
 */
// 判断给定字符串的子串是否可以通过最多 k 次字符替换变成回文字符串。
/**
 * @param {string} s - 给定字符串。
 * @param {number[][]} queries - 待检测的子串数组，每个子串由三个数字组成：left、right 和 k。
 * @return {boolean[]} - 每个子串是否可以变成回文字符串的检测结果。
 */
var canMakePaliQueries = function (s, queries) {
  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const [left, right, k] = queries[i];
    const str = s.slice(left, right + 1); // 获取子串
    const obj = {}; // 用于记录子串中每个字符出现的次数
    for (let j = 0; j < str.length; j++) {
      const char = str[j];
      obj[char] = obj[char] ? obj[char] + 1 : 1; // 统计字符出现次数
    }
    let odd = 0; // 记录出现奇数次的字符个数
    for (let key in obj) {
      if (obj[key] % 2 !== 0) {
        odd++;
      }
    }
    if (odd - 2 * k > 1) {
      // 判断是否可以通过最多 k 次字符替换变成回文字符串
      result.push(false);
    } else {
      result.push(true);
    }
  }
  return result;
};
var canMakePaliQueries = function (s, queries) {
  const n = s.length;
  const prefixSum = new Array(n + 1)
    .fill(null)
    .map(() => new Array(26).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 26; j++) {
      prefixSum[i + 1][j] = prefixSum[i][j];
    }
    prefixSum[i + 1][s.charCodeAt(i) - "a".charCodeAt(0)]++;
  }
  const result = [];
  for (let i = 0; i < queries.length; i++) {
    const [left, right, k] = queries[i];
    let odd = 0;
    for (let j = 0; j < 26; j++) {
      const count = prefixSum[right + 1][j] - prefixSum[left][j];
      if (count % 2 !== 0) {
        odd++;
      }
    }
    if (odd - 2 * k > 1) {
      result.push(false);
    } else {
      result.push(true);
    }
  }
  return result;
};

/**
 * 判断给定字符串的子串是否可以通过最多 k 次字符替换变成回文字符串。
 * @param {string} s - 给定字符串。
 * @param {number[][]} queries - 待检测的子串数组，每个子串由三个数字组成：left、right 和 k。
 * @return {boolean[]} - 每个子串是否可以变成回文字符串的检测结果。
 */
var canMakePaliQueries = function (s, queries) {
  const n = s.length;
  const count = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    count[i + 1] = count[i] ^ (1 << (s[i].charCodeAt(0) - "a".charCodeAt(0)));
    // 将 s[i] 转换为二进制数，然后将其转换为十进制数，再将其异或上前一个位置的值，得到 count[i+1]
    // 这样 count[i+1] 存储了 s 的前 i 个字符的二进制数的异或和
  }
  const res = [];
  for (const query of queries) {
    const l = query[0],
      r = query[1],
      k = query[2];
    let bits = 0,
      x = count[r + 1] ^ count[l];
    // 计算 s[l:r+1] 的二进制数的异或和
    while (x > 0) {
      x &= x - 1;
      bits++;
      // 统计二进制数中 1 的个数
    }
    res.push(bits <= k * 2 + 1);
    // 如果二进制数中 1 的个数小于等于 2k+1，则 s[l:r+1] 可以通过最多 k 次字符替换变成回文字符串
  }
  return res;
};

// 华为机试

// 1.题目描述
// 写出一个程序，接受一个十六进制的数，输出该数值的十进制表示。（多组同时输入 ）

// 2.输入描述:
// 输入一个十六进制的数值字符串。

// 3.输出描述:
// 输出该数值的十进制字符串。

// 4.示例1
// 输入
// 0xA
// 输出
// 10

function hexToDec(str) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x" || str[i] === "X") {
      str = str.slice(i + 1);
      break;
    }
  }
  let res = 0;
  const map = {
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  for (let i = 0; i < str.length; i++) {
    let num = 0;
    if (str[i] >= "0" && str[i] <= "9") {
      num = str[i] - "0";
    } else if (str[i] >= "a" && str[i] <= "f") {
      num = map[str[i]];
    } else if (str[i] >= "A" && str[i] <= "F") {
      num = map[str[i].toLowerCase()];
    }
    res = res + num;
  }
  return res;
}

// 这段代码实现了将一个十进制数转换为十六进制数的功能。
// 具体实现方式是将十进制数每四位一组转换为十六进制数，然后将这些十六进制数拼接起来。
// 其中，数字 0 的十六进制表示为 "0"，
// 数字 1-9 的十六进制表示为 "1"-"9"，数字 10-15 的十六进制表示为 "a"-"f"。
var toHex = function (num) {
  if (num === 0) {
    return "0";
  }
  const sb = [];
  for (let i = 7; i >= 0; i--) {
    // 右移 4 位，每次取 4 位，与 0xf 做与运算，得到的就是这 4 位的十进制数
    const val = (num >> (4 * i)) & 0xf;
    if (sb.length > 0 || val > 0) {
      // 跟10 做比较，比10 大的话，就是 a-f
      const digit =
        val < 10
          ? String.fromCharCode("0".charCodeAt() + val)
          : String.fromCharCode("a".charCodeAt() + val - 10);
      sb.push(digit);
    }
  }
  return sb.join("");
};

function nextGreaterElements(nums) {
  const stack = [];
  const result = new Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length * 2; i++) {
    // 循环数组，所以取模 循环两次
    const num = nums[i % nums.length];
    // 如果栈顶元素小于当前元素，则栈顶元素的下一个更大元素就是当前元素
    while (stack.length > 0 && num > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = num;
    }
    if (i < nums.length) {
      stack.push(i);
    }
  }

  return result;
}

let nums = [2, 5, 3, 7, 6, 8, 1];
console.log(nextGreaterElements(nums)); // 输出：[5, 7, 7, 8, 8, -1, 2]

// 1. 递归：计算斐波那契数列的第n个数。

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(5)); // 输出：5

// 2. 分治：合并排序的数组。

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      merged.push(left[i]);
      i++;
    } else {
      merged.push(right[j]);
      j++;
    }
  }

  return merged.concat(left.slice(i)).concat(right.slice(j));
}

const arr = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(mergeSort(arr)); // 输出：[1, 1, 2, 3, 4, 5, 6, 9]

// 3. 单调栈：找到数组中每个元素的下一个更大的元素。

function nextGreaterElements(nums) {
  const stack = [];
  const result = new Array(nums.length).fill(-1);

  for (let i = 0; i < nums.length * 2; i++) {
    const num = nums[i % nums.length];
    while (stack.length > 0 && num > nums[stack[stack.length - 1]]) {
      const index = stack.pop();
      result[index] = num;
    }
    if (i < nums.length) {
      stack.push(i);
    }
  }

  return result;
}

nums = [2, 5, 3, 7, 6, 8, 1];
console.log(nextGreaterElements(nums)); // 输出：[5, 7, 7, 8, 8, -1, 2]

// 4. 并查集：判断图中是否存在环。

class UnionFind {
  constructor(size) {
    this.parent = new Array(size).fill(-1);
  }

  find(x) {
    if (this.parent[x] === -1) {
      return x;
    }
    return this.find(this.parent[x]);
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX !== rootY) {
      this.parent[rootX] = rootY;
    }
  }
}

function hasCycle(graph) {
  const uf = new UnionFind(graph.length);

  for (let i = 0; i < graph.length; i++) {
    for (let j = 0; j < graph[i].length; j++) {
      const u = i;
      const v = graph[i][j];
      if (uf.find(u) === uf.find(v)) {
        return true;
      }
      uf.union(u, v);
    }
  }

  return false;
}

const graph = [
  [1, 2],
  [2, 3],
  [3, 1],
];
console.log(hasCycle(graph)); // 输出：true

// 5. 滑动窗口：找到数组中满足条件的最短子数组的长度。

function minSubArrayLen(target, nums) {
  let minLength = Infinity;
  let sum = 0;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return minLength !== Infinity ? minLength : 0;
}

const target = 7;
nums = [2, 3, 1, 2, 4, 3];
console.log(minSubArrayLen(target, nums)); // 输出：2

// 6. 前缀和：计算数组中所有子数组的和。

function subarraySum(nums) {
  const prefixSum = new Map();
  prefixSum.set(0, 1);
  let count = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (prefixSum.has(sum)) {
      count += prefixSum.get(sum);
    }

    prefixSum.set(sum, (prefixSum.get(sum) || 0) + 1);
  }

  return count;
}

nums = [1, 1, 1];
console.log(subarraySum(nums)); // 输出：3

// 7. 查分：给定一个区间，将其所有元素增加一个固定值。

function addRange(nums, left, right, val) {
  nums[left] += val;
  if (right + 1 < nums.length) {
    nums[right + 1] -= val;
  }
}

function restoreArray(nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] += nums[i - 1];
  }

  return nums;
}

nums = [1, 2, 3, 4, 5];
addRange(nums, 1, 3, 10);
console.log(restoreArray(nums)); // 输出：[1, 12, 13, 14, 5]

// 8. 二分查找：在有序数组中查找目标元素的索引。

function binarySearch(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

nums = [1, 3, 5, 7, 9];
 target = 5;
console.log(binarySearch(nums, target)); // 输出：2

// 9. BFS广搜：计算从起点到目标的最短路径长度。

function shortestPath(graph, start, end) {
  const queue = [start];
  const visited = new Set();
  let steps = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const node = queue.shift();

      if (node === end) {
        return steps;
      }

      if (!visited.has(node)) {
        visited.add(node);
        queue.push(...graph[node]);
      }
    }

    steps++;
  }

  return -1;
}

graph = {
  0: [1, 2],
  1: [2],
  2: [3],
  3: [],
};
start = 0;
end = 3;
console.log(shortestPath(graph, start, end)); // 输出：3

// 10. DFS深搜：查找图中从起点到目标的路径。

function findPath(graph, start, end) {
  const visited = new Set();
  const path = [];

  dfs(start);

  function dfs(node) {
    visited.add(node);
    path.push(node);

    if (node === end) {
      return true;
    }

    for (const neighbor of graph[node]) {
      if (!visited.has(neighbor) && dfs(neighbor)) {
        return true;
      }
    }

    path.pop();
    return false;
  }

  return path;
}

graph = {
  0: [1, 2],
  1: [2, 3],
  2: [3],
  3: [],
};
start = 0;
end = 3;
console.log(findPath(graph, start, end)); // 输出：[0, 1, 2, 3]


// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan(“Hank”)输出:
// Hi! This is Hank!

// LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~

// LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~

// LazyMan(“Hank”).eat(“supper”).sleepFirst(5)输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper

function LazyMan(name) {
  return new _LazyMan(name);
}
function _LazyMan(name) {
  this.tasks = [];
  console.log(`Hi! This is ${name}!`);
  const task = () => {
    this.next();
  };
  this.tasks.push(task);
  setTimeout(() => {
    this.next();
  }, 0);
  this.next = () => {
    const task = this.tasks.shift();
    task && task();
  }
  this.eat = (food) => { 
    const task = () => {
      console.log(`Eat ${food}~`);
      this.next();
    };
    this.tasks.push(task);
    return this;
  }
  this.sleepFirst = (time) => {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    this.tasks.unshift(task);
    return this;
  }

  this.sleep = (time) => {
    const task = () => {
      setTimeout(() => {
        console.log(`Wake up after ${time}`);
        this.next();
      }, time * 1000);
    };
    this.tasks.push(task);
    return this;
  }
}

// 反转链表
function reverseList(head) {
  let prev = null; // 前一个节点
  let curr = head; // 当前节点

  while (curr) {
    const next = curr.next; // 下一个节点
    curr.next = prev; // 当前节点指向前一个节点
    prev = curr; // 前一个节点更新为当前节点
    curr = next; // 当前节点更新为下一个节点
  }

  return prev; // 返回反转后的头节点
}


// 实现一个函数，输入一个数字，将这个数字转成十进制
function convertToDecimal(num) {
  let res = 0;
  let i = 0;
  while (num) {
    res += (num % 10) * Math.pow(2, i);
    num = Math.floor(num / 10);
    i++;
  }
  return res;
}

// 给你一个链表，删除链表的倒数第 n 个结点，并且返回链表的头结点。
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  
    let fast = head; // 快指针
    let slow = head; // 慢指针
    while (n--) { // 快指针先走n步
      fast = fast.next;
    }
    if (!fast) { // 如果快指针已经走到链表末尾，说明要删除的是头节点
      return head.next;
    }
    while (fast.next) { // 快指针和慢指针一起走，直到快指针走到链表末尾
      fast = fast.next;
      slow = slow.next;
    }
    slow.next = slow.next.next; // 删除倒数第n个节点
    return head;
};


// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const map = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (const c of s) {
    if (c in map) {
      stack.push(c);
    } else {
      if (c !== map[stack.pop()]) {
        return false;
      }
    }
  }
  return !stack.length;
};

/**
 * 
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  // 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
  const dummy = new ListNode();
  let curr = dummy;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  curr.next = list1 || list2;
  return dummy.next;
};

/**
 * 
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = [];
  // dfs 深度优先遍历
  const dfs = (lRemain, rRemain, str) => {
    if (str.length === 2 * n) {
      res.push(str);
      return;
    }
    if (lRemain > 0) {
      dfs(lRemain - 1, rRemain, str + '(');
    }
    if (lRemain < rRemain) {
      dfs(lRemain, rRemain - 1, str + ')');
    }
  }
  dfs(n, n, '');
  return res;
};