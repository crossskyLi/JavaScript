// // 注意: 题目有四道, 请认真仔细读题,
// //      如果有不理解的地方, 请联系 HR 或面试官,
// //      如果有不会的, 请留空, 不要求做完, 不要盲目答题.
// // 注意: 可以使用任意版本的 ECMAScript 提供的标准 API, 不允许使用历史遗留的非标准或被弃用的 API.

// declare const require: any;

// /**
//  * Q1: 对象浅拷贝, 需要保留原型链
//  *
//  * @param src 需要被拷贝的对象, 不需要考虑内部类, 如 Date, Array, Map 等
//  * @return {T} 返回拷贝结果
//  */
function shallowCopy<T>(src: T): T {
	// 首先通过Object.create()方法创建一个新对象，并将原对象的原型链复制到新对象上
	let newObj = Object.create(Object.getPrototypeOf(src));

	// 然后使用Object.assign()方法将原对象的属性和方法浅拷贝到新对象上
	return Object.assign(newObj, src);
}

// /**
//  * Q2: 加权随机函数生成器
//  *
//  * 给定一个正整数数组 input, 返回一个随机函数,
//  * 该函数被调用时, 随机返回一个该数组的下标, 下标 i 被返回的概率为该下标对应的元素的值 / 所有元素之和.
//  *
//  * 要求: 返回的随机函数的时间复杂度不超过 O(log(N))
//  */
function createWeightedRandom(input: number[]): () => number {
	const n: number = input.length;
	const sum = input.reduce((acc, cur) => acc + cur, 0);
	const prob = input.map(val => val / sum);

	const alias: number[] = new Array(n);
	const probScaled: number[] = new Array(n);
	const small: number[] = [];
	const large: number[] = [];

	for (let i = 0; i < n; i++) {
		probScaled[i] = prob[i] * n;
		if (probScaled[i] < 1) {
			small.push(i);
		} else {
			large.push(i);
		}
	}

	while (small.length && large.length) {
		const s: number = small.pop() || 0;
		const l: number = large.pop() || 0;

		alias[s] = l;
		probScaled[l] -= 1 - probScaled[s];

		if (probScaled[l] < 1) {
			small.push(l);
		} else {
			large.push(l);
		}
	}

	while (large.length) {
		const l: number = large.pop() || 0;
		probScaled[l] = 1;
	}

	while (small.length) {
		const s = small.pop() || 0;
		probScaled[s] = 1;
	}

	return function () {
		const i = Math.floor(Math.random() * n);
		return Math.random() < probScaled[i] ? i : alias[i];
	};
}

/**
 * Q3: Function Currying
 *
 * In mathematics and computer science, currying is the technique of converting a function
 * that takes multiple arguments into a sequence of functions that each takes a single argument.
 * For example, currying transform can make f(a,b,c) callable as f(a)(b)(c).
 *
 * Here, we define a curry function which takes multi arguments,
 * the first argument is the function(fn) that needs to be called finally,
 * the rest arguments are curried already.
 *
 * If the number of all curried arguments is equal to or more than the number of the arguments of the original fn,
 * the called result should be returned, otherwise it will
 * return a new function which accept the rest arguments just like the demo.
 *
 * Please refer to the test cases to determine the return value type and parameter list.
 */
function curry(fn, ...args) {
	const arity = fn.length;
	const curried = (...newArgs) => {
		const allArgs = args.concat(newArgs);
		if (allArgs.length >= arity) {
			return fn(...allArgs);
		} else {
			return curry(fn, ...allArgs);
		}
	};
	return curried;
};

/**
 * Q4: 异步并发控制器
 *
 * 该函数返回一个执行函数(executor), 该执行函数接收一个异步任务函数(task),
 * executor 被调用时, 会根据 capacity 来执行 task: 如果正在执行的异步任务数不超过 capacity,
 * 则立即执行, 否则会等到任意一个正在执行的 task 结束后再执行. 并返回值为 task 的返回值的 Promise.
 */

