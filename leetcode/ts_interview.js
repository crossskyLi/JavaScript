// // 注意: 题目有四道, 请认真仔细读题,
// //      如果有不理解的地方, 请联系 HR 或面试官,
// //      如果有不会的, 请留空, 不要求做完, 不要盲目答题.
// // 注意: 可以使用任意版本的 ECMAScript 提供的标准 API, 不允许使用历史遗留的非标准或被弃用的 API.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// declare const require: any;
// /**
//  * Q1: 对象浅拷贝, 需要保留原型链
//  *
//  * @param src 需要被拷贝的对象, 不需要考虑内部类, 如 Date, Array, Map 等
//  * @return {T} 返回拷贝结果
//  */
function shallowCopy(src) {
    // 首先通过Object.create()方法创建一个新对象，并将原对象的原型链复制到新对象上
    var newObj = Object.create(Object.getPrototypeOf(src));
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
function createWeightedRandom(input) {
    var n = input.length;
    var sum = input.reduce(function (acc, cur) { return acc + cur; }, 0);
    var prob = input.map(function (val) { return val / sum; });
    var alias = new Array(n);
    var probScaled = new Array(n);
    var small = [];
    var large = [];
    for (var i = 0; i < n; i++) {
        probScaled[i] = prob[i] * n;
        if (probScaled[i] < 1) {
            small.push(i);
        }
        else {
            large.push(i);
        }
    }
    while (small.length && large.length) {
        var s = small.pop() || 0;
        var l = large.pop() || 0;
        alias[s] = l;
        probScaled[l] -= 1 - probScaled[s];
        if (probScaled[l] < 1) {
            small.push(l);
        }
        else {
            large.push(l);
        }
    }
    while (large.length) {
        var l = large.pop() || 0;
        probScaled[l] = 1;
    }
    while (small.length) {
        var s = small.pop() || 0;
        probScaled[s] = 1;
    }
    return function () {
        var i = Math.floor(Math.random() * n);
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
function curry(fn) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var arity = fn.length;
    var curried = function () {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        var allArgs = args.concat(newArgs);
        if (allArgs.length >= arity) {
            return fn.apply(void 0, allArgs);
        }
        else {
            return curry.apply(void 0, __spreadArray([fn], allArgs, false));
        }
    };
    return curried;
}
;
function asyncConcurrenceController(capacity) {
    var runningCount = 0;
    var queue = [];
    function executor(task) {
        return __awaiter(this, void 0, void 0, function () {
            var result, nextTask, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(runningCount < capacity)) return [3 /*break*/, 5];
                        runningCount++;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, task()];
                    case 2:
                        result = _a.sent();
                        runningCount--;
                        if (queue.length > 0) {
                            nextTask = queue.shift();
                            executor(nextTask);
                        }
                        return [2 /*return*/, result];
                    case 3:
                        error_1 = _a.sent();
                        runningCount--;
                        throw error_1;
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, new Promise(function (resolve, reject) {
                            queue.push(function () { return __awaiter(_this, void 0, void 0, function () {
                                var result, error_2;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            _a.trys.push([0, 2, , 3]);
                                            return [4 /*yield*/, task()];
                                        case 1:
                                            result = _a.sent();
                                            resolve(result);
                                            return [3 /*break*/, 3];
                                        case 2:
                                            error_2 = _a.sent();
                                            reject(error_2);
                                            return [3 /*break*/, 3];
                                        case 3: return [2 /*return*/];
                                    }
                                });
                            }); });
                        })];
                    case 6: return [2 /*return*/];
                }
            });
        });
    }
    return executor;
}
// 定义一个异步任务函数，它会在一定的时间后返回一个随机数
function generateRandomNum() {
    return __awaiter(this, void 0, void 0, function () {
        var delay, randomNum;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    delay = Math.floor(Math.random() * 3000);
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, delay); })];
                case 1:
                    _a.sent();
                    randomNum = Math.floor(Math.random() * 100);
                    console.log("Generated random num: ".concat(randomNum, " (delay ").concat(delay, " ms)"));
                    return [2 /*return*/, randomNum];
            }
        });
    });
}
// 创建一个并发控制器，限制最多同时执行 2 个任务
var control = asyncConcurrenceController(2);
// 依次执行 6 个异步任务，观察输出顺序
control(generateRandomNum)
    .then(function (result) { return console.log(result); });
control(generateRandomNum)
    .then(function (result) { return console.log(result); });
control(generateRandomNum)
    .then(function (result) { return console.log(result); });
control(generateRandomNum)
    .then(function (result) { return console.log(result); });
control(generateRandomNum)
    .then(function (result) { return console.log(result); });
control(generateRandomNum)
    .then(function (result) { return console.log(result); });
function testCreateWeightedRandom(createWeightedRandomImpl) {
    var assert = require("assert");
    var input = [4, 5, 2, 3, 2];
    // ts-error
    var counts = Array(input.length).fill(0);
    var random = createWeightedRandomImpl(input);
    assert.strictEqual(typeof random, "function");
    for (var i = 0; i < 10000; i++) {
        var v = random();
        assert.ok(typeof v === "number" && v < input.length && v > -1 && (v | 0) === v, "invalid random value: ".concat(JSON.stringify(v)));
        counts[v]++;
    }
    var sum = input.reduce(function (v, c) { return v + c; }, 0);
    for (var i = 0; i < input.length; i++) {
        var expected = input[i] / sum;
        var real = counts[i] / 10000;
        // 误差不超过 0.01
        assert.ok(Math.abs(expected - real) < 0.01, "invalid weight ".concat(real, " for ").concat(i, ", expected is ").concat(expected));
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
