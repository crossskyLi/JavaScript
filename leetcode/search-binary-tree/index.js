// 二叉查找树（Binary Search Tree），也称二叉搜索树，是指一棵空树或者具有下列性质的二叉树：

// 任意节点的左子树不空，则左子树上所有结点的值均小于它的根结点的值；
// 任意节点的右子树不空，则右子树上所有结点的值均大于它的根结点的值；
// 任意节点的左、右子树也分别为二叉查找树；
// 没有键值相等的节点。
// 二叉查找树相比于其他数据结构的优势在于查找、插入的时间复杂度较低。为O(log n)。二叉查找树是基础性数据结构，用于构建更为抽象的数据结构，如集合、multiset、关联数组等。（摘自维基百科）
// 下面 4 张 GIF 动图，是 penjee 官博制作分享。，分享给大家。
// ###图1：查找 BST 中的某个元素

// 在二叉搜索树b中查找x的过程为：

// 若b是空树，则搜索失败，否则：
// 若x等于b的根节点的数据域之值，则查找成功；否则：
// 若x小于b的根节点的数据域之值，则搜索左子树；否则：
// 查找右子树。

const { BinarySearchTree } = require('./binarySearchTree')


function getTree(count) {
	const searchTree = new BinarySearchTree();
	const n = count;
	let i = 0;
	while (i < count) {
		const key = Math.floor(Math.random() * 100)
		// console.log(key)
		searchTree.insert(key, `value: ${key}`)
		i++
	}
	return searchTree;
}
// console.log(getTree(10))