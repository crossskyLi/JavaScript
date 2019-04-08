// export function lengthOperate() {
//   console.log(2)
// }
// 使用递归的方式实现循环
export function funtionLoop() {
  function loop(handler, index, maxLength) {
    let i = index + 1;
    handler(i)
    if (i >= maxLength) {
      return;
    } else {
      loop(handler, i, maxLength);
    }
  }
  let arr = [];
  let i = 0;
  let maxLength = 100;
  function handler(index) {
    arr.push(index)
  }
  loop(handler, i, maxLength);
  console.log(arr);
}