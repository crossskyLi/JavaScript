// 乘水容器
// 给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
// 找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
// 返回容器可以储存的最大水量。
// 说明：你不能倾斜容器。
// eg.
// 输入：[1,8,6,2,5,4,8,3,7]
// 输出：49
/**
 * 计算最大容量
 * @param {number[]} height 高度数组
 * @return {number} 最大容量
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    // 计算当前左右指针所指高度的最小值与两指针之间的距离的乘积
    const area = Math.min(height[left], height[right]) * (right - left);
    // 更新最大容量
    maxArea = Math.max(maxArea, area);

    // 如果左指针所指高度小于右指针所指高度，则左指针右移
    if (height[left] < height[right]) {
      left++;
    } else {
      // 否则右指针左移
      right--;
    }

    return maxArea;
  }
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
