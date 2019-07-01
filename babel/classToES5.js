"use strict";

function _instanceof(left, right) {
  // ES6 原型检查
  if (
    right != null &&
    typeof Symbol !== "undefined" &&
    right[Symbol.hasInstance]
  ) {
    return right[Symbol.hasInstance](left);
  } else {
    // 之前的原型检查
    return left instanceof right;
  }
}

function _classCallCheck(instance, Constructor) {
  // 原型检测
  if (!_instanceof(instance, Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  // 遍历属性,定义属性
  for (var i = 0; i < props.length; i++) {

    var descriptor = props[i];

    descriptor.enumerable = descriptor.enumerable || false;

    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  /* 原型链集成 */
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  /* 自有属性继承集成 */
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    /* 防止 writable 为false */
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

var A =
  /*#__PURE__*/
  function () {
    function A() {
      _classCallCheck(this, A);

      _defineProperty(this, "c", 2);
    }

    _createClass(A, [{
      key: "construtor",
      value: function construtor() {
        this.a = 22;
      }
    }, {
      key: "foo",
      value: function foo() {
        return this.c;
      }
    }]);

    return A;
  }();