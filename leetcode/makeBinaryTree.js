
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  setLeft(left) {
    this.left = left
  }
  getLeft() {
    return this.left;
  }
  setRight(right) {
    this.right = right;
  }
  getRight() {
    return this.right;
  }

}

function makeTree(arr) {
  let length = arr.length;

  if (!length) {
    return;
  }
  let nodeArr = arr.map((value) => new TreeNode(value))

  let root = nodeArr[0];
  for (let i = 1; i < length; i++) {
    let item = nodeArr[i]
    while (root) {
      if (item.value > root.value) {
        if (root.right && item.value > root.right.value) {
          root = root.right;
        } else {
          let right = root.right;
          root.setRight(item);
          item.setRight(right)
          break;
        }
      } else if (item.value < root.value) {
        if (root.left && item.value < root.left.value) {
          root = root.left;
        } else {
          let left = root.left;
          root.setLeft(item);
          item.setLeft(left);
          break;
        }
      }
    }
    root = nodeArr[0];
  }
}

let arr = [3, 2, 1, 4, 5, 3.2];
makeTree(arr)