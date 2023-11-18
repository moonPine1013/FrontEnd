var a = false;
a = !a; 
// a现在是true

var b = 10;
// b是数字
// 不是0的数字都是true

// b = !b;
// b现在是false

b = !!b

x = "123"
x = !x  
x = !x  // x = !!x   就会把string类型转换成boolean
// b现在是true,可以为任意数据类型，加！！可以转换为布尔值，且为true


// ！！！！！
// && 与and，只有都为true才是ture，短路判断，第一个判断就是false，则不会继续判断，把可能错的放前面

// || 或or，只有有false就是false,短路判断，只要遇到true，就会返回，把可能对的放前面


var result = 1 && 2;
// 返回2
var result = 2 && 1;
// 返回1
// 如果值都是true，则返回最后一个

var result = 0 && 1;
// 返回0
var result = NaN && 0;
// 返回NaN
// 如果值有false，则返回第一个false


var result = 1 || 2;
// 返回1
var result = 1 || 0;
// 返回1
var result = 0 || 1;
// 返回1
// 如果第一个值为true，直接返回，如果第一个值是false，直接返回第二个值


10 > null;  // 返回true

1 > NaN;// 返回false，任何东西和NaN比都是false,不管是大于还是小于

"11" < "5"// 返回true，因为string要转换编码之后，再比较
"a" < "ab"; // string一位一位开始比较，第一位相等再比第二位

// 比较数字，注意转型

"1" == 1;
// 返回true
//当用==来比较时，如果类型不同，则会自动转换为相同类型

true == "1";
// 返回true

null == 0;
// 返回false
// null是false

// undefined衍生自null
undefined == null;
// 返回true

NaN == NaN;
// 返回false
// NaN不和任何值相等

// 有isNaN()这个函数来判断是否为NaN
var n = NaN;
isNaN(n) == true
// 可以用来检查是否为数字

// != 不等，也会进行类型转换


// ===全等，不会做自动的类型转换，如果类型不同直接返回false
null === undefined;    //===必须类型与值都一样，所以坐判断时建议用===
// 返回true

1 !== "1";
// 返回true，因为类型不一样


// 三元运算符
// a？b1:c2;
// 如果a是true，则执行b1，否则执c2,且会返回结果

1 < 2 ? alert("yes") : alert("no");
// alert("yes")
1 > 2 ? alert("yes") : alert("no");
// alert("no")

var max = x > y ? x : y;

if(x > y){
    max = x;
}
else{
    max = y
}
// 获取2个值较大的那个

var max = a > b ? (a > c ? a : c) : (b > c ? b : c);
var max = (a > b ? a : b) > c ? (a > b ? a : b) : c;
// 单行3选1最大
// 不推荐使用，不方便阅读

// 判断语句会转换其他类型变成布尔类型
// （"jqw"） 在判定里是true
// !("wef") 