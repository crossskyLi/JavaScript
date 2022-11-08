// 1684. 统计一致字符串的数目
// 给你一个由不同字符组成的字符串 allowed 和一个字符串数组 words 。如果一个字符串的每一个字符都在 allowed 中，就称这个字符串是 一致字符串 。

// 请你返回 words 数组中 一致字符串 的数目。



// 示例 1：

// 输入：allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// 输出：2
// 解释：字符串 "aaab" 和 "baa" 都是一致字符串，因为它们只包含字符 'a' 和 'b' 。
// 示例 2：

// 输入：allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
// 输出：7
// 解释：所有字符串都是一致的。
// 示例 3：

// 输入：allowed = "cad", words = ["cc","acd","b","ba","bac","bad","ac","d"]
// 输出：4
// 解释：字符串 "cc"，"acd"，"ac" 和 "d" 是一致字符串。

/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
// var countConsistentStrings = function (allowed, words) {
// 	let count = words.length;

// 	for (let j = 0; j < words.length; j++) {
// 		const word = words[j]
// 		for (let i = 0; i < allowed.length; i++) {
// 			const char = allowed[i];
// 			const reg = new RegExp(char, 'g')
// 			const unmatch = !reg.test(word)
// 			console.log(char, word, unmatch)

// 			if (unmatch) {
// 				count--;
// 			};
// 			break;
// 		}
// 	}
// 	return count
// };

// countConsistentStrings('cad', ["cc", "acd", "b", "ba", "bac", "bad", "ac", "d"])

var countConsistentStrings = function (allowed, words) {
	let mask = 0;
	for (let i = 0; i < allowed.length; i++) {
		const c = allowed[i];
		// 比如c 那就距离a 是两位也就是100 左移两位的结果
		mask |= 1 << (c.charCodeAt() - 'a'.charCodeAt());
		// 或完的结果就是 1 | 0 的话是 1 ，0 | 0 就是0 也就是说每个二进制位记录一个字母是否存在
	}

	let res = 0;
	for (const word of words) {
		let mask1 = 0;
		for (let i = 0; i < word.length; i++) {
			const c = word[i];
			// 这里同上面，它的结果是唯一的，无论字母出现多少次，相应序号位置有1就是代表字母出现过
			mask1 |= 1 << (c.charCodeAt() - 'a'.charCodeAt());
		}
		// 或完的结果跟第一个一致，证明只出现了第一个mask对应位置其中的字母标号
		// 如100，就是代表出现了c
		// 如果出现比如 ‘10’，即b字母，而 第一个mask[cad]的 ‘1101‘
		// 右边数起第二个数字是0和‘10’的右边第二个数字1,不一致。
		if ((mask1 | mask) === mask) {
			res++;
		}
	}
	return res;
};
countConsistentStrings('cad', ["cc", "acd", "b", "ba", "bac", "bah", "ac", "d"])
