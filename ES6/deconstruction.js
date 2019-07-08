function test() {
  /**
   *
   *  变量的解构赋值
   *
   * */
  /*-----------------------------  变量的解构赋值  ----------------------------------------*/
  //模式匹配写法;

  var b = [];
  var c = 5;
  let arr = [a, [b], c] = [1, [2], 3];// 对 b 加了方括号,则模式不匹配,b会被重新赋值,更改类型;
  // let arr = [a, b, c] = [1, [2], {}]; // 不加方括号,则模式匹配,b会被重新赋值,但类型不变;
  console.log(a);
  console.log(b);
  console.log(c);
  var b = 10;
  console.log(arr);
  console.log(Array.isArray(b));//加了方括号 false, 不加方括号 true

  let [, , third] = ["foo", "bar", "baz"];

  //解构数组
  let [head, ...tail] = [1, 2, 3, 4]; // "baz"
  console.log(head);
  console.log(tail);

  let [x, y, ...z] = ['a'];
  console.log(x, y, z);
  x // "a"
  y // undefined
  z // []
  //如果解构不成功，变量的值就等于undefined。


  //如果等号的右边不是数组或者严格地说，不是可遍历的结构，那么将会报错。
  // 报错
  let [foo] = 1;
  // let [foo] = false;
  // let [foo] = NaN;
  // let [foo] = undefined;
  // let [foo] = null;
  // let [foo] = {};
}
