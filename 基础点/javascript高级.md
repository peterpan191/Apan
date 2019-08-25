# javscript高级
>
## javascript高级_第一天
>
* 主要内容
    - symbol -- ES6新增基本数据类型
    - 基本数据类型和复杂数据类型
    - 栈堆内存
    - 深浅克隆
    - lodash -- 深度克隆
    - 创建对象
        - new实例
        - 字面量创建
        - 工厂模式
        - 构造函数
    - 数据属性和访问器属性
    - 双向数据绑定
        - 数据劫持
    - 判断数据类型
    - 构造函数存在的问题
        - 构造函数和原型的组合
    - 简单的发布订阅模式
>
### 01-Symbol ES6新增基本数据类型
>
* 特点: 独一无二
* 使用场景: 我们想区分两个属性
* 例如: 
```js
// 只是为了区分h5 和 ui 属性不一样 然后给他们赋值了;
var h5 = 'xx';
var ui = 'xx';
// 通过设置 Symbol() 区分h5 和 ui
var h5 = Symbol();
var ui = Symbol();
// 原理是 h5 === ui false
// 实际Symbol内部不一样
console.log(typeof h5); //symbol类型
```
>
>
### 02-数据类型
>
1. 基本数据类型(值类型)
    - number
    - string
    - boolean
    - undefined
    - null
    - Symbol
>
2. 基本数据类型 作为参数传递
```js
    function foo(num,x){
        num += x;
        return num;
    }
    foo(2,3)
    // 在构造内部会创建该基本数据类型的副本
    // 里面对该数据的修改,不会影响外部数据;
```
3. 复杂数据类型(引用数据类型)
    - object 
    - array
    - function
    - json
* 所有的应用类型都是object对象 
* 所有的对象都是object
* 因为在js中通过function 去声明一个对象类型
>
4. 对象类型 作为参数传递
```js
 function foo(obj){
    obj.age ++;
    return obj;
}
// 对象类型作为参数传递,函数内部对该对象的修改,会直接影响到外部的对象,因为引用的是一个对象
```
5. NAN == NAN? false
    - 出现情况; 10/'a'== NaN 
>
### 03-栈（stack） 和 堆（heap）
>
1. 栈 -- 存放函数的参数值，局部变量的值
    - 基本数据类型直接保存在栈内存中
2. 堆 -- 储存在队中的对象,存储在变量处是一个指针(point),指向存储对象的内存处
    - 复杂数据类型,地址在栈,对象在堆;
>
### 04-clone对象克隆
>
* 浅深克隆实现的原理
>
1. 通过for in 把原对象赋值给新对象来实现
* 浅克隆的实现 只能实现 所有的属性是基本数据类型的对象
```js
var user = {
    name: "张三",
    age: 23,
    skill: [ '足球','篮球','乒乓球' ]
}    
function simpleClone(obj){
    // 1. 创建新对象
    var newObj = {};
    // 2. 赋值
    for(var key in obj){
        newObj[key] = obj[key];
    }
    return newObj;
}
var user2 = simpleClone(user)   
console.log(user2)
user.skill[2] = '爬山';
console.log(user2.skill); // ["游泳", "健身", "爬山"]
```
>
2. 深度clone方法
* 通过把对象转换成字符串,用新的字符串接收,在还原;
```js
function deepClone(obj){
    // 1.把对象转化成字符串
    // 2.用新的字符串接收
    var newStr = JSON.stringify(obj);
    // 3. 还原
    var newObj = JSON.parse(newStr);
    return newObj;
}
var user3 = deepClone(user);
console.log(user3.skill); //["足球", "篮球", "乒乓球"]
```
>
3. 使用lodash
* lodash帮我们实现深度克隆
* lodash 在es6出之前,可以实现filter,map,some.find,reduce...功能
```js
// 1. 引入lodash.js
 var user4 = _.cloneDeep(user);
console.log(user4.skill); //["足球", "篮球", "乒乓球"]
```
>
### 05-创建对象
>
1. 通过new实例创建对象
    - var user = new Object();
    - user.name = "张三";
    - user.age = 23;
>
2. 通过字面量创建对象,适合创建单个对象
```js
 var user = {
    name: '张氏那',
    age: 20,
    run: function(){
        alert('Hi I am running...');
    }
}
// 创建一个新的..
// 通过user.run()调用
```
>
3. 通过工厂模式创建对象 -- 封装函数
 ```js
function createObject(name,age){
    var obj = new Object();
    obj.name = name;
    obj.age = age;
    return obj;
}
//判断user 具体类型
// user1 instanceof  Object
var user1 = createObject('张三',20);
var user2 = createObject('李四',30);
// ...
 ```
