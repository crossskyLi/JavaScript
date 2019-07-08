function test() {
  let construtors = [
    arguments,
    Array,
    Boolean,
    Date,
    Error,
    Map,
    Number,
    Object,
    RegExp,
    Set,
    String,
    Symbol,
    WeakMap,
    ArrayBuffer,
    DataView,
    Float32Array,
    Float64Array,
    Int8Array,
    Int16Array,
    Int32Array,
    Uint8Array,
    Uint8ClampedArray,
    Uint16Array,
    Uint32Array,
  ]
  function getTag(source) {
    return Object.prototype.toString.call(source)
  }
  function mapArray(arr, handle) {
    let result = [];
    let length = arr.length;
    let handleResult;
    while (length--) {
      handleResult = handle(arr[length])
      if (!handleResult) {
        continue;
      }
      result.unshift(handleResult)
    }
    return result;
  }
  const handle = (target) => {
    let result;

    try {
      if (typeof target === "function" && /Symbol/g.test(target.toString())) { // Symbol
        return getTag(target());

      }
      if (typeof target === "object" && typeof target.callee === "function") { // arguments
        return getTag(target)
      }
      result = getTag(new target())// else
    } catch (error) {
      result = getTag(new target(new ArrayBuffer()));// DataView
    }
    return result;
  };
  let result = mapArray(construtors, handle)
  console.log(result);
}

test();