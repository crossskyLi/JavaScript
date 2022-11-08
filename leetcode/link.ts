function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
	if (!head) return head
	const nodes: ListNode[] = []

	let cur: ListNode | null = head
	while (cur) {
		nodes.push(cur)
		cur = cur.next
	}

	if (nodes.length < n) { return null }

	if (nodes.length === n) {

		return nodes[1] || null
	}
	if (nodes.length > n) {
		const pre = nodes[nodes.length - n - 1]
		const succ = nodes[nodes.length - n + 1]


		if (pre) {
			pre.next = succ || null
		}

	};
	return head
}


/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
	const dp = new Array(s.length).fill(0)
	let stack: number[] = []
	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			stack.push(i)
		} else {
			if (stack.length > 0) {
				const f = stack.pop()
				dp[i] = i - f! + 1
			} else {
				// 另起炉灶
				stack.length = 0
			}
		}
	}

	let ans = 0
	for (let i = s.length - 1; i >= 0; i--) {
		let cur = i
		let sum = 0
		while (cur >= 0 && dp[cur] > 0) {
			sum += dp[cur]
			cur = (cur - dp[cur])
		}
		ans = Math.max(ans, sum)
	}
	return ans
};

// 作者：scnu_evan
// 链接：https://leetcode.cn/problems/longest-valid-parentheses/solution/javascript-32-zui-chang-you-xiao-gua-hao-vnuj/
