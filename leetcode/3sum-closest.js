// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，
// 使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

// 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

// 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

// 链接：https://leetcode-cn.com/problems/3sum-closest

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);/* 排序 */
  let res = nums[0] + nums[1] + nums[2];
  let n = nums.length;
  for (let i = 0; i < n; i++) {
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      /* 在第i个 往后的数组 求和，两边向中间 取值 */
      let sum = nums[i] + nums[left] + nums[right];
      /* 与上次取值的结果做比较 */
      if (Math.abs(res - target) > Math.abs(sum - target)) {
        res = sum;
      } else if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else if (sum === target) {
        return res;
      }
    }
  }
  return res;
};
