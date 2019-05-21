(() => {
  let result = null;
  let obj = {}
  let num = 0;
  /**
   * 按位取反 ~ 
   */
  num = 1;
  result = ~num; // -2

  num = '1'
  result = ~num;// -2 隐性转换

  num = 0;
  result = ~num;  // 0 => -1

  num = null;
  result = ~num; // null => 0 => -1 隐性转换

  num = '10101';
  result = ~num; // 10101 => -10102  -10102 隐性转换

  /**
   * 左移位 << 
   */
  num = 110100;
  result = num << 1; // 220200

  num = 0;
  result = num << 1;// 0

  num = -1;
  result = num << 1; // -2

  num = -1;
  result = num << 1; // -2

  num = null;
  result = num << 1; // 0

  // 0 和 1 互相取反,涉及隐性转换
  num = 0;
  result = +!num; // 1

  num = 1;
  result = +!num;

  /**
   * 按位与 &
   */
  num = 1;
  result = num & 1; // 1

  num = 0;
  result = num & 1; // 0

  num = 3;
  result = num & 1; // 1

  num = 10;
  result = num & 1; // 0

  num = 3;
  result = num & 0; // 0

  // 取余操作
  num = 11;
  result = num %= 3 // 2 

  // in 和delete
  // num in this; // false
  // this.num = num;
  // num in this; // false

  // delete this.num; // true
})()

/* 找出不大于N的最大的2的幂数 */
let n = 111;
function findN(n) {
  n |= n >> 1;
  n |= n >> 2;
  n |= n >> 4;
  n |= n >> 8;
  n |= n >> 16;
  n |= n >> 32;
  n |= n >> 64;
  return (n + 1) >> 1
}
/* 使用位运算实现 Math.pow */
function pow(num, n) {
  let sum = 1;
  let temp = num;
  while (n != 0) {
    if (n & 1 === 1) {
      sum *= temp
    }
    temp *= temp;
    n = n >> 1;
  }
  return sum;
}

export default {}