//static input
function print(){
    console.log("Hello World!");
}
print();

// variable input
function print1(string){
    console.log(string);
}
print1("Nice to meet you!");

//回调函数 callback, 一个函数包含另一个

function inputString(a,b){
    concatString(a,b);
}

function concatString(a,b){
    console.log(a + ' '+ b);
}
inputString("Good", "Bye, Ben");

//匿名函数 anonymous function 
inputString(
    function(a,b){ // 未命名
        console.log(a+b+a);
    }
);

// arrow function
inputString((a,b) => console.log(a+b+a+b));