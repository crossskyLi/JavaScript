

// 给定一个二叉树，返回它的中序 遍历。

// 示例:

// 输入: [1,null,2,3]
//    1
//     \
//      2
//     /
//    3

// 输出: [1,3,2]
// 进阶: 递归算法很简单，你可以通过迭代算法完成吗？

// 链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal


/**
 * @param {TreeNode} root
 * @return {number[]}
 */

// 中序遍历，先要将最左边的节点全部加入栈中，然后逐个pop出来
// 核心思想注意，将右子树重置为root，进行下一步的循环。

// 两个while嵌套，中间的就是继续存放子树的节点
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let arr = []
  let stackArr = []
  while (root != null || stackArr.length != 0) {
    while (root != null) {
      stackArr.push(root) // 往数组里面添加,压栈
      root = root.left
    }
    root = stackArr.pop() // 出栈
    arr.push(root.val) // 放入值
    root = root.right // 左边的节点
  }
  return arr
};