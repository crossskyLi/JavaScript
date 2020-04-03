/* 重点 */
function inheritPrototype(subType, superType) {
  var prototype = new Object(superType.prototype) // 创建对象
  prototype.constructor = subType; // 增强对象
  subType.prototype = prototype // 指定对象
}

function superType(name) {
  this.name = name
}

superType.prototype.sayName = function (name) {
  console.log(name);
}

function subType(name, color) {
  superType.call(this, name)/* 重点 */
  this.color = color;
}

inheritPrototype(subType, superType)

subType.prototype.changeColor = function (color) {
  this.color = color
}

let abc = new subType('qqwe', "red");
console.log(abc)
console.log(abc instanceof subType)
console.log(abc instanceof superType)
console.log(superType.prototype === abc.__proto__);
console.log(superType.prototype, abc.__proto__);