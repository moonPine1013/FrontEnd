
/**
 * 工厂模式
 *      con:创建的对象都是object数据类型
 */

var obj1 = {
    name: 'Alice',
    age:20
}

var obj2 = {
    name:'Peter',
    age:29
}

function createObject(name, age){
    var obj = new Object();

    obj.name = name;
    obj.age = age;

    obj.sayName = function(){alert(this.name);}

    return obj;
}

var obj3 = createObject("Tony", 20);
var obj4  =createObject("Justin", 17);
console.log(obj3);
console.log(obj4);