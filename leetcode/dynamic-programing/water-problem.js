import LinkedList from '../link-list/LinkedList'


// 积水问题，使用单调栈的思想
class Solution42 {
	trap(height) {
		const stack = new LinkedList();
		// 最少也需要3个柱子才能积水，否则直接返回0
		if (height.length < 3) return 0;

		let res = 0;
		for (let i = 0; i < height.length; i++) {
			// 当栈不为空，且不满足递减关系 弹栈并记录弹出元素下标，用于计算积水高度
			while (!stack.isEmpty() && height[i] > height[stack.getLast()]) {
				let temp = stack.deleteTail();
				// 当有重复连续值时都弹出
				while (!stack.isEmpty() && height[temp] == height[stack.getLast()]) {
					stack.deleteTail();
				}
				//计算积水深度
				if (!stack.isEmpty()) {
					// 计算宽度
					let width = i - stack.getLast() - 1;
					// 计算高度
					let high = Math.min(height[i] - height[temp], height[stack.getLast()] - height[temp]);
					//                    System.out.println(i + "  " + width + "  " + high + "  " + temp);
					res += high * width;
				}
			}
			stack.append(i);
			//            System.out.println();
		}

		return res;
	}
}

const s = new Solution42()
const result= s.trap([4,2,0,3,2,5])
console.log('water-problem',result)
// // 按层计算，负责度较高可能会超时
// class Solution42_byLayer {
// 	public let trap(let[] height) {
// 		let res = 0, max = 0;
// 		for (let i = 0; i < height.length; i++) {
// 			max = Math.max(height[i], max);
// 		}

// 		// 按层计算
// 		for (let i = 1; i <= max; i++) {
//             boolean flag = false;
// 			let ceng = 0;
// 			for (let j = 0; j < height.length; j++) {
// 				// 如果有小于i的且左边有>=i的则此处可以存水
// 				if (flag && height[j] < i) {
// 					ceng++;
// 				}
// 				// 可挡住水的墙把flag设置为True 把ceng加到总数上再置零计算下一个积水处
// 				if (height[j] >= i) {
// 					flag = true;
// 					res += ceng;
// 					ceng = 0;
// 				}
// 			}
// 		}

// 		return res;
// 	}
// }


// // 按列计算，第一列和最后一列不可能存水直接跳过 1~height.length-1
// class Solution42_byClo {
// 	public let trap(let[] height) {
// 		let res = 0, max = 0;

// 		// 第一列和最后一列不可能存水直接跳过 1~height.length-1
// 		for (let i = 1; i < height.length - 1; i++) {
// 			let left = 0, right = 0, min = 0;

// 			// 计算左边最大值
// 			for (let j = i - 1; j >= 0; j--) {
// 				left = Math.max(left, height[j]);
// 			}

// 			//计算右侧最大值
// 			for (let j = i + 1; j < height.length; j++) {
// 				right = Math.max(right, height[j]);
// 			}

// 			min = Math.min(right, left);

// 			// i列积水深度
// 			let deep = min - height[i];
// 			if (deep > 0) {
// 				res += deep;
// 			}
// 		}

// 		return res;
// 	}
// }

// // 双指针法
// // 设置两个指针向中间移动，用maxLeft、maxRight分别记录左侧和右侧的最值
// // 若maxLeft < maxRight 则以左侧为依据，否则以右侧为依据
// // 以左侧为依据时候，当前左指针指向元素height[left]>=maxLeft 则该地方不能积水，left++向右移动。否则res += maxLeft - height[left]
// // 以右侧为依据时候，当前右指针指向元素height[right]>=maxRight 则改地方不能积水。否则res += maxRight - height[left]
// class Solution42_byDoublePointer {
// 	public let trap(let[] height) {
// 		let res = 0, maxLeft = height[0], max_Right = height[height.length - 1], left = 0, right = height.length - 1;
// 		while (left <= right) {
// 			// 如果左侧比较小，则以左侧为准，判断height[left]处是否积水
// 			if (maxLeft < max_Right) {
// 				// 如果左侧最大值比当前左指针位置大则可以积水
// 				if (height[left] < maxLeft) {
// 					res += maxLeft - height[left];
// 				} else { // 否则该位置不能积水，因为其比左侧最大高度低 不能积水
// 					maxLeft = Math.max(height[left], maxLeft);

// 				}
// 				left++;
// 			} else { // 此时右侧高度比较小，判断右侧位置情况
// 				// 此时 height[right] 比较小可以积水
// 				if (height[right] < max_Right) {
// 					res += max_Right - height[right];
// 				} else { // 此时不能积水
// 					max_Right = Math.max(max_Right, height[right]);

// 				}
// 				right--; // 指针左移动
// 			}

// 		}
// 		return res;
// 	}
// }

// public class LeetCode42 {
// 	@Test
// 	public void test() {
// 		//        let[] height = {0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1};
// 		let [] height = { 2, 0, 2};
// 		System.out.println(new Solution42().trap(height));
// 		System.out.println(new Solution42_byLayer().trap(height));
// 		System.out.println(new Solution42_byClo().trap(height));
// 		System.out.println(new Solution42_byDoublePointer().trap(height));
// 	}
// }

