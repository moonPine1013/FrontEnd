/**
 * Date object
 */


var date = new Date();
console.log(date);  // real current time ->2023-11-18T08:19:47.414Z


// 指定时间对象
var date1 = new Date("11/18/2023 07:30:00"); // 日期格式： 月/日/年 时：分：秒
var date2 = date1.getDate(); // 获取日期对象的 日期，返回数字
console.log(date2); // 18  十八号
var day = date1.getDay(); // 获取一周中的某天, 返回数字，周日是0，（0～6）
console.log(day); // 6   Sat
var month = date1.getMonth();
console.log(month); // 10 Oct
var year = date1.getFullYear();
console.log(year); // 2023
var min = date1.getMinutes();
console.log(min); //30


// 获取当前对象时间戳(Timestamp),时间戳指的是1970年，格林威治标准时间，开始计算到对象时间，经历的毫秒数
// 毫秒数，1秒==1000毫秒
var time = date1.getTime(); 
console.log(time); //1700253000000

//时间戳可以用于代码运行时，测试代码性能
var start = Date.now();
var end = Date.now();
console.log(end - start); //0