type Queue = () => Promise<void>

function asyncConcurrenceController(capacity) {
	let runningCount = 0;
	const queue: Queue[] = [];

	async function executor(task) {
		if (runningCount < capacity) {
			runningCount++;
			try {
				const result = await task();
				runningCount--;
				if (queue.length > 0) {
					const nextTask = queue.shift();
					executor(nextTask);
				}
				return result;
			} catch (error) {
				runningCount--;
				throw error;
			}
		} else {
			return new Promise((resolve, reject) => {
				queue.push(async () => {
					try {
						const result = await task();
						resolve(result);
					} catch (error) {
						reject(error);
					}
				});
			});
		}
	}

	return executor;
}

// 定义一个异步任务函数，它会在一定的时间后返回一个随机数
async function generateRandomNum() {
	const delay = Math.floor(Math.random() * 3000);
	await new Promise(resolve => setTimeout(resolve, delay));
	const randomNum = Math.floor(Math.random() * 100);
	console.log(`Generated random num: ${randomNum} (delay ${delay} ms)`);
	return randomNum;
}

// 创建一个并发控制器，限制最多同时执行 2 个任务
const control = asyncConcurrenceController(2);

// 依次执行 6 个异步任务，观察输出顺序
control(generateRandomNum)
	.then(result => console.log(result));
control(generateRandomNum)
	.then(result => console.log(result));
control(generateRandomNum)
	.then(result => console.log(result));
control(generateRandomNum)
	.then(result => console.log(result));
control(generateRandomNum)
	.then(result => console.log(result));
control(generateRandomNum)
	.then(result => console.log(result));


function testCreateWeightedRandom(createWeightedRandomImpl: typeof createWeightedRandom) {
	const assert = require("assert");

	const input: number[] = [4, 5, 2, 3, 2];
	// ts-error
	const counts: number[] = Array(input.length).fill(0);

	const random = createWeightedRandomImpl(input);

	assert.strictEqual(typeof random, "function");
	for (let i = 0; i < 10000; i++) {
		const v = random();
		assert.ok(typeof v === "number" && v < input.length && v > -1 && (v | 0) === v, `invalid random value: ${JSON.stringify(v)}`);
		counts[v]++;
	}
	const sum = input.reduce((v, c) => v + c, 0);
	for (let i = 0; i < input.length; i++) {
		const expected = input[i] / sum;
		const real = counts[i] / 10000;
		// 误差不超过 0.01
		assert.ok(Math.abs(expected - real) < 0.01, `invalid weight ${real} for ${i}, expected is ${expected}`);
	}
}
// 	Generated random num: 9(delay 1012 ms)
// Generated random num: 43(delay 1276 ms)
// Generated random num: 73(delay 2101 ms)
// 9
// 43
// Generated random num: 40(delay 1247 ms)
// Generated random num: 82(delay 2205 ms)
// 73
// 40
// Generated random num: 26(delay 2123 ms)
// 82
// 26

// /* ----------------- 以下是测试用例 -----------------*/

// function testShallowCopy(shallowCopyImpl: typeof shallowCopy) {
//   const assert = require('assert');

//   class UserModel {
//     constructor(public firstName, public lastName) {
//       assert.strictEqual(typeof firstName, 'string');
//       assert.strictEqual(typeof lastName, 'string');
//     }

//     public fullName() {
//       return this.firstName + ' ' + this.lastName;
//     }
//   }

//   const src = new UserModel('Tony', 'Jaa');
//   const dst = shallowCopyImpl(src);

//   assert.deepStrictEqual(dst, src);
//   assert.notStrictEqual(dst, src);
//   assert.strictEqual(dst.fullName(), src.fullName());
// }

// function testCreateWeightedRandom(createWeightedRandomImpl: typeof createWeightedRandom) {
//   const assert = require('assert');

