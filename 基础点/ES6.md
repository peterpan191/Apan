## es6入门
>
### 01-变量
>
* var 变量声明
    1. 重复声明  全局声明  全局范围有效  
    2. var 函数内声明的变量,外部无法访问; 块内声明的变量,外部可以访问
    3. for循环var声明, 使用setTimeout延迟时, 只会打印for循环最后结果
    4. 输出全是最后结果的原因是因为i是全局变量，最后访问的都是全局变量i，而每次循环改变i的值就是改变全局变量的值，故而输出值均为10;   之前对于这种问题的解决办法是通过闭包来实现
>
* ```javascript
    for(var i = 0;i<10;i++){
        setTimeout(function(){
            console.log(i)
        },100)
    }  // 输出全是10
    // 输出全是10的原因是因为i是全局变量，最后访问的都是全局变量i，而每次循环改变i的值就是改变全局变量的值，故而输出值均为10
    // 之前对于这种问题的解决办法是通过闭包来实现
    for(var i = 0;i<10;i++){
        (function(){
            var j = i;
            setTimeout(function(){
                console.log(j);
            },100)
        }())
    }  // 输出0123456789;
    ```
>
* let 变量声明
    1. 不可重复声明  只作用于当前作用域 局部变量  代码块有效  适用于for循环
    2. for循环使用let声明,使用setTimeout延迟时,会打印每一项结果
    3. 因为每次循环都创建一个块级作用域，并且存上i的值，这里面的let定义的i值就是局部变量,所以每次循环改变的就是对局部变量赋值，访问也是根据作用域链规则访问局部变量i这样就得到了最后的结果。
    4. 块外调用显示:ReferenceError: a is not defined: 未定义a
>
* ```javascript
    for(let i = 0;i<10; i++){
	    setTimeout(function(){
		    console.log(i)
	    },100)
    }  // 0123456789;
    ```
>
* const 变量声明
    1. 不可重复声明 否则报错 Identifier 'a' has already been declared:已声明标识符"a"
    2. 块级作用域, 块内有效; 
    3. 块外调用显示:ReferenceError: a is not defined: 未定义a
> 
* let 与 const 的区别
    1. let 定义的值可以被修改 而const定义的值不能被修改 let和const只作用与当前代码块
>
### 02-解构赋值
>
* 解构赋值 每一项对应
    1. 基本: [a , b] = [1 ,2]  //a=1;b=2
    2. 可嵌套: let [a, [[b], c]] = [1, [[2], 3]]; // a = 1 // b = 2 // c = 3
    3. 可忽略: let [a, , b] = [1, 2, 3]; // a = 1 // b = 3;
    4. 不完全解构: let [a = 1, b] = []; // a = 1, b = undefined
    5. 剩余运算符...: let [a, ...b] = [1, 2, 3]; //a = 1 //b = [2, 3] 类似arr.concat()连接数组,去掉数组中的中括号;
    6. 字符串等: 在数组的解构中，解构的目标若为可遍历对象，皆可进行解构赋值。可遍历对象即实现 Iterator 接口的数据。 let [a, b, c, d, e] = 'hello'; // a = 'h' // b = 'e' // c = 'l' // d = 'l' // e = 'o'
    7. 结构默认值: 当解构模式有匹配结果，且匹配结果是 undefined 时，会触发默认值作为返回结果。let [a = 2] = [undefined]; // a = 2
    8. let [a = 3, b = a] = []; // a = 3, b = 3 let [a = 3, b = a] = [1]; // a = 1, b = 1 let [a = 3, b = a] = [1, 2]; // a = 1, b = 2
>
### 03-箭头函数
>
* 箭头函数详解
    1. () = 参数; 无参括号不省略,一个参数可省略,多参括号内逗号隔开;
    2. => = function;
    3. a = return a; 多行不省略
>
```javascript
     var single = a => a;  == var single = function(a){
            return a;
        }
```
>
* 箭头函数表达式 
    1. 不带参数的写法 () =>  a  需要调用
    ```
        // var single = () => console.log(9);
        // single();
    ```
    2. 带一个参数的写法 a => a  无需调用
    3. 带多个参数的写法  (a,b) => a+b  需要传实参;
    4. return 多行写法 (a,b) => {
        return a+b;
    }
    5. 箭头函数的this指向 settimeout会改变this的指向 如果我们用箭头函数 settimeout就改变不了this的指向
    6. function下的setTimeout的this指向全局window对象; 箭头函数下setTimeout的this指向调用者,
>
*  ```javascript
    var obj = {
        num : 1,
        add:function(){
            setTimeout(() => {
                console.log(this);
            },300)
        }
    };
    obj.add();
    ```
