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
];

function getTree(arr, key, parentIdKey, parentId) {
  const map = {};
  let length = arr.length
  for (let i = 0; i < length; i++) {
    let item = arr[i]
    map[item[key]] = arr[i]
    map[item[key]].children = [];
  }

  for (let i = 0; i < length; i++) {
    let item = arr[i];
    if (item[parentIdKey] !== undefined) {
      map[item[parentIdKey]].children.push(item)
    }
  }

  return {
    ...map[parentId]
  };
}

export const tree = getTree(arr, 'id', 'parentId', 0);