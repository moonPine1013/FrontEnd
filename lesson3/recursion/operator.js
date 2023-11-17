/*
    0 被视为假
    非零数字被视为真：正数或负数
*/

/*

    
            在 JavaScript 中，
            逻辑运算符 ||（逻辑或）和 &&（逻辑与）有短路求值的特性。

            对于 &&，
            如果第一个操作数为假，则返回第一个操作数；
            如果第一个操作数为真，则返回第二个操作数。
            如果第一个操作数为假，就不会再计算第二个操作数

            对于 ||，
            如果第一个操作数为真，则返回第一个操作数；
            如果第一个操作数为假，则返回第二个操作数。
            如果第一个操作数为真，就不会再计算第二个操作数。

            

*/

console.log(5&&4); // True and True -> 2nd True
console.log(0&&4); // False and True -> False

console.log(5||4); // True or True -> 1st True
console.log(0||0); // False or False -> 2nd False

console.log(3||2) && (5||0); 
// (True or True -> 1st True:3)
//(True or False -> 1st True:5)
// (3 && 5) -> True and True -> 2nd True -> 5

console.log(!5); // not True : false