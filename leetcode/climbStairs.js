
/* n 层的楼梯 ,可以一次跨一步,也可以一次跨两步,有多少种走法 */

/* 

动态规划
  最优子结构, 边界, 状态转移方程
*/
/* 
爬 到最后一步有两种可能
爬到了第8层或者第九层 ,那么 最后一次的结果取决与P(8) P(9)
 */

/* 递归 */
/* 时间复杂度 O (2 ^ n) */
// 类似一颗二叉树
// let i = 0;
// function climb(n) {
//   i++
//   console.log(i)
//   if (n <= 1) return n;
//   if (n === 2) return 2
//   // F(n) = F(n-1)+F(n-2)（n>=3)
//   return climb(n - 1) + climb(n - 2)
// }
// console.log('climb(10)', i, climb(10))


/* 拿一个map 存已经算过的数字  时间空间复杂度都是O(n)*/
// i = 0;
// function climb(n, store) {
//   i++
//   console.log(i)
//   if (n <= 1) return n;
//   if (n === 2) return 2
//   // F(n) = F(n-1)+F(n-2)（n>=3)
//   if (store[n]) {
//     return store[n]
//   } else {
//     let value = climb(n - 1, store) + climb(n - 2, store)
//     store[n] = value
//     return value
//   }
// }
// let store = {}
// console.log('climb(10)', i, climb(10, store))


/* 不要递归呢  p(n) = p(n - 1 ) + p(n - 2) */
// 没有空间复杂度 O(1) , 时间复杂度 O(n - 2)
// 其实简化后, 后一个结果就等于前两个结果之和
function climb(n) {
  /* 边界 */
  if (n <= 1) return n;
  if (n === 2) return 2;
  let a = 1; // 目标数前面第二个数字
  let b = 2; // 目标数前面第一个数字
  let temp = 0;

  for (let i = 3; i <= n; i++) {

    temp = a + b; // 等于前两者的和
    a = b // 把目标数前面第一个数字赋值给前面第二个数字
    b = temp;// 把当前的结果赋值给前面第一个数字
  }
  return temp;
}
// console.log('climb(10)', ii, climb(10))

/*
动态规划
  最优子结构 P(n) = P(n-1) + P(n-2), 边界 n = 1 n = 2, 状态转移方程
*/

/* 挖矿问题 */

/* 5 个金矿，共有10 个工人 每个金矿存量不同， 需要参与的工人不同 */

// 金矿
// 500k / 5人 
// 200k / 3人 
// 300k / 4人 
// 350k / 3人 
// 400k / 5人 


// 金矿黄金存储数组
// F(5,10) = Max(F(4,10), F(4, 10 - P[4](减去要去挖的金矿的人数) + G[4] // 剩余去挖的金矿金量)

// 边界
// 只有一座金矿, 或者只有一座金矿人数不够去挖金矿
let arr = [
  { gold: 400, man: 5 },
  { gold: 450, man: 5 },
  { gold: 500, man: 3 },
  { gold: 300, man: 4 },
  { gold: 350, man: 3 },
]
let n = 5 // 金矿数量
let w = 10 // 工人数量
let G = arr.map(a => a.gold) // 金矿量数组
let P = arr.map(a => a.man) // 金矿的用工量
console.log(G, P)

// F(n,w) = 0    (n<=1, w<p[0]);
// F(n,w) = g[0]     (n==1, w>=p[0]);
// F(n,w) = F(n-1,w)    (n>1, w<p[n-1])
// F(n,w) = max(F(n-1,w),  F(n-1,w-p[n-1])+g[n-1])    (n>1, w>=p[n-1])

function solution(n/* 金矿数量 */, w,/*  工人数量 */ G,/* 金矿量数组 */ P/* 金矿的用工量 */) {
  let preResult = new Array(w).fill(0);
  let results = new Array(w).fill(0);

  // 填充边界格子的值
  for (let i = 0; i < w; i++) {
    if (i < P[0] - 1) {
      preResult[i] = 0
    } else {
      preResult[i] = G[0]
    }
  }

  for (let i = 0; i < n; i++) {
    results = new Array(w).fill(0);
    for (let j = 0; j < w; j++) {
      if (j < P[i]) {
        results[j] = preResult[j]
      } else {
        results[j] = Math.max(preResult[j], preResult[j - P[i]] + G[i])
      }
    }
    console.log(results)
    preResult = [...results]
  }
  return results[w - 1]
}

console.log(solution(n, w, G, P))

// const maxSum = arr => {
//   const size = arr.length;
//   if (size <= 0) return 0;
//   else if (size == 1) return arr[0];

//   let excludeLast = 0,
//     includeLast = arr[0];
//   let excludeTemp;
//   for (let i = 1; i < size; i++) {
//     excludeTemp = excludeLast > includeLast ? excludeLast : includeLast;
//     includeLast = excludeLast + arr[i];
//     excludeLast = excludeTemp;
//   }
//   return includeLast > excludeLast ? includeLast : excludeLast;
// };


function maxSum(arr) {
  let store = [];
  store[0] = arr[0];
  store[1] = Math.max(arr[0], arr[1]);

  for (let i = 2; i < arr.length; i++) {
    let a = store[i - 2] + arr[i];
    let b = store[i - 1];
    store[i] = Math.max(a, b);
  }
  return store[arr.length - 1];
}

console.log(maxSum([15, 2, 11, 8, 26]));
