let arr = [
  {
    id: 3,
    parentId: 1,
    name: '3'
  },
  {
    id: 4,
    parentId: 3,
    name: '4'
  },
  {
    id: 5,
    parentId: 0,
    name: '5'
  },
  {
    id: 0,
    name: '0'
  },
  {
    id: 1,
    parentId: 0,
    name: '1'
  },
  {
    id: 2,
    parentId: 1,
    name: '2'
  },
  {
    id: 10,
    name: '我是独立的'
  },
];

function getTree(arr, key, parentIdKey) {
  const map = {};
  let tree = [];
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    let item = arr[i] // item 指向 arr[i], 接下来的都指向item 即 arr[i]
    map[item[key]] = item
    map[item[key]].children = [];

    if (item[parentIdKey] === undefined) {
      tree.push(item)
    }
  }

  length = arr.length;
  for (let i = 0; i < length; i++) {
    let item = arr[i];// 同上

    if (item[parentIdKey] !== undefined && map[item[parentIdKey]]) {
      map[item[parentIdKey]].children.push(item)
    }

  }
  return tree
}

const tree = getTree(arr, 'id', 'parentId');

function treeToArr(tree) {
  let result = [];

  function push(tree) {
    let item = { ...tree }
    result.push(item);
    if (tree.children && tree.children.length) {
      for (let i = 0, length = tree.children.length; i < length; i++) {
        push(tree.children[i])
      }
    }
    delete item.children
  }

  for (let i = 0, length = tree.length; i < length; i++) {
    push(tree[i])
  }
  return result;
}

let result = treeToArr(tree);
