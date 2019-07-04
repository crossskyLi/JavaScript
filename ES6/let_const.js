export function letFunc() {
  /**
   *
   *  let 和 const 命令
   *
   * */
  //不存在变量提升,var 提升后,没有赋值,为undefined;
  function foo() {
    let b = 10;
    // var b = 110; // 这里会报错 Identifier 'b' has already been declared
  }
  // foo();


  //--------------暂时性死区-------------------
  //var tmp = 123;
  //存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，
  // 导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。
  // 在代码块内，使用let命令声明变量之前，该变量都是不可用的。
  // 这在语法上，称为“暂时性死区”
  function foo1() {
    if (true) {
      tmp = 'abc'; // ReferenceError
      console.log(tmp)
      let tmp = '11';
      console.log(tmp)
    }
    console.log(tmp)
  }
  // foo1();


  //在let命令声明变量tmp之前，都属于变量tmp的“死区”。
  function foo2() {
    if (true) {
      tmp = true;
      console.log(tmp)
      let tmp = 1;
      console.log(tmp)
    }
  }

  //“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
  // 如果变量未被声明则不会报错,变量会为undefined;
  // 但是如果有let声明,并且存在死区,那么就会跑出ReferenceError
  function foo3() {
    console.log(typeof x);
    let x = 1;
    console.log(y);
  }



  /*-------------------------------------------------------*/
  //----------不允许重复声明

  function foo4() {
    // let a = '12';//不允许
    function a() {
      let a = '12';
      console.log(a)
    }
    console.log(a)
    function b() {
      let a = '12';// Error
      console.log(a)
    };
    // 函数传参也是不允许的
    function c(a) {
      // let a = 111 // Error
    }
    a();
    b();
    c();
  }



  /*-------------------------------------------------------*/
  //-----------------块级作用域-------------------
  function f1() {
    let n = 5;
    //var n = 5;
    //for、if中的 let 声明存在块级作用域结果为5,var则可以取到,就是10
    if (true) {
      let n = 10;
      //var n = 10;
    }
    console.log(n); // 5
  }
  // f1();
}

export function constFunc() {
  //---------------------- const 声明 ----------------------------------

  //const
  // 静态声明,不可改,不可重复声明
  // ,存在暂时死区,
  // 不存在变量提升,
  // 只在声明所在块级作用域内有效
  //const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。
  const f1 = () => {
    const foo = {};
    foo.aa = '123';//可以更改它的属性,它指向的数据结构是不是可变的，就完全不能控制了
    console.log(foo)
    const a = [];
    a.push('Hello'); // 可执行
    a.length = 0;    // 可执行
    // a = ['Dave'];    // 将另外一个数组赋值给 a, 相当于改变指针,就会报错 TypeError
  }
  // f1();



  //--------------冻结对象--------------
  //如果真的想将对象冻结，应该使用Object.freeze方法
  //冻结一个对象
  /* Object.freeze */
  function freezeFunc() {
    const aa = { aa: '123' };
    //const foo = Object.freeze(aa);
    //foo.prop = 123;//常规模式不起作用,但严格模式报错

    //彻底冻结一个对象
    var constantize = (obj) => {
      Object.freeze(obj);
      Object.keys(obj).forEach((key, i) => {
        if (typeof obj[key] === 'object') {
          constantize(obj[key]);
        }
      });
    };
    constantize(aa);
    // aa.bb = 11;// Uncaught TypeError: Cannot add property bb, object is not extensible
    // console.log(aa);
  }

  // freezeFunc();

  //在浏览器环境指的是window对象，在Node指的是global对象
  //ES5 只有两种声明变量的方法：var命令和function命令。
  // ES6除了添加let和const命令，后面章节还会提到，
  // 另外两种声明变量的方法：import命令和class命令。

  //浏览器和 Web Worker 里面，self也指向顶层对象
  /*----------------------------------------------------------------*/

  //  取到顶层对象。下面是两种勉强可以使用的方法。
  function _getGlobal() {
    const first = (typeof window !== 'undefined' ? window : (
      typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object') ? global : this);

    // 方法二
    var getGlobal = function () {
      if (typeof self !== 'undefined') {
        return self;
      }
      if (typeof window !== 'undefined') {
        return window;
      }
      if (typeof global !== 'undefined') {
        return global;
      }
      throw new Error('unable to locate global object');
    };
    console.log(first, getGlobal())
  }
  // _getGlobal();



  // 作用域理解
  function scopeFunc() {
    let a = 123;
    (function () {
      console.log('进来', a);
      function foo() {
        a = 2;
        return a
      }
      let b = foo();
      b++;
      console.log(a, b) //2,3
    })(a);
    a++;
    console.log('外面', a); //3
    // console.log(b, foo); //not defined ReferenceError
  }
  scopeFunc();
  /*---------------------------------------------------------------------*/
}

// letFunc();
// constFunc();