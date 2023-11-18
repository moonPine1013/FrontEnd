/**
 * 常用1： map()
 *          需要接收 一个原有的数组
            可以根据数组返回一个新数组
            需要一个回调函数作为参数，回调函数的返回值会成为数组中的新元素
 */

let arr = [1,2,3,4];


result1 = arr.map(() => 10);
console.log(result1); // [10,10,10,10]

result2 = arr.map((item) => 10);
console.log(result2); // [10,10,10,10]

result3 = arr.map((item) => item +2);
console.log(result3); //[1+2,2+2,3+2,4+2] = [3,4,5,6]

result = arr.map((item, index, OriginalArr) => {return "<span>" + item + "<span>";})
console.log(result); //[ '<span>1<span>', '<span>2<span>', '<span>3<span>', '<span>4<span>' ]



