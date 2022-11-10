// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

// 示例 1:
// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:
// 输入: "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

// 示例 3:
// 输入: "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
//      请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
// a b c b d d a b b d
// 滑动窗口的概念，从左至右两个指针
// 比如左指针指向a，然后右指针一直向右移动直到遇到第一个b重复字符，停止。
// 遇到停止，保存长度，并比较
// 接着移动左指针到下一个字符
var lengthOfLongestSubstring = function(s) {
	// 哈希集合，记录每个字符是否出现过
	const occ = new Set();
	const n = s.length;
	// 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
	let rk = -1, ans = 0;
	for (let i = 0; i < n; ++i) {
			if (i != 0) {
					// 左指针向右移动一格，移除一个字符
					occ.delete(s.charAt(i - 1));
			}
			while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
					// 不断地移动右指针
					occ.add(s.charAt(rk + 1));
					++rk;
			}
			// 第 i 到 rk 个字符是一个极长的无重复字符子串
			ans = Math.max(ans, rk - i + 1);
	}
	return ans;
};

var lengthOfLongestSubstring = function (str) {
  if (str.length <= 1) {
    return str.length
  }
  let left = 0;
  let lookup = new Set();
  let n = str.length;
  let maxLen = 0;
  let curLen = 0;
  for (let i = 0; i < n; i++) {
    curLen += 1;
    while (lookup.has(str[i])) {
      lookup.delete(str[left])
      left += 1
      curLen -= 1
    }
    if (curLen > maxLen) maxLen = curLen;
    lookup.add(str[i])
  }
  return maxLen
};

// console.time('rest')
// let result
// result = lengthOfLongestSubstring("abcabcbb");
// console.log(result)
// result = lengthOfLongestSubstring("pwwkew");
// console.log(result)

// result = lengthOfLongestSubstring("au");
// console.log(result)
// result = lengthOfLongestSubstring("");
// console.log(result)
// result = lengthOfLongestSubstring(str);
// console.log(result)

// console.timeEnd('rest')

