## vue起步
> 引入vue
 1. 开发版本 
 <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>  有很多提示
 2. 生产版本
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
> vue 语法 
1. {{ }} 用来插入文本内容
2. 指令  v-text v-html  
    + v-text 用来渲染文本
    + v-html 用来渲染标签
    + v-show 控制元素的显示和隐藏  它的特点是在页面里面使用display:none
    + v-if 也是控制元素的显示和隐藏 如果隐藏的话在页面里面这个节点是不会渲染的
    + v-else-if v-else
    + v-for 循环一个数组  里面两个属性 一个ele 一个index ，ele是每个对象，  index是每个下标。 用v-for的时候必须有一个key ，这个key是唯一的，key只能用number获取String，key在使用时必须使用v-bind值绑定的形式，指定key的值  
    ```
    <ul>
        <li v-for="(item , index) in list" :key="index">
            {{ item.title }}
        </li>
    </ul>
        var vm = new Vue({
        el: "#app",
        data() {
            return {
            list:[
                {
                    name : '张三',
                    id:1
                },
                {
                    name : '李四',
                    id:1
                },
                {
                    name : '王五',
                    id:1
                }
            ]
            };
        }})
    ```
    + v-bind 绑定一个属性   v-bind可以去掉 直接用一个:表示
    ```
        <h2 v-bind:title="title">
            我是标签
        </h2>
    ```
    + v-once只在页面里面渲染一次

3. 计算属性 computed 它是一个对象 这个对象里面有很多方法 用于计算
4. 侦听器 watch 用途就是监听某个数据的变化 对这个数据的变化执行一些方法  
 计算属性和侦听器主要的区别是计算属性会缓存我们计算的解构  

### vue事件 
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
4. 数组中嵌套对象
```
<div :class="['red','thin',{'active':isactive}]"></div>
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
## V-model双向数据绑定
> 基础知识
 1. v-bind 只能实现数据的单向绑定，从 M 自动绑定到 V，无法实现数据的双向绑定。  
 2. v-model 只能运用在表单元素中,实现双向绑定
 3. eval 把字符串解析执行，并拿到解析的结果(不属于此类知识)
 4. input输入框
>
>v-model制作简易计算器  
```
    <body>
    <div id="app">
        <input type="text" v-model="ok">
        <select v-model="opt">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>
        <input type="text" v-model="ok2">
        <input type="button" value="=" @click="calc()">
        <input type="text" v-model="result">
    </div>
    <script>
        var vm = new Vue({
            el:"#app",
            data(){
                return{
                    ok:0,
                    result:0,
                    ok2:0,
                    opt:'-'
                }
            },
            methods:{
                calc(){  //计算器算数的方法
                    switch(this.opt){
                        case  '+':
                            this.result = parseInt(this.ok)+ parseInt(this.ok2);
                            break;
                        case  '-':
                            this.result = parseInt(this.ok)- parseInt(this.ok2);
                            break;
                        case  '*':
                            this.result = parseInt(this.ok)* parseInt(this.ok2);
                            break;
                        case  '/':
                            this.result = parseInt(this.ok)/ parseInt(this.ok2);
                            break;
                   }   
                }
            }
        })
    </script>
    </body>

```

##  vue中$parent $children $refs $root之间的关系

>vue提供的这几种方法可以随便调用父子组件跟组件data里的值还有method中的方法

+ $parent 是子组件调用父组件的属性或方法，返回的是一个对象，因为只有一个父组件。写法：this.$parent.getParent()  

+ $children 是父组件调用子组件的属性或方法，返回的是一个数组，因为最少有一个子组件。  

+ $refs 是父组件调用某一个子组件的属性或方是指定的一个法，返回的是一个对象，因为子组件。 写法：this.$refs.child.getChild()  

+ $root 是子组件调用根组件的属性或方法，返回的是一个对象，因为只有一个根组件。写法：this.$root.getRoot()

##  定义vue组件  

 组件的出现，就是为了拆分vue实例的代码量的，能够让我们以不同的组件，来划分不同的功能板块，将来我们需要什么样的功能，就可以去调用对应组件即可  
 组件化和模块化的不同：  
 + 模块化是从代码逻辑的角度进行划分的，方便代码分层开发，保证每个功能模块的职能单一。
 + 组件化是从UI界面的角度进行划分的，前端的组件化，方便UI组件的重用。
>
>创建组件方式  

 + 如果使用Vue.component定义全局组件的时候，组建名称使用了驼峰命名，则在引用组建的时候，需要把大写的驼峰改为小写的字母，
同时两个单词之间使用 - 连接；  
 + 如果不使用驼峰，则直接使用名称即可。  
 + 无论哪种方式创建出来的内容，组件的template属性指向的模板内容，必须有且只能有唯一的根元素。  

1. 第一种方式： 第一个参数：组件的名称。第二个参数：Vue.extend创建的组件，其中template就是将来组件要展示的html内容  
```    
    Vue.component('my',Vue.extend({
        template:'<h1>vue.extend创建出的组件</h1>' 
    }))
```
2. 第二种方式：
```
    Vue.component('mycom2',{
            template:'<div><h3>这是直接使用Vue.component创建出来的组件</h3><span>123</span></div>'
        })
```
> 组件中的data和methods
1. 组件可以有自己的data数据。
2. 组件的data 和 实例的data 有点不一样，实例中的data可以为一个对象，但是组件中的data为必须是一个方法  
3. 组建中的data除了必须为一个方法之外，这个方法内部还必须返回一个对象才行；
4. 组件中的data数据，使用方式，和实例中的data使用方式完全一样。

### 组件传值

> Prop
1. prop的大小写：   
组件传值：通过props传值 这个props是写在我们组件里面的一个属性 传值通过这个属性来传值的  
HTML 中的特性名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。这意味着当你使用 DOM 中的模板时，camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名  

2. prop类型:String,Number,Boolean,Array,Object,Function,Promise
```
    props: {
    title: String,
    likes: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise // or any other constructor
    }
