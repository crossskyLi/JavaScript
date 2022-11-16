// 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

// 比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

// P   A   H   N
// A P L S I I G
// Y   I   R
// 之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

// 请你实现这个将字符串进行指定行数变换的函数：

// string convert(string s, int numRows);
//  

// 示例 1：

// 输入：s = "PAYPALISHIRING", numRows = 3
// 输出："PAHNAPLSIIGYIR"
// 示例 2：
// 输入：s = "PAYPALISHIRING", numRows = 4
// 输出："PINALSIGYAHRPI"
// 解释：
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
	if (s.length <= 2 || numRows === 1) {
		return s
	}
	const arr = new Array(numRows).fill(0)
	let i = 0;
	let col = 0
	while (i < s.length) {
		if (col % (numRows - 1) === 0) {
			for (let row = 0; row < numRows; row++) {
				const char = s[i];
				arr[row] = arr[row] || []
				arr[row][col] = char
				i += 1
			}
			col += 1
		} else {
			arr[numRows - 1 - col % (numRows - 1)][col] = s[i];
			i += 1;
			col += 1
		}
	}

	return arr.map(i => i.join('')).join('')
}

const sst = "PAYPALISHIRING";
const snumRows = 4;

// convert(sst, snumRows)
convert("PAYPALISHIRING", 3)

const a = [
	['P', '', '', 'I', '', '', 'N'],
	['A', '', 'L', 'S', '', 'I', 'G'],
	['Y', 'A', '', 'H', 'R', '', undefined],
	['P', '', '', 'I', '', '', undefined]
]
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
	const length = s.length, r = numRows;
	if (r === 1 || r >= length) {
			return s;
	}
	const t = r * 2 - 2;
	const ans = [];
	for (let i = 0; i < r; i++) { // 枚举矩阵的行
			for (let j = 0; j < length - i; j += t) { // 枚举每个周期的起始下标
					ans.push(s[j + i]); // 当前周期的第一个字符
					if (0 < i && i < r - 1 && j + t - i < length) {
							ans.push(s[j + t - i]); // 当前周期的第二个字符
					}
			}
	}
	return ans.join('');
};