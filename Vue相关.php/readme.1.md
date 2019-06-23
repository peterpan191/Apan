## es6入门
> 定义变量 let const
 let 定义的值可以被修改 而const定义的值不能被修改 let和const只作用与当前代码块
> 解构赋值 [a , b] = [1 ,2]
  剩余运算符 ...
> 箭头函数 
  1.不带参数的写法 () =>  a 
  2.带一个参数的写法 a => a
  3. 带多个参数的写法  (a,b) => a+b
  4 return 多行写法 (a,b) => {
      return a+b;
  }
  5. 箭头函数的this指向 settimeout会改变this的指向 如果我们用箭头函数 settimeout就改变不了this的指向
  ```
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
> array.from 把一个类数组对象转换成数组  把字符串转换成数组
```
    var a = function(a,b){
            
        //var c = arguments.splice(0,1); // 类数组的特点 不能执行数组的方法;
        var d = Array.from(arguments).splice(1,1);
        console.log(d);
    }
    a(1,2);
```
```
   var str = 'abc'; ///str.split("").join()
   var ars = Array.from(str);
```
数组去重 array.from(new Set(arr))
> promise 解决回调的写法
```
var msg = new Promise(function(resolve,reject){ // resolve 处理成功的函数 reject是处理失败的的函数
        $.ajax({
               method : "post", // get或post DELETE update
               url : "http://www.bufantec.com/api/douban/movie/in_theaters", // 请求的地址
               dataType : "JSON", // 返回数据的类型
               success (val){ // 成功返回执行的函数
                 resolve(val)
               },
               failed(val){ // 请求失败的函数
                reject(val)
               }
           });
    })
    msg
    .then(function(val){
        console.log(val,"成功请求")
    }).catch(function(val){
        console.log(val,"失败请求")
    })
```
> 常用的数组的操作 map、filter、foreach、some、every、includs、find、findIndex  这几个都是对数组进行循环 
1. map可以对循环的数组添加一些属性 循环之后再定义一个变量去保存这个循环之后的数组 这个变量的值是改变之后的
2. forEach 是对数组的循环 但是循环之后再定义一个变量去保存这个循环之后的数组 这个变量的值没有找到
3. filter 筛选返回符合条件的元素  
4. some 、 erery
   + some 当数组里面的元素有某一项符合时就返回一个布尔值 true 如果没有就返回false
   + every 当数组中的每一项都符合某个条件时就返回true 如果有一项不满足就返回false
5. includes 当数组中的某一项符合时返回true 不满足返回false 跟indexOf()很像 
6. find和findIndex 分别是找到某个元素 和找到某个元素对应的一个下标 如果找到那个元素即使下面有符合条件的元素也不会向下执行



