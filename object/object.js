(() => {
    var obj = Object.defineProperty({ c: 2 }, "a", {
        value: 12,
        writable: false,
        configurable: true,
        enumerable: true,
        // get(a, b, c) {

        // },
        // set() {
        // console.log(this.a)
        // this.c += 1;
        // this.a = this.c2;
        // }

    })
    Object.defineProperty(obj, 'a', { value: 32 })
    // console.log(obj.a = 12)
    console.log(obj)
    obj.a = 1
    console.log('obj.a', obj.a)
    console.log(obj)

    let getOwnPropertyNames = Object.getOwnPropertyNames({ a: 123 })
    console.log('getOwnPropertyNames', getOwnPropertyNames)

    let Descriptor = Object.getOwnPropertyDescriptor(obj)
    console.log('Descriptor', Descriptor)
})()