function test() {
  function A(name) {
    this.name = name;
  }


  function ObjectFactory() {
    debugger
    var obj = {};
    // 获取第一个参数作为constructor
    var Constructor = Array.prototype.shift.call(arguments);

    obj.__proto__ = typeof Constructor.prototype === 'number' ? Object.prototype : Constructor.prototype;
    // 生成实例
    var ret = Constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;

  }
  let ab = ObjectFactory(RegExp, 'ccc')
  ab = ObjectFactory(A, 'svenzeng');
  ab = ObjectFactory(Array, '123');
  ab = ObjectFactory(Object, '22')
}
// test();
