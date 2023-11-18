/**
 * 常用2： filter()
 *          想要接收变量，不会破坏原数组
        过滤
            从数组中选取符合条件的元素
            根据回调函数的结果保留或者删除元素，
                回调函数返回值需要是true或者false
 */


let arr = [1,2,3,4];

result1 = arr.filter((item => item  % 2 === 0));
console.log(result1); // even number -> [2,4]

// find()和filter()类似，但是find只会返回第一个符合条件的
result2 = arr.find((item => item % 2 === 0));
console.log(result2); // single and the first number -> 2