/* 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。

如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。

您可以假设除了数字 0 之外，这两个数都不会以 0 开头。

示例：

输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
输出：7 -> 0 -> 8
原因：342 + 465 = 807
 */

/* 数组版本 */
const addTwoNumbers = function (l1, l2) {
  let maxLength;
  let minLength;
  let whoLengthBig;
  let index = 0;

  if (l1.length >= l2.length) {
    maxLength = l1.length;
    minLength = l2.length;
    whoLengthBig = true;
  } else {
    maxLength = l2.length;
    minLength = l1.length;
    whoLengthBig = false;
  }
  let arr = new Array(minLength).fill(0);
  let number = 0;
  while (index < minLength) {
    number = l1[index] + l2[index] + arr[index];
    arr[index] = number >= 10 ? number % 10 : number;
    if (number >= 10) {
      arr[index + 1] = 1;
    }
    index++
  }
  const restArr = whoLengthBig ? l1.slice(index) : l2.slice(index);

  if (restArr.length && arr.length > minLength) {
    arr = arr.slice(0, arr.length - 1)
    index = 0
    while (index < restArr.length) {
      number = restArr[index] + 1;
      restArr[index] = number === 10 ? 0 : number;
      if (number < 10) {
        break;
      }
      index++
    }
  }
  return [...arr, ...restArr];
};

const result = addTwoNumbers([2, 4, 6, 5], [5, 6, 4])

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}
/*  */
const getNodeByRecursive = (arr, i, node) => {
  if (!arr.length) {
    return null;
  }

  let parentNode = node || new ListNode(arr[0], null);
  let index = i || 1;

  if (arr.length === 1) {
    return parentNode
  }

  if (index >= arr.length) {
    return parentNode
  }
  let temNode = new ListNode(arr[index], null);
  parentNode.next = temNode;
  index++

  getNodeByRecursive(arr, index, temNode)

  return parentNode;
}

const getNodeByIteration = (arr) => {
  if (!arr.length) {
    return null;
  }
  let parentNode = new ListNode(arr[0], null);
  let node = parentNode;
  let temp;
  for (let i = 1; i < arr.length; i++) {
    temp = new ListNode(arr[i], null);
    node.next = temp;
    node = temp
  }
  return parentNode
}

// ListNode {
//   val: 5,
//     next: ListNode { val: 6, next: ListNode { val: 4, next: null } }
// }

/* 链表版本 */
const addTwoNumbers2 = function (l1, l2) {
  let value1 = l1.val;
  let value2 = l2.val;
  let number = value1 + value2
  let need = number >= 10 ? 1 : 0;
  if (need) {
    number = number % 10;
  }
  let parentNode = new ListNode(number, null);
  let node = parentNode;
  let temp;
  let next1 = l1 ? l1.next : null;
  let next2 = l2 ? l2.next : null;

  if (!next1 && !next2) {
    if (!need) {
      return parentNode;
    } else {
      parentNode.next = new ListNode(1, null);
      return parentNode;
    }
  }

  while (next1 || next2) {
    value1 = 0;
    value2 = 0;
    if (next1) {
      value1 = next1.val;
    }
    if (next2) {
      value2 = next2.val;
    }
    number = value1 + value2 + need;

    if (number >= 10) {
      number = number % 10;
      need = 1
    } else {
      need = 0
    }
    temp = new ListNode(number, null);
    node.next = temp;
    node = temp;
    next1 = next1 ? next1.next : null;
    next2 = next2 ? next2.next : null;
    if (!next1 && !next2 && need) {
      node.next = new ListNode(1, null);
      break;
    }
  }

  return parentNode
};

// Test Case
const l1 = getNodeByIteration([8, 4, 6, 5])
const l2 = getNodeByIteration([5, 6, 5])
const res = addTwoNumbers2(l1, l2)

const l12 = getNodeByIteration([5])
const l22 = getNodeByIteration([5])
const res1 = addTwoNumbers2(l12, l22)

let arr1 = new Array(1000000).fill(0).map(() => Math.floor(Math.random() * 10))
let arr2 = new Array(1000000).fill(0).map(() => Math.floor(Math.random() * 10))
console.log(arr1)
console.log(arr2)
const l13 = getNodeByIteration(arr1)
const l23 = getNodeByIteration(arr2)
console.time("test")
const res3 = addTwoNumbers2(l13, l23)
console.timeEnd("test")
console.log(res3)