```
3. 单项数据流：  
    父级 prop 的更新会向下流动到子组件中，但是反过来则不行。每次父级组件发生更新时，子组件中所有的 prop 都将会刷新为最新的值。这意味着你不应该在一个子组件内部改变 prop。如果你这样做了，Vue 会在浏览器的控制台中发出警告。

4. 子组件向父元素传递值  这个是通过自定义事件来完成的  
    首先子组件向父元素传递事件  然后在这个子组件名称里面响应这个事件  在父元素的事件里面绑定这个事件 这个就是子组件向父元素进行传值  
5. 子组件与子组件进行通信  通过bus传递   首先子组件传递事件名称 另外一个组件在生命周期函数中响应这个事件
> prop传入一个对象的所有属性

+ 如果你想要将一个对象的所有属性都作为 prop 传入，你可以使用不带参数的 v-bind (取代 v-bind:prop-name)。例如，对于一个给定的对象 post：
```
    post: {
    id: 1,
    title: 'My Journey with Vue'
    }
```
```
下面的模板：
    <blog-post v-bind="post"></blog-post>
等价于：

    <blog-post
    v-bind:id="post.id"
    v-bind:title="post.title"
    ></blog-post>
```
> 生命周期 beforeCreated ，created ，beforeMounted ，mounted ，beforeUpdate ，update ，beforeDestroy ，destroy
1. 生命周期里面常用的两个生命周期钩子  一个是created 一个是mounted
2. created和mounted的区别是一个不可以操作dom 一个可以操作dom  这个created我们用引入vue的方式是可以的  但是在vue-cli中是不可以的

* .sync 修饰符  我们可以对我们传入的数据进行更改 写法是在我们需要给组件传递的数据加一个.sync  在更改的时候传一个 this.$emit("update:+我们接收的属性");

# 插槽
   Vue 实现了一套内容分发的 API，将 <slot> 元素作为承载分发内容的出口。  
   插槽（Slot）是Vue提出来的一个概念，正如名字一样，插槽用于决定将所携带的内容，插入到指定的某个位置，从而使模板分块，具有模块化的特质和更大的重用性。  
   插槽显不显示、怎样显示是由父组件来控制的，而插槽在哪里显示就由子组件来进行控制  
### 插槽的用法
> 默认插槽
+ 插槽默认插入的位置
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="lib/vue.js"></script>
</head>
<body>
    <div id="app">
        <div>123</div>
        <com>
            <div>
                插入组件的标签
            </div>
            456
        </com>
    </div>
    <script>
        var vm = new Vue({
            el:"#app",
            components: {
                "com" : {
                    template:"<h2>子组件<slot></slot></h2>"
                }
            }
        })
    </script>
</body>
</html>
```
+ 编译作用域
父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。

+ 后备内容 它只会在没有提供内容的时候被渲染。

> 具名插槽  

 用于标记往哪个具名插槽中插入子组件内容。  
 简单理解就是 给每一个 slot 一个name属性，父组件中 使用子组件标签时用的v-slot:name，要跟子组件的name匹配上，才会渲染出来

> 作用域插槽

用作访问我们组件里面的属性，   template内可以通过临时变量props来访问来自子组件插槽的数据msg

> 动态组件

让多个组件使用同一个挂载点(component)，并动态切换，这就是动态组件。
动态组件缓存

### 处理边界情况（一些特殊的情况的写法）
> vue中以$开头的是代表vue实例中所具有的属性或方法
> 访问元素 & 组件 

1. 访问根元素中的属性或方法
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="05-vue/lib/vue.js"></script>
    <style>
        .on{
            color: red;
        }
    </style>
  </head>
  <body>
    <div id="app">
        <com1></com1>
    </div>
    <script>
      var vm = new Vue({
        el: "#app",
        data(){
            return {
                rootInfo:"我是根元素的属性"
            }
        },
        methods: {
          alerts(){
            alert(111)
          }
        },
        components: {
          com1 : {
            data(){
              return {
                info:"组件1"
              }
            },
            template:"<p>{{ info }} <com2></com2></p>",
            components:{
              com2:{
                template:"<p>我是组件1的子组件</p>",
                created () {
                  console.log(this.$root.alerts())
                }
              }
            }
          }
        }
      });
    </script>
  </body>
</html>
```
2. 访问父元素的属性或方法 this.$parent
3. 访问子组件实例或子元素 this.$ref
4. X-Template 
```
<script type="text/x-template" id="hello-world-template">
  <p>Hello hello hello</p>
</script>
Vue.component('hello-world', {
  template: '#hello-world-template'
})
```

### vue提供的过渡效果  Vue 在插入、更新或者移除 DOM 时，提供多种不同方式的应用过渡效果。

> 单元素/组件的过渡 通过vue提供的组件transition来进行过渡
> 过渡的类名 
+ v-enter 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
+ v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
+ v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。
+ v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
+ v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
+ v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。
![图片示例](https://cn.vuejs.org/images/transition.png "图片示例")

###  vue的可复用性与组合

> 混入 混入 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。

### 自定义指令

常见的指令如 v-text v-model都是vue封装好的语法糖 
我们也可以封装自己的指令(用于对dom执行某些操作)
封装自己的指令是通过directives来执行的
1. 指令的常用的两个个钩子函数
bind指令第一次绑定到元素上执行的函数
inserted 指令插入到dom节点时执行的函数