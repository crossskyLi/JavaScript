var permute = function (nums) {
	let len = nums.length, res = [];
	if (!len) return res;

	let used = []; // boolean[]
	let path = []; //number[]
	dfs(nums, len, 0, path, used, res);
	return res;

	function dfs(nums, len, depth, path, used, res) {
		if (depth === len) {
			//path是动态数组，不能直接push，需要拷贝一份当前值保存到结果中
			res.push([...path]);
			return;
		}

		// 针对全排列中下标为 depth 的位置进行所有可能的尝试
		for (let i = 0; i < len; i++) {
			if (!used[i]) {
				path.push(nums[i]);
				used[i] = true;

				console.log(path, '22222')
				// 往下找全排列中的下一个位置
				dfs(nums, len, depth + 1, path, used, res);

				// 形成一个全排列后，进行回退，尝试其他答案
				used[i] = false;
				path.pop();
			}
		}
	}
};

// 八皇后
var solveNQueens = function (n) {
	if (n == 0) return res;

	let col = [], main = [], sub = []; // boolean[]
	let res = []; // string[]
	let path = []; //number[]
	dfs(0, path);
	return res;

	function dfs(row, path) {
		// 深度优先遍历到下标为 n，表示 [0.. n - 1] 已经填完，得到了一个结果
		if (row == n) {
			const board = convert2board(path);
			res.push(board);
			return;
		}

		// 针对下标为 row 的每一列，尝试是否可以放置
		for (let j = 0; j < n; j++) {
			if (!col[j] && !main[row - j + n - 1] && !sub[row + j]) {
				path.push(j);

				// 记录该位置的攻击范围
				col[j] = true;
				main[row - j + n - 1] = true; //加n-1是为了防止数组索引为负数
				sub[row + j] = true;

				// 进入下一行
				dfs(row + 1, path);

				// 回溯, 去掉path中最后一个值，尝试其他选项
				col[j] = false;
				main[row - j + n - 1] = false;
				sub[row + j] = false;
				path.pop();
			}
		}
	}

	// 输出一个结果
	function convert2board(path) {
		let board = []; // string[]
		for (let i = 0; i < path.length; i++) {
			let ret = new Array(n).fill('.');
			ret[path[i]] = 'Q';
			board.push(ret.join(''))
		}
		
		return board;
	}
};
