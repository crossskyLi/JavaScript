
function bind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}
/* MDN Full functional support */
export function bindPloyfill() {
  if (!Function.prototype.bind) {
    Function.prototype.bind = function (oThis) {
      if (typeof this !== 'function') {
        // closest thing possible to the ECMAScript 5
        // internal IsCallable function
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
      }
      var aArgs = Array.prototype.slice.call(arguments, 1),
        fToBind = this,
        fNOP = function () { },
        fBound = function () {
          // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
          return fToBind.apply(this instanceof fBound
            ? this
            : oThis,
            // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
            aArgs.concat(Array.prototype.slice.call(arguments)));
        };

      // 维护原型关系
      if (this.prototype) {
        // Function.prototype doesn't have a prototype property
        fNOP.prototype = this.prototype;
      }
      // 下行的代码使fBound.prototype是fNOP的实例,因此
      // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
      fBound.prototype = new fNOP();

      return fBound;
    };
  }
}

/* my pratice */
function myBind() {
  Function.prototype.bind = function (tarThis) {
    if (typeof tarThis !== 'function') {
      // closest thing possible to the ECMAScript 5
      // internal IsCallable function
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable')
    }
    var args = Array.prototype.slice.call(arguments, 1);
    var fNOP = function () { };
    var fToBind = this;

    var fBound = function () {
      // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
      const _this = this instanceof fBound ? this : tarThis;
      // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
      const _thisArgs = args.concat(Array.prototype.slice.call(arguments));

      return fToBind.apply(_this, _thisArgs)
    }
    // 维护原型关系
    if (this.prototype) {
      // Function.prototype doesn't have a prototype property
      fNOP.prototype = this.prototype;
    }
    // 下行的代码使fBound.prototype是fNOP的实例,因此
    // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
    fBound.prototype = new fNOP();
    return fBound;
  }
}


function testBindPloyfill() {
  bindPloyfill(true)
  function makeFullname(lastName) {
    this.name = `${this.firstName} ${lastName}`
  }
  function Person(firstName, lastName) {
    constructor: {
      this.name = '';
      this.firstName = firstName;
    }
    let _makeFullname = makeFullname.bind(this);
    _makeFullname(lastName)
  }
  let someone = new Person('James', 'Rambo');
}
testBindPloyfill()