// fucntion is also a type of object.

var func = new Function();
var func1 = new Function("console.log('这是被封装函数')"); // 很少用

//调用
func();

func.name = "hi"; // 可以这么定义

//声明
function demo(num1, num2){
    console.log(num1 + num2);
    return "return后面接的是返回值,可以用变量=函数来接收返回值";

}
demo(1,2); // output: 3

//匿名函数
//这种使用函数表达式创建的匿名函数可以在需要时进行赋值给变量，
//并且可以作为变量值进行传递和调用
var noName = function(num1){
    console.log(num1);
};
noName(10);

//obj对象，作为参数传入函数中的方式
// 不要加 分号， 逗号 隔开 key-value pair
var obj = {
    name: 'Alice',
    age:23
}

function getObj(obj){
    console.log(obj.name + " is "+ obj.age + " years old.");
}
getObj(obj); //Alice is 23 years old.

// 函数也可以作为参数，不管有没有返回值
/* 
fun()调用函数
用的是返回值，

fun函数名
用的是对象本身
*/

// 可以在任意处加括号，把对象变成函数

//在末尾加上（）可以立即执行
(
    function(){
        console.log("hello world!");
    }
)();   //hello world!


(
    function(num){
        console.log(num);
    }
)(10); // 10


// 对象里面也可以装函数
var obj = new Object();
obj.aFunc = function(){
    console.log("I converted from obj to func!");
}// method1,末尾加上（）;进行output:  I converted from obj to func!

//method2: 调用输出
obj.aFunc();



// 如果一个函数作为对象的属性，则被称为该对象的方法（method)
var obj2 = {
    name: "John",
    demo: function(){
        console.log("对象内函数");
    }
}
 console.log(obj2); //{ name: 'John', demo: [Function: demo] }




// for...in 枚举，每次循环，n将会被对应属性名替换
for(var n in obj){
    console.log(n); // aFunc

    console.log(obj[n]); // [Function(anonymous)]
    console.log(obj["n"]); // undefined
}