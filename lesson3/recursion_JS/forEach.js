// 第一个函数
const arr = [1, 2, 3, 4, 5, 6];

arr.forEach((value, index) => {
    console.log(value + " is in order " + index);
});

// 第二个函数
const arr1 = [7, 8, 9, 0];

arr1.forEach((value, index, array) => {
    array[index] = value * value;
});

console.log(arr1);