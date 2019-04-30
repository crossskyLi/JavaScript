(function () {
    let arr = [
        [1, 44, 44,
            [
                123,
                [
                    '123',
                    {a: '213'},
                    454
                ],
                323
            ]
        ],
        [12313, 123,
            [
                213, 332,
                [123, 23]
            ]
        ]
    ];
    let result = [];
    checkAndPush(arr, result);
    console.log(result)
})();

function checkAndPush(arr, result) {
    arr.forEach(function (item) {
        if (typeof item === 'object' && item instanceof Array) {
            return checkAndPush(item, result); // 如果元素是原型是数组,并且是一个type 为object
        } else {
            result.push(item)
        }
    });
    return result;
}