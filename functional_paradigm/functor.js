const Maybe = function (v) {
  this.__value = v
}

Maybe.of = function (x) {
  return new Maybe(x)
}

Maybe.prototype.isNothing = function () {
  return (this.__value === undefined || this.__value === null);
}

Maybe.prototype.map = function(f){
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value))
}


export default Maybe;