const col = 5
const row = 5

const originArr = new Array(row).fill(0).map((value, index) => {
	const arr = []
	for (let i = 0; i < col; i++) {
		arr.push(index * col + i + 1)
	}
	return arr
})

const rotate = (arr) => {
	if (!arr.length || !arr[0]) { return }
	const row = arr.length;
	const col = arr[0].length;

	const targetArr = new Array(row).fill(0).map(() => []);
	targetArr[0][col - 1] = arr[0][0]
	for (let i = col; i > 0; i--) {
		for (let j = 0; j < row; j++) {
			targetArr[j][i - 1] = arr[col - i][j]
		}
	}
	return targetArr;
}
const result = rotate(originArr)
// console.log(result)


// 不生成新数组的方式

const rotateWithoutNewArr = (matrix) => {
	console.log(matrix, '开始')
	if (matrix.length == 0 || matrix.length != matrix[0].length) {
		return;
	}
	const nums = matrix.length;
	let times = 0;
	// n维 只需要 Math.ceil(n / 2) 次
	while (times <= (nums >> 1)) {
		let len = nums - (times << 1);
		// len => 当前回形需要遍历的次数		
		for (let i = 0; i < len - 1; ++i) {
			let temp = matrix[times][times + i];
			// 回形替换 4次
			matrix[times][times + i] = matrix[times + len - i - 1][times];
			matrix[times + len - i - 1][times] = matrix[times + len - 1][times + len - i - 1];
			matrix[times + len - 1][times + len - i - 1] = matrix[times + i][times + len - 1];
			matrix[times + i][times + len - 1] = temp;
		}
		++times;
	}
}

rotateWithoutNewArr(originArr)

class Solution {
	rotate(matrix) {
		if (matrix.length == 0 || matrix.length != matrix[0].length) {
			return;
		}
		const nums = matrix.length;
		let times = 0;
		while (times <= (nums >> 1)) {
			let len = nums - (times << 1);
			for (let i = 0; i < len - 1; ++i) {
				let temp = matrix[times][times + i];
				matrix[times][times + i] = matrix[times + len - i - 1][times];
				matrix[times + len - i - 1][times] = matrix[times + len - 1][times + len - i - 1];
				matrix[times + len - 1][times + len - i - 1] = matrix[times + i][times + len - 1];
				matrix[times + i][times + len - 1] = temp;
			}
			++times;
		}
	}
}
