/*
    Math
        Math不是构造函数，不用创建对象
        工具类，封装数学运算相关的属性和方法
    
*/

Math.PI // 圆周率
Math.abs(-1); // 1
Math.ceil(1.3)// 2
Math.floor(1.9)// 1
Math.round(1.5)// 2
Math.round(1.4)// 1



// 生成 0～1直接的随机数
Math.random();
console.log(Math.random());// 0.3431619483641013
// 生成0到10的随机数
Math.round(Math.random * 10) //先成倍数，再四舍五入
// 生成1到100的随机数
Math.round(Math.random() * 99 + 1);
// 生成15到98
Math.round(Math.random() * 83 + 15);
//  生成x到y直接随机数
Math.round(Math.random() * (y - x) + x);


//max, min 可以多个值
var max = Math.max(10,20,4); // 20
var min = Math.min(10,20,4); // 4

var power = Math.pow(2,3) // 2^3 = 8
Math.sqrt(4); // 2
