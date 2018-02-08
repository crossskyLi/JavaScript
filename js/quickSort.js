/**
 *
 *
 * 快速排序
 *
 * */
// 生成一个有十个随机数字的数组
function makeRandomArr() {
    let arr = [];
    let random = 0;
    let fixedNum = 0;
    for (let i = 0; i < 10; i++) {
        random = 10 * Math.random();
        fixedNum = parseInt(random) + 1;
        arr.push(fixedNum)
    }
    return arr;
}

let times = 0;
// 阮 快速排序
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (let i = 0; i < arr.length; i++) {
        times++;
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]; // 最不理想排序数组 -- 次数19次
// let arr = makeRandomArr();  // 定值的但无序的, 21次
console.time('阮-Time');
let result = quickSort(arr);
console.log('阮-运算次数', times);
console.log('阮-运算结果', result);
console.timeEnd('阮-Time'); // 阮,时间 3-5ms

let bubbleTime = 0;
// 我的冒泡排序
function bubbleSort(arr) {
    let result = arr.slice(0);
    let length = result.length;
    for (let i = 0; i < length; i++) {
        let nextLength = length - i;
        let j = 1;
        while (j < nextLength) {
            let first = result[j - 1];
            let second = result[j];
            if (first > second) {
                result[j] = first;
                result[j - 1] = second;
            }
            bubbleTime++;
            j++;
        }
    }
    return result;
}
console.time('bubble-Time');
let bubbleArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let bubbleResult = bubbleSort(bubbleArr);
console.log('bubbleTime 运算次数:',bubbleTime);
console.log('bubbleResult 运算结果: ',bubbleResult);
console.timeEnd('bubble-Time');

// wiki 快速排序
let wikiTimes = 0;

function wikiQuickSort(array) {

    // 交换元素位置
    function swap(array, i, k) {
        let temp = array[i];
        array[i] = array[k];
        array[k] = temp;
    }

    // 数组分区，左小右大
    function partition(array, left, right) { // 遍历 (数组长度减一) 次
        let storeIndex = left;
        let pivot = array[right]; // 直接选最右边的元素为基准元素
        for (let i = left; i < right; i++) {
            wikiTimes++; // 运算次数计算
            if (array[i] < pivot) {
                swap(array, storeIndex, i);
                storeIndex++; // 交换位置后，storeIndex 自增 1，代表下一个可能要交换的位置
            }
        }
        swap(array, right, storeIndex); // 将基准元素放置到最后的正确位置上
        // console.log('分区完成', storeIndex, array);
        return storeIndex;
    }

    // 排序递归
    function sort(array, left, right) {
        if (left >= right) {
            return;
        }
        let storeIndex = partition(array, left, right);
        sort(array, left, storeIndex - 1);
        sort(array, storeIndex + 1, right);
    }

    sort(array, 0, array.length - 1);

    return array;
}

let wikiArr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]; // 45次 ,最不理想排序数组 -- 次数
// let wikiArr = [3, 7, 8, 5, 2, 1, 9, 5, 4]; // 随机的数字, 19次
console.time('wikiTime');
// let wikiArr = makeRandomArr(); // 随机数字数组
let wikiResult = wikiQuickSort(wikiArr);
console.log('wiki运算次数', wikiTimes);
console.log('wiki运算结果', wikiResult);
console.timeEnd('wikiTime');//wiki,时间 0-1.5ms 采用wiki