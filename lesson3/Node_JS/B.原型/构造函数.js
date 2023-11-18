/*
 构造函数
    构造函数名习惯首字母大写
    构造函数前面加上，new，作为构造函数
        创建出对象

    构造函数执行流程
        1.创建新的对象
        2.将新建对象设置为函数中的this，在构造函数中可以用this来引用新建对象
        3.逐行执行构造函数内部代码
        4.将新的对象作为返回值返回

    使用同一个构造函数创建的对象，我们称为一类对象，也将是一个构造函数的对象

    构造函数名就是类名！！
*/

function Person(name, age){
    //alert(this);   ->  This doesn't support on the Node.js environment

    console.log(this); //Person {}
    console.log(typeof this); //object

    //this 就是被创造的新的对象
    this.name = name;
    this.age = age;
}

var person = new Person("构造函数名",25);
console.log(person.name); //构造函数名


console.log(person instanceof Person); // 属于构造函数类吗？ true
console.log(person instanceof Object); // 属于object对象类吗？true



/*
    在构造函数中，为每个构造函数都会创建一个新的函数
        方法相似，浪费空间
*/

function Person1(name, age){
    this.name = name;
    this.age = age;

    this.sayName = function(){console.log(this.name);}
}

//把methods放在外部定义，可以提高性能
function func(){
    console.log(this.name);
}

function Person2(name,age){
    this.name = name;
    this.age = age;
    this.sayName = func;
}



//最好不要在全局作用域定义或命名，lack sercurity

{var x = new Person2("x", 80);}
console.log(x.sayName()); // x undefined