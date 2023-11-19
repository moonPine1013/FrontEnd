/**
 * 定义一个通用java类 class
 * 
    * public class  Puppy{
    * int puppyAge;
    * }
    * 
    * public Puppy(age){
    * puppuAge = age;
    * }
    * 
    * public void say(){
    * System.out.println("汪汪汪";
    * }
 */


/**
 *          问题来了，早期的js没有class这个关键字
 *              它使用函数来代替： 比如用js建一个小狗的类，直接用一个函数来写
 * 
 */

function Puppy(){

    //用new关键字生成实例
    const myPuppy = new Puppy();
    
}

/**
 *          问题二：怎么设置小狗年龄呢
 *          解决方案：当做类用的函数本身也是一个函数，
 *                  而且他就是默认的构造函数。我们想让Puppy函数能够设置实例的
                    年龄，只要让他接收参数就行了。
 */

function Puppy(age){
    this.puppyAge = age;
}

//实例化就可以传入 年龄 参数了
const myPuppy = new Puppy(2);
console.log(myPuppy.puppyAge); //2


/**
 *          问题三：上面我们实现了类和构造函数，但是类方法呢？
 *          解决方案： Java版小狗还可以“汪汪汪”叫呢，JS版怎么办呢？JS给
                        出的解决方案是给方法添加一个prototype属性，挂载在这上面的方法，在实例化的时候会给到实例
                        对象。我们想要myPuppy能说话，就需要往Puppy.prototype添加说话的方法。
 */


Puppy.prototype.say = function(){
    console.log("汪汪汪");
}

myPuppy.say(); //汪汪汪


/**
 *          问题四： 原型链
 */

console.log(myPuppy);  //Puppy { puppyAge: 2 }  ->并没有say在这个对象上？say是从哪里来的？

//用  __proto__

/**
 *      当你访问一个对象上没有的属性时，比如myPuppy.say，对象会去
        __proto__查找。__proto__的值就等于父类的prototype，
        myPuppy.__proto__指向了Puppy.prototype
 */
console.log(myPuppy.__proto__ === Puppy.prototype);  //true


/**
 * 如果你访问的属性在Puppy.prototype也不存在，那又会继续往Puppy.prototype.__proto__
上找，这时候其实就找到了Object了，Object再往上找就没有了，也就是null，这其实就是原型链。

 */

console.log(Puppy.prototype.__proto__ === Object.prototype); //true




//在JavaScript中，所有对象都继承自 Object 对象。
//所以，Object.prototype 是原型链中的最高级父类。

//所以，原型链(从低到高)可以表示为：myPuppy -> Puppy.prototype -> Object.prototype -> null。
//这就是为什么在你的代码中，当访问 myPuppy.say 时，
//即使 say 方法并不存在于 myPuppy 对象本身，
//JavaScript 会在原型链上继续查找，找到了 Puppy.prototype 中的 say 方法。
