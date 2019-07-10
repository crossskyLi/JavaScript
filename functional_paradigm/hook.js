export const hook = (vm, target, func) => {
  const _hookTarget = vm[target];
  const hookFunc = (...args) => {
    func(...args);
    return _hookTarget.apply(vm, args)
  }
  vm[target] = hookFunc;
}

export function doSomething(...args) {
  console.log("my hook", args)
}

const foo = {
  bar(...args) {
    console.log('bar', args)
  }
}
hook(foo, 'bar', doSomething);
let params = new Array(40000).fill({ a: 1 })
foo.bar(...params)