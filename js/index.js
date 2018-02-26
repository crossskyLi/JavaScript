$(function () {
//-----搜索unFinish到达未完全学习的地方-----

    //var a  =[];
    //for(var i = 0; i <10;i++){
    //    a[i]= function(){
    //        console.log(i)
    //    }
    //}
    //a[5]();
    // var a  =[];
    //for(let i = 0; i <10;i++){
    //    a[i]= function(){
    //        var test = $('.test')
    //        var html = test.html();
    //        test.html(html+i+b);
    //    };
    //    a[i]();
    //}
    /**
     *
     *  let 和 const 命令
     *
     * */
    //不存在变量提升,var 提升后,没有赋值,为undefined;
    //let b = 10 ;
    //var b = 110;

    //--------------暂时性死区-------------------
    //var tmp = 123;
//存在全局变量tmp，但是块级作用域内let又声明了一个局部变量tmp，
// 导致后者绑定这个块级作用域，所以在let声明变量前，对tmp赋值会报错。
// 在代码块内，使用let命令声明变量之前，该变量都是不可用的。
// 这在语法上，称为“暂时性死区”
//
//    if (true) {
//        tmp = 'abc'; // ReferenceError
//        console.log(tmp)
//        let tmp = '11';
//        console.log(tmp)
//    }
//    console.log(tmp)


    //在let命令声明变量tmp之前，都属于变量tmp的“死区”。
    //if (true){
    //    tmp = true;
    //    console.log(tmp)
    //    let tmp = 1;
    //    console.log(tmp)
    //}
    //“暂时性死区”也意味着typeof不再是一个百分之百安全的操作。
    // 如果变量未被声明则不会报错,变量会为undefined;
    // 但是如果有let声明,并且存在死区,那么就会跑出ReferenceError
    //console.log(typeof x) ;
    //let x= 1;
    //console.log(y);


    /*-------------------------------------------------------*/
    //----------不允许重复声明
    //let a = '12';//不允许
    //function a(){
    //    let a = '12';
    //    console.log(a)
    //}
    //console.log(a)
    //function b(){
    //    let a = '12';
    //    console.log(a)
    //};
    //函数传参也是不允许的
    //function c (a){
    //    let a = 111
    //}
    //a();
    //b();
    //c();


    /*-------------------------------------------------------*/
    //-----------------块级作用域-------------------
    //function f1() {
    //    let n = 5;
    //    //var n = 5;
    //    //for、if中的 let 声明存在块级作用域结果为5,var则可以取到,就是10
    //    if (true) {
    //        let n = 10;
    //        //var n = 10;
    //    }
    //    console.log(n); // 5
    //}
    //f1();


    //---------------------- const 声明 ----------------------------------

    //const
    // 静态声明,不可改,不可重复声明
    // ,存在暂时死区,
    // 不存在变量提升,
    // 只在声明所在块级作用域内有效
    //const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。
    //const foo = {};
    //foo.aa = '123';//可以更改它的属性,它指向的数据结构是不是可变的，就完全不能控制了
    //console.log(foo)
    //const a = [];
    //a.push('Hello'); // 可执行
    //a.length = 0;    // 可执行
    //a = ['Dave'];    // 将另外一个数组赋值给 a, 相当于改变指针,就会报错


    //--------------冻结对象--------------
    //如果真的想将对象冻结，应该使用Object.freeze方法
    //冻结一个对象
    //const aa = {aa:'123'};
    ////const foo = Object.freeze(aa);
    ////foo.prop = 123;//常规模式不起作用,但严格模式报错
    //
    ////彻底冻结一个对象
    //var constantize = (obj) => {
    //    Object.freeze(obj);
    //    Object.keys(obj).forEach( (key, i) => {
    //        if ( typeof obj[key] === 'object' ) {
    //            constantize( obj[key] );
    //        }
    //    });
    //};
    //constantize(aa);
    //aa.bb = 11;
    //console.log(aa);

    //在浏览器环境指的是window对象，在Node指的是global对象
    //ES5 只有两种声明变量的方法：var命令和function命令。
    // ES6除了添加let和const命令，后面章节还会提到，
    // 另外两种声明变量的方法：import命令和class命令。

    //浏览器和 Web Worker 里面，self也指向顶层对象
    /*----------------------------------------------------------------*/

    //  取到顶层对象。下面是两种勉强可以使用的方法。
    // 方法一
    //    var a = (typeof window !== 'undefined' ? window : (typeof process === 'object' && typeof require === 'function' && typeof global === 'object') ? global : this);
    //
    //// 方法二
    //    var getGlobal = function () {
    //        if (typeof self !== 'undefined') {
    //            return self;
    //        }
    //        if (typeof window !== 'undefined') {
    //            return window;
    //        }
    //        if (typeof global !== 'undefined') {
    //            return global;
    //        }
    //        throw new Error('unable to locate global object');
    //    };
    //console.log(a,getGlobal())

    // 作用域理解
    // let a = 123;
    // (function () {
    //     console.log('进来',a);
    //     function foo() {
    //         a = 2;
    //         return a
    //     }
    //     let b = foo();
    //     b++;
    //     console.log(a,b) //2,3
    // })(a);
    // a++;
    // console.log('外面',a); //3
    // console.log(b,foo); //not defined
    /*---------------------------------------------------------------------*/
    /**
     *
     *  变量的解构赋值
     *
     * */
    /*-----------------------------  变量的解构赋值  ----------------------------------------*/
    //模式匹配写法;

    //var b = [];
    //var c = 5;
    ////let arr = [a, [b], c] = [1, [2], 3];// 对 b 加了方括号,则模式不匹配,b会被重新赋值,更改类型;
    //let arr = [a, b, c] = [1, [2], {}]; // 不加方括号,则模式匹配,b会被重新赋值,但类型不变;
    //console.log(a);
    //console.log(b);
    //console.log(c);
    ////var b = 10;
    //console.log(arr);
    //console.log(Array.isArray(b));//加了方括号 false, 不加方括号 true

    //let [ , , third] = ["foo", "bar", "baz"];

    //解构数组
    //let [head, ...tail] = [1, 2, 3, 4]; // "baz"
    //console.log(head);
    //console.log(tail);

    //let [x, y, ...z] = ['a'];
    //console.log(x, y, z);
    //x // "a"
    //y // undefined
    //z // []
    //如果解构不成功，变量的值就等于undefined。


    //如果等号的右边不是数组或者严格地说，不是可遍历的结构，那么将会报错。
    // 报错
    //let [foo] = 1;
    //let [foo] = false;
    //let [foo] = NaN;
    //let [foo] = undefined;
    //let [foo] = null;
    //let [foo] = {};


    //
    //function* fibs() {
    //    let a = 0;
    //    let b = 1;
    //    while (true) {
    //        console.log('while',a)
    //        yield a;
    //
    //        [a, b] = [b, a + b];
    //    }
    //
    //}
    //
    //let [first, second, third, fourth, fifth, sixth] = fibs();
    //console.log(first); // 0
    //console.log(second); // 1
    //console.log(third); // 1
    //console.log(fourth); // 2
    //console.log(fifth); // 3
    //console.log(sixth);// 5


    // function *gen() {
    //     yield 'hello';
    //     yield 'world';
    //     return true;
    // }
    // //以上代码定义了一个简单的 generator，看起来就像一个普通的函数，区别是function关键字后面有个*号，函数体内可以使用yield语句进行流程控制。
    //
    // var iter = gen();
    // var a = iter.next();//跑第一步,到hello后,停止,返回hello;
    // console.log(a); // {value:'hello', done:false}
    // var b = iter.next();//跑第二步,到world后,停止,world;
    // console.log(b); // {value:'world', done:false}
    // var c = iter.next();//跑第三步,true,停止,true;
    // console.log(c); // {value:true, done:true}
    // var d = iter.next();//之后返回都是undefined;
    // var e = iter.next();
    // console.log(d,e)

    // -------------------默认值--------------------------------
    // 解构赋值允许指定默认值。
    // let [foo = 1]= [];//没有则取默认值
    // console.log(foo)
    // let [x, y = 'b'] = ['a']; // x='a', y='b'
    // console.log(x,y)
    // let [x, y = '123'] = ['a', undefined]; // x='a', y='b';复制为undefined也会取回默认值
    // console.log(x,y)
    // 注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
    // 所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
    // let [x = 1] = [undefined];
    // console.log(x)
    // let [x = 1] = [null];//null,默认值不生效
    // console.log(x)

    //----------------------------------------------------------------
    //如果默认值是一个表达式，那么这个表达式是惰性求值的，即只有在用到的时候，才会求值。

    //var ab = 'ddd';
    ////let [x = f()] = [254];//能取到值,所以x是254;
    //let [x = f()] = [];//不能取到值,那么 x 为表达式的结果
    //function f() {
    //    let ab = 111;
    //    if(true){
    //        //ab = 2222;
    //        //let ab = 45452222;
    //        return ab + 'aaa';
    //    }
    //}
    //console.log(x)
//----------------------------------------------------------------
    //默认值可以引用解构赋值的其他变量，但该变量必须已经声明。
    //let [x = 1,y = x] = [];
    //let [x = 1, y = x] = [2];//y赋值指向x,x值变化,y在赋值中跟着变化;
    //console.log(x,y)
    //x++;//但是x之后改变不影响y的值
    //console.log(x,y)
    //如果赋值操作中有y有值可取则还是取赋值的值;
    //let [x = 1, y = x] = [1, 2]; // x=1; y=2
    //y = y+5;
    //console.log(x,y);
    //表达式之所以会报错，是因为x用到默认值y时，y还没有声明
    //报错,不可在声明之前赋值
    //let [x = y, y = 1] = [];     // ReferenceError

    //----------    对象解构赋值     -----------------
    //变量与属性名必须相同匹配,次序可以无序
    //let{foo,bar} = {bar:'1',foo:'123'};
    //console.log(foo,bar)
    //变量名未取到相同则为undefined
    //let {a} = {b:'11'};
    //console.log(a)//undefined
    //变量名与属性名不通,写法如下
    //冒号前的参数为匹配属性名,冒号后为新的变量;
    //let {foo:baz} = {foo:'aa',bar:'12'};
    //console.log(baz);
    //对象结构常用写法
    //let obj = {first:'hello',last:'work'};
    //let {first:f,last:l}= obj;
    //console.log(l,f);
    //let { foo: a, bar: b } = { foo: "33", bar: "5" };
    //console.log(a,b)
    //解构用于嵌套结构的对象。
    //let obj = {
    //    p: ['hello', {world: 'tips'}]
    //};
    //let {p:[x,y]} = obj;
    //console.log(x,y)//hello {world:'tips'}
    //let {p:[x,{world:y}]} = obj;
    //console.log(x,y)

    // 静态声明
    // 上面代码有三次解构赋值，
    // 分别是对loc、start、line三个属性的解构赋值
    // 注意，最后一次对line属性的解构赋值之中
    // 只有line是变量，loc和start都是模式，不是变量。
    //const node = {
    //    loc:{
    //        start:{
    //            line:'1',
    //            column:5
    //        }
    //    }
    //};
    //let {loc,loc:{start},loc:{start:{line}}} = node;
    //console.log(line);
    //console.log(loc);
    //console.log(start);
    /*-----多变量嵌套赋值----*/
    //let obj = {};
    //let arr = [];
    //({foo:obj.prop,bar:arr[1]} = {foo:444,bar:true});
    //console.log(obj);
    //console.log(arr)
    //解构,指定默认值
    //var {x = 3} = {};
    //console.log(x);
    //let {x,y = 5} = {x:1};
    //console.log(y,x);
    //let {x,y = 5} = {x:1,y:3};
    //console.log(y,x);
    //let {x:y = 1}= {x:{aa:222}};
    //let {x:y = 1}= {};
    //console.log(y);

    //默认值生效的条件是，对象的属性值严格等于undefined,
    //var {x = 3}= {x:undefined};
    //console.log(x);
    //var {x = 3} = {x: null};
    //console.log(x);

    //解构模式是嵌套的对象而且自对象所在的父属性不存在,会报错
    //let {foo:{bar}} = {baz:'baz'};

    // 错误的写法,要将一个已经声明的变量用于解构赋值，必须非常小心。
    //let x;
    //({x} = {x: 1});//{x} = {x: 1}不加括号会出错;
    //console.log(x)

    //数组本质也是特殊对象,可以多数组进行对象属性的解构,使用对应下标取值,
    //利用数组长度可以取到数组倒数的元素;
    //let arr = [1, 2, 3];
    //let {0 : first, [arr.length - 1] : last} = arr;
    //console.log(first) // 1
    //console.log(last) // 1

    //字符串也可以解构
    //const [a, b, c, d, e] = 'hello';
    //console.log(a,b,c);
    //对字符串解构
    //let {length : len} = 'hello';
    //console.log(len); // 5
    //let {toString: s} = 123;
    //console.log(s);
    //console.log(s === Number.prototype.toString);

    //不能对null和undefined做解构赋值
    //let { prop: x } = undefined; // TypeError
    //let { prop: y } = null; // TypeError

    //函数参数的解构赋值
    //function add([x,y]){
    //    return x +y;
    //}
    //var result = add([12,12]);
    //console.log(result)
    //map,操作数组每个元素,返回一个新的数组
    //var result = [1,5,5,4,5].map(function(i){ return i+1});
    //console.log(result)
    //var result = [[1,2],[3,5]].map(([a,b])=>a+b);
    //console.log(result)

    //function move({x,y}={x:0,y:0}){
    //    return [x,y]
    //}
    //var a = move ({x:3,y:8});
    //var b = move({x:4});
    //var c = move({});
    //var d = move();
    //console.log(a);
    //console.log(b);
    //console.log(c);
    //console.log(d);

    //undefined会触发函数参数的默认值;
    //var arr = [1,undefined,3].map((x = 'moren')=>x);
    //console.log(arr)
    //var [a] = [a,1];
    //a = 11;
    //console.log(a)

    //-------------  解构赋值的用途  -----------------------------------------
    //交换变量的值
    //let x = 1;
    //let y = 2;
    //console.log(x,y);
    //[x, y] = [y, x];
    //console.log(x,y);
    // 从函数返回多个值或者对象取值;
    //数组返回
    //function returnArr (){
    //    return [1,1,5];
    //}
    //let [a,b] = returnArr();
    //console.log(a,b)

    //对象返回
    //function returnObj (){
    //    return {foo:'12',bar:'123123'};
    //}
    //let {foo,bar} = returnObj();
    //console.log(foo,bar)

    //函数参数的定义
    //解构赋值可以方便地将一组参数与变量名对应起来。
    //有序数组传入
    //function f([x,y,z]){
    //    return x+y+z;
    //}
    //let a = f([1,4,3]);
    //console.log(a);
    //无序对象传入
    //function objFun ({x,y,z}){
    //    return {x:x,y:y+1111,z:z+2222}
    //}
    //let a = objFun({x:4,y:'字符串',z:1111});
    //console.log(a)
    //获取json对象的数据
    //let jsonObj = {
    //    id:111,
    //    status:'ok啦'
    //};
    //let {id,status} = jsonObj;
    //console.log(id+1)

    //遍历Map结构
    //const map = new Map();
    //map.set('first','hello');
    //map.set('second', 'world');
    //for(let [key,value] of map){
    //    console.log(key,value)
    //}

    //注入模块的指定方法
    //const { SourceMapConsumer, SourceNode } = require("source-map");


    /**
     *
     * 字符串的扩展
     *
     * */
    // let str = 'hello world-';
    //console.log(str.includes('he'));
    //console.log(str.includes('ac'));
    //console.log('开始位置6',str.startsWith('wo',6));
    //console.log('开始位置0',str.startsWith('hello',0));
    //console.log('结束位置',str.endsWith('lo', 4));
    //console.log('index',str.indexOf('o'))
    //重复字符串
    //console.log('repeat--',str.repeat(3));

    //模版字符串
    //var speak = `hello ${str}`;
    //console.log(speak);

    /**
     *
     * 正则扩展
     *
     * */
    //构造函数合法
    //var regex= new RegExp(/xyz/,'i');
    //console.log(regex.test('xyz222'));
    //console.log(regex.test('xy1z222'));

    /**
     *
     * 数值的扩展
     *
     * */
    //二进制和八进制表示法
    //ES6提供了二进制和八进制数值的新写法,二进制使用0B或者0b开头,而十六进制使用0加字母O,或者小写字母o;
    //console则直接调用Number()方法,输出为十进制
    //console.log(0b0001111);//15
    //console.log(0o123);//83

    //Number新增isFinite()检测数字是否有限
    //console.log(
    //    Number.isFinite(15), // true
    //    Number.isFinite(0.8), // true
    //    Number.isFinite(NaN),// false
    //    Number.isFinite(Infinity), // false
    //    Number.isFinite(-Infinity), // false
    //    Number.isFinite('foo'), // false
    //    Number.isFinite('15'), // false
    //    Number.isFinite(true) // false
    //);

    //es5实现isFinite()方法
    //(function (global) {
    //    var global_isFinite = global.isFinite;
    //
    //    Object.defineProperty(Number, 'isFinite', {
    //        value: function isFinite(value) {
    //            return typeof value === 'number' && global_isFinite(value);
    //        },
    //        configurable: true,
    //        enumerable: false,
    //        writable: true
    //    });
    //})(this);

    // Number新增isNaN()检查数字是否为NaN
    //console.log(
    //    Number.isNaN(NaN),// true
    //    Number.isNaN(15), // false
    //    Number.isNaN('15'), // false
    //    Number.isNaN(true), // false
    //    Number.isNaN(9 / NaN),// true
    //    Number.isNaN('true' / 0),// true
    //    Number.isNaN('true' / 'true') // true
    //);
//总结:
//    Number.isFinite()对于非数值一律返回false, Number.isNaN()只有对于NaN才返回true，非NaN一律返回false

    //    Number.isInteger()用来判断一个值是否为整数。需要注意的是，
    //    在 JavaScript 内部，整数和浮点数是同样的储存方法，所以3和3.0被视为同一个值。
    //    Number.isInteger(25) // true
    //    Number.isInteger(25.0) // true
    //    Number.isInteger(25.1) // false
    //    Number.isInteger("15") // false
    //    Number.isInteger(true) // false
    //    ES5实现判断一个数字是否为整数
    //    (function (global) {
    //        var floor = Math.floor,
    //            isFinite = global.isFinite;
    //
    //        Object.defineProperty(Number, 'isInteger', {
    //            value: function isInteger(value) {
    //                return typeof value === 'number' &&
    //                    isFinite(value) &&
    //                    floor(value) === value;
    //            },
    //            configurable: true,
    //            enumerable: false,
    //            writable: true
    //        });
    //    })(this);

    //    新增常量Number.EPSILON,多用来判断两个浮点数是否相等
    //    Number.EPSILON的实质是一个可以接受的最小误差范围。
    //    console.log(0.1+0.2-0.3);
    //    console.log(Number.EPSILON * Math.pow(2, 2));
    //    console.log(0.1+0.2-0.3 < Number.EPSILON * Math.pow(2, 2));

    //    安全整数和 Number.isSafeInteger()
    //    JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点）
    //    console.log(9007199254740993) //9007199254740992,超过1,但没办法精确

    //    ES6引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量
    //    Number.MAX_SAFE_INTEGER === Math.pow(2, 53) - 1  // true
    //    Number.MAX_SAFE_INTEGER === 9007199254740991  // true
    //    Number.MIN_SAFE_INTEGER === -Number.MAX_SAFE_INTEGER  // true
    //    Number.MIN_SAFE_INTEGER === -9007199254740991// true


    //Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。

    //Number.isSafeInteger('a') // false
    //Number.isSafeInteger(null) // false
    //Number.isSafeInteger(NaN) // false
    //Number.isSafeInteger(Infinity) // false
    //Number.isSafeInteger(-Infinity) // false
    //
    //Number.isSafeInteger(3) // true
    //Number.isSafeInteger(1.2) // false
    //Number.isSafeInteger(9007199254740990) // true
    //Number.isSafeInteger(9007199254740992) // false
    //
    //Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1) // false
    //Number.isSafeInteger(Number.MIN_SAFE_INTEGER) // true
    //Number.isSafeInteger(Number.MAX_SAFE_INTEGER) // true
    //Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1) // false

    //Math对象的扩展
    //Math.trunc方法用于去除一个数的小数部分，返回整数部分。
    //可以传入布尔值,字符串,数字,null
    //console.log(Math.trunc('1.88'));
    //console.log(Math.trunc(5.44));
    //console.log(
    //    Math.trunc('123.456'),// 123
    //    Math.trunc(true), //1
    //    Math.trunc(false), // 0
    //    Math.trunc(null), // 0
    //    Math.trunc('1.5a'), // 0
    //    Math.trunc(NaN),     // NaN
    //    Math.trunc('foo'),    // NaN
    //    Math.trunc(),         // NaN
    //    Math.trunc(undefined) // NaN
    //);
    //es5实现以上方法
    //Math.trunc = Math.trunc || function(x) {
    //        return x < 0 ? Math.ceil(x) : Math.floor(x);
    //    };


    //Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。
    //console.log(
    //    Math.sign(-5), // -1
    //    Math.sign(5), // +1
    //    Math.sign(0), // +0
    //    Math.sign(-0), // -0
    //    Math.sign(NaN) // NaN
    //);
    //Math.cbrt方法用于计算一个数的立方根
    //console.log(
    //    Math.cbrt(-1),// -1
    //    Math.cbrt(0), // 0
    //    Math.cbrt(1),  // 1
    //    Math.cbrt(2),// 1.2599210498948734
    //    Math.cbrt(27),  //3?
    //    Math.cbrt(8) , //3?
    //    Math.cbrt('8'),//3?
    //    Math.cbrt('hello')  //3?
    //);
    //Es5实现方法
    //Math.cbrt = Math.cbrt || function(x) {
    //        var y = Math.pow(Math.abs(x), 1/3);
    //        return x < 0 ? -y : y;
    //    };

    //JavaScript的整数使用32位二进制形式表示
    //Math.clz32方法返回一个数的32位无符号整数形式有多少个前导0
    //”count leading zero bits in 32-bit binary representations of a number“
    //console.log(
    //    Math.clz32(0),// 32
    //    Math.clz32(1),// 31
    //    Math.clz32(1000), // 22
    //    Math.clz32(0b00000001000000000000000000000000),// 1
    //    Math.clz32(0b00100000000000000000000000000000) // 2
    //);
    //对于小数，Math.clz32方法只考虑整数部分。
//    Math.clz32(3.2) // 30
//    Math.clz32(3.9) // 30

    //    对于空值或其他类型的值，Math.clz32方法会将它们先转为数值，然后再计算
    //Math.clz32() // 32
    //Math.clz32(NaN) // 32
    //Math.clz32(Infinity) // 32
    //Math.clz32(null) // 32
    //Math.clz32('foo') // 32
    //Math.clz32([]) // 32
    //Math.clz32({}) // 32
    //Math.clz32(true) // 31

    // Math.imul()
    // 如果只考虑最后32位，大多数情况下，Math.imul(a, b)与a * b的结果是相同的，
    // 即该方法等同于(a * b)|0的效果（超过32位的部分溢出）。
    // 之所以需要部署这个方法，是因为JavaScript有精度限制，超过2的53次方的值无法精确表示。
    // 这就是说，对于那些很大的数的乘法，低位数值往往都是不精确的，
    // Math.imul方法可以返回正确的低位数值。

    //Math.fround()
    //Math.fround方法返回一个数的单精度浮点数形式。
//      Math.fround(0)     // 0
//    Math.fround(1)     // 1
//    Math.fround(1.337) // 1.3370000123977661
//    Math.fround(1.5)   // 1.5
//    Math.fround(NaN)   // NaN
//    对于整数来说，Math.fround方法返回结果不会有任何不同，区别主要是那些无法用64个二进制位精确表示的小数。这时，Math.fround方法会返回最接近这个小数的单精度浮点数。
//
//对于没有部署这个方法的环境，可以用下面的代码模拟。

    //Math.fround = Math.fround || function(x) {
    //        return new Float32Array([x])[0];
    //    };


    //Math.hypot(),可以用来计算勾股定理
    //Math.hypot方法返回所有参数的平方和的平方根。
    //Math.hypot(3, 4);        // 5
    //Math.hypot(3, 4, 5);     // 7.0710678118654755
    //Math.hypot();            // 0
    //Math.hypot(NaN);         // NaN
    //Math.hypot(3, 4, 'foo'); // NaN
    //Math.hypot(3, 4, '5');   // 7.0710678118654755
    //Math.hypot(-3);          // 3


    // Math.expm1(),返回(e的x次方 - 1)的结果
    //Math.expm1(x)返回ex - 1，即Math.exp(x) - 1。

    //Math.expm1(-1) // -0.6321205588285577
    //Math.expm1(0)  // 0
    //Math.expm1(1)  // 1.718281828459045

    //ES5方法
    //Math.expm1 = Math.expm1 || function(x) {
    //        return Math.exp(x) - 1;
    //    };

    //Math.log1p()
    //Math.log1p(x)方法返回1 + x的自然对数，即Math.log(1 + x)。如果x小于-1，返回NaN。

    //Math.log1p(1)  // 0.6931471805599453
    //Math.log1p(0)  // 0
    //Math.log1p(-1) // -Infinity
    //Math.log1p(-2) // NaN


    //es5
    //Math.log1p = Math.log1p || function(x) {
    //        return Math.log(1 + x);
    //    };


    //Math.log10()返回以10为底的x的对数。如果x小于0，则返回NaN。

    //Math.log10(2)      // 0.3010299956639812
    //Math.log10(1)      // 0
    //Math.log10(0)      // -Infinity
    //Math.log10(-2)     // NaN
    //Math.log10(100000) // 5

    //ES5
    //Math.log10 = Math.log10 || function(x) {
    //        return Math.log(x) / Math.LN10;
    //    };

    //Math.log2(x)返回以2为底的x的对数。如果x小于0，则返回NaN。
    //Math.log2(3)       // 1.584962500721156
    //Math.log2(2)       // 1
    //Math.log2(1)       // 0
    //Math.log2(0)       // -Infinity
    //Math.log2(-2)      // NaN
    //Math.log2(1024)    // 10
    //Math.log2(1 << 29) // 29

    //ES5
    //Math.log2 = Math.log2 || function(x) {
    //        return Math.log(x) / Math.LN2;
    //    };

    //    Math.sinh(x) 返回x的双曲正弦（hyperbolic sine）
    //Math.cosh(x) 返回x的双曲余弦（hyperbolic cosine）
    //Math.tanh(x) 返回x的双曲正切（hyperbolic tangent）
    //Math.asinh(x) 返回x的反双曲正弦（inverse hyperbolic sine）
    //Math.acosh(x) 返回x的反双曲余弦（inverse hyperbolic cosine）
    //Math.atanh(x) 返回x的反双曲正切（inverse hyperbolic tangent）

    //Math.signbit()
    //Math.sign()用来判断一个值的正负，但是如果参数是-0，它会返回-0。
    //Math.sign(-0) // -0
//这导致对于判断符号位的正负，Math.sign()不是很有用。
// JavaScript 内部使用64位浮点数（国际标准IEEE 754）表示数值，
// IEEE 754规定第一位是符号位，0表示正数，1表示负数。所以会有两种零，
// +0是符号位为0时的零值，-0是符号位为1时的零值。实际编程中，
// 判断一个值是+0还是-0非常麻烦，因为它们是相等的。

    //指数运算符**
    //    console.log(2 ** 8)

    //指数运算符可以与等号结合，形成一个新的赋值运算符（**=）。
    //let a = 1.5;
    //a **= 2;
    //在 V8 引擎中，指数运算符与Math.pow的实现不相同，对于特别大的运算结果，两者会有细微的差异。
//    Math.pow(99, 99)
//// 3.697296376497263e+197
//
//    99 ** 99
//// 3.697296376497268e+197


    /**
     *
     * 函数的扩展
     *
     * */
    ////函数可以指定默认值
    //    function Point(x = 0, y = 0) {
    //        this.x = 10;
    //        this.y = y;
    //    }
    //
    //    const p = new Point();
    //    console.log(p);// { x: 0, y: 0 }


    //    参数变量是默认声明的，所以不能用let或const再次声明。
    //    function foo(x = 5) {
    //        let x = 1; // error
    //        const x = 2; // error
    //    }


    //一个容易忽略的地方是，参数默认值不是传值的，
    // 而是每次都重新计算默认值表达式的值。
    // 也就是说，参数默认值是惰性求值的。
    //这里的x的值变化,重新执行函数则会重新计算
    //let x = 99;
    //function foo(p = x + 1) {
    //    console.log(p);
    //}
    //foo() // 100
    //
    //x = 100;
    //foo() // 101

    //与解构赋值默认值结合使用
    //参数默认值可以与解构赋值的默认值，结合起来使用。

    //function foo({x,y= 5}){
    //    console.log(x,y);
    //}
    //foo({});
    //foo({x: 1});
    //foo({x: 1,y:6});
    //foo();//报错,读不到x或者y属性
    //可以赋给一个空对象作为默认值
    //function foo({x,y=1} = {}){
    //    console.log(x,y)
    //}
    ////这代表如果没有传obj,传一个空的obj,然后y在其中有默认值为1。
    //foo();


    //如果函数fetch的第二个参数是一个对象，
    // 就可以为它的三个属性设置默认值。
    // 这种写法不能省略第二个参数，
    // 如果结合函数参数的默认值，
    // 就可以省略第二个参数。
    // 这时，就出现了双重默认值。
    //function fetch(url, { body = '', method = 'GET', headers = {} } = {}) {
    //    console.log(method);
    //}
    //
    ////函数fetch没有第二个参数时，函数参数的默认值就会生效，
    //// 然后才是解构赋值的默认值生效，变量method才会取到默认值GET。
    //fetch('http://example.com')

    //function m1({x = 0 ,y = 0}={}) {
    //    console.log([x, y]);
    //    return [x, y]
    //}
    //
    //function m2({x,y} = {x: 0, y: 0}) {
    //    console.log([x, y]);
    //    return [x, y]
    //}

    // 区别是
    // 写法一 函数参数的默认值是空对象，但是设置了对象解构赋值的默认值；
    // 写法二 函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构赋值的默认值。
    // 函数没有参数的情况
    //m1(); // [0, 0]
    //m2(); // [0, 0]

    // x 和 y 都有值的情况
    //    m1({x: 3, y: 8}) ;// [3, 8]
    //    m2({x: 3, y: 8}); // [3, 8]

    // x 有值，y 无值的情况
    //    m1({x: 3}); // [3, 0]
    //    m2({x: 3}); // [3, undefined]

    //    x 和 y 都无值的情况
    //    m1({}) ;// [0, 0];
    //    m2({}); // [undefined, undefined]
    //
    //    m1({z: 3}); // [0, 0]
    //    m2({z: 3}); // [undefined, undefined]

    //通常情况下，定义了默认值的参数，应该是函数的尾参数。
    // 因为这样比较容易看出来，到底省略了哪些参数。
    // 如果非尾部的参数设置默认值，实际上这个参数是没法省略的。

    // 例一
//    function f(x = 1, y) {
//        return [x, y];
//    }
//
//    f() // [1, undefined]
//    f(2) // [2, undefined])
//    f(, 1) // 报错
//    f(undefined, 1) // [1, 1]
//
//// 例二
//    function f(x, y = 5, z) {
//        return [x, y, z];
//    }
//
//    f() // [undefined, 5, undefined]
//    f(1) // [1, 5, undefined]
//    f(1, ,2) // 报错
//    f(1, undefined, 2) // [1, 5, 2]

    //如果传入undefined，将触发该参数等于默认值，null则没有这个效果。
    //    function foo(x = 5, y = 6) {
    //        console.log(x, y);
    //    }
    //
    //    foo(undefined, null);//x参数对应undefined，结果触发了默认值，y参数等于null，就没有触发默认值。

    //指定了默认值以后，函数的length属性，将返回没有指定默认值的参数个数。也就是说，指定了默认值后，length属性将失真。
    //(function (a) {}).length // 1
    //(function (a = 5) {}).length // 0
    //(function (a, b, c = 5) {}).length // 2

    //一旦设置了参数的默认值，函数进行声明初始化时，
    // 参数会形成一个单独的作用域（context）。
    // 等到初始化结束，这个作用域就会消失。
    // 这种语法行为，在不设置参数默认值时，是不会出现的。
    //参数y的默认值等于变量x。调用函数f时，参数形成一个单独的作用域。
    // 在这个作用域里面，默认值变量x指向第一个参数x，而不是全局变量x，所以输出是2。
    //var x = 1;
    //
    //function f(x, y = x) {
    //    console.log(y);
    //}
    //
    //f(2) // 2

    //函数f调用时，参数y = x形成一个单独的作用域。
    // 这个作用域里面，变量x本身没有定义，所以指向外层的全局变量x。
    // 函数调用时，函数体内部的局部变量x影响不到默认值变量x。
    //let x = 1;
    //
    //function f(y = x) {
    //    let x = 2;
    //    console.log(y);
    //}
    //
    //f() ;// 1

    //全局变量x不存在，就会报错。
    //function f(y = x) {
    //    let x = 2;
    //    console.log(y);
    //}
    //
    //f() // ReferenceError: x is not defined


    //参数x = x形成一个单独作用域。
    // 实际执行的是let x = x，由于暂时性死区的原因，
    // 这行代码会报错”x 未定义“。
    //var x = 1;
    //
    //function foo(x = x) {
    //    // ...
    //}
    //
    //foo() // ReferenceError: x is not defined

    //函数bar的参数func的默认值是一个匿名函数，返回值为变量foo。
    // 函数参数形成的单独作用域里面，并没有定义变量foo，
    // 所以foo指向外层的全局变量foo，因此输出outer。
    //let foo = 'outer';
    //
    //function bar(func = () => foo) {
    //    let foo = 'inner';
    //    console.log(func());
    //}
    //
    //bar(); // outer


    //报错。匿名函数里面的foo指向函数外层，但是函数外层并没有声明变量foo，所以报错了。
    //function bar(func = () => foo) {
    //    let foo = 'inner';
    //    console.log(func());
    //}
    //
    //bar(); // ReferenceError: foo is not defined

    //y 有自己的作用域,x
    //var x = 1;
    //function foo(x, y = function() { x = 2; }) {
    //    var x = 3;
    //    y();
    //    console.log(x);
    //}
    //
    //foo() // 3
    //x // 1

    // 函数foo的参数形成一个单独作用域。这个作用域里面，
    // 首先声明了变量x，然后声明了变量y，y的默认值是一个匿名函数。
    // 这个匿名函数内部的变量x，指向同一个作用域的第一个参数x。
    // 函数foo内部又声明了一个内部变量x，
    // 该变量与第一个参数x由于不是同一个作用域，
    // 所以不是同一个变量，因此执行y后，内部变量x和外部全局变量x的值都没变。
    //
    // 如果将var x = 3的var去除，函数foo的内部变量x就指向第一个参数x，
    // 与匿名函数内部的x是一致的，所以最后输出的就是2，
    // 而外层的全局变量x依然不受影响。
    //
    // var x = 1;
    // function foo(x, y = function() { x = 2; }) {
    //     x = 3;
    //     y();
    //     console.log(x);
    // }
    //
    // foo() // 2
    // x // 1


    // ES6 引入 rest 参数（形式为...变量名），
    // 用于获取函数的多余参数，这样就不需要使用arguments对象了。
    // rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
    // function add(...values) {
    //    let sum = 0;
    //
    //    for (var val of values) {
    //        sum += val;
    //    }
    //
    //    return sum;
    // }
    //
    // var sum = add(2, 5, 3) ;// 10
    // console.log(sum)

    // arguments对象不是数组，而是一个类似数组的对象。
    // 所以为了使用数组的方法，
    // 必须使用Array.prototype.slice.call先将其转为数组。
    // rest 参数就不存在这个问题，它就是一个真正的数组，
    // 数组特有的方法都可以使用。
    // 下面是一个利用 rest 参数改写数组push方法的例子。
    // arguments变量的写法

    // function sortNumbers() {
    //     return Array.prototype.slice.call(arguments).sort();
    // }
    //
    //  // rest参数的写法
    // const sortRestNumbers = (...numbers) => numbers.sort();
    // var a = sortNumbers(1,5);
    // var b = sortRestNumbers(5,6);
    // console.log(a,b);

    //数字添加
    //function push(array, ...items) {
    //    items.forEach(function(item) {
    //        if(item >= 2){
    //            array.push(item);
    //        }
    //    });
    //}
    //
    //var a = [];
    //push(a, 1, 2, 3);
    //console.log(a);


    //rest 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错
    // 报错
    //function f(a, ...b, c) {
    //    // ...
    //}
    //函数的length属性，不包括 rest 参数。
    //(function(a) {}).length  // 1
    //(function(...a) {}).length  // 0
    //(function(a, ...b) {}).length  // 1

    //ES2016 做了一点修改，规定只要函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。
//    // 报错
//    function doSomething(a, b = a) {
//        'use strict';
//        // code
//    }
//
//// 报错
//    const doSomething = function ({a, b}) {
//        'use strict';
//        // code
//    };
//
//// 报错
//    const doSomething = (...a) => {
//        'use strict';
//        // code
//    };
//
//    const obj = {
//        // 报错
//        doSomething({a, b}) {
//            'use strict';
//            // code
//        }
//    };
//这样规定的原因是，函数内部的严格模式，同时适用于函数体和函数参数。
// 但是，函数执行的时候，先执行函数参数，然后再执行函数体。
// 这样就有一个不合理的地方，只有从函数体之中，
// 才能知道参数是否应该以严格模式执行，但是参数却应该先于函数体执行。

    //解决:
    //第一种 ,全局性的严格模式
    //'use strict';
    //
    //function doSomething(a, b = a) {
    //    // code
    //}

    // 第二种是把函数包在一个无参数的立即执行函数里面。
    // const doSomething = (function () {
    //    'use strict';
    //    return function(value = 42) {
    //        return value;
    //    };
    // }());

    // 函数新增name属性
    // function foo() {}
    // console.log(foo.name )// "foo"


    /*--------------------------- 箭头函数 -----------------------------*/

    //var f = v => v;
    //
    //等同于
    //var f = function(v) {
    //    return v;
    //};


    //var f = () => 5;
    //// 等同于
    //var f = function () { return 5 };

    // var sum = (num1,num2)=> num1 + num2;
    //
    // console.log(sum());
    // console.log(sum(1,5));
    // console.log(sum(1,'字符串'));
    //  // 等同于
    // var sum = function(num1, num2) {
    //     return num1 + num2;
    // };


    //如果箭头函数的代码块部分多于一条语句，
    // 就要使用大括号将它们括起来，并且使用return语句返回。
    //var sum = (num1, num2) => { return num1 + num2; }
    //由于大括号被解释为代码块，
    // 所以如果箭头函数直接返回一个对象，
    // 必须在对象外面加上括号，否则会报错。
//// 报错
//    let getTempItem = id => { id: id, name: "Temp" };
//
//// 不报错
//    let getTempItem = id => ({ id: id, name: "Temp" });

    //如果箭头函数只有一行语句，且不需要返回值，可以采用下面的写法，就不用写大括号了。
    //let fn = () => void doesNotReturn();

    //箭头函数可以与变量解构结合使用。
    //const full = ({first,last}) => {return first + last;}
    //console.log(full({'11',22}))


    //简洁的判断奇偶

    //const isEven = n => n % 2 == 0;
    //const square = n => n * n;
    //console.log(isEven(7));
    //console.log(isEven(8));
    //console.log(square(7));


    // // 正常函数写法
    // var square = [1,2,3].map(function (x) {
    //     return x * x;
    // });
    // console.log(square);
    // // 箭头函数写法
    // var square = [1,5,3].map(x => x * x);
    // console.log(square);

    // 正常函数写法
    // var result = values.sort(function (a, b) {
    //    return a - b;
    // });
    //
    // //箭头函数写法
    // var result = values.sort((a, b) => a - b);


    //const numbers = (...nums) => nums;
    //var result = numbers(1,5,5,4,5,4,5);
    //console.log(result)
    //
    //const headAndTail = (head, ...tail) => [head, tail];
    //
    //headAndTail(1, 2, 3, 4, 5)


    //
    //箭头函数有几个使用注意点。
    //
    //（1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
    //
    //（2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
    //
    //（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用 rest 参数代替。
    //
    //（4）不可以使用yield命令，因此箭头函数不能用作 Generator 函数。

    //function foo() {
    //    setTimeout(()=> {
    //        console.log(this.msg);
    //    },100)
    //}
    //var msg =  1000;
    //foo.call({msg:1222});


    //function Timer() {
    //    this.s1 = 0;
    //    this.s2 = 0;
    //    // 箭头函数
    //    setInterval(() => this.s1++, 100);
    //    // 普通函数
    //    setInterval(function () {
    //        this.s2++;
    //    }, 100);
    //}
    //
    //var timer = new Timer();
    //
    //setTimeout(() => console.log('s1: ', timer.s1), 310);
    //setTimeout(() => console.log('s2: ', timer.s2), 310);

    //// ES6
    //    function foo() {
    //        setTimeout(() => {
    //            console.log('id:', this.id);
    //        }, 100);
    //    }
    //
    //// ES5
    //    function foo() {
    //        var _this = this;
    //        this.id = 10
    //        setTimeout(function () {
    //            console.log('id:', _this.id);
    //        }, 100);
    //    }
    //
    //    foo();

    //只有一个this，就是函数foo的this，
    // 所以t1、t2、t3都输出同样的结果。
    // 因为所有的内层函数都是箭头函数，都没有自己的this，
    // 它们的this其实都是最外层foo函数的this。
    //function foo() {
    //    return () => {
    //        return () => {
    //            return () => {
    //                console.log('id:', this.id);
    //            };
    //        };
    //    };
    //}
    //
    //var f = foo.call({id: 10});
    //
    //var t1 = f.call({id: 2})()(); // id: 1
    //var t2 = f().call({id: 3})(); // id: 1
    //var t3 = f()().call({id: 4}); // id: 1
    //console.log(f,t1,t2,t3)

    //function foo() {
    //
    //    setTimeout(()=> {
    //        console.log('args', arguments)
    //    }, 100)
    //}
    //
    //foo(1, 2, 3)

    //由于箭头函数没有自己的this，
    // 所以当然也就不能用call()、apply()、bind(),这些方法去改变this的指向。
    //箭头函数没有自己的this，所以bind方法无效，内部的this指向外部的this。
    //不报错但无效
    //var _this = (function() {
    //    return [
    //        (() => this.x).bind({ x: 'inner' })()
    //    ];
    //}).call({ x: 'outer' });
    //console.log(_this)


    //ES5 语法的多重嵌套函数。
    //function insert(value) {
    //    return {into: function (array) {
    //        return {after: function (afterValue) {
    //            array.splice(array.indexOf(afterValue) + 1, 0, value);
    //            return array;
    //        }};
    //    }};
    //}
    //
    //insert(2).into([1, 3]).after(1); //[1, 2, 3]

    //let insert = (value) =>({into:(array) => ({after:(afterValue) => {
    //    array.splice(array.indexOf(afterValue+1),0,value);
    //    return array
    //}})})
    //let newArray = insert(1).into([1,3]).after(1);
    //console.log(newArray)

    //数组reduce
    //var arr = [1, 2, 5, 4, 3, 55, 44];
    //var maxNum = arr.reduce(function (prev, next,index,array) {
    //    console.log(prev, next,index,array);
    //    if (prev > next) {
    //        return prev
    //    } else {
    //        return next
    //    }
    //});
    //console.log(maxNum)

    //部署管道机制（pipeline）
    //
    //const pipeline = (...funs)=> val=> funs.reduce((a, b) => {
    //    console.log('-----', a, b);
    //    var result = b(a);
    //    console.log(result);
    //    return result
    //}, val);
    //
    //const plus1 = a =>a + 1;
    //
    //const mult2 = a => a * 2;
    //
    //const addThenMult = pipeline(plus1, mult2);
    //
    //var a = addThenMult(5);
    ////console.log(addThenMult)
    //console.log(a)

    //这种写法可读性高
    //const plus1 = a => a + 1;
    //const mult2 = a => a * 2;
    //mult2(plus1(5));

    //-------  双冒号运算符 ----------

    //var foo = {a:11};
    //function bar(){
    //    console.log(this.a)
    //}
    //
    ////foo::bar;
    //bar();
    ////等同于
    ////bar.apply(foo,arguments);

    //尾调用优化
    //function addOne(a){
    //    var one = 1;
    //    function inner(b){
    //        console.log('in',b);
    //        return b + one;
    //    }
    //    return inner(22);
    //}
    //var inner = addOne(1);
    //console.log(inner);

    //递归、尾递归
    //function factorial(n) {
    //    console.log(n)
    //    if (n === 1) return 1;
    //    return n * factorial(n - 1);
    //}
    //
    //var result = factorial(5); // 120
    //console.log(result)
    //计算n的阶乘,使用尾递归,只保留一个调用记录
    //function factorial(n, total) {
    //    //console.log(n)
    //    if (n == 1) {
    //        return total
    //    }
    //    console.log(n-1)
    //    return factorial(n-1, n * total);
    //}
    //
    //var result = factorial(5,1);
    //console.log(result)
    //
    // var i = 0;
    //
    // function Fibonacci(n) {
    //     if (n <= 1) {
    //         return 1
    //     }
    //     i++;
    //     console.log(i,n);
    //     // console.log(n-1)
    //     // console.log(n-2)
    //     //console.log(Fibonacci(n - 1) + Fibonacci(n - 2));
    //     return Fibonacci(n - 1) + Fibonacci(n - 2);
    // }
    //
    // var result = Fibonacci(10); // 89
    // console.log(result)

    //
    // var arr = new Array(10);
    // arr[0] = 1;
    // arr[1] = 1;
    // var result = 0;
    // for (var i = 2; i < 10; i++) {
    //     arr[i] = arr[i - 1] + arr[i - 2];
    //     console.log(arr)
    // }
    // for (var i =0;i<arr.length;i++){
    //     result += arr[i]
    // }
    // console.log(result)


    // function tailFactorial(n,total) {
    //     if(n===1){
    //         return total
    //     }
    //     var newNum = n-1;
    //     console.log(newNum,n*total)
    //     console.log(total)
    //     return tailFactorial(newNum,n*total)
    // }
    // function factorial(n) {
    //     return tailFactorial(n, 1);
    // }
    // var result = factorial(5);
    // console.log(result)

    // 提示:  循环可以用递归代替，
    //        而一旦使用递归，就最好使用尾递归。

    // ES6 的尾调用优化只在严格模式下开启，正常模式是无效的。
    // 这是因为在正常模式下，函数内部有两个变量，可以跟踪函数的调用栈。
    // func.arguments：返回调用时函数的参数。
    // func.caller：返回调用当前函数的那个函数。
    // 尾调用优化发生时，函数的调用栈会改写，
    // 因此上面两个变量就会失真。
    // 严格模式禁用这两个变量，
    // 所以尾调用模式仅在严格模式下生效。
    //
    // function restricted() {
    //     'use strict';
    //     restricted.caller;    // 报错
    //     restricted.arguments; // 报错
    // }
    // restricted();

    // es5尾递归优化
    // function tco(f) {
    //     var value;
    //     var active = false;
    //     var accumulated = [];
    //
    //     return function accumulator() {
    //         console.log(arguments);
    //         accumulated.push(arguments);
    //         console.log(accumulated);
    //
    //         if (!active) {
    //             active = true;
    //             while (accumulated.length) {
    //                 console.log('length',accumulated.length)
    //                 console.log('active',active)
    //                 value = f.apply(this, accumulated.shift());
    //                 console.log('value---',value);
    //                 console.log('------------');
    //             }
    //             console.log('value',value);
    //
    //             active = false;
    //             return value;
    //         }
    //     };
    // }
    //
    // var sum = tco(function(x, y) {
    //     if (y > 0) {
    //         return sum(x + 1, y - 1)
    //     }
    //     else {
    //         return x
    //     }
    // });
    //
    // var result = sum(1, 10);
    // console.log(result)

    /**
     *
     * 数组的扩展
     *
     * */
    // 扩展运算符（spread）是三个点（...）。
    // 它好比 rest 参数的逆运算，
    // 将一个数组转为用逗号分隔的参数序列。
    // console.log(...['sdf', {aa: 11}, 3])


    // 该运算符主要用于函数调用。
    // function push(array, ...items) {
    //     // var moreParam = (...items)
    //     console.log(...items);
    //     array.push(...items);
    //     return array
    // }
    //
    // function add(x, y) {
    //     return x + y;
    // }
    //
    // const numbers = [4, 38];
    // var result = add(...numbers);
    // console.log(result)// 42
    // var newArray1 = push([100], ...[1, 5, 1, 5, 4, 7]);
    // var newArray2 = push([100], 1,5,4,78,5,8787);
    // console.log(newArray1)
    // console.log(newArray2)

    //把数组对应的元素传入
    // function f(v, w, x, y, z) {
    //     console.log(v, w, x, y, z)
    // }
    // const args = [0, 1];
    // f(-1, ...args, 2, ...[3,5]);

    //使用数组下标作为key返回一个object
    // let x = 10;
    // let result =  {...[5,12,111,55]};
    // console.log(result);

    //求数组最大值
    // ES5 的写法
    // var result = Math.max.apply(null, [14, 3, 77]);
    // console.log(result)
    // // ES6 的写法
    // result = Math.max(...[14, 3, 78]);
    // console.log(result)
    // // 等同于
    // result = Math.max(14, 3, 79);
    // console.log(result)

    //push函数扩展
    //es5写法
    // var arr1= [1,2,3];
    // var arr2 =[1.5,5];
    // var result = Array.prototype.push.apply(arr1,arr2);
    // console.log(result);//返回长度
    // console.log(arr1);//改变了arr1
    // console.log(arr2);//arr2不变

    // let arr1= [1,2,3];
    // let arr2 =[1.5,5];
    // //es6写法
    // var result = arr1.push(...arr2)
    // console.log(result);//5,数组长度
    // console.log(arr1);//改变了arr1
    // console.log(arr2);//arr2不变

    //时间扩展
    //es5
    // var time = new(Date.bind.apply(Date,[null,2015,10,10]));
    // console.log(time)
    // //es6
    // var timeEs6 = new Date(...[2015,10,1]);
    // console.log(timeEs6)


    //扩展-复制数组
    //数组是复合的数据类型，直接复制的话，
    // 只是复制了指向底层数据结构的指针，
    // 而不是克隆一个全新的数组。
    // const arr = [1,2];
    // const arr2 = arr;
    // arr2[1]=10;
    // console.log(arr)//[1,10],会导致两个数组都变化

    //es5实现复制的方法
    // const arr = [1,2];
    // const arr1 = arr.concat();
    // console.log(arr,arr1);
    // arr1[1] = 10;
    // console.log(arr,arr1)
    // //es6写法
    // const arr = [1, 2];
    // //第一种写法
    // const arr2 = [...arr];
    // //第二种写法
    // const [...arr3] = arr;
    // arr2[0] = 10;
    // arr3[1] = 123;
    // // console.log(arr);
    // // console.log(arr2);
    // // console.log(arr3);

    // //es5合并数组
    // var arr5 = arr.concat(arr2,arr3);
    // console.log(arr5)
    // //es6合并数组
    // const arr4 = [...arr,...arr2,...arr3];
    // console.log(arr4)

    //解构赋值结合
    // var list = ['11',12,13,15];
    // var a = list[0];
    // //第一个值作为起始下标截取到下一个值的前一位
    // var rest = list.slice(1,3);
    // console.log(rest);
    // console.log(a);

    //es6写法;
    //截取第一个元素给a
    // ,剩下的给rest,
    // rest必须为最后一个参数
    // var list = ['11',12,13,15,15666];
    // var [a,...rest] = list;
    // // var [a,...rest,b] = list;//出错
    // // var [a,...rest,...b] = list;//出错
    //
    // console.log(a,rest)

    //其他例子
    // const[first,...rest] = [];
    // //undefined可以用来判别数组第一个元素有没有,
    // // 还有有时可以用来判别是不是空数组
    // console.log(first);

    // const [[first,second,third], ...rest] = ["foo"];
    // //取出第一个元素并且解构字符串
    // console.log(first,second,third) ; // "f" "o" "o"
    // console.log(rest) ; // []

    //结构字符串
    // var strArr = [...'hello world'];
    // console.log(strArr,strArr.length)

    // console.log('x\uD83D\uDE80y'.length )// 4
    // console.log('x\uD13D\uDE80y' )// 4
    // console.log(  [...'x\ue13a\uDE80y'].length )// 3
    // console.log(  [...'x\ue13a\uDE80y'])// 3

    // 实现iterator接口对象
    // let nodeList = $('div'); //返回一个对象
    // let arr = [...nodeList];//返回一个真正的数组
    // console.log(nodeList instanceof Array);
    // console.log(arr instanceof Array);

    //     let arrayLike = {
    //         '0': 'a',
    //         '1': 'b',
    //         '2': 'c',
    //         length: 3
    //     };
    //     // 对于那些没有部署 Iterator 接口的类似数组的对象，
    //     // 扩展运算符就无法将其转为真正的数组。
    // // TypeError: Cannot spread non-iterable object.
    //     let arr = [...arrayLike];


    // let map = new Map([
    //     [1,'2'],
    //     [3,'3'],
    //     [2,'4']
    // ]);
    // console.log(map);
    // console.log(...map);
    // console.log(...map.keys());
    // console.log([...map.keys()])

    //yield 练习
    //yield 执行到yeild声明位置暂停,
    // 保留上下文只有当调用返回的对象的next方法,
    // 才会继续执行上下文
    // const go = function*(){
    //     yield 1;
    //     yield 2;
    //     yield 3;
    // };
    // var value = go();
    // console.log(value.next());
    // console.log(value.next());
    // console.log(value.next());
    // console.log(value.next());
    // console.log(...go());


    // function* fib2(){
    //     yield 0;//状态0，第一次调用next，返回0，并改变状态
    //     yield 1;//状态1，第二次调用next，返回1，并改变状态
    //
    //     var p1 = 0
    //         ,p2 =1
    //         ,cur = p1+p2;
    //     while(true){
    //
    //         yield cur;//状态2，后面调用next，返回相应的几个，状态不在改变
    //
    //         p1 = p2;
    //         p2 = cur;
    //         cur = p1+p2;
    //     }
    // }
    //
    // var fibIter2 = fib2();
    // for(var i =0;i<8;i++){
    //     console.log(fibIter2.next().value);
    // }


    // //函数中又有另外的一个函数
    // function* foo() {
    //     yield 1;
    //     yield 2;
    //     yield 3;
    //     return 4;
    // }
    //
    // function* bar() {
    //     yield foo();//生成器本身也是迭代器，所以可以用在yield*的后面
    //     yield foo();//生成器本身也是迭代器，所以可以用在yield*的后面
    // }
    //
    // //函数内不加 * 则 直接返回foo函数;
    // let first = bar();
    // let secondNext = first;
    //
    // console.log('第一个指向',first);//执行保存上下文,等待下一个调用
    // let firstNext = first.next();//调用返回{value:foo,done:false}
    // //---------------------
    // //若加这两行则会让下面的方法无法继续,但是会不会还有上下文?
    // console.log('调用第一个yield结果',firstNext);
    // // firstNext.value = 1;
    // // firstNext.done = false;
    //
    // // let secondNext = first;
    // console.log('第二个指向',secondNext);
    // let secondResult = secondNext.next();
    // console.log('调用第二个yield结果',secondResult);
    // console.log(first.next());
    // console.log(first.next());


    //----------------------
    // console.log( typeof firstNext, firstNext);//调用,执行yield的返回
    // let secondNext = firstNext.value;
    // console.log('1',secondNext.next());
    // console.log('2',secondNext.next());
    // console.log('3',secondNext.next());
    // console.log('4',secondNext.next());
    // function* bar() {
    //     yield* foo();//生成器本身也是迭代器，所以可以用在yield*的后面
    // }
    // let first = bar();
    // console.log('1',first);
    // console.log('2',first.next());
    // console.log('3',first.next());
    // console.log('4',first.next());


    // function* foo(x) {
    // let result = 0;
    // console.log('x的值',x);
    // if (x < 4) {
    //     x = yield* foo( x + 1 );
    // console.log('第二次',x);
    // }
    // let result = x + 2;
    // console.log('后面x的值',result);
    // return result;
    // }
    //
    // var g = foo(1);
    // console.log(g.next());

    //合并数组
    //es5做法
    // let result = [1,5].concat([1.5,5]);
    // console.log(result)

    //es6
    // let arr1 = [111,55,4845,45];
    // let arr2 = [11.5,5454,444,44,];
    // let result = [...arr1,...arr2];
    // console.log(result)


    // let map = new Map([
    //     [1, 'one'],
    //     [2, 'two'],
    //     [15,'key', 'three',5],
    //     []
    // ]);
    // let arr = [...map.keys()];
    // console.log(arr)


    // const go = function *() {
    //     yield 1;
    //     yield 2;
    //     yield 3;
    //     return 45;
    // };
    // let result = [...go()];//[1,2,3]
    // console.log(result);

    //Array.from()
    // let arrLike = {
    //     '0':1,
    //     '1':3,
    //     '2':6,
    //     '8':1,
    //     length:4
    // }
    // // es5,es6都出现因为length为4,es6在控制台会把undefined打印,而es5不会
    // // es5写法
    // var arr1 = [].slice.call(arrLike);//改变this指向
    // console.log(arr1);
    // console.log(arr1[4]);
    //
    // //es6写法
    // let arr2 = Array.from(arrLike);
    // console.log(arr2);
    // console.log(arr2.length);

    //实际应用中，常见的类似数组的对象是
    // DOM 操作返回的 NodeList 集合，
    // 以及函数内部的arguments对象。
    // Array.from都可以将它们转为真正的数组。
    //把dom返回的nodeList集合转为数组
    // let ps = $('p');
    // console.log(ps);
    // console.log(ps[0]);
    // console.log(typeof ps);
    // console.log('是不是数组', ps instanceof Array);
    // console.log('是不是对象', ps instanceof Object);
    // Array.from(ps).forEach(function (p) {
    //     console.log(p);
    //     console.log(p.innerHTML);
    // });
    // //把函数内部的arguments转为数组
    // function foo() {
    //     var args = Array.from(arguments);
    //     console.log(args)
    // }
    // foo(1,5,87,544,444);
    //
    // let result = Array.from('hello');
    // console.log(result)
    //
    // let nameSet = new Set(['a','v']);
    // console.log(nameSet);
    // console.log(Array.from(nameSet));

    // 扩展运算符（...）也可以将某些数据结构转为数组。

    // // arguments对象
    //     function foo() {
    //         const args = [...arguments];
    //     }
    //
    // // NodeList对象
    //     var nodeList = [...document.querySelectorAll('div')]

    //只要有length都可以部署数组接口
    // let result = Array.from({ '2':4,'3':3,length: 3 });
    // console.log(result);

    //数组的默认值转换
    // let result = Array.from([1, , 2, , 3], (n) => n || 1);
    // console.log(result)

    //数组元素的类型判断
    // function typesOf() {
    //     return Array.from(arguments,value =>typeof(value))
    // }
    // console.log(typesOf(null,[],NaN));

    //生成指定长度的特殊类型数组
    // let result = Array.from({length: 2}, () => {
    //     return (Math.random() * 10).toFixed(0)
    // });
    // console.log(result)

    //字符串长度计算
    // function countSymbols(string) {
    //     return Array.from(string).length;
    // }
    //
    // let result = countSymbols('1234567890');
    // console.log(result)

    //Array.of()
    //用来替代new Array
    // let result = Array.of(1,5,{aa:122});
    // let result = Array.of([1,3],55);
    // console.log(result);

    //数组实例的copyWithin

    // Array.prototype.copyWithin(target, start = 0, end = this.length)。
    // target（必需）：从该位置开始替换数据
    // start（可选）：从该位置开始读取数据，默认为 0。包括start
    // 如果为负值，表示倒数。
    // end（可选）：到该位置前停止读取数据，不包括end
    // 默认等于数组长度。如果为负值，表示倒数。
    // let arr = [1,2,3,4,5];
    // let result = arr.copyWithin(3,2,5);//[1,2,3,3,4]
    // console.log(result)

    //数组的find()
    // let arr = [9, 3, 8, 3, 4, 5, -1];
    //不加返回会一直循环到结束
    //这个结果是真就会把 n 抛出
    //不会把return的值抛出只会 n 抛出
    // let result = arr.find((n) => {
    // console.log(n);
    // if (n > 3) {
    // console.log(n );
    // return n - 9;
    // } else {
    //     return n % 3
    // }
    // });
    // console.log('结果', result)


    // let arr1 = [9, 3, 8, 3, 4, 5, -1];
    // let indexOfValue = '';
    // //find 接受三个参数
    // let result = arr1.find((value, index, arr) => {
    //     console.log(value, index, arr);
    //     indexOfValue = index;
    //     return value > 4
    // });
    // console.log('返回结果',result,'下标',indexOfValue)

    //数组查找对应元素下标方法 findIndex
    // [1, 5, 10, 15].findIndex(function(value, index, arr) {
    //     return value > 9;
    // }) // 2
    //找出NaN
    // let arr1 = [1,1,1,NaN,4,57];
    // let result = arr1.findIndex(y => Object.is(NaN, y));
    // console.log('下标',result)

    //数组实例方法fill 填充数组
    // let arr = ['a', 'a', 'a', 'a', 0].fill(7);
    // console.log(arr);
    //fill 会把括号内只执行一次后,运算结果保存填充到数组中
    // arr = new Array(3).fill( (Math.random()* 10 ));
    // console.log(arr)
    // let result = ['a','b'].keys()
    // console.log(result.next());
    // console.log(result.next());
    // console.log(result.next());
    // for(let index of ['a','b'].keys()){
    //     console.log(index)
    // }


    //遍历键值对
    // for(let [index,elem] of ['a','b'].entries()){
    //     console.log(index,elem)
    // }

    //数组实例的includes()
    //Array.prototype.includes方法返回一个布尔值,表示数字是否包含给定的值
    //传递两个参数,第一个为要查找的元素,第二个为要查找的起始下标
    // let arr = [{}, NaN, 2,3,5];
    // let result = arr.includes({});
    // console.log(result);
    // result = arr.includes(NaN);
    // console.log(result);
    // result = arr.includes(3);
    // console.log(result);
    // result = arr.includes(3 ,3);
    // console.log(result);
    // result = arr.includes(3 ,-2);
    // console.log(result);
    // result = arr.includes(3 ,-1);
    // console.log(result);

    //数组的空位
    // let arr = new Array(3);
    //空位不是undefined,一个位置的值等于undefined,依然是有值的,空位是没有任何值的
    //例如
    // console.log(0 in arr);
    // console.log(0 in [undefined])
    //编码时候要注意避免出现空位,以免引起空位问题
    //es5方法会忽略,而es6方法不会


    /**
     *  对象的扩展
     * */

    //属性的简洁表示法
    // const foo = 'aa';
    // const baz= [foo];
    // const baz1= {foo};//等同于{foo:'aa'}
    // console.log(baz,baz1)

    // function f(x, y) {
    //     return {x,y}
    // }
    // 等同于
    // function f1(x, y) {
    //     return{x:x,y:y}
    // }
    // let result = f(1,2);
    // let result1 = f1(1,2);
    // console.log(result,result1)

    //方法简写
    // const o = {
    //     method(){
    //         return "简写"
    //     }
    // };
    //相当于
    // const o1= {
    //     method:function () {
    //         return '没有简写'
    //     }
    // }

    //例子
    // let birth = '2010/10/10';
    // const person = {
    //     name: '张山',
    //     birth,
    //     hello() {
    //        return 'hello '+this.name
    //     }
    // };
    // console.log(person.hello())

    //用于写函数的返回值,比较方便
    // function getP(x, y) {
    //     const a = x+10;
    //     const b = y+12;
    //     const result = x+y;
    //     return {a,b,result}
    // }
    // let obj = getP(15,5);
    // console.log(obj)

    //commonJS模块输出一组变量
    // let ms = {};
    // function getItem(key) {
    //     return key in ms ?ms[key]:null
    // }
    // function setItem(key,value) {
    //     ms[key] = value;
    // }
    // function clear() {
    //     ms = {};
    // }
    // module.exports = {getItem,setItem,clear}
    // //等同于
    // module.exports = {
    //     getItem:getItem,
    //     setItem:setItem,
    //     clear:clear,
    // }

    //属性赋值器(setter)和取值器(getter),也是采用这个写法
    // const cart = {
    //     _wheels: 4,
    //     get wheels() {
    //         return this._wheels
    //     },
    //     set wheels(value) {
    //         if (value < this._wheels) {
    //             throw new Error('轮子太小了');
    //         }
    //         if (value % 2) {
    //             throw new Error('轮子必须为双数');
    //         }
    //         this._wheels = value
    //     }
    // }
    // cart.wheels = 10;
    // console.log(cart._wheels);
    // cart.wheels = 11;
    // console.log(cart._wheels);

    //简写的属性名总是字符串,所以不要写一些不好的简写名字
    // const obj = {
    //     class(){
    //         return undefined
    //     }
    // };
    // console.log(obj.class)
    // //这会相当于
    // const obj = {
    //     'class':function () {
    //         return undefined
    //     }
    // }
    //

    //如果方法的值是一个 Generator 函数 ,方法名前加星号
    // const obj = {
    //     * myGenerator() {
    //         yield 'hello'
    //     }
    // };
    // let result = obj.myGenerator()
    // console.log(result)
    // console.log(result.next())
    // console.log(result.next())

    //______________________
    //-----属性名表达式-----

    //定义对象属性
    // let obj = {}
    // obj.foo= 132;
    // obj[obj.foo+'ss'] = 123;
    // console.log(obj)


    //使用字面量定义对象,es5写法
    // let obj = {
    //     foo:true,
    //     bac:'11'
    // };

    //es6 允许一下定义
    // let propKey = 'foo';
    // let obj = {
    //     [propKey]:true,
    //     ['a'+'b'] :'123'
    // }
    // console.log(obj)

    // let lastWord = 'last word';
    // const a = {
    //     'first word':'123',
    //     [lastWord]:'321'
    // };
    // console.log(a['first word']);
    // console.log(a[lastWord]);
    // console.log(a['lastWord']);
    // console.log(a['last word']);


    //表达式还可以用于定义方法名
    //不推荐吧?????
    // let obj = {
    //     ['hel'+'lo'](){
    //         return 'say hi'
    //     }
    // }
    // console.log(obj.hello())


    // const foo = 'bar';
    // const bar = 'abc';
    //错误写法
    // const baz = {[foo]}
    //正确写法
    // const baz = {[foo]:bar};
    // console.log(baz)

    //特别注意,属性表达式如果是一个对象,默认情况下会自动将对象转为字符串[object object];
    // const keyA = {a:1};
    // const keyB = {b:1};
    // const obj = {
    //     [keyA] : 'A',
    //     [keyB] : '1'
    // };
    // console.log(obj)

    //[keyA]和[keyB]得到的都是[object Object]，所以[keyB]会把[keyA]覆盖掉，而myObject最后只有一个[object Object]属性。

    //方法的 name 属性
    //每个函数都有name属性
    // const person = {
    //     say() {
    //         console.log(this.name)
    //     }
    // };
    // console.log(person.say.name);
    // person.say();

    //如果对象方法使用了取值函数,存值函数,name会在方法名的get和set的属性上面
    // const obj = {
    //     get foo(){},
    //     set foo(x){}
    // };
    // console.log(obj.foo.name)
    // const descriptor = Object.getOwnPropertyDescriptor(obj,'foo');
    // console.log(descriptor.get);
    // console.log(descriptor.get.name);
    // console.log(descriptor.set.name);

    //bind 方法创造函数,name属性返回bound 加上原函数的名
    //function构造函数创造的函数,name属性返回anonymous
    // console.log((new Function()).name)

    // let doSome = function () {
    //     console.log(this.name);
    //     return this
    // };
    // let obj = {name:12};
    // let result = doSome.bind(obj.name);
    // console.log('外面',obj);
    // console.log('bind后',result);
    // let newDoSome = doSome.bind(obj);
    // let newObj = newDoSome();
    // console.log(newObj)

    //Object.is()
    //es6解决==和===的缺陷方法,用来比较两个对象是否严格相等
    // let flag = Object.is('foo', 'foo');
    // console.log(flag);
    // let obj = {a: 1};
    // let obj1 = {a: 1};
    // flag = Object.is({}, {});//false
    // flag = Object.is(obj, obj1);//false
    // flag =  Object.is(1,1)
    // console.log(flag);


    // Object.assign方法用于对象的合并 ,
    // 将源对象的所有可枚举属性复制到目标对象;
    //是一个浅拷贝方法,
    // 并且,如果目标对象和源对象有相同的属性,目标对象会被覆盖
    // const target = {a:1};
    // const source1 = {b:1};
    // const source2 = {a:2};
    // const source3 = {a:3};
    // source3.__proto__.b = 123;
    // Object.assign(target,source1);
    // console.log(target);
    // Object.assign(target,source2);
    // console.log(target);
    // Object.assign(target,source3);
    // console.log(target);
    //如果只有一个参数,那么会直接返回传入参数

    //不是对象会直接转为对象
    // console.log(Object.assign(2))

    //undefined和null 不能作为参数,
    // 如果作为参数会报错,
    // 不作为第一参数,则不会报错,会被跳过

    //如果只是传入字符串,字符串会被转为数组
    // let arr = Object.assign('BASIC');
    // console.log(arr[0],arr instanceof Array) // B,false
    // console.log(arr,arr instanceof Object)

    //浅拷贝
    //源对象的某个属性的值是对象,那么目标对象拷贝得到的是这个对象的引用;
    // const obj = {
    //     a: {ba: 1}
    // };
    // const obj1 = Object.assign({},obj);
    // console.log(obj,obj1);
    // obj.a.ba = 123456789;
    // console.log(obj,obj1);
    //源对象的任何变动都会映射到目标对象中去

    //Object.assign还可以用来处理数组;
    // let result = Object.assign([1,2,3],[3,2,1])
    // console.log(result)

    //Object.assign只能用来值的复制,如果要复制的值是一个取值函数 ,那么将求值后复制
    // var a = 10;
    // const source = {
    //     get foo() {
    //         return a
    //     },
    //     set foo(x) {
    //         return x + a
    //     }
    // };
    // const target = {};
    // Object.assign(target, source);
    // source.foo = 1000;
    // console.log('foo',source.foo)
    // console.log(target)

    // Object.assign 方法用处
    // 1）为对象添加属性
    // class Point {
    //     construtor(x,y){
    //         Object.assign(this,{x,y})
    //     }
    // }
    // console.log(Point)

    // 2)为对象添加方法
    // let someClass = {};
    // Object.assign(someClass.prototype,{
    //     //将两个方法添加到someClass
    //     method1(){
    //
    //     },
    //     method2(){
    //
    //     }
    // })

    // 3)克隆对象
    // function clone(origin) {
    //     return Object.assign({},origin)
    // }
    // 将原始对象拷贝到一个空对象，就得到了原始对象的克隆。
    // 保持继承链的话,则要:
    // function clone(origin) {
    //     let orignProto = Object.getPrototypeOf(origin);
    //     return Object.assign(Object.create(orignProto),origin)
    // }
    //
    // // 4)合并多个对象
    // const merge = (target,...source) => Object.assign(target,...source);
    // let result = merge({},{a:1},{b:123});
    // console.log(result)

    // 5)为属性指定默认值
    //  注意,如果有同名属性那么就被覆盖
    //  由于浅拷贝的问题,default 最好属性都是简单类型,不要有复合类型,不要指向另外的对象
    //  否则很可能出现不被期待的结果
    // const defaultValue = {
    //     logLevel : 0 ,
    //     outPutFormat :'html'
    // };
    // function processContent(newOptions, defaultValue) {
    //     return Object.assign({}, newOptions, defaultValue);
    // }

    // let result = processContent({a:111});
    // console.log(result)

    //应用例子如端口改造
    // const defaultApiPort = {
    //     url: {
    //         host: 'xxx.xxx.xxx.xx',
    //         port: 9100
    //     }
    // };
    // let newDefaultApiPort = processContent({url: {port: 8888}}, defaultApiPort);
    // console.log(newDefaultApiPort)
    //结果:{
    // url :{
    //     host :'xxx.xxx.xxx.xx',
    //     port:9100
    // }}
    // 与期待的结果不一致,所以最好就是要简单类型

    //属性的可枚举性和便利
    //可枚举性
    //descriptor
    //Object.getOwnPropertyDescriptor
    // let obj = {
    //     foo:11
    // };
    // let property = Object.getOwnPropertyDescriptor(obj,'foo');
    // console.log(property)
    //  {
    //    value: 11,//值
    //    writable: true,//可重写性
    //    enumerable: true,//可枚举性
    //    configurable: true//可配置
    //  }

    // let obj1 = {foo:{a:11}};
    // property = Object.getOwnPropertyDescriptor(obj1,'foo');
    // console.log(property)
    // 如果enumerable 为false,会被以下四个操作忽略
    // for...in 循环 //只遍历对象自身的和继承的可枚举的属性
    // Object.keys() 返回对象滋生的所有可枚举的属性的键名
    // JSON.stringify() 只串行化对象自身的可枚举的属性
    // Object.assign 忽略enumerable 为false的属性,只拷贝对象自身可枚举的属性
    // 可枚举性是为了规避 对象原形上的属性和方法,比如 toString,数组的length属性

    // let propertyEnumerable = Object.getOwnPropertyDescriptor(Object.prototype,'toString').enumerable;
    // console.log('toString',propertyEnumerable)
    //
    // let arrPropertyLength = Object.getOwnPropertyDescriptor([],'length').enumerable;
    // console.log('lengthEnumerable',arrPropertyLength)

    // ES6 规定，所有 Class 的原型的方法都是不可枚举的。
    // let result = Object.getOwnPropertyDescriptor(class {foo(){}}.prototype,'foo').enumerable
    //
    // console.log('class',result)

    //操作中引入继承的属性会让问题复杂化,尽量用Object.keys替代for...in,result
    // let obj = {
    //     a: {b: '1'},
    //     b: '1'
    // };
    // Object.keys(obj).forEach(function (value) {
    //     obj[value] = {c: 1}
    // });
    // console.log(obj)

    //属性的遍历
    // 1 for ... in
    //for ... in 循环遍历对象自身的和集成的可枚举属性（不含 Symbol 属性）

    // 2 Object.keys(obj)
    // 返回一个数组,包括对象自身的(不含继承的)所有可枚举的属性

    // 3 Object.getOwnPropertyNames(obj)
    // 返回一个数组,包含对象自身的所有属性,(不含symbol属性,但是包括不可枚举的属性)的键名
    // this.c = 10;
    // let obj1 = {
    //     a: {
    //         c:101,
    //         b: function () {
    //             console.log('...', this)
    //             console.log('...', this.constructor)
    //             return this.c
    //         }
    //     },
    // };
    //
    // let b = obj1.a.b.bind(obj1.a);
    // console.log(b());
    // let result = Object.getOwnPropertyNames(obj1);
    // console.log(result)

    // 4 Object.getOwnPropertySymbols(obj)
    // 返回一个数组,包含对象本身的所有symbol属性的键名
    // let obj = {
    //     a:1
    // };
    // let result = Object.getOwnPropertySymbols(obj);
    // console.log(result)

    // 5 Reflect.ownKeys(obj)
    // 返回一个数组,包含对象自身的所有键名,不管键名是symbol或者字符串,也不管是否可枚举

    //次序规则如下:
    // - 首先遍历所有数值键,按照数值升序排列
    // - 其次遍历所有字符串键,按照加入时间顺序排列
    // - 最后遍历所有 Symbol 值,按照加入时间升序排列

    // Object.getOwnPropertySymbols(obj)
    // 方法返回某个对象属性的所有自身属性(非继承属性)的描述对象
    // let obj = {}
    // Object.getOwnPropertySymbols(obj)
    // { foo:
    //    { value: 123,
    //      writable: true,
    //      enumerable: true,
    //      configurable: true },
    //   bar:
    //    { get: [Function: get bar],
    //      set: undefined,
    //      enumerable: true,
    //      configurable: true }
    // }

    // Object.getOwnPropertyDescriptors 配合 Object.defineProperties的方法,可以实现正确拷贝
    // const source = {
    //     set foo(value) {
    //         console.log(value);
    //         return value
    //     }
    // };
    // source.foo = 10;
    // console.log(source)
    // const target = {};
    // Object.defineProperties(target, Object.getOwnPropertyDescriptors(source))
    // let foo = Object.getOwnPropertyDescriptor(target, 'foo');
    // console.log(foo)
    // // 合并简写函数如下
    // const mergeObject = (target, source) => Object.defineProperties(
    //     target,
    //     Object.getOwnPropertyDescriptors(source)
    // );

    // Object.getOwnPropertyDescriptors 方法的另一个用处,
    // 是配合Object.create 方法,将对象属性克隆到新对象,属于浅拷贝
    //
    // const clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj))
    //或者
    // const anotherClone = (obj) => Object.create(
    //     Object.getPrototypeOf(obj),
    //     Object.getOwnPropertyDescriptors(obj)
    // )

    //es5 一个对象继承另一个对象
    // const prot = {};
    // const obj = {
    //     __proto__: prot,
    //     foo: 123
    // }
    //es6 规定 __proto__只有浏览器部署,其他环境不用部署
    //去掉 __proto__,写法如下
    //原形链上的继承,__proto__会把aa属性继承
    // const prot = { aa:123};
    // const obj = Object.create(prot);
    // let prot = { aa:123};
    // const obj = Object.assign(
    //     Object.create(prot),
    //     {foo: 13}
    // );
    // console.log(obj);

    //使用Object.getOwnPropertyDescriptors,另一种写法
    // let prot = { aa:23};
    // const obj = Object.create(prot,Object.getOwnPropertyDescriptors({foo:123}))
    // console.log(obj)

    // 实现混入模式
    //使用Object,getOwnPropertyDescriptors,实现混入模式
    // let mix = (obj) => ({
    //     with: (...mixins) => mixins.reduce(
    //         (c, mixin) => Object.create(
    //             c, Object.getOwnPropertyDescriptors(mixin)
    //         ), obj)
    // });
    // let a = {
    //     a: "a"
    // };
    // let b = {
    //     b: 'b'
    // };
    // let c = {
    //     c: 'c'
    // };
    // let d = mix(c).with(a, b);
    // console.log(d)
    // console.log(d.c)
    // console.log(d.b)
    // console.log(d.a)

    //es6 操作__proto__属性
    // let obj1 = {}
    // const obj = {
    //     method:function () {
    //         //.....//
    //     }
    // }
    // obj.__proto__ =  obj1
    //
    // //es5中如下
    // var obj2 = Object.create(obj1);
    // obj2.method = function () {
    //     //.....//
    // }


    //__proto只有浏览器支持,其他运行环境并不一定要部署
    //如果要用的话,最好还是使用
    // 读操作 Object.getPrototypeOf()
    // 写操作 Object.setPrototypeOf()
    // 生成操作 Object.create();
    //__proto__调用的是Object.prototype.__proto__
    // console.log(Object.prototype)
    //
    // Object.defineProperty(Object.prototype, '__proto__', {
    //     get() {
    //         let _thisObj = Object(this);
    //         return Object.getPrototypeOf(_thisObj);
    //     },
    //     set(proto) {
    //         if (this === undefined || this === null) {
    //             throw new TypeError();
    //         }
    //         if (!isObject(this)) {
    //             return undefined;
    //         }
    //         if (!isObject(proto)) {
    //             return undefined;
    //         }
    //         let status = Reflect.setPrototypeOf(this, proto);
    //         if (!status) {
    //             throw new TypeError();
    //         }
    //     },
    // });
    //
    // function isObject(value) {
    //     return Object(value) === value;
    // }

    //如果一个对象本身部署了__proto__属性,该属性的值就是对象的原型
    // let a = Object.getPrototypeOf('__proto__');
    // console.log(a)

    // Object.setPrototypeOf()
    // Object.setPrototypeOf()作用与__proto__相同,用来设置一个对象的prototype对象,
    // 返回参数对象本身
    //es6推荐使用setPrototypeOf
    // 格式
    // Object.setPrototypeOf(obj,proto)
    // 使用
    // const obj = Object.setPrototypeOf({},{a:11});
    // console.log(obj)
    // 相当于es5如下
    // function setPrototype(obj,proto) {
    //     obj.__proto__ = proto;
    //     return obj;
    // }

    // let proto = {};
    // let obj = {x:10};
    // Object.setPrototypeOf(obj,proto);
    // proto.y = 20;
    // console.log(obj.x)
    // console.log(obj.y)
    // console.log(obj)

    //如果第一个参数不是对象，会自动转为对象。
    // 但是由于返回的还是第一个参数，所以这个操作不会产生任何效果。
    // Object.setPrototypeOf(1, {}) === 1 // true
    // Object.setPrototypeOf('foo', {}) === 'foo' // true
    // Object.setPrototypeOf(true, {}) === true // true
    //由于undefined和null无法转为对象，
    // 所以如果第一个参数是undefined或null，就会报错。
    // Object.setPrototypeOf(undefined, {})
    // TypeError: Object.setPrototypeOf called on null or undefined

    // Object.setPrototypeOf(null, {})
    // TypeError: Object.setPrototypeOf called on null or undefined

    //Object.getPrototypeOf(),用于读取一个对象的原型对象
    // function rectTangle() {
    //     this.a = 10
    // }
    // rectTangle.b = 10
    // const rec = new rectTangle();
    // console.log(Object.getPrototypeOf(rec));
    // console.log(rectTangle.prototype);
    // console.log(Object.getPrototypeOf(rec) === rectTangle.prototype);

    // 同样,参数不是对象,会被自动转为对象,
    // 如果参数是undefined或者null,无法转为对象,会报错
    // 等同于 Object.getPrototypeOf(Number(1))
    // Object.getPrototypeOf(1)
    // Number {[[PrimitiveValue]]: 0}

    // 等同于 Object.getPrototypeOf(String('foo'))
    //     Object.getPrototypeOf('foo')
    // String {length: 0, [[PrimitiveValue]]: ""}

    // 等同于 Object.getPrototypeOf(Boolean(true))
    //     Object.getPrototypeOf(true)
    // Boolean {[[PrimitiveValue]]: false}

    // Object.getPrototypeOf(1) === Number.prototype // true
    // Object.getPrototypeOf('foo') === String.prototype // true
    // Object.getPrototypeOf(true) === Boolean.prototype // true
    // Object.getPrototypeOf(null)
    // TypeError: Cannot convert undefined or null to object

    // Object.getPrototypeOf(undefined)
    // TypeError: Cannot convert undefined or null to object


    //---super关键字---
    // this关键字总是指向函数所在的当前对象
    // super指向的是当前对象的原型对象
    // const proto = {
    //     hello:'hello'
    // };
    // const obj = {
    //     find(){
    //         return super.hello;
    //     }
    // }
    // Object.setPrototypeOf(obj,proto);
    // console.log(obj.find())//'hello'

    // 注意,super 关键字标识原型对象时,只能用在对象的方法中,用在其他地方报错
    //报错
    // const obj = {
    //     foo:super.foo
    // };
    // 报错
    // const obj = {
    //     foo:() => super.foo
    // };
    // 报错
    // const obj = {
    //     foo:function () {
    //         return super.foo
    //     }
    // }

    //JavaScript 引擎内部，
    // super.foo等同于Object.getPrototypeOf(this).foo（属性）
    // 或Object.getPrototypeOf(this).foo.call(this)（方法）。


    // const proto = {
    //     x: 'hello',
    //     foo() {
    //         console.log(this.x);
    //     },
    // };
    //
    // const obj = {
    //     x: 'world',
    //     foo() {
    //         super.foo();
    //     }
    // }
    //
    // Object.setPrototypeOf(obj, proto);
    // //原型链查找只会找到 obj自身属性,自身属性找不到才往上找
    // obj.foo() // "world"


    //----Object.keys(),Object.values(),Object.entries();----

    // Object.keys();
    //ES5 引入了Object.keys方法，返回一个数组，
    // 成员是参数对象自身的（不含继承的）所有可遍历（enumerable）属性的键名。
    // let obj = {
    //     foo:'bar',
    //     bar:'123'
    // };
    // console.log(Object.keys(obj));
    //es6 引入和keys方法对应的方法
    //keys,键名
    //values 键值
    // entries 键值和键名两个数组组成的数组
    // let {keys, values, entries} = Object;
    // let obj = {
    //     foo: 'bar',
    //     bar: '123'
    // };
    // console.log( keys(obj))
    // console.log( values(obj))
    // console.log( entries(obj))

    // 遍历时,属性名为数值的属性,是按照数值大小,从小到大遍历的
    // const obj = { 100: 'a', 2: 'b', 7: 'c' };
    // Object.values(obj)
    // ["b", "c", "a"]

    //Object.values 只返回对象自身可遍历属性
    // const obj = Object.create({},{p:{value:123}});
    // console.log(Object.values(obj));
    // Object.create 不显式声明的话,默认是不可遍历的 p 属性描述对象的enumerable 则默认false
    //如果要可枚举则需要把enumerable设置为true
    // const obj = Object.create({},{p:{
    //     value:123,
    //     enumerable: true
    // }})
    // console.log(Object.keys(obj))
    // console.log(Object.values(obj))

    // Object.values() 会过滤属性名字为Symbol值的属性
    // let result = Object.values({[Symbol()]:123,foo: '321'});
    // console.log(result)

    //如果 Object.values() 参数为 字符串 ,那么会返回字符组成的一个数组
    // let result = Object.values('foo');
    // console.log(result)


    // 如果参数不是对象，Object.values会先将其转为对象。
    // 由于--数值和布尔值--的包装对象，
    // 都不会为实例添加非继承的属性。
    // 所以，Object.values会返回空数组。
    // Object.values(42) // []
    // Object.values(true) // []

    //Object.entries()
    // Object.entries 方法返回一个数组,
    // 成员是参数对象自身的(不含继承的)
    // 所有可遍历的(enumerable)属性的键值对数组
    // 除了返回值不一样,该方法的行为与Object.values一致

    // const obj = { foo: 'bar', baz: 42 };
    // const map = new Map(Object.entries(obj));
    // console.log(map) // Map { foo: "bar", baz: 42 }

    // // Generator函数的版本
    //     function* entries(obj) {
    //         for (let key of Object.keys(obj)) {
    //             yield [key, obj[key]];
    //         }
    //     }
    //
    // // 非Generator函数的版本
    //     function entries(obj) {
    //         let arr = [];
    //         for (let key of Object.keys(obj)) {
    //             arr.push([key, obj[key]]);
    //         }
    //         return arr;
    //     }


    //对象的扩展运算符

    // 1 解构赋值
    // 对象的解构赋值用于从一个对象取值,相当于将所有可遍历的,但尚未被读取的属性
    //分配到指定对象上去,所有的键值都会拷贝到新的对象上面

    // let {x, y, ...z} = {x: 1, y: 2, a: 23, b: 123};
    // console.log(x)
    // console.log(y)
    // console.log(z)

    // 由于解构赋值要求等号右边是一个对象，
    // 所以如果等号右边是undefined或null，
    // 就会报错，因为它们无法转为对象。
    // 报错
    // let {x ,...y} = null;
    // 报错
    // let {x ,...y} = undefined;

    // 注意,解构赋值必须为最后一个参数,否则会报错
    // let { ...x, y, z } = obj; // 句法错误
    // let { x, ...y, ...z } = obj; // 句法错误

    //注意,解构赋值的拷贝是浅拷贝,如果一个键值为复合类型的值,
    // 那么解构赋值拷贝的是这个值的引用,而不是副本
    // let obj = {a: {b: 1}};
    // let {...x} = obj;
    // obj.a.b = 123;
    // console.log(x) //{a :{ b:123 }}

    //另外,扩展运算符的解构赋值,不能复制继承自原型对象的属性
    // let obj1 = {a:1};
    // let obj2 = {b:2};
    // obj2.__proto__ = obj1;
    //只复制了o2自身的属性，没有复制它的原型对象o1的属性
    // let { ...a } = obj2;
    // console.log(a);
    // console.log(a.a)

    // const obj = Object.create({x: 1, y: 2});
    // obj.z = 3;
    // console.log(obj);
    // // let {x} = obj
    // let {x, z, y, ...c} = obj;
    // console.log(x);
    // console.log(y);
    // console.log(z);
    // function baseFunction({ a, b }) {
    //     // ...
    // }
    // function wrapperFunction({ x, y, ...restConfig }) {
    //     // 使用x和y参数进行操作
    //     // 其余参数传给原始函数
    //     return baseFunction(restConfig);
    // }

    //扩展运算符用于取出参数对象的所有可遍历属性,拷贝到当前对象之中
    // let z = {a: 2, b: 4};
    // 有相同属性,属性放在结构的对象后面,会把解构的属性覆盖
    // let n1 = {...z,a:124,c:456};
    // 放在前面则被解构对象覆盖
    // let n2 = {a:124,...z,c:456};
    // console.log(n1,n2)

    //以上只拷贝了对象实例的属性,如果系那个完整拷贝一个对象,拷贝对象原型的属性
    // let obj = {a: 2, b: 4};
    // //方法一,适用于浏览器
    // const clone = {
    //     __proto__: Object.getPrototypeOf(obj),
    //     ...obj
    // };
    // //方法二
    // const clone1 = Object.assign(
    //     Object.create(
    //         Object.getPrototypeOf(obj)
    //     ),
    //     obj);
    // //方法三,低版本不支持
    // const clone2 = Object.create(
    //     Object.getPrototypeOf(obj),
    //     Object.getOwnPropertyDescriptors(obj)
    // )

    // 扩展运算符用于合并多个对象
    // let a = {a:'1'};
    // let b = {b:'12'};
    // let c = {z:'12'};
    // let ab = {...a,...b,...c};
    // console.log(ab)

    //与数组的扩展运算符一样,对象的扩展运算符后面可以跟表达式
    // this.b = 10;
    // const obj = {
    //     ...(this.b > 0? {a:1}:{}),
    //     b:1
    // };
    // console.log(obj)

    //如果扩展运算符的参数是null或者undefined,两个值会被忽略
    // let emptyObject = { ...null, ...undefined }; // 不报错

    //扩展运算符的参数对象之中，如果有取值函数get，这个函数是会执行的。
    // 并不会抛出错误，因为 x 属性只是被定义，但没执行
    // let aWithXGetter = {
    //     ...a,
    //     get x() {
    //         throw new Error('not throw yet');
    //     }
    // };

    // 会抛出错误，因为 x 属性被执行了
    //     let runtimeError = {
    //         ...a,
    //         ...{
    //             get x() {
    //                 throw new Error('throw now');
    //             }
    //         }
    //     };


    //---Null 传导运算符
    //传统判定对象内部是否有某个属性
    // const first = (message && message.xx && message.xx.xx) || 'default';
    // console.log(first)
    // 提案中的写法
    // const firstName = message?.body?.user?.firstName || 'default';

    /**
     *
     * symbol
     *
     * */
    // 解决 es5中对象属性名都是字符串,容易造成属性名冲突的问题
    // es6 引入新的原始数据类型 Symbol是第七种数据类型
    // 表示独一无二的值

    // let s = Symbol('12111');
    // console.log(typeof s);
    // console.log(s);
    // s = 123;
    // console.log(typeof s);
    // console.log(s);

    //Symbol函数前不能使用new命令，否则会报错。
    // 这是因为生成的 Symbol 是一个原始类型的值，不是对象。
    // 也就是说，由于 Symbol 值不是对象，
    // 所以不能添加属性。基本上，它是一种类似于字符串的数据类型。

    //如果Symbol 的参数是一个对象,就会调用该对象的toString 方法,将其转为字符串
    // const obj = {
    //     toString(){
    //         return '123'
    //     }
    // };
    // const symbolObj = Symbol(obj);
    // console.log(symbolObj);

    //Symbol 函数的参数只是表示对当前Symbol值的描述,相同参数的Symbol函数的返回值是不相等的
    // let s1= Symbol();
    // let s2= Symbol();
    //
    // console.log(s1 === s2);//false

    // let s1= Symbol('foo');
    // let s2= Symbol('foo');
    // console.log(s1 === s2);  //false

    //symbol值可以显式转为字符串,不可以和其他类型的值进行运算
    // let sym = Symbol('test');
    // console.log(String(sym));
    // console.log(sym.toString())

    // let sym = Symbol();
    // let result = Boolean(sym);
    // console.log(result)
    // console.log(!sym);

    // Number(sym)//TypeError
    // sym+2 ;//TypeError

    //作为属性名的Symbol,使用symbol值作为标识符,
    // 用于对象的属性名,保证不会出现同名的属性
    // 防止改写或者覆盖

    // let mySymbol = Symbol();
    // 第一种写法
    // let a = {};
    // a[mySymbol] = 'hello';

    //第二种写法
    // let b = {
    //     [mySymbol]:'hello'
    // };

    //第三种写法
    // let a = {};
    // Object.defineProperty(a,mySymbol,{value:'hello'});
    // console.log(a[mySymbol])

    // 注意，Symbol 值作为对象属性名时，不能用点运算符。
    // const mySymbol = Symbol();
    // const a = {};
    // a.mySymbol = 'hello';
    // console.log(a[mySymbol]);
    // console.log(a['mySymbol']);

    //对象内部,使用symbol值定义属性时,symbol值必须放在方括号中
    // let s = Symbol();
    // let obj = {
    //     [s]:function (arg) {
    //         console.log(arg)
    //     }
    // };
    // obj[s](123);

    // 简写
    // let s = Symbol();
    // let obj = {
    //     [s](arg) {
    //         console.log(arg)
    //     }
    // };

    //Symbol 类型可以用于定义一组常量,保证这组常量的值都是不相等的
    // let log = {};
    // let log = function (level,str) {
    //     console.log(level,str)
    // }
    // log.levels = {
    //     DEBUG:Symbol('debug'),
    //     INFO:Symbol('info'),
    //     WARN:Symbol('warn')
    // };
    // log(log.levels.DEBUG,'Debug');
    // log(log.levels.INFO,'info');

    // const COLOR_RED = Symbol();
    // const COLOR_GREEN = Symbol();
    //
    // function getComplement(color) {
    //     switch (color) {
    //         case COLOR_RED:
    //             return 'red';
    //         case COLOR_GREEN:
    //             return 'green';
    //         default:
    //             throw new Error('undefined color')
    //     }
    // }
    // let result = getComplement(COLOR_GREEN);
    // console.log(result)

    // 消除魔术字符串
    // 魔术字符串是指在代码中多次出现,与代码形成强耦合的某一具体的字符串,或者数值,
    // 代码应尽量消除魔术字符串

    // function getArea(shape, option) {
    //     let area = 0;
    //     switch (shape){
    //         case 'triangle'://魔术字符串
    //             area = 0.5 * option.width * option.height;
    //             break;
    //         default:
    //             return 'err'
    //     }
    //     return area
    // }
    // let area = getArea('triangle',{width:100,height:100});
    // console.log(area)

    //消除魔术字符串
    // 中间变量,查看代码只需要看这个中间变量
    // const shapeType = {
    //     triangle: 'Triangle'
    // };
    //
    // function getArea(shape, options) {
    //     let area = 0;
    //     switch (shape) {
    //         case shapeType.triangle:
    //             area = 0.5 * option.width * option.height;
    //             break;
    //         default:
    //             return 0
    //     }
    //     return area
    // }
    // let area= getArea(shapeType.triangle,{width:100,height:100})

    //这时候可以发现shapType.triangle等于哪个值并不重要,
    // 只要确保不会跟其他shapeType属性的值冲突即可
    // const shapeType = {
    //     triangle:Symbol()
    // }

    // --- 属性名的遍历 ---
    //Symbol 作为属性名,该属性不会出现在for...in 、for ...of 循环中
    // 不会被Object.keys(),Object.getOwnPropertyName()、JSON.stringify 返回,
    // 但是它又不是一个私有属性,有一个 Object.getOwnPropertySymbols 方法,
    // 可以获取指定对象的所有Symbol属性名
    // Object.getOwnPropertySymbols() 方法返回一个数组,
    // 成员是当前对象的所有用作属性名的symbol值
    // const obj = {};
    // let a = Symbol('a');
    // let b = Symbol('b');
    // obj[a] = 'hello';
    // obj[b] = 'world';
    // const result = Object.getOwnPropertySymbols(obj);
    // console.log(result)
    // console.log(obj[result[0]])
    //
    //  Object.getOwnPropertySymbols方法与for...in循环、
    //  Object.getOwnPropertyNames方法进行对比的例子
    // const obj = {a: 123};
    // let foo = Symbol('foo');
    // obj.__proto__.b = '321';
    // Object.defineProperty(obj, foo, {value: 'foobar'});
    //
    // console.log(obj);
    // console.log(obj.b);
    // console.log('==========')
    // for (let i in obj) {
    //     console.log(i);
    // }
    // console.log('==========')
    // let property = Object.getOwnPropertyNames(obj);
    // let symbolResult = Object.getOwnPropertySymbols(obj);
    // console.log(property);
    // console.log('==========')
    // console.log(symbolResult);

    // Reflect.ownKeys 方法可以返回所有类型的键名,包括常规键名和Symbol 键名
    // let obj = {
    //     [Symbol('key')]:1,
    //     enum :1,
    //     nonEnum :3
    // };
    // let result = Reflect.ownKeys(obj);
    // console.log(Reflect)
    // let valuesResult = Reflect.ownValues(obj);
    // console.log(result)

    // 由于以Symbol 值作为名称的属性,不会被常规方法遍历到,
    // 可以利用这个特性,为对象定义一些非私有但又只用于内部的方法

    // let size = Symbol('size');

    // class Collection {
    //     constructor() {
    //         this[size] = 0;
    //     }
    //
    //     add(item) {
    //         console.log('this.size',this[size])
    //         this[this[size]] = item;
    //         this[size]++;
    //     }
    //     static sizeOf(instance){
    //         console.log('instance',instance)
    //         return instance[size]
    //     }
    // }
    // let x = new Collection();
    // let x1 = Collection.sizeOf(x);
    // console.log('x1',x1);
    // x.add('foo');
    // console.log('foo',x)
    // let x2 = Collection.sizeOf(x);
    // console.log('x2',x2);

    // let keys= Object.keys(x);
    // let propertyNames = Object.getOwnPropertyNames(x);
    // let propertySymbols = Object.getOwnPropertySymbols(x);
    // console.log('key',keys);
    // console.log('propertyNames',propertyNames);
    // console.log('propertySymbols',propertySymbols);

    // Symbol.for(), Symbol.keyFor()
    // 使用同一个symbol值,接受一个参数作为搜索值
    //在全局登记以供搜索
    // let s1 = Symbol.for('foo');
    // console.log(s1)
    // let s2 = Symbol.for('foo');
    // console.log(s1 === s1)

    // let s1 = Symbol.for('foo');
    // console.log(Symbol.keyFor(s1));
    // let s2 = Symbol('foo');
    // console.log(Symbol.keyFor(s2));


    // 实例:模块的 singleton 模式
    // Singleton 模式指的是调用一个类,任何时候返回的都是同一个实例

    // unFinish------ symbol 做到 第七小节

    /**
     *
     * Set 和 Map数据结构
     *
     * */
    // const s = new Set();
    // console.log(s);
    // let arr = [1,4,5,4,8,7,6];
    // arr.forEach(x=>s.add(x));
    // console.log(s)
    // s.forEach(i => console.log(i));
    // 结果表明 Set 结构不会添加重复的值。

    // set 函数可以接受一个数组(或者 具有 iterable 接口的其他数据结构)作为参数
    // ,用来初始化

    // 例:
    // const set = new Set([1,22,22]);//重复值会被剔除
    // console.log([...set])

    // 例:
    // const items = new Set([1.,1,1,,5,5,5,444,,4,4,]);//如果没有值,会成为undefined
    // console.log(items.size);
    // console.log(items)

    //例:
    // function divs() {
    //     return [...$('div')]
    // }
    // const set = new Set(divs());

    // 等价于
    // divs().forEach(div => set.add(div));
    // console.log(set);
    // console.log(set.size)

    //去除数组重复成员的方法
    // let arr = [1,5,5,4,55,44,'55'];
    // let result = [...new Set(arr)];// 不同的类型不会被替换,隐型转换
    // console.log(result)
    // 在set内部 NaN 是相等;
    // let set = new Set();
    // let a = NaN;
    // let b = NaN;
    // set.add(a);
    // set.add(b);
    // console.log(set) // Set {NaN}

    // 两个空对象是不相等的
    // let a = {};
    // let set = new Set();
    // set.add(a); // size: 1
    // set.add(a); // size :1
    // set.add({});// size :2
    // set.add({});// size :3
    // console.log(set.size)

    // Set 实例的属性和方法
    // Set.prototype.constructor : 构造函数,默认是set函数
    // Set.prototype.size : 返回 Set 实例的成员总数

    // add(value)：添加某个值，返回 Set 结构本身。
    // delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
    // has(value)：返回一个布尔值，表示该值是否为Set的成员。
    // clear()：清除所有成员，没有返回值。

    // let s = new Set();
    // s.add(123).add(1234).add(123);// 添加了两次123
    //
    // console.log(s.size);
    // console.log(s.has(123));
    // console.log(s.has(1234));
    // s.delete(1234);
    // s.delete(12345);
    // console.log(s.has(1234));
    // console.log(s);
    // s.clear();
    // console.log(s)

    //Array.from 方法可以将Set结构转为数组
    // const items = new Set([1,15,4,4,45]);
    // console.log(Array.from(items))

    // 数组去重的另一个办法
    // function dedupe(array) {
    //     return Array.from(new Set(array))
    // }
    // let arr = [1,54,45,44,44,445,43];
    // let result = dedupe(arr);
    // console.log(result)

    // 遍历操作
    // Set 结构的实例有四个遍历方法，可以用于遍历成员
    // keys(); 返回键名的遍历器
    // values(); 返回键值的遍历器
    // entries(); 返回键值对的遍历器
    // forEach(); 使用回调函数遍历每个成员

    //Set的遍历顺序就是插入顺序,使用 Set 保存一个回调函数列表，
    // 调用时就能保证按照添加顺序调用。
    // 1 keys(),values(),entries()
    // 由于 Set 结构没有键名,只有键值,(或者说键名和键值为同一个值),
    // 所有keys方法和values方法行为一致
    // let set = new Set(['red','yellow','red']);
    // for(let item of set.keys()){
    //     console.log(item)
    // }
    //
    // for( let item of set.values()){
    //     console.log(item)
    // }
    //
    // for (let item of set.entries()){
    //     console.log(item)
    // }

    // 省略 values 方法
    // for( let x of set){
    //     console.log('直接遍历',x)
    // }

    // forEach()
    // let set =new Set([1,4,9]);
    // set.forEach((item,index,_this)=>{
    //     console.log( item,index,_this)
    // })

    // 扩展运算符( ... ) ,数组的map和filter方法可以间接用于Set
    // let set = new Set([1,2,3]);
    // let result = new Set([...set].map(x => x*x));
    // console.log(result)

    // let set = new Set([1, 2, 3]);
    // set = new Set([...set].filter(item => item % 2));
    // console.log(set)

    // 使用 Set 实现并集(union),交集(intersect),和差集(difference)

    // let a = new Set([1, 25, 55, 44]);
    // let b = new Set([0, 25, 23, 55]);
    //
    // //并集
    // let union = new Set([...a, ...b]);
    // console.log('并集',union);
    //
    // //交集
    // let intersect = new Set(
    //     [...a].filter(
    //         (x) => { return b.has(x)}
    //     )
    // );
    // console.log('交集',intersect)
    // // 差集
    // let difference = new Set([...a].filter(item => !b.has(item)));
    // console.log('差集',difference)

    // 遍历操作中,同步该表原来的Set结构:
    //方法一 映射一个新的结构,赋值给 原来set结构
    // let set = new Set([1, 1, 2, 5]);
    // set = new Set([...set].map(val => val * 2));
    // console.log(set)
    //
    // // 方法二 使用Array.from
    // let set1 = new Set([1, 2, 2, 3]);
    // set1 = new Set(Array.from(set1, val => val * 3));
    // console.log(set1)

    // WeakSet
    // 与set 类似,但是有两个区别
    // WeakSet成员只能是对象,不能是其他类型的值
    // const ws = new WeakSet();
    // console.log(ws)
    // ws.add(1);// 报错
    // ws.add (Symbol())// 报错
    // ws.add ({});
    // console.log(ws);

    // WeakSet 中的对象都是弱引用,WeakSet 适合临时存放一组对象,以及存放跟对象绑定的信息,
    // 只要这些对象在外部消失,它在WeakSet 里面的引用就会自动消失
    // 应该少用,跳过 unFinish
    // 防止内存泄漏
    // const foos = new WeakSet()
    // class Foo {
    //     constructor() {
    //         foos.add(this)
    //     }
    //     method () {
    //         if (!foos.has(this)) {
    //             throw new TypeError('Foo.prototype.method 只能在Foo的实例上调用！');
    //         }
    //     }
    // }


    // 3 Map
    //ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，
    // 但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
    // 也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，
    // 是一种更完善的 Hash 结构实现。
    // 如果你需要“键值对”的数据结构，Map 比 Object 更合适。

    // 使用 Map 结构的set方法，将对象o当作m的一个键，
    // 然后又使用get方法读取这个键，
    // 接着使用delete方法删除了这个键。
    // const m = new Map();
    // const o = {p: 'hello world'};
    // // let result = m.get();
    // // console.log(result)
    // m.set(o,'content');
    // let result = m.get(o);
    // console.log(result);
    //
    // console.log('has',m.has(o));
    // console.log('delete',m.delete(o));
    // console.log('has',m.has(o));

    // 作为构造函数，Map 也可以接受一个数组作为参数。
    // 该数组的成员是一个个表示键值对的数组
    // const map = new Map([
    //     ['name','名字'],
    //     ['title','author']
    // ])
    // console.log(map.size);
    // console.log(map.has('name'));
    // console.log(map.get('name'));
    // console.log(map.has('title'));
    // console.log(map.get('title'));
    // 等价于
    // let map = new Map();
    // const items = [
    //     ['name','名字'],
    //     [ 'title','author']
    // ];
    // items.forEach(([key,value])=> map.set(key,value));
    // console.log(map);
    // console.log(map.size);
    // console.log(map.has('name'));
    // console.log(map.get('name'));
    // console.log(map.has('title'));
    // console.log(map.get('title'));

    // const set = new Set([
    //     ['foo',1],
    //     ['bar',1]
    // ]);
    // const m1 = new Map(set);
    // let foo = m1.get('foo');
    // console.log(foo)
    // const m2 = new Map([['baz',3],['a',123]]);
    // console.log(m2);
    // const m3 = new Map(m2);
    // console.log(m3.get('baz'));

    // 对同一个键多次赋值，后面的值将覆盖前面的值。
    // const map = new Map();
    // map.set('a',123).set('a',321);
    // console.log(map.get('a'))

    // 读取未知的键,返回 undefined
    // let unName = new Map().get('12312');
    // console.groupCollapsed(unName)

    // 只有对同一个对象的引用,map结构才视为同一个键,
    // const map = new Map();
    // map.set(['a'],123);
    // console.log(map);
    // console.log(map.get(['a']));//undefined 内存地址不一样,get无法读取该键
    // console.log(map.get('a'))

    //同值,但引用地址不同,map结构中视为两个不同的键
    // const map = new Map();
    // const arr = ['1'];
    // const arr1 = ['1'];
    // map.set(arr, 123).set(arr1, 321);
    // console.log(map)
    // console.log(map.get(arr))
    // console.log(map.get(arr1))
    // arr 和 arr1 被视为两个不同的键

    // let map = new Map();
    // //map 中 -0和+0是一个键
    // map.set(-0,123);
    // console.log(map.get(+0));
    // console.log(map.get(-0));
    // console.log(map.get(0));
    // //true 和字符串 'true'不同
    // map.set(true,1);
    // map.set('true',2);
    // console.log(map.get('true'));
    // console.log(map.get(true));
    //
    // // undefined和null也是不同的键
    // // NaN 在map结构中视为同一个键
    // map.set(NaN,5444);
    // map.set(NaN,321);
    // console.log(map.get(NaN))

    //与set一样都有 属性和操作方法
    // 1 size属性  map.size
    // 2 set(key ,value)
    // 3 get(key)
    // 4 has(key)
    // 5 delete(key)
    // 6 clear

    // 遍历的方法
    // 1 keys() :返回键名 遍历器
    // 2 values() : 返回键值 遍历器
    // 3 entries() : 返回所有成员的遍历器
    // 4 forEach() : 遍历Map的所有成员,回调

    // 结合数组的map和 filter 方法
    // const map = new Map().set(1, '1').set(2, '2').set(3, '3');
    // const map1 = new Map(
    //     [...map].filter(([k,v])=> k <2)
    // );
    // console.log(map1.get(1))
    // console.log(map1.get(2))
    // const map2 = new Map(
    //     [...map].map(([k,v]) => [k,v * v])
    // );
    // console.log(map2)

    // forEach
    // map.forEach((value,key,map)=>{
    //     console.log(value,key,map)
    // })

    // forEach 接受第二个参数,用来绑定this
    // const reporter = {
    //     report: function (value, key) {
    //         console.log(value, key)
    //     }
    // };
    // map.forEach(function (value, key) {
    //     this.report(key, value)
    // }, reporter)

    // 数据结构转换
    // 1 map转为数组
    // const map = new Map().set(true, 6).set({foo: 3}, ['2']);
    // let arrResult = [];
    //
    // function forEachAll(arr) {
    //     console.log(arr instanceof Array)
    //     if (arr instanceof Array) {
    //         arr.forEach(function (value) {
    //             if(value instanceof Array){
    //                 forEachAll(value);
    //                 return;
    //             }
    //             arrResult.push(value);
    //         })
    //     } else {
    //         return arrResult
    //     }
    // }
    //
    // let result = forEachAll([...map]);
    // console.log(result, arrResult);

    // 2 数组转为Map
    // 将数组传入Map构造函数,转为map
    // let result = new Map([
    //     ['23',4],
    //     ['22',{1:1234}]
    // ]);
    // console.log(result)

    //map 转为对象
    // function strMapToObj(strMap) {
    //     let obj = Object.create(null);
    //     for (let [key, value] of strMap) {
    //         obj[key] = value;
    //     }
    //     return obj;
    // }
    //
    // const map = new Map()
    //     .set('123', 123)
    //     .set('321', 321);
    // let resultObj = strMapToObj(map);
    // console.log(resultObj);
    // let arr = [];
    // // object key 做下标, 转数组
    // Object.entries(resultObj).forEach(([key,value]) => {
    //     arr[key] = value
    // });
    // console.log('===', arr) // [empty × 123, 123, empty × 197, 321]

    // 对象 转为Map
    // function objToStrMap(obj) {
    //     let strMap = new Map();
    //     for (let key of Object.keys(obj)){
    //         strMap.set(key,obj[key])
    //     }
    //     return strMap;
    // }
    // let result = objToStrMap({1:22,2:'34'});
    // console.log(result)

    // map 转 JSON
    // function strMapToJson(strMap) {
    //     return JSON.stringify(strMapToObj(strMap))
    // }
    // let myMap = new Map().set('yes', true).set('no', false);
    // strMapToJson(myMap)

    // Map 的键名有非字符串,可以选择转为数组JSON
    // function mapToArrayJson(map) {
    //     return JSON.stringify([...map]);
    // }
    // let myMap = new Map().set(true, 7).set({foo: 3}, ['abc']);
    // mapToArrayJson(myMap)

    // 6 JSON 转为Map
    // function jsonToStrMap(jsonStr) {
    //     return objToStrMap(JSON.parse(jsonStr))
    // }
    // let json = '{"yes": true, "no": false}';
    // jsonToStrMap(json);

    // WeakMap 结构与 map结构类似,也是用于生成键值对的集合
    // 区别: weakMap 只接受对象作为键名(null 除外),不接受其他类型的值作为键名
    // weakMap不计入垃圾回收机制
    // 忽略其他学习部分
    // unFinish

    /**
     *
     *  12 proxy 跳过 元编程 unFinish
     *
     * */


    /**
     *
     * 13 Reflect 跳过 元编程 unFinish
     *
     * */

    /**
     *
     *  Promise 对象
     *
     */

    //es6 规定,Promise对象是个构造函数,用来生成Promise实例
    // const promise = new Promise(function (resolve, reject) {
    //     // 一些执行代码后
    //     if (true) {// 异步操作成功
    //         resolve(value);//成功回调
    //     } else {
    //         reject(error);// 失败回调
    //     }
    // })

    // 执行完成后调用回调
    //接受两个参数,第一个是成功回调,第二是失败回调
    // promise.then(
    //     function (value) {
    //         console.log(value)
    //     }, function (err) {
    //         console.log(err)
    //     }
    // )


    // 一个简单的timeout 定制时间方法
    // function timeoutDemo(ms) {
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(resolve,ms,'done')
    //     })
    // }
    // timeoutDemo(100).then((value)=>{
    //     console.log(value)
    // })

    //promise 新建后就会立即执行
    // let promise = new Promise(function (resolve, reject) {
    //     console.log('promise');
    //     resolve('done')
    // });
    // promise.then(function (str) {
    //     console.log(str)
    // },function (err) {
    //     console.log(err)
    // });
    // console.log(' 在 done 之前')

    //图片异步加载
    // function loadImageAsync(url) {
    //     return new Promise(function (resolve,reject) {
    //         const image = new Image();
    //         image.onload = function () {
    //             setTimeout(function(){
    //                 resolve(image)
    //             },2000)
    //         };
    //         image.onerror = function () {
    //             reject(new Error('图片加载出现问题'+url))
    //         };
    //         image.src = url;
    //     })
    // }
    // loadImageAsync('http://localhost:4800/images/indexIcon-3-1.png')
    //     .then(function (image) {
    //         $('img').attr('src',image.src)
    //         console.log(image)
    //     },function (err) {
    //         console.log(err)
    //     });

    // 调用 Ajax 操作例子
    // const getJson = function (url) {
    //     const promise = new Promise(function (resolve, reject) {
    //         const handler = function () {
    //             if (this.readyState !== 4){
    //                 return '不成功'
    //             }
    //             if(this.status === 200){
    //                 resolve(this.response);
    //             }else {
    //                 reject(new Error(this.statusText))
    //             }
    //         };
    //         const client = new XMLHttpRequest();
    //         client.open('GET',url);
    //         client.onreadystatechange = handler;
    //         client.responseType = 'json';
    //         client.setRequestHeader('Accept','application/json');
    //         client.send();
    //     });
    //     return promise;
    // };
    // let url = 'http://121.199.24.124:3200/readingStatistics/week?' +
    //     'classId=25&startDate=2017-11-23&endDate=2017-11-29';
    // getJson(url)
    //     .then(function (res) {
    //         console.log(res)
    //     },function (err) {
    //         console.log(err)
    //     })

    // 两个异步操作的执行
    // const promise = new Promise(function (resolve, reject) {
    //     console.log('第一个异步进行');
    //     // resolve('第一个异步完成');
    //     setTimeout(function () {
    //         resolve('第一个异步完成');
    //         //被拒绝,p2抛出错误
    //         // reject('不让你成功,咋滴')
    //     },100)
    // });
    // const promise2 = new Promise(function (resolve, reject) {
    //     console.log('第二个异步进行');
    //     resolve(promise)
    // });
    // promise.then(function (successValue) {
    //     console.warn('第一个promise成功',successValue);
    // }).catch(function (err) {
    //     console.error('第一个promise错误',err)
    // });
    // promise2
    //     .then(result => {
    //         console.log('第二个promise结束',result)
    //     })
    //     .catch(err => {
    //         console.error(err);
    //     })

    //调用resolve或reject并不会终结 Promise 的参数函数的执行。
    // new Promise((resolve, reject) => {
    //     resolve(1);
    //     //这里是不会被阻塞的
    //     console.log(2);
    // }).then(r => {
    //     console.log(r);
    // });
    // 立即 resolved 的 Promise 是在本轮事件循环的末尾执行，
    // 总是晚于本轮循环的同步任务。
    // 调用resolve或reject以后，Promise 的使命就完成了，
    // 后继操作应该放到then方法里面，而不应该直接写在resolve或reject的后面。
    // 所以，最好在它们前面加上return语句，这样就不会有意外。
    // let i = 10;
    // let timer = setInterval(function () {
    //     console.log(i);
    //     if (i < 0){
    //         clearInterval(timer);
    //         return
    //     }else{
    //         i--;
    //     }
    //     let promise = new Promise((resolve,reject) => {
    //         let result = 10* Math.random()-5;
    //         console.log(result);
    //         if(result > 0){
    //             return resolve('结果   大   于0');
    //         }else{
    //             return reject('结果   小   于0')
    //         }
    //         //后面语句就不会执行
    //         console.log(2);
    //     });
    //     promise.then(function (success) {
    //         console.log(success)
    //     }).catch(function (err) {
    //         console.log(err)
    //     })
    // },1000);

    // Promise.prototype.then();
    // promise 可以采用链式写法

    // let promise = new Promise(function (resolve, reject) {
    //     return resolve(1);
    // });
    // promise.then(function (success) {
    //     console.log(success)
    // }).then(function (success) {
    //     console.log(success)
    // }).then(function (err) {
    //     console.log('第三次调用')
    // })

    //不要在then方法里面定义 Reject 状态的回调函数
    // （即then的第二个参数），
    // 总是使用catch方法。

    // let promise = new Promise(function (resolve, reject) {
    //     reject('错误')
    // });
    // promise.then(function (success) {
    //     console.log(success)
    // }).catch(function (err) {
    //     console.log(err)
    // });


    //“Promise 会吃掉错误”
    // const asyncThing = function () {
    //     return new Promise(function (resolve, reject) {
    //         resolve(x+2)
    //     })
    // };
    // asyncThing().then(function () {
    //     console.log('正常')
    // });
    // setTimeout(()=>console.log('不被阻塞'),1500);

    // Promise 对象后面要跟catch方法，这样可以处理 Promise 内部发生的错误。
    // catch方法返回的还是一个 Promise 对象，因此后面还可以接着调用then方法。

    // const asyncThing = function () {
    //     return new Promise(function (resolve, reject) {
    //         resolve(x + 2);
    //     })
    // };
    // asyncThing()
    //     .catch(function (err) {
    //         console.log(err)
    //     })
    //     .then(function (success) {
    //         console.log(success)
    //     });

    // Promise.all();
    // Promise.all 方法用于将多个Promise实例,包装成一个新的Promise实例
    // const promiseAll = new Promise.all([p1,p2,p3])

    // promise.all 方法接受一个数组作为参数,p1 p2 p3都是Promise实例,
    // 如果不是,就会先调用Promise.resolve方法,将参数转为Promise实例,
    // 再进一步处理,( promise.all 方法的参数可以不是数组,但必须具有Iterator接口
    // 且放回的每个成员都是promise实例)

    // promiseAll的状态由p1 p2 p3决定,分成两种情况。
    // 1 只有p1,p2,p3 的状态都变成fulfilled,p的状态才会变成fulfilled
    // 此时p1,p2,p3 的返回值组成一个数组,传递给p的回调函数
    // 2 只要其中有一个被 rejected ,p的状态就变成rejected,
    //  此时第一个被reject的实例的返回值,会被传递给p的回调函数

    // 调用 Ajax 操作例子
    // const getJson = function (url) {
    //     const promise = new Promise(function (resolve, reject) {
    //         const handler = function () {
    //             if (this.readyState !== 4){
    //                 return '不成功'
    //             }
    //             if(this.status === 200){
    //                 console.log(this.response);
    //                 if(this.response.errcode){
    //                     //虽然不成功,但不影响其他请求的执行
    //                     reject(new Error(this.response.errmsg));
    //                 }
    //                 resolve(this.response);
    //             } else{
    //                 reject(new Error(this.statusText))
    //             }
    //         };
    //         const client = new XMLHttpRequest();
    //         client.open('GET',url);
    //         client.onreadystatechange = handler;
    //         client.responseType = 'json';
    //         client.setRequestHeader('Accept','application/json');
    //         client.send();
    //     });
    //     return promise;
    // };
    // let url = 'http://121.199.24.124:3200/readingStatistics/week?' +
    //     'classId=25&startDate=2017-11-23&endDate=2017-11-';
    //
    // // 生成一个Promise对象的数组
    // const promises = [2,3,5,7,12].map(value => {
    //     return getJson( url + value)
    // });
    // Promise.all(promises).then(function (posts) {
    //     posts.forEach(function (val) {
    //     })
    // }).catch(function (err) {
    //     //第一个返回错误,则返回
    //     console.log(err)
    // });

    // 注意,如果作为参数的promise实例,自己定义了catch方法,
    // 那么一旦它被rejected,并不会出发 Promise.all 的catch方法
    // function connectDatabase() {
    //     //...doSomeRequest
    // }
    // function findAllBooks() {
    //     // ... handle book
    // }
    // function getCurrentUser() {
    //     // ... get user
    // }
    // function pickResult() {
    //     console.log(arguments)
    //     //handle result
    // }
    // function promiseAllErrHandle(err) {
    //     console.error(err)
    // }
    // const databasePromise = connectDatabase();
    // const booksPromise = databasePromise.then(
    //     findAllBooks
    // );
    // const userPromise = databasePromise.then(
    //     getCurrentUser
    // );
    //
    // Promise.all([booksPromise,userPromise]).then(
    //     ([book,user]) => pickResult(book,user)
    // ).catch(
    //     promiseAllErrHandle
    // );

    // const p1 = new Promise((resolve, reject) => {
    //     resolve('p1 hello')
    // })
    //     .then(result => {
    //         console.log(result);
    //         return result
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    //
    // const p2 = new Promise((resolve, reject) => {
    //     throw new Error('报错');
    // }).then(
    //     result => console.log(result)
    // ).catch(
    //     err => console.log(err)
    // );
    //
    // Promise.all([p1, p2])
    //     .then(result => console.log(result))// 第二个结果会是undefined
    //     .catch(err => console.log('all', err));

    // promise.race() //race 赛跑比赛的意思
    // Promise.race 方法同样是将多个Promise实例,包装成一个Promise 实例
    // const p = Promise.race([p1,p2,p3]);
    // 只要有一个实例率先改变状态,p的状态就会改变,
    // 那个率先改变的promise实例的返回值
    // 就传递给p的回调函数

    // promise.race 方法的参数和promise.all方法一样,
    // 如果不是promise实例,就会先调用Promise.resolve 方法
    // 将参数转为Promise 实例,再进一步处理

    // 实例,在指定时间内没有获得结果,就将Promise 的状态变为 reject
    // 否则边位resolve
    // const getJson = function (url) {
    //     const promise = new Promise(function (resolve, reject) {
    //         const handler = function () {
    //             if (this.readyState !== 4) {
    //                 return '不成功'
    //             }
    //             if (this.status === 200) {
    //                 // console.log(this.response);
    //                 // if (this.response.errcode) {
    //                 //     //虽然不成功,但不影响其他请求的执行
    //                 //     reject(new Error(this.response.errmsg));
    //                 // }
    //                 resolve(this.response);
    //             } else {
    //                 reject(new Error(this.statusText))
    //             }
    //         };
    //         const client = new XMLHttpRequest();
    //         client.open('GET', url);
    //         client.onreadystatechange = handler;
    //         client.responseType = 'json';
    //         client.setRequestHeader('Accept', 'application/json');
    //         client.send();
    //     });
    //     return promise;
    // };
    // let url = 'http://121.199.24.124:3200/readingStatistics/week?' +
    //     'classId=25&startDate=2017-11-23&endDate=2017-11-30';
    //
    // const p = Promise.race([
    //     getJson(url),
    //     new Promise(function (resolve, reject) {
    //         // 当请求超过五秒抛出错误
    //         setTimeout(() => reject(new Error('request timeout')), 5000)
    //     })
    // ]);
    // p.then(response =>{
    //     console.log('race',response)
    // });
    // p.catch(err => {
    //     //接收错误
    //     console.error(err)
    // });

    // Promise.resolve()
    // 将现有对象转为Promise对象
    // let url = 'http://121.199.24.124:3200/readingStatistics/week?' +
    //     'classId=25&startDate=2017-11-23&endDate=2017-11-30';
    // const promise = Promise.resolve($.ajax(url))
    // promise.then(
    //     result =>{
    //         console.log(result)
    //     }
    // );
    // // 以上代码将jquery生成的deferred对象 转为一个新的promise对象
    // // 等同于以下写法
    // Promise.resolve('foo1').then(result => {
    //     console.log(result)
    // });
    // new Promise(resolve => {resolve('foo2')}).then(
    //     result => console.log(result)
    // );

    // 1 参数是一个promise 实例
    // 如果参数是一个promise实例,
    // 那么promise.resolve将不做任何修改
    // ,原封不动放回这个实例

    // 2 参数是一个thenable对象,
    // thenable 是指具有then方法的对象
    // let thenable = {
    //     then:function (resolve, reject) {
    //         resolve('thenable')
    //     }
    // };
    // Promise.resolve(thenable).then(result => {
    //     console.log(result)
    // });

    // 3 参数不是具有then方法的对象,或者根本不是对象
    // 如果参数是一个原始值,或者是一个不具有then方法的对象
    // 则 Promise.resolve() 方法返回一个新的 Promise 对象,状态为resolved
    // const p = Promise.resolve('hello');
    // p.then(result => {
    //    console.log(result)
    // });

    // 4 不带任何参数
    // Promise.resolve 方法允许调用时候不带任何参数,
    // 直接返回一个resolved 状态 的promise 对象
    // 希望得到一个Promise 对象,比较方便的方法就是直接调用Promise.resolve方法
    // const p = Promise.resolve();
    // p.then(()=>{
    //     console.log(123)
    // });

    // 注意,立即 resolve Promise对象 ,
    // 是在本轮'事件循环' 结束时,
    // 而不是在下一轮'事件循环'的开始时

    // setTimeout(fn, 0)在下一轮“事件循环”开始时执行，
    // Promise.resolve()在本轮“事件循环”结束时执行，
    // console.log('one')则是立即执行
    // setTimeout(function () {
    //     console.log('three');
    // }, 0);
    //
    // Promise.resolve().then(function () {
    //     console.log('two');
    // });
    //
    // console.log('one');

    // promise.reject
    // promise.reject(reason)方法也会返回一个新的Promise 实例,
    // 该实例的状态为rejected
    // const p = Promise.reject('出错');
    //等同于
    // const p1 = new Promise((resolve, reject) => reject());

    // p.then(null,function (err) {
    //     console.error(err)
    // });

    // reject 回调函数会立即执行
    // 注意,Promise.reject()方法的参数,会原封不动的作为reject的理由
    // 变成后续方法的参数,这一点与promise.resolve方法不一致
    // const thenable = {
    //     then(resolve,reject){
    //         reject('出错')
    //     }
    // };
    // Promise.reject(thenable).catch(err => {
    //     console.log(err === thenable)
    //     console.log(err , thenable)
    // });

    // 两个有用的附加方法
    // done()

    // Promise 对象的回调链,不管以then或catch 方法结尾,
    // 要是最后一个方法抛出错误,都有可能无法捕捉到
    // (因为promise 内部的错误不会冒泡到全局)
    // 可以提供一个done 方法,总是处于回调链的尾端
    // 保证抛出任何可能出现的错误
    // asyncFunc().then(f1).catch(r1).then(f2).done()

    // 实现done 方法代码

    // Promise.prototype.done = function (onFulfilled, onRejected) {
    //     this.then(onFulfilled, onRejected).catch(function (reason) {
    //         setTimeout(() => {
    //             throw reason
    //         }, 0)
    //     })
    // };

    // finally()
    // finally 方法用于指定不管Promise对象最后状态如何都会执行的操作
    // 它与done方法的最大区别,它接受一个普通的回调函数作为参数,
    // 该函数不管怎样都必须执行。
    // 服务器使用promise 处理请求,然后使用 finally方法关掉服务器.例子如下
    // sever.listen(3300)
    //     .then(function () {
    //         //run test
    //     })
    //     .finally(sever.stop);
    // 实现代码,不管前面的 Promise 是fulfilled还是rejected，
    // 都会执行回调函数callback
    // Promise.prototype.finally = function (callback) {
    //     let p = this.constructor;
    //     return this.then(
    //         value => p.resolve(callback())
    //             .then(
    //                 () => value
    //             ),
    //         reason => p.reject(callback())
    //             .then(
    //                 () => {
    //                     throw reason
    //                 }
    //             )
    //     );
    // };

    // promise 应用 图片预加载
    // const preloadImage = function (path) {
    //     return new Promise(function (resolve, reject) {
    //         const image = new Image();
    //         image.onload = resolve;
    //         image.onerror = reject;
    //         image.src = path;
    //     });
    // };

    // Generator 函数与Promise 的结合
    // 使用 Generator 函数管理流程,遇到异步操作的时候,经常返回一个promise对象
    // 代码的 Generator 函数g之中，
    // 有一个异步操作getFoo，
    // 它返回的就是一个Promise对象。
    // 函数run用来处理这个Promise对象，
    // 并调用下一个next方法。
    // function getFoo() {
    //     // console.log('f00')
    //     return new Promise(function (resolve, reject) {
    //         resolve('foo')
    //     })
    // }
    //
    // const g = function* () {
    //     try {
    //         const foo = yield getFoo();
    //         console.log('执行后',foo)
    //     } catch (e) {
    //         console.error(e)
    //     }
    // };
    // function run(generator) {
    //     const it = generator();
    //     function go(result) {
    //         console.log('开始?',result)
    //         if (result.done){
    //             console.log('结束',result);
    //             return result.value
    //         }
    //         return result.value.then(function (value) {
    //             console.log('异步then',value);
    //             return go(it.next(value));
    //         },function (err) {
    //             return go(it.throw(err))
    //         })
    //     }
    //     go(it.next());
    // }
    // run (g);

    // 11 Promise.try()
    // 出现情况如下: 不知道或不想区分,函数f是同步函数还是异步函数
    // 但是想用promise来处理它,这样就可以不管f是否包含异步操作
    // 都用then 方法指定下一步流程,用catch 方法处理 f 抛出的错误
    // promise.resolve().then(f) // 这个写法有一个缺点,如果f是一个同步函数
    // 那么它会在本轮事件循环的末尾执行
    // const f = ()=>console.log('now');
    // Promise.resolve().then(f);
    // console.log('next');
    // next
    // now
    // 函数f是同步的,但是用promise 包装之后,就变成异步执行了.
    // 需要有种方法,让同步函数同步执行,异步函数就异步执行,并有统一的api
    // 两种写法, 第一种使用async 函数写
    // const f = () => console.log('now');
    // (async() => f())();
    // console.log('next')

    // 立即执行匿名函数,会立即执行async函数,如果f 是同步的
    // 就会得到同步的结果,如果f 是异步的,就可以用then 指定下一步,写法:
    // (async() => f())()
    //     .then(function () {
    //
    //     })
    // 注意,async() => f() 会吃掉f() 抛出的错误,所以如果想捕获错误
    // 要使用promise.catch 方法,
    // (async() =>f())()
    //     .then()
    //     .catch()

    // 第二种写法 使用new Promise()
    // 立即执行匿名函数,执行 new Promise(),这种情况下,同步函数也是同步执行的,

    // const f = () => console.log('now');
    // (
    //     () => new Promise(
    //         resolve => resolve(f())
    //     )
    // )();
    // console.log('next')

    // promise.try()
    // const f = () => console.log('now');
    // Promise.try(f);
    // console.log('next');

    // promise 库bluebird q 和when 提供了这个方法
    //
    // function getUserName(userId) {
    //     return database.users.get({id: userId})
    //         .then(function (user) {
    //             return user.name
    //         })
    // }

    // database.users.get() 返回一个promise 对象,如果抛出异步错误
    // 可以用catch方法捕获,可以如下,
    // database.users.get({id: userId})
    //     .then()
    //     .catch()
    // 但database.user.get() 可能还抛出同步错误,( 比如数据库连接错误)
    // 这个时候就不得不用try...catch 去捕获
    // try {
    //     database.users.get({id:userId})
    //         .then()
    //         .catch()
    // } catch (e) {
    //
    // }

    // 简写以上代码,统一使用 promise.catch捕获所有同步和异步的错误

    // Promise.try(database.users.get({id: userId}))
    //     .then()
    //     .catch();

    //------------------------------------------------------------------
    /**
     *
     * Iterator 和for...of 循环
     *
     * */

    // iterator(遍历器)的概念
    //Iterator 的遍历过程是这样的。

    // （1）创建一个指针对象，指向当前数据结构的起始位置。也就是说，
    //      遍历器对象本质上，就是一个指针对象。
    //
    // （2）第一次调用指针对象的next方法，可以将指针指向数据结构的第一个成员。
    //
    // （3）第二次调用指针对象的next方法，指针就指向数据结构的第二个成员。
    //
    // （4）不断调用指针对象的next方法，直到它指向数据结构的结束位置。
    // 每一次调用next方法，都会返回数据结构的当前成员的信息。
    // 具体来说，就是返回一个包含value和done两个属性的对象
    // 其中，value属性是当前成员的值，done属性是一个布尔值，表示遍历是否结束。

    // let it = makeIterator(['a','nb']);
    // let a = it.next();
    // let b = it.next();
    // let c = it.next();
    // console.log(a,b,c);
    //
    // function makeIterator(array) {
    //     let nextIndex = 0;
    //     return {
    //         next :function () {
    //             let result = nextIndex < array.length?
    //                 //这里的nextIndex 是会等取值完成后再++
    //                 {value: array[nextIndex++],done:false}:
    //                 {value:undefined,done:true};
    //             console.log(result);
    //             // console.log(array[nextIndex++])
    //             return result
    //         }
    //     }
    // }

    // 简写 makeIterator
    // function makeIterator(array) {
    //     var nextIndex = 0;
    //     return {
    //         next: function () {
    //             return nextIndex < array.length ? {value: array[nextIndex++]} : {done: true}
    //         }
    //     }
    // }

    // 由于 Iterator 只是把接口规格加到数据结构之上，
    // 所以，遍历器与它所遍历的那个数据结构，
    // 实际上是分开的，完全可以写出没有对应数据结构的遍历器对象，
    // 或者说用遍历器对象模拟出数据结构。
    // 下面是一个无限运行的遍历器对象的例子。
    //
    // var it = idMaker();
    // let a = it.next();
    // let b = it.next();
    // let c = it.next();
    // let d = it.next();
    // console.log(a,b,c,d);
    //
    // function idMaker() {
    //     var index = 0 ;
    //     return{
    //         next: function () {
    //             return {value:index++,done:false}
    //         }
    //     }
    // }
    // console.log(idMaker.constructor);

    // 使用 typeScript 写法, 遍历器接口(iterable)、
    // 指针对象(iterator)和next 方法返回值的规格描述

    // interface Iterable {
    //     [Symbol.iterator]():iterator,
    // }
    //
    // interface Iterator{
    //     next (value?:any): IterationResult,
    // }
    // interface IterationResult{
    //     value:any,
    //     done:boolean
    // }

    //---------------------------------------------------
    // 2 默认Iterator 接口
    // Iterator 接口的目的，就是为所有数据结构，提供了一种统一的访问机制
    // es6 规定,默认的Iterator 接口部署在数据结构的 Symbol.iterator 属性
    // 或者说一个数据结构只要具有Symbol.iterator 属性,就可以认为是 '可遍历的'(iterable)

    // Symbol.iterator 属性本身是一个函数,就是当前数据结构默认的遍历器生成函数
    // 执行这个函数就会返回一个遍历器,至于属性名 Symbol.iterator ,
    // 它是一个表达式,返回Symbol对象的iterator属性,
    // 这是一个预定义好的,类型为 Symbol的特殊值
    // 所以要放在方括号内

    // 对象obj是可遍历的(iterable),因为具有 Symbol.iterator 属性
    // 执行这个属性,会返回一个遍历器对象,该对象的根本特征就是具有next方法
    // 每次调用next 方法,都会返回一个代表但钱成员的信息对象,具有value和done两个属性
    // es6 的有些数据结构原生具备iterator接口 如数组
    // 不需要做处理就可以被for ... of 循环遍历,
    // 这些数据结构原生部署了Symbol.iterator 属性,
    // 一些数据结构没有,如对象,
    // 凡是部署了 Symbol.iterator属性的数据结构,
    // 就称为部署了遍历器接口,调用接口就返回一个遍历器对象
    //原生具备 Iterator 接口的数据结构如下:
    // Array
    // Map
    // Set
    // String
    // TypedArray
    // 函数的 arguments 对象
    // NodeList 对象

    // const obj = {
    //     [Symbol.iterator]: function () {
    //         return {
    //             next: function () {
    //                 return {
    //                     value: 1,
    //                     done: false
    //                 }
    //             }
    //         }
    //     }
    // };

    // 数组的Symbol.iterator属性,
    // 变量arr 是一个数组,原生就具有遍历器接口,波数在arr的symbol.iterator属性上
    // 调用此属性就得到遍历器对象

    // let arr = ['a','b','c'];
    // let iter = arr[Symbol.iterator]();
    // console.log(iter.next());
    // console.log(iter.next());
    // console.log(iter.next());
    // console.log(iter.next());

    // 一个类部署 Iterator 接口的写法。
    // Symbol.iterator属性对应一个函数，
    // 执行后返回当前对象的遍历器对象。
    // class RangeIterator {
    //     constructor(start, stop) {
    //         this.value = start;
    //         this.stop = stop;
    //     }
    //
    //     [Symbol.iterator]() {
    //         return this;
    //     }
    //
    //     next() {
    //         var value = this.value;
    //         if (value < this.stop) {
    //             this.value++;
    //             return {done:false,value:value}
    //         }
    //         return {done:true, value:undefined}
    //     }
    // }
    // function range(start, stop) {
    //     return new RangeIterator(start,stop);
    // }
    // for(var value of range(0,3)){
    //     console.log(value)
    // }

    // 通过遍历器实现指针结构的例子
    // 首先在构造函数的原型链上部署Symbol.iterator 方法,
    // 调用该方法会返回遍历器对象iterator ,
    // 调用该对象的next 方法,在返回一个值的同时,自动将内部指针移到下一个实例上去
    // function Obj(value) {
    //     this.value = value;
    //     this.next = null;
    // }
    // Obj.prototype[Symbol.iterator] = function () {
    //     var iterator = {next:next};
    //     var current = this;
    //     function next() {
    //         if(current){
    //             var value = current.value;
    //             current = current.next;
    //             return {done:false,value:value}
    //         }else {
    //             return{ done:true }
    //         }
    //     }
    //     return iterator;
    // };
    // var one = new Obj(1);
    // var two = new Obj(2);
    // var three = new Obj(3);
    // one.next = two;
    // two.next = three;
    // for (var i of one){
    //     console.log(i)
    // }

    // 为对象添加iterator接口的例子
    // let obj = {
    //     data: ['a', 'n'],
    //     [Symbol.iterator]() {
    //         const self = this;
    //         let index = 0;
    //         return {
    //             next() {
    //                 if (index < this.data.length) {
    //                     return {
    //                         value: self.data[index++],
    //                         done: false
    //                     };
    //                 } else {
    //                     return {value: undefined, done: true};
    //                 }
    //             }
    //         };
    //     }
    // };

    // 类似数组的对象,部署iterator接口, Symbol.iterator 方法直接应用数组的iterator接口
    // NodeList 对象是类似数组的对象，本来就具有遍历接口，可以直接遍历。
    // 我们将它的遍历接口改成数组的Symbol.iterator属性，可以看到没有任何影响
    // NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
    // // 或者
    // NodeList.prototype[Symbol.iterator] = [][Symbol.iterator];
    // [...document.querySelectorAll('div')].forEach(function (div) {
    //     console.log(div)
    // });
    // 类似数组的对象调用数组的Symbol.iterator方法的例子。
    // let iterable = {
    //     0:'a',
    //     1:1,
    //     2:"22",
    //     length:3,
    //     [Symbol.iterator]:Array.prototype[Symbol.iterator]
    // };
    // for(let item of iterable){
    //     console.log(item)
    // }
    // let iterable = {
    //     a:'a',
    //     b:'n',
    //     length:2,
    //     [Symbol.iterator]:Array.prototype[Symbol.iterator]
    // };
    // for(var i of iterable){
    //     console.log(i)// undefined
    // }

    // 如果Symbol.iterator 方法对应 不是遍历器生成函数,解释引擎则报错
    // let obj = {};
    // obj[Symbol.iterator] = () =>1;
    // console.log([...obj]) // 报错
    // 变量obj 的Symbol.iterator 方法对应的不是遍历器生成函数,因此报错

    // 使用 while 循环遍历
    // ITERABLE代表某种可遍历的数据结构，
    // $iterator是它的遍历器对象。遍历器对象每次移动指针（next方法），
    // 都检查一下返回值的done属性，如果遍历还没结束，
    // 就移动遍历器对象的指针到下一步（next方法），不断循环。
    // let $iterator = ITERABLE[Symbol.iterator]();
    // let $result = $iterator.next();
    // while (!$result.done){
    //     let x = $result.value;
    //     $result = $iterator.next();
    // }

    // 使用 iterator 接口的场合
    // 1 解构赋值
    // 对数组和Set 结构进行解构赋值时,会默认调用 Symbo.iterator 方法
    // let set = new Set().add('a').add({a:'2'}).add('vvv');
    // let [x,y] = set;
    // console.log(x,y)
    // let [first,...rest] = set;
    // console.log(first,rest);

    // 扩展运算符
    // 扩展运算符(...)会调用默认的iterator 接口
    // let str = 'asdfb';
    // [...str].forEach(function (i) {
    //     console.log(i)
    // });

    // let arr = ['a','132'];
    // let result = ['result',...arr];
    // result.forEach(function (i) {
    //     console.log(i)
    // })

    // 只要数据结构部署了Iterator接口的数据结构,
    // 就可以对它使用扩展运算符,将其转为数组
    // let arr = [...iterable];

    // 3 yield*
    // yield* 后面跟的是一个可遍历的结构,
    // 它会调用该结构的遍历器接口
    // let generator = function* () {
    //     yield 1;
    //     yield * [4,1,21];
    //     yield 334;
    // };
    // let iterator = generator();
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());

    // 4 其他场合
    // 由于数组的遍历会调用遍历器接口
    // 任何接受数组作为参数的场合,其实都调用遍历器接口
    // 例子:
    // for...of
    // Array.from()
    // Map(),Set(),WeakMap(),WeakSet() (比如new Map(['a',1],['b',2]))
    // Promise.all()
    // Promise.race();

    // ---------------------------------------------
    // 字符串的iterator 接口
    // 字符串是一个类似数组的对象 ,也原生具有iterator 接口

    // let str = '2请4哦';
    // console.log(typeof str[Symbol.iterator]);// function
    // let iterator = str[Symbol.iterator]();
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());
    // console.log(iterator.next());

    // 可以覆盖原生的Symbol.iterator 方法,达到修改遍历器行为的目的
    // let str = new String('hi');
    // console.log([...str]);
    // str[Symbol.iterator] = function () {
    //     return{
    //         next:function () {
    //             if(this._first){
    //                 this._first = false;
    //                 return {value:'bye',done:false};
    //             }else{
    //                 return {done:true};
    //             }
    //         },
    //         _first: true
    //     };
    // };
    // console.log([...str]);
    // console.log(str);
    // 字符串 str 的Symbol.iterator方法被修改了，
    // 所以扩展运算符（...）返回的值变成了bye，而字符串本身还是hi。


    // ----------------------------------------------------------
    // 5 Iterator 接口与Generator函数
    // Symbol.iterator 方法的最简单实现
    // var myIterable = {};
    // myIterable[Symbol.iterator] = function* () {
    //     var i = 0;
    //     i++;
    //     yield i+2;// 这里只是值的引用
    //     console.log(i);//保留了上下文
    //     i = i+2;
    //     yield i;
    //     i = i+3;
    //     yield i;
    // };
    // let result  = [...myIterable];
    // console.log(result);// [3,3,6]
    //
    // let obj = {
    //     *[Symbol.iterator](){
    //         yield "hello";
    //         yield "hello123";
    //     }
    // };
    // // 可以用在每一步骤返回值存放读取
    //
    // for(let x of obj){
    //     console.log(x)
    // }


    // 6.遍历对象的return(),throw()
    // 遍历器对象除了具有next方法,还可以具有return 方法和throw 方法。
    // 如果写遍历器对象生成函数,那么next方法是必须部署的,return方法和
    // throw方法是否部署是可选的

    // return 方法的使用场合是,如果for ... of 循环提前退出(通常是出错)
    // 或者有break语句/continue语句,就会调用return 方法。
    // 如果一个对象在完成遍历前,需要清理或者释放资源,就可以部署return方法
    // function readLinesSync(file) {
    //     return {
    //         next() {
    //             return {done: false}
    //         },
    //         return() {
    //             file.close();
    //             return {done: true}
    //         }
    //     }
    // }

    // 函数readlinesSync 接受一个文件对象作为参数,返回一个遍历器对象
    // 其中除了next 方法,还部署了return 方法,下面的三种情况,都会触发执行return方法
    // 1
    // var fileName = '123123';
    // console.log( readLinesSync(fileName));
    // for (let line of readLinesSync(fileName)) {
    //     console.log(line);
    //     break;
    // }
    // 2
    // for(let line of readLinesSync(fileName)){
    //     console.log(line);
    //     continue;
    // }
    // 3
    // for(let line of readLinesSync(fileName)){
    //     console.log(line);
    //     throw new Error('错误')
    // }


    // 7. for ... of 循环
    // 一个数据结构只要部署了Symbol.iterator属性，
    // 就被视为具有 iterator 接口，
    // 就可以用for...of循环遍历它的成员。
    // 也就是说，for...of循环内部调用的是数据结构的Symbol.iterator方法。
    // <1>数组
    // const arr = ['123','123','313'];
    // for(let str of arr){
    //     console.log(str)
    // }
    // 对象
    // const obj = {};
    // obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);
    // for (let str of obj){
    //     console.log(str)
    // }

    // let arr = [3,5,4,8];
    // arr.foo = 'hello';
    // for(let i in arr){
    //     console.log(i); // key:0,1,2,3,foo
    // }
    // console.log('----------');
    // // for...of循环调用遍历器接口，'数组' 的遍历器接口只返回具有数字索引的属性。
    // for(let i of arr){
    //     console.log(i);// value: 3,5,4,8, 不返回foo的键值
    // }
    // <2> Set 和 Map 结构
    // Set 和 Map结构也原色具有Iterator接口,可以直接使用for... of 循环
    // let engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
    // 遍历Set结构
    // for (let a of engines) {
    //     console.log(a)
    // }
    // Gecko
    // Trident
    // Webkit //重复被忽略?覆盖?
    // let es6 = new Map();
    // es6.set('edition', 6);
    // es6.set('committee', 'TC39');
    // es6.set('standard', 'ECMA-262');
    // // 遍历 Map结构
    // for (let [name, value] of es6) {
    //     console.log(name + ':' + value);
    // }

    // 注意两点:
    // <1>  遍历的顺序是按照各个成员被添加进数据结构的顺序
    // <2>  set结构遍历的时候,返回的是一个值,
    //      而map结构遍历的时候,返回的是数组,
    //      该数组的两个成员分别为当前map成员的键名和键值

    // let map = new Map().set('a',1).set('b',3);
    // for(let pair of map){
    //     console.log(pair);
    // }
    //
    // for(let [key,value] of map){
    //     console.log(key,":",value)
    //     //  a : 1
    //     //  b : 3
    // }

    // <3> 计算生成的数据结构
    // 有些数据结构是在现有数据结构的基础上,计算生成的,
    // 比如,ES6 的数组, Set 、Map都部署了以下三个方法
    // 调用后都返回遍历器对象

    // --- entries() 返回一个遍历器对象,用来遍历 [键名,键值]组成的数组
    // 对于数组,键名就是索引值,对于Set,键名与键值相同。
    // 对于Map结构的Iterator 接口,默认就是调用entries方法;

    // --- keys() 返回一个遍历器对象,用来遍历所有的键名
    // --- values() 返回一个遍历器对象,用来遍历所有键值
    // 这三个方法调用后生成的遍历器对象,所遍历的都是计算生成的数据结构
    // let arr = ['1','a','d'];
    // for(let pair of arr.entries()){
    //     console.log(pair)
    // }

    // <4> 类似数组的对象
    // 类似数组的对象包括几类, for ... of 循环用于字符串, DOM NodeList对象,arguments对象例子

    // // 字符串
    // let str = 'hello';
    // for(let i of str){
    //     console.log(i)
    // }

    // // DOM NodeList 对象
    // let divs = document.querySelectorAll('div');
    //
    // for(let div of divs){
    //     console.log(div.classList);
    //     div.classList.add('test');
    //     console.log(div);
    // }
    // console.log(divs);

    // arguments 对象
    // function printArgs() {
    //     for( let param of arguments){
    //         console.log(param)
    //     }
    // }
    // printArgs('12','2','23',45);

    // 对于字符串来说,for...of循环有个特点,就是会正确识别 32位的utf-16字符
    // for(let x of 'a\uD83E\uDC0A'){
    //     console.log(x)
    // }

    // 并不是所有类似的数组的对象都具有Iterator 接口,
    // 一个简便的解决办法,
    // 就是使用Array.from方法将其转为数组

    // let arrayLike = {length: 3, 0: 'a', 1: 'b'};
    // // 报错
    // for(let x of arrayLike){
    //     console.log(x)
    // }
    // 正确写法
    // let arr = Array.from(arrayLike);
    // console.log(arr);
    // for (let x of arr) {
    //     console.log(x)
    // }

    // <5> 对象
    // 对于普通对象for ... of结构是不能直接使用的,会报错
    // 必须部署了Iterator接口后才能使用,但这样的情况可以使用for ... in 遍历键名
    // let es6 = {
    //     edition:6,
    //     committee:'Tc23',
    //     standard:'ecma-262'
    // };
    // for(let key in es6){
    //     console.log(key)
    // }
    // for(let key of es6){// 报错, es6 is not iterable,es6[Symbol.iterator] is not a function
    //     console.log('key',key);
    // }
    // let obj = {a:1,m:3};
    // for(let key in obj){
    //     console.log(obj[key])
    // }
    // // 把key变成数组,数组可以使用for...of
    // for(let key of Object.keys(obj)){
    //     console.log(key,obj[key])
    // }
    // // 使用 Generator 函数将对象重新包装一下。
    // function* entries(obj) {
    //     for(let key of Object.keys(obj)){
    //         yield [key,obj[key]];
    //     }
    // }
    // for(let [key,value] of entries(obj)){
    //     console.log(key,value)
    // }

    // 与其他遍历语法比较
    // 数组为例子 原始for循环可以跳出循环,但是写法麻烦
    // forEach 则无法使用break 或者 return来跳出循环
    // for...in 可以用来遍历数组的键名
    // for ... in 有几个缺点
    // <1>数组的键名是数组,但是 for...in 循环是以字符串作为键名'0','1',等等
    // <2> for...in 循环不仅遍历数字键名,还会遍历手动添加的其他键,甚至包括原形链上的键
    // <3> 某些情况下,for ...in 会以任意顺序遍历键名
    // 总之for...in 主要是用来遍历对象的,而不是用来遍历数组的

    // 而for...of有几个优点
    // 1.有着和for...in一样的简洁语法,,但是没有for...in的以上缺点
    // 2.不同于 forEach方法,它可以break,continue,和return 配合使用
    // 3.提供了遍历所有数据结构的统一操作接口
    // let fibonacci = [1,2,100]
    // for(let n of fibonacci){
    //     if(n>1000){
    //         break;
    //     }
    //     console.log(n)
    // }


    // 临时增加一个new 和return 区别的函数
    // 工厂模式
    // function Person(name, age) {
    //     var o = {};
    //     o.name = name || '';
    //     o.age = age || 0;
    //     o.getName = function () {
    //         console.log(this.name);
    //     };
    //     return o;
    // }
    // 使用了new return 还是起了作用
    // var person = new Person('yigemingzi ', 123);
    // var person2 = Person('yigemingzi ', 123);
    // console.log('person', person)
    // console.log('person2', person2)

    // function Person(name, age) {
    //     this.a = '123';
    //     var o = {};
    //     o.name = name || '';
    //     o.age = age || 0;
    //     o.getName = function () {
    //         console.log(this.name);
    //     };
    //     return o;
    // }
    // var person = Person;
    // var person1 = new Person;
    // var person2 = new Person('123',2);
    // console.log('person',person); // {name: "", age: 0, getName: ƒ}
    // console.log('person',person()); // {name: "", age: 0, getName: ƒ}
    // console.log('person1',person1); // {name: "123", age: 2, getName: ƒ}
    // console.log('person2',person2); // {name: "123", age: 2, getName: ƒ}

    // 如果函数返回值为常规意义上的值类型（Number、String、Boolean）时，
    // new函数将会返回一个该函数的实例对象，
    // 而如果函数返回一个引用类型（Object、Array、Function），
    // 则new函数与直接调用函数产生的结果等同
    // function testFun() {
    //     this.name = 'test1';
    //     return function () {
    //         return true;
    //     }// 返回符合类型
    // }

    // var test = new testFun();
    // var test2 = testFun();
    // console.log('test', test);
    // console.log('test2', test2);
    // // false,因为 Javascript  对于 Object 和 Function 的比较是基于引用的。
    // console.log(test2 === test);

    // function testFun() {
    //     this.name = 'testName';
    //     return 'return Test';// 返回非复合类型
    // }
    // var result = testFun();
    // var newResult = new testFun();
    // console.log('result',result);
    // console.log('newResult',newResult);
    // console.log(result === newResult);
    // 如果函数返回值为常规意义上的的值类型,(Number,String,Boolean)时,函数会返回该实例对象,
    // 如果函数返回一个引用对象(Object,Array,Function),则new 函数与直接调用函数产生结果等同,但引用地址不同


    // 直接返回一个函数的话会产生闭包函数;
    // function testFun() {
    //     this.name = 'testName';
    //     var i = 10;
    //     return function () {
    //         i++;
    //         console.log(i);
    //     }
    // }
    // var a = testFun();
    // var b = new testFun(); //使用new 和不使用同样是会产生闭包
    // a();
    // a();
    // a();
    // b();
    // b();
    // b();
    // b();

    // 设计模式,工厂模式
    // 定义自行车的构造函数

    // new 操作符理解
    // 1.如果就一个函数，没有返回值，没有prototype成员，然后使用new,会是什么结果呢？
    // 如果一个函数没有返回值，那么如果不使用new来创建变量，那么该变量的值为undefined.
    // 如果用了new，那么就是Object.说明一个函数的默认的Prototype是Object.
    // function Test1(str) {
    //     this.a = str;
    // }
    // var myTest = new Test1("test1");
    // console.log(myTest);
    // console.log(typeof myTest);
    // console.log(myTest.constructor);
    // console.log('myTest.a  ',myTest.a);
    // function Test1WithoutNew(str) {
    //     this.a = str;
    // }
    // var myTestWithoutNew = Test1WithoutNew("test1");
    // console.log(myTestWithoutNew); //undefined;

    // 2.如果函数有返回值，但是返回值是基本类型。
    // 那么new出来的myTest还是object.因为基本类型的prototype还是Object.
    // 而如果不使用new，那么返回值就是string的值。
    // function test1 (str) {
    //     this.a = str;
    //     return this.a;
    // }
    // let mytest = new test1('一段字符');
    // console.log('mytest',mytest);
    // console.log('mytest.a',mytest.a);
    // let mytest2 = test1('第二段字符');
    // console.log('mytest2',mytest2);

    // 3.如果函数的返回值为new 出来的对象 或者符合类型,如数组,对象,函数,
    // 那么myTest 的值根据new出来的对象的prototype而定
    // function test1(str) {
    //     this.a = str;
    //     return new String(this.a);
    // }
    // let myTest = new test1('new test1');
    // let myTest1NoNew = new test1('new test1');
    // console.log(myTest);
    // console.log('myTest.a',myTest.a);
    // console.log(myTest.toString());
    // console.log(myTest.a);
    // console.log('myTestNoNew',myTest1NoNew);
    // console.log('myTestNoNew.a',myTest1NoNew.a);
    // console.log('------------');

    // function test2(str) {
    //     this.a = str;
    //     return {a:this.a};
    // }
    // let myTest2 = new test2('new test2');
    // let myTest2NoNew = test2('new test2');
    // console.log('myTest2',myTest2);
    // console.log('myTest2.a',myTest2.a);
    // console.log('myTestNoNew',myTest2NoNew);
    // console.log('------------');

    // function test3(str) {
    //     this.a = str;
    //     return function () {
    //         return this.a;
    //     };
    // }
    // let myTest3 = new test3('new test3');
    // let myTest3NoNew = test3('new test3');
    // console.log('myTest3',myTest3);
    // console.log('myTest3()   ',myTest3());
    // console.log('myTest3.a',myTest3.a);
    // console.log('myTest3NoNew',myTest3NoNew);
    // console.log('myTest3NoNew()',myTest3NoNew());

    // 4。讨论new中的this
    // 如果给test1 的prototype中加入一个方法,getString();
    // 那么getString 中指的就是这个新对象,能够得到在new时候,赋予该对象的属性值
    // let test = function (str) {
    //     this.a = str;
    // };
    // test.prototype.getString = function () {
    //     return this.a;
    // };
    // test.prototype.constructor = function () {
    //     this.a = 123;
    // };
    // let myTest = new test('一段字符串');
    // console.log('myTest',myTest);
    // myTest.a = '我能该变字符串吗?';
    // console.log('myTest prototype',myTest.__proto__);
    // console.log('myTest constructor',myTest.constructor);
    // console.log('myTest getString',myTest.getString);
    // console.log('myTest getString()',myTest.getString());

    // 没有 new 操作符
    // let Test2 = function(str) {
    //     this.a = str;
    // };
    //
    // Test2.prototype.getString = function () {
    //     return this.a;
    // };
    //
    // let myTest2NoNew = Test2("test2");
    // console.log('myTest2NoNew',myTest2NoNew);//undefined
    // console.log('Test2',Test2.prototype);
    // console.log('Test2()',Test2());
    // console.log('myTest2NoNew',myTest2NoNew);// 报错
    // console.log('myTest2NoNew',myTest2NoNew.getString);// 报错

    // 5. 修改了函数的prototype,
    // 那么就会发生类似继承的功能，其实就是js的伪类实现。

    // function test1(str) {
    //     this.b = str;
    // }
    //
    // test1.prototype.getTestString = function () {
    //     return this.b;
    // };
    //
    // let test2 = function (str) {
    //     this.a = str;
    // };
    //
    // test2.prototype = new test1('test 1'); //  test2 继承了 test 1
    // console.log('test2.prototype : ',test2.prototype);
    //
    // test2.prototype.getString = function () {
    //     return this.a;
    // };
    // // 继承了 test2 ,而test2 继承了test 1 ; 在原型链查找上,可以找到test1的属性
    // let myTest2 = new test2('test 2');
    // console.log('myTest2 : ',myTest2);
    // console.log('myTest2 getTestString : ',myTest2.getTestString);
    // console.log('myTest2 getTestString() : ',myTest2.getTestString());
    // console.log('myTest2 getString : ',myTest2.getString);
    // console.log('myTest2 getString :',myTest2.getString());
    // myTest2.b = 10;
    // console.log('myTest2 getTestString() :修改b的值',myTest2.getTestString());


    // function BicycleShop(name) {
    //     this.name = name;
    //     console.log('执行这里吗?');
    //     console.log(this);
    //     console.log('------------');
    //     this.method = function () {
    //         return this.name;
    //     }
    // }
    //
    // BicycleShop.prototype = {
    //     constructor: BicycleShop,
    //     /*
    //      * 买自行车这个方法
    //      * @param {model} 自行车型号
    //     */
    //     sellBicycle: function (model) {
    //         let bicycle = this.createBicycle(model);
    //         console.log('BicycleShop bicycle',bicycle);
    //         // 执行A业务逻辑
    //         bicycle.A();
    //
    //         // 执行B业务逻辑
    //         bicycle.B();
    //
    //         return bicycle;
    //     },
    //     createBicycle: function (model) {
    //         throw new Error("父类是抽象类不能直接调用，需要子类重写该方法");
    //     }
    // };
    //
    // // 实现原型继承
    // function extend(Sub, Sup) {
    //     //Sub表示子类，Sup表示超类
    //     // 首先定义一个空函数
    //     let F = function () {
    //         console.log('F console',this)
    //     };
    //
    //     // 设置空函数的原型为父类的原型
    //     F.prototype = Sup.prototype;
    //     console.log('F',F);
    //     console.log('F.prototype',F.prototype);
    //     console.log('------------');
    //     // 实例化空函数，并把超类原型引用传递给子类
    //     Sub.prototype = new F();
    //     console.log('Sub.prototype',Sub.prototype);
    //
    //     // 重置子类原型的构造器为子类自身
    //     Sub.prototype.constructor = Sub;
    //     console.log('Sub.prototype.constructor',Sub.prototype.constructor);
    //     // 在子类中保存超类的原型,避免子类与超类耦合
    //     Sub.sup = Sup.prototype;
    //     console.log('Sub.sup ',Sub.sup );
    //     if (Sup.prototype.constructor === Object.prototype.constructor) {
    //         // 检测超类原型的构造器是否为原型自身
    //         Sup.prototype.constructor = Sup;
    //     }
    // }
    //
    // function BicycleChild(name) {
    //     this.name = name;
    //     console.log('BicycleChild',this);
    //     // 继承构造函数父类中的属性和方法
    //     BicycleShop.call(this, name);
    // }
    // // 子类继承父类原型方法
    // extend(BicycleChild, BicycleShop);
    // // BicycleChild 子类重写父类的方法
    // BicycleChild.prototype.createBicycle = function () {
    //     console.log('重写方法',this);
    //     let A = function () {
    //         console.log("执行A业务操作");
    //     };
    //     let B = function () {
    //         console.log("执行B业务操作");
    //     };
    //     return {
    //         A: A,
    //         B: B
    //     }
    // };
    // //实例化后
    // let childClass = new BicycleChild("龙恩");
    // console.log('childClass',childClass);


    /**
     *
     * Generator 函数的语法
     *
     * */
    // 一种异步编程解决方案,
    // 语法上可以把它理解成.Generator函数是一个状态机
    // 封装了很多内部状态
    // 执行Generator 函数会返回一个遍历器对象,
    // 也就是说Generator 函数除了状态机还是一个遍历器对象生成函数
    // 返回的遍历器对象,可以依次遍历Generator 函数内部的每一个状态

    // 形式上, Generator 函数是一个普通函数
    // 但是有两个特征
    // 1.function 关键字与函数名字之间有一个星号;
    // 2.函数体内部使用yield 表达式,定义不同的内部状态
    // yield 在英语里的意思就是产出的意思

    // function* myGenerator() {
    //     let i = 10;
    //     i++;
    //     console.log('func inside',i);
    //     yield 'hello'+i;
    //     i = i+'hello';
    //     // return '123'; 如果提前return,那么后面的都不会被遍历
    //     yield 'world'+i;
    //     i = i.substr(2);
    //     return 'end'+i
    // }
    // console.log('11111')
    // let result = myGenerator();
    // console.log('22222');
    // console.log(result);
    // console.log('3333');
    // console.log('1',result.next());
    // console.log('44444');
    // console.log('2',result.next());
    // console.log('3',result.next());
    // console.log('4',result.next());

    // 在调用Generator函数的调用方法和普通函数一样,
    // 也是在函数名字后面加一对圆括号,不同的是,调用后,函数并不执行
    // 返回的也不是函数的运行结构,而是一个指向内部状态的指针对象
    // 也就是遍历器对象 (Iterator Object)

    // 下一步必须调用遍历器对象的next方法,使得指针移向下一个状态。
    // 也就是说每次调用next方法,内部指针就从函数头部或上一次停下来的地方开始执行
    // 知道遇到下一个yield表达式(或者return 语句)为止。
    // Generator 函数是分段执行的,yield 表达式是暂停执行的标记
    // 而next方法可以恢复执行

    // 调用Generator 函数,返回一个遍历器对象,代表Generator函数的内部指针
    // 以后每次调用遍历器对象的next方法,就会返回一个有着value 和done两个属性的对象
    // value 属性表示当前的内部状态的值,是yield 表达式后面那个表达式的值
    // done 属性是一个布尔值,表示是否遍历结束
    // ES6没有规定,function 关键字与函数名之间的星号是写在哪个位置。
    // 一般写法为 function* foo(){//...}

    // ----- yield 表达式 -----
    // 由于Generator 函数返回的遍历器对象,
    // 只有调用next方法才会遍历下一个内部状态,就提供了一种可以暂停执行的函数
    // yield 表达式就是暂停的标志

    // 遍历器对象的next 方法运行逻辑如下
    // (1) 遇到yield 表达式,就暂停执行后面的操作,
    //     并将紧跟在yield 后面的表达式的值,作为返回对象的value属性值
    // (2) 下一次调用next 方法时, 再继续往下执行,直到遇到下一个yield表达式
    // (3) 如果没有在遇到新的yield 表达式,就一直运行到函数结束,
    //     直到return语句为止,并将return 语句后面的表达式的值,作为返回的对象的value属性值
    // (4) 如果该函数没有return 语句,则返回的对象的value属性为undefined

    // 注意 yield 表达式后面的表达式,只有当调用next 方法,内部指针指向该语句时才会执行
    // 因此等于为javascript提供了手动的'惰性求值'(lazy Evaluation)的语法功能
    // function* gener() {
    //     yield 456+12;
    // }
    // let pointer= gener();
    // console.log(pointer);
    // let result = pointer.next();
    // console.log(result)

    // yield 表达式与return 语句有相似之处,也有区别
    // ,相似之处在于都返回紧跟在语句后面的那个表达式的值。
    // 区别在于每次遇到yield ,函数暂停执行,下一次再从该位置继续向后执行
    // 而return 语句不具备位置记忆的功能。一个函数里面只能执行一次,或者说一个return语句
    // 但是yield 表达式可以执行多次,正常函数只能返回一个值,因为只执行一次return
    // Generator函数可以返回一系列的值,因为可以有任意多个yield,
    // 从另一个角度看,也可以说Generator 生成了一系列的值,
    // 英语中，generator 这个词是“生成器”的意思

    // Generator函数可以不用yield 表达式,就会变成一个暂缓执行的函数
    // let i = 10;
    // function* foo() {
    //     console.log('执行',i);
    // }
    //
    // let result = foo();
    // console.log(i);
    // i++;
    // result.next();

    // 注意: yield 表达式只能用在Generator函数里面,其他地方会报错
    // (function () {
    //     yield 1;
    // })(); // 报错 SyntaxError: Unexpected number

    // let arr = [1, [[2, 3], 4], [5, 6]];
    // let flat = function* (a) {
    //     a.forEach(function (item) {//Uncaught SyntaxError: Unexpected identifier
    //         // 这里会产生语法错误,因为forEach方法的参数是一个普通函数
    //         // 在里面使用了yield表达式,修改方法是改为for循环
    //         if (typeof item !== 'number') {
    //             yield* flat(item)
    //         }else {
    //             yield item;
    //         }
    //     })
    // };
    // for(let f of flat(arr)){
    //     console.log(f)
    // }


    // let arr = [1, [[2, 3], 4], [5, 6]];
    // let flat = function* (a) {
    //     let length = a.length;
    //     for (let i = 0; i < length; i++) {
    //         let item = a[i];
    //         if (typeof item !== 'number') {
    //             yield* flat(item);
    //         }else{
    //             yield item;
    //         }
    //     }
    // };
    // for (let f of flat(arr)) {
    //     console.log(f)
    // }

    // yield 表达式如果用在另一个表达式中,必须放在圆括号里面
    // function* demo() {
    //     // console.log('hello'+yield);// Uncaught SyntaxError: Unexpected identifier
    //     // console.log('hello'+yield 12);// Uncaught SyntaxError: Unexpected identifier
    //     console.log('hello '+ (yield) );
    //     console.log('hello '+ (yield 123) );
    // }
    // let result = demo();
    // let data = result.next();
    // console.log('1',data);
    // data = result.next();
    // console.log('2',data);
    // data = result.next();
    // console.log('3',data);

    // yield 表达式用作函数参数 或者 放在赋值表达式的右边,可以不加括号
    // function foo(a, b) {
    //     console.log('foo',a,b)
    // }
    // function* demo() {
    //     foo(yield 'a',yield 'b');
    //     let input = yield 123;
    //     console.log(input)
    // }
    // let result = demo();
    // let data = result.next();
    // console.log('1',data);
    // data = result.next();
    // console.log('2',data);
    // data = result.next();
    // console.log('3',data);
    // data = result.next();
    // console.log('4',data);

    // 与 Iterator 接口的关系
    // 任意一个对象的 Symbol.iterator 方法,等于该对象的遍历器生成函数
    // 调用该函数会返回该对象的一个遍历器对象

    // 由于 Generator函数就是遍历器生成函数,
    // 因此可以把 Generator 赋值给对象的 Symbol.iterator 属性
    // 从而使得该对象具有 Iterator 接口

    // let myIterable = {};
    // myIterable[Symbol.iterator] = function* (arr) {
    //     yield 1;
    //     yield 2;
    //     yield 3;
    // };
    // let result = [...myIterable];
    // console.log(result);

    // Generator 函数赋值给Symbol.iterator属性，
    // 从而使得 myIterable 对象具有了 Iterator 接口，可以被...运算符遍历了。

    // Generator 函数执行后,返回一个遍历器对象,该对象本身也具有 Symbol.iterator 属性

    // gen 是一个Generator函数,调用它会生成一个遍历器对象,
    // 它的Symbol.iterator 属性也是一个遍历器对象生成函数,执行后返回它自己
    // function* gen() {
    //     console.log(456);
    //     yield 456;
    // }
    // let result = gen();
    // let gS = result[Symbol.iterator]();
    // let gSNext = gS.next();// (1)
    // let resultNext = result.next(); // (2)
    // // (1)和(2) 位置互换,会导致 gSnext 和resultNext 互换结果
    //
    // console.log(gS === result);
    // console.log('gS',gS);
    // console.log('result',result);
    // console.log('gSNext',gSNext);
    // console.log('resultNext',resultNext);

    // 2. next 方法的参数
    // yield 表达式本身没有返回值,或者说总是返回undefined。
    // next方法可以带一个参数,该参数就会被当作上一个yield表达式的值
    // function* f() {
    //     for (let i = 0; true; i++) {
    //         console.log('++++',i);
    //         let reset = yield i;
    //         // console.log('----',i);
    //         if (reset) {
    //             i = -10;
    //         }
    //     }
    // }
    // 这里的i会因为保存上下文的原因保留
    // yield一直返回的都是undefined,直到next方法传入true
    // i会被置为-10;这时候i的值被重写


    // let gen = f();
    // let result = gen.next();
    // console.log('result', result);// 0
    // result = gen.next();
    // console.log('result', result); // 1
    // result = gen.next();
    // console.log('result', result); // 2
    // result = gen.next(true);
    // console.log('result', result); // -9
    // result = gen.next();
    // console.log('result', result) // -8

    // Generator函数从暂停状态到恢复运行
    // 它的上下文状态(context)是不变的,通过next方法的参数
    // 就有办法在Generator函数开始运行后,继续向函数体内部注入值
    // 也就可以在Generator函数运行的不同阶段,从外部向内部注入不同的值
    // 从而调整函数行为

    // function* foo(x) {
    //     // let yieldResult = (yield (x + 1));
    //     // console.log('yieldResult',yieldResult)
    //     let y = 2 * (yield (x + 1));// 第一次返回,但yield结果是undefined
    //     // 这里如果 没传值,那么就是undefined/3,传值就是12/3
    //     let z = yield (y / 3);//
    //
    //     return (x + y + z);
    // }
    // let a = foo(5);
    // let result = a.next();
    // console.log('is 6',result);
    // result = a.next(12); // 这里接受的值不是x而是作为上一个yield的返回值
    // console.log('is y',result);
    // result = a.next(14);
    // console.log('id 8',result);

    // function* dataConsumer() {
    //     console.log('start');
    //     console.log(`1.${yield 'abc'}`); // 会先执行yield操作,返回结果,下次next再执行console
    //     console.log(`2.${yield}`);
    //     return 'someStr'
    // }
    // let genObj = dataConsumer();
    // let result = genObj.next();
    // console.log(result);
    // console.log('----------');
    // result = genObj.next('a');
    // console.log(result);
    // console.log('----------');
    // result = genObj.next('abc');
    // console.log(result);

    // 想第一次调用next方法的时候,就输入值,那么可以在Generator函数外面再包一层
    // function wrapper(generatorFunction) {
    //     return function (...args) {
    //         let generatorObject = generatorFunction(...args);
    //         generatorObject.next();
    //         return generatorObject;
    //     }
    // }
    // const wrapped = wrapper(function *() {
    //     console.log(`first input : ${yield}`);
    //     return 'done'
    // });
    // let result = wrapped().next('hello!');
    // console.log('result',result )

    // 3. for ... of循环

    // for ... of 可以自动遍历Generator函数时生成的iterator对象
    // 而且此时不再需要调用next方法
    // function* foo() {
    //     yield 1;
    //     yield 2;
    //     yield 3;
    //     // yield false;
    //     yield 4;
    //     yield 10;
    //     return false;
    // }
    //一旦next方法的返回对象的done属性为true，for...of循环就会中止，
    // 且不包含该返回对象，
    // 所以上面代码的return语句返回的6，不包括在for...of循环之中。

    // for (let v of foo()) {
    //     if ( v > 3 ) {
    //         console.log('return ?',v);
    //         break;
    //     }
    //     console.log(v);
    // }

    // generator 函数配合for...of实现斐波那契数列
    // function* fibonacci() {
    //     let [prev, curr] = [0, 1];
    //
    //     for (; ;) { // 无限循环
    //         [prev, curr] = [curr, prev + curr];
    //         console.log('上一个值prev', prev);
    //         console.log('计算后一个值curr', (prev / curr));
    //         yield curr;
    //     }
    // }
    //
    // let fibonacciResult = fibonacci();
    // for (let n of fibonacciResult) {
    //     console.log('结果', n);
    //     console.log('-----------');
    //     if (n >= 1000) {
    //         break;
    //     }
    // }

    // function getFibonacciN(An) {
    //     let denominatorCalculate = 1 / An;
    //     let power = Math.pow(denominatorCalculate, 4);
    //     return (power / 5);
    // }
    //
    // function makeFibonacci(n) {
    //     let sqrtFive = Math.sqrt(5);
    //     console.log('sqrtFive', sqrtFive);
    //     let halfSqrtFive = sqrtFive / 2;
    //     console.log('halfSqrtFive', halfSqrtFive);
    //     let firstCalculate = n * (1 + halfSqrtFive);
    //     console.log('firstCalculate', firstCalculate);
    //     let secondCalculate = n * (1 - halfSqrtFive);
    //     console.log('secondCalculate', secondCalculate);
    //     let notSqrtDenominator = firstCalculate - secondCalculate;
    //     console.log('notSqrtDenominator', notSqrtDenominator);
    //     let denominator = Math.sqrt(notSqrtDenominator);
    //     console.log('denominator', denominator);
    //     return (1 / denominator)
    // }
    //
    // let An = getFibonacciN(1);
    // let result = makeFibonacci(An);
    // console.log('结果', result);


    // 利用for ... of循环,可以写出遍历任意对象(object)的方法.
    // 原生的javascript对象没有遍历接口,无法使用for...of循环,
    // 通过Generator函数为它加上这个接口,便可以遍历
    // function* objectEntries(obj) {
    //     let propKeys = Reflect.ownKeys(obj);
    //     for(let propKey of propKeys){
    //         yield [propKey,obj[propKey]];
    //     }
    // }
    // let jane = {first:'Jane',last:'Doe'};
    // for (let [key,value] of objectEntries(jane)){
    //     console.log(`${key}:${value}`);
    // }

    // 将Generator函数加到对象的Symbol.iterator属性上
    // function* objEntries() {
    //     let propKeys = Object.keys(this);
    //     for(let propKey of propKeys){
    //         yield [propKey,this[propKey]]
    //     }
    // }
    // let jane = {first :'123',last:'213'};
    // jane[Symbol.iterator] = objEntries;
    //
    // for(let [key ,value] of jane){
    //     console.log(key,value);
    //     let template = `${key}`;
    //     console.log('template',typeof template,template);
    //     console.log(typeof key,typeof value);
    // }

    // 扩展运算符(...)、解构赋值和Array.from方法内部调用都是遍历器接口
    // ,这个意味着它们都可以将Generator函数返回的Iterator对象作为参数

    // function* number() {
    //     yield 1;
    //     yield 3;
    //     yield 7;
    //     return 5;
    //     yield 9;
    // }
    // // 扩展运算符
    // let result = [...number()];
    // console.log('...result',result);
    // // 解构赋值
    // let [x,y] = number();
    // console.log('x,y',x,y);
    // // Array.from
    // let ArrayFrom = Array.from(number());
    // console.log('ArrayFrom',ArrayFrom)
    // // for...of
    // for (let n of number()){
    //     console.log(n)
    // }

    // 4.Generator.prototype.throw()
    // Generator 函数返回的遍历器对象,都有一个throw方法,可以在函数体外抛出错误
    // 然后在Generator函数体内捕获
    // let g = function* () {
    //     try {
    //         yield 45;
    //         yield 456;
    //     } catch (e) {
    //         console.error('内部捕获', e);
    //     }
    // };
    // let i = g();
    // i.next();
    // try {
    //     // 第一次抛出错误会被Generator函数体内捕获
    //     // 第二次抛出错误,由于Generator函数内部的catch语句已经执行过了
    //     // 就不会再捕捉这个错误所以这个错误就被抛出Generator函数体
    //     // 被函数体外的catch捕获
    //     i.throw('第一个错误');
    //     i.throw('第二个错误');
    // } catch (e) {
    //     console.error('这是在外部捕获的错误',e);
    // }

    // throw方法可以接受一个参数,该参数会被catch语句接收,最好是抛出Error对象的实例
    // let g = function* () {
    //     try {
    //         yield 45;
    //         yield 456;
    //     } catch (e) {
    //         console.error('内部捕获', e);
    //     }
    // };
    // let i = g();
    // i.next();
    // i.throw(new Error('给个错误给你'))

    // 注意,不要混淆遍历器对象的throw方法和全局的throw命令
    // 上面代码错误,是用遍历器对象的throw方法抛出的,而不是throw命令抛出的
    // 全局的throw只能被函数体外的catch语句捕获
    // let g = function* () {
    //     while (true) {
    //         try {
    //             yield ;
    //         } catch (e) {
    //             if(e !== 'a'){
    //                 throw e;
    //             }
    //             console.log('内部捕获',e)
    //         }
    //     }
    // }
    // let i = g();
    // i.next();
    // try{
    //     // throw new Error('a');// 这里不会,如果这里先执行,后面就不再执行
    //     i.throw('a'); // 这里会被捕获到函数体内
    //     // i.throw('b');
    //     throw new Error('a');// 这里不会,如果这里后执行,前面会抛出错误到函数体内
    //     throw new Error('b')
    // }catch(e){
    //     console.log('外部捕获',e)
    // }

    // 如果Generator函数内部和外部都没有部署try...catch代码块
    // 程序会报错,导致中断执行
    // let gen = function* gen() {
    //     yield console.log('hello');
    //     yield console.log('11123');
    // };
    // let g = gen();
    // g.next();
    // g.throw();
    // hello
    // Uncaught undefined

    // throw 方法被捕获后,会附带执行下一条yield表达式
    // 即会附带执行一次next 方法
    // 在Generator函数内部部署try...catch代码块,
    // 遍历器的throw方法抛出的错误
    // 就不会影响下一次遍历
    // let gen = function* gen() {
    //     try {
    //         yield console.log('a')
    //     } catch (e){
    //         console.log(e)
    //     }
    //     yield console.log('b');
    //     yield console.log('c');
    // };
    // let g = gen();
    // let result = g.next(); // a
    // console.log('result',result);
    // console.log('---');
    // result = g.throw(new Error('抛出错误'));
    // console.log('result',result);
    // console.log('---');
    // result = g.next();
    // console.log('result',result);
    // console.log('---');

    // throw 命令与g.throw 方法无关,互不影响
    // let gen = function* gen() {
    //     yield console.log('hello');
    //     yield console.log('world');
    // };
    // let g = gen();
    // g.next(); // hello
    // try {
    //     throw new Error('外部err')
    // } catch (e) {
    //     console.error(e);
    //     g.next();//world
    // }

    // Generator函数体外抛出的错误,可以在函数体内捕获,
    // Generator函数体内抛出的错误,也可以被函数体外的catch捕获
    // function* foo() {
    //     let x = yield 3;
    //     let y = x.toUpperCase();// 报错?
    //     yield y;
    // }
    //
    // let it = foo();
    // let result = it.next();
    // console.log(result);//{value: 3, done: false}
    // try {
    //     it.next(44) // 传入44 作为上一次yield的结果
    // } catch (e) {
    //     console.error('函数外部error',e)
    // }

    // 一旦Generator执行过程中抛出错误,且没有被内部捕获,
    // 就不会再继续执行,此后再调用next方法
    // 只会放回value为undefined,done属性为true的对象
    // 引擎认为这个Generator已经运行结束了
    // function* g() {
    //     yield 1;
    //     console.log(' generator throw err');
    //     throw new Error(' generator err');
    //     yield 2;
    //     yield 3;
    //     yield 4;
    // }
    // 代码一共运行三次,第二次运行的时候抛出错误
    // 第三次运行的时候generator函数就结束了,不在继续执行
    // function log(generator) {
    //     let v;
    //     console.log('starting generator');
    //     try {
    //         v = generator.next();
    //         console.log('first', v);
    //     } catch (e) {
    //         console.error('first', e)
    //     }
    //     try {
    //         v = generator.next();
    //         console.log('second', v);
    //     } catch (e) {
    //         console.error('second', e)
    //     }
    //     try {
    //         v = generator.next();
    //         console.log('third', v);
    //     } catch (e) {
    //         console.error('third', e)
    //     }
    //     try {
    //         v = generator.next();
    //         console.log('four', v);
    //     } catch (e) {
    //         console.error('four', e)
    //     }
    // }

    // log(g());

    // 5.Generator.prototype.return()
    // Generator 函数返回的遍历器对象,可以有一个return的方法,
    // 可以返回给定的值,并且终结遍历generator函数
    // function* gen() {
    //     yield 1;
    //     yield 5;
    //     yield 7;
    // }
    //
    // let g = gen();
    // let result = g.return('传个指定的值 1');
    // console.log('1', result)
    // result = g.return(result);
    // console.log('2', result);
    // result = g.next();
    // console.log('3', result);

    // 遍历器g调用return方法后,
    // 返回值的value属性就是return方法的参数
    // 并且 generator函数的遍历就终止了,返回值的done属性为true
    // 再调用next方法,done属性总是返回true
    // 再调用return 方法,传入参数,则返回参数值,done为true
    // 不传值则value属性为undefined
    // function* gen() {
    //     yield 1;
    //     yield 5;
    //     yield 7;
    // }
    //
    // let g = gen();
    // let result= g.next(); // done false value 1
    // console.log(result);
    // result = g.return();
    // console.log(result); // done true
    // result = g.next();
    // console.log(result); // done true

    // 如果generator函数内部有try ... finally代码块
    // 那么return 方法会推迟到finally代码块执行完再执行
    // function* numbers() {
    //     yield 1;
    //     try {
    //         yield 2;
    //         yield 3;
    //     } catch (e) {
    //         console.log(e)
    //     } finally {
    //         yield 4;
    //         yield 5;
    //     }
    //     yield 6;
    // }
    //
    // let g = numbers();
    // let result= g.next();
    // console.log(result); // 1
    // result= g.next();
    // console.log(result);  // 2
    //
    // let returnResult= g.return(12);
    // console.log('returnResult',returnResult); // 4
    // // 调用return后会直接执行finally,等finally代码块执行完后再执行return方法
    // result= g.next();
    // console.log(result);
    // result= g.next();
    // console.log(result);


    //  next() throw() return()的共同点
    // 它们的作用都是让generator回复执行,并且使用不同的语句替换yield表达式
    // next() 是将yield表达式替换成一个值
    // next(1) 相当于将yield表达式替换成一个值1。
    // 如果next方法没有传入参数,那么就替换为undefined
    // const g = function* (x, y) {
    //     let result = yield x + y;
    //     return result;
    // };
    // const gen = g(1, 2);
    // console.log(gen);
    // let result = gen.next();// Object {value: 3, done: false}
    // console.log(result);
    // result = gen.next(5); // Object {value: 1, done: true}
    // console.log(result);
    // 相当于将 let result = yield x + y;
    // 替换为let result = 5;

    // throw() 是将yield 表达式替换成一个throw 语句
    // gen.throw(new Error('错误'))

    // return() 是将yield 表达式替换为一个return 语句
    // let result = gen.return(2);
    // console.log('result',result);
    //
    // console.log(gen.next(456))

    // 7. yield* 表达式
    // 如果在generator 函数内部,调用另一个Generator函数,默认情况下是没有效果的

    // function* foo() {
    //     console.log('不会进来');
    //     yield 'a';
    //     yield 'b';
    // }
    //
    // function* bar() {
    //     yield 'x';
    //     foo();
    //     yield 1;
    // }
    //
    // for (let it of bar()) {
    //     console.log(it);
    // }

    // yield* 表达式,用来在一个 Generator函数里面执行另一个Generator函数
    // function* foo() {
    //     yield '1';
    //     yield '2';
    // }
    //
    // function* bar() {
    //     yield 'a';
    //     yield *foo();
    //     yield 'b';
    // }
    // for(let it of bar()){
    //     console.log(it)
    // }
    // // 等同于
    // function* bar() {
    //     yield 'a';
    //     for(let it of foo()){
    //         yield it
    //     }
    //     yield 'b'
    // }

    // function* inner() {
    //     yield 'hello!';
    // }
    // function* outer() {
    //     yield 'open';
    //     yield inner();
    //     yield 'close';
    // }
    // let gen = outer();
    // let result = gen.next();
    // console.log('result1',result);
    // // result = gen.next(); // value 是一个遍历器对象
    // result = gen.next().value.next();
    // console.log('result1',result);
    // result = gen.next();
    // console.log('result1',result);
    //
    //
    // console.log('-------------');
    //
    // function* outer2() {
    //     yield 'open2';
    //     yield *inner(); // 直接遍历返回的遍历器
    //     yield 'close2'
    // }
    // let gen2 = outer2();
    // result = gen2.next();
    // console.log('result2',result);
    // result = gen2.next();
    // console.log('result2',result);
    // result = gen2.next();
    // console.log('result2',result);

    // 在yield表达式后面加上星号，表明它返回的是一个遍历器对象。这被称为yield*表达式。

    // 写到delegatedIterator
    // let delegatedIterator = (
    //     function* () {
    //         yield 'hello';
    //         yield 'bye'
    //     }()
    // );
    //
    // let delegatingIterator = (
    //     function* () {
    //         yield 'Greetings';
    //         yield* delegatedIterator;
    //         yield '结束'
    //     }()
    // );
    // for (let value of delegatingIterator) {
    //     console.log(value)
    // }
    // delegatingIterator 是代理者,delegatedIterator 是被代理者
    // 由于yield* delegatedIterator语句得到的值,是一个遍历器,所以要用星号表示
    // 运行结果就是使用一个遍历器,遍历了多个Generator函数,递归的效果

    // yield*后面的Generator函数(没有return语句时),
    // 等同于在Generator函数内部部署了一个for...of 循环
    //
    // function* concat(iter1, iter2) {
    //     yield* iter1;
    //     yield* iter2;
    // }
    //
    // // 等同于
    // function* concat(iter1, iter2) {
    //     for (let value of iter1) {
    //         yield value;
    //     }
    //     for (let value of iter2) {
    //         yield value;
    //     }
    // }

    // yield* 后面的Generator函数(没有return语句时候)
    // ,不过是for...of的简写形式
    // 在有return语句的时候则需要用
    // let value = yield* iterator 的形式获取return语句的值

    // 如果yield*后面跟着一个数组,
    // 由于数组原生就支持遍历器,因此会遍历数组成员

    // 这里的yield命令如果不加 * 返回的会是整个数组,
    // 加了 * 表示返回的是数组的遍历器对象。
    // function* gen() {
    //     yield * ['1','2',415]
    // }
    // for(let result of gen()){
    //     console.log(result);
    // }

    // 任何数据结构,只要有iterator接口,就可以被 yield* 遍历
    // let read = (function* () {
    //     yield 'hello';
    //     yield* 'hello world'
    // })();
    // for (let result of read) {
    //     console.log('遍历字符串',result)
    // }

    // 如果被代理的Generator函数有return 语句,
    // 那么就可以向代理它的Generator函数返回数据
    // function* foo() {
    //     yield 2;
    //     yield 3;
    //     return 'foo result';
    // }
    // function* bar() {
    //     yield 1;
    //     let v = yield *foo();
    //     yield* v;
    //     yield 4;
    // }
    // let result = bar();
    // for(let value of result){
    //     console.log(value);
    // }

    // function* genFuncWidthReturn() {
    //     yield 'a';
    //     yield 'v';
    //     return 'result'
    // }
    //
    // function* logReturn(genObj) {
    //     let result = yield* genObj;
    //     console.log('被代理的返回值',result)
    // }
    // let result = [...logReturn(genFuncWidthReturn())];
    // console.log('扩展运算符解构的值', result )
    //

    // yield* 命令可以很方便的取出嵌套数组的所有成员
    // function* itertree(tree) {
    //     if (Array.isArray(tree)) {
    //         for (let i = 0; i < tree.length; i++) {
    //             yield* itertree(tree[i])
    //         }
    //     } else {
    //         yield tree;
    //     }
    // }
    //
    // const tree = ['a', ['b', 'c', ['b', 'c']], ['d', 'e']];
    // let resultArr = [];
    // for (let x of itertree(tree)) {
    //     resultArr.push(x);
    // }
    // console.log('resultArr', resultArr)

    // // 使用yield* 语句 遍历完全二叉树
    // // 二叉树的构造函数
    // // 三个参数分别是左树,当前节点,和右树
    // function Tree(left, label, right) {
    //     this.left = left;
    //     this.label = label;
    //     this.right = right;
    // }
    //
    // // 中序 (in order)遍历函数
    // // 由于返回的是一个遍历器,所以要用Generator函数
    // // 函数体内采用递归算法,所有左树 和右树要用yield*遍历
    // function* inorder(t) {
    //     if (t) {
    //         yield* inorder(t.left);
    //         yield t.label;
    //         yield* inorder(t.right);
    //     }
    // }
    //
    // // 生成二叉树
    // function make(arr) {
    //     if (arr.length === 1) {
    //         return new Tree(null, arr[0], null)
    //     }
    //     return new Tree(make(arr[0]), arr[1], make(arr[2]));
    // }
    //
    // let arr = [
    //     [
    //         [[2],'a',[1]], 'b', ['c']
    //     ],
    //     'd',
    //     [
    //         ['e'], 'f', ['g']
    //     ]
    // ];
    // // let arr = [[['a']],'b'];
    // let tree = make(arr);
    // console.log('tree',tree)
    // let result = [];
    // for (let node of inorder(tree)) {
    //     result.push(node)
    // }
    // console.log(result);


    // 寄生组合式继承
    // es5前
    // function object(o) {
    //     function f() {
    //     }
    //     f.prototype = o;
    //     return new f();
    // }
    //
    // function inheritPrototype(subType, superType) {
    //     let prototype = object(superType.prototype);// 创建对象
    //     // es5 中使用 Object.create(superType.prototype)
    //     prototype.constructor = subType;            // 增强对象
    //     subType.prototype = prototype;              // 指定对象
    // }
    //
    // function SuperType(name) {
    //     this.name = name;
    //     this.colors = ['red', 'blue', 'yellow'];
    // }
    //
    // SuperType.prototype.sayName = function () {
    //     alert(this.name);
    // };
    //
    // function SubType(name, age) {
    //     SuperType.call(this, name);
    //     this.age = age;
    // }
    //
    // inheritPrototype(SubType, SuperType); // 继承到SubType
    // SubType.prototype.sayAge = function () {
    //     alert(this.age)
    // }
    // let result = new SubType('名字', 11);
    // console.log(result)
    // console.log('result instanceof SubType', result instanceof SubType);
    // console.log('result instanceof SuperType', result instanceof SuperType);
    // console.log('result instanceof Object', result instanceof Object);
    // for (let key in result) {
    //     console.log(key,':',result[key]);
    //     console.log(result[key] instanceof Object);
    //     console.log(result[key] instanceof Array);
    //     console.log(result[key] instanceof String,typeof result[key] );
    //     console.log('-------------')
    // }
    //
    // let str = new String('34234234');
    // console.log(str.toString)
    // console.log(str.toString())

    // let intervalTime = 0;
    // console.time('test');
    // let timer = setInterval(function () {
    //     let arr = makeRandomArr(); // 随机数字数组
    //     let result = quickSort(arr);
    //
    //     let wikiArr = makeRandomArr(); // 随机数字数组
    //     let wikiResult = wikiQuickSort(wikiArr);
    //     intervalTime++;
    //     if( intervalTime > 10){
    //         console.log('阮-运算次数', times);
    //         console.log('阮-运算结果', result);
    //         console.log('wiki运算次数', wikiTimes);
    //         console.log('wiki运算结果', wikiResult);
    //         console.timeEnd('test');
    //         clearInterval(timer);
    //     }
    // },100)


    // 作为对象属性的Generator函数
    // 如果一个对象的属性是Generator函数,简写
    // let obj = {
    //     *myGeneratorMethod(){
    //         yield 1
    //     }
    // }
    // console.log(obj)
    // console.log(obj.myGeneratorMethod);
    // let result = obj.myGeneratorMethod();
    // let next = result.next();
    // console.log(result);
    // console.log(next);
    // next = result.next();
    // console.log(next);

    // 9. Generator 函数的this
    // Generator函数总是返回一个遍历器,es6规定这个遍历器是Generator函数的实例
    // 也继承了Generator函数的prototype对象上的方法
    // function* g() {
    //
    // }
    // g.prototype.hello= function () {
    //     return 1;
    // };
    // let obj = g();
    // console.log(obj instanceof g);
    // let result = obj.hello();
    // console.log(result)

    // Generator函数g返回的遍历器obj,是g的实例,而且继承了g.prototype
    // 但是如果把g作为普通的构造函数,并不会生效,因为g返回的总是遍历器对象
    // 而是不是this对象
    // function* g() {
    //     this.a = 111;
    // }
    // let obj = g();
    // console.log(obj.constructor)
    // console.log(obj.a)

    // Generator函数不能跟new命令一起用,会报错
    // function* func() {
    //     yield this.x = 1;
    // }
    // new func();// 报错
    // func不是构造函数,所以报错
    //

    //让Generator函数返回一个正常的对象实例
    // 生成一个空对象,使用call方法绑定Generator函数内部的this
    // 函数调用后,空对象就是Generator函数的实例对象
    // function* fun() {
    //     this.a = 1;
    //     yield this.b = 2;
    //     yield this.c = 2;
    // }
    // let obj = {};
    // let f = fun.call(obj);
    // console.log(f.next());
    // console.log(f.next());
    // console.log(f.next());
    // console.log(obj)

    // 将obj 换成fun.prototype
    // function* fun() {
    //     this.a = 1;
    //     yield this.b = 2;
    //     yield this.c = 3;
    // }
    // let f = fun.call(fun.prototype);
    // console.log(f.next())
    // console.log(f.next())
    // console.log(f.next())
    // console.log(f);
    // console.log(f.a)
    // console.log(f.b)
    // console.log(f.c)
    // for(let key in f){
    //     console.log(key,f[key])
    // }

    // 再将fun改成构造函数就可以执行new命令
    // function* gen() {
    //     this.a = 1
    //     yield this.b = 2;
    //     yield this.c = 3;
    // }
    // function F() {
    //     return gen.call(gen.prototype)
    // }
    // let f = new F();
    // console.log(f.next())
    // console.log(f.next())
    // console.log(f.next())
    // console.log(f.next())
    // for(let key in f){
    //     console.log(key,f[key])
    // }

    //10 含义
    // Generator与状态机,
    // Generator是实现状态机的最佳结构,
    // let ticking = true;
    // let clock = function () {
    //     if(ticking){
    //         console.log('1')
    //     }else{
    //         console.log(2)
    //     }
    //     ticking =!ticking;
    // }
    // Generator 实现
    // let clock = function *() {
    //     while (true){
    //         console.log('1');
    //         yield ;
    //         console.log('2');
    //         yield ;
    //     }
    // };
    // let result = clock();
    // setInterval(function () {
    //     result.next()
    // },100)

    // Generator 与协程
    // 协作的线程
    // (1) 协程与子例程的诧异
    // 传统的 '子例程'(subroutine) 采用堆栈式 '先进后出'执行方式
    // 只有当调用的子函数完全执行完毕,才会结束执行父函数
    // 协程与其不同,多个线程(单线程情况下,即多个函数)
    // 可以并行执行,但是只有一个线程处于正在运行的状态,
    // 其他线程(或函数)都处于暂停态(suspended)
    // 线程(或者函数)之间可以交换执行权,
    // 也就是说一个线程可以执行到一半就暂停执行,将执行权交给另一个线程
    // 等到稍后收回执行权的时候,在恢复执行,这种并行执行,交换执行权的线程
    // 称之为协程
    // 从实现上看,在内存中子例程只是用一个栈,
    // 而协程是同时存在多个栈,但只有一个栈是在运行状态
    // 协程是以多占用内存为代价,实现多任务并行

    // (2)协程与普通线程的差异
    // 协程适合用于多任务运行的环境,
    // 在这个意义上,它与普通的线程很相似
    // 都有自己的执行上下文,可以分享全局变量
    // 不同在于,同一时间可以有多个线程处于运行状态
    // 但是运行的协程只能有一个,
    // 其他的线程都处于暂停状态,
    // 普通的线程都是抢先式的,哪个线程优先得到资源
    // 由运行环境决定,但是协程是合作式的,执行权由协程自己分配

    // 由于javascript是单线程语言,只能保持一个调用栈,
    // 引入协程以后,每个任务可以保持自己的调用栈
    // 好处: 在抛出错误的时候,可以找到原始的调用栈
    // 不至于像异步操作的回调函数那样,一旦出错,原始的调用栈早就结束

    // Generator 函数是ES6 对协程的实现,但属于不完全实现
    // Generator函数被成为'半协程',意思是只有Generator函数的调用者
    // 才能将程序的执行权还给Generator函数,
    // 如果是完全执行的协程任何函数的都可以都可以让暂停的协程继续执行

    // 如果将Generator函数当作协程,
    // 完全可以将多个需要互相协作的任务写成Generator函数
    // 它们之间使用yield 表示式交换控制权

    // Generator 与上下文,
    // JS 代码运行时,会产生一个全局的上下文环境(context ,又称运行环境)
    // 包含了当前所有变量和对象。
    // 然后执行函数(或块级代码)的时候,
    // 又会在当前上下文环境的上层,产生一个函数运行的上下文
    // 变成当前(active)的上下文.
    // 由此形成一个上下文环境的堆栈(context stack)

    // 这个堆栈是'后进先出'的数据结构,最后产生的上下文环境首先执行完成
    // 退出堆栈,然后再执行完成它下层的上下文,直至所有的代码执行完成,堆栈清空
    // Generator函数不是这样,它执行产生的上下文环境,
    // 一旦遇到yield命令,就会暂时退出堆栈,但是并不会消失
    // 里面的所有变量和对象会冻结在当前状态
    // 等到对它执行next命令,这个上下文环境又会重新加入调用栈
    // 冻结的变量和对象恢复执行

    // function* gen() {
    //     yield 1;
    //     return 2
    // }
    // let G = gen();
    // console.log(G.next(),G.next());

    // 第一次执行g.next(),Generator 函数gen的上下文会加入堆栈
    // 即开始运行gen内部的代码,等遇到yield 1时候,gen 上下文退出堆栈
    // 内部状态冻结,第二次执行g.next时候,gen上下文重新进入堆栈,
    // 变成当前的上下文,重新恢复执行

    // 应用
    // Generator 可以暂停函数执行,返回任意表达式的值

    // (1) 异步操作的同步化表达
    // Generator 函数的暂停执行的效果,意味可以把异步操作谢谢爱yield表达式里面
    // 等到调用next方法时候,再往后执行,这实际上等于不需要写回调函数,
    // 异步操作的后续操作可以放在yield表达式下面,反正要等到调用next方法时再执行
    // function* loadUI() {
    //     showLoadingScreen();
    //     yield loadUIDataAsync();
    //     hideLoadingScreen();
    // }
    //
    // let loader = loadUI();
    // // 加载UI
    // loader.next();
    // // 卸载UI
    // loader.next();
    // AJAX 典型的异步操作,通过Generator函数部署Ajax操作,同步表达
    // function* main() {
    //     let result = yield request ('http://1111.ulr');
    //     let res = JSON.parse(result);
    //     console.log(res)
    // }
    // function request(url) {
    //     makeAjaxCall(url,function (response) {
    //         it.next(response);
    //     })
    // }
    // let it = main();
    // it.next();
    // 上面代码中，第一次调用loadUI函数时，该函数不会执行，
    // 仅返回一个遍历器。下一次对该遍历器调用next方法，
    // 则会显示Loading界面（showLoadingScreen），
    // 并且异步加载数据（loadUIDataAsynchronously）
    // 等到数据加载完成，再一次使用next方法，
    // 则会隐藏Loading界面。可以看到，这种写法的好处是所有Loading界面的逻辑，
    // 都被封装在一个函数，按部就班非常清晰。

    // 通过Generator函数逐行读取文本文件
    // function* numbers() {
    //     let fileInput = $('#fileInput');
    //     let file = new FileReader();
    //     $(fileInput).on('change',function (e) {
    //         let fileObj = e.target.files[0];
    //         // file.readAsText(fileObj);
    //         file.readAsText('./numbers.txt')
    //     });
    //     file.onload = function () {
    //         console.log(file.result)
    //     };
    //
    //     try{
    //         while (!file.eof){
    //             // yield parseInt(file.readLine('./numbers.txt'),10) // 无效
    //         }
    //     }finally {
    //         // file.close()
    //     }
    // }
    // let result = numbers();
    //
    // console.log(result.next());
    // console.log(result.next());


    // (2) 控制流管理
    // 如果有一个多步操作非常耗时间,采用回调函数
    // step1(function (value) {
    //     step2(value,function (value1) {
    //         step3(value1,function () {
    //
    //         })
    //     })
    // })

    // 使用promise改写
    // Promise.resolve(step1)
    //     .then(step2)
    //     .then(step3)
    //     .then(step4)
    //     .then(function (value4) {
    //         // Do something with value4
    //     },function (error) {
    //         // Handle any error from step1 through step4
    //     })
    //     .done();
    // // Generator 函数进一步改写
    // function* longRun(value1) {
    //     try {
    //         let value2 = yield step1(value1);
    //         let value3 = yield step2(value2);
    //         let value4 = yield step3(value3);
    //         let value5 = yield step4(value4);
    //         // Do something with value4
    //     }catch (e){
    //         console.error(e)
    //     }
    // }
    //
    // // 接着使用一个函数,次序自动执行所有步骤
    // function scheduler(task) {
    //     let taskObj = task.next(task.value);
    //     // 如果Generator函数未结束,就继续调用
    //     if(!taskObj.done){
    //         task.value = taskObj.value;
    //         scheduler(task)
    //     }
    // }
    // scheduler(longRun(value))

    // 注意,上面代码只适合同步操作,并不适合异步,所有task必须是同步的
    // 因为这里的代码已得到返回值,就继续往下执行,没有判断异步操作何时完成

    // 利用let ... of 控制流管理
    // let steps = [step1,step2,step3];
    // function* iterateStep(steps) {
    //     for(let i = 0; i<steps.length;i++){
    //         let step = steps[i];
    //         yield step()
    //     }
    // }
    // iterateStep(steps)

    // 将任务分解成步骤之后,可以将项目分解成多个一次执行的任务
    // let jobs = [job1,job2,job3,job4]
    // function* iterateJobs(jobs) {
    //     for(let i = 0; i<jobs.length;i++){
    //         let job = jobs[i];
    //         yield *iterateStep(job.steps)
    //     }
    // }

    // 数组jobs封装了一个项目的多个任务,Generator函数
    // iterateJobs则是一次给这些任务添加yield*命令
    // 最后使用for...of 循环一次性依次执行所有任务的所有步骤
    // for(let step of iterateJobs(jobs)){
    //     console.log(step)
    // }
    //上面的做法只能用于所有步骤都是同步操作的情况，不能有异步操作的步骤

    // for...of的本质是一个while循环,
    // let it = iterateJobs(jobs);
    // let res = it.next();
    // while(!res.done){
    //     let result = res.value;
    //     // ...
    //     res = it.next()
    // }

    // (3) 部署Iterator接口
    // 利用Generator函数可以在任意对象部署Iterator接口
    // function* iterEntries(obj) {
    //     let keys = Object.keys(obj);
    //     for(let i =0; i<keys.length;i++){
    //         let key = keys[i];
    //         yield [key,obj[key]]
    //     }
    // }
    //
    // let myObj = { foo: 3, bar: 7 };
    // for (let [key,value] of iterEntries(myObj)){
    //     console.log(key,value)
    // }

    // 对数组部署Iterator 接口的例子,尽管数组原生具有这个接口。
    // function *makeSimpleGenerator(arr) {
    //     let nextIndex = 0;
    //     while (nextIndex < arr.length){
    //         yield arr[nextIndex++];
    //     }
    // }
    //
    // let gen = makeSimpleGenerator(['1',2])
    // console.log(gen.next().value)
    // console.log(gen.next().value)
    // console.log(gen.next().value)

    // (4) 作为数据结构
    // Generator 可以看作是数据结构，更确切地说，
    // 可以看作是一个数组结构，
    // 因为 Generator 函数可以返回一系列的值，
    // 这意味着它可以对任意表达式，提供类似数组的接口。

    // 依次返回三个函数，但是由于使用了Generator函数
    // 可以像处理数组一样,处理三个返回的函数
    // function* doStuff() {
    //     yield fs.readFile.bind(null,'hello.txt');
    //     yield fs.readFile.bind(null,'hello.txt');
    //     yield fs.readFile.bind(null,'hello.txt');
    // }
    //
    // for(let task of doStuff()){
    //     task()  // task是一个函数，可以像回调函数那样使用它
    // }

    // ES5 写法,可以用一模一样的for...of循环处理！
    // function doStuff() {
    //     return[
    //         fs.readFile.bind(null,'hello.text'),
    //         fs.readFile.bind(null,'hello.text'),
    //         fs.readFile.bind(null,'hello.text')
    //     ]
    // }

    /**
     *
     * Generator 函数的异步应用
     *
     * */

    // 1.传统方法
    // 异步编程一般有四种方法:
    // <1>. 回调函数
    // <2>. 事件监听
    // <3>. 发布/订阅
    // <4>. Promise对象

    // 2.基本概念
    // 异步,任务不是连续完成,而是执行了第一段,
    // 转而执行其他任务,等任务准备完成
    // 在继续执行第二段任务
    // 如网络请求,文件读取

    // 回调函数
    // fs.readFile('/etc/passwd','utf-8',function (err, data) {
    //     if(err){throw  err};
    //     console.log(data)
    // })
    // 为什么Node约定 回调函数的第一个参数必须是错误对象err
    // (如果没有错误,该参数就是null)
    // 原因: 执行分成两段,第一段执行完成后,任务所在的上下文环境已经结束
    // 在这以后抛出的错误,原来的上下文环境已经无法捕捉,只能当作参数,传入第二段

    // Promise
    // 多个回调函数嵌套会出现代码横向发展,而导致强耦合
    // 只要有一个操作修改,它的上层回调函数和下层回调函数都有可能跟着修改
    // 称为回调函数地狱

    // Promise对象解决此问题

    // 写法
    // let readFile = require('fs-readfile-promise');
    // readFile('filesA')
    //     .then(function (data) {
    //         console.log(data)
    //     })
    //     .then(function (data) {
    //         return readFile('filesB')
    //     })
    //     .then(function (data) {
    //         console.log(data)
    //     })
    //     .catch(function (err) {
    //         console.error(err)
    //     })

    // Generator 函数

    // 协程
    // 多个线程相互协作,完成异步任务
    // 流程如下:

    // - 第一步,协程A开始执行
    // - 第二步,协程A 执行到一半,进入暂停,执行权转移到协程B
    // - 第三步,一段时间后,协程B交还执行权
    // - 第四步,协程A恢复执行,结束流程

    // 例子 读取文件的协程写法
    // function* asyncJob() {
    //     let f = yield readFile(fileA)
    // }
    // 遇到yield命令,就执行到此处,执行权交给其他协程,
    // 等到执行权返回,再从暂停的地方继续往后执行,
    // 最大优点在于,代码的写法,很像同步操作

    // 协程的Generator函数实现
    // 整个Generator函数就是一个封装的异步任务,或者说是异步任务的容器
    // 异步操作需要暂停的地方都是用yield语句注明

    // function* gen(x) {
    //     let y = yield x+3;
    //     return y;
    // }
    // let g = gen(1);
    // console.log(g.next());
    // console.log(g.next());
    // 调用Generator函数,会返回一个内部指针(即遍历器)g。
    // 执行Generator函数不会返回结果,而是返回的是指针对象
    // 调用指针g的next 方法 会移动内部指针(即异步任务的第一段)
    // 指向第一个遇到yield 语句

    // next方法的作用是分阶段执行Generator函数,每次调用next方法,
    // 会返回一个对象,表示当前阶段的信息,(value属性和done属性)
    // 表示 Generator 函数是否执行完毕，即是否还有下一个阶段。

    // Generator函数的数据交换和错误处理
    // Generator函数可以暂停执行和恢复执行,这是它可以封装异步任务的根本原因
    // 两个特性,使其可以作为异步编程的完整解决方案:
    // <1> 函数体内外的数据交换
    // <2> 函数体内外的错误处理机制

    // next 返回值的value 属性,是Generator函数向外输出数据,
    // next方法可以接受参数向Generator函数体内输入数据

    // function* gen(x) {
    //     let y = yield x+3;
    //     return y;
    // }
    // let g = gen(1);
    // console.log(g.next());
    // console.log(g.next(10));

    // Generator函数内部可以部署错误处理代码,
    // 捕获函数体外抛出的错误
    // function* gen(x) {
    //     let y = 0;
    //     try {
    //        y = yield x +3;
    //     } catch (e) {
    //         console.error(e)
    //     }
    //     return y;
    // }
    // let g = gen(1);
    // let result = g.next(1);
    // console.log(result);
    // g.throw('error');
    // 使用指针对象的throw方法抛出的错误,
    // 可以被函数体内的try...catch代码块捕获
    // 出错的代码与处理错误的代码,实现了时间与空间的分离
    // 对异步编程来说很重要

    // 异步任务的封装

    // 例子
    // let fetch = require('node-fetch');
    //
    // function* gen() {
    //     let url = 'https://api.github.com/users/github';
    //     let result = yield fetch(url);
    //     console.log(result.bio);
    // }
    //
    // // 执行使用代码
    // let g = gen();
    // let result = gen.next();
    // result.value
    //     .then(function (data) {
    //         return data.json();
    //     })
    //     .then(function (data) {
    //         g.next(data)
    //     })
    // 首先执行Generator函数,获取遍历器对象,然后使用next方法
    // 执行异步任务的第一阶段。
    // 由于Fetch模块返回的value是一个Promise对象
    // 因此要用then方法调用下一个next方法

    // 虽然Generator函数将异步操作表示的很简洁
    // 但流程管理不方便,什么时候执行第一阶段,什么时候执行第二阶段
    //-------


    // 4.Thunk [θʌŋk] 函数
    // 自动执行Generator函数的一种方法
    // 参数的求值策略
    // let x = 1;
    // function f(m) {
    //     return m*2;
    // }
    // let result = f(x+5);
    // console.log(result);
    // x+2 表达式应该何时求值
    // 一种是'传值调用',在进入函数体之前就计算x+5的值
    // 再将这个值传给f,C语言采取此策略
    //  f(x + 5)
    // 传值调用时，等同于
    //  f(6)

    // 另一种是'传名调用' ,直接将表达式x+5传入函数体,
    // 只在用到它的时候求值,Haskell语言采用此策略
    // f(x+5);
    // 传名调用等同于
    // (x+5)*2

    // 传值调用较为简单,但尚未用到此参数时候,会造成性能损
    // function f(a, b) {
    //     return b
    // }
    // f(3 * x * x - 2 * x - 1, x);

    // 函数f的第一个参数是一个复杂的表达式，
    // 但是函数体内根本没用到。对这个参数求值，
    // 实际上是不必要的。因此，有一些计算机学家倾向于"传名调用"，
    // 即只在执行时求值。

    // Thunk 函数的含义
    // 编译器的'传名调用'实现,往往是将参数放到一个临时函数中,
    // 再将这个临时函数传入函数体内,这个临时函数就叫Thunk函数
    //
    // function f(m) {
    //     return m * 2;
    // }
    // let x = 10;
    // console.log(f(x+5));
    //
    // // 等同
    // let thunk = function () {
    //     return x + 5;
    // }
    // function f(thunk) {
    //     return thunk()*2;
    // }

    // JavaScript 语言的Thunk函数
    // JavaScript 语言是传值调用,在js中,Thunk函数替换的不是表达式
    // 而是多参数函数.将其替换成一个只接受回调函数作为参数的单参数函数

    // 正常版本的readFile (多参数版本)
    // fs.readFile(fileName, callback);
    // let Thunk = function (fileName) {
    //     return function (fileName) {
    //         return fs.readFile(fileName,fileName)
    //     }
    // };
    // let readFileThunk = Thunk(fileName);
    // readFileThunk(callback);

    // fs模块的readFile方法是一个多参数函数,两个参数分别为文件名和回调函数
    // 经过转换器处理,它编程一个单参数函数,只接受回调函数作为参数
    // 这个单参数版本就是Thunk函数

    //任何函数,只要参数有回调函数,就能写成Thunk函数的形式
    // let thunk = function (fn) {
    //     return function () {
    //         let args = Array.prototype.slice.call(arguments);
    //         return function (callback) {
    //             args.push(callback);
    //             return fn.apply(this,args)
    //         }
    //     }
    // }

    //ES6 版本
    // const Thunk = function (fn) {
    //     return function (...args) {
    //         return function (callback) {
    //             return fn.call(this,...args,callback)
    //         }
    //     }
    // }

    // 使用上面的转换器,生成fs.readFile 的Thunk函数
    // var readFileThunk = Thunk(fs.readFile);
    // readFileThunk(fileA)(callback)
    //
    // function f(a, cb) {
    //     cb(a);
    // }
    // const ft = Thunk(f);
    //
    // ft(1)(console.log) // 1

    // npm install thunkify
    //Thunkify 模块
    // let thunkify = require('thunkify');
    // let fs = require('fs');
    // let read = thunkify(fs.readFile);
    // read('package.json')(function (err, str) {
    // ...
    // })

    // Thunkify 源码
    // function thunkify(fn) {
    //     return function () {
    //         var args = new Array(arguments.length);
    //         var ctx = this;
    //         for (var i = 0; i < args.length; ++i) {
    //             args[i] = arguments[i];
    //         }
    //         return function (done) {
    //             var called;
    //             args.push(function () {
    //                 if (called) return;
    //                 called = true;
    //                 done.apply(null, arguments)
    //             })
    //             try {
    //                 fn.apply(ctx, args)
    //             } catch (err) {
    //                 done(err)
    //             }
    //         }
    //     }
    // }

    // 源码中多了一个检查机制,变量called确保回调函数只运行一次
    // function f(a,b,callback){
    //     let sum = a+b;
    //     callback(sum);
    //     callback(sum);
    // }
    // let ft = thunkify(f);
    // let print = console.log.bind(console);
    // ft(1,2)(print);

    // Generator 函数的流程管理
    // Thunk函数用于Generator函数自动流程管理

    // function* gen() {
    //     console.log(1);
    //     yield 11;
    // }
    // let g = gen();
    // let res = g.next();
    // while (!res.done){
    //     console.log(res.value);
    //     res = g.next();
    // }
    // 以上代码,可以自动执行完所有步骤,但并不适合异步操作
    //
    // let fs = require('fs');
    // let thunkify = require('thunkify');
    // let readFileThunk = thunkify(fs.readFile);
    // let gen = function *() {
    //     let r1 = yield readFileThunk('/etc/fstab');
    //     console.log(r1.toString());
    //     let r2 = yield readFileThunk('/etc/shells');
    //     console.log(r2.toString());
    // };
    // 上面代码中,yield命令用于将程序的执行权移出Generator函数,
    // 需要有一种方式能够将执行权交还给Generator函数

    // let g = gen();
    // let r1 = gen.next();
    // r1.value(function (err,data) {
    //     if(err){throw err}
    //     let r2 = g.next(data);
    //     r2.value(function (err, data) {
    //         if(err){throw err}
    //         g.next(data)
    //     })
    // })

    // Thunk函数的自动流程管理
    // Thunk函数的作用在于可以自动执行Generator函数

    // function run(fn) {
    //     var gen = fn();
    //     function next(err, data) {
    //         var result = gen.next(data);
    //
    //         if(result.done){return}
    //         result.value(next);
    //     }
    //     next();
    // }
    // function* g() {
    //     var f1 = yield readFileThunk('fileA');
    //     var f2 = yield readFileThunk('fileB');
    //     // ...
    //     var fn = yield readFileThunk('fileN');
    // }
    // run(g)
    // run 函数, 是一个Generator函数的自动执行器,
    // 内部的next函数就是Thunk 的回调函数Thunk 的回调函数
    // next函数先将指针移到Generator函数的下一步(gen.next方法)
    // 然后判断Generator函数是否结束,(result.done属性)
    // 如果没有结束,就将next函数再传入Thunk函数(result.value属性)
    // 否则直接退出

    // 这里的前提是每一个异步操作都要是Thunk函数
    // 即,跟在yield命令后面的必须是Thunk函数
    // let g = function *() {
    //     let f1 = yield readFileThunk('fileA');
    //     let f2 = yield readFileThunk('fileA');
    //     let f3 = yield readFileThunk('fileA');
    //     //...
    //     let fn = yield readFileThunk('fileA');
    // }
    // run(g)

    // 5.co 模块
    // 基本用法
    // 用于Generator函数的自动执行
    // let gen = function *() {
    //     let f1 = yield readFile('/etc/fstab');
    //     let f2 = yield readFile('/etc/shells');
    //     console.log(f1)
    //     console.log(f2)
    // };

    // co 模块,可以不用编写Generator函数的执行器
    // let co = require('co');
    // co(gen)
    // Generator 函数只要传入co函数,就会自动执行
    // co函数返回一个Promise对象,可以用then方法添加回调函数
    // co(gen).then(function () {
    //     console.log(arguments)
    // })

    // co 模块的原理
    // Generator函数就是一个异步操作的容器,
    // 它的自动执行需要一种机制
    // 当异步有了结果,能够自动交回执行权
    // 两个方法,
    // (1) 回调函数。将异步操作包装成 Thunk 函数,在回调函数里面交回执行权
    // (2) Promise对象,将异步操作包装成 Promise 对象,用then方法交回执行权
    // co 模块其实就是将两种自动执行器( Thunk函数和Promise对象 ),包装成一个模块
    // 使用co的 前提条件是,Generator函数的yield命令后面,只能是Thunk 函数,或者Promise对象
    // 如果数组或对象的成员,全部都是Promise对象,也可以使用co

    // ------------
    // 基于 Promise对象的自动执行
    // let fs = require('fs');
    // let readFile = function (fileName) {
    //     return new Promise(function (resolve, reject) {
    //         fs.readFile(fileName,function (err, data) {
    //             if(err){return}
    //             resolve(data)
    //         })
    //     })
    // };
    // let gen = function *() {
    //     let f1 = yield readFile('/etc/fstab');
    //     let f2 = yield  readFile('/etc/shells');
    //     console.log(f1)
    //     console.log(f2)
    // };
    // let g = gen();
    // g.next().value.then(function (data) {
    //     g.next(data).then(function (data) {
    //         g.next(data)
    //     })
    // })

    // 自动执行器
    // 只要 Generator 函数还没执行到最后一步，
    // next函数就调用自身，以此实现自动执行。
    // function run(gen) {
    //     let g = gen();
    //     function next(data) {
    //         let result = g.next(data);
    //         if(result.done){return result.value;}
    //         result.value.then(function (data) {
    //             next(data)
    //         })
    //     }
    //     next();
    // }

    // co 模块源码
    // 1. co 函数接受Generator函数作为参数,返回一个Promise对象

    // 2. 在放回Promise对象里面 ,co先检查参数gen是否为Generator函数
    //    如果是,就执行该函数,得到一个内部指针对象,如果不是就返回,
    //    并将Promise对象的状态改为resolved

    // 3. 接着co将Generator函数的内部指针对象的next方法,
    //    包装成onFulfilled 函数,这主要是为了能够捕捉抛出的错误

    // function co(gen) {
    //     var ctx = this;
    //     return new Promise(function (resolve, reject) {
    //         if(typeof gen === 'function'){ gen = gen.call(ctx)}
    //         if(!gen || typeof gen.next !== 'function'){
    //             return resolve(gen)
    //         }
    //         onFulfilled();
    //         function onFulfilled(res) {
    //             let ret ;
    //             try {
    //                 ret = gen.next(res)
    //             }catch (err){
    //                 next(ret)
    //             }
    //             next(ret)
    //         }
    //         function onRejected(err) {
    //             var ret;
    //             try {
    //                 ret = gen.throw(err);
    //             } catch (e) {
    //                 return reject(e);
    //             }
    //             next(ret);
    //         }
    //         // next 函数
    //         function next(ret) {
    //             if(ret.done){return resovle(ret.value)};
    //             let value = toPromise.call(ctx,ret.value);
    //             if(value && isPromise(value)){
    //                 return value.then(onFulfilled,onRejected);
    //             }
    //             return onRejected(
    //                 new TypeError(
    //                     'You may only yield a function, promise, generator, array, or object, '
    //                     + 'but the following object was passed: "'
    //                     + String(ret.value)
    //                     + '"'
    //                 )
    //             )
    //         }
    //     })
    // }

    // 上面代码中,next函数的内部代码,一共有四行命令
    // 第一行,检查当前是否为Generator函数的最后一步,如果是,返回
    // 第二行,确保每一步的返回值, 是Promise对象
    // 第三行,使用then 方法,为返回值加上回调函数,然后通过onFulfilled函数在此调用next函数
    // 第四行,在参数不符合要求的情况下,(参数非Thunk函数,和Promise对象),
    // 将Promise对象状态改为rejected,从而终止执行

    // 处理并发的异步操作
    // co支持并发的异步操作,即允许某些操作同时进行,
    // 等到它们全部完成,再进行下一步
    // 要把并发的操作都放在数组或者对象里面,跟在yield语句后面

    // 数组写法
    // co(function *() {
    //     let res = yield [
    //         Promise.resolve(1),
    //         Promise.resolve(2)
    //     ];
    //     console.log(res)
    // }).catch(onerror)
    //
    // // 对象写法
    // co(function *() {
    //     let res = yield {
    //         1:Promise.resolve(1),
    //         2:Promise.resolve(2)
    //     }
    //     console.log(res)
    // }).catch(onerror)

    // co(function *() {
    //     let values = [n1,n2,n3];
    //     yield values.map(somethingAsync)
    // })
    // function* somethingAsync(x) {
    //     // some async
    //     return y;
    // }
    // // 允许并发三个somethingAsync异步操作,等到全部完成后进行下一步

    // 实例: 处理Stream
    // node 提供Stream模式读写数据,特点是一次只处理数据的一部分,
    // 数据分成一块块依次处理,如'数据流',
    // Stream模式使用EventEmitter API 会释放三个事件

    // - data 事件 : 下一块数据块已经准备好了
    // - end 事件: 整个'数据流'处理完了
    // - error 事件 : 发生错误

    // 使用 Promise.race() 函数
    // 可以判断这三个事件之中,哪一个最先发生
    // 只有当data时间最先发生时候,才进入下一个数据块的处理
    // while循环,完成所有数据的读取

    // const co = require('co');
    // const fs = require('fs')
    //
    // const stream = fs.createReadStream('./les_miserables.txt');
    // let valjeanCount = 0;
    // co(function* () {
    //     while (true) {
    //         const res = yield Promise.race([
    //             new Promise(resolve => stream.once('data', resolve)),
    //             new Promise(resolve => stream.once('end', resolve)),
    //             new Promise((resolve, reject) => stream.once('error', resolve))
    //         ]);
    //         if(!res){
    //             break;
    //         }
    //         stream.removeAllListeners('data');
    //         stream.removeAllListeners('end');
    //         stream.removeAllListeners('error');
    //         valjeanCount += (res.toString().match(/valjean/ig )||[]).length
    //     }
    //     console.log('count',valjeanCount)
    // })
    //---------------------------------------------------------------

    //---------------------------------------------------------------
    /**
     *
     * async函数
     *
     * */
    // 1.含义
    // async => Generator函数的语法糖
    //之前读取两个文件的写法
    // const fs = require('fs');
    //
    // const readFile = function (fileName) {
    //     return new Promise(function (resolve, reject) {
    //         fs.readFile(fileName, function(error, data) {
    //             if (error) return reject(error);
    //             resolve(data);
    //         });
    //     });
    // };
    //
    // const gen = function* () {
    //     const f1 = yield readFile('/etc/fstab');
    //     const f2 = yield readFile('/etc/shells');
    //     console.log(f1.toString());
    //     console.log(f2.toString());
    // };

    // 写成async函数
    // const asyncReadFile = async function () {
    //     const f1 = await readFile('/etc/fstab');
    //     const f2 = await readFile('/etc/fstab');
    //     console.log(f1.toString())
    //     console.log(f2.toString())
    // }
    // async 函数就是将Generator函数的星号 * 替换成async
    // 将yield替换成 await
    // async 函数相较Generator函数改进,体现在以下四点
    // (1) 内置执行器
    // Generator函数的执行必须靠执行器,所以才会有co模块,
    // 而async函数自带执行器, async函数的执行与普通函数一样
    // asyncReadFile();
    // 调用asyncReadFile 函数,然后它就自动执行,输出最后结果。
    // 不需要调用next方法

    // (2) 更好的语义
    // async 和 await 比起星号和yield ,语义更加清楚,
    // async表示函数有异步操作,await表示紧跟在后面的表达式需要等待结果

    // (3) 更广的适用性
    // co 模块约定,yield命令后面只能是 Thunk 函数,或Promise对象,
    // 而async函数的await命令后面,可以是Promise对象和原始类型的值
    // ( 数值,字符串和布尔值,但这时候等同于同步操作 )

    // (4) async 函数的返回值是Promise对象,
    // 这比Generator函数的返回值是Iterator对象方便多了
    // 可以用then方法执行下一步操作
    // async函数完全可以看成多个异步操作,包装成一个Promise对象
    // 而 await 命令就是内部then命令的语法糖

    //-----------------------
    // 2. 基本用法
    // async函数返回一个Promise对象,可以使用then方法,添加回调函数
    // 当函数执行时候,一旦遇到await就会先返回,等到异步操作完成
    // 再接着执行函数体内后面的语句
    // eg:
    // async function getStockPriceByName(name) {
    //     const symbol = await getStockPriceByName(name);
    //     const stockPrice = await getStockPrice(symbol);
    //     return stockPrice;
    // }
    // getStockPriceByName('goog').then(result => {
    //     console.log(result)
    // })

    // 指定多少毫秒后输出一个值
    // function asyncTimeout(ms) {
    //     return new Promise(resolve=>{
    //         setTimeout(resolve,ms)
    //     })
    // }
    // async function asyncPrint(value, ms) {
    //     await asyncTimeout(ms);
    //     console.log(value)
    // }
    // asyncPrint('1231',3000)

    // 由于async函数返回的是Promise对象
    // 可以作为await命令的参数,上面的例子也可以写成下面的形式
    // async function timeoutAsync(ms) {
    //     await new Promise((resolve)=>{
    //         setTimeout(resolve,ms);
    //     })
    // }
    // async function asyncPrint(value, ms) {
    //     await timeoutAsync(ms);
    //     console.log(value)
    // }
    //
    // asyncPrint('hello world',1800)

    // // async 函数有多种使用形式
    // // (1)函数声明
    // async function foo() {
    //
    // }
    //
    // // 函数表达式
    // const foo = async function () {
    //
    // };
    // // 对象方法
    // let obj = {
    //     async foo() {
    //     }
    // };
    // obj.foo().then(
    //     //....
    // )
    // // Class 的方法
    // class Storage{
    //     constructor(){
    //         this.cachePromise = caches.open('avatars')
    //     }
    //     async getAvatar(name){
    //         const cache = await this.cachePromise;
    //         return cache.match(`/avatars/${name}.jpg`);
    //     }
    // }
    // const storage = new Storage();
    // storage.getAvatar('jake').then(
    //     //...
    // );
    //
    // // 箭头函数
    // const foo = async() => {}

    // 3.语法
    // async函数的语法规则简单,但难点是错误处理机制

    // 返回Promise对象
    // async 函数返回一个Primise对象
    // async 内部return语句返回的值,会成为then方法回调函数的参数
    // async function f() {
    //     return 'result ddd'
    // }
    // f().then(v => {
    //     console.log('result',v)
    // })

    // async函数内部抛出错误会导致返回的Promise对象变成reject状态
    // 抛出的错误对象会被catch方法回调函数接收到
    // async function f() {
    //     throw new Error('something wrong')
    // }
    // f().then(
    //     v=>{
    //         console.log(v)
    //     },
    //     err => {
    //         console.log(err)
    //         console.error(err)
    //     }
    // )

    // Promise 对象的状态变化
    // async 函数返回的Promise对象,
    // 必须等到内部所有await命令后面的Promise对象执行完
    // 才会发生状态改变,除非遇到return语句或者抛出错误
    // 也就是说,只有async函数内部的异步操作执行完
    // 才会执行then方法指定的回调函数
    // eg:
    // async function getTitle(url) {
    //     let response = await fetch(url);
    //     let html = await response.text();
    //     return html.match(/<title>([\s\S]+)<title>/i)[1];
    // }
    //
    // getTitle('http://tcjfdkjfkjd.io/dfdfr232').then(result => {
    //     console.log(result)
    // })
    // 代码getTitle 内部有三个操作:抓取网页,取出文本,匹配页面标题
    // 这三个操作结束,才会执行.then方法里面的内容

    // await 命令
    // 正常情况下,await 命令后面是一个Promise对象,
    // 如果不是,会被转成一个立即resole的Promise对象
    // async function f() {
    //     return await `123`
    // }
    // f().then(result =>{
    //     console.log(result)
    // })
    // 代码中,await命令的参数是字符串123
    // 它被转成Promise对象,并且立即resolve
    // await 命令后面的Promise对象如果变为reject状态
    // 则reject的参数会被catch方法的回调函数接收
    // async function f() {
    //     await Promise.reject('wrong')
    // }
    // f().then(result =>{console.log(result)})
    //     .catch(err =>{console.error(err)})
    // 注意,上面代码中,await 语句前面没有return
    // 但是reject方法的参数依然传入catch的回调中
    // 这里如果在await前面加上return ,效果一样
    // 只要await语句后面的Promise变成reject
    // 那么整个async函数都会中断执行
    // async function f() {
    //     await Promise.reject('出错');// 执行到这里终止
    //     await Promise.resolve('result');// 这里并不会执行
    // }
    //
    // f().then(result => {
    // }).catch(err => {
    //     console.log(err)
    // })

    // 有时候希望前一个异步操作失败但是也不中断后面的异步操作
    // 第一种办法,可以将第一个await 放在try...catch结构中,
    // 这样子不管这个异步操作是否成功,后面的await都会执行
    //
    // async function f() {
    //     try {
    //         await Promise.reject('err');
    //     } catch (e) {
    //         console.error('inside',e)
    //     }
    //     return await Promise.resolve('result111')
    // }
    //
    // f().then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log('outside',err)
    // })
    //
    // // 第二种方法, await 后面的Promise 对象再跟一个catch方法,
    // // 处理前面可能出现的错误
    //
    // async function foo() {
    //     await Promise.reject('err')
    //         .catch(err => {
    //             console.error('里面捕捉',err)
    //         }); //这里会比上一个方法更快执行
    //     return await Promise.resolve('hello world')
    // }
    //
    // foo().then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log('外面捕捉', err)
    // })

    // 错误处理
    // 如果await后面的异步操作出错,那么等同于async函数返回的Promise对象被reject
    // async function f() {
    //     await new Promise((resolve, reject) => {
    //         throw new Error('出错');
    //     })
    // }
    //
    // f()
    //     .then(result => {
    //         console.log(result)
    //     })
    //     .catch(err => {
    //         console.error(err)
    //     })
    // 代码中,async函数f执行后,await 后面的Promise对象会抛出一个错误对象
    // 导致 catch 方法的回调函数被调用,它的参数就是抛出的错误对象,
    // 防止出错的方法,是将其放在try...catch代码块中
    // async function f() {
    //     try {
    //         await new Promise((resolve, reject) => {
    //             throw new Error('catch me')
    //         })
    //     } catch (err) {
    //         console.error(err)
    //     }
    //     return await ('result')
    // }
    //
    // f().then(result => {
    //     console.log(result)
    // }).catch(err => {
    //     console.log(err)
    // })

    // 如果有多个await命令,可以统一放在try...catch结构中
    // async function main() {
    //     try {
    //         const val1 = await firstStep1();
    //         const val2 = await firstStep2(val1);
    //         const val3 = await firstStep3(val1,val2);
    //     }catch (err){
    //         console.error(err)
    //     }
    // }
    // main().then(result =>{
    //     console.log(result)
    // }).catch(err=>{
    //     console.error(err)
    // })

    // 使用try..catch 结构,实现多次重复尝试
    // const superagent = require('superagent');
    // const NUM_RETRIES = 3;
    // async function test() {
    //     let i ;
    //     for(i = 0; i<NUM_RETRIES; i++){
    //         try {
    //             await superagent.get('http://google.com');
    //             break;
    //         }catch (err){
    //             console.error(err)
    //         }
    //     }
    //     console.log(i)
    // }
    //
    // test();
    // 代码中await操作成功,就会使用break语句退出循环
    // 如果失败会被catch语句捕捉,然后进入下次循环

    // 使用注意点:
    // 第一点,await命令后面的Promise对象,运行结果可能是rejected
    // 所以最好把await命令放在try...catch代码块中
    // async function foo() {
    //     try {
    //         await somePromise();
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    // 另一种写法
    // async function foo() {
    //     await somePromise()
    //         .catch(err => {
    //             console.error(err)
    //         })
    // }

    // 第二点,多个await命令后面的异步操作,如果不存在继发关系,最好是让它们同时触发
    //
    // let foo = await getFoo();
    // let bar = await getBar();
    // 代码中,getFoo和getBar是两个独立的异步操作,互不依赖
    // 被写成继发关系.这样子是比较耗时间,因为只有getFoo执行完,
    // 才会执行getBar,可以让他们同时触发
    // 写法一:
    // let [foo, bar] = await Promise.all([getFoo(), getBar()]);

    // 写法二:
    // let fooPromise = getFoo();
    // let barPromise = getBar();
    // let foo = await fooPromise;
    // let bar = await barPromise;
    // getFoo 和getBar 都是同时触发,缩短程序执行时间

    // 第三点, await命令智能用在async函数之中,如果用在普通函数,会报错

    // async function dbfoo(db) {
    //     let docs= [{},{},{}];
    //     // 报错
    //     docs.forEach(doc=>{
    //         await db.post(doc);// 报错
    //     })
    // }
    // 代码会报错,因为await用在普通函数之中,
    // 但是如果将forEach方法的参数改成async函数,也会有问题
    // function dbFun(db) {
    //     let docs = [{},{},{}];
    //     docs.forEach(async function (doc) {
    //         await db.post(doc)
    //     })
    // }
    // 代码可能会不正常工作,原因是这是哪个db.post 操作将是并发执行
    // 也就是同时执行,不会继发执行,正确应该是使用for循环
    // async function dbFuc(db) {
    //     let docs = [{}, {}, {}];
    //     for(let doc of docs){
    //         await db.post(doc);
    //     }
    // }

    // // 如果确实希望多个请求并发执行,可以使用Promise.all方法,
    // // 当三个请求都会resolved时候,以下两种写法效果相同
    // async function dbFunc(db) {
    //     let docs = [{}, {}, {}];
    //     let promises = docs.map((doc) => db.post(doc));
    //
    //     let results = await Promise.all(promises);
    //     return results
    // }
    // // 第二种写法
    // async function dbFunc(db) {
    //     let docs = [{},{},{}];
    //     let promises = docs.map((doc)=>{db.post(doc)});
    //     let results = [];
    //     for(let promise of promises){
    //         results.push(promise);
    //     }
    //     return results
    // }

    // 目前 @std/esm 模块加载器支持顶层await,
    // 即 await命令可以不放在async函数里面,直接使用
    // async 函数写法
    // const start = async () => {
    //     const res = await fetch('google.com');
    //     return res.next();
    // }
    // start().then(res => {
    //     console.log(res)
    // }).catch(err => {
    //     console.log(err)
    // })

    // 顶层 await 的写法
    // 必须使用@std/esm加载器,才会生效
    // const res = await fetch('google.com');
    // console.log( await res.text());

    // -------
    // 4.async函数的实现原理
    // async 函数的实现原理,就是将Generator函数和自动执行器,包装在一个函数里
    // async function fn(args) {
    //     // ...
    // }
    // // 等同于
    // function fn(args) {
    //     return spawn(function *() {
    //         //...
    //     })
    // }

    // 所有的async函数都可以协程上面的第二种形式,
    // 其中spawn函数就是自动执行器
    // spawn函数的实现
    // function spawn(genF) {
    //     return new Promise((resolve,reject)=>{
    //         const gen = genF();
    //         function step(nextF) {
    //             let next ;
    //             try{
    //                 next = nextF();
    //             }catch(err){
    //                 return reject(err)
    //             }
    //             if(next.done){
    //                 return resolve(next.value)
    //             }
    //             Promise.resolve(next.value).then(
    //                 result =>{
    //                     step(function () {
    //                         return gen.next(result);
    //                     })
    //                 },
    //                 err =>{
    //                     step(function () {
    //                         return gen.throw(err);
    //                     })
    //                 }
    //             )
    //         }
    //         step(function () {
    //             return gen.next(undefined);
    //         })
    //     })
    // }

    //---------
    // 5. 与其他的异步处理方法的比较
    // async 函数与Promise、Generator函数的比较
    // 假设某个DOM袁术上面部署一系列动画
    // 前一个动画结束,才能开始下一个
    // 如果当中有一个动画出错,就不再往下执行,返回上一个成功执行的动画的返回值

    // Promise写法
    // function chainAnimationsPromise(elem, animations) {
    //     // 变量ret用来保存上一个动画的返回值
    //     let ret = null;
    //     // 新建一个空的Promise
    //     let p = Promise.resolve();
    //     for (let anim of animations) {
    //         p = p.then(val => {
    //             ret = val;
    //             return anim(elem);
    //         })
    //     }
    //     // 返回一个部署了错误机制的Promise
    //     return p.catch(err => {
    //             // 忽略错误继续执行
    //             console.error(err)
    //         }).then(function () {
    //         return ret
    //     })
    // }
    // promise 体现为,操作本身的语义不能被容易的看出来

    // Generator函数写法
    // function chainAnimationsGenerator(elem, animations) {
    //     return spawn(function *() {
    //         let ret = null;
    //         try {
    //             for(let anim of animations){
    //                 ret = yield anim(elem)
    //             }
    //         }catch(e){
    //             // 忽略错误继续执行
    //             console.error(e)
    //         }
    //         return ret
    //     })
    // }
    // 代码中使用Generator函数遍历每个动画,语义清晰
    // 用户定义的操作全部都出现在spawn函数的内部,
    // 这样写问题在,必须要有一个任务运行器,自动执行Generator函数
    // spawn函数就是自动执行器,它返回一个Promise对象,
    // 而且必须保证yield 语句后面的表达式,必须返回一个Promise

    // async函数写法
    // async function chainAnimationsAsync(elem, animations) {
    //     let ret = null;
    //     try {
    //         for (let anim of animations) {
    //             ret = await anim(elem)
    //         }
    //     } catch (err) {
    //         // 忽略错误,继续执行
    //         console.error(err)
    //     }
    //     return ret;
    // }

    // Async函数是实现最简洁,符合语义,将Generator写法中的自动执行器,
    // 改在语言层面提供,不暴露给用户,代码量少,
    // 如果使用Generator写法,自动执行器需要用户自己提供

    // -------------------
    // 6.实例: 按顺序完成异步操作
    // 一组异步操作,按顺序完成
    // 比如依次远程读取一组URL,然后案遭读取的顺序输出结果
    // Promise的写法
    // function logInOrder(urls) {
    //     // 远程读取所有URL
    //     const textPromises = urls.map(url => {
    //         return fetch(url).then(res => res.text());
    //     });
    //     textPromises.reduce((chain, textPromise) => {
    //         return chain
    //             .then(() => textPromise)
    //             .then(text => console.log(text));
    //     }, Promise.resolve());
    // }
    // 代码使用fetch 方法,同时远程读取一组URL,
    // 每个fetch操作都放回一个Promise对象,放入textPromises数组
    // 然后,reduce方法一次处理每个Promise对象,
    // 然后使用then,将所有Promise对象连起来,可以依次输出结果

    // async函数实现
    // async function logInOrder(urls) {
    //     for (const url of urls){
    //         const res = await fetch(url);
    //         console.log(await res.text());
    //     }
    // }
    // 代码简化,但所有的远程操作都是继发,只有前一个URL返回结果,
    // 才会去读取下一个URL,效率差,浪费时间,做一个并发发出远程请求
    // async function logInOrder(urls) {
    //     // 并发读取远程URL
    //     const textPromises= urls.map(async url =>{
    //         const res = await fetch(url);
    //         return res.text();
    //     });
    //     // 按次序输出
    //     for(const textPromise of textPromises){
    //         console.log(await textPromise)
    //     }
    // }
    // 代码中,虽然map方法的参数的是async函数,但它是并发执行的
    // 因为只有async函数内部是继发执行,外部不受影响,
    // 后面的 for...of 循环内部使用了await,因此事项了按顺序输出

    // 7. 异步遍历器
    // Iterator 接口是一种数据遍历的协议,只要调用遍历器对象的next方法
    // 就会得到一个对象,表示当前遍历指针所在的那个位置的信息。
    // next方法返回的对象的结构是{value,done},
    // 其中value表示当前数据的值,done 是一个布尔值,表示遍历是否结束

    // 这里隐含一个规定,next 方法必须是同步,只要调用,就必须立刻返回值
    // 一旦执行next方法,就必须同步地得到value和done这两个属性
    // 如果遍历指针正好指向同步操作,就没问题
    // 但对于异步操作,就不合适。
    // 解决方法: Generator函数里面的异步操作,放回一个Thunk函数或者Promise对象
    // 即value属性是一个Thunk函数或者Promise对象,等待以后返回真正的值
    // 而done属性则还是同步产生的
    // 有一个提案，为异步操作提供原生的遍历器接口
    // 即value和done这两个属性都是异步产生，这称为”异步遍历器“（Async Iterator）。

    // 异步遍历的接口
    // 异步遍历器的最大语法特点就是调用遍历器的next方法,返回的是一个Promise对象
    // asyncIterator
    //     .next()
    //     .then(
    //         ({value,done})=>{}
    //     )
    // 代码中,asyncIterator 是一个异步遍历器,
    // 调用next方法以后,返回一个Promise对象
    // 因此可以使用then方法指定,这个Promise对象的状态边位resolve以后的回调函数
    // 回调函数的参数,则是一个具有value和done 两个属性的对象
    // 这个跟同步遍历器是一样的
    // 一个对象的同步遍历器的接口,部署在Symbol.iterator属性上面
    // 同样的,对象的异步遍历器的接口,部署在Symbol.asyncIterator 属性上面
    // 不管是什么样的对象,只要它的Symbol.asyncIterator属性有值
    // 就表示应该对其进行异步遍历
    // 异步遍历器例子
    // const asyncIterable = createAsyncIterable(['a', 'b']);
    // const asyncIterator = asyncIterable[Symbol.asyncIterator]();
    // asyncIterator.next()
    //     .then(iterResult1 => {
    //         console.log(iterResult1); // { value: 'a', done: false }
    //         return asyncIterator.next();
    //     })
    //     .then(iterResult2 =>{
    //         console.log(iterResult2);
    //         return asyncIterator.next();// { value: 'b', done: false }
    //     })
    //     .then(iterResult3 => {
    //         console.log(iterResult3); // { value: undefined, done: true }
    //     });
    // 代码中,异步遍历器其实返回了两次值,
    // 第一次调用的时候,返回一个Promise对象,
    // 等到Promise对象resolve了,再返回一个表示当前数据成员信息的对象
    // 这就是说,异步遍历器与同步遍历器的最终行为是一致的,
    // 只是会先返回Promise对象,作为中介

    // 由于异步遍历器的next方法,返回的是一个Promise对象,
    // 因此把它放在await命令后面
    // async function f() {
    //     const asyncIterable = createAsyncIterable(['a','b']);
    //     const asyncIterator = asyncIterable[Symbol.asyncIterator]();
    //
    //     console.log(await asyncIterator.next());
    //     // { value: 'a', done: false }
    //     console.log(await asyncIterator.next());
    //     // { value: 'b', done: false }
    //     console.log(await asyncIterator.next());
    //     // { value: undefined, done: true }
    // }
    // 代码中,next方法用await处理以后,就不必使用then方法了
    // 注意,异步遍历器的next方法是可以连续调用的,
    // 不必等到上一步产生的Promise对象 resolve 以后再调用,
    // 这种情况下,next 方法会累积起来,自动按照每一步的顺序执行下去
    // 下面例子,把所有的next方法都放在Promise.all方法里面
    // const asyncGenObj = createAsyncIrerable(['a','b']);
    // const [{value:v1},{value:v2}] = await Promise.all([
    //     asyncGenObj.next(),asyncGenObj.next()
    // ]);
    // console.log(v1,v2);

    // 另一种用法是一次性调用所有的next方法,然后await最后一步操作
    // const writer = openFile('someFile.txt');
    // writer.next ('hello');
    // writer.next ('world');
    // await writer.return();

    // ------
    // for await...of
    // for ... of 用于遍历同步的Iterator接口,
    // 新引入的for await...of 循环,用于遍历异步的Iterator接口
    // async function f() {
    //     for await (const x of createAsyncIterable(['a','b'])){
    //         console.log(x)
    //     }
    // }

    // createAsyncIterable()返回一个异步遍历器,
    // for ... of 循环自动调用这个遍历器的next方法
    // 会得到一个Promise对象,await 用来处理这个Promise对象,
    // 一旦resolve ,就把得到的值(x) 传入for...of 的循环体
    // for await...of 循环的用途,是部署asyncIterable操作的异步接口
    // 可以直接放入这个循环
    // let body = '';
    // async function f() {
    //     for await (const data of req){
    //         body += data;
    //     }
    //     const parsed = JSON.parse(body);
    //     console.log('parsed',parsed)
    // }
    // 代码中,req是一个asyncIterable 对象,用来异步读取数据
    // for await...of 循环后,代码就变简洁

    // 如果next方法返回的Promise对象被reject,for await...of 就会报错,
    // 要用 try... catch 捕捉
    // async function foo() {
    //     try{
    //         for await(const x of createRejectingIterable()){
    //             console.log(x)
    //         }
    //     }catch (e){
    //         console.error(e)
    //     }
    // }
    //注意,for await...of 循环也可以用于同步遍历器
    // (async function () {
    //     for await (const x of ['a','b']){
    //         console.log(x)
    //     }
    // })()

    // 异步Generator函数
    // 就像Generator函数返回一个同步遍历器对象一样,
    // 异步Generator函数的作用,是返回一个异步遍历器对象
    // 在语法上,异步Generator函数就是async函数与Generator函数的结合
    // async function* gen() {
    //     yield 'hello'
    // }
    // const genObj = gen();
    // genObj.next().then(x =>{
    //     console.log(x)
    // })
    // 代码中,gen 是一个异步Generator函数,执行后返回一个异步Iterator对象
    // 对该对象调用next方法,返回一个Promise对象
    // 异步遍历器的设计目的之一,就是Generator 函数处理同步操作和异步操作的时候,
    // 可以使用同一套接口

    // // 同步Generator函数
    // function* map(iterable, func) {
    //     const iter = iterable[Symbol.iterator]();
    //     while (true){
    //         const {value,done } = iter.next();
    //         if (done){break;}
    //         yield func(value)
    //     }
    // }
    // // 异步Generator函数
    // async function* map(iterable, func) {
    //     const iter = iterable[Symbol.iterator]();
    //     while(true){
    //         const {value,done} = await iter.next();
    //         if(done){break}
    //         yield func(value)
    //     }
    // }
    // 代码中,可以看到有了异步遍历器以后,
    // 同步Generator函数和异步Generator函数的写法基本一致

    // 另一个异步Generator函数的例子
    // async function* readLines(path) {
    //     let file = await fileOpen(path);
    //     try {
    //         while(!file.EOF){
    //             yield await file.readLine();
    //         }
    //     }catch (e){}finally {
    //         await  file.close();
    //     }
    // }

    // 异步操作前面使用await关键字标明,即await后面的操作.
    // 应该返回Promise对象,
    // 凡是使用yield关键字的地方,就是next方法的停下来的地方
    // 它后面的表达式的值(即 await file.readLine()的值)
    // 会作为next()返回对象的value属性,这一点和同步Generator函数相同

    // 异步Generator函数内部,能够同时使用await和yield命令,
    // await 命令用于将外部操作产生的值输入函数内部,
    // yield命令用于将函数内部的值输出
    // 上面代码定义的异步Generator函数的用法如下
    // (async function () {
    //     for await (const line of readLines(filePath)){
    //         console.log(line)
    //     }
    // })()

    // 异步 Generator函数可以与for await...of 循环结合起来使用
    // async function* prefixLines(asyncIterable) {
    //     for await (const line of asyncIterable){
    //         yield '>' +line
    //     }
    // }

    // 异步 Generator函数的返回值是一个异步Irerator ,
    // 即每次调用他的next 方法,会返回一个Promise对象,
    // 也就是说,跟在yield命令后面的,应该是一个Promise对象
    // async function* asynGenerator() {
    //     console.log('start');
    //     const result = await doSomethingAsync();// (A)
    //     yield 'result ' +result ;// (B)
    //     console.log('done')
    // }
    // const ag = asynGenerator()
    // ag.next().then(({value,done})=>{
    //     console.log(value,done)
    // })
    // 代码中,ag 是 asyncGenerator 函数返回的异步Iterator 对象,
    // 调用ag.next() 以后,asyncGenerator 函数内部执行顺序如下:
    // 1. 打印出 start
    // 2. await 命令返回一个promise对象,但是程序不会停在这里,
    //    继续往下执行。
    // 3. 程序在B处 暂停执行,yeild 命令立刻返回一个Promise对象,
    //    该对象就是ag.next() 的返回值
    // 4. A处await 命令后面的那个Promise对象resolved,产生的值放入result变量
    // 5. B处的Promise对象resolved.then方法指定的回调函数开始执行.
    //    该函数的参数是一个对象,value的值是表达式 'result '+result 的值
    //    done属性的值是false

    // A 和 B 两行的作用类似于下面代码
    // return new Promise((resolve,reject)=>{
    //     doSomethingAsync().then(result =>{
    //         resolve({value:'result :'+result,done:false})
    //     })
    // })

    // 如果异步Generator函数抛出错误,会被Promise对象reject,
    // 然后抛出的错误被catch 方法捕获
    // async function* asyncGenerator() {
    //     throw new Error('something wrong')
    // }
    // asyncGenerator().next().catch(err=>console.log(err))

    // 注意,普通的async函数返回的是一个Promise对象,
    // 而异步Generator函数返回的是一个异步Iterator对象,
    // 可以这样理解,async函数和异步Generator函数,是封装异步操作的两种方法
    // 都用来达到同个目的
    // 区别: 前者自带执行器,后者通过for await ... of 执行,或者自己编写执行器
    // 异步Generator函数执行器
    // async function takeAsync(asyncIterable, count = infinity) {
    //     const result = [];
    //     const iterator = asyncIterable[Symbol.asyncIterator]();
    //     while(result.length < count){
    //         const {value,done} = await iterator.next();
    //         if (done){
    //             break;
    //         }
    //         result.push(value);
    //     }
    //     return result;
    // }
    // 代码中,异步 Generator函数产生的异步遍历器,会通过while循环自动执行
    // 每当 await iterator.next() 完成.就会进入下一轮循环,一旦done属性为true
    // 就会跳出循环,异步遍历器结束

    // 另一个自动执行器的实例
    // async function f() {
    //     async function* gen() {
    //         yield 'a';
    //         yield 'b';
    //         yield 'c';
    //     }
    //     return await takeAsync(gen())
    // }
    // f().then(function (result) {
    //     console.log(result)
    // })

    // 异步Generator函数出现后,JS 就有四种函数形式:
    // 普通函数,async函数,Generator函数和异步Generator函数
    // 注意区分每种函数的不同之处,基本上,如果是按顺序执行的异步操作
    // (比如读取文件,然后写入新内容,存入硬盘),可以使用async函数
    // 如果是一系列产生相同数据结构的异步操作,(比如一行一行读取文件)
    // 可以使用异步Generator函数
    // 异步Generator函数可以通过next方法的参数,接收外部传入的数据
    // const writer = openFile('somefile.txt');
    // writer.next('hello');
    // writer.next('world');
    // await writer.return();
    // 代码中,openFile 是一个异步Generator函数,next方法的参数,
    // 向该函数内部的操作传入数据,每次next方法都是同步执行,
    // 最后await 命令用于等待整个写入操作结束
    // 最后,同步的数据结构,也可以使用异步Generator函数
    // async function* createAsyncIterable(asyncIterable) {
    //     for(const elem of syncIterable){
    //         yield elem;
    //     }
    // }
    // 代码中,由于没有异步操作,所以没有使用await关键字
    // ----------

    // yield* 语句
    // yield*语句也可以跟一个异步遍历器
    // async function* gen() {
    //     yield 'a';
    //     yield 'b';
    //     return 2;
    // }
    // async function* gen2() {
    //     // result 最终会等于2
    //     const result = yield *gen();
    // }
    // // 代码中,gen2函数里面的result变量,最后值是2
    // // 与同步Generator函数一样,for await...of 循环会展开yield*
    // (async function () {
    //     for await (const x of gen2()){
    //         console.log(x)
    //     }
    // })()
    // a
    // b

    // async 结束
    //----------------------------------------------------------------

    /**
     *
     * Class基本语法
     *
     * */

    // 1. 简介
    // 传统 ,生成实例对象的传统方法是通过构造函数
    // function Point(x, y) {
    //     this.x = x ;
    //     this.y = y;
    // }
    // Point.prototype.toString = function () {
    //     return '('+this.x +','+this.y + ')';
    // };
    // let p = new Point(1,3);
    // console.log(p);
    // console.log(p.toString())

    // es6 引入 Class (类) 概念,作为对象的模版,通过 class 关键字,可以定义类
    // es6 改写上面代码
    // class Point {
    //     constructor(x,y){
    //         this.x = x;
    //         this.y = y;
    //     }
    //     toString(){
    //         return '('+this.x +','+this.y + ')';
    //     }
    // }
    // let result = new Point(1,2);
    // console.log(result,result.toString())

    // 代码中定义了一个'类',可以看到里面有一个constructor 方法,
    // 这就是构造方法,而this 关键字则代表实例对象
    // es5 的构造函数Point ,对应ES6的point 类的构造方法

    // Point类除了构造方法,还定义了一个toString方法.
    // 注意,定义'类'的方法的时候,前面不需要加上function关键字
    // 直接把函数定义放进去就可以,另外,方法之间不需要都好分隔,加了会报错

    // es6 的类,完全可以看作构造函数的另一种写法
    // class Point {
    //
    // }

    // console.log(typeof Point); // 'function'
    // console.log(Point === Point.prototype.constructor) // true
    // 代码表明,类的数据类型就是函数,类本身就指向构造函数
    // 使用的时候直接对类使用new命令,跟构造函数无异
    // class Bar {
    //     doStuff(){
    //         console.log('stuff');
    //     }
    // }
    // let b = new Bar();
    // b.doStuff();

    // 构造函数的prototype属性,在ES6 的类上面继续存在,
    // 事实上,类的所有方法都定义在类的prototype属性上
    // class Point{
    //     constructor(){}
    //     doSomething(){}
    //     doElse(){}
    // }
    // // 等同于
    // Point.prototype = {
    //     constructor(){},
    //     doSomething(){},
    //     doElse(){}
    // }

    // 在类的实例上面调用方法,其实就是调用原型上的方法
    // class B {}
    // let b = new B();
    // console.log(b.constructor === B.prototype.constructor); // true
    // B.doSomeThing = function (value) {
    //     console.log(value);
    // };
    // console.log(b.doSomeThing); // undefined
    // console.log(B.doSomeThing); // 方法
    // B.doSomeThing(1112)

    // class B {}
    // B.prototype.doSomeThing = function (value) {
    //     console.log(value);
    // };
    // let b = new B();
    // console.log(b.constructor === B.prototype.constructor); // true
    //
    // console.log(b.doSomeThing); // 方法
    // console.log(B.prototype.doSomeThing); // 方法
    // console.log(B.prototype.doSomeThing === b.doSomeThing); // true
    // B.prototype.doSomeThing(1112)

    // 由于类的方法都是定义在prototype对象上,所以类的新方法,可以添加在prototype上
    // Object.assign 方法可以很方便的一次向类添加多个方法

    // class Point {
    //     constructor(){
    //         this.a = 1;
    //     }
    // }
    // Object.assign(Point.prototype,{
    //     toString(){
    //         return this.a.toString() +'   a 字符串'
    //     }
    // });
    // let a = new Point();
    // console.log(a);
    // console.log(a.toString())

    // prototype 对象的constructor 属性,直接指向类本身,与es5行为一致
    // class Point {
    //     constructor(){}
    //     toString(){}
    // }
    // console.log('Point.prototype',Point.prototype);// {constructor: ƒ, toString: ƒ}
    // let keys = Object.keys(Point.prototype);
    // console.log('keys',keys);  // []
    // let propertyName = Object.getOwnPropertyNames(Point.prototype);
    // console.log('propertyName',propertyName) // ["constructor","toString"]
    //
    // 代码中,toString 方法是Point类内部定义的方法,是不可枚举的
    // 这一点与es5的行为不一致
    // let Point = function (x, y) {
    //     this.x = x ;
    //     this.y = y ;
    // };
    // Point.prototype.toString = function () {
    //     console.log(this)
    // };
    // let keys = Object.keys(Point.prototype);
    // console.log('keys',keys);//["toString"]  toString 可枚举
    // let propertyNames = Object.getOwnPropertyNames(Point.prototype);
    // console.log('propertyNames',propertyNames) //["constructor", "toString"]

    // 2. 严格模式
    // 类和模块内部,默认是严格模式,不需要使用 use strict 指定运行模式,
    // 只要代码写在类或者模块之中,就只有严格模式可用

    // 3. constructor方法
    // constructor 方法是类的默认方法,通过new命令生成对象实例时,自动调用该方法。
    // 一个类必须有constructor方法,如果没有显式定义,一个空的constructor方法会被默认添加
    // class Point {}
    // console.log(Point);
    // // 等同于
    // class Point{
    //     constructor(){}
    // }
    // constructor 方法默认返回实例对象(即this),完全可以指定返回另外一个对象
    // class Foo{
    //     constructor(){
    //         return Object.create(null)
    //     }
    //     getStr(){
    //         console.log(111)
    //     }
    // }
    // let result = new Foo();
    // console.log(result instanceof Foo);
    // console.log(result);
    // console.log(result.prototype.getStr); // 报错
    // result.prototype.getStr();// 报错
    // 代码中,constuctor函数返回一个全新对象,结果导致实例对象不是Foo类的实例

    // 类必须使用new调用,否则报错,这是它与普通构造函数的主要区别
    // 后者不用new  也可以执行
    // class Foo{
    //     constructor(){
    //         return this;
    //     }
    // }
    // Foo();// 报错,Class constructor Foo cannot be invoked without 'new'
    // TypeError: Class constructor Foo cannot be invoked without 'new'

    // 4.类的实例对象
    // 生成类的实例对象的写法,与ES5完全一样,也是使用new命令.
    // class Point{
    //     constructor(value){
    //         this.value = value;
    //     }
    // }
    // // let point = Point(1.1,1);// 报错
    // let point = new Point(1)
    // console.log(point)

    // 与ES5一样,实例的属性除非显示定义在其本身( 即定义在this对象上),
    // 否则都是定义在原型上
    // 定义类
    // class Point {
    //     constructor(x,y){
    //         this.x = x;
    //         this.y = y;
    //     }
    //     toString(){
    //         return this.x.toString()+this.y.toString();
    //     }
    // }
    // let point = new Point(1,5);
    // let str = point.toString();
    // console.log(str);
    // console.log(point);
    // let hasOwnProperty = point.hasOwnProperty('x');
    // console.log('x',hasOwnProperty);
    // hasOwnProperty = point.hasOwnProperty('y');
    // console.log('y',hasOwnProperty);
    // hasOwnProperty = point.hasOwnProperty('toString');
    // console.log('toString',hasOwnProperty);
    // hasOwnProperty = point.__proto__.hasOwnProperty('toString');
    // // hasOwnProperty = point.prototype.hasOwnProperty('toString');// 报错
    // console.log('prototype toString',hasOwnProperty)
    // 代码中x 和y都是实例对象point自身的属性(因为定义在this变量上),
    // 所以hasOwnProperty 方法返回true, 而toString 是原型对象的属性
    // (因为定义在Point 类上),所以 hasOwnProperty方法返回false
    // 这些都与ES5的行为保持一致

    // 与ES5一样,类的所有实例共享一个原型对象
    // 定义类
    // class Point {
    //     constructor(x,y){
    //         this.x = x;
    //         this.y = y;
    //     }
    //     toString(){
    //         return this.x.toString()+this.y.toString();
    //     }
    // }
    // let p1 = new Point(1,5);
    // let p2 = new Point(1,3);
    // // console.log(p1 instanceof p2);
    // console.log(p1 instanceof Point);
    // console.log(p2 instanceof Point);
    // console.log(p2.__proto__ === p1.__proto__);
    // p1 和p2 都是Point 的实例,它们的原型都是Point.prototype
    // 所以__proto__属性是相等的

    // 这也意味可以通过实例的__proto__ 为'类'添加方法
    //      __proto__ 并不是语言本身的特性,,要避免使用
    //      生产环境中,可以用Object.getPrototypeOf 方法来获取对象的原型,
    //      然后再来为原型添加方法属性
    // 定义类
    // class Point {
    //     constructor(x, y) {
    //         this.x = x;
    //         this.y = y;
    //     }
    //
    //     toString() {
    //         return this.x.toString() + this.y.toString();
    //     }
    // }
    //
    // let p1 = new Point(1);
    // let p2 = new Point(2);
    // p1.__proto__.printName = function () {
    //     return 'some str'
    // };
    // let result1 = p1.printName();
    // let result2 = p2.printName();
    // console.log(result1)
    // console.log(result2 + 'result2 ')
    // let p3 = new Point(123);
    // let result3 = p3.printName();
    // console.log(result3)
    // 代码中在p1 的原型上添加了一个printName 方法
    // 由于p1的原型就是p2的原型,因此p2也可以调用这个方法
    // 而且 此后新建的实例p3也可以调用这个方法。
    // 使用实例的__proto__可以修改原型,必须相当谨慎,不推荐使用,
    // 这会改变'类'的原始定义,影响到所有的实例

    // 5. Class表达式
    // 与函数一样,类可以使用表达式的形式定义
    // const MyClass = class Me {
    //     getClassName(){
    //         return Me.name
    //     }
    //     getThis(){
    //         return this
    //     }
    // };
    // let result = new MyClass();
    // console.log(result );
    // console.log(result.getClassName());// Me
    // console.log(result.getThis()); //Me{}
    // 类的名字是MyClass 而不是Me
    // Me 只在Class的内部代码可以用,指代当前类
    // let inst = new MyClass();
    // console.log(Me.name);// ReferenceError: Me is not defined
    // console.log(Me)// ReferenceError: Me is not defined
    // 代码表示,Me 只在Class 内部有定义

    // 如果类的内部没有用到,可以省略Me,也就是可以写成如下
    // const MyClass = class {
    //     //...
    // }
    // 采用Class 表达式,可以写出立即执行的Class
    // let person = new class{
    //     constructor(name){
    //         this.name = name;
    //     }
    //     sayName(){
    //         console.log(this.name)
    //     }
    // }('一个名');
    // person.sayName();// person 是一个立即执行的类的实例

    // 不存在变量提升
    // 类不存在变量提升(hoist),与ES5不同
    // let result = new Foo();// ReferenceError
    // class Foo{};
    // 代码中,foo类使用在前面,定义在后面,这样会报错,
    // 因为es6不会把类的声明提升到代码头部,这种规定的原因与下文提到的继承有关
    // 必须子类在父类之后定义
    // {
    //     let Foo = class {};
    //     class Bar extends Foo{};
    //     console.log(Bar)
    // }
    // 代码不会报错,因为Bar继承Foo的时候,Foo已经有定义,
    // 但是如果存在class的提升,上面的代码就会报错,因为class会被提升到代码头部,
    // 而let命令是不提升的,所以导致Bar继承Foo的时候,Foo还没有定义

    // 7. 私有方法和私有属性
    // 现有的方法,
    // 私有方法是常见需求,但是ES6没有提供,变通方法

    // class Widget{
    //     // 公有方法
    //     foo(name){
    //         this._bar(name)
    //     }
    //     // 私有方法,
    //     _bar(name){
    //         return this.name = name
    //     }
    // }
    // 代码中,_bar方法前面的下划线,表示这只是一个限于内部使用的内部方法,
    // 但是这种方法并不保险,类的外部仍然可以调用此方法

    // 另一种方法,将私有方法移出模块,因为模块内部的所有方法都是对外可见的
    // class Widget{
    //     foo(name){
    //         bar.call(this,name)
    //     }
    // }
    // function bar(name) {
    //     return this.name = name
    // }
    // 代码中,foo是公有方法,内部调用了bar.call(this,name);
    // 这使得bar实际上成为了当前模块的私有方法

    // 还有一种方法,利用Symbol值的唯一性
    // 将私有方法的名字明明为一个Symbol的值
    // const bar = Symbol('bar');
    // const name = Symbol('name');
    // export default class myClass{
    //     // 公有方法
    //     foo(baz){
    //         this[bar](baz)
    //     }
    //     [bar](baz){
    //         return this[name] = baz
    //     }
    // }
    // 代码中,bar 和name 都是Symbol值,导致第三方无法获取到它们.
    // 达到私有方法和私有属性的效果

    // 私有属性提案
    // 与私有方法一样,ES6不支持私有属性
    // 提案:
    // 给class加私有属性
    // 方法是在属性名前面,使用#表示
    // class Point {
    //     #x ;
    //     constructor(x = 0){
    //         #x = +x;// 写成this.#x 也是可以的
    //     }
    //     get x(){
    //         return #x;
    //     }
    //     set x (value){#x = +value}
    // }
    // 代码中,#x就表示私有属性x,在Point类之外是读取不到这个属性的,
    // 私有属性与实例的属性可以同名（比如，#x与get x()）。

    // 私有属性可以指定初始值，在构造函数执行时进行初始化。
    // class Point{
    //     #x  = 0;
    //     constructor(){
    //         #x;//0
    //     }
    // }

    // 之所以要引入一个新的前缀表示私有属性,而没有采用private关键字,
    // 是因为Javascript是一门动态语言,使用独立的符号似乎是唯一可靠的方法,
    // 能够准确的区分一种属性是否为私有属性,
    // 另外Ruby语言使用@表示私有属性,ES6没有用这个符号而使用#,是因为@已经留给了Decorator
    // 该提案之规定了私有属性的写法,但是,很自然它可以用来写私有方法
    // class Foo{
    //     #a ;
    //     #b;
    //     #sum(){
    //         return #b+#a
    //     }
    //     printSum (){
    //         console.log(#sum())
    //     }
    //     constructor(a,b){
    //         #a = a;
    //         #b = b;
    //     }
    // }
    // 代码中 #sum 就是一个私有方法

    // 另外私有属性也可以设置getter 和 setter方法
    // class Counter{
    //     #xValue = 0;
    //     get #x(){
    //         return #xValue
    //     }
    //     set #x (value){
    //         this.#xValue = value;
    //     }
    //     constructor(){
    //         super();
    //     }
    // }
    // 代码中,#x 是一个私有属性,它的读写都通过get #x(); 和set #x()来完成

    // 8.this的指向
    // 类的方法内部如果含有this,它默认执行类的实例,但是,必须十分小心,
    // 一旦单独使用,很可能报错
    // class Logger{
    //     printName(name = 'here'){
    //         this.print (`hello ${name}`)
    //     }
    //     print(text){
    //         console.log(text)
    //     }
    // }
    // const logger = new Logger();
    // console.log(logger)
    // const {printName } = logger;
    // console.log(printName)
    // printName()// TypeError: Cannot read property 'print' of undefined
    // 代码中printName方法中的this,默认执行logger类的实例
    // 但是如果将这个方法提取出来单独使用,this会指向该方法运行时所在的环境
    // 因为找不到print方法而导致报错
    // 一个比较简单的方法是,在构造方法中绑定this,这样就不会找不到print方法
    // class Logger {
    //     constructor(){
    //         this.printName = this.printName.bind(this);
    //     }
    // }
    // 另一种解决方法是使用箭头函数
    // class Logger {
    //     constructor() {
    //         this.printName = (name = 'here') => {
    //             this.print(`hello ${name}`)
    //         }
    //     }
    // }

    // 还有一种方法是使用Proxy ,获取方法的时候,自动绑定this
    // function selfish(target) {
    //     const cache = new WeakMap();
    //     const handler = {
    //         get(target,key){
    //             const value = Reflect.get(target,key);
    //             if(typeof value !== 'function'){
    //                 return value;
    //             }
    //             if(!cache.has(value)){
    //                 cache.set(value,value.bind(target))
    //             }
    //             return cache.get(value)
    //         }
    //     };
    //     const proxy = new Proxy(target,handler);
    //     return proxy;
    // }
    // const logger = selfish(new Logger())

    // 9.name 属性,由于本质上,ES6的类只是ES5的构造函数的一层包装
    // 所以函数的许多特性都被Class继承,包括name 属性
    // class Point {
    // };
    // console.log(Point.name)
    // name 属性总是返回紧跟在class 关键字后面的类名

    // 10. Class的取值函数(getter) 和存值函数(setter)
    // 与ES5一样,在类的内部可以使用get 和set 关键字
    // 对某个属性设置存值函数和取值函数,拦截该属性的存取行为
    // class MyClass {
    //     constructor() {
    //         this.name = '1';
    //     }
    //
    //     get prop() {
    //         if(typeof this.name ==='number'){
    //             return 3* this.name;
    //         }
    //        // return this.name
    //         return this.prop// 溢出
    //     }
    //
    //     set prop(value) {
    //         this.name = value;
    //         return 'setter' + value
    //     }
    // }
    //
    // let inst = new MyClass();
    // // inst.prop = 123;
    // inst.prop = '123';
    // console.log(inst.prop)
    // 代码中,prop属性有对应的存值函数和取值函数,因此赋值和读取行为都被自定义了
    // 存值函数和取值函数是设置在属性的Descriptor对象上的

    // class CustomHTMLElement {
    //     constructor(element) {
    //         this.element = element;
    //     }
    //
    //     get html() {
    //         return this.element.innerHTML
    //     }
    //     set html (value){
    //         this.element.innerHTML = value;
    //     }
    // }
    // let descriptor = Object.getOwnPropertyDescriptor(
    //     CustomHTMLElement.prototype,'html'
    // );
    // console.log('descriptor',descriptor);
    // console.log("get" in descriptor, "set" in descriptor )
    // 代码中,存值函数和取值函数是定义在html属性的描述对象上面,
    // 这与ES5完全一致

    // class 的 Generator方法
    // 如果某个方法前加上了星号 (*),就表示该方法是一个Generator函数
    // class Foo {
    //     constructor(...args) {
    //         this.args = args;
    //     }
    //     *[Symbol.iterator](){
    //         for(let arg of this.args){
    //             yield arg;
    //         }
    //     }
    // }
    // let foo = new Foo('1',1123,123);
    // for(let x of foo){
    //     console.log(x)
    // }
    // 代码中,Foo类的Symbol.iterator 方法前面有一个星号,
    // 表示该方法是一个Generator函数,
    // Symbol.iterator 方法返回一个Foo类的默认遍历器
    // for...of 循环会自动调用这个遍历器

    // 12. class的静态方法
    // 类相当于实例的原型,所有在类中定义的方法,都会被实例继承
    // 如果在一个方法前面,加上 static 关键字,就表示该方法不会被实例集成
    // 而是直接通过类来调用,这称为静态方法
    // class Foo{
    //     static classMethod(){
    //         return 'some str'
    //     }
    // }
    // let result =Foo.classMethod();
    // console.log(result);
    // let foo = new Foo();
    // console.log(foo.classMethod())//TypeError: foo.classMethod is not a function
    // 代码中,Foo类的classMethod 方法前面有static关键字
    // 表明该方法是一个静态方法,可以直接在Foo类上调用(Foo.classMethod),
    // 而不是在Foo类的实例上调用
    // 如果在实例上调用静态方法,会抛出一个错误,表示不存在该方法

    // 注意,如果静态方法包含this 关键字,这个this指的是类,而不是实例
    // class Foo{
    //     static bar(){
    //         this.baz();
    //         this.func();// 报错,not a function
    //     }
    //     static baz(){ // 调用此方法
    //         console.log('123')
    //     }
    //     baz(){
    //         console.log('321')
    //     }
    //     func(){}
    // }
    // Foo.bar();
    // 代码中,静态方法bar调用了this.baz ,这里的this指的是Foo类
    // 而不是Foo的实例,等同于调用Foo.baz
    // 另外,静态方法可以与非静态方法重名

    // 父类的静态方法,可以被子类继承
    // class Foo{
    //     static classMethod(){
    //         return 'hello'
    //     }
    // }
    // class Bar extends Foo{
    //     static showMsg(){
    //         let result = this.classMethod();
    //         console.log(result);
    //         return result + ' msg'
    //     }
    // }
    // let result = Bar.classMethod();
    // console.log('result',result);//result hello
    // let barMsg = Bar.showMsg();//hello
    // console.log('barMsg',barMsg )//hello msg
    // 代码中,父类Foo有一个静态方法,子类Bar可以调用这个方法

    // 静态方法也可以从super对象上调用
    // class Foo{
    //     static classMethod(){
    //         return 'hello'
    //     }
    // }
    // class Bar extends Foo{
    //     static classMethod(){ // 子类可以使用与父类重名的静态方法名,
    //         return super.classMethod() + ' 123' //通过super调用父类的静态方法
    //     }
    // }
    // let result = Bar.classMethod();
    // console.log(result)

    // 13. class 的静态属性和实例属性
    // 静态属性指的是class本身的属性,即class.propName,
    // 而不是定义在实例对象(this)上的属性

    // class Foo{
    //
    // }
    // Foo.prop = 1;
    // console.log('Foo.prop',Foo.prop);
    // let result = new Foo();
    // console.log('result',result);
    // class Bar extends Foo{
    //
    // }
    // console.log('Bar.prop',Bar.prop)
    // 上面的写法,为Foo类定义了一个静态属性prop
    // 目前只有这种写法可行,ES6明确规定,class内部只有静态方法,没有静态属性
    // 以下两种写法无效
    // class Foo{
    //      1.
    //     prop:2
    //      2.
    //     static prop:2
    // }

    // 静态属性的提案.
    // (1)类的实例属性
    // 类的实例属性可以用等式,写入类的定义中
    // class MyClass {
    //     myProp = 41;
    //     constructor(){
    //         console.log(this,this.myProp)
    //     }
    // }
    // console.log(new MyClass())
    // 代码中,myProp就是myClass 的实例属性,
    // 在MyClass的实例上,可以读取这个属性

    // 之前,定义实例属性,只能写在 constructor 里面
    // class reactCounter extends React.Component{
    //     constructor(props){
    //         super(props);
    //         this.state = {
    //             count:0
    //         }
    //     }
    // }

    // 代码中,构造方法constructor里面,定义了this.state 属性
    // 有了新写法后,可以不在constructor方法里面定义
    // class ReactCounter extends React.Component{
    //     state={
    //         count:0
    //     }
    // }
    // 写法更为清晰
    // 为了可读性的目的,对于那些在constructor里面已经定义的实例属性
    // 新写法允许直接列出
    // class ReactCounter extends React.Component{
    //     state;
    //     constructor(props){
    //         super(props);
    //         this.state = {
    //             count:0
    //         }
    //     }
    // }
    // (2) 类的静态属性
    // 类的静态属性只要在上面的实例属性写法前面,加上static关键字就可以了
    // class MyClass{
    //     static myStaticProp = 42;
    //     constructor(){
    //         console.log(MyClass.myStaticProp)
    //     }
    // }
    // 同样,这个写法方便了静态属性的表达
    // 之前写法
    // class Foo{
    //     // ...
    // }
    // Foo.prop =1;
    //
    // // 新写法
    // class Foo{
    //     static prop = 1
    // }
    // 代码中,之前写法的静态属性定义在类的外部,
    // 类生成后,在生成静态属性,
    // 这样子很容易让人忽略这个静态属性,不符合相关代码放在一起的代码组织原则
    // 另外,新写法是显式声明(declarative),而不是赋值处理,语义更好

    // 14.new.target 属性
    // new 是从构造函数生成实例对象的命令,es6 为new命令引入一个new.target 属性
    // 该属性一般用在构造函数中,
    // 返回new 命令作用于那个构造函数,如果构造函数不是通过new命令调用的
    // new.target会返回undefined ,因此这个属性可以用来确定构造函数是怎么调用的

    // function Person1(name){
    //     if(new.target !== undefined){
    //         this.name = name;
    //     }else{
    //         throw new Error('使用new 命令生成实例1')
    //     }
    // }
    // // 另一种写法
    // function Person2(name) {
    //     if(new.target === Person2){
    //         this.name = name;
    //     }else{
    //         throw new Error('使用new 命令生成实例2')
    //     }
    // }
    // let person1 = new Person1('QWE');
    // console.log(person1);
    // let person2 = new Person2('12');
    // console.log(person2);
    // let notAPerson1 = Person1.call(person1,'123');//报错
    // let notAPerson2 = Person2.call(person2,'123');//报错
    // 代码确保构造函数只能通过 new 命令调用

    // Class 内部调用new.target ,返回当前class
    // class Rectangle{
    //     constructor(length,width){
    //         console.log(new.target === Rectangle); //true 返回当前Class
    //         this.length = length;
    //         this.width = width;
    //     }
    // }
    // let result = new Rectangle(3,4);

    // 需要注意的是,子类继承父类时,new.target会返回子类
    // class Rectangle{
    //     constructor(length,width){
    //         console.log(new.target === Rectangle);// false
    //         console.log(new.target === Square);// true
    //     }
    // }
    // class Square extends Rectangle{
    //     constructor(length){
    //         super(length,length)
    //     }
    // }
    // let result = new Square(123);
    // console.log(result)
    // 代码中,new.target返回子类
    // 利用这个特点可以写出不能独立使用,必须继承后才能使用的类
    // class Shape{
    //     constructor(length,width){
    //         if(new.target === Shape){
    //             throw new Error('本类不能实例化');
    //             return
    //         }
    //         this.length = length;
    //         this.width = width;
    //     }
    // }
    // class Rectangle extends Shape{
    //     constructor(length,width){
    //         super(length,width);
    //         //...
    //     }
    // }
    // // let x = new Shape(); //报错
    // let y = new Rectangle(3.4,4); //Rectangle {length: 3.4, width: 4}
    // console.log(y)
    // 代码中 Shape 类不能被实例化,只能用于继承
    // 注意 ,在函数外部,使用new.target 会报错
    //-----------------------------------------------------------------------

    //-----------------------------------------------------------------------
    /**
     *
     * Class 的继承
     *
     * */

    // 1.简介
    // Class 可以通过extends 关键字实现继承,比ES5通过修改原形链实现继承,更加清晰方便
    // class Point{}
    // class ColorPoint extends Point{
    //
    // }
    // 代码中定义了一个Color类,该类通过extends关键字,继承了Point的所有属性和方法
    // 但是由于没有部署任何代码,所以两个类完全一样,相当于复制了一个Point类

    // class Point{
    //     constructor(x,y){
    //         this.a = x;
    //         this.b = y;
    //     }
    //     toString(){
    //         return '父类'
    //     }
    // }
    // class ColorPoint extends Point{
    //     constructor(x,y,color){
    //         super(x,y);
    //         this.color = color;
    //     }
    //     toString(){
    //         console.log(super.toString());
    //         return this.color+'   ' + super.toString();
    //     }
    // }
    // let result = new ColorPoint(1,2,3);
    // console.log(result);
    // let str = result.toString();
    // console.log(str);
    // 代码中,constructor方法和toString方法中,都出现了super关键字,
    // 它在这里表示父类的构造函数,用来新建父类的this对象

    // 子类必须在constructor方法中调用super方法,
    // 否则新建实例时,会报错,这是因为子类没有自己的this对象
    // 而是继承父类的this对象,然后在对其进行加工,如果不调用super方法,
    // 子类就得不到this对象
    // class Point {
    //     //...
    // }
    // class ColorPoint extends Point{
    //     constructor(){
    //         // super()// 不加的话会报错
    //     }
    // }
    // let cp = new ColorPoint(); //ReferenceError Must call super constructor
    // // in derived class before accessing 'this' or returning from derived constructor
    // console.log(cp)
    // 代码中,colorPoint 继承了父类Point ,
    // 但是它的构造函数没有调用super方法,导致新建实例报错

    // ES5 的继承,实质是先创造子类的实例对象this,
    // 然后再将父类的方法添加到this上面(Parent.apply(this))
    // ES6 的继承机制完全不同,实质上是先创造父类的实例对象this(所以必须先调用super方法)
    // 然后再用子类的构造函数修改this

    // 如果子类没有定义 constructor方法,这个方法会被默认添加,
    // 代码如下,也就是说,不管有没有显式定义,任何一个子类都有constructor方法
    // class ColorPoint extends Point{
    //
    // }
    // // 等同于
    // class ColorPoint extends Point{
    //     constructor(...args){
    //         super(...args)
    //     }
    // }

    // 注意,在子类的构造函数中,至于调用super之后,才可以使用this关键字,
    // 否则会报错,这是因为子类实例的构建,是基于父类实例加工,
    // 只有super方法才能返回父类实例
    // class Point {
    //     constructor(x,y){
    //         this.x = x;
    //         this.y = y;
    //     }
    // }
    // class ColorPoint extends Point{
    //     constructor(x,y,color){
    //         // this.color = color; // 报错
    //         // Must call super constructor in derived
    //         // class before accessing 'this' or returning from derived constructor ReferenceError
    //         super(x,y);
    //         this.color = color;
    //     }
    // }
    // let result = new ColorPoint(12,1,1);
    // 代码中,子类的constructor方法没有调用super之前,
    // 就使用this关键字,导致报错,而放在super方法之后就正确

    // 下面是生成子类实例的代码
    // class Point {
    //     constructor(x,y){
    //         this.x = x;
    //         this.y = y;
    //     }
    // }
    // class ColorPoint extends Point{
    //     constructor(x,y,color){
    //         // this.color = color; // 报错
    //         // Must call super constructor in derived
    //         // class before accessing 'this' or returning from derived constructor ReferenceError
    //         super(x,y);
    //         this.color = color;
    //     }
    // }
    // let cp = new ColorPoint(20,12,'green');
    // console.log(cp instanceof ColorPoint); // true
    // console.log(cp instanceof Point)// true
    // 代码中,实例对象cp同时是ColorPoint 和Point 两个类的实例
    // 这与ES5 行为完全一致

    // 父类的静态方法也会被子类继承
    // class A {
    //     static hello(){
    //         console.log('hello world')
    //     }
    // }
    // class B extends A{
    //
    // }
    // B.hello();
    // 代码中 hello() 是A类的静态方法,B 继承A ,也继承了A的静态方法


    // 2. Object.getPrototypeOf()
    // Object.getPrototypeOf() 方法可以用来从子类上获取父类
    // class A {
    //     static hello() {
    //         console.log('hello world');
    //     }
    //
    //     constructor() {
    //         this.a = 123
    //     }
    // }
    //
    // class B extends A {
    // }
    //
    // let result = Object.getPrototypeOf(B);
    // let newB = new B();
    // console.log(result);
    // console.log(result === A);
    // console.log(result.prototype.a === A.prototype.a); // true
    // console.log(result.prototype.a) // undefined
    // console.log(newB.a) // 123
    // getPrototypeOf这个方法可以用来判断一个类是否继承了另一个类

    // 3. super 关键字
    // super关键字,既可以当作函数使用,也可以当作对象使用
    // 两种情况下,它的用法不同

    // 第一种,super作为函数调用,代表父类的构造函数,
    // es6要求,子类的构造函数必须执行一次super函数
    // class A{}
    // class B extends A {
    //     constructor(){
    //         super()
    //     }
    // }
    // 代码中,子类B 的构造函数中super(), 代表调用父类的构造函数
    // 这是必须的,否则javascript引擎会报错

    // 注意super 虽然代表父类A 的构造函数,但是返回的是子类B的实例
    // 即super内部的this指的是B,因此super() 在这里相当于,A.prototype.constructor.call(this)

    // class A{
    //     constructor(){
    //         console.log(new.target.name)
    //     }
    // }
    // class B extends A {
    //     constructor(){
    //         super();
    //     }
    // }
    // let result = new A(); // A
    // let resultB = new B(); // B
    // console.log(result ,resultB)
    // 代码中,new.target 指向当前正在执行的函数,可以看到super 在执行时
    // 它指向的是子类B的构造函数,而不是父类A的构造函数,
    // 也就是说super内部的this指向的是B

    // 作为函数时,super() 只能用在子类的构造函数之中,
    // 用在其他地方会报错
    // class A {}
    // class B extends A {
    //     m(){
    //         super(); // 报错 'super' keyword unexpected here
    //     }
    // }
    // 代码中super() 用在B类的m方法中,会造成语法错误

    // 第二种情况
    // super 作为对象时,在普通方法中,指向父类的原型对象,
    // 在静态方法中,指向父类
    // class A {
    //     p(){
    //         return 2
    //     }
    // }
    // class B extends A {
    //     constructor(){
    //         super();
    //         console.log(super.p()) // 2
    //     }
    // }
    //
    // let b = new B();
    // console.log(b);
    // 代码中,子类B 当中super.p(),就是将super当作一个对象使用
    // 这时候 super 在普通方法中,指向A.prototype,
    // 所以super.p()就相当于A.prototyoe.p()
    // 注意: 由于super 指向父类的原型对象,所以定义在父类实例上的方法或属性
    // 是无法通过super 调用的
    // class A {
    //     constructor(){
    //         this.p = 2;
    //     }
    // }
    // class B extends A {
    //     get m(){
    //         return super.p;
    //     }
    // }
    // let b = new B();
    // console.log(b); // {p:2}
    // console.log(b.__proto__); // A {constructor: ƒ}
    // console.log(b.m) //  undefined
    // 代码中,p 是父类A实例的属性,super.p 引用不到它
    // 如果属性定义在父类的原型对象上,super就可以取到

    // class A {}
    // A.prototype.x = 2;
    // class B extends A {
    //     constructor(){
    //         super();
    //         console.log(super.x) //2
    //     }
    // }
    // let b = new B();
    // console.log(b);
    // console.log('b.x',b.x) // 2
    // 代码中,属性x 是定义在A.prototype上面的,所以super.x 可以取到它的值
    // ES6 规定,通过super 调用父类的方法时,方法内部this 指向子类
    // class A {
    //     constructor(){
    //         this.x = 1;
    //     }
    //     print (){
    //         console.log(this.x);
    //     }
    // }
    // class B extends A {
    //     constructor(){
    //         super();
    //         this.x = 2;
    //     }
    //     m (){
    //         super.print();
    //     }
    // }
    // let a = new A();
    // let b = new B();
    // console.log(a); //{x:1}
    // console.log(b); //{x:2}
    // b.m(); // 2  this 指向 B
    // 代码中,super.print(),虽然调用的是A.prototype.print();
    // 但是A.prototype.print 内部的this 指向子类this,导致输出的是2
    // 而不是1 也就是说,实际上执行的是super.print.call(this)
    // 个人理解,在去掉B 中constructor中this.x = 2后,b.m()输出的是1
    // 那么也就是说在原形链一直找x,直到找到父类的x,就打印出来

    // 由于this 指向子类,所以如果通过super 对某个属性赋值,这时候super 就是this,
    // 赋值的属性会变成子类实例的属性
    // class A {
    //     constructor() {
    //         this.x = 1;
    //     }
    // }
    // A.prototype.x = 'a prototype的x';
    // class B extends A {
    //     constructor() {
    //         super();
    //         this.x = 3;
    //         super.x = 10;
    //         console.log(super.x); // undefined
    //         console.log(this.x); // 10
    //     }
    // }
    // let b = new B();
    // console.log(b);// B{x :10}
    // console.log(b.x) // 10
    // 上面代码中, super.x赋值为10,这等同于this.x 赋值为10
    // 而当读取super.x 的时候,读的是A.prototype.x 所以返回的是"a prototype的x"

    // super 作为对象,在静态方法中,这时super将指向父类,
    // 而不是父类的原型对象
    // class Parent {
    //     static myMethod(msg){
    //         console.log('static',msg)
    //     }
    //     myMethod(msg){
    //         console.log('instance',msg)
    //     }
    // }
    // class Child extends Parent{
    //     static myMethod(msg){
    //         super.myMethod(msg);
    //     }
    //     myMethod(msg){
    //         super.myMethod(msg)
    //     }
    // }
    // Child.myMethod('子类调用父类的静态方法');
    // let child = new Child();
    // child.myMethod('子类实例调用父类的实例方法');
    // 代码中,super 在静态方法中,指向父类,在普通方法中指向父类的原型对象
    // 注意,使用super的时候,必须显式指定是作为函数,还是作为对象使用,否则会报错
    // class A {
    //     a(){
    //         console.log('123');
    //         return 123
    //     }
    // }
    // class B extends A{
    //     constructor(){
    //         super();
    //         // console.log(super);//报错 'super' keyword unexpected here
    //         console.log(super.a());
    //     }
    // }
    // let b = new B();
    // 代码中,console.log(super)当中super,无法看出是作为函数使用,还是作为对象使用
    // 解析代码会报错,如果清晰表明super 的数据类型,就不会报错
    // class A {
    //
    // }
    // class B extends A{
    //     constructor(){
    //         super();
    //         console.log(super.valueOf() instanceof B)
    //     }
    // }
    // let b = new B();
    // console.log(b)

    // 代码中,super.valueOf() 表明super是一个对象,就不会报错
    // 同时由于super使得this指向B,所以super.valueOf() 返回的就是一个B的实例

    // 最后由于对象总是继承其他对象的,所以可以在任意一个对象中,使用super关键字
    // let obj = {
    //     toStr (){
    //         console.log(super.toString());// [object Object] 指向原型
    //         console.log(this.toString());// 123  指向属性
    //         return 'obj  '+ super.toString();
    //     },
    //     toString(){
    //         return '123'
    //     }
    // };
    // let result = obj.toStr();
    // console.log(result);// obj: [object Object]


    // 4. 类的prototype 属性和__proto__属性
    // 大多数浏览器es5 实现,每个对象都有__proto__属性,
    // 指向对应的构造函数的prototype属性。
    // Class 作为构造函数的语法糖,同时有prototype属性和__proto__属性
    // 因此同时存在两条继承链
    // class A {}
    // let a = new A();
    // console.log('A.prototype',A.prototype);
    // console.log('A.__proto__',A.__proto__);
    // console.log('----------')
    // console.log('a.prototype',a.prototype);
    // console.log('a.__proto__',a.__proto__);//{constructor: ƒ}constructor: class A __proto__: Object
    // (1) 子类的__proto__属性,表示构造函数的继承,总是指向父类
    // (2) 子类的prototype属性的__proto__属性,表示方法的继承,总是指向父类的prototype属性
    // class A{
    //     getAStr(){
    //         console.log('aaa123');
    //         return 'aaa'
    //     }
    // }
    // class B extends A {
    //     getStr(){
    //         console.log('123');
    //         return '321'
    //     }
    // }
    // console.log(B.__proto__ === A); // true
    // console.log(B.prototype.__proto__ === A.prototype);// true
    // console.log(B.prototype);
    // console.log(B.prototype.getAStr());
    // console.log(B.prototype.getStr());
    // let result = new B();
    // console.log(result);
    // result.getStr();
    // result.getAStr();
    // 代码中,子类B的__proto__属性指向父类A ,
    // 子类B的prototype属性的__proto__属性指向父类A 的prototype属性

    // 这样子结果是因为,类的继承是按照下面模式实现的
    // class A {
    //
    // }
    // class B{
    //
    // }
    // console.log(B.prototype,A.prototype);
    // // B 的实例继承A的实例
    // Object.setPrototypeOf(B.prototype,A.prototype);
    //
    // console.log(B,A);
    // // B的实例继承A 的静态属性
    // Object.setPrototypeOf(B,A);
    // console.log(B.__proto__ === A); // true
    // console.log(B.prototype.__proto__ === A.prototype);// true
    // const b = new B();
    // console.log(b);
    //《对象的扩展》一章给出过Object.setPrototypeOf方法的实现。
    // Object.setPrototypeOf = function (obj, proto) {
    //     obj.__proto__ = proto;
    //     return obj
    // }
    // 得出上面结果

    // Object.setPrototypeOf(B.prototype,A.prototype);
    // // 等同于
    // B.prototype.__proto__ = A.prototype;
    //
    // Object.setPrototypeOf(B,A);
    // // 等同于
    // B.__proto__ = A;
    // 这两条继承继承链可以这样理解:
    // 作为一个对象,子类(B)的原型(__proto__属性)是父类(A)
    // 作为一个构造函数,子类(B)的原型对象(prototype属性)是父类的原型对象(prototype属性)的实例
    // Object.create(A.prototype);
    // // 等同于
    // B.prototype.__proto__ = A.prototype

    //------------------
    // extends 的继承目标
    // extends 关键字后面可以跟多种类型的值
    // class B extends A {
    //
    // }
    // 代码中,只要是一个有prototype属性的函数, 就能被B继承
    // 由于函数都有prototype属性,(除了 Function.prototype函数),因此A可以是任意函数

    // 三种特殊情况
    // 第一种,子类继承Object类
    // class A extends Object{
    //
    // }
    // console.log(A.__proto__ === Object); // true
    // console.log(A.prototype.__proto__ === Object.prototype)// true
    // 这种情况,A其实就是构造函数Object的复制,A 的实例就是Object的实例

    // 第二种,不存在任何继承
    // class A{
    //
    // }
    // console.log(A.__proto__ === Function.prototype) // true
    // console.log(A.prototype.__proto__ === Object.prototype)// true
    // 这种情况下,A 作为一个基类,(即不存在任何继承), 就是一个普通函数
    // 所以直接继承 Function.prototype, 但是A 调用后返回一个空对象(即Object实例)
    // 所以 A.prototype.__proto__ 指向构造函数(Object)的prototype属性

    // 第三种特殊情况,子类继承null
    // class A extends null{
    //
    // }
    // console.log('A.__proto__ === Function.prototype',A.__proto__ === Function.prototype); // true
    // console.log('A.prototype.__proto__ === undefined',A.prototype.__proto__ === undefined) ;// true
    // 第三种情况和第二种情况非常像
    // A 是一个普通函数,所以直接继承Function.prototype
    // 但是A 调用后返回的对象不继承任何方法,所以它的__proto__指向Function.prototype
    // 实质上执行下面代码
    // class C extends null {
    //     constructor(){
    //         return Object.create(null);
    //     }
    // }
    // let c = new C();
    // console.log(c)//{} No properties

    // 实例的 __proto 属性
    // 子类实例的__proto__ 属性的__proto属性,指向父类实例的__proto__属性,
    // 即子类的原型的原型,是父类的原型
    // let p1 = new Point(2,3);
    // let p2 = new ColorPoint(2,2,'red');
    // console.log(p2.__proto__ === p1.__proto__);// false
    // console.log(p2.__proto__.__proto__ === p1.__proto__); // true
    // 代码中,ColorPoint 继承了Point ,导致前者原型的原型是后者的原型

    // 因此通过子类实例的__proto__.__proto__属性,可以修改父类实例的行为
    // p2.__proto__.__proto__.printName = function () {
    //     console.log('123');
    // }
    // p1.printName();// 123
    // 代码在ColorPoint 的实例p2上想Point类添加的方法,结果影响到了Point的实例p1。

    // 5. 原生构造函数的继承
    // 原生构造函数是指语言内置的构造函数,通常用来生成数据结构,
    // ECMAScript的原生构造函数有大致如下:
    // - Boolean()
    // - Number()
    // - String()
    // - Array()
    // - Date()
    // - Function()
    // - RegExp()
    // - Error()
    // - Object()
    // 注意,这些原生构造函数是无法继承的,比如,不能自己定义一个Array的子类
    // function MyArray() {
    //     Array.apply(this,arguments);
    // }
    // MyArray.prototype = Object.create(Array.prototype,{
    //     constructor:{
    //         value:MyArray,
    //         writable:true,
    //         configurable: true,
    //         enumerable:true
    //     }
    // });
    // // 上面代码定义一个继承Array 的MyArray类,
    // // 但是,这个类的行为与Array完全不一致
    // let colors = new MyArray();
    // colors[0] = 'red';
    // console.log(colors.length); // 0
    // console.log(colors)
    // colors.length = 0;
    // console.log(colors)
    // console.log(colors[0])
    // 之所以会发生这种情况,是因为子类无法获得原生构造函数的内部属性
    // 通过 Array.apply() 或者分配给原型对象都不行。
    // 原生构造函数会忽略apply 方法传入的this
    // 也就是说,原生构造函数的this无法绑定,导致拿不到内部属性

    // es5 是先新建子类的实例对象this,再将父类的属性添加到子类上
    // 由于父类的内部属性无法获取,导致无法继承原生的构造函数,
    // 比如,Array 构造函数有一个内部属性[[DefineOwnProperty]],
    // 用来定义新属性时,更新length属性,这个内部属性无法在子类获取,
    // 导致子类的length 属性行为不正常

    // 下面例子中,想让一个普通对象继承Error对象
    // let e = {};
    // let result = Object.getOwnPropertyNames(Error.call(e));
    // console.log(result)// ['stack']
    // let propertyNames = Object.getOwnPropertyNames(e);
    // console.log(propertyNames); // []
    // 代码中,想通过 Error.call(e)这种写法,让普通对象e具有Error对象的实例属性.
    // 但是,Error.call()完全忽略传入的第一个参数.而是返回了一个新对象
    // e 本身没有任何变化。
    // 证明,Error.call(e)这种写法,无法继承原生构造函数

    // ES6 允许继承原生构造函数定义子类,
    // 因为ES6是先新建父类的实例对象this,
    // 然后再用子类的构造函数修饰this,使得父类的所有行为都可以继承
    // 一个继承Array 的例子
    // class MyArray extends Array{
    //     constructor(...args){
    //         super(...args)
    //     }
    // }
    // let arr = new MyArray();
    // arr[0] = 1;
    // console.log(arr.length);//1
    // console.log(arr);//[1]
    // console.log(arr[0]);//1
    // arr.length = 0;
    // console.log(arr.length);//0
    // console.log(arr);   //[]
    // console.log(arr[0]);// undefined

    // 代码定义了一个MyArray类,继承了Array构造函数
    // 因此可以从MyArray 生成数组的实例
    // 这意味着,ES6可以自定义原生数据结构(比如 Array,String)的子类
    // 这是ES5做不到的

    // 上面这个例子也说明,extends 关键字不仅可以用来继承类
    // 还可以用来继承原生的构造函数
    // 因此可以在原生数据结构的基础上,定义自己的数据结构,
    // 下面定义一个带版本功能的数组
    // class VersionedArray extends Array{
    //     constructor(){
    //         super();
    //         this.history = [[]]
    //     }
    //     commit(){
    //         this.history.push(this.slice())
    //     }
    //     revert(){
    //         this.splice(0,this.length,...this.history[this.history.length - 1 ]);
    //     }
    // }
    // let x = new VersionedArray();
    // console.log(x);
    // debugger;
    // x.push(1);
    // console.log(x);
    // debugger;
    // x.push(12);
    // console.log(x);
    // console.log(x.history);
    //
    // x.commit();
    // console.log(x.history);
    //
    // x.push(3);
    // console.log(x);
    // console.log(x.history);
    // x.revert();
    // console.log(x)
    // 代码中,VersionedArray 会通过commit 方法,将自己的当前状态生成一个版本快照
    // 存入history属性,revert 方法用来将数组重置为最新一次保存的版本
    // 除此之外,VersionedArray 依然是一个普通数组,所有的原生数组方法都可以在它上面调用

    // 一个自定义Error 子类的例子, 可以用来定制报错时行为
    // class ExtendableError extends Error{
    //     constructor(msg){
    //         super();
    //         this.message = msg;
    //         this.stack = (new Error()).stack;
    //         this.name = this.constructor.name;
    //     }
    // }
    //
    // class MyError extends ExtendableError{
    //     constructor(m){
    //         super(m)
    //     }
    // }
    // let myError = new MyError('自定义错误');
    // console.log(myError.message);//自定义错误
    // console.log(myError instanceof Error);//true
    // console.log(myError.name);//MyError
    // console.error(myError.stack);//index.js:9677 Error at new ExtendableError (index.js:9663)...

    // 注意继承Object的子类有一个行为差异
    // class NewObj extends Object{
    //     constructor(){
    //         super(...arguments)
    //     }
    // }
    // let o = new NewObj({attr:true});
    // console.log(o.attr === true); //false
    // 上面代码中,NewObj 继承了Object ,但是无法通过super方法向父类Object传参
    // 这是因为ES6改变了Object 构造函数的行为,
    // 一旦发现Object方法不是通过new Object() 这种形式调用的,
    // ES6规定Object构造函数会忽略参数

    // 6.Mixin 模式的实现
    // Mixin 指的是多个对象合成一个新的对象,
    // 新对象具有各个组成成员的接口,简单实现如下
    // const a = {
    //     a:'123'
    // };
    // const b = {
    //     b:'321'
    // };
    // const c = {...a,...b};
    // console.log(c)
    // 代码中,c对象是a对象和b对象的合成,具有两者的接口

    // 更完备的实现,将多个类的接口 '混入'(mix in),另一个类
    // function mix(...mixins) {
    //     class Mix {}
    //     for(let mixin of mixins){
    //         copyProperties(Mix,mixin);// 拷贝实例属性
    //         copyProperties(Mix.prototype,mixin,prototype)
    //     }
    //     return Mix;
    // }
    // function copyProperties(target, source) {
    //     let dest = {};
    //     for(let key of Reflect.ownKeys(source)){
    //         if(key !== 'constructor'&& key !== 'prototype' && key !== 'name'){
    //             dest = Object.getOwnPropertyDescriptor(source,key);
    //             Object.defineProperty(target,key,desc)
    //         }
    //     }
    // }
    // 上面代码的mix函数,可以将多个对象合成为一个类,使用的时候,继承这个类即可
    // class DistributedEdit extends mix (Loggable,Serializable){
    //     //...
    // }
    // --------------------------------------------------

    /**
     *
     * 21 修饰器
     *
     * */

    // 1.类的修饰
    // 修饰器(Decorator)函数,用来修改类的行为
    // @testable
    // class MyTestableClass{
    //     //...
    // }
    // function testable(target) {
    //     target.isTestable = true;
    // }
    // console.log(MyTestableClass.isTestable)
    // 代码中,@testable 就是一个修饰器
    // 修改了MyTestableClass 这个类的行为,为它加上静态属性isTestable
    // testable 函数的参数target 是MyTestableClass 类本身
    // 基本上修饰器的行为是下面这样
    // @decorator
    // class A {
    //
    // }
    // 等同于
    // class A {
    //
    // }
    // A = decorator(A) || A

    // 也就是说,修饰器是一个对类进行处理的函数
    // 修饰器函数的第一个参数,就是所要修饰的目标类
    // function testable(target){
    //     //...
    // }
    // 代码中,testable函数的参数target,就是会被修饰的类
    // 如果觉得一个参数不够用,可以在修饰器外面再封装一层
    // function testable(isTestable) {
    //     return function (target) {
    //         target.isTestable = isTestable;
    //     }
    // }
    // @testable(true)
    // class MyTestableClass{}
    // MyTestableClass.isTestable // true
    //
    // @testable(false)
    // class MyClass{}
    // MyClass.isTestable ;// false

    // 代码中,修饰器testable可以接受参数,这等于可以修改修饰器的行为
    // 注意 修饰器对类的行为的改变,是代码编译时候发生的,而不是运行时
    // 这意味着,修饰器能在编译阶段运行代码,也就是说,修饰器本质就是编译时执行的函数

    // 前面例子是为类添加一个静态属性,如果想添加实例属性,
    // 可以通过目标类的prototype对象操作
    // function testable(target) {
    //     target.prototype.isTestable = true
    // }
    // @testable
    // class MyClass{}
    // let obj  = new MyClass();
    // obj.isTestable // true
    // 代码中,修饰器函数testable实在目标类的prototype对象上添加属性
    // 因此可以在实例上调用

    // 另一个例子
    // // mixin.js
    // export function mixins(...list) {
    //     return function (target) {
    //         Object.assign(target.prototype,...list)
    //     }
    // }
    // // main.js
    // import {mixins} from './mixins'
    // const Foo = {
    //     foo(){
    //         console.log('123')
    //     }
    // };
    // @mixins(Foo)
    // class MyClass{}
    // let obj = new MyClass();
    // obj.foo(); // 123
    // 代码通过修饰器mixins,把Foo类的方法添加到MyClass的实例上
    // 可以用Object.assign() 模拟这个功能
    // const Foo = {
    //         foo() {
    //             console.log('123')
    //         }
    //     };
    //
    // class MyClass {
    //
    // }
    // Object.assign(MyClass.prototype,Foo)
    // let obj = new MyClass();
    // obj.foo(); // 123

    // 实际开发中,React 与 Redux库结合使用,常常需要写成下面这样
    // class MyReactComponent extends React.component{}
    //
    // export default connect(mapStateToProps,mapDispatchToProps)(MyReactComponent);

    // 修饰器改写上面代码
    // @connect(mapStateToProps,mapDispatchToProps)
    // export default class MyReactComponent extends React.Component{}
    // 相对来说,比较容易理解

    //--------------------------------------------------------------
    // 2. 方法的修饰
    // 修饰器不仅可以修饰类,还可以修饰类的属性
    // class Person{
    //     @readonly
    //     name(){
    //         return `${this.first} ${this.last}`
    //     }
    // }
    // 代码中,修饰器readonly用来修饰'类'的name方法
    // 修饰器函数readonly 一共可以接受三个参数
    // function readonly(target, name, descriptor) {
    //     // descriptor 对象原来的值如下
    //     // {
    //     //     value: specifiedFunction,
    //     //     enumerable:false,
    //     //     configurable:true,
    //     //     writable:true
    //     // }
    //     descriptor.writable = false;
    //     return descriptor;
    // }
    //
    // readonly(Person.prototype,'name',descriptor);
    // // 类似
    // Object.defineProperty(Person.prototype, 'name',descriptor)

    // 修饰器第一个参数是类的原型对象,上例是Person.prototype
    // 修饰器的本意是要 "修饰"类的实例,
    // 但是这个时候实例还没生成,所以只能去修饰原型
    // (这不同于类的修饰,那种情况target参数指的是类本身)
    // 第二个参数是要修饰的属性名,第三个参数是该属性的描述对象
    // 代码说明,修饰器readonly会修改属性的描述对象(descriptor)
    // 然后被修改的描述对象再用来定义属性

    // 例子,修改属性描述对象的enumerable属性,使得该属性不可遍历
    // class Person{
    //     @nonenumerable
    //     get kidCount(){
    //         return this.children.length
    //     }
    // }
    // function nonenumerable(target, name, descriptor) {
    //     descriptor.enumerable = false;
    //     return descriptor;
    // }

    // @log 修饰器,输出日志作用
    // class Math{
    //     @log
    //     add(a,b){
    //         return a + b;
    //     }
    // }
    // function log(target, name, descriptor) {
    //     let oldValue = descriptor.value;
    //     descriptor.value = function () {
    //         console.log(`Calling ${name} with`,arguments);
    //         return oldValue.apply(null,arguments)
    //     }
    //     return descriptor;
    // }
    // const math = new Math();
    // // passed parameters should get logged now
    // math.add(1,2);//
    // 代码中,@log 修饰器的作用就是在执行原始的操作之前,执行一次console.log,
    // 从而达到输出日志的目的
    // 修饰器有注释的作用

    // @testable
    // class Person{
    //     @readonly
    //     @nonenumberable
    //     name(){
    //         return `${this.first} ${this.last}`
    //     }
    // }
    // 代码中,能看出,Person类是可测试的,而name方法是只读和不可枚举的

    // 使用Decorator写法的组件,
    // @Component({
    //     tag: 'my-component',
    //     styleUrl: 'my-component.scss'
    // })
    // export class MyComponent{
    //     @Prop() first :string;
    //     @Prop() last :string;
    //     @State() isVisible: boolean = true;
    //     render(){
    //         return (
    //             <p>Hello,{this.first}{this.last}</p>
    //         )
    //     }
    // }

    // 如果同一个方法有多个修饰器,会先从外到内进入,然后由内向外执行
    // function dec(id) {
    //     console.log('evaluated',id);
    //     return (target,property,descriptor)=>{
    //         console.log('executed',id)
    //     }
    // }
    // class Example{
    //     @dec(1)
    //     @dec(2)
    //     method(){}
    // }
    // evaluated 1
    // evaluated 2
    // executed 2
    // executed 1
    // 代码中,外层修饰器@dec(1)先进入,但是内层修饰器@dec(2)先执行
    // 除了注释,修饰器还能用来类型检查,所以对于类来说
    // 这项功能相当有用,从长期来看,它将是JavaScript 代码静态分析的重要工具

    // ------------------
    // 3.为什么修饰器不能用于函数
    // 修饰器只能用于类和类的方法,不能用于函数,因为存在函数提升
    // let counter = 0;
    // let add = function () {
    //     counter++;
    // };
    // @add
    // function foo() {
    //
    // }
    // 代码中意图是执行后counter等于1 ,
    // 但是实际结果是counter等于0
    // 因为函数提升,使得实际执行的代码是下面这样
    // @add
    // function foo() {
    //
    // }
    // let counter;
    // var add;
    // counter = 0;
    // add = function () {
    //     counter++;
    // }

    // 另一个例子:
    // let readOnly = require('some-decorator');
    // @readOnly
    // function foo() {
    //
    // }
    // 这里的代码也有问题,实际执行是下面
    // var readOnly ;
    // @readOnly
    // function foo() {
    //
    // }
    // readOnly = require('some-decorator');
    // 总结:
    // 由于存在函数提升使得修饰器不能用于函数,类是不会提升的,所以没有这方面问题

    // 另外,如果一定要修饰函数,可以采用高阶函数的形式直接执行
    // function doSomething(name){
    //     console.log('hello'+name)
    // }
    // function loggingDecorator(wrapped) {
    //     return function () {
    //         console.log('starting');
    //         const result = wrapped.apply(this,arguments);
    //         console.log('Finished');
    //         return result
    //     }
    // }
    // const wrapped = loggingDecorator(doSomething);
    // wrapped(123)

    // 4. core-decorators.js
    // 提供几个常见的修饰器,通过它可以更好理解修饰器
    // (1) autobind
    // autobind 修饰器是的方法中的this,绑定原始对象
    // import {autobind} from 'core-decorators'
    // class Person{
    //     @autobind
    //     getPerson(){
    //         return this;
    //     }
    // }
    // let person = new Person()
    // let getPerson = person.getPerson();
    // console.log(getPerson() === person); // true

    // (2)@readonly
    // import { readonly } from 'core-decorators'
    // class Meal {
    //     @readonly
    //     entree = 'steak';
    // }
    // let dinner = new Meal();
    // dinner.entree = 'salmon';// cannot assign to read only property 'entree' of [object Object]

    // (3) override
    // override 修饰器检查子类的方法, 是否正确覆盖了父类的同名方法,如果不正确,报错
    // import {override} from 'core-decorator'
    // class Parent {
    //     speak(first,second){}
    // }
    // class Child extends Parent{
    //     @override
    //     speak(){} //  SyntaxError: Child#speak() does not properly override Parent#speak(first, second)
    // }

    // or
    // class Child extends Parent{
    //     @override
    //     speaks(){}
    //     // SyntaxError: No descriptor matching Child#speaks() was found on the prototype chain.
    //     //
    //     //   Did you mean "speak"?
    // }

    // (4) @deprecate(弃用) (别名@depercated)
    // deprecate 或deprecated 修饰器在控制台显示一条警告,表示该方法将废除
    // import {deprecate} from 'core-decorators';
    // class Person{
    //     @deprecate
    //     facepalm(){}
    //
    //     @deprecate('We stopped facepalming')
    //     facepalmHard(){
    //
    //     }
    //
    //     @deprecate('We stopped facepalming',{url:'some url'})
    //     facepalmHarder(){}
    // }
    //
    // let person = new Person();
    //
    // person.facepalm();
    // // DEPRECATION Person#facepalm: This function will be removed in future versions.
    //
    // person.facepalmHard();
    // // DEPRECATION Person#facepalmHard: We stopped facepalming
    //
    // person.facepalmHarder();
    // // DEPRECATION Person#facepalmHarder: We stopped facepalming
    // //
    // //     See some url for more details.
    // //

    // (5) suppressWarnings
    // suppressWarnings 修饰器抑制 deprecated修饰器导致的console.warn()调用
    // 但是异步代码发出的调用除外
    // import {suppressWarnings} from 'core-decorators'
    // class Person{
    //     @deprecated
    //     facepalm(){}
    //
    //     @suppressWarnings
    //     facepalmWithoutWarning(){
    //         this.facepalm();
    //     }
    // }
    // let person = new Person();
    // person.facepalmWithoutWarning();
    // no warning is logged

    // 5. 使用修饰器实现自动发布事件
    // 可以使用修饰器,使得对象的方法被调用时,自动发出一个事件
    // const postal = require('postal/lib/postal.lodash');
    //
    // export default function publish(topic,channel) {
    //     const channelName = channel || '/';
    //     const msgChannel = postal.channel(channelName);
    //     msgChannel.subscribe(topic,v=>{
    //         console.log('频道: ',channelName);
    //         console.log('事件',topic);
    //         console.log('数据',v);
    //     })
    //     return function (target, name, descriptor) {
    //         const fn = descriptor.value;
    //         descriptor.value = function () {
    //             let value = fn.apply(this,arguments);
    //             msgChannel.publish(topic,value)
    //         }
    //     }
    // }
    // 代码定义了一个publish的修饰器,它通过改写descriptor.value,
    // 使得原方法被调用时候,会自动发出一个事件。
    // 它使用的事件"发布/订阅"库是Postal.js

    // postal 用法如下
    // import publish from './publish';
    // class FooComponent{
    //     @publish('foo.some.message','component')
    //     someMethod(){
    //         return {data:'123'}
    //     }
    //     @publish('foo.some.other')
    //     anotherMethod(){
    //         //...
    //     }
    // }
    // let foo = new FooComponent();
    // foo.someMethod();
    // foo.anotherMethod();
    // 调用someMethod 或者 anotherMethod ,自动发出一个事件
    // 频道:  component
    // 事件:  foo.some.message
    // 数据:  { my: '123' }
    //
    // 频道:  /
    // 事件:  foo.some.other
    // 数据:  undefined

    // 6.Mixin
    // 在修饰器的基础上可以实现Mixin 模式.
    // 所谓 Mixin 模式,就是对象继承的一种替代方案
    // mix in (混入),意为: 在一个对象中混入另外一个对象的方法

    // const Foo = {
    //         foo() {
    //             console.log('123')
    //         }
    //     };
    //
    // class  MyClass{}
    //
    // Object.assign(MyClass.prototype,Foo);
    //
    // let obj = new MyClass();
    //
    // obj.foo();// 123
    // 代码中,对象Foo有一个foo方法,通过Object.assign 方法,可以将foo方法"混入"MyClass 类
    // 导致MyClass 的实例obj对象都具有foo方法,
    // 这就是"混入模式"的一个简单实现

    // 部署一个通用脚本mixin.js ,将Mixin 写成一个修饰器
    // export function mixins(...list) {
    //     return function (target) {
    //         Object.assign(target.prototype,...list)
    //     }
    // }
    // 使用上面的修饰器,为类"混入"各种方法
    // import {mixins} from './mixins';
    // const Foo = {
    //     foo(){
    //         console.log('123')
    //     }
    // };
    // @mixins(Foo)
    // class MyClass{
    //
    // }
    // let obj = new MyClass();
    // obj.foo();// '123'
    // 通过mixins这个修饰器,实现了在MyClass类上面"混入"Foo对象的foo方法

    // 上面的写法会改写MyClass类的prototype对象,如果不喜欢,可以通过类的继承实现Mixin
    // class MyClass extends MyBaseClass{
    //     /*...*/
    // }
    // 代码中,MyClass 继承了MyBaseClass。如果想在MyClass里面'混入'一个foo方法,
    // 一个方法是在MyClass和MyBaseClass之间插入一个混入类,这个类具有foo方法,
    // 并且继承了MyBaseClass的所有方法,然后MyClass 再继承这个类
    // let myMixin = ()=> class extends superClass{
    //         foo(){
    //             console.log('123')
    //         }
    //     };
    // 代码中,MyMixin 是一个混入类生成器,接受superClass 作为参数,
    // 然后返回一个继承superClass的子类,该子类包含foo方法
    // 接着,目标类再去继承这个混入类,就达到"混入"foo 方法的目的
    // class MyClass extends MyMixin(MybaseClass){
    //     /*...*/
    // }
    // let c = new MyClass();
    // c.foo(); // 123
    // 如果需要"混入"多个方法,就生成过个混入类
    // class MyClass extends Mixin1(Mixin2(MyBaseClass)){
    //     /*...*/
    // }
    // 这种写法的好处,是可以调用super,因此可以避免在"混入"过程中
    // 覆盖父类的同名方法
    // let Mixin1 = () => class extends superClass {
    //         foo() {
    //             console.log('foo from Mixin1');
    //             if (super.foo) {
    //                 super.foo()
    //             }
    //         }
    //     };
    //
    // let Mixin2 = () => class extends superClass {
    //     foo() {
    //         console.log('foo from Mixin2');
    //         if (super.foo) {
    //             super.foo()
    //         }
    //     }
    // };

    // class S {
    //     foo(){
    //         console.log('foo from S');
    //     }
    // }
    // class C extends Mixin1(Mixin2(S)){
    //     foo(){
    //         console.log('foo from C')
    //         super.foo();
    //     }
    // }
    // 代码中,每次混入发生时,都调用父类的super.foo方法
    // 导致父类的同名方法没有被覆盖,行为被保留下来
    // new C().foo();
    // foo from C
    // foo from Mixin1
    // foo from Mixin2
    // foo from S

    // 7.Trait
    // Trait 也是一种修饰器 ,效果与Mixin类似,但是提供更多的功能
    // 比如防止同名方法的冲突,排除混入某些方法,为混入的方法起别名等等
    // traits-decorator 作为例子
    // 这个模块提供的traits修饰器,不仅可以接受对象,还可以接受ES6类作为参数
    // import {traits} from 'traits-decorator'
    // class TFoo{
    //     foo(){
    //         console.log('foo');
    //     }
    // }
    // const TBar = {
    //     bar(){
    //         console.log('bar')
    //     }
    // }
    // @traits(TFoo, TBar)
    // class MyClass{
    //
    // }
    // let obj = new MyClass();
    // obj.foo();// foo
    // obj.bar();// bar
    // 代码中,通过traits 修饰器,在MyClass 类上面 "混入"了TFoo类的foo方法
    // 和TBar对象的方法。

    // Trait 不允许"混入"同名方法
    // import {traits} from  'trait-decorator';
    // class TFoo{
    //     foo(){
    //         console.log('foo')
    //     }
    // }
    // const TBar={
    //     bar(){
    //         console.log('bar')
    //     },
    //     foo(){
    //       console.log('bar','foo')
    //     }
    // }
    // @traits(TFoo,TBar)
    // class MyClass{}
    // 报错
    // throw new Error('Method named: ' + methodName + ' is defined twice.');
    //        ^
    // Error: Method named: foo is defined twice.
    // 代码中,TFoo 和 TBar都有foo 方法,结果traits 修饰器报错
    // 一种解决方法是排除TBar的foo方法
    // import {traits,excludes} from 'traits-decorator';
    // class TFoo{
    //     foo(){
    //         console.log('foo')
    //     }
    // }
    // const TBar = {
    //     bar(){
    //         console.log('bar')
    //     },
    //     foo(){
    //         console.log('bar foo')
    //     }
    // }
    // @traits(TFoo,TBar::excludes('foo'))
    // class MyClass{
    //
    // }
    // let obj = new MyClass();
    // obj.foo();// foo
    // obj.bar();// bar
    // 代码中使用绑定运算符(::)在TBar 上排除foo方法,混入时,就不会报错

    // 另一种方法是为TBar 的foo方法起一个别名
    // alias 别名
    // import {traits,alias} from 'traits-decorator'
    //
    // class TFoo {
    //     foo(){
    //         console.log('foo')
    //     }
    // }
    // const TBar = {
    //     bar(){
    //         console.log('bar')
    //     },
    //     foo(){
    //         console.log('foo')
    //     }
    // };
    // @traits (TFoo,TBar::alias({foo:'aliasFoo'}))
    // class MyClass{
    //
    // }
    // let obj = new MyClass();
    // obj.foo();// foo
    // obj.aliasFoo();// foo
    // obj.bar();// bar
    // 代码为TBar的foo方法起了别名 aliasFoo,于是MyClass 也可以混入TBar的foo方法
    // alias 和 excludes 方法,可以结合使用
    // @traits(TExample::excludes('foo','bar')::alias({baz:'exampleBaz'}))
    // class MyClass{}
    // 代码中排除了TExample的foo方法,和bar方法,为baz方法其别名exampleBaz
    // as 方法则为上面的代码提供了另一种写法
    // @traits(TExample::as({excludes:['foo','bar'],alias:{baz:'exampleBaz'}}))
    // class Myclass{}

    // 8 Babel 转码器的支持
    // 安装 babel-core 和 babel-plugin-transform-decorators
    // 由于后者包括 babel-preset-stage-0 之中,
    // 所以改为暗转babel-preset-stage-0也可以
    // $ npm install babel-core babel-plugin-transform-decorators
    // 然后设置配置文件.babelrc
    // {
    //     "plugins":['transform-decorators']
    // }
    // 这时,Babel就可以对Decorator 转码
    // 脚本中打开的命令如下
    // babel.transform('code',{plugins:['transform-decorators']})
    // Babel 的官方网站提供一个在线转码器,只要勾选 Experimental,就能支持Decorator
    // 的在线转码

    //----------------------------------

    /**
     *
     * Module 的语法
     *
     * */
    // 1. 概述
    // ES6 模块的设计是尽量静态化,使得编译的时候能确定模块的依赖关系,
    // 以及输入和输出的变量
    // CommonJS 和AMD 模块,都只能在运行的时候确定这些东西
    // 比如,CommonJS模块就是对象,输入时候必须查找对象属性
    // CommonJS 模块
    // let {stat,exists,readFile} = require('fs');
    // // 等同于
    // let _fs = require('fs');
    // let stat = _fs.stat;
    // let exists = _fs.exists;
    // let readFile = _fs.readFile;
    // 代码中,实质上是整体加载fs模块,(即加载fs的所有方法),
    // 生成一个对象(_fs),然后再从这个对象上面读取三个方法,
    // 这种加载称为"运行加载",因为只有运行时才能得到这个对象,
    // 导致完全没有办法在编译时做静态优化
    // ES6 模块不是对象,而是通过export命令显式指定输出的代码
    // 再通过import命令输入
    // ES6 模块
    // import {stat, exists,readFile} from "fs"
    // 代码的实质是从fs模块加载了三个方法,其他方法不加载,
    // 这种加载称为:"编译时加载",或者静态加载,即ES6可以在编译时完成模块加载
    // 效率要比CommonJS模块的加载方式要高
    // 这也会导致没法应用ES6模块本身,因为它不是对象

    // 由于ES6模块是编译时加载,使得静态分析成为可能,
    // 这样可以进一步拓宽JavaScript 的语法,
    // 比如引入宏(macro)和类型检验(type system)这些只能靠静态分析实现的功能

    // ES6模块还有以下好处:
    // 1. 不再需要UMD 模块格式, 以后服务器和浏览器都会支持ES6模块格式
    //    目前通过工具库,已经可以做到这点
    // 2. 将来浏览器的新API就能用模块格式提供,不再必须做成全局变量或者navigator对象属性
    // 3. 不再需要对象作为命名空间(比如Math对象),未来这些功能可以通过模块提供
    //---------------------------------------------

    // 2.严格模式
    // ES6自动采用严格模式,不管是否有在模块头部加上"use strict"

    // 严格模式主要有以下限制
    // - 变量必须声明后再使用
    // - 函数的参数不能有同名属性,否则报错
    // - 不能使用with 语句
    // - 不能对只读属性赋值,否则报错
    // - 不能使用前缀为0表示八进制数,否则报错
    // - 不能删除不可删除的属性,否则报错
    // - 不能删除变量 delete prop, 只能删除属性 delete global[prop]
    // - eval 不会在它的外层作用域引入变量
    // - eval 和 arguments 不能被重新赋值
    // - arguments 不会自动反应函数参数的变化
    // - 不能使用 arguments.callee
    // - 不能使用 arguments.caller
    // - 禁止 this 指向全局对象
    // - 不能使用fn.caller 和fn.arguments 获取函数调用的堆栈
    // - 增加了保留字(比如 protected static 和 interface)
    // 这些限制,模块都必须遵守。
    // 其中,尤其需要注意的是this 的限制, ES6模块中,顶层的this 指向undefined
    // 即不应该在顶层代码使用this

    // 3. export 命令
    // 模块功能主要由两个命令构成 :export 和 import
    // export 命令用于规定模块的对外接口,import 命令用于输入其他模块提供的功能

    // 一个模块就是一个独立的文件,该文件内部的所有变量,外部无法获取
    // 如果希望外部能读取模块内部的某个变量,就必须使用export 关键字输出该变量
    // 例子:
    // profile.js
    // export var firstName = 'abc';
    // export var lastName = 'cds';
    // export var year = 1922;
    // 代码中保存用户信息,ES6将其视为一个模块,
    // 里面用export 命令对外部输出三个变量

    // export 的写法,除了像上面这样还有另外写法
    // profile.js
    // var firstName = '123';
    // var lastName = 'sdf';
    // var year = 1952;
    // export {firstName,lastName,year};
    // 代码中,在export命令后面,使用大括号指定所要输出的一组变量
    // 与上一种写法等价,优先考虑第二种写法,这样可以在脚本尾部,一眼看清所有输出变量

    // export 命令除了输出变量,还可以输出函数或者类 (class)
    // export function foo(x, y) {
    //     return x + y;
    // }
    // 代码输入了一个foo函数

    // 通常情况下,export 输出的变量就是本来的名字,但是可以使用as 关键字重命名
    // function v1() {
    //
    // }
    // function v2() {
    //
    // }
    // export {
    //     v1 as streamV1,
    //     v2 as streamV2,
    //     v2 as streamLastestVersion
    // }

    // 代码只用as 关键字,重命名了函数v1 和v2 的对外接口。
    // 重命名后,v2 可以使用不同的名字输出两次
    // 需要注意的是,export 命令规定的是对外的接口,
    // 必须与模块内部的变量建立一一对应关系

    // export 1;// 报错

    // var m = 1;
    // export m;//报错
    // 这两种写法都会报错,因为没有提供对外的接口,
    // 第一中写法直接输出1 ,第二种写法通过变量m,还是直接输出1 ,
    // 1 只是一个值,不是接口。

    // 正确写法
    // 写法一:
    // export var m = 1;

    // 写法二:
    // var m = 1;
    // export {m}

    // 写法三:
    // var n = 1;
    // export {n as m}
    // 上面写法为正确，规定了对外的接口m，
    // 其他的脚本可以通过这个接口,取到值1
    // 它们的实质是,在接口名与模块内部变量之间,建立一一对应的关系

    // 同样 function 和 class 的输出,也必须遵守这样的写法
    // function f() {
    //
    // }
    // export f; // 报错

    // 正确写法
    // export function f() {
    //
    // }
    // 或者
    // function f() {
    //
    // }
    // export {f};

    // 另外,export 语句输出的接口,与其对应的值是动态绑定关系
    // 即通过该接口,可以取到模块内部实时的值

    // export var foo = 'bar';
    // setTimeout(()=>foo = "baz",500)
    // 代码中输出变量foo ,值为bar,500毫秒后变成baz

    // 这一点与CommonJS 规范完全不同,CommonJS 模块输出的是值的缓存
    // 不存在动态更新

    // 最后,export 命令可以出现在模块的任何位置,只要处于模块顶层就可以.
    // 如果处于块级作用域内,就会报错,import 命令也是如此,
    // 这是因为处于条件代码块之中,就没法做静态优化了,违背了ES6 的设计初衷

    // function foo() {
    //     export default 'bar'// SyntaxError
    // }
    // foo()
    // 代码中,export 语句放在函数之中,结果报错
    // --------------------------------------

    // 4. import 命令

    // 使用export 命令定义了模块的对外接口后,
    // 其他JS文件可以通过import命令加载这个模块

    // main.js
    // import {firstName,lastName,year} from "./profile.js";
    // function setName(element) {
    //     element.textContent = firstName + lastName; // 引用
    // }

    // 代码的import命令,用于加载profile.js, 并从中输入变量,
    // import 命令接受一对大括号,里面指定要从其他模块导入的变量名
    // 大括号里面的变量名,必须与被导入模块(profile.js) 对外接口的名称相同

    // 如果想为输入的变量重新取一个名字,import 命令要使用as 关键字
    // 将输入的变量重命名
    // import {lastName as surname} from './profile.js';

    // import  命令输入的变量都是只读的,因为它的本质是输入接口,也就是说,
    // 不允许在加载模块的脚本里,改写接口
    // import {a} from './xxx.js';
    // a = {} // Syntax Error: 'a' is read-only
    // 代码中,脚本加载变量a,对其重新赋值就会报错
    // 因为a 是一个只读的接口。
    // 但是, 如果a 是一个对象,改写a 的属性是允许的

    // import {a} from './xxx.js';
    // a.foo = 'hello';
    // 代码中,a的属性可以成功改写,并且其他模块也可以读到改写的值
    // 不过这种写法很难查找错误,建议凡是输入的变量,都完全当作只读
    // 轻易不要改变它的属性

    // import 后面的from指定模块文件的位置,可以是相对路径,亦可以是绝对路径
    // .js 后缀可以省略,若只是模块名字,不带有路径,那么必须有配置文件,
    // 告诉JavaScript 引擎该模块的位置
    // import {myMethod} from 'util';
    // 代码中,util是模块文件名,由于不带有路径必须通过配置,告诉引擎怎么取到这个模块

    // 注意,import 命令具有提升效果,会提升到整个模块的头部,首先执行
    // foo();
    // import {foo} from 'myModule';
    // 代码不会报错,因为import 的执行早于foo的调用,这种行为的本质是
    // import 命令是编译阶段执行的,在代码运行之前

    // 由于 import 是静态执行,
    // 所以不能使用表达式和变量,这些只有在运行时,才能得到结果的语法结构

    // 报错
    // import {'f'+'oo'} from 'myModule';// 报错

    // 报错
    // let module = "myModule";
    // import {foo} from module;

    // 报错
    // if(x ===1){
    //     import{foo}from "module1"
    // }else{
    //     import {foo} from 'module2'
    // }
    // 上面写法都会报错,因为它们用到了表达式,变量和if 结构
    // 在静态分析阶段,这些语法都是没法得到值的
    // 最后 ,import 语句会执行所加载的模块,因此可以有以下写法
    // import 'lodash'
    // 上面代码仅仅是执行了lodash 模块,但是不输入任何值

    // 如果多次重复执行同一句import语句,只会执行一次,不会执行多次
    // import 'lodash'
    // import 'lodash'
    // 代码会加载两次,但是只会执行一次
    // import {foo} from 'my_module';
    // import {bar} from 'my_module';
    // // 等同于
    // import {foo,bar} from "my_module"
    // 代码中,虽然 foo和bar 在两句语句中加载,但是它们对应的是同一个my_module实例
    // 也就是说,import 语句是singleton 模式

    // 目前阶段,通过Babel,转码,CommonJS 模块的require 命令
    // 和 ES6 模块的import 命令,可以写在同一个模块里面
    // 但是最好不要这么做,
    // 因为import 在静态解析阶段执行,所以它是一个模块之中最早执行的。

    // require('core-js/modules/es6.symbol');
    // require('core-js/modules/es6.promise');
    // import React from 'React';

    // 5. 模块的整体加载
    // 除了指定加载某个输出值,还可以整体加载,即使用 星号 ( * ) 指定一个对象,
    // 所有输出值都加载在这个对象上
    // circle.js 文件,有两个输出方法,area 和circumference
    // circle.s
    // export function area(radius) {
    //     return Math.PI * radius * radius
    // }
    // export function circumference(radius) {
    //     return 2 * Math.PI * radius // radius 半径
    // }

    // 加载模块
    // import {area,circumference} from './circle'
    // console.log('面积',area(2));
    // console.log('圆周长',circumference(123))

    // 上面写法是逐一指定要加载的方法,整体加载的写法如下
    // import * as circle from "./circle";
    // console.log('面积',circle.area(2));
    // console.log('圆周长',circle.circumference(123))

    // 注意模块整体加载所在的那个对象(上例是circle),
    // 应该是可以静态分析的,所以不允许运行时改变。

    // // 不允许以下写法
    // import * as circle from './circle'
    // // 下面两行是不允许的
    // circle.foo = 'hello';// 改变属性
    // circle.area = function () {
    //
    // };// 改变属性

    // 6. export default 命令
    // 使用import 命令的时候,用户需要知道所要加载的变量名或者函数名
    // 否则无法加载。

    // 使用export default 命令,为模块指定默认输出,方便用户使用
    // export-default.js
    // export default function () {
    //     console.log("foo")
    // }
    // 上面代码是一个模块文件export-default.js，它的默认输出是一个函数。

    // 其他模块加载该模块时, import 命令可以为该匿名函数指定任意名
    // import-default.js
    // import customName from './export-default'
    // customName()
    // 上面的代码的import 命令,可以用任意名称指向export-default.js 输出的方法
    // 这时候就不需要知道原模块输出的函数名字,
    // 但是需要注意的是,这时候import 后面不使用大括号{}

    // export default 命令用在非匿名函数前面也是可以的
    // export default function foo() {
    //     console.log('ddd')
    // }
    // // 或者写成
    // function foo() {
    //     console.log('',23)
    // }
    // export default foo;
    // 代码中,foo 函数的函数名foo,在模块外部都是无效的
    // 加载的时候,视同匿名函数加载
    // 比较默认输出和正常输出
    // 第一组
    // export default function crc32() { // 输出
    //
    // }
    // import crc32 from 'crc32' // 输入

    // 第二组
    // export function crc32() {// 输出
    //
    // }
    // import {crc32} from 'crc32' // 输入
    // 代码的两组写法,第一组是使用export default 时, 对应的import 语句不需要使用大括号
    // 第二组是不是用export default时候,对应的import 语句需要使用大括号
    // export default 命令用于指定模块的默认输出
    // 显然,一个模块只能有一个默认输出,因此 export default 命令只能使用一次
    // 所以 , import 命令后面才不用加 大括号,因为只可能唯一对应 export default命令

    // 本质上,export default 就是输出一个叫做default 的变量或者方法
    // 然后系统允许你为它取任意名字。
    // 以下写法有效
    // function add(x,y){
    //     return x * y;
    // }
    // export {add as default}
    // 等同于
    // export default add

    // // app.js
    // import {default as foo} from 'module';
    // // 等同于
    // import foo from 'modules'
    // 因为export default 命令其实只是输出一个叫做default的变量
    // 所以它后面不能跟变量声明语句
    // //right
    // export var a = 1;
    // // right
    // var a = 1;
    // export default a ;
    // // wrong
    // export default var a = 1;
    // 最后一行代码报错, export default a 的含义是将变量a 的值赋值给变量default
    // 所以最后一种写法会报错
    // 同样,因为export default 命令的本质是将后面的值赋值给default 变量,
    // 所以可以直接将一个值写在export default 之后
    // 正确
    // export default 42;
    // 报错
    // export 42
    // 代码中,后一句报错是因为没有指定对外的接口,而前一句指定对外接口为default

    // export default 命令,输入模块时,非常直观,以输入lodash 模块为例子
    // import _ from 'lodash';

    // 如果想在一条import 语句中,同时输入默认方法和其他接口,也可以写成下面
    // import _,{each,each as forEach} from 'lodash'
    // 对应上面代码 export 语句如下
    // export default function (obj) {
    //
    // }
    // export function each(obj, iterator, context) {
    //     // .....
    // }
    // export {each as forEach};
    // 代码中最后一行的意思是,暴露出forEach 接口,默认指向each接口,
    // 即forEach 和 each 指向同一个方法
    // export default 也可以用来输出类

    // //MyClass.js
    // export default class {
    //     //...
    // }
    //
    // // main.js
    // import MyClass from 'MyClass';
    // let o = new MyClass

    // 7. export 与 import 的复合写法
    // 一个模块中,先输入后输出同一个模块,import 语句可以与export 语句写在一起
    // export {foo,bar} from 'my_module';
    //
    // // 可以简单理解为
    // import {foo,bar} from 'my_module';
    // export {foo,bar}
    // 代码中,export 和import 语句可以结合在一起,写成一行
    // 注意: 写成一行后,foo和bar 实际上并没有被导入当前模块
    // 只是相当于对外转发了这两个接口,导致当前模块不能直接使用foo 和bar

    // 模块的接口改名和整体输出,可以采用下面写法
    // 接口改名
    // export {foo as myFoo} from 'my_module';
    // 整体输出
    // export * from 'my_module'

    // 默认接口的写法如下
    // export {default} from 'foo'

    // // 具名接口改为默认接口的写法如下
    // export {es6 as default} from './someModule';
    // //等同于
    // import {es6}  from './someModule';
    // export default es6;

    //同样,默认接口也可以改为具名接口
    // export {default as es6} from './someModule'

    // 下面三种import 语句,没有对应的复合写法
    // import * as someIdentifier from 'someModule';
    // import someIdentifier from 'someModule';
    // import someIdentifier,{nameIdentifier} from 'someModule'

    // 为做到形式对称,--提案,提出补上这三种复合写法
    // export * as someIdentifier from 'someModule';
    // export someIdentifier from 'someModule'
    // export someIdentifier,{namedIdentifier} from 'someModule';

    // 8. 模块的继承
    // 模块之前可以继承
    // 假设有一个circlePlus 模块,继承 circle 模块
    // circlePlus.js
    // export * from 'circle'
    // export var e = 2.1444;
    // export default function (x) {
    //     return Math.exp(x)
    // }
    // 代码中的export * ,表示再输出circle 模块的所有属性和方法
    // 注意,export * 命令会忽略 circle 模块的default 方法,然后,
    // 上面代码又输出了自定义的e 变量和默认fangfa

    // 这时也可以将circle 的属性或者方法,改名后在输出
    // export {area as circleArea} from 'circle'
    // 代码表示,只输出circle模块的area 方法,且将其改名为circleArea
    // 加载上面模块的写法如下
    // main.js
    // import * as math from 'circlePlus'
    // import exp from 'circlePlus'
    // console.log(exp(math.e));
    // 代码中import exp 表示,将circlePlus 模块的默认方法加载为exp 方法

    //-----------------------

    // 9. 跨模块常量
    // const 声明的变量只在当前代码块有效,
    // 如果想设置跨模块的常量(即跨多个文件),或者说一个值要被多个模块共享
    // 可以采用以下写法

    // // constants.js 模块
    // export const A = 1;
    // export const B = 2;
    // export const C = 3;
    // // test1.js 模块
    // import * as constants from './constants'
    // console.log(constants.A)// 1
    // // test2.js 模块
    // import {A,B} from './constants'
    // console.log(A );// 1
    // console.log(B );// 2

    // 如果要使用的常量较多,可以建立一个专门的constants 目录,
    // 将各种常量写在不同的文件里面,保存在该目录下
    // constants/db.js
    // export const db = {
    //     url:'http://api.com:6500',
    //     adminName:'admin',
    //     adminAge :'123'
    //     }

    // constants/user.js
    // export const users = [
    //     'root','admin','editor'
    //     ]
    // 然后讲这些文件输出的常量,合并在index.js
    // constants/index.js
    // export {db} from './db';
    // export {users} from './users';

    // 使用的时候,直接加载index.js 就可以
    // script
    // import {db,users} from './index';

    // 10 import()

    // import 命令会被JavaScript 引擎静态分析,
    // 先于模块内的其他模块执行(叫做'连接'更合适),所以以下代码会报错
    // 报错
    // if(x ===2){
    //     import MyModule from 'myModule';
    // }
    // 代码中,引擎处理import 语句是在编译时,这是不会去分析或执行if 语句
    // 所以import 语句放在if 代码块之中毫无意义,
    // 因此会报句法错误,而不是执行时错误,也就是说,import 和 export 命令只能在模块顶层
    // 不能在代码块之中(比如,在if 代码块之中,或者函数中)

    // 这样的设计,有利于编译器提高效率,但也导致无法在运行时加载模块,
    // 在语法上,条件加载就不可能实现
    // 如果import 命令要取代Node 的require 方法,就形成了一个障碍
    // 因为require 是运行时加载模块,import 命令无法取代require 的动态加载功能

    // const path = './'+ fileName;
    // const myModule = require(path);
    // 这里语句就是动态加载,require 到底加载哪个模块,只有运行时才能知道
    // import 语句做不到这一点

    // 提案: 建议引入 import () 函数,完成动态加载
    // import(specifier)
    // 代码中,import 函数的参数specifier, 指定所要加载的模块的位置
    // import 命令能够接受什么参数,import() 函数就能接受什么参数,
    // 两者区别主要是后者为动态加载

    // import () 返回一个promise 对象
    // 例子:
    // const main = document.querySelector('main');
    // import (`./section-module/${someVariable}.js`)
    //     .then(module=>{
    //         module.loadPageInto(main);
    //     })
    //     .catch(err=>{
    //         main.textContent = 'err.message'
    //     })

    // import() 函数可以用在任何地方,不仅仅是模块,
    // 非模块的脚本也可以使用,
    // 它是运行时执行,也就是说,什么时候运行到这一句,,也会加载指定的模块
    // 另外import() 函数与所加载的模块没有静态连接关系
    // 这点与import 语句不相同
    // import() 类似于Node 的require 方法,区别主要是import 是异步加载,后者是同步加载

    // import() 适用场合
    // (1) 按需加载
    // import() 可以在需要的时候,再加载某个模块
    // button.addEventListener('click', event => {
    //     import ('./dialogBox.js')
    //         .then(dialogBox => {
    //             dialogBox.open
    //         }).catch(err => {
    //         console.error(err)
    //     })
    // })
    // 代码中,import() 方法放在click 事件的监听函数中,
    // 只有用户点击按钮,才会加载这个模块

    // (2) 条件加载
    // import() 可以放在if 代码块,根据不同的情况,加载不同的模块
    // if (condition) {
    //     import('moduleA').then(moduleA => {
    //         moduleA.doSomeThing();
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // } else {
    //     import ('moduleB')
    //         .then(moduleB => moduleB.doElseThing())
    //         .catch(err=> console.error(err))
    // }
    // 代码中,满足条件加载模块A,否则加载模块B

    // (3) 动态的模块路径
    // import() 允许模块路径动态生成
    // import (f()).then(fModule => {
    //         fModule.doSome();
    //     }
    // ).catch(err => {
    //     console.error(err)
    // });
    //
    // function f(url) {
    //     return url
    // }
    // 代码中,根据函数f 的返回结果,加载不同的模块

    // 注意点
    // import() 加载模块成功后,这个模块会作为一个对象,
    // 当作then 方法的参数。
    // 因此可以使用对象的解构赋值的语法,获取输出接口
    // import ('./myModule.js')
    //     .then(({export1,export2})=>{
    //         //...
    //     })
    // 代码中,export1 和export2 都是myModule.js 的输出接口,可以解构获得
    // 如果模块有default 输出接口,可以用参数直接获得
    // import ('./module.js')
    //     .then(moduleName => moduleName.default)
    //     .catch(err=>console.error(err))
    // 上面代码也可以使用具名输入的形式
    // import ('./myModule.js')
    //     .then(({default:theDefault})=>{
    //         console.log(theDefault)
    //     })
    //     .catch(err=>console.error(err))

    // 一次同时加载多个模块,可以采用以下写法
    // Promise.all([
    //     import('module1.js'),
    //     import('module2.js'),
    //     import('module3.js'),
    //     import('module4.js')
    // ])
    //     .then(([module1,module2,module3,module4])=>{
    //         // ...
    //     })
    //     .catch(err=>{
    //         console.error(err)
    //     })

    // import() 也可以用在async 函数之中
    // async function main() {
    //     const myModule = await import('./myModule1.js');
    //     const {export1,export2} = await import('./myModule2.js');
    //     const [module1,module2,module3] = await Promise.all([
    //         import('./module1.js'),
    //         import('./module2.js'),
    //         import('./module3.js'),
    //     ])
    // }
    // main()

    //---------------------------------------------------------------


    /**
     *
     * 23. Module的加载实现
     *
     * */
    // 介绍如何在浏览器和Node 之中加载ES6模块,
    // 以及实际开发容易遇到的问题 (比如循环加载)

    // 1.浏览器加载
    // 传统方法
    // HTML网页中,浏览器通过<script>标签加载JavaScript 脚本
    // 默认情况下,浏览器是同步加载JavaScript 较bane,即渲染引擎遇到<script>标签就会停下来
    // 等到执行完脚本,再继续向下渲染,如果是外部脚本,还必须加入下载时间
    // 脚本体积大,会导致页面'卡死,
    // <script src='path/abc.js' defer></script>
    // <script src='path/abc.js' async></script>
    // 代码中,<script>标签加入defer或者async属性,脚本就会异步加载,渲染引擎遇到这一行命令
    // 就会开始下载脚本,但不会等它下载和执行,而是直接执行后面的命令

    // defer 与 async 的区别是: defer 要等到页面在内存中正常渲染结束
    // (DOM 结构完全生成,以及其他脚本执行完成),才会执行
    // async 一旦下载完成,渲染引擎就会中断渲染,执行这个脚本后,再继续渲染,
    // defer 是'渲染完再执行'
    // async 是'下载完就执行'
    // 另外,如果有多个defer脚本,会按照它们在页面中出现的顺序加载
    // 而多个async脚本则不能保证加载顺序

    // 加载规则
    // 浏览器加载ES6 模块,也使用 <script> 标签,但是要加入type = "module"属性
    // <script type='module' src = './foo.js'></script>
    // 代码往页面中插入一个模块foo.js,由于type 属性设为module ,所以浏览器知道这是一个ES6模块
    // 浏览器对于带有type = 'module' 的 script ,都是异步加载,不会造成堵塞浏览器,
    // 即等到整个页面渲染完,再执行模块脚本,等同于打开<script> 标签的defer 属性
    // module 等同于 defer
    // 如果网页中有多个<script type = 'module'> ,它们会按照在页面中出现的顺序依次执行
    // <script> 标签的async 属性也可以打开,这时候,只要加载完成,渲染引擎就会中断渲染立即执行脚本
    // 执行完成后,再恢复渲染
    // <script type = 'module' async></script>
    // 一旦使用了async 属性,<script type = 'module'>就不会按照在页面中出现的顺序执行,
    // 而是只要该模块加载完成,就执行该模块

    // ES6 模块允许内嵌在网页中,语法行为与加载外部脚本完全一致
    // <script type='module'>
    //     import utils from './utils.js'
    // </script>

    // 对于外部的模块脚本,(上例是foo.js),有几点需要注意:
    /**
     * 外部的模块脚本,注意:
     * */
    // - 代码是在模块作用域之中指定,而不是在全局作用域中执行。
    //   模块内部的顶层变量,外部不可见
    // - 模块脚本自动采用严格模式,不管有没有声明 use strict
    // - 模块之中,可以使用import 命令加载其他模块,(.js 后缀不可省略,需要提供绝对URL 或者
    //   相对URL),也可以使用export 命令输出对外接口
    // - 模块之中,顶层this关键字返回undefined,而不是指向window。
    //   也就是说,在模块顶层使用this关键字是无意义的
    // - 同一模块如果加载多次,只执行一次

    // 示例
    // import utils from 'http://example.com/utils.js'
    // const x = 1;
    // console.log(x === window.x); // false
    // console.log(this === undefined); // true

    // 利用顶层this 等于 undefined这个语法点,可以侦测当前代码是否在ES6 模块之中
    // const isNotModuleScript = this !== undefined;
    // console.log(isNotModuleScript) // 不是模块的情况下为true

    // 2. ES6 模块与 CommonJS模块的差异

    // ES6 模块与 CommonJS 模块完全不同
    // 它们有两大差异
    // - CommonJS 模块输出的是一个值的拷贝,ES6模块输出的是值的引用
    // - CommonJS 模块是运行时加载,ES6 模块是编译时输出接口

    // 第二个差异是因为 CommonJS 加载的是一个对象(即 module.exports 属性)
    // 该对象只有在脚本运行完了才会生成。
    // 而ES6 模块不是对象,它的对外接口只是一种静态定义,在代码静态解析阶段就会生成

    // 第一个差异解释:
    // CommonJS 模块输出的是值的拷贝,也就是说,一旦输出一个值,
    // 模块内部的变化就影响不到这个值。

    // 例子

    // lib.js
    // let counter = 3;
    // function incCounter(){
    //     counter++;
    // }
    // module.exports = {
    //     counter:counter,
    //     incCounter:incCounter,
    // }
    // 代码输出内部变量counter 和改写这个变量的内部方法incCounter

    // 然后在main.js里面加载这个模块
    // main.js
    // let mod = require('./lib.js');
    // console.log(mod.counter);// 3
    // mod.incCounter();
    // console.log(mod.counter);//3
    // 代码说明,lib.js 模块加载以后,它的内部变化就影响不到输出的mod.counter
    // 这是因为mod.counter 是一个原始类型的值,会被缓存,
    // 除非写成一个函数,才能得到内部变动后的值

    // lib.js
    // let counter = 3;
    // function incCounter() {
    //     counter++;
    // }
    // module.exports = {
    //     get counter(){
    //         return counter
    //     },
    //     incCounter:incCounter,
    // }
    // 代码中输出的counter 属性实际上是一个取值器函数,在执行main.js
    // 就可以正确读取内部变量counter的变动了
    // 结果分别为3、4

    // ES6 模块的运行机制与CommonJS不一样,
    // JS 引擎对脚本静态分析的时候,遇到模块加载命令import,就会生成一个只读引用
    // 等到脚本真正执行时,再根据这个只读引用,到被加载的那个模块里面去取值
    // 换句话说,ES6 的import 有点像Unix 系统的"符号连接",原始值变了,
    // import 加载的值也会跟着变
    // 因此ES6 模块是动态引用,并且不会缓存值,模块里面的变量绑定其所在的模块

    // 例子:
    // // lib.js
    // export let counter = 3;
    // export function incCounter() {
    //     counter++;
    // }
    //
    // // main.js
    // import {counter,incCounter} from './lib.js';
    // console.log(counter); // 3
    // incCounter();
    // console.log(counter); // 4
    // 代码说明,ES6 模块输入的变量counter 是活的,完全反应其所在模块lib.js内部的变化

    // 另外出现在export 一节例子
    // m1.js
    // export var foo = 'bar';
    // setTimeout(() => foo = 'baz', 500);
    //
    // // m2.js
    // import {foo} from './m1.js';
    // console.log(foo);
    // setTimeout(()=>console.log(foo),500);
    // 代码中,m1.js 的变量foo,在刚加载时候等于bar,过了500毫秒,又变为等于baz
    // 结果为:
    // bar
    // baz
    // 代码结果表明,ES6 模块不会缓存运行结果,而是动态地去被加载的模块取值
    // 并且变量总是绑定其所在的模块
    // 由于ES6 输入的模块变量只是一个'符号连接',所以这个变量是只读的,对她进行重新赋值会报错
    // lib.js
    // export let obj = {}
    // // main.js
    // import{obj} from './lib';
    // obj.prop = 123; // 不会报错
    // obj = {}; // 报错TypeError
    // 代码中main.js 从lib.js 输入变量obj,可以对obj添加属性,
    // 但是重新赋值会报错
    // 因为变量obj 指向的地址是只读的,不能重新赋值
    // 这就好比main.js 创造了一个名为obj 的const 变量
    // 最后,export 通过接口,输出的是同一个值
    // 不同的脚本加载这个接口,得到的都是同样的实例

    // mod.js
    // function C(){
    //     this.sum = 0;
    //     this.add = function () {
    //         this.sum += 1;
    //     }
    //     this.show = function () {
    //         console.log(this.sum)
    //     }
    // }
    // export let c = new C();
    // 上面脚本mod.js 输出的是一个C的实例,不同的脚本加载这个模块得到的都是同一个实例
    // // x.js
    // import {c} from './mod';
    // c.add();
    //
    // // y.js
    // import {c} from './mod';
    // c.show();
    //
    // // main.js
    // import './x';
    // import './y';
    // 执行main.js 输出的是 1
    // 证明x.js 和y.js 加载的都是C的同一个实例

    // 3.Node 加载

    // 概述
    // Node 对ES6模块的处理比较麻烦,因为它有自己的CommonJS 模块格式,与ES6模块格式不兼容。
    // 解决方案:
    // 将两者分开,ES6模块和 CommonJS采用各自的加载方案

    // Node 要求ES6模块采用.mjs后缀文件名,也就是说,只要脚本文件里面使用import 或者export命令
    // 那么就必须采用.mjs后缀名。
    // require 命令不能加载.mjs 文件,会报错
    // 只有import 命令才可以加载 .mjs 文件,
    // 反过来,.mjs文件中也不能使用require命令,必须使用import
    // 目前这项功能还在试验阶段,8.5.0以上版本,要用--experimental-modules参数才能打开该功能
    // node --experimental-modules my-app.mjs

    // 为了与浏览器的import 加载规则相同,Node的.mjs文件支持URL路径
    // import './foo?query=1';
    // 上面代码,中脚本路径带有参数?query=1,Node 会按URL 规则解读,
    // 同一脚本只要参数不同就会被加载多次,并且保存成不同的缓存,
    // 由于这个原因,只要文件名中含有 : / % / # / ? 等特殊符号,最好对这些字符进行转义

    // 目前Node的import 命令只支持加载本地模块(file: 协议),不支持加载远程模块
    // 如果模块名不含路径,那么import 命令回去node_modules 目录寻找模块
    // import 'baz';
    // import 'abc/312';

    // 如果模块名包含路径,那么import 命令会按照路径去寻找这个名字的脚本文件
    // import 'file:///etc/config/app.json'
    // import './foo'
    // import './foo?search';
    // import '../bar'
    // import '/bar'

    // 如果脚本文件省略了后缀名,比如import './foo',
    // Node 会依次尝试四个后缀名 ./foo.mjs , ./foo.js , ./foo.json , ./foo.node
    // 如果这些脚本文件都不存在,Node就会去加载 ./foo/package.js 的main字段指定的脚本
    // 如果 ./foo/package.json 不存在或者没有main字段
    // 那么就会依次加载 ./foo/index.mjs , ./foo/index.js , ./foo/index.json , ./foo/index.node
    // 如果这四个文件还是不存在,就会抛出错误

    // Node 的import 命令是异步加载,这一点与浏览器的处理方法相同

    // 内部变量
    // ES6 模块应该是通用的,同一个模块不用修改,就可以在浏览器和服务器环境上使用
    // 为了达到这个目标,Node 规定ES6模块之中不能使用CommonJS 模块的特有的一些内部变量

    // 首先就是this 关键字。
    // ES6模块之中,顶层this 指向undefined;
    // CommonJS 模块的顶层this 指向当前模块,这是两者的重大差异
    // 其次 , 以下这些顶层变量在ES6 模块之中是不存在的
    // - arguments
    // - require
    // - module
    // - exports
    // - __filename
    // - __dirname
    // 如果一定要用这些变量,变通方法就是写一个CommonJS模块输出这些变量
    // 然后再用ES6 模块加载这个CommonJS模块
    // 但是这样的话, 该ES6 模块就不能直接用于浏览器,不推荐这样子做

    // // expose.js
    // module.exports = {__dirname};
    // // user.mjs
    // import expose from './expose.js';
    // const {__driname} = expose;
    // 代码中,expose.js 是一个CommonJS模块,输出变量__dirname,
    // 该变量在ES6 模块之中不存在,ES6 模块加载expose.js ,就可以得到__dirname

    // ES6 模块加载 CommonJS模块
    // CommonJS模块的输出都定义在module.exports 这个属性上。
    // Node 的import 命令加载CommonJS模块,Node 会自动将module.exports 属性当作模块的默认输出
    // 即等同于export default xxx

    // 一个CommonJS模块
    // // a.js
    // module.exports = {
    //     foo:'2',
    //     bar:'sd',
    // }
    // // 等同于
    // export default {
    //     foo:'2',
    //     bar:'sd',
    // }

    // import 命令加载上面的模块,module.exports 会被视为默认输出
    // 即import 命令实际上输入的是这样的一个对象{default:module.exports}
    // 一共有三种写法,可以拿到CommonJS 模块的module.exports

    // // 写法一
    // import baz from './a';
    // // baz = {foo:'2',bar:'sd'}

    // // 写法二
    // import {default as baz } from './a';
    // // baz = {foo:'2',bar:'sd'}

    // 写法三
    // import * as baz from './a';
    // baz = {
    //     get default(){
    //         return module.exports;
    //     },
    //     get foo(){return this.default.foo}.bind(baz),
    //     get bar(){return this.default.bar}.bind(baz)
    // }

    // 上面代码的第三种写法,可以通过baz.default 拿到module.exports
    // foo 属性和bar 属性就是可以通过这个方法拿到了module.exports

    // 例子
    // // b.js
    // module.exports = null;
    //
    // // es.js
    // import foo from './b';
    // // foo = null
    //
    // import * as bar from './b';
    // // bar = {default :null}

    // 代码中,es.js 采用第二种写法,要通过bar.default 这样的写法,,才能拿到module.exportsd

    // // c.js
    // module.exports = function two() {
    //     return 2
    // }
    //
    // // es.js
    // import foo from './c';
    // foo(); // 2
    //
    // import * as bar from './c';
    // bar.default();// 2
    // bar(); // throw ERROR  bar is not a function
    // 代码中bar 本身是一个对象,不能当作函数调用,只能通过bar.default 调用

    // CommonJS 模块 的输出缓存机制,在ES6 的加载方式下依旧有效
    // foo.js
    // module.exports = 21;
    // setTimeout(_ =>module.exports = null);
    // 代码中,对于加载foo.js 的脚本,module.exports 将一直是123,而不会变成null
    // 由于ES6 模块是编译时确定输出接口, CommonJS 模块 是运行时确定输出接口,
    // 所以采用import 命令加载CommonJS 模块时候,不允许采用下面的写法
    // 不正确的
    // import {readfile} from './fs'
    // 上面的写法不正确,是因为fs 是CommonJS 格式,只有在运行时才能确定readfile接口
    // 而import 命令要求编译时就确定这个接口,解决方法就是改为整体输入

    // 正确写法一
    // import * as express from 'express';
    // const app = express.default()

    // 正确写法二
    // import express from 'express';
    // const app = express();

    // CommonJS 模块 加载ES6 模块

    // CommonJS 模块加载 ES6 模块 不能使用require 命令
    // 而要使用import() 函数。
    // ES6 模块所有的输出接口,会成为输入对象的属性

    // es.mjs
    // let foo = { bar : 'my-default'};
    // export default foo;
    // foo = null;

    // cjs.js
    // const es_namespace = await import ('./es');
    // es_namespace = {
    //     get default(){
    //         //...
    //     }
    // }
    // console.log(es_namespace.default);
    //  //{bar: 'my-default'}
    // 代码中,default 接口变成 es_namespace.default 属性。
    // 另外,由于存在缓存机制,es.mjs 对foo 的重新赋值没有在模块外部反应出来

    // 另一个例子
    // es.js
    // export let foo = {bar : "123"};
    // export {foo as bar};
    // export function f() {
    //
    // }
    // export class C{}

    // cjs.js
    // const es_namespace = await import ('./es');
    // es_namespace = {
    //     get foo(){
    //         return foo;
    //     },
    //     get bar(){
    //         return foo;
    //     },
    //     get f(){return f;},
    //     get C(){return C;},
    // }

    // 4. 循环加载

    // "循环加载"(circular dependency) 指的是,a脚本执行依赖b脚本
    // 而 b 脚本的执行有依赖 a 脚本

    // // a.js
    // var b = require('b');
    //
    // // b.js
    // var a = require('a');

    // 通常,循环加载表示存在强耦合,如果处理不好,可能导致递归加载
    // 使得程序无法执行,因此应该避免出现

    // 但实际上很难避免,尤其是依赖关系复杂的大项目,很容易出现a 依赖 b
    // b 依赖 c,c 又依赖a 这样的情况,这意味着,模块加载机制必须考虑 "循环加载"的情况
    // 对于JS 来说,两种模块格式 CommonJS 和 ES6 ,处理"循环加载"的方法不一样,返回的结果不一样

    // CommonJS 模块的加载原理
    // CommonJS 的一个模块就是一个脚本文件,require 命令第一次加载该脚本,就会执行整个脚本
    // 然后在内存中生成一个对象 假设为a
    // a = {
    //     id: '123',
    //     exports: {
    //         //...
    //     },
    //     loaded:true,
    // }
    // 上面代码就是Node 内部加载模块后生成的一个对象,该对象的id属性就是模块名
    // exports 属性是模块输出的各种接口,
    // loaded 属性是一个布尔值,表示该模块的脚本是否加载完毕
    // 其他属性,这里忽略

    // 以后需要用到这个模块的时候,就会到exports 这个属性上取值
    // 即使再次执行require 命令,也不会在此执行该模块,而是到缓存中取值
    // 也就是说,CommonJS模块无论挤在多少次,
    // 都只会在第一次加载时运行一次,以后再加载,
    // 就返回第一次运行的结果,除非手动清除系统缓存

    // CommonJS 模块 的循环加载
    // CommonJS 模块的重要特性是加载时执行,即脚本代码在require的时候,就会全部执行
    // 一旦出现某个模块被 "循环加载",就只输出已经执行的部分
    // 还未执行的部分不会输出
    // 官方例子
    // a.js
    // export.done =false;
    // var b = require('./b.js');
    // console.log('在a.js 之中,b.done = %j ',b.done);
    // exports.done = true;
    // console.log('a 执行完毕')
    // 代码中,a.js 脚本先输出一个done变量,然后加载另一个脚本b.js
    // 注意此时a.js 代码就停在这里,等待b.js 执行完毕,再往下执行
    // 再看 b.js 的代码
    // export.done = false;
    // var a = require ('./a.js');
    // console.log('在 b.js 之中，a.done = %j', a.done);
    // exports.done = true;
    // console.log('b.js 执行完毕');
    // 上面代码中,b.js 执行到第二行,就会去加载a.js,
    // 这时候就发生了"循环加载"。
    // 系统会去a.js 模块对应对象的exports 属性取值,可是因为a.js 还没执行完
    // 从exports 属性只能取回已经执行的部分而不是最后的值
    // a.js 已经执行的部分,只有一行
    // export.done = false;
    // 因此对于b.js来说,它从a.js 只输入一个变量done,值为false

    // 然后,b.js 接着往下执行,等到全部执行完毕,再把执行权交还给a.js。
    // a.js 接着往下执行,直到执行完毕。
    // 例子, main.js
    // var a = require ('./a.js');
    // var b = require ('./b.js');
    // console.log('在main.js 中,a.done = %j,b.done = %j',a.done, b.done);
    // 执行main.js 运行结果如下
    // 在 b.js 中,a.done = false
    // b.js 执行完毕
    // 在a.js 中,b.done = true
    // a.js 执行完毕
    // 在main.js中,a.done = true,b.done = true

    // 上面代码证明两件事情,
    // 一是,在b.js ,中 a.js 没有执行完毕,只执行了第一行
    // 二是,main.js 执行到第二行的时候,不会再执行b.js,而是输出缓存的b.js 的执行结果
    //      即它的第四行
    // export.done = true
    // 总之,CommonJS 输入的是被输出值的拷贝,而不是引用

    // 另外,由于CommonJS 模块遇到循环加载时,返回的是当前已经执行的部分的值
    // 而不是代码全部执行后的值,两者可能会有差异,所以,输入变量的时候,必须非常小心
    // var a = require('a'); // 安全写法
    // var foo = require('a').foo; // 危险写法
    //
    // exports.good = function (arg) {
    //     return a.foo('good',arg) // 使用的是 a.foo 的最新值
    // }
    // exports.bad = function (arg) {
    //     return foo('bad',arg) // 使用的是一个部分加载时的值
    // }
    // 上面危险写法,如果发生循环加载,require ('a').foo 的值很可能后面会被改写
    // 改用require('a')会更加保险


    // ES6 模块的循环加载
    // ES6 处理"循环加载"与CommonJS 有本质的不同
    // ES6 模块是动态引用,如果使用import 从一个模块加载变量(即 import foo from 'foo'),
    // 那些变量不会被缓存,而是成为一个指向被加载模块的引用,
    // 需要开发者自己保证,真正取值的时候能够取到值

    // // a.mjs
    // import {bar} from './b';
    // console.log('a.mjs');
    // console.log(bar);
    // export let foo = 'foo';
    //
    // // b.mjs
    // import {foo} from './a';
    // console.log('b.mjs');
    // console.log(foo);
    // export let bar = 'bar';

    // 代码中,a.mjs 加载 b.mjs ,b.mjs 又加载了 a.mjs ,构成循环加载,执行a.mjs
    // 结果如下
    // b.mjs
    // ReferenceError: foo is not defined
    // 上面代码中,执行a.mjs 以后会报错,foo 变量未定义

    // 原因:
    // 首先 , 执行a.mjs 以后,引擎发现了它加载了b.js ,因此会优先执行b.mjs
    // 然后再执行a.mjs, 接着,执行b.mjs 的时候,已知它从a.mjs 输入了foo 接口,
    // 这时不会去执行a.mjs ,而是认为这个接口已经存在,继续往下执行
    // 执行到第三行 console.log(foo) 的时候,才发现这个接口根本没定义,因此报错
    // 解决这个问题的方法,就是让b.mjs 运行的时候,foo 已经有定义了
    // 这可以通过将foo 改写为函数来解决

    // // a.mjs
    // import {bar} from './b';
    // console.log('a.mjs');
    // console.log(bar());
    // function foo() {
    //     return 'foo'
    // }
    // export { foo }
    //
    // // b.mjs
    // import {foo} from './a';
    // console.log('b.mjs');
    // console.log(foo());
    // function bar (){
    //     return 'bar'
    // }
    // export {bar};

    // 这时候再执行a.mjs 就可以得到预期结果
    // b.mjs
    // foo
    // a.mjs
    // bar

    // 这是因为函数具有提升作用,在执行import {bar} from './b'时候,
    // 函数foo 已经有定义了,
    // 所以 b.mjs 加载的时候不会有报错
    // 这也意味着,如果把函数foo 改写成函数表达式,也会报错

    // // a.mjs
    // import {bar} from './b';
    // console.log('a.mjs');
    // console.log(bar());
    // const foo = () => 'foo';
    // export {foo}
    // 代码第四行,改成了函数表达式,就不具有提升作用,执行就会报错

    // ES6 模块加载器SystemJS 给出的例子
    // // even.js
    // import {odd} from './odd';
    // export var counter = 0;
    // export function even(n) {
    //     counter++;
    //     return n === 0 || odd( n - 1 )
    // }
    //
    // // odd.js
    // import {even} from './even';
    // export function odd(n) {
    //     return n !== 0 && even( n - 1);
    // }
    // 代码中,even.js 里面的函数,even 有一个参数n,只要不等于,就会减去1 ,
    // 传入加载的odd (), odd.js 也会做类似操作
    // 结果如下
    // even 偶数,odd 奇数
    // import * as m from './even.js';
    // let result = m.even(10);
    // console.log(result);// true
    // console.log(m.counter);// 6
    // result = m.even (20);
    // console.log(result ) ; // 20
    // console.log(m.counter); //17  (11 + 6)
    // 代码中,参数n 从 10 变为0 的过程中,even()一共会执行六次.
    // 所以变量会等于6
    // 第二次调用的even() ,参数n 从20 变为0 ,even() 一共会执行11次
    // 加上前面6次,所以变量counter 等于17


    // 上面例子,改写成CommonJS,就无法执行,会报错
    // var odd = require('./odd');
    // var counter = 0;
    // exports.counter = counter;
    // exports.even = function (n) {
    //     counter++;
    //     return n === 0 || odd(n - 1)
    // }
    //
    // // odd.js
    // var even = require('./even').even;
    // module.exports = function (n) {
    //     return n != 0 && even(n - 1)
    // }
    // 上面代码中,even.js 加载odd.js ,而odd.js 又去加载even.js ,形成循环加载
    // 这时候,执行引擎就会输出even.js 已经执行的部分( 不存在任何结果 ),
    // 所以在odd.js 中变量even 等于null,等到后面调用even(n-1) 就会报错
    // var m = require ('./even');
    // m.even(10);
    // TypeError :even is not a function


    // 5. ES6 模块转码
    // 暂时忽略 unFinish
    //--------------------------------------------------------------


    /**
     *
     * 24 . 编程风格
     *
     * */

    /*
    * 块级作用域
    * */

    // (1) let 取代 var
    // ES6 提出两个新的声明变量的命令: let 和const ,
    // 其中let 完全可以取代var, 因为两者语义相同,而且let 没有副作用
    // 'use strict'
    // if(true){
    //     let x = 'hello'
    // }
    // for (let i = 0; i < 10 ; i++){
    //     console.log(i);
    // }
    // 上面代码如果用var 代替let ,实际上就声明了两个全局变量,这显然不是本意,
    // 变量应该只在其声明的代码块内有效,var 做不到这点
});























