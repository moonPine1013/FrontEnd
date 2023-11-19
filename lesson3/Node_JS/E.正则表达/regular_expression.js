/*
 正则表达式，严格区分大小写
    匹配模式
        i   表式忽略大小事  -> 例如，如果正则表达式是 /abc/i，它将匹配 "abc"、"AbC"、"aBC" 
        g   表示全局匹配模式 -> 例如，如果正则表达式是 /a/g，它将匹配字符串中所有的 "a"
 */




//正则表达式构造函数
// var reg = new RegExp("正则表达式","匹配模式");

//检查string中是否含有a,严格区分大小写
var reg1 = new RegExp("a");
console.log(typeof reg1); // object

/*
    正则表达式测试方法test()
        如果复合返回true，不符合返回false
*/
var reg2 = new RegExp("A");
var reg3 = new RegExp("a", "i" ); // 找A不论大小写
var str = "asbf";
var result = reg3.test(str);
console.log(result); // true , because "a" is in "asbf"






/**
 * 字变量
 * var 变量 = /正则表达式/匹配模式
 */

var reg = /a/i;    //等同于 var reg = new RegExp("a", "i");

//是否有a or b or c   -> or |
reg = /a|b|c/;
//是否有 one of them -> [abc]
reg = /[abc]/;
//是否有任意小写字母
reg = /[a-z]/;
//是否有任意大写字母
reg = /[A-Z]/;
//任意字母  大写<小写
reg = /[A-z]/;
//任意数字
reg =/[0-9]/;

//检查字符串中是否有aac or abc or adc or aec
reg = /a[abde]c]/; // 表示开头结尾固定，中间有其中一个就够了
//return true if it is neither a or b
reg = /[^ab]/;




/*
字符串和正则表达式
*/
var str = "1a2b3c 4d";

// 根据任意字母拆分字符串,根据正则表达式
//split()不指定全局，也会自动全局匹配
var result1 = str.split(/[A-z]/); 
console.log(result1); //[ '1', '2', '3', ' 4', '' ]

// search()，没有全局匹配，即使设置，也全局匹配不了
var result2 = str.search("3c");// 搜索参数，没找到返回-1，找到返回第一个字符的检索数
console.log(result2); // 4 -> index of "3" in the str
var result3 = str.search(/a[0-9]c/);
console.log(result3); //  -1 -> cannot find it
var result4 = str.search(/a[0-9]b/);
console.log(result4); // 1 -> index of "a"


// match(); 找到一个或多个找到的元素，默认情况match只会找到第一个，除非设置成全局表达式
// 返回的是数组，即使只查询到一个，也会返回数组[][][][][][][][][][][]
var result5 = str.match(/[A-z]/); // a->返回的数组第一个字母
console.log(result5); //[ 'a', index: 1, input: '1a2b3c 4d', groups: undefined ]

// 返回所有的字符,global
var result6 = str.match(/[A-z]/g);
console.log(result6); //[ 'a', 'b', 'c', 'd' ]

// 可以同时设置多个匹配模式，不限顺序, global and ignore case
var result7 = str.match(/[A-z][0-9]/gi);
var result8 = str.match(/[0-9][A-z]/gi);
console.log(result7); //[ 'a2', 'b3' ]  因为先字母，再数字 的组合
console.log(result8); //[ '1a', '2b', '3c', '4d' ] 先数字 再字母


// replace()替换,两个参数，被替换字符串，和替换字符串
var result9 = str.replace("a", "$"); //默认只替换第一个
console.log(result9); //1$2b3c 4d
var result10 = str.replace(/a/ig, "$"); // 大小写全替换
console.log(result10); ////1$2b3c 4d
var result11 = str.replace(/[A-z]/ig, ""); // 替换成空，等于字母全删除
console.log(result11); //123 4



/*
创建以正则表达式检查一个字符串中是否含有/ 匹配上 reg=/.../
*/

/**
 *          出现次数
 */

//指定次数
var reg = /a{3}/; //aaa
console.log(reg.test("dsaaaaerg")); //ture
var reg1 = /(ab){4}/; //abababab

//出现1到3次, {m,n}表出现m到n次 或者{m,}表m次以上
var reg = /(ab){1,3}/; //匹配 "abab"
var reg = /(ab){3,}/;//匹配 "ababababababab"


// 出现至少一次
var reg2 = /(ab)+/; //相当于/(ab){1,}/
console.log(reg2.test("ab")); // true

// 有没有都可以， 0到多个
var reg = /b*/; 

// 0个或者1个，多个不行
var reg = /b?/; 




/**
 *         开头结尾
 */
// 检查字符串以a开头
var reg = /^a/; // 不加[]中括号的^表示开头
// 检查字符串以a结尾
var reg = /a$/; 
var reg = /^a$/; //a开头a结尾
var reg = /^a|a$/;//a开头 或者 a结尾



// 11位手机号正则表达式
/**
 *  1 开头
 *  任意数 from 3 to 9 做为第二位
 * 任意数 from 0 to 9 做为剩下九位数可以选择的范围
 * {9} 剩下的数字数量
 * 
 */
var reg = /^1[3-9]([0-9]){9}$/ // 加$符表示后面不能有别的内容
console.log(reg.test("12093485732")); // false



/**
 *     检查字符
 */

 // \转译字符
var reg = /\./; // . 点表示任意字符

var reg = /\\/; // 检查 \


/**
 *          检查字符串 缩写
 */

/*
\w
\W
\d
\D
\s
\S
\b
\B
*/

reg  = /\w/; //任意字母，数字，下划线 [A-z0-9_]
reg  = /\W/; //除了字母数字下划线 [^A-z0-9_]

reg = /\d/; //任意数字
reg = /\D/; //除了数字

reg = /\s/; //空格
reg = /\S/; //除了空格

reg = /\bshump\b/; // 单词边界，且单词前后有边界，有空白
reg = /\b/;
reg = /\B/; // 除了单词边界


/**
 *              运用于替换
 */

// 去处字符串空格
var str = "         hi       ";
var result = str.replace(/\s/g, ""); //全局替换空格
console.log(result); //hi

//替换 无论 开头有多少个空格 或者 结尾有多少个空格
var result = str.replace(/^\s*|\s*$/g, "");// 去处开头或结尾，且全局匹配

// 电子邮件
var reg = /^\w{3,}(\.\w+)*@[A-z0-9](\.\[A-z]{2,5}){1,2}$/;
// 头尾加^和$表示开头结尾不能有别的东西

/**
 * 
这个正则表达式用于验证邮箱地址的格式。让我们一步一步解释每个部分的作用：

^: 表示匹配字符串的开头。
\w{3,}: 匹配至少包含三个或更多字母数字字符的字符串。这通常用于匹配邮箱的用户名部分。
(\.\w+)*: 匹配零个或多个点（.）后跟至少一个或更多字母数字字符的分组。这通常用于处理邮箱中的域名部分。
@: 匹配邮箱地址中的 "@" 符号，分隔用户名和域名。
[A-z0-9]: 匹配一个字母或数字字符，通常是域名的开头。
(\.\[A-z]{2,5}){1,2}: 匹配一个点后跟两到五个字母字符的分组，可重复一次或两次。这用于匹配邮箱地址中的顶级域名（TLD）部分，如 ".com" 或 ".co.uk"。
$: 表示匹配字符串的结尾。
 * 
 */


var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

// 例子
var validEmail = "john.doe@example.com";
var invalidEmail = "invalid.email@.com";