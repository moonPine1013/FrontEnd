list = [1,2,3,4];
list.newName = "Alice";
console.log(list); 
for(let idx in list){
    console.log(idx, list[idx]);
}



for(let count of list){
    console.log(count, list[count]);
}  // 只输出原数组的每一个元素