var input = prompt("enter the number");

function prompt(String){
    return String;
}


var a = 1, b = 2, c = 3;
// 可以用逗号，同时声明多个变量

// 先乘除再加减


// 符号优先级
var a = 1 || 2 && 3;
// 返回1
// &&的优先级比||高，先算||

// 优先级一样时从左往右算
// 多用括号
var a = (1 || 2) && 3;


// {}  表一组，也叫代码块，块后面不用写分号
// var可以跨组显示


if (1) {
    var a = 1;
} else if (2) {
    var b = 1;
} else {
    var c = 1;
}
// 如果执行了if里面，则不会执行else if，有条件被执行后，整个代码块结束


// prompt()可以弹出一个提示框，里面有一个文本
// 用户可以在里面输入一段文字，该函数需要一个字符串作为参数
// 参数会作为提示框的提示文字
//
// 用户输入的内容讲作为返回值，可以定义一个变量来接受，string类型
var input = prompt("随意输入:");
// 如果输入是数字， 可以直接
var num = + prompt("随意输入:"); // 输入的字符串会被自动转换成数字，因为用了运算符

// window.confirm会通过点击直接返回true和false
var truthBeTold = window.confirm("单击“确定”继续。单击“取消”停止。");
if (truthBeTold) {
    window.alert("欢迎访问我们的 Web 页！");
} else window.alert("再见啦！");


// switch
var num = 10;
switch (num) {
    case 10:
        console.log("10");
        break;
    case 9:
        console.log("9");
        break;
    default:
        console.log("no");
        break;
}
// 执行switch时，会对case里面进行全等，不全等则往下执行，直到default




// 在网页里写，用string写标签，会生效
document.write(1 + "<br />")



// num开方
Math.sqrt(num);

// 性能计时器
// 开启计时, 需要字符串作为参数，也会作为结束的标识
console.time("test");
/*

    各种代码


*/
// 停止参数标识的计时器
console.timeEnd("test");





// 使用new关键字调用的函数，是构造函数
// 构造函数专门用来创建对象，用typeof检查，会返回object
var obj = new Object();
obj.name = "hi";
obj.age = 99;
console.log(obj); //输出 {name: 'hi', age: 99}

//读取属性
obj.name;
obj.age;

// 如果读取对象中没有的属性，会返回undefined
// 修改属性值，直接通过属性名修改就好
obj.name = "nohi"


//删除属性：
// delete 对象.属性
delete obj.age;

// 对象属性名不强制要求属于准守标识符规范，用什么都行，但是尽量按照标识符规范
// 如果要用特殊属性名，不能用.点来添加，用中括号存
obg["123"] = 789;
// 如果这样存，则取也要这样取
console.log(obg["123"]);






// 基础数据类型相等是copy，存在 栈 里面，对象的值是一个地址

// object存在 堆 内存，每创建一个新对象，在堆创建一个空间，并且创建地址
// object类型相等时， 不是copy时reference引用一个改变，引用的ojb也会改变
var a = new Object();
a.hi = "hi";
var b = a;//其实复制的不是值，而是地址，也就是说a改变后，b也会改变
a.hi = "helloe";
// 输出b，返回{hi: "hello"}
// 尽量少给同一个对象创建多个别名

// 删除对象地址，不改变别的变量对该对象的引用
obj2 = null;

var obj3 = new Object;
var obj4 = new Object;

obj3.name = "obj";
obj4.name = "obj";

obj3 == obj4;//返回false，对比的是地址，且里面的地址指向不同对象，地址不同


// 对象字面量,属性名本身就是字符串，可加双引号""，可不加
var a = {
    name: "jbb",
    age: 0,
    demmo: {
        hi: "hi"
    }
};