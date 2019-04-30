
/* _______________ encapsulation ________________ */
export const Encapsulation = (function () {
  function foo(...args) {
    this.count = 0;

    const binding = (func) => {
      return func.bind(this);
    }

    const addCount = binding(function (...argus) {
      argus.length && argus.forEach(i => this.count += i);
    })

    const getCount = binding(function () {
      return this.count;
    })

    args.length && addCount(...args)

    return {
      getCount,
      addCount,
    };
  }

  return foo;
})()
// let result = new Encapsulation(1, 2, 3, 9)
// console.log(result);

// console.log(result.getCount());

// result.addCount(1, 2, 3, 4, 5, 6)
// console.log(result.getCount());



/* --------------------------------------------- */

/* closure 闭包-模块模式 module pattern */
export const Counter = (function () {
  var count = 0;
  const changeCount = (num) => {
    count += num;
    return count;
  }
  return {
    increment(num = 1) {
      return changeCount(num)
    },
    decrement(num = -1) {
      return changeCount(num)
    },
    getCount() {
      return count;
    }
  }
})()
console.log(Counter.decrement());
console.log(Counter.increment());
console.log(Counter.getCount());

