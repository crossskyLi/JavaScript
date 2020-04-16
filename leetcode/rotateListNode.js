// 给定一个链表，旋转链表，将链表每个节点向右移动 k 个位置，其中 k 是非负数。

// 示例 1:

// 输入: 1->2->3->4->5->NULL, k = 2
// 输出: 4->5->1->2->3->NULL
// 解释:
// 向右旋转 1 步: 5->1->2->3->4->NULL
// 向右旋转 2 步: 4->5->1->2->3->NULL
// 示例 2:

// 输入: 0->1->2->NULL, k = 4
// 输出: 2->0->1->NULL
// 解释:
// 向右旋转 1 步: 2->0->1->NULL
// 向右旋转 2 步: 1->2->0->NULL
// 向右旋转 3 步: 0->1->2->NULL
// 向右旋转 4 步: 2->0->1->NULL
// 通过次数53,803提交次数134,418

// 链接：https://leetcode-cn.com/problems/rotate-list

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

/* ListNode {
 val: 1,
 next:
  ListNode { val: 2, next: ListNode { val: 3, next: [ListNode] } } }
   */
var rotateRight = function (head, k) {
  let map = Object.create(null)
  let i = 0;
  while (head) {
    map[i] = head
    head = head.next;
    i++
  }

  if (i === 0) {
    return map[0];
  } else {
    k = k % i;/* 防止k 大于 i */
    if (k === 0) {
      return map[0]
    }
    map[i - 1].next = map[0];
    map[i - k - 1].next = null;
    return map[i - k]
  }
};



var rotateRight1 = function (head, k) {
  const dummy = new ListNode(0)
  dummy.next = head
  let count = 0
  let last = dummy
  while (last.next) {
    last = last.next
    count++
  }
  /* 数节点,下面取模,不需要算那么多次 */

  if (count === 0 || count === k) return dummy.next
  const modK = k % count
  let diff = modK + 1

  let left = dummy
  let right = dummy
  while (diff--) {
    right = right.next
  }

  while (right) {
    right = right.next
    left = left.next
  }

  last.next = dummy.next
  dummy.next = left.next
  left.next = null

  return dummy.next
}


var rotateRight2 = function (head, k) {
  const HEAD = head;
  let i = 0;
  const map = Object.create(null);

  while (head) {
    map[i] = head;
    head = head.next;
    i++;
  }
  if (i === 0) {
    return HEAD;
  } else {
    k = k % i;
    if (k === 0) {
      return HEAD
    }
    map[i - 1].next = HEAD;
    map[i - k - 1].next = null;
    return map[i - k]
  }
};
// 链接：https://leetcode-cn.com/problems/rotate-list/solution/lian-biao-shuang-zhi-zhen-by-muyunyun/
let result = rotateRight(
  {
    val: 1,
    next:
    {
      val: 2,
      next: {
        val: 3,
        next: null
      }
    }
  },
  2
)
console.log(result)