//   const input: number[] = [4, 5, 2, 3, 2];
//   const counts = Array(input.length).fill(0);

//   const random = createWeightedRandomImpl(input);

//   assert.strictEqual(typeof random, 'function');
//   for (let i = 0; i < 10000; i++) {
//     const v = random();
//     assert.ok(
//       typeof v === 'number' && v < input.length && v > -1 && (v | 0) === v,
//       `invalid random value: ${JSON.stringify(v)}`,
//     );
//     counts[v]++;
//   }
//   const sum = input.reduce((v, c) => v + c, 0);
//   for (let i = 0; i < input.length; i++) {
//     const expected = input[i] / sum;
//     const real = counts[i] / 10000;
//     // 误差不超过 0.01
//     assert.ok(Math.abs(expected - real) < 0.01, `invalid weight ${real} for ${i}, expected is ${expected}`);
//   }
// }

// function testCurry(curryImpl: typeof curry) {
//   const assert = require('assert');

//   function makeArray5(a, b, c, d, e) {
//     return [a, b, c, d, e];
//   }

//   let curriedMakeArray5 = curryImpl(makeArray5, 1, 2, 3, 4, 5);
//   assert.deepStrictEqual(curriedMakeArray5, [1, 2, 3, 4, 5]);

//   curriedMakeArray5 = curryImpl(makeArray5, 1);

//   assert.deepStrictEqual(curriedMakeArray5(2, 3, 4, 5), [1, 2, 3, 4, 5]);
//   assert.deepStrictEqual(curriedMakeArray5(2)(3, 4, 5), [1, 2, 3, 4, 5]);
//   assert.deepStrictEqual(curriedMakeArray5(2)(3)(4, 5), [1, 2, 3, 4, 5]);
//   assert.deepStrictEqual(curriedMakeArray5(2)(3)(4)(5), [1, 2, 3, 4, 5]);
// }

// function testCreateAsyncWorker(createParallelTaskExecutorImpl: typeof createAsyncWorker) {
//   const assert = require('assert');

//   const executor = createParallelTaskExecutorImpl(2);

//   const runTask = (id: number, delay: number, expectedDelay: number, fail: boolean) => {
//     const start = Date.now();
//     const check = (rejected: boolean) => (v: number) => {
//       assert.strictEqual(rejected, fail, `promise status of task ${id} should be ${fail}, received ${rejected}`);
//       const realDelay = Date.now() - start;
//       assert.strictEqual(
//         Math.round(realDelay / 100) * 100,
//         expectedDelay,
//         `delay of task ${id} should be ${expectedDelay}, received ${realDelay}`,
//       );
//       assert.strictEqual(
//         v,
//         delay,
//         `${rejected ? 'error of rejected' : 'result of resolved'} task ${id} should be ${delay}, received ${v}`,
//       );
//     };
//     executor(
//       () =>
//         new Promise<number>((resolve, reject) => {
//           setTimeout(() => {
//             if (fail) {
//               reject(delay);
//             } else {
//               resolve(delay);
//             }
//           }, delay);
//         }),
//     )
//       .then(check(false), check(true))
//       .catch((e) => {
//         console.error(e);
//       });
//   };

//   runTask(1, 100, 100, false);
//   runTask(2, 200, 200, true);
//   runTask(3, 300, 400, false);
//   runTask(4, 400, 600, true);
//   runTask(5, 100, 500, false);
//   runTask(6, 200, 700, true);
//   runTask(7, 100, 700, false);
//   runTask(8, 200, 900, false);
// }

// try {
//   testShallowCopy(shallowCopy);
// } catch (error) {
//   console.error(error);
// }
// try {
//   testCreateWeightedRandom(createWeightedRandom);
// } catch (error) {
//   console.error(error);
// }
// try {
//   testCurry(curry);
// } catch (error) {
//   console.error(error);
// }
// try {
//   testCreateAsyncWorker(createAsyncWorker);
// } catch (error) {
//   console.error(error);
// }
