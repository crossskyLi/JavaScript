function Foo() {
    getName = function () {
        console.log('运行后改变了全局的var的Getnamefoo getName');
    }
    return this
}
Foo.getName = function () {
    console.log('属性getName')
};
Foo.prototype.getName = function () {
    console.log('prototype的getName')
};
var getName = function () {
    console.log('全局定义的getName');
};
function getName(){
    console.log('全局定义的getName函数');
}
//属性getName,在属性上找到getName,此时Foo并没有运行,
// 只是运行了Foo.getName=function...的操作
console.log(1);
Foo.getName();

//全局定义的getName,function的级别比var的高;function虽然赋值了,但var会覆盖
console.log(2);
getName();

//运行Foo函数,全局找到getName,改变了getName;return this则指向了全局,
// 全局的getName在Foo执行后被重新赋值,则会是这个结果
console.log(3);
Foo().getName();//运行后改变了全局的var的Getnamefoo getName

//运行了上面一行代码后,全局的getName已经被赋值,所以结果跟上面一样;
console.log(4);
getName()//运行后改变了全局的var的Getnamefoo getName
//如果在一个函数前面带上new来调用该函数，
// 那么将创建一个隐藏连接到该函数的prototype成员的新对象，
// 同时this将被绑定到那个新对象上
console.log(5);
console.log(Foo)
console.log(Foo.prototype)
var newGetName1 = new Foo.getName();
console.log(newGetName1)
console.log(6);
var newGetName2 =new Foo().getName();
console.log(newGetName2)
console.log(7);
var newGetName3 = new new Foo().getName();
console.log(newGetName3)