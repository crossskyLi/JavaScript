const template = `姓名:{{name}} 年龄:{{age}} 性别:{{sex}}`
const data = {
  name: "张三",
  age: 23,
  sex: '男'
}


export function render(template, data) {
  let _template = template;
  const reg = /\{\{(\w+)\}\}/g
  // while (reg.test(_template)) {
  _template = _template.replace(reg, (...args) => {
    const key = args[1]
    return data[key.trim()];
  })
  // }
  return _template
}

const result = render(template, data);
// console.log(result)