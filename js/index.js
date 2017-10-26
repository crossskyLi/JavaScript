$(function () {

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

    function move({x,y}={x:0,y:0}){
        return [x,y]
    }
    var a = move ({x:3,y:8});
    var b = move({x:4});
    var c = move({});
    var d = move();
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);



});


























