
(() => {
    function defineObj(target, index, maxLength) {
        let next = index + 1
        Object.defineProperty(target, next, {
            set: function () {
               
                if (next > maxLength) {
                    return;
                }
                next = next + 1;
                // defineObj(target, next, maxLength);
                target[next] = next;
            },
            get: function () {
                target[index] = 0
                defineObj(target, next, maxLength);
            },
        })
    }
    let arr = [];
    defineObj(arr, 0, 100);
    console.log(arr[0])
    // 未完待续
})()