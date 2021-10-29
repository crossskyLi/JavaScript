//有下列一个数据， 根据id，查询树状结构的数据，找到对应id的路径，数据中id不会重复。

const list = [
  {
    id: 'ab',
    children: [
      {
        id: 'cd',
        children: [
          {
            id: 'ef',
            children: [],
          },
        ],
      },
      {
        id: 'cd2',
        children: [
          {
            id: 'e3f',
            children: [],
          },
        ],
      },
    ],
  },
];

const run = (list, id) => {
  let flag = false;
  const path = [];
  const find = (list, parent) => {
    for (let i = 0; i < list.length; i++) {
      let obj = list[i];
      obj.parent = parent || null;
      if (obj.id === id || flag) {
        flag = true;
        path.unshift(obj.id);
        while (obj.parent) {
          path.unshift(obj.parent.id);
          obj = obj.parent;
        }
        return path;
      }
      if (obj.children && obj.children.length) {
        find(obj.children, obj);
      }
    }
  };

  find(list);
  return path;
};
const result = run(list, 'e3f');
console.log(result);

const list1 = [
  {
    id: 'ab',
    children: [
      {
        id: 'cd',
        children: [
          {
            id: 'ef',
            children: [],
          },
          {
            id: 'e22f',
            children: [],
          },
        ],
      },
      {
        id: 'cd2',
        children: [
          {
            id: 'e3f',
            children: [],
          },
        ],
      },
    ],
  },
];
const run1 = (list, id) => {
  let flag = false;
  const path = [];
  const find = (list, index) => {
    const obj = list[index];
    path.push(obj.id);
    if (obj.id === id) {
      return path;
    } else {
      path.pop();
    }
    if (list[index].children && list[index].children.length) {
      find(list[index].children, 0);
    } else {
      find(list[index++], 0);
    }
  };

  find(list, 0);
  return path;
};
const result1 = run1(list1, 'e22f');