>
4. 通过自定义构造函数创建对象
    - 开辟空间储存对象
    - 把 this设置为当前的对象
    - 设置属性和方法的值
    - 把this对象返回
```js
// 1. 对象昂是函数 函数就是对象
// 2. 对象的声明首字母必须是大写(小写不报错,但没有遵循 约定)
function User(name,age){
    this.name = name;
    this.age = age;
    this.say = function9{
        alert('构造函数创建的对象'+ this.name);
    }
}
//this指向的条件
/*  1. this在代码执行之前并不能确定指向谁
    2. 谁调用该方法,this指向谁
    3. 如果有new 关键词创建出来新对象,this执行新对象
    4. 在回调函数里,this指向一般会发生变化(经验) */
var user5 = new User('杜甫',28);
var user6 = new User('李白',29);
console.log(user5 instanceof User);
user5.say();
user6.say();
```
>
5. 工厂模式与自定义函数异同
    - 共同点: 都是函数,都可以创建对象,都可以传入参数
    - 工厂模式
        - 函数名是小写
        - 有 new
        - 有返回值
        - new之后的对象是当前的对象
        - 直接调用函数就可以创建对象
    - 自定义构造函数
        - 函数名是大写(首字母)
        - 没有new
        - 没有返回值
        - this是当前的对象
        - 通过new的方式来创建对象
>
### 06-数据属性
>
1. 删除对象中某个属性
    - delete user.age
>
2. 设置对象user中name属性只读; 默认true;
```js
Object.defineProperty(user,'name',{
    writable: false, //不能重写
})
user.name = "李四" //无效
```
>
3. 是否允许age属性被配置 默认true
```js
Object.defineProperty(user,'age',{
    configurable: false,
})
delete user.age; //无效  强行age显示undefined
```
4. 是否被枚举 可以访问
```js
Object.defineProperty(user,'sex',{
    enumerable: false,
    value: "男"
})
console.log('sex',user.sex)
```
5. 一个对象 并不是通过for可以获取所有属性的
```js
for (var key in user){
    console.log(key,user[key]); //name 张三 
    //age sex拿不到    
}
```
>
### 07-访问器属性
>
* 新设的值被当做参数传入set, 在进行get里操作
```js
var goods = {
        name: '裤子',
        price: 100, //进价
        zk: .8, //折扣
        salePrice: 200 //售价
    }
    // 设置新价格 ,并返回 折扣后的新价格
    // 对任何对象的属性 都有一个默认set/get方法
    // set 用于设值的时候触发 get用于获取的时候触发
    Object.defineProperty(goods,'newPrice',{
        set: function(v){
            this.salePrice = v
        },
        get: function(){
            return this.salePrice * this.zk;
        }
    })

    goods.newPrice = 300;
    console.log(goods.newPrice); //给某个对象的某个属性 进行了劫持操作
```
>
### 08-双向数据绑定
>
1. 双向数据绑定 数据模型修改会影响视图 视图修改会影响数据模型
```js
var data = {
        modelValue: '', // 临时变量 用于作为桥梁
    }

    Object.defineProperty(data,'inputValue',{
        set: function(v){
            // 把v设置给input
            document.querySelector('.input').value = v;
            this.modelValue = v;
        },
        get: function(){
            return document.querySelector('.input').value;
        }
    })
        // 同时定义多个属性
        // Object.defineProperties({
        //     ...
        // })
        // 1. 修改data 使结果自动同步的到视图
    setTimeout(function(){
        data.inputValue = '张三';
        console.log(data.inputValue); // 本质是调用get
    },3000)
```
>
### 09-判断数据类型
>
1. 判断数据类型
    * typeof 
        * 可以判断: undefined/string/number/boolean
    * instanceof
    * ===
        * 可以判断: undefined/null
>
2. 常见错误
    - var status = true // window内置属性 强制string
    - var top = 20; // top一般是window对象的顶级window对象 可以再iframe使用
    - 引用类型  typeof  ==> object
    - var say = function(){} //function
3. 怎么判断object具体数据类型
    - console.log(skill instanceof Array); // 判断是skill 是否是数组的 实例对象
    - console.log(skill instanceof Object); // Object是所有对象的顶级对象
