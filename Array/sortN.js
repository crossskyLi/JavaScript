(function () {
    // 计算N个数中 ，两两组合大于目标数字有多少个组合
    const initArr = [];
    const length = 1000;
    const targetNumber = 100;

    let i = 0;
    while (i < length) {
        const number = parseInt(200 * Math.random(), 10);
        initArr.push(number);
        i += 1
    }

    let arrLength = initArr.length;
    const greaterTargetArr = [];
    let halfGreaterTargetArr = [];
    let lowerThenHalfTargetArr = [];

    for (i = 0; i < arrLength; i += 1) {
        if (initArr[i] >= targetNumber) {
            greaterTargetArr.push(initArr[i]);
        } else if (initArr[i] < targetNumber && initArr[i] >= targetNumber / 2) {
            halfGreaterTargetArr.push(initArr[i]);
        } else if (initArr[i] < targetNumber / 2) {
            lowerThenHalfTargetArr.push(initArr[i]);
        }
    }

    function sort(a, b) {
        return b - a;
    }
    // 这里可以用其他快排
    lowerThenHalfTargetArr = lowerThenHalfTargetArr.sort(sort)
    halfGreaterTargetArr = halfGreaterTargetArr.sort(sort)

    // 大于target的数组自我组合
    let greaterThenTargetCombinationTotal = 1;
    i = greaterTargetArr.length - 1;
    if (i) {
        while (i > 0) {
            console.log(greaterThenTargetCombinationTotal, i)
            greaterThenTargetCombinationTotal = greaterThenTargetCombinationTotal + i;
            i -= 1;
        }
    } else {
        greaterThenTargetCombinationTotal = 0;
    }

    // console.log(initArr)
    console.log(greaterTargetArr)
    // console.log(halfGreaterTargetArr)
    // console.log(lowerThenHalfTargetArr)
    console.log(greaterThenTargetCombinationTotal)

})();