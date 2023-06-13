// 请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。

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
var isMatch = function(s, p) {
  // 这个函数检查字符串s中的字符是否与字符串p中给定的索引i和j处的字符匹配
  function matches(s, p, i, j) {
    if (i === 0) {
      return false;
    }
    if (p[j - 1] === '.') {
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
    if (p[j - 1] === '*') {
      dp[0][j] = dp[0][j - 2];
    }
  }
  
  // 填充dp数组的其余部分
  for (let i = 1; i <= s.length; i++) {
    for (let j = 1; j <= p.length; j++) {
      if (p[j - 1] === '*') {
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
var maxArea = function(height) {
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
  const values = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const reps = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let res = '';
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
  if (!strs.length) return '';
  let res = strs[0];
  for (let i = 1; i < strs.length; i++) {
      let j = 0;
      for (; j < res.length && j < strs[i].length; j++) {
          if (res[j] !== strs[i][j]) break;
      }
      res = res.substr(0, j);
      if (!res) return '';
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
  for (let i = 0; i < nums.length - 2; i++) { // 遍历数组
    // 必须比0小，否则三数之和一定大于0
    if (nums[i] > 0) break; // 如果当前数大于0，跳出循环
    if (i > 0 && nums[i] === nums[i - 1]) continue; // 如果当前数和前一个数相同，跳过当前循环
    let l = i + 1; // 左指针
    let r = nums.length - 1; // 右指针
    while (l < r) { // 双指针遍历
      const sum = nums[i] + nums[l] + nums[r]; // 三数之和
      if (sum === 0) { // 如果三数之和为0
        res.push([nums[i], nums[l], nums[r]]); // 将三个数加入结果数组
        while (l < r && nums[l] === nums[l + 1]) l++; // 跳过重复的左指针
        while (l < r && nums[r] === nums[r - 1]) r--; // 跳过重复的右指针
        l++; // 左指针右移
        r--; // 右指针左移
      } else if (sum < 0) { // 如果三数之和小于0
        l++; // 左指针右移
      } else { // 如果三数之和大于0
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
  for (let i = 0; i < nums.length; i++) { // 遍历数组
    let l = i + 1; // 左指针
    let r = nums.length - 1; // 右指针
    while (l < r) { // 双指针遍历
      const sum = nums[i] + nums[l] + nums[r]; // 三数之和
      if (Math.abs(sum - target) < Math.abs(res - target)) { // 如果当前三数之和与目标值的差小于结果与目标值的差
        res = sum; // 更新结果
      }
      if (sum > target) { // 如果三数之和大于目标值
        r--; // 右指针左移
      } else if (sum < target) { // 如果三数之和小于目标值
        l++; // 左指针右移
      } else { // 如果三数之和等于目标值
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
  const map = { // 映射表
    2: 'abc', 3: 'def', 4: 'ghi', 5: 'jkl',
    6: 'mno', 7: 'pqrs', 8: 'tuv', 9: 'wxyz'
  };
  // 深度优先搜索（Depth-First-Search）
  const dfs = (curStr, i) => { // curStr是当前字符串，i是扫描的指针
    if (i > digits.length - 1) { // 指针越界，递归的出口
      res.push(curStr); // 将解推入res
      return; // 结束当前递归分支
    }
    const letters = map[digits[i]]; // 当前数字对应的字母
    for (const l of letters) { // 一个字母是一个选择，对应一个递归分支
      dfs(curStr + l, i + 1); // 生成新字符串，i指针右移，递归
    }
  };
  
  dfs('', 0); // 递归的入口，初始字符串为''，指针为0
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
  while (num > 20) { // 如果生成的随机数大于20，就重新生成
    num = 5 * rand5() + rand5();
  }
  return num % 7; // 对7取余，得到[0,6]范围内的随机数
}