>
### 10-构造函数创建对象的问题
>
* 构造函数和原型组成的 组合构建模式
* 问题; 如果创建对象多的话,会隐式创建多个对象,而不是创建一个
* 为了优化性能,减少能耗
>
* 解决
```js
//构造函数创建对象的问题
function User (name,age){
    this.name = name;
    this.age = name;
}
// 构造函数对象 原型对象 实例对象
User.prototype.say = function(){
    alert("构造函数创建的"+this.name);
}
var user1 = new User('张三',20);
var user2 = new User('李四',22);
user1.say();
user2.say();
console.log(user1.say == user2.say ); // false?
```
>
1. 一个构造函数对象被声明,js解析器会自动帮我们创建一个该构造函数对象的'原型对象'
    - 该对象有一个属性叫constructor,反过来指向构造函数对象
>
2. 原型对象可以创建一个构造函数对象的所有实例对象所共享的空间
>
3. 可以通过构造函数对象的 prototype 属性,访问到原型对象;
>
### 10-简单的发布订阅模式
>
* 在长期的软件开发的实践过程中,人们总结出来一部分用于解决特定需求的编码模式,
* 总结为设计模式.设计模式跟具体的语言没有关系,任何一门语言都可以使用.
* 常见的设计模式有23种,比如单例,工厂,观察者,装饰者,发布/订阅等待...
* 发布/订阅 :  针对的是1对多的使用场景,比如微信公众号. 一个公众号可以由多个用户同时订阅,
* 公众号发布了信息,所有的用户都会受到信息
```js
 //发布者
    var publisher = {
        list: [],
        //添加时间
        add: function(fn){
            this.list.push(fn);
            return this;
        },
            // 发布事件
        sub: function(){
            for(var i = 0; i < this.list.length; i++){
                //执行发布
                this.list[i]();
            }
        }
    }    
        
    // 订阅
    var a = function(){
        console.log('张三的订阅内容...');
    }
    var b = function(){
        console.log('李四的订阅内容...');
    }
    var c = function(){
        console.log('老吴的订阅内容...');
    }

    // 添加订阅  链式调用 实现原理
    publisher.add(a).add(b).add(c);
    // publisher.add(b);
    // publisher.add(c);
    // 某个时间 发布订阅
    setTimeout(function(){
        publisher.sub();
    },2000)
```
>
>
## javascript高级_第二天
>
### 01-面向对象
>
1. js不是面向对象的语言,是基于对象的语言,js来模拟面向对象
2. 面向对象特性: 1. 封装 2. 继承 3.多态 4.(抽象性)
>
### 02-构造函数和原型对象,实例对象之间的关系
>
* 实例对象都是通过构造函数创建的
* 构造函数在创建时,都会创建一个原型对象
* 构造函数.prototype指向原型对象
* 原型对象.constructor属性指向构造函数
* 实例通过 __proto__访问原型对象
* 任何一个js对象都有一个原型对象，即它 的父对象；所有js对象的最终父对象都是Object.prototype 
>
>
## javascript高级_第三天
>
* 主要内容
    - call和apply
    - call和apply传递参数
    - 事件委托
    - 执行环境
    - 堆栈汇编语言
    - 垃圾回收
    - 块级作用域
    - 闭包
    - 继承
    - canvas
    - 动画
### 01-call()和apply()
>
* 共同作用:
    1. 传递 this(动态改变this指向)
    2. 扩展对象能力
>
1. call: 就是调用一个对象的一个方法,以另一个对象替换当前对象
```js
user2.sex.call(user1)
// 实际上就是user1的say方法调用call 会把user2的内容扩充到user1里
```
>
2. apply: 就是调用一个对象的一个方法,以另一个对象替换当前对象
```js
user2.sex.apply(user1)
// 可将一个函数的对象上下文从初始的上下文改变为由 this.Obj 指定的新对象。
```
>
### 02-call()和apply()传递参数
>
1. call()传参
    * 语法: call(context,p1,p2,p3...)
```js
 user1.say.call(user2,'英文','中文');
```
>
2. apply()传参
    * 语法: apply(context,[p1,p2,p3...])
