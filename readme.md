## vue
> 计算属性 computed 它是一个对象 这个对象里面有很多方法 用于计算
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./lib/vue.js"></script>
</head>
<body>
    <div id="app">
            {{ info }} 反转的{{ reverseMessage }} 
            <ul>
                <li v-for="(item , index) in lists" :key="item.id">
                    {{ item.name }} {{ item.age }}
                </li>
            </ul>
    </div>
    <script>
        var vm = new Vue({
            el:"#app",
            data(){
                return {
                    info : "true1",
                    list:[
                        {
                            name:"张三",
                            id :1
                        },
                        {
                            name:"李四",
                            id :2
                        },
                        {
                            name:"王五",
                            id :3
                        },
                    ]
                }
            },
            computed:{
                reverseMessage(){
                    return this.info.split("").reverse().join("");
                },
                lists(){
                    var arrs = this.list.map(ele =>{
                        ele.age = 40;
                        return ele
                    })
                    return arrs;
                }
            }
        })
    </script>
</body>
</html>
```
> 侦听器 watch 用途就是监听某个数据的变化 对这个数据的变化执行一些方法
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./lib/vue.js"></script>
</head>
<body>
    <div id="app">
           <input type="text" v-model="message">
           {{ message }}
    </div>
    <script>
        var message = 11
        var vm = new Vue({
            el:"#app",
            watch: {
                // 如果 `question` 发生改变，这个函数就会运行
                message: function (newQuestion, oldQuestion) {
                    console.log("newQuestion" ,newQuestion )
                    console.log( "oldQuestion" ,oldQuestion)
                    //this.message = this.message ++ ;
                }
            },
            data(){
                return {
                    num : 10,
                    message
                }
            }
        })
    </script>
</body>
</html>
```
+ 计算属性和侦听器主要的区别是计算属性会缓存我们计算的解构
> vue事件 
1. 写法是v-on:["click","mouseover"] = "在这个引号里面执行一些表达式"
```
 <div id="app">
           <div v-on:mouseover=" num ++ ">
                点我加1
           </div>
           {{ num }}
    </div>
```
 2. 在vue的实例类下面新建一个methods 这个methods存放的是我们的事件方法 
 ```
 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./lib/vue.js"></script>
</head>
<body>
    <div id="app">
           <div v-on:click=" add(2) ">
                点我加1
           </div>
           {{ num }}
    </div>
    <script>
        var vm = new Vue({
            el:"#app",
            data(){
                return {
                    num : 10
                }
            },
            methods: {
                add(val){
                    this.num = this.num + val;
                }
            }
        })
    </script>
</body>
</html>
 ```
3. 事件修饰符 prevent stop once
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="./lib/vue.js"></script>
    <style>
    .box{
        width: 200px;
        height: 200px;
        background: red;
    }
    .child{
        width: 100px;
        height: 100px;
        background: blue;
    }
    </style>
</head>
<body>
    <div id="app">
          <div class="box" @click.once="parentEvents">
                <div class="child" v-on:click.stop="childEvents">
                    
                </div>
          </div>
          <a href="https://www.baidu.com" v-on:click.prevent="prents">跳转百度</a>
    </div>
    <script>
        var vm = new Vue({
            el:"#app",
            data(){
                return {
                    num : 10
                }
            },
            methods: {
                prents(){

                },
                parentEvents(){
                    this.num ++ ;
                    alert(this.num);
                },
                childEvents(){
                    alert('我是子级');
                },
                add(val){
                    this.num = this.num + val;
                }
            }
        })
    </script>
</body>
</html>
```
4. 事件简写 v-on:click 简写为@click
5. 系统修饰符(按键) alt shift delete 空格等 用法是比如有一个点击事件 我们直接在后面加上我们需要的系统修饰符
```
<div @click.alt="doSomething">Do something</div>
```
> class绑定  
1. 三元运算符
```
    <div :class=" num <= 10 ? 'on' : 'green'">
        1234
 </div>
```
2. 对象写法  :class = 第一个参数是需要绑定的class名称 第二个参数是一个表达式或者布尔值
```
<div v-bind:class="{ green: isActive }">class绑定</div>
```
3. 数组写法
```
<div v-bind:class="[activeClass, errorClass]">数组绑定class</div>
 data(){
    return {
        num : 10,
        isActive : true,
        className : "on",
        activeClass : "on",
        errorClass : "green"
    }
},
```
> 内联样式绑定 写法 :style是需要绑定的属性 里面用个大括号装载我们需要写的样式 
```
这个是加引号的
<div :style="{color : 'green'}">
    内联样式
</div>
这个是不加引号的 
 <div :style="{color : red}">
                内联样式
            </div>
```
> .lazy 失去焦点时显示