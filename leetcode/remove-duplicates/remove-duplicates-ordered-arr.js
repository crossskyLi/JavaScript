
// 删除有序数组的重复项，不增加使用空间, 返回新数组长度

let removeDuplicates = (nums) => {
	// 解法1
	// if (nums.length <= 1) { return nums }

	// let a = nums[0]
	// let b = nums[1];
	// index = 1;
	// while (b !== undefined) {
	// 	// 相邻两个数比较
	// 	if (a === b) { // 相等，原数组删除一个元素
	// 		nums.splice(index, 1)
	// 		b = nums[index]
	// 	} else { // 不相等，往前步进
	// 		a = nums[index]
	// 		b = nums[index + 1]
	// 		index++
	// 	}
	// }
	// return nums.length

	


	// map
	// if (nums.length <= 1) { return nums }

	// let a = nums[0];
	// nums = nums.filter((value, index) => {
	// 	if (index === 0) {
	// 		return true
	// 	}
	// 	if (a === value) {
	// 		return false
	// 	} else {
	// 		a = value
	// 		return true
	// 	}
	// })
	// console.log(nums)
	// return nums.length


	// 官方解答
	const n = nums.length;
	if (n === 0) {
			return 0;
	}
	let fast = 1, slow = 1;
	while (fast < n) {
			if (nums[fast] !== nums[fast - 1]) {
					nums[slow] = nums[fast];
					++slow;
			}
			++fast;
	}
	return slow;
}



removeDuplicates([1,1,2])