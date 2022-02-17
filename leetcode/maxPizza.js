function maxSum(arr, size) {
	if (size <= 0) {
		return 0;
	} else if (size == 1) {
		return arr[0];
	}

	let a = 0;
	let b = arr[0];
	let temp;
	for (let i = 1; i < size; ++i) {
		temp = (a > b) ? a : b;
		b = a + arr[i];
		a = temp;
	}
	return (b > a) ? b : a;
}

// 给你一个披萨，它由 3n 块不同大小的部分组成，现在你和你的朋友们需要按照如下规则来分披萨：

// 你挑选 任意 一块披萨。
// Alice 将会挑选你所选择的披萨逆时针方向的下一块披萨。
// Bob 将会挑选你所选择的披萨顺时针方向的下一块披萨。
// 重复上述过程直到没有披萨剩下。
// 每一块披萨的大小按顺时针方向由循环数组 slices 表示。

// 请你返回你可以获得的披萨大小总和的最大值。



// 示例 1：



// 输入：slices = [1,2,3,4,5,6]
// 输出：10
// 解释：选择大小为 4 的披萨，Alice 和 Bob 分别挑选大小为 3 和 5 的披萨。然后你选择大小为 6 的披萨，Alice 和 Bob 分别挑选大小为 2 和 1 的披萨。你获得的披萨总大小为 4 + 6 = 10 。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/pizza-with-3n-slices

var maxSizeSlices = function (slices) {
	let len = slices.length
	let dp = new Array(len)
		.fill(0)
		.map((item) => new Array(Math.floor(len / 3) + 1).fill(0))
	/**
	 * [[0,0,0],[0,0,0],[0,0,0]....] 
	 * */
	
	let res = 0
	// 求不相邻序列的最大值
	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < Math.floor(len / 3); j++) {
			dp[i][j + 1] = Math.max(
				i > 0 ? dp[i - 1][j + 1] : 0,
				i - 2 >= 0 ? dp[i - 2][j] + slices[i] : slices[i],
			)
		}
		res = Math.max(res, dp[i][Math.floor(len / 3)])
		// console.log(dp[i][Math.floor(len / 3)])
	}

	// console.log('res',res)
	dp = new Array(len)
		.fill(0)
		.map((item) => new Array(Math.floor(len / 3) + 1).fill(0))
	for (let i = 1; i < len; i++) {
		for (let j = 0; j < Math.floor(len / 3); j++) {
			dp[i][j + 1] = Math.max(
				dp[i - 1][j + 1],
				i - 2 >= 0 ? dp[i - 2][j] + slices[i] : slices[i],
			)
		}
		res = Math.max(res, dp[i][Math.floor(len / 3)])
	}
	return res
}
let result = maxSizeSlices([1, 2, 3, 4, 5, 6])
// console.log(result)
