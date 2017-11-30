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
    /*---------------------------------------------------------------------*/


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


//    function *gen() {
//        yield 'hello';
//        yield 'world';
//        return true;
//    }
//    //以上代码定义了一个简单的 generator，看起来就像一个普通的函数，区别是function关键字后面有个*号，函数体内可以使用yield语句进行流程控制。
//
//var iter = gen();
//    var a = iter.next();//跑第一步,到hello后,停止,返回hello;
//    console.log(a); // {value:'hello', done:false}
//    var b = iter.next();//跑第二步,到world后,停止,world;
//    console.log(b); // {value:'world', done:false}
//    var c = iter.next();//跑第三步,true,停止,true;
//    console.log(c); // {value:true, done:true}
//    var d = iter.next();//之后返回都是undefined;
//    var e = iter.next();
//    console.log(d,e)


//-------------------默认值--------------------------------
//解构赋值允许指定默认值。
//    let [foo = 1]= [];//没有则取默认值
//    console.log(foo)
//    let [x, y = 'b'] = ['a']; // x='a', y='b'
//    console.log(x,y)
//    let [x, y = '123'] = ['a', undefined]; // x='a', y='b';复制为undefined也会取回默认值
//    console.log(x,y)
//    注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。
//    所以，如果一个数组成员不严格等于undefined，默认值是不会生效的。
//    let [x = 1] = [undefined];
//    console.log(x)
//    let [x = 1] = [null];//null,默认值不生效
//    console.log(x)

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


    /*-------------------------  字符串的扩展  -----------------------------*/
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

    /*--------------------------  正则扩展 -------------------------------*/

    //构造函数合法
    //var regex= new RegExp(/xyz/,'i');
    //console.log(regex.test('xyz222'));
    //console.log(regex.test('xy1z222'));

    /*------------------------- 数值扩展 ---------------------------------*/

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


    /*------------------------------- 函数的扩展 ----------------------------------------------*/

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

// x 和 y 都无值的情况
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

//    函数foo的参数形成一个单独作用域。这个作用域里面，
// 首先声明了变量x，然后声明了变量y，y的默认值是一个匿名函数。
// 这个匿名函数内部的变量x，指向同一个作用域的第一个参数x。
// 函数foo内部又声明了一个内部变量x，
// 该变量与第一个参数x由于不是同一个作用域，
// 所以不是同一个变量，因此执行y后，内部变量x和外部全局变量x的值都没变。
//
//如果将var x = 3的var去除，函数foo的内部变量x就指向第一个参数x，
// 与匿名函数内部的x是一致的，所以最后输出的就是2，
// 而外层的全局变量x依然不受影响。
//
//    var x = 1;
//    function foo(x, y = function() { x = 2; }) {
//        x = 3;
//        y();
//        console.log(x);
//    }
//
//    foo() // 2
//    x // 1


//    ES6 引入 rest 参数（形式为...变量名），
// 用于获取函数的多余参数，这样就不需要使用arguments对象了。
// rest 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。
//    function add(...values) {
//        let sum = 0;
//
//        for (var val of values) {
//            sum += val;
//        }
//
//        return sum;
//    }
//
//    var sum = add(2, 5, 3) ;// 10
//    console.log(sum)

//arguments对象不是数组，而是一个类似数组的对象。
// 所以为了使用数组的方法，
// 必须使用Array.prototype.slice.call先将其转为数组。
// rest 参数就不存在这个问题，它就是一个真正的数组，
// 数组特有的方法都可以使用。
// 下面是一个利用 rest 参数改写数组push方法的例子。
// arguments变量的写法

//    function sortNumbers() {
//        return Array.prototype.slice.call(arguments).sort();
//    }
//
//// rest参数的写法
//    const sortRestNumbers = (...numbers) => numbers.sort();
//    var a = sortNumbers(1,5);
//    var b = sortRestNumbers(5,6);
//    console.log(a,b);

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

//第二种是把函数包在一个无参数的立即执行函数里面。
//    const doSomething = (function () {
//        'use strict';
//        return function(value = 42) {
//            return value;
//        };
//    }());

//函数新增name属性
//    function foo() {}
//    console.log(foo.name )// "foo"


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

//    var sum = (num1,num2)=> num1 + num2;
//
//    console.log(sum());
//    console.log(sum(1,5));
//    console.log(sum(1,'字符串'));
//// 等同于
//    var sum = function(num1, num2) {
//        return num1 + num2;
//    };


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


//    // 正常函数写法
//    var square = [1,2,3].map(function (x) {
//        return x * x;
//    });
//    console.log(square);
//// 箭头函数写法
//    var square = [1,5,3].map(x => x * x);
//    console.log(square);

//      正常函数写法
//    var result = values.sort(function (a, b) {
//        return a - b;
//    });
//
//       箭头函数写法
//    var result = values.sort((a, b) => a - b);


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

    //数组实力的includes()
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


    /*
    * -----对象的扩展-----
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


    //----------symbol---------
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


    //Set 和 Map数据结构
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




    //------ 12 proxy 跳过 元编程 unFinish------
    //------ 13 Reflect 跳过 元编程 unFinish------


    // Promise 对象
    //


















});





























