>
### 04-数组
>
* arguments对象是所有（非箭头）函数中都可用的局部变量。你可以使用arguments对象在函数中引用函数的参数。 代替参数
>
* JavaScript的 Array 对象是用于构造数组的全局对象，数组是类似于列表的高阶对象
>
* 例如，如果一个函数传递了三个参数，你可以以如下方式引用他们：
* ```javascript
    arguments[0]
    arguments[1]
    arguments[2]
    ```
>
### 05-类数组
>
* array.from 把一个类数组对象转换成数组  把字符串转换成数组 == 类似数组.split(" ")
>
* ```javascript
    var a = function(a,b){
            
        //var c = arguments.splice(0,1); // 类数组的特点 不能执行数组的方法;
        var d = Array.from(arguments).splice(1,1); //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目 该方法会改变原始数组。
        console.log(d); // 数组 0 : 2; 下标为0 :值为2;
    }
    a(1,2);
    ```
>
* 把字符串转换成数组
    1. Array.from(str) = str.split("").join(); 都不改变原数组
    2. Array.form(str) // ["a", "b", "c"]
    3. str.split("").join() //abc
>
* ```javascript
   var str = 'abc'; ///str.split("").join()  //split() 方法用于把一个字符串分割成字符串数组 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。
   var ars = Array.from(str);
    ```
>
### 06-数组去重
>
1. 方法一: 利用new Set
    * new Set(arr) 数组去重方法; 返回值是Set对象  则需要转换成数组
    * array.from(new Set(arr)) 将Set对象转换成数组
>
2. for循环  查找下标
    * for循环; var h=xx;
    * 判断if语句(arr.indexOf(h) == -1)  可以用arr.includes(h) == false 代替indexOf ==-1
    * 将h后推入新数组中 arr1.unshift(h);
    * 否则 i--;
>
### 07-promise 解决回调的写法---是异步编程的一种解决方案
>
* resolve 处理成功的函数 reject是处理失败的的函数
* pending（进行中）、fulfilled（已成功）
* ```javascript
    var msg = new Promise(function(resolve,reject){ // resolve 处理成功的函数 reject是处理失败的的函数
            $.ajax({
                method : "post", // get或post DELETE update  表单数据将通过 method 属性附加到 URL 上
                url : "http://www.bufantec.com/api/douban/movie/in_theaters", // 请求的地址
                dataType : "JSON", // 返回数据的类型
                success (val){ // 成功返回执行的函数
                    resolve(val) //Promise.resolve返回一个解析过的Promise对象.
                },
                failed(val){ // 请求失败的函数
                    reject(val) //Promise.reject(reason)方法返回一个带有拒绝原因reason参数的Promise对象。
                }
            });
        })
        msg
        .then(function(val){
            console.log(val,"成功请求")
        }).catch(function(val){  //catch失败需要
            console.log(val,"失败请求")
        })
    ```
>
### 08-then方法
>
* then 方法接收两个函数作为参数，第一个参数是 Promise 执行成功时的回调，第二个参数是 Promise 执行失败时的回调，两个函数只会有一个被调用。
>
* then 方法将返回一个 resolved 或 rejected 状态的 Promise 对象用于链式调用，且 Promise 对象的值就是这个返回值。
>
* 注意点:
    1. 简便的 Promise 链式编程最好保持扁平化，不要嵌套 Promise
    2. 注意总是返回或终止 Promise 链.
    3. 创建新 Promise 但忘记返回它时，对应链条被打破，导致 p4 会与 p2 和 p3 同时进行。
    4. 大多数浏览器中不能终止的 Promise 链里的 rejection，建议后面都跟上 .catch(error => console.log(error));
>
>
### 操作数组遍历
>
* 常用的数组的操作 map、filter、foreach、some、every、includs、find、findIndex  这几个都是对数组进行循环 
>
1. map可以对循环的数组添加一些属性 循环之后再定义一个变量去保存这个循环之后的数组 这个变量的值是改变之后的; 不改变原数组
>
2. forEach 是对数组的循环 但是循环之后再定义一个变量去保存这个循环之后的数组 这个变量的返回值没有找到  返回自身,改变数组,不需要声明

>
3. filter 筛选返回符合条件的元素 
> 
4. some 、 every
   + some 当数组里面的元素有某一项符合时就返回一个布尔值 true; 如果没有就返回false
   + every 当数组中的每一项都符合某个条件时就返回true; 如果有一项不满足就返回false
>
5. includes 当数组中的某一项符合时返回true 不满足返回false 跟indexOf()很像 查找某一项
    * 表达式: String.prototype.includes('要包含的字符串')
* $.contains()方法用于判断指定元素内是否包含另一元素,即判断另一DOM元素是否指定DOM元素的后代
>
6. find和findIndex 分别是找到某个元素 和找到某个元素对应的一个下表 如果找到那个元素即使下面有符合条件的元素也不会向下执行  找不到下标返回-1
>