```js
user1.say.apply(user2,['英文','日文']);
```
>
### 03-事件委托
>
* 对于未来生成的元素 需要用到事件委托 --> 例如后面需要按钮自动生成的事件,需要用到事件委托
>
```js
 /**
 * pEl 容器
 * el 触发元素的对象
 * fn 需要执行的事件
 **/
proxy('ul','li',function(){
    alert(this.innerText);
});

 // 伪数组
    // 1. document.getElementsByClassName ...
    // 2. arguments
function proxy(pSelector,elSelector,fn){
    // 1. 找到容器dom元素
    var pEl = document.querySelector(pSelector);
    pEl.onclick = function(e){
        // 2. 所有允许被委托的对象 els是伪数组
        var els = document.querySelectorAll(elSelector);
        // 获取真正触发事件的对象
        var target = e.target;
        //方法一
        if(target.tagName.toLowerCase() == 'li'){
            // 执行fn 
            // target 动态改变了this的指向
            fn.call(target);
        }

        // 方法二 通过调用伪数组原型上some方法,判断是否点击的是li
        var isExit = Array.prototype.some.call(els,item => item == target);
        if(isExit){
            fn.call(target);
        }
    }
}

```
>
### 04-执行环境和作用域
>
1. 执行环境: 
    - 执行环境是一个概念，一种机制，用来完成JavaScript运行时在作用域、生存期等方面的处理，它定义了变量或函数是否有权访问其他数据，决定各自行为。
    - 每个执行环境都有一个与之关联的变量对象，环境中定义的所有变量和函数都保存在这个对象中。虽然我们编写的代码无法访问这个变量，但解析器在处理数据时会在后台使用它
    - 每当函数被调用的时候，就会产生一个新的执行环境，它是运行中的函数的意思，比方说运动员在奔跑的环境中，我们可以把运动员在奔跑的环境中，说成奔跑中的运动员，以此类推说成运行中的函数，行话叫”执行环境“。
>
2. 作用域: 
    - 由上可知：环境变量可以一层一层的向上追溯，可以访问它的上级环境变量和函数，一层层的向上追溯。
    - 作用域的用途，是保证对执行环境有权访问的所有变量和函数的有序访问。
    - 保证基础语法执行环境和权限
    - 作用域
    1. 下级可以访问上级
    2. 一级一级的查找
    3. 如果找到，不再找 （例子：重新赋值）
    4. 如果一直没找到  未定义

>
### 05-闭包
>
* 闭包的优势
    1. 实现了 变量 常驻内存
    2. 实现了 变量 的私有变量
    3. 避免了 变量 的全局污染
* 闭包劣势
    - 谨慎使用闭包: 由于会导致变量常驻内存,立即回收机制,无法回收变量,会有内存溢出的隐患;
>
```js
<ul>
    <li class="li_1">li_1</li>
    <li class="li_2">li_2</li>
    <li class="li_3">li_3</li>
    <li class="li_4">li_4</li>
    <li class="li_5">li_5</li>
</ul>  
    var ulEl = document.querySelector('ul');
    var lis = document.querySelectorAll('li');
    for(var i=0; i<lis.length; i++){
        lis[i].onclick = (function(index){
            return function(){
                alert(lis[index].innerText);
            }
        })(i)
    }
```
>
### 06-ES5继承
>
* js如何实现继承 组合构建
    1. 用子类的原型 = 父类的一个实例对象
    2. 在子类借用执行父类的构造函数
```js
function Animate(color, eat) {
        this.color = color;
        this.eat = eat;
    }

    Animate.prototype.move = function(){
        alert('Hi I am moving...');
    }

        // 小狗继承了Animate 
    function Dog(name,skill,color,eat){
        Animate.call (this,color,eat);
        this.name = name;
        this.skill = skill;
    }
        // 调用
    Dog.prototype = new Animate();
        // 

    Dog.prototype.kanjia = function(){
        alert('我会看家');
    }


    var oudi = new Dog('泰迪','看家','黄色','面包');

    alert(oudi.skill)

```
>
### 07-ES6继承
>
* es6 class  extends 关键词 用于方便的实现
>
```js

 // class 类  
    class Animate{
            // 构造器 构造函数
        constructor(color,eat){
            this.color = color; 
            this.eat = eat;
        }
        run(){
            alert('Hi I am running...');
        }
    }
        // Dog 继承 Animate
    class Dog extends Animate{
        constructor(name,skill,color,eat){
            super(color,eat);
            this.name = name;
            this.skill = skill;
        }
        jump(){
            alert('Hi jumping...')
        }
        wang(){
            alert('wangwang!!');
        }
    }

    class Cat extends Animate{
            
    }

    var oudi = new Dog('欧弟','爬树','黄色','牛排');
    oudi.jump();
    oudi.run();
```
>
