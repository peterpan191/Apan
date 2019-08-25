## JSON
>
### JSON概念 Javascript Object Notation 对象表示法
>
* 用途: json多用于存储和交换文本信息的语法,进行数据的传输
>
* JSON (JavaScript Object Notation) js对象简谱 轻量级的数据交换格式  利于阅读和编写 易于机器解析和生成;
>
表达式: var p = { 'name':'张三','age': 18 }
>
* 语法: 
1. json:
    * 对象表示为键值对: 
        * 键可以用双引也可以用单引,也可以不用引号;
        * 值类型: 
            * number 
            * string 
            * 布尔值 
            * 数组: ['person':[{},{}]],
            * 对象: {'person':{'name':"张三",'age': 23}}
            * null
    * 数据由逗号分隔
    * 花括号保存对象
    * 方括号保存数组
2. 获取值
    * json对象.键名
    * json对象['键名']
    * 数组对象[索引]

>
* JSON 与 JS 对象的关系
    JSON 是 JS 对象的字符串表示法，它使用文本表示一个 JS 对象的信息，本质是一个字符串
* JSON 和 JS 对象互转
    * 要实现从JSON字符串转换为JS对象，使用 JSON.parse() 方法：
    ```
         var obj = JSON.parse('{"a": "Hello", "b": "World"}'); //结果是 {a: 'Hello', b: 'World'}
    ```
    * 要实现从JS对象转换为JSON字符串，使用 JSON.stringify() 方法：
    ```
        var json = JSON.stringify({a: 'Hello', b: 'World'}); //结果是 '{"a": "Hello", "b": "World"}'
    ```
>
