/*
     reduce()
         合并数组中的元素
*/
let arr = [1,2,3,4];

result = arr.reduce((prev,curr, index, originalArr)=>{
    return prev + curr;
},0) //回调函数后，可以再加一个初始值函数，第一次运算为初始值和curr??prev的sum
console.log(result); 

/**
 * prev+curr
 * 0+1 = 1
 * 1+2 = 3
 * 3+3 = 6
 * 6+4 = 10     -> 10
 */