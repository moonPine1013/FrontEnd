/*
原型
prototype是什么
JavaScript在设计之初，是作为一种网页脚本语言，没有设计得很复杂，
这种语言只要能够完成一些简单操作就够了。Javascript里面所有的数据类型都是对象（object）。
在ES6之前，js中是没有Class的概念的（ES6中的类也是语法糖，本质还是基于原型），
为了实现实例对象的属性和方法共享，就给function设计了一个prototype的概念。

prototype是一个对象。他是如何工作的呢？
简单地说，JavaScript 是基于原型的语言。当我们调用一个对象的属性时，
如果对象没有该属性，JavaScript 解释器就会从对象的原型对象上去找该属性，
如果原型上也没有该属性，那就去找原型的原型，直到最后返回null为止，null没有原型。
这种属性查找的方式被称为原型链（prototype chain）。





    prototype
我们所创建的每一个函数，解析器都会向函数中添加一个属性prototype
    属性对应一个原型对象，
*/
console.log(Person.prototype);
console.log(Person.prototype == fun.prototype);// 返回false

/* 每个函数都有自己的prototype,prototype保存的是地址，没函数对象不同
   如果函数作为普通函数调用，prototype没任何作用
   当函数以构造函数形式调用，都会有一个隐含属性
     隐含属性也指向prototype地址
         隐含属性 : __proto__   __proto__

    原型对象相当于一个公共区域，所有同一个类的实例都可以访问该区域
        并且能在内部创建变量，只有该类可以访问，隔离公共区域
*/
