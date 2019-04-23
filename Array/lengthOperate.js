export function lengthOperate() {
  // 这在es6 报错
  // var arr = [];
  // Object.defineProperties(arr, "length", { writable: false })
  // arr.push(0)

  var arr = [];
  const pushArrLength = arr.push("test");
  console.log('arr', arr);// 改变原来数组
  console.log('pushArrLength', pushArrLength); // 返回的是length
  const pop = arr.pop(0);
  console.log("pop", pop); // 返回的是 pop 出来的元素
  console.log("arr", arr); // 改变原来数组

  let unshiftArrLength = arr.unshift(1);
  console.log('arr', arr);// 改变原来数组
  console.log('unshiftArrLength', unshiftArrLength); // 返回的是length

  let shift = arr.shift();
  console.log('shift', shift);// 返回的是 shift 出来的元素
  console.log('arr', arr);// 改变原来数组

}
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