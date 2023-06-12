'use strict';
var request = require('request');

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key

var url =
  'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=60min&apikey=V0TWB6XPNPC84X5Q';

// request.get(
//   {
//     url: url,
//     json: true,
//     headers: { 'User-Agent': 'request' },
//   },
//   (err, res, data) => {
//     if (err) {
//       console.log('Error:', err);
//     } else if (res.statusCode !== 200) {


//       console.log('Status:', res.statusCode);
//     } else {
//       // data is successfully parsed as a JSON object:
//       console.log(data);
//     }
//   },
// );


function isSubset(A, B) {
  let aIndex = 0; // 初始化指向数组A的指针
  let bIndex = 0; // 初始化指向数组B的指针
  while (aIndex < A.length && bIndex < B.length) { 
    if (A[aIndex] > B[bIndex]) { // 如果A的元素值大于B的元素值，数组B指针往后
      bIndex++;
    } else if (A[aIndex] === B[bIndex]) { // 如果A的元素值等于B的元素值，则说明A中有一个值在B中
      aIndex++;
      bIndex++;
    } else { // 如果A的元素值小于B的元素值，则说明A中剩下的元素都不会在B中出现
      return false;
    }
  }
  // 如果A中所有元素都在B中出现，则说明A是B的子集
	// 如果后面A的元素没机会遍历到，则A不是B的子集
  return aIndex === A.length;
}


const A = [2,8,9,10]
const B = [1,2,8,9]

const result = isSubset(A, B)
console.log(result)