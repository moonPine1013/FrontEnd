list = [1,2,3,4];
list.newName = "Alice";
console.log(list); 
for(let idx in list){
    console.log(idx, list[idx]);
}