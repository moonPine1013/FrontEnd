/*
    JS提供三个包装类，可以将基本数据类型数据转化为对象
        String()
            将基本数据类型转换为String对象
        Number()
            将基本数据类型转换为Number对象
        Boolean()
            将基本数据类型转换成Boolean对象
*/

var num = 99; // 这个基本数据类不能添加属性

// 现在num是对象，可以加属性,但是不能和基本数据类型全等比较，因为是对象且拥有地址
var num = new Number(3);
var str = new String("hello");
var bool = new Boolean(true);


// 开发环境中，不会使用基本数据类型对象，因为无法全等比较
var fa = new Boolean(false);
if(fa){
    //会运行，因为fa是对象object, 表true
}

fa=fa.toString();

/*
 当对基本数据类型的值去调用属性和方法时，浏览器会临时调用包装类，再调用对象和方法
 再转换回基本数据类型

 包装类是零时的，转换后，内部属性会被销毁
 */

//包装类的方法，可以被基础数据类型调用但是对象会及时销毁


var str = "hello";
// 底层保存形式为 ['h','e','l'...]


// 字符串大多数方法不会改变字符串本身
str.charAt(0);//返回"h",根据索引返回指定字符
str[0]; // 和上述效果相等

str.charCodeAt(0); // 返回'h'的unicode编码

// 通过字符编码获取字符，需要变量接收，fromCharCode是String对象的方法
var chr = String.fromCharCode(72);

// 0x加数字表示16进制数


// concat()用来连接两个或多个字符串
var result = str.concat("你好", str, "我好");
// 和+好效果一直，不会改变原字符串

//返回0，表示h在第一位，如果返回-1，表示没有，如果有重复，返回第一个
var result = str.indexOf("h");

// 表示查找开始位置，从第二个参数开始查找
var result = str.indexOf("h", 1);

// 查找后面的'h',从后往前找
str.lastIndexOf("h");

// 和数组类似，截取开始索引到结束索引内容,不影响字符串，需要接收，
var result = str.slice(3);//没有第二个参数表示截取全部
var result = str.slice(3, 5);// 第二个参数可以是负数，表示从后往前算第几个数

// 和slice类似，第二个参数不包括他本身，但是substring不能传负数参数，负数表示0，
// 会自动调整参数位置，如果小的参数会自动变成第一个参数
var result = str.substring(1, 2);

// split()拆分字符串成为数组,需要字符串作为参数
var str = "egweg,wwrg,weg"
result = str.split(","); // 根据,拆字符串成为数组，参数可以是"" " "
result = str.split(""); // 拆分所有字符成为数组

// 大小写转换，不影响原字符串
result = str.toUpperCase();
result = str.toLowerCase();
