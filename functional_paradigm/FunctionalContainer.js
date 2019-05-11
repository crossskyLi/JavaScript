

const Container = function (value) {
  this.__value = value;
}

Container.of = function (value) {
  return new Container(value);
}

Container.prototype.dispose = function (func) {
  return Container.of(func(this.__value));
}

export default Container;

