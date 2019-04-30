(function () {

  /* method overloading */
  function addMethod(object, name, func) {
    /* old will be cached  => Closure */
    var old = object[name];
    if (old) { old._name = func.name };
    console.log("overLoading", func.name, "-------------------------")
    object[name] = function () {
      /* length 属性指明函数的形参个数。 */
      /* Compare the length of attribute of the function with the length of arguments */
      if (func.length === arguments.length) {
        console.log("fire the target function params", Array.from(arguments))
        /* 形参与实际参数的长度相等 */
        /* Use the apply call to bind the context  */
        return func.apply(this, arguments)
      } else if (typeof old === "function") {
        console.log("old's name", old._name)
        console.log("Previous function", Array.from(arguments))
        /* 一直回退找目标函数 */
        /* Use the apply call to bind the context  */
        return old.apply(this, arguments)
      }
    }
  }

  function find0() {
    return this.names;
  }

  function find1(firstName) {
    return this.names.filter(name => name.indexOf(firstName) === 0);
  }

  function find2(firstName, lastName) {
    return this.names.filter(name => name === `${firstName} ${lastName}`);
  }

  var people = {
    names: ["Dean Edwards", "Alex Russell", "Dean Tom"]
  };

  console.log("_______________ overloading start ________________")
  addMethod(people, "find", find0);
  addMethod(people, "find", find1);
  addMethod(people, "find", find2);
  console.log("_______________ overloading end ________________")

  console.log(people.find()); // output ["Dean Edwards", "Alex Russell", "Dean Tom"]
  console.log(people.find("Dean")); // output ["Dean Edwards", "Dean Tom"]
  console.log(people.find("Dean", "Edwards")); // output ["Dean Edwards"]

  console.log("_______________ the length of function start ________________")
  console.log(Function.length); /* 1 */

  console.log((function () { }).length); /* 0 */
  console.log((function (a) { }).length); /* 1 */
  console.log((function (a, b) { }).length); /* 2 etc. */

  console.log((function (...args) { }).length);
  // 0, rest parameter is not counted

  console.log((function (a, b = 1, c) { }).length);
  // 1, only parameters before the first one with a default value is counted
  console.log("_______________ the length of function end ________________")

})()