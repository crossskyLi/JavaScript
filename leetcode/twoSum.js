// ** 两数之和 **
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

// 你可以按任意顺序返回答案。

//  

// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
// 示例 2：

// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]
// 示例 3：

// 输入：nums = [3,3], target = 6
// 输出：[0,1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	let i = 0;
	while (i < nums.length) {
		const num = nums[i];

		for (let j = nums.length - 1; j > -1; j--) {
			if (i !== j && num + nums[j] === target) {
				return [i, j]
			}
		}
		i++;
	}
	return []
};


var twoSum = function (nums, target) {
	const map = {}

	for (let j = 0; j < nums.length; j++) {
		const item = nums[j]
		if (map[item] !== undefined && j !== map[item]) {
			return [j, map[item]]
		}
		const rest = target - item
		map[rest] = j;
	}
};

var twoSum = function (nums, target) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		const item = nums[i];
		if (map.has(item)) {
			return [map.get(item), i]
		}
		map.set(target - item, i);
	}
};


const nums = [3, 2, 4];
const target = 6;
const result = twoSum(nums, target);
console.log(result)