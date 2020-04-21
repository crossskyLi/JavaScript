// 实现 int sqrt(int x) 函数。

// 计算并返回 x 的平方根，其中 x 是非负整数。

// 由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。

// 示例 1:

// 输入: 4
// 输出: 2
// 示例 2:

// 输入: 8
// 输出: 2
// 说明: 8 的平方根是 2.82842..., 
//      由于返回类型是整数，小数部分将被舍去。
// 通过次数118,570提交次数314,974


// 链接：https://leetcode-cn.com/problems/sqrtx

// 找到一个除这个数，得到的数字还是这个数的方法
function MathSqrt(num) {
  let left = 1, right = x / 2;
  let last_mid;
  if (x < 2) return x;
  // 取一半的范围，然后left 一直往右边走
  while (left <= right) {
    const mid = left + (right - left) / 2;
    if (x / mid > mid) {
      left = mid + 1;
      last_mid = mid;
    } else if (x / mid < mid) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return last_mid;
}
let num = 8
MathSqrt(num)