# vue.javascript 数据驱动
>
## vue指令
>
1. 计算属性: computed:{}
>
2. vue事件: methods:{}
>
3. 生命周期创建: created(){}
>
4. 侦听器: watch:{}
>
5. 定义实例内部私有组件: conponents:{}
>
6. 单向数据流: (数据自上而下流,事件自下而上走)
## 全局指令 
>
1. 过滤器: Vue.filter()
>
## 第一天vue起步
>
* Vue.js 的核心是一个允许采用简洁的模板语法来声明式地将数据渲染进 DOM 的系统：ViewModel 的缩写 vm  免除操作Dom   
>
* MVVM: M指的是new实例中data,用来保存每个页面的数据的; v指的是new实例控制的元素区域; vm指的是new实例出来的对象,就是MVVM的调用者.
>
### 01-引入vue
1. 开发版本 
    * `<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`  有很多提示
2. 生产版本
    * `<script src="https://cdn.jsdelivr.net/npm/vue"></script>`
>
### 02-vue 语法 
>
1. {{ }} 用来插入文本内容 调用的是属性的值  有闪烁问题
>
2. v-text 渲染文本  设置属性 例: v-text="name"; 
    * 写多个只渲染第一个  {写多个属性和值都渲染} 
    * 会覆盖元素原来的内容,只会代替自己这个占位符,不会把整个元素清空;
>
3. v-html 渲染标签  属性 例: v-html="name";
>
4. v-cloak 能够解决插值表达式闪烁的问题  需要在style样式里设置: [v-cloak]{display: none}
>
5. 注意在vue实例中,如果想要调用data上的数据,或想要methods的方法,必须通过this.数据属性名 或 this.方法名 来进行访问,这里的this代表我们new出来的 vm实例对象
>
### 03-API指令
>
>
#### 01-v-show 控制元素的显示和隐藏
>
* 它的特点是在页面里面使用display:none  true显示  false隐藏  可以设置判断表达式    
>
#### 02-v-if 也是控制元素的显示和隐藏 
>
* 如果隐藏的话在页面里面这个节点是不会渲染的  可以设置判断表达式
>
* v-else-if v-else 条件判断是否隐藏  判断从上往下,有一满足渲染结束,下面满足也不再执行
>
#### 03-v-show与v-if的区别: 
>
* 
    1. 手段：v-if是动态的向DOM树内添加或者删除DOM元素；v-show是通过设置DOM元素的display样式属性控制显隐；
    2. 编译过程：v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件；v-show只是简单的基于css切换；
    3. 编译条件：v-if是惰性的，如果初始条件为假，则什么也不做；只有在条件第一次变为真时才开始局部编译（编译被缓存？编译被缓存后，然后再切换的时候进行局部卸载); v-show是在任何条件下（首次条件是否为真）都被编译，然后被缓存，而且DOM元素保留；
    4. 性能消耗：v-if有更高的切换消耗；v-show有更高的初始渲染消耗；
    5. 使用场景：v-if适合运营条件不大可能改变；v-show适合频繁切换。
    6. 总结: 切换频繁使用v-show 因为基于简单css切换 性能消耗低   运营条件改变次数不多 与 两个需要配合使用时 使用v-if
>
>
#### 04-v-for 
>
* 循环一个数组  里面两个属性 一个ele 一个index ele是每个对象  index是每个下标 
>
* :key 用v-for的时候必须有一个key 这个key是唯一的  
    * v-bind:key绑定属性 可省略v-bind 直接写:key="";  
    * 果不加':'会把key当做字符串渲染; 加':'当成属性,寻找属性的值;
    * v-for循环时,key属性只能使用number或string
    * 保证数据唯一性,例如在复选框选中状态下,添加新数据,没有key,选中的项目会变化.
    * 在组件中或一些特殊情况中,如果v-for有问题,必须使用指定唯一的字符串/数字 类型.
>
* in 后面我们放  普通数组，对象数组，对象， 还可以放数字 注意：如果使用 v-for 迭代数字的话，前面的 count 值从 1 开始
>
* for循环四种形式: 
    * 普通循环形式 v-for="(item,index) in list"
    * 循环对象数组
    * 循环对象 v-for="(val, key, i) in list" 值为val 键为key  i为下标
    * 迭代数字 v-for="count in 5" 起始值为1
>
* 迭代数字实例`<p v-for="count in 5">这是第 {{ count }} 次循环</p>`
>
* 定义数组用冒号 list:[];   声明数组用等号 var list={}
>
* ```javascript
    //  注意引入vue.js和jquery.js
     <ul>
            <li v-for="(item , index) in list" :key="index">
                {{ item.title }}
            </li>
        </ul>
         var vm = new Vue({
        el: "#app",
        data() {
          return {
            list:[]
          };
        },
         created(){
                var that = this;
                $.ajax({
                    method: "post",
                    url: "http://www.bufantec.com/api/douban/movie/in_theaters",
                    dataType: "JSON",
                    success(val){ //请求成功的函数
                        that.list = val.data;
                        console.log(that.list);
                    },
                    failed(val){ //请求失败的函数

                    }
                })
            }
        })
    ```
>
>
* v-bind 绑定data一个属性   v-bind可以省略掉 直接用一个:表示   v-bind后可以写合法的js表达式
>
* 操作class名，v-bind   多个类名覆盖，:class=【a1,a2】 注意在data中声明定义 
>
* 如 v-bind:class="classProperty" 中，v-bind 是指令，: 后面的 class 是参数，而 classProperty 则在官方文档中被称为“预期值”）
>
* * 属性如果不用引号,默认是变量查找data里变量, 加引号是字符串属性
>
* ```javascript
        <h2 v-bind:title="title">
            我是标签
        </h2>
    ```
>
* v-model
    1. v-model 用在 input 元素上时;在给`<input />` 元素添加 v-model 属性时，默认会把 value 作为元素的属性，然后把 'input' 事件作为实时传递 value 的触发事件
    2. 给组件添加 v-model 属性时，默认会把 value 作为组件的属性，然后把 'input' 值作为给组件绑定事件时的事件名
>
* v-once 绑定数据绑定的数据不变 只在页面里面渲染一次 随后的重新渲染,元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。
>
* @click  =v-on
>
### 04-扩展
>
* arrayObject.toLocaleString() 把数组转换为本地字符串。
>
*  new Date().toLocaleString()  //2019/6/20 下午10:26:13
>
* 逆转字符串 this.message = this.message.split('').reverse().join('')
* reverse只能颠倒数组的顺序  所以需要先转成 字符串数组 再反转 得到颠倒后的字符串数组  ==>想要字符串 join装成字符串
>
* 反转数组 str = arr.split('').reverse().join('')  var arrs = Array.from(str)
>
* reverse() 方法用于颠倒数组中元素的顺序;
>
* 数组.split(" ") 用于把一个字符串分割成字符串数组;
>
* splice(index下标,number数量,obj要添加的项目) 方法向/从数组中添加/删除项目，然后返回被删除的项目。
>
* join() 方法用于把数组中的所有元素放入一个字符串。元素是通过指定的分隔符进行分隔的。
>
* sort() 方法用于对数组的元素进行排序。有缺陷一收尾数字排序
* arr.sort(sortNumber)
```js
function sortNumber(a,b){
    return a - b
}
```
>
* substring() 方法用于提取字符串中介于两个指定下标之间的字符。
>
* replace() 方法第一个参数除了可写一个字符串之外,还可以定义一个正则; 替换字符串; string.replace(/单纯/g,'邪恶')
>
### 05-第一天内容总结
>
1. MVC 和 MVVM 的区别
>
2. 学习了Vue中最基本代码的结构
>
3. 插值表达式   v-cloak   v-text   v-html   v-bind（缩写是:）   v-on（缩写是@）   v-model   v-for   v-if     v-show
>
4. 事件修饰符  ：  .stop   .prevent   .capture   .self     .once
>
5. el  指定要控制的区域    data 是个对象，指定了控制的区域内要用到的数据    methods 虽然带个s后缀，但是是个对象，这里可以自定义了方法
>
6. 在 VM 实例中，如果要访问 data 上的数据，或者要访问 methods 中的方法， 必须带 this
>
7. 在 v-for 要会使用 key 属性 （只接受 string / number）
>
8. v-model 只能应用于表单元素
>
9. 在vue中绑定样式两种方式  v-bind:class   v-bind:style
>
## 第二天 vue事件
>
### 01-计算属性
>
* computed 它是一个对象,这个对象有很多方法,用于计算;
* 计算属性里所用到的任何data中的数据发生了改变,都立即重新计算,如果没有发生变化,不会重新求值
* computed本质上是一个方法 ,只不过我们在使用时,直接把他当属性使用,并不会当方法去调用,
* 注意
    1. 计算属性:在引用时,一定不要加()去调用,直接当做普通属性去使用就好了
    2. 只要计算属性,这个function内部,所用到的任何data中的数据发生了变化,就会立即重新计算这个计算属性的值
    3. 计算属性的求值结果会被缓存起来,方便下次直接使用,
    4. 如果计算属性方法中,所有的数据都没有发生过变化,则不会重新对计算属性求值
>
* 反转数组和给html添加一条数据
>
* ```javascript
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
                     // 遍历list数组 添加age   在调用lists
                    var arrs = this.list.map(ele =>{
                        ele.age = 40;
                        return ele  //丢出ele
                    })
                    return arrs; //丢出数组
                }
            }
        })
    </script>
    </body>
    ```
>
### 02-侦听器
>
* watch 用途就是监听某个数据的变化,对这个数据的变化执行一些方法
>
* 双向绑定 input输入框 v-model=""
>
* ```javascript
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
    ```
>
### 03-计算属性computed\侦听器watch和事件methods之间对比
>
1. `computed`属性的结果会被缓存,除非依赖的响应式属性变化才会重新计算.主要当做属性来使用
2. `methods`方法表示一个具体的操作,主要书写业务逻辑;
3. `watch`一个对象,键是需要观察的表达式,值是对应回调函数.主要用来监听 某些特定数据的变化,从而进行某些具体的业务逻辑操作,可以看做是computed和methods的结合体;
>
* 主要区别主要在于计算属性会缓存我们计算的解构
>
### 04-vue事件
>
* 在vue实例类--方法必须写在methods里面; methods属性中定义了当前vue实例所有可用的方法
>
* 事件绑定机制: 简写 v-on:click 简写为@click
>
* 1. 表达式: v-on:["click","mouseover"] = "在这个引号内执行一些表达式"
>
* ```javascript
        <div id="app">
            <div v-on:mouseover=" num ++ ">
                    点我加1
            </div>
            {{ num }}
        </div>
    ```
>
* 2. 在vue的实例类下面新建一个methods 这个methods存放的是我们的事件方法 
>
* ```javascript
    <body>
    <div id="app">
           <div v-on:click=" add(2) "> //add可以加()和不加()区别是: 加()可以传参
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
    ```
>
### 05-事件修饰符
>
* .stop阻止冒泡
    * v-on:click.stop="执行命令"
>
* .prevent阻止默认事件
    * v-on:click.prevent="执行命令"
>
* .once 只发生一次
    * v-on:click.once="执行命令"
>
* .ait/.ctrl/.delete 按住按钮点击事件
    * v-on:click.alt="执行命令"
>
* .self 实现只有点击当前元素时候，才会触发事件处理函数 效果较差
    * self 只会阻止自己身上冒泡行为的触发，并不会真正阻止 冒泡的行为
>
* .capture 捕获事件 从外到里执行
    * v-on:click.capture="执行命名"
>
### 06-class与style绑定
>
* v-bind: 绑定
* class增加权重color: red + `!important`;
>
* 1. 三元(目)运算符
* ```javascript
    <div :class=" num <= 10 ? 'on' : 'green'">
        1234
    </div>
    ```
>
* 2. 对象写法: :class = 第一个参数是需要绑定的class名称 第二个参数是一个表达式或者布尔值
>
* class使用v-bind绑定 对象时,对象的属性是类名,所以对象的属性可带引号也可不到引号;
>
* ```javascript
    <div v-bind:class="{ green: isActive }">class绑定</div>
    ```
>
* 3. 数组写法 如不在data定义,数组里['','']使用引号 
    * 数组中使用三元表达式,
    * 对象中嵌套对象
>
* ```javascript
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
>
* 4. 内联样式: 内联样式绑定 写法 :style是需要绑定的属性 里面用个大括号装载我们需要写的样式   :绑定是动态  不加: 绑定的是静态
    * 直接通过`style`的形式,书写样式对象;
    * 将样式对象,定义到`data`中,并直接引用到`:style`中;
    * 在`:style`中通过数组,引用多个`data`上的样式对象;
>
* ```html
    这个是加引号的
    <div :style="{color : 'green'}">
        内联样式
    </div>
    这个是不加引号的 
    <div :style="{color : red}">
        内联样式
    </div>
    ```
>
* 属性如果不用引号,默认是变量查找data里变量, 加引号是字符串属性
>
### 07-表单输入框
>
* 需要 v-model
>
* 多行文本 `<textarea></textarea>`
* ```html
    <span>Multiline message is:</span>
    <p style="white-space: pre-line;">{{ message }}</p>
    <br>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>
    ```
>
* 复选框
>
* ```html
    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>
    data{
        return{
            checkedNames: []
        }
    }
    ```
>
* 单选按钮
>
```html
   <input type="radio" id="one" value="One" v-model="picked">
    <label for="one">One</label>
    <br>
    <input type="radio" id="two" value="Two" v-model="picked">
    <label for="two">Two</label>
    <br>
    <span>Picked: {{ picked }}</span> 
    data{
        return{
            picked: ""
        }
    }
```
>
* 选择框 option可以for循环数组
* ```html
    <select v-model="selected">
    <option disabled value="">请选择</option>
    <option v-for="item in list" :key="item">{{item.name}}</option> 
    </select>
    <span>Selected: {{ selected }}</span>
    data{
        return{
           selected:"" ,
           list:[{},{}]
        }
    }
    ```
>
### 08-表单修饰符
>
* .lazy
    * v-model.lazy 失去焦点再确定值
>
* .number
    * v-model.number 只能输入数字  input输入框里设置type="number"
* .trim
    * v-model.trim 前后空格清除,中间多个空格默认一个空格
>
>
## 第三天
>
>
### 01-创建组件
>
* 全局组件 component
    * 1. 在js中vm上面,Vue.component('组件名',{函数或data数据,template:'组件要插入的内容'})
    * 2. 在页面设置`<com></com>`
>
* 局部组件 components
    * 1. 在vm里,设置components:{'组件名':{函数或data数据, template:'组件要插入的内容'}}
    * 2. 在页面设置`<com></com>`
>
* 组件大小写问题: 在dom里面不识别大写, 如果要识别的话需要用 - 链接
>
* 组建的特点: 组件之间的数据是不想通的,
>
* 父元素向子组件传递数据 props 数组传值  对象设数据类型
    * 1. 在`<com></com>`设置属性prop="内容",或 :prop="prop" v-bind绑定到父组件的data里  例: prop-com, 在js中要为驼峰命名 propCom
    * 2. 在父元素data设置prop值 如果直接传值可以不写
    * 3. 在子组件创建数组接收数据 ==> props:['属性名'] 用来接收父元素传给子组件的数据
    * 4. 在子组件创建对象指定数据类型 ==> props{属性名: 数据类型}  props是只读的
    * 5. 在template中使用插值表达式
    * props对象类型, 有八种类型 作用就是对我们传递的数据进行类型检查 
        1. String
        2. Number
        3. Boolean
        4. Array
        5. Object
        6. Date
        7. Function
        8. Symbol 
    * 单向数据流,父级prop 的更新会向下流动到子组件中,但是反过来则不行,如果我们想改变这个传值,我们用data或者计算属性来代替这个传值

>
* 子组件向父元素传递数据 $emit
    * 1. 创建组件,在template设点击事件,点击触发子组件methods里的事件
    * 2. 给点击事件设 this.$emit('响应事件名',this.子组件要插入内容)
    * 3. 给`<com></com>`设置属性 @响应事件名="父组件点击事件名" 
    * 4. 父组件data里设接收子组件数据的元素
    * 5. 父组件methods里,点击事件赋值; 例: 点击事件名(val){ this.4的元素 = val }
    * 6. 在页面使用插值表达式; 将传入的数据导入页面;
    * 子组件向父元素传递值  这个是通过自定义事件来完成的
    * 首先子组件向父元素传递事件  然后在这个子组件名称里面响应这个事件  在父元素的事件里面绑定这个事件 这个就是子组件向父元素进行传值
    * 可以理解成: 子组件发生变化,通知父组件,做一些事情
>
* 子组件之间传递数据: 方法一: 
    * 1. 先组件一向父元素传递数据
    * 2. 再父元素向组件二传递数据
* 子组件之间传递数据: 方式二:
    * 1. 在vm实例上先创建bus实例: var bus = new Vue();
    * 2. 在组件一template设置点击事件 触发自身 methods事件;
    * 3. 在methods事件设置,bus.$emit('busevent',this.数据)
    * 4. 在组件二创建生命周期钩子 created(){}; data定义接收数据的元素
    * 5. 在钩子函数里设置: bus.$on('busevent', val => {this.接收数据的元素 = val})
    * 6. 组件二template使用 插值表达式
 * 方式二
    1. 创建两个组件
    2. 创建一个vue实例用来接收数据 bus
    3. 要传输的组件中,设点击事件,触发 bus.$emit('响应事件名',要传递的数据)
    4. 要接收据的组件中, 设生命周期钩子,在页面加载时接收数据
    5. 钩子函数中, 设 bus.$on('响应事件名', val => { this.要接收数据的元素 = val })   

>
* 简单好用创建组件方式:
    * 1. 在vue实例中设; components:{ 组件名:{template:"#id"} }
    * 2. 页面在app外设置 <template id="id">设置内容</template>
    * 3. 在app中调用组件名即可
>
### 02-组件方式
>
* 什么是组件： 组件的出现，就是为了拆分Vue实例的代码量的，能够让我们以不同的组件，来划分不同的功能模块，将来我们需要什么样的功能，就可以去调用对应的组件即可；
组件化和模块化的不同：
* 模块化： 是从代码逻辑的角度进行划分的；方便代码分层开发，保证每个功能模块的职能单一；
* 组件化： 是从UI界面的角度进行划分的；前端的组件化，方便UI组件的重用；
>
* 定义组件的创建
>
* 方式一  使用 Vue.extend 创建组件
    1. 使用 Vue.extend 来创建全局的Vue组件
    ```javascript
         var com1 = Vue.extend({
       template: '<h3>这是使用 Vue.extend 创建的组件</h3>' // 通过 template 属性，指定了组件要展示的HTML结构
    // })
    ```
    2. 使用 Vue.component('组件的名称', 创建出来的组件模板对象) 
    ```javascript
        Vue.component('myCom1', com1)
    // 如果使用 Vue.component 定义全局组件的时候，组件名称使用了 驼峰命名，则在引用组件的时候，需要把 大写的驼峰改为小写的字母，同时，两个单词之前，使用 - 链接；
    // 如果不使用驼峰,则直接拿名称来使用即可;
    ```
    3. 如果要使用组件，直接，把组件的名称，以 HTML 标签的形式，引入到页面中，即可
    ```html
        <my-com1></my-com1>
    ```
    * 总结: 
        * Vue.component 第一个参数:组件的名称,将来在引用组件的时候,就是一个 标签形式 来引入 它的
        * 第二个参数: Vue.extend 创建的组件  ,其中 template 就是组件将来要展示的HTML内容
    ```javascript
         Vue.component('mycom1', Vue.extend({
      template: '<h3>这是使用 Vue.extend 创建的组件</h3>'
    }))
    ```
>
* 方式二  直接使用 Vue.component 创建出来组件
    1. 只能有一个根元素,有两个需要在外面用标签包裹起来
    ```javascript
    // 注意:不论是哪种方式创建出来的组件,组件的 template 属性指向的模板内容,必须有且只能有唯一的一个根元素
    Vue.component('mycom2', {
      template: '<div><h3>这是直接使用 Vue.component 创建出来的组件</h3><span>123</span></div>'
    })
    ```
    2. 使用 标签形式,引入自己的组件
    ```html
       <mycom2></mycom2>
    ```
* 方式三 通过 template 元素 在外部定义的组件结构
    1. 定义template标签
    ```javascript
        Vue.component('mycom3', {
            template: '#tmpl'
        })
    ```
    2. 定义组件html模板结构
    ```html
         <!-- 在 被控制的 #app 外面,使用 template 元素,定义组件的HTML模板结构  -->
        <template id="tmpl">
            <div>
            <h1>这是通过 template 元素,在外部定义的组件结构,这个方式,有代码的只能提示和高亮</h1>
            <h4>好用,不错!</h4>
            </div>
        </template>
    ```
* 方式四  var login={template: `<h1><h1>`}  components:{ login }
>
### 03-组建的data数据
>
1. 组件可以有自己的data数据
>
2. 组件的 data 和 实例的 data 有点不一样,实例的data 可以为一个对象,但是,组件的data必须是一个方法;
>
3. 组件中的 data 除了必须是一个方法外,这个方法内部,还必须返回一个对象;(return)
>
4. 组件中 data 数据,使用方式和实例中的 data 使用方式完全相同
>
5. 组件中 data 可以直接return一个外面定义的对象, 但是多个组件的话,实际上是共用的同一个对象;如果是data里的对象,实际上每创建一个组件就会生成一个data,hubugabrao
>
### 04-生命周期钩子函数
>
* 常用: created 和mounted  一般我们用来初始化  区别是一个可以操作dom 一个不可以 mounted是可以操作dom
>
* 家族: `beforeCreate(),created(), beforeMount(),mounted(), beforeUpdate() updated(), beforeDestroy() destroyed()`
>
* created()在加载时渲染执行
>
* mounted()在页面渲染完成执行
>
* updated()在修改时执行
>
* destroyed()在销毁时执行
>
1. beforeCreate() 第一个生命周期函数,创建阶段,表示实例完全被创建出来之前,会执行他.
    * 注意: 在beforeCreate()生命周期执行时, data和 methods中的数据还没有初始化
>
2. created() 第二个生命周期,创建阶段,表示在加载时渲染完成执行, 
    * 在created()中,data 和 methods 都已经被初始化好了
    * 如果调用methods的方法,或操作 data 中数据,最早只能在created中操作
>
3. beforeMount() 第三个生命周期,创建阶段,表示在页面渲染完成前执行,
    * 表示模板已经在内存中编辑完成,但尚未把模板渲染到页面
    * 在beforeMount()执行的时候,页面的元素,还没有被真正替换过来,只是之前的模板字符串
>
4. mounted() 第四个生命周期,创建阶段, 表示内存中的模板已经渲染到页面
    * 如果通过某些插件要操作页面的DOM节点,最早要在mounted中进行
    * mounted() 是实例创建期间的最后一个生命周期函数,当执行完 mounted 表示实例完全创建好
>
5. beforeUpdate() 第五个生命周期函数,运行阶段 表示修改了数据,但页面没有更新渲染,
    * 执行beforeUpdate()时, 页面中显示的数据,还是旧的.此时的data数据是最新的,页面尚未和最新的数据保持同步 
    * 会根据 date 数据的变化,选择性的触发0次到多次;
 >
6. updated() 第六个生命周期,运行阶段,表示修改渲染到页面时执行
    * updated 事件执行时,页面和data 数据已经保持同步了,都是最新的;
    * 会根据 data 数据的变化,选择性执行0次到多次
>
7. beforeDestroy() 第七个生命周期,表示销毁之前执行
>
8. destroyed() 表示销毁时执行;
>
### 05-.sync修饰符
>
* 可以对传入的数据进行修改,写法是,在我们需要给组件传递数据加个 .sync 在更改时传一个 this.$emit("update:+我们接收的属性");
>
* 1. 把要修改数据绑定到组件类似父传子: :message(绑定到组件props).sync="mes(父元素元素)"
>
* 2. 组件template里添加点击事件 触发自身methods事件
>
* 3. 事件里 this.$emit('updata:message(绑定的props名)',this.要修改的数据)
>
* 功能: 
    * 当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定  
    * prop （父子组件传递数据的属性） 进行“双向绑定”

>
### 06-input输入框 自动获得焦点
>
* 方式一: html设置 autofocus 
>
* 方式二: 操作dom document.getElementById('search')   .focus()
>
* 方式三: 
* 使用 Vue.directive() 定义全局的指令 v-focus
    * 参数1: 指令的名称,注意,定义时,在指令名称前面,不需要加v- 前缀. 但调用时,在指令前加 v-前缀进行调用
    * 参数2: 是一个对象,有一些指令相关的函数,这些函数可以在特定的阶段,执行相关的操作
```javascript  
    // 注册一个全局自定义指令 v-focus
    Vue.directive('focus', {
        // 当绑定元素插入到 DOM 中。
        inserted: function (el,binding) { //inserted 表示元素 插入到DOM中的时候，会执行 inserted 函数【触发1次】
                // 聚焦元素
                el.focus();
        }
    });
    //私有
     directives:{
        'focus':{
            inserted: (el) =>{
                el.focus();
            }
        }
     }
```
>
* 在input输入框使用 v-focus指令
```html
    <input type="text" v-focus/>
```
>
### 07-循环生成组件
>
1. 使用 v-for 遍历数组生成; 将item index 采用父传子数据形式把数据传递给子组件
2. 子组件 props数组(数据库) 接收数据
3. 在组件中使用传递的数据,生成组件
>
>
## 第四天
>
### 01-插槽
>
* 1. 在组件template中 使用slot标签占位  可以在组件进行相应的操作/添加内容
>
### 02-具名插槽
>
1. template中在需要的位置设slot标签; 设置属性name="属性名"
2. 页面组件中设置template标签: 属性设 v-slot:属性名  即可添加内容;  v-slot: 简写: #
>
### 03-作用域插值
>
1. template中设slot标签: 设置属性v-bind:数据名="需要的数据" 可以多个  
2. 页面组件中设template标签: 属性设置  v-slot:default="数据集合名(任取)" 子传父组件传递数据 可代替$emit 与$on
3. 调用: {{ 数据集合名.数据名 }}
>
### 04-动态组件切换
>
1. 需要在data定义, 组件名:"组件名"
2. 两个组件或多个组件切换: 页面设置 component 标签: 设置属性 v-bind:is="组件名"  
3. 点击事件切换 @click="事件 "
4. 事件中: if(组件名 == "组件一"){ this.组件名 = "组件二"}
>
### 04-组件混入 mixins
>
1. 混入就是 可以使用 mixins:[] 调用到公共的数据
2. 例如: 在vm里不写数据; 将数据设为公共数据: var obj={需要的数据}
3. 在父元素 和 组件里  都可以调用, 例: mixins:[obj]
>
### 05-子组件向父元素要数据  == 父传子 props
>
1. this.$parent.属性或方法
2. 生命周期和方法里 都可以调用
>
### 06-父元素向子组件要数据 == $emit 与 $on
>
1. 在页面组件标签设置属性: ref = "名称"  例: `<login ref="childs"></login>`
2. 调用时, this.$refs.名称.属性或方法 `this.$refs.childs.add`
3. 生命周期和方法里 都可以调用  
4. 页面不可直接调用
>
### 07-向根元素要数据 边界情况
>
* 注意: 如果只有一层子组件,在组件可以直接用 $parent 方法
    * 如果有两层,可以用$parent.$parent
    * 如果多层 就需要使用 $root 直接访问 根元素
>
1. $parent 访问父元素里面的属性或方法 $root 访问vue实例类里面的属性或方法
2. 在子组件使用: this.$root.属性或方法   访问根元素
>
### 08-Vue.nextTick()
>
* 在下次 DOM 更新循环结束之后执行延迟回调,在修改数据之后立即使用这个方法，获取更新后的 DOM。
1. 可用于获取焦点 directive
```js
directive:{
    focus:function(el,binding){
        //vue提供了一个替代settimeout延迟执行的方法 nextTick
        that.$nextTick(function(){
            el.focus()  //方法
        }) 
    },
}
//that 应该是this 但在这this指向window, 所以在生命周期 created里截取了this
```
>
### 
>
## 自学
>
### 01-过滤器
>
* 概念: vue.js中 允许自定义过滤器,可用作一些常见的文本格式化. 过滤器应该添加在javascript表达式的尾部,由"管道"符指示;
* 用在两个地方: mustache插值 和 v-bind表达式
* 数据处理器更体贴。用以在不改变的data 的情况下  输出前段需要的格式数据。
>
* 过滤器语法:  
    * vue.filter('过滤器的名称',function(){})
> 
* 过滤器调用的格式
    * {{ name | 过滤器的名称 }}
>
### 02-全局时间过滤器
>
* 全局过滤器就是所有的VM实例共享的
1. 使用 Vue.filter('时间过滤器名',function(时间字符串,时间样式=""){})
```javascript
      //全局时间过滤器  参数时间格式
        Vue.filter('dateFormat',function(dateStr,pattern = ''){
            //根据给定的时间字符串,得到特定的时间
            var dt = new Date(dateStr)
            //时间格式 yyyy-mm-dd
            var y = dt.getFullYear();
            //toString().padStart(2,'0') 第一个参数:个数, 第二个参数: 少于设定个数开始用什么代替
            var m = (dt.getMonth()+1).toString().padStart(2,'0');
            var d = dt.getDate().toString().padStart(2,'0');

            
            //把字符串转成小写
            if(pattern.toLowerCase()  === 'yyyy-mm-dd'){
                return `${y}-${m}-${d}`
            }else{
                //hh:mm:ss
                var hh = dt.getHours().toString().padStart(2,'0')
                var mm = dt.getMinutes().toString().padStart(2,'0')
                var ss = dt.getSeconds().toString().padStart(2,'0')

                return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
            }
        })
```
2. 在页面使用时间过滤器: {{ time | 时间过滤器名('pattern') }}
>
### 03-私有过滤器
>
* ```javascript
    filters:{
        dateFormat: function (dateStr, pattern = '') {}
    }
    ```
>
* 定义私有过滤器, 过滤器有两个条件 [ 过滤器名称,处理函数 ]
>
* 过滤器调用时采用的是就近原则,如果私有过滤器和全局过滤器名称一致,优先调用私有过滤器,
>
>
* 在页面使用时间过滤器: {{ time | 时间过滤器名 }}
>
### 04-全局按键修饰符
>
* 113 键盘码对应113
* [js 里面的键盘事件对应的键码](http://www.cnblogs.com/wuhua1/p/6686237.html)
```javascript
    Vue.config.keyCodes.f2 = 113
```
>
```html
    @keyup.f2="触发的事件"
```
>
### 05-全局指令API
>
* 自定义全局过滤器 Vue.filter('过滤器名',函数) 管道符调用
>
* 自定义全局按键修饰符 Vue.config.keyCodes.f2=113 @keyup.f2="触发事件"
>
* Vue.config.silent = true 取消vue所有的日志和警告
>
* 全局注册或获取指令 Vue.directive('指令名',对象事件)
>
* Vue.nextTick() 在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。
>
* Vue.extend( options ) 使用基础vue构造器,创建一个子类,
>
* Vue.component( id, [definition] ) 创建组件
>
* Vue.mixin [mixin] 全局混入
>
### 06-选项/数据
>
* props 可以是数组或对象,用于接收来自父组件的数据
>
* propsData 创建实例时传递 props。主要作用是方便测试。 限制：只用于 new 创建的实例中。
>
* computed 计算属性 将被混入到 Vue 实例中。this不指向组件实例
>
* methods 事件处理器 methods 将被混入到 Vue 实例中。this绑定到vue实例
>
* watch 侦听器
>
### 07-全局注册获取指令
>
>
```javascript
    // 注册
    Vue.directive('指令名', {
        bind: function () {},
        inserted: function () {},
        update: function () {},
        componentUpdated: function () {},
        unbind: function () {}
    })
```
>
* bind 每当指令绑定到这个元素上,会立即执行这个bind函数,只会执行一次, 
    * 注意: 在每个函数中,第一个参数,永远是 el,表示被绑定指令的那个元素,这个el参数,是一个原生的js对象
    * 在元素刚绑定了指令时,还没有插入到DOM中去,这时,调用 focus方法没有作用,因为,一个元素只有插入到DOM之后,才能获得焦点 
    * 样式相关操作,一般在bind操作
>
* inserted 表示元素插入到DOM时,会执行 inserted 函数, 触发一次;
    * 和js 行为相关的操作,最好在inserted中去执行,防止JS行为不生效
>
* updated 当Vnode更新时,会执行 updated, 可能会触发多次;
>
### 08-自定义全局字体颜色指令
>
```javascript
    Vue.directive('color',{
        bind: function(el,binding){
            // el.style.color = '颜色' 直接修改
            el.style.color = binding.value
            //el.style.color = binding.expression
        }
    })
```
* 调用时: v-color="'red'"
* binding是个对象集合: 
    * value: 在页面引用 v-color="颜色" 时,颜色需要加'',表示是属性字符串
    * expression: 在页面引用 v-color="颜色" 时,颜色不需要加'',加了无效,不加可以显示,但报错,需要在data里定义; 例: 颜色: '颜色'
>
* 样式,只要通过指令绑定给了元素,不管元素有没有被插入到页面中去,这个元素肯定有了内联的样式
    * 将来元素肯定会显示到页面,这时,游览器的渲染引擎必然会解析样式,应用给这个元素
>
>
### 09-私有自定义指令
>
* 字体加粗和字体大小
>
* ```javascript
    directives:{
        'fontweight':{
            bind: function(el,binding){
                el.style.fontWeight = binding.value
            }
        },
        'fontsize': function(el,binding){ //function等同把代码写到 bind和 update 中去
            el.style.fontSize = parseInt(binding.value)  + 'px'
        }
    }
    ```
>
* 调用时: v-fontweight="0-900" v-fontsize="number"
>
### 10-组件的切换
>
* 组件名称是字符串
>
* 方式一.使用v-if与v-else控制切换
    * ```html
        <a href="" @click.prevent="flag=true">登录</a>
        <a href="" @click.prevent="flag=false">注册</a>
        <login v-if="flag"></login>
        <register v-else="flag"></register>
    ```
>
* 方式二.使用component标签
    * Vue提供了 component 标签,来展示对应名称的组件;
    * component 是一个占位符, :is属性,可以指定要展示的组件名称
    * ```html
        <a href="" @click.prevent="comName='login'">登录</a>
        <a href="" @click.prevent="comName='register'">注册</a>
        <component :is="comName"></component>
        <!-- 在data定义comName:'login' -->
    ```
>
## 发送数据请求三种方法
>
* 发送请求尽量在生命周期created()时发送
>
### 01-使用Ajax发送数据请求
>
1. 创建 XMLHttpRequest 对象
```js
    var xhr = new XMLHttpRequest();
```
>
2. 初始化请求 open()
```js
    xhr.open("GET", "http://www.bufantec.com/api/douban/movie/in_theaters?limit=10", false);
```
* 第一个参数: method 数据请求方式,有get和post两个取值
* 第二个参数: url 请求地址 传值
* 第三个参数: 布尔值: async
    * 当布尔值为 true时,服务器是异步进行的,就是脚本执行send()方法不等待服务器的执行结果,而是继续执行脚本代码;
    * 当布尔值为 false时,服务器是同步进行的,就是脚本执行send()方法等待服务器的执行结果的返回,若在等待过程中超时,则不再等待,继续执行后面的脚本代码
    * 主线程上的同步xmlhttpRequest因其对最终用户体验的不利影响而被弃用。
>
3. 发送 HTTP 请求
```js
    xhr.send(null) //get请求  简单的字符串
    xhr.send('limit: "10"'); //post  参数
    xmlHttpRequest.setRequestHeder("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
```
* 如果使用ajax请求的参数多是简单的字符串,可以直接使用get方法将要提交的参数写到open方法的url参数中,此时send方法的参数为null
```js
    var url = "login.jsp?user=XXX&pwd=XXX";
        xmlHttpRequest.open("GET",url,true);
        xmlHttpRequset.send(null);
```
>
4. 处理响应
>
```js
//同步请求  但已经被淘汰
 if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    console.log(xhr.responseText)
    var arr = JSON.parse(xhr.responseText).data.map(item =>{
        return item.title
    })
} else {
    console.log("Request was unsuccessful: " + xhr.status)
}
```
* 处理异步请求
* json.stringify()将对象、数组转换成字符串；json.parse()将字符串转成json对象。
```js
getdata() {
    //原生ajax
    var xhr = new XMLHttpRequest();
    //异步get请求
    xhr.onreadystatechange = () => {
        console.log(xhr.status)
        if (xhr.readyState  ==  4 && xhr.status == 200) {
        // this.list = xhr.responseText
            var arr = JSON.parse(xhr.responseText).data.map(item =>{
                return item
            })
            this.list = arr
        } else {
            console.log("Request was unsuccessful: " + xhr.status)
        }
    }
    xhr.open('get','http://www.bufantec.com/api/douban/movie/in_theaters',true)
    xhr.send(null)
}
```
>
* Content-Type: 数据类型
>
* application/x-www-form-urlencoded: 表单提交方式 当action为get时候，浏览器用x-www-form-urlencoded的编码方式把form数据转换成一个字串（name1=value1&name2=value2…），然后把这个字串append到url后面，用?分割，加载这个新的url。
>
* charset=UTF-8: 字符集编码采用全球码
>
>
### 02-jquery的ajax方法
>
1. 引入jquery库
>
2. 在生命周期 created()调用;
>
3. $.ajax({})
```js
    created() {
        var that = this;
        $.ajax({
            method: "POST",
            url: "http://www.bufantec.com/api/douban/moviin_theaters",
            dataType: "JSON",
            success(val) {
                that.list = val.data;
                console.log(val)
            },
            failed(val){

            }
        })
    }
```
* 点击触发Ajax请求
```js
$(function(){
    $('#btn').on('click',function(){
        $.ajax({
            url : './data.json',
            type: 'get',
            dataType: 'json'
        })
        .then(function(res){
            console.log(res)
        })
    })
})
```
* 第一个参数: 数据请求方式
* 第二个参数: 数据请求地址
* 第三个参数: 数据类型
* 第四个参数: 数据请求成功的回调
* 第五个参数: 数据请求失败的回调
>
* $.ajax()方法详解
    1. url: 
    要求为String类型的参数，（默认为当前页地址）发送请求的地址。
    2. type: 
    要求为String类型的参数，请求方式（post或get）默认为get。注意其他http请求方法，例如put和delete也可以使用，但仅部分浏览器支持。
    3. timeout: 
    要求为Number类型的参数，设置请求超时时间（毫秒）。此设置将覆盖$.ajaxSetup()方法的全局设置。
    4. async: 
    要求为Boolean类型的参数，默认设置为true，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为false。注意，同步请求将锁住浏览器，用户其他操作必须等待请求完成才可以执行。
    5. cache: 
    要求为Boolean类型的参数，默认为true（当dataType为script时，默认为false），设置为false将不会从浏览器缓存中加载请求信息。
    6. data: 
    要求为Object或String类型的参数，发送到服务器的数据。如果已经不是字符串，将自动转换为字符串格式。get请求中将附加在url后。防止这种自动转换，可以查看　　processData选项。对象必须为key/value格式，例如{foo1:"bar1",foo2:"bar2"}转换为&foo1=bar1&foo2=bar2。如果是数组，JQuery将自动为不同值对应同一个名称。例如{foo:["bar1","bar2"]}转换为&foo=bar1&foo=bar2。
    7. dataType: 
    要求为String类型的参数，预期服务器返回的数据类型。如果不指定，JQuery将自动根据http包mime信息返回responseXML或responseText，并作为回调函数参数传递。可用的类型如下：
    xml：返回XML文档，可用JQuery处理。
    html：返回纯文本HTML信息；包含的script标签会在插入DOM时执行。
    script：返回纯文本JavaScript代码。不会自动缓存结果。除非设置了cache参数。注意在远程请求时（不在同一个域下），所有post请求都将转为get请求。
    json：返回JSON数据。
    jsonp：JSONP格式。使用SONP形式调用函数时，例如myurl?callback=?，JQuery将自动替换后一个“?”为正确的函数名，以执行回调函数。   
    text：返回纯文本字符串。
    8. beforeSend：
    要求为Function类型的参数，发送请求前可以修改XMLHttpRequest对象的函数，例如添加自定义HTTP头。在beforeSend中如果返回false可以取消本次ajax请求。XMLHttpRequest对象是惟一的参数。
                function(XMLHttpRequest){
                this;   //调用本次ajax请求时传递的options参数
                }
    9. complete：
    要求为Function类型的参数，请求完成后调用的回调函数（请求成功或失败时均调用）。参数：XMLHttpRequest对象和一个描述成功请求类型的字符串。
            function(XMLHttpRequest, textStatus){
                this;    //调用本次ajax请求时传递的options参数
            }
    10. success：要求为Function类型的参数，请求成功后调用的回调函数，有两个参数。
            (1)由服务器返回，并根据dataType参数进行处理后的数据。
            (2)描述状态的字符串。
            function(data, textStatus){
                //data可能是xmlDoc、jsonObj、html、text等等
                this;  //调用本次ajax请求时传递的options参数
            }
    11. error:
    要求为Function类型的参数，请求失败时被调用的函数。该函数有3个参数，即XMLHttpRequest对象、错误信息、捕获的错误对象(可选)。ajax事件函数如下：
        function(XMLHttpRequest, textStatus, errorThrown){
            //通常情况下textStatus和errorThrown只有其中一个包含信息
            this;   //调用本次ajax请求时传递的options参数
        }
    12. contentType：
    要求为String类型的参数，当发送信息至服务器时，内容编码类型默认为"application/x-www-form-urlencoded"。该默认值适合大多数应用场合。
    13. dataFilter：
    要求为Function类型的参数，给Ajax返回的原始数据进行预处理的函数。提供data和type两个参数。data是Ajax返回的原始数据，type是调用jQuery.ajax时提供的dataType参数。函数返回的值将由jQuery进一步处理。
                function(data, type){
                    //返回处理后的数据
                    return data;
                }
    14. dataFilter：
    要求为Function类型的参数，给Ajax返回的原始数据进行预处理的函数。提供data和type两个参数。data是Ajax返回的原始数据，type是调用jQuery.ajax时提供的dataType参数。函数返回的值将由jQuery进一步处理。
                function(data, type){
                    //返回处理后的数据
                    return data;
                }
    15. global：
    要求为Boolean类型的参数，默认为true。表示是否触发全局ajax事件。设置为false将不会触发全局ajax事件，ajaxStart或ajaxStop可用于控制各种ajax事件。
    16. ifModified：
    要求为Boolean类型的参数，默认为false。仅在服务器数据改变时获取新数据。服务器数据改变判断的依据是Last-Modified头信息。默认值是false，即忽略头信息。
    17. jsonp：
    要求为String类型的参数，在一个jsonp请求中重写回调函数的名字。该值用来替代在"callback=?"这种GET或POST请求中URL参数里的"callback"部分，例如{jsonp:'onJsonPLoad'}会导致将"onJsonPLoad=?"传给服务器。
    18. username：
    要求为String类型的参数，用于响应HTTP访问认证请求的用户名。
    19. password：
    要求为String类型的参数，用于响应HTTP访问认证请求的密码。
    20. processData：
    要求为Boolean类型的参数，默认为true。默认情况下，发送的数据将被转换为对象（从技术角度来讲并非字符串）以配合默认内容类型"application/x-www-form-urlencoded"。如果要发送DOM树信息或者其他不希望转换的信息，请设置为false。
    21. scriptCharset：
    要求为String类型的参数，只有当请求时dataType为"jsonp"或者"script"，并且type是GET时才会用于强制修改字符集(charset)。通常在本地和远程的内容编码不同时使用。
>
### 03-vue-resource方法发送请求
>
1. 引入vue.js, 在引入vue-resource.js, vue.js在前,因为vue-resource.js依赖vue.js,
    * 向vue身上挂载this.$http.get/post/jsonp
>
2. 在vm实例的mothods发起请求:
```js
     methods: {
        getInfo() { // 发起get请求
          //  当发起get请求之后， 通过 .then 来设置成功的回调函数
          this.$http.get('http://vue.studyit.io/api/getlunbo').then(function (result) {
            // 通过 result.body 拿到服务器返回的成功的数据
            // console.log(result.body)
            if(result.body.status === 0){
                this.list = result.body.message;
            }else{
                Toast('获取数据是失败') //element-ui提示框
            }
          })
        },
        postInfo() { // 发起 post 请求   application/x-wwww-form-urlencoded
          //  手动发起的 Post 请求，默认没有表单格式，所以，有的服务器处理不了
          //  通过 post 方法的第三个参数， { emulateJSON: true } 设置 提交的内容类型 为 普通表单数据格式
          this.$http.post('http://vue.studyit.io/api/post', {}, { emulateJSON: true }).then(result => {
            console.log(result.body)
          })
        },
        jsonpInfo() { // 发起JSONP 请求
          this.$http.jsonp('http://vue.studyit.io/api/jsonp').then(result => {
            console.log(result.body)
          })
        }
      }
```
* 第一个参数: url 数据请求地址
* 第二个参数: 提交给服务器的数据 `[body]`
* result.body与result.data一样,推荐使用result.body
* 第三个参数: 提交给服务器的内容格式 `[options]`
    * 手动发起的 post数据请求 默认没有表格格式: 通过设置post方法的第三个参数: { emulateJSON: true } 设置 提交的内容类型 为 普通表单数据格式 布尔值: true是普通表单数据格式
* .then(): 就是promise封装的
    * 第一个参数: 成功回调
    * 第二个参数: 失败回调
>
>
## vue动画
>
### 01-使用过渡类名实现动画
>
1. 使用transition标签 把要被动画控制的元素 包裹起来  标签由Vue官方提供
```html
<transition>
      <h3 v-if="flag">这是一个H3</h3>
</transition>
```
>
2. 自定义两组样式，来控制 transition 内部的元素实现动画
    * 使用style样式, 设置开始之前和离开之后的样式, 设置进入过渡生效时的状态 和 定义离开过渡生效时的状态的样式 
```css
/* v-enter 【这是一个时间点】 是进入之前，元素的起始状态，此时还没有开始进入 */
    /* v-leave-to 【这是一个时间点】 是动画离开之后，离开的终止状态，此时，元素 动画已经结束了 */
    .v-enter,
    .v-leave-to {
      opacity: 0;
      transform: translateX(150px);
    }

    /* v-enter-active 【入场动画的时间段】 */
    /* v-leave-active 【离场动画的时间段】 */
    .v-enter-active,
    .v-leave-active{
      transition: all 0.8s ease;
    }
```
>
3. 给transition标签  设置属性 name="属性名" 例: name="my" 来修改前缀
4. 前缀默认 v-  添加name  设置例: my-
>
### 02-使用第三方类实现动画
>
1. 引入类样式: 例: `<link href="./lib/animate.css">` 选定入场和离场样式,例: 入场 bounceIn    离场 bounceOut
>
2. 将要控制动画的元素用 transition 标签包裹起来;
>
3. 在 transition 标签上设置属性
```html
<transition 
    enter-active-class="bounceIn" 
    leave-active-class="bounceOut" 
    :duration="{ enter: 200, leave: 400 }">
      <h3 v-if="flag" class="animated">这是一个H3</h3>
</transition>
```
* 使用 :duration="毫秒值" 来统一设置 入场 和 离场 时候的动画时长
* 使用  :duration="{ enter: 200, leave: 400 }"  来分别设置 入场的时长 和 离场的时长
>
>
### 03-使用钩子函数模拟小球半场动画
>
1. 使用 transition 元素把 小球包裹起来
```html
<transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"> 
      <div class="ball" v-show="flag"></div>
</transition>
```
>
2. methods 设置事件
```javascript
 methods: {
        // 注意： 动画钩子函数的第一个参数：el，表示 要执行动画的那个DOM元素，是个原生的 JS DOM对象
        // 大家可以认为 ， el 是通过 document.getElementById('') 方式获取到的原生JS DOM对象
        beforeEnter(el){
          // beforeEnter 表示动画入场之前，此时，动画尚未开始，可以 在 beforeEnter 中，设置元素开始动画之前的起始样式
          // 设置小球开始动画之前的，起始位置
          el.style.transform = "translate(0, 0)"
        },
        enter(el, done){
          // 这句话，没有实际的作用，但是，如果不写，出不来动画效果；
          // 可以认为 el.offsetWidth 会强制动画刷新
          el.offsetWidth
          // enter 表示动画 开始之后的样式，这里，可以设置小球完成动画之后的，结束状态
          el.style.transform = "translate(150px, 450px)"
          el.style.transition = 'all 1s ease'

          // 这里的 done， 起始就是 afterEnter 这个函数，也就是说：done 是 afterEnter 函数的引用
          done()
        },
        afterEnter(el){
          // 动画完成之后，会调用 afterEnter
          // console.log('ok')
          this.flag = !this.flag
        }
 }
 ```
 3. 注意: enter事件需要 两个参数; 前面需要设置el.offsetWidth/宽高左右都行; 后面加 done()
 >
 4. this.flag = !this.flag 这句话: 
    * 第一个功能: 控制小球的显示和隐藏
    * 第二个功能: 直接跳过后半场动画, 让flag 标识符 直接变为 false
    * 第二次点击按钮时, flag false --> true 循环
>
5. Vue 把一个完整的动画,使用钩子函数拆分成了两部分
    * 我们使用 flag 标识符来表示动画的切换
    * 一开始 flag: false --> true  然后: true --> false
 >
 ### 04-列表动画
 >
1. 在实现列表过渡的时候，如果需要过渡的元素，是通过 v-for 循环渲染出来的，不能使用 transition 包裹，需要使用 transitionGroup 
2. 如果要为 v-for 循环创建的元素设置动画，必须为每一个 元素 设置 :key 属性 
3. 给 ransition-group 添加 appear 属性，实现页面刚展示出来时候，入场时候的效果 
4. 通过 为 transition-group 元素，设置 tag 属性，指定 transition-group 渲染为指定的元素，如果不指定 tag 属性，默认，渲染为 span 标签 
5. 下面的 .v-move 和 .v-leave-active 绝对定位 配合使用，能够实现列表后续的元素，渐渐地漂上来的效果
>
### 05-组件动画
>
1. transition标签将 组件包裹  
2. 设置动画
3. 给 transition标签设置属性 mode="out-in" : 通过 mode 属性,设置组建切换时的模式; out-in是 等走的消失,下一个在进入
>
## vue-cli创建vue
>
### 01-创建项目
>
* 安装node.js 和 淘宝镜像
    1. 下载好node.js
    2. 检查node.js安装是否成功:  'node -v' 或 'npm -v'
    3. 设置淘宝镜像; 需要翻墙,设置镜像问题解决: 'npm install -g cnpm --registry=https://registry.npm.taobao.org'
    4. 局安装 vue 脚手架: 'cnpm i vue-cli -g'
    5. 安装成功可以查看版本: 'vue -V'
>
* 新版vue3 创建项目
    1. 'vue create demo'
    2. 选择: Manually select features  上下切换 enter确定
    3. 选中: Babel (es6转es5) Router(路由) Vuex() CSS Pro-processors()
    4. 后输入y  yes
    5. 选择: Sass/SCSS (with dart-sass)
    6. In package. json
    7. N no
* 运行
    1. 安装依赖 'cnpm install'
    2. 项目运行 'npm run dev'
    
>
### 02-文件配置
>
* 文件一: node_module 节点模块
    1. node_modules: 节点模块 vue.cli依赖库
>
* 文件二: public 公共的
    1. favicon.ico 图标文件
    2. index.html 入口文件，js和css会被动态的插入这个文件
>
* src: 工作目录
    1. assets 静态资源
        logo 图标
    2. components 公共组件
        1. helloworid组件
    3. views 各页面
        1. home 首页
        2. about 关于

    * App.vue 页面入口文件, 整个页面的vue实例文件
    * main.js 程序入口文件,加载各种公共组件
    * router.js 路由
    * store.js 储存
* gitignore: git上传需要忽略的文件       
* babel.config.js: es6转es5
* package-lock.js: 程序包锁定
* package.json: 项目基本信息
>
### 03-js文件导入导出 es6语法
>
* 方式一 app.vue
    1. 需要导出的js文件设置: export{ 变量名,函数名 }
    2. 需要导入的文件设置: script标签中,设置 import { 变量名,函数名 } form "路径"
    3. import 模块名称 from 模块标识符(路径)
    * 注意: 导入导出变量名 和 函数名保持一致
>
* 方式二 app.vue
    1. 需要导出的js文件设置: export default{ 变量名,函数名 }
    2. 需要导入的文件设置: script标签中,设置 import needs(对象集合) form "路径"
    * 注意: 导入导出变量名和函数可以不一致; needs是对象集合
* 如果在别的页面 script标签中 设置export default{ 和vue里data,methods,生命周期一样 }
* 注意
    1. export default 向外暴露的成员,可以使用任意的变量来接收import 变量 from "路径"
    2. 在一个模块中,export default只允许向外暴露一次
    3. 在一个模块中,可以同时使用 export default 和 export向外暴露成员
    4. 使用export向外暴露的成员,只能使用{}的形式来接收,这种形式叫做[按需导出]
    5. ecport 可以向外暴露多个成员,同时,如果某些成员,我们在import时,不需要,则可以不在{}中定义
    6. 使用export 导出的成员,必须严格按照导出时候的名称,来使用{}按需接受
    7. 使用export 导出的成员,如果想换个名称来接收,可以使用as 来起别名 {名称 as 新别名}
>
* 在node中,使用 var 名称 = require('模块标识符')
* module.exports 和 exports 来暴露成员
>
### 04-引入swiper
>
1. npm官网 ==> vue swiper ==> vue-awesome-swiper(随意选的)
2. npm选择项 ==>复制: 地址:`npm install vue-awesome-swiper --save`  成功在json文件会有显示
3. 在需要的文件打开npm 或 cnpm 输入地址 安装成功  安装不成功  删除依赖 node_modules  重新安装依赖
4. import swiper from "路径"  vue swiper ==>mount with global 的内容复制
5. 复制 mount with component 方法 将需要的样式填入
5. 根据swiper官方文档设置需要的样式  
>
### 05-引入 mockjs
>
1. 根据mock网官方文档 安装mockjs `cnpm install mockjs --save` 安装成功后在 项目json文件中查看
2. 需要使用的页面,导入 import Mork from "mockjs"; 然后就可以使用mock.js了
>
### 06-创建页面
>
1. 将组建导出 `export default {}`  可以设置属性方法 类似vue实例
2. 在使用页面导入 `import a from "../components/组件名" 将组件导入
3. 将数据曝光 
```js
    export default{
        name: 'about', //这个组件的名字
        components:{ // 引入组件
            image: a  // image是要导入的组件名  a是导入时的a  如果导入时设置a 与 组件名相同,可以只写组件名
        }
    }
```
4. 页面: 组件名标签
>
### 07-vue cli 导入图片的几种方法 
>
1. import 方法
    - 第一步：在.vue文件中import img from 'path'（path是图片与.vue的相对路径）
    - 第二步：在data对象中定义一个属性img，值对应img;
    - 第三步：在template中 给标签绑定属性
        - `<img :src="img" alt="">`
>
2. static方法
    - 图片放在static文件夹，在data对象的一个里定义属性pro_img,属性值是图片与.vue的相对路径
        - `'pro_img':'相对路径'`
    - 在template中 给标签绑定属性
        - `<img :src="pro_img" alt="">`
>
3. 解决vue组件css中背景图片路径报错问题
    -  前提是你用了vue-cil，那么在build目录下找到utils.js中的ExtractTextPlugin.extract({}),里面添加下面这个属性就完美解决了publicPath: '../../'
    - 路径报错是因为打包后压缩为.js文件,css里相对路径指向已经发生了变化,指向了 根路径,所以路径报错 

>
## 路由模块化开发webpack
>
### 01-安装路由
>
1. 创建时设置 选择不安装路由
2. vue官方文档  Vue Router安装   
3. 在npm 安装 安装成功可以在 json文件查看
>
### 02-创建路由
>
1. 创建router.js 设置官方文档
```js
import Vue from 'vue' //引入Vue
import VueRouter from 'vue-router' // 查找vue-router,往上一级一级查找 你安装路由之后不引入相当于做无用功
Vue.use(VueRouter) //vue插件,将VueRouter注册到vue里
```
2. 设置路由 将两个组件导入
```js
import index from '@/views/index/index.vue' //index首页
import About from '@/views/About/About.vue' //about 关于
// 创建 router 实例，然后传 `routes` 配置
export default new VueRouter({ //把我们的路由配置文件暴露出去
    mode:"history", //history 默认是hash 标题带# 瞄点
    routes:[ //路线 这个存放的是我们路由的配置文件
        {
            path:"/index", //访问游览器的 路径
            name: 'index',  // 这个是我们给路由起的名称
            component: index //对应的组件
        },
        {
            path:"/About",
            component: About
        }
    ]
})
```
3. 创建两个组件  子组件里 设值内容后导出曝光: export default{ name: 组件名 }
4. router已经导出,main.js导入 `import router from './Router'` new Vue({设置router挂载到实例类里})
5. app组件里设置
```html
<!-- 相当于a标签  渲染成a标签 -->
<router-link to="/index" tag="span">首页</router-link>
<router-link to="/About" tag="span">关于</router-link>
<!-- 路由容器 -->
<router-view></router-view>
```
* history历史模式 与 hash瞄点
>
### 03-创建动态路由
>
* 比如在写商品详情页面的时候，页面结构都一样，只是商品id的不同，所以这个时候就可以用动态路由动态。
>
* 动态路由就是在path路径后加 /:id 
>
1. 在router.js 里设置路径后加 `/:id` 例如: path: '/mine/:id'
2. 使用时,会自动匹配到,1,2  到组件
```html
<router-link to="/mine/1">跳转到mine页</router-link>
<router-link to="/mine/2">跳转到mine页</router-link>
```
3. 组件生命周期created里  通过this获取到对应的id 设置判断语句 
>
* 路由缺陷: 当使用路由参数时，例如从`/books/1` 导航到 `books/2` ，原来的组件实例会被复用。因为两个路由都渲染同一个组件，比起销毁 复用 显得更 高效。不过，
这也意味着组件的生命周期钩子不会再被调用，也就是说 created mounted 等钩子函数
页面第二次加载时将失效
* 解决动态路由缺陷
1. watch监听
```js
const User = {
  template: '...',
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
}

```
2. 让组件不被复用, 用key
```html
<router-view :key="now"/>
```
```js
data(){
    return{now:''}
},
updated(){
    this.now = this.$route.params.id
}
```
3. 组件守卫
```js
beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
```
>
### 04-嵌套路由
>
* 大家都知道选项卡，在选项卡中，顶部有数个导航栏，中间的主体显示的是内容；这个时候，整个页面是一个路由，然后点击选项卡切换不同的路由来展示不同的内容，这个时候就是路由中嵌套路由
>
* 实际应用界面,通常是多层嵌套的组件组合而成,
>
1. router.js在需要设置嵌套的组件下,设置
```js
{
    path: '/user/:id',component: User,
    //方式一: 并没有实现嵌套,而是直接跳转到UserProfile
    path: '/user/profile',component:UserProfile
    // 方式二
    //使用children属性,实现子路由,同时,子路由的 path前面,不要带 / ,否则永远以根路径开始请求,这样不方便我们用户去理解URL地址
    children: [
       {
           // 当 /user/:id/profile 匹配成功，
           // UserProfile 会被渲染在 User 的 <router-view> 中
           path: 'profile',
           component: UserProfile
       },
    ]
}
```
2. 页面设置: `<router-link to="/user/1(随意设置)">` 后面的id会自动匹配到组件
3. 组件生命周期created里  通过this获取到对应的id 设置判断语句 
```js
 created(){
    // console.log(this.$route.params.id)
    var id = this.$route.params.id;
    if(id == 'photography-摄影'){ 
        this.now = this.photography
    }else if(id == 'dress-婚纱'){
        this.now = this.dress  //now是插值表达式呈现在页面的内容,dress是data里定义的内容
    }
 }
 ```
 >
 ### 05-命名路由
 >
 * 有时候,通过一个名称来标识一个路由显得更方便,特别是在链接一个路由或执行一些跳转
 >
 1. 在创建 Router 实例时,在routes 配置中给路由设置名称
 ```js
 const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId', //动态路由
      name: 'user', //设置name 标识
      component: User //组件 也可以设置对象
      //component:{
    //       default: 组件一,
    //       title1: title1组件,
    //       title2: title2组件
    //   }
    }
  ]
})
 ```
2. 要链接到一个命名路由, 可以给router-link的to属性传一个对象;
```html
<router-link :to="/user">User</router-link> 方式一
<router-link :to="{ name: 'user'}">User</router-link> 方式二 name标识
<router-link :to="{ path: '/user'}">User</router-link> 方式三 路径标识
```
3. `<router-view/>` 路由容器
 >

 ### 06-编程式导航 
 >
 * 就是通过写 js代码来实现页面的跳转
 >
 1. this.$router.push('name'); 或者router.push({path: 'name'}); 等效的
 2. 可以设置一个button按钮,也可以给`<router-link @click="goto">`设置点击事件
 3. 在导出methods里设置 沟通 方法,1. this.$router.push('name'); 或者2. this.$router.push({path: 'name'});  3. this.$router.push(name: 'home')
 >
 * 拓展:
    * 带查询参数，变成 /register?plan=private
        * `this.$router.push({ path: 'register', query: { plan: 'private' }})`
    * 在浏览器记录中前进一步，等同于 history.forward()
        * router.go(1)
    * 后退一步记录，等同于 history.back()
        * router.go(-1)
    * 前进 3 步记录
        * router.go(3)
>
### 07-重定向
>
* 有时候我们虽然设置的路径不一致，但是我们希望跳转到同一个页面，或者说是打开同一个组件。这时候我们就用到了路由的重新定向redirect参数。
>
* 把地址重定向到某个路由,意思是: 当用户访问 /a时,url将被替换成 /b 然后匹配陆有为 /b
1. redirect基本重定向
```js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }  //实现访问两个路径都可以访问到组件b
  ]
})
```
2. 重定向时传递参数
```js
{
  path:'/params/:newsId(\\d+)/:newsTitle',
  component:Params
},{
  path:'/goParams/:newsId(\\d+)/:newsTitle',
  redirect:'/params/:newsId(\\d+)/:newsTitle'
}
```
* 已经有了一个params路由配置，我们在设置一个goParams的路由重定向，并传递了参数。这时候我们的路由参数就可以传递给params.vue组件了。参数接收方法和正常的路由接收方法一样。
>
### 08-html5 History模式
>
* Vue-router 默认mode hash模式(/#),使用URL的 hash模拟一个完整的URL,dangurl改变时,页面不会重新加载
* history 模式较常用
>
### 09-hash模式
>
* 单页面程序页面跳转主要靠hash实现
*  [URL中的hash（井号）](http://www.cnblogs.com/joyho/articles/4430148.html)
>
### 10-切页动效
>
```html
<transition :name="now">
    <router-view/>
</transition>
```
```js
watch: {
    "$route":function(to,from){
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length  
      this.now = toDepth < fromDepth ? 'right' : 'left'   // 2< 1 ? 进入动效(从左右到左) : 离开动效(从左到右)
    }
  }
```
```css
.right-enter{
  transform:  translateX(-100%);
}
.right-enter-active{
  transition: .3s ease-in;
}
.left-enter{
  transform:  translateX(100%);
}
.left-enter-active{
  transition: .3s ease-in;
}
```
>
### 11-根据id进入 详情页
>
1. 列表页每一项 修改成router-link,同时,在跳转时应该提供唯一的id标识符
```js
// 因为是表达式,所以需要v-bind item.id是表达式,所以需要拼接,
//双引里 路径单引 + item.id
<router-link :to="'/home/newsinfo/' + item.id" />
//es6字符串模板拼接
<router-link :to=`'/home/newsinfo/'${item.id}` />
```
2. 创建详情页面
3. 在路由模块中,将新闻详情的路由地址 和 组件页面对应起来
    * 引入 import newsinfo from '路径'
    * 匹配路径 动态路由path: /home/newsinfo//:id
4. 通过this.$route.params.id拿到id data里: id:this.$route.params.id
5. 通过vue-resource发起ajax请求: 通过id进入的详情页,发起请求时,要将id传入
```js 
本地定义: newinfo: ""
init(){
    this.$http.get('api/getnew/' + this.id).then(
        result => {
            if(result.body.status ===0){
                this.newinfo = result.body.message
            }
        }
    )
}
```
6. 直接引入整个内容时,需要用v-html渲染,而不用插值表达式
7. 样式: 详情页图片显示不完整时,给标签设置100%, 如果不生效,去掉scoped试试,内容显示不完整,给首页app设置padding = height试试
>
### 12-vue创建组件步骤
>
1. 创建一个单独的 .vue 组件模板 暴露出去时,提供name 
```js
export default {
    name: 'login'
}
```
2. 在需要的使用组件的页面,手动导入组件 import login from '路径'
3. 在父组件中,使用 'components'属性,将刚才导入的组件,注册为自己的组建 
```js
components:{
    'login': login
}
```
4. 页面引用 <login></login>
>
## router 路由 高级
>
### 01- 导航守卫
>
* 导航守卫本质呢就是对跳转的url进行一个判断 判断能不能进入输入的url
>
* 导航”表示路由正在发生改变。 vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。
>
* 理解: 导航守卫可以看做是 vue-router 的生命周期钩子 假设用户要查看个人信息(用户直接输入url进入个人信息页面) 如果没登陆是不是不让获取用户信息 但是用户已经进入了个人信息页面 这个导航守卫呢 就是帮助开发者处理这种事件
>
* 分三个守卫, 全局守卫,路由守卫,组件守卫
>
#### 1-全局守卫
>
* 只要加了全局守卫,每次路由跳转都要经过全局守卫,一般用的都是前置守卫
* 全局前置守卫
```js
router.beforeEach((to, from, next) => { 
    // 里面三个参数  to代表我们将要跳转的路径
    // from 代表从那个路径跳转过来 就是上一个路径
    // next代表 守卫可以通过next控制下一步的跳转 如果写了前置守卫 一定要添加next()到下一步 
    // 因为路由还没有跳转 next可以是路由跳转
    // 需要注意的是 如果当跳转的地址带参数的时候(动态路由) 跳转的时候就会忽略后面传递的参数 
    // 如 next({path:"/user",params:{id:1}})
    // 解决方法 换一种写法
    // next("/user/1") 或用命名路由的方式跳转next({name:"user",params:{id:1}})
  // 
})
```
* 全局前置守卫应用场景(进入页面登录判断、管理员权限判断、浏览器判断等)
>
* 全局后置守卫(少用)

>
#### 2-路由守卫 运行在路由上的守卫
>
* 相比上面的全局守卫 全局守卫是只要有跳转就会执行守卫函数 而路由守卫是只有跳转到当前的守卫时才执行路由守卫函数) 用处做跳转判断
>
```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```
>
#### 3-组件内守卫
>
* 组建的生命周期  
>
* beforeRouteEnter 这个守卫不做什么操作 在这一步的时候this都还没有绑定到vue实例类上(组件实例还没有被创建) 也就是说在这一步我们还不能用this
> 
* beforeRouteUpdate  (在组件复用的时候调用 用于解决组件复用问题)
> 
* beforeRouteLeave (导航离开该组件的对应路由时调用 这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。 还可以用来清除定时器)
```js
beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
```
```js
beforeRouteLeave (to, from , next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```
>
### 02- 面包屑 导航
>
1. tip组件里 设置props: ['lists']
2. tip组件
```html
<span v-for="(item,index) in list" :key="index">
    <router-view :to="item.path">{{ item.name }}</router-view>
    <b v-if="index != list.length-1">/</b> 
</span>
```
3. 路由about页面 tip组件
```html
<tip :list="list"></tip>
```
```js
components:{
    tip,
    list:''
},
created(){
    this.list = this.$route.matched
}
```
>
### 03-路由元信息
>
* 在路由列表中,每个路由都有一个 meta 元数据字段,我们可以在这里设置一些自定义信息,供页面组件或路由钩子函数使用,(如设置网页标题,设置某个页面是否需要登陆才能进入)
>
```js
export default new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          meta: { title: true }
        }
      ]
    }
  ]
})
//修改 标题
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
})
```
### 04-过渡动效 通过transition组件实现路由切换效果 动画
>
1. 设置html
```html
<transition :name="names">
    <router-view></router-view>
</transition>
```
2. 设置css
```css
.left-enter{
transform: translateX(-100%);
}
.left-enter-active{
  transition: .3s ease-in;
}
.right-enter{
transform: translateX(100%);
}
.right-enter-active{
  transition: .3s ease-in;
}
```
* transition属性: 
    * name - string，用于自动生成 CSS 过渡类名。例如：name: 'fade' 将自动拓展为.fade-enter，.fade-enter-active等。默认类名为 "v"
    * appear - boolean，是否在初始渲染时使用过渡。默认为 false。
    * css - boolean，是否使用 CSS 过渡类。默认为 true。如果设置为 false，将只通过组件事件触发注册的 JavaScript 钩子。
    * ype - string，指定过渡事件类型，侦听过渡何时结束。有效值为 "transition" 和 "animation"。默认 Vue.js 将自动检测出持续时间长的为过渡事件类型。
    * mode - string，控制离开/进入的过渡时间序列。有效的模式有 "out-in" 和 "in-out"；默认同时生效。 先离开再进入;
    * duration - number | { enter: number, leave: number } 指定过渡的持续时间。默认情况下，Vue 会等待过渡所在根元素的第一个 transitionend 或 animationend 事件。
>
* 路由简单动画
    1. 将路由容器放入transition标签
    2. 给transition标签设置样式
    3. router-link-active 可以修改
>
### 05-滚动 行为
>
* 理解 vue在页面切换的时候 比如a页面跳转到b页面的时候 滚动条的位置是保持不变的 跟传统路由切换页面相差很大 
>
* 如果要实现和前端路由一样的效果 这个时候就可以使用router提供的滚动行为 这个更好[vue-router官方issues](https://github.com/vuejs/vue-router/issues/2533 "官方issues") (浏览器后退时返回到顶部)
* 在main.js中设置
>
```js
scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve({ x: 0, y: 0 })
        })
    })
    }
```
>
### 06-路由懒加载
>
* 像vue这种单页面应用，如果没有应用懒加载，运用webpack打包后的文件将会异常的大，造成进入首页时，需要加载的内容过多，时间过长，会出啊先长时间的白屏，即使做了loading也是不利于用户体验，而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时。简单的说就是：进入首页不用一次加载过多资源造成用时过长！！！
>
* 懒加载设置,router.js设置
```js
component:() => import( '@/view/mine/mine.vue')
```
>
### 07-登陆鉴权
* 在客户端发送账号密码到服务端，服务端验证成功后返回token存储用户的权限，前端用Cookie把token存储在本地，在路由跳转（router.beforeEach）中判断是否存在token，另外前端可以通过token请求服务端获取userInfo，在vuex中存储着用户的信息（用户名，头像，注册时间等等）。
>
### 08-路由style样式
>
* 一般style设置 lang="scss" 及 scoped 是通过css的属性选择器实现的
>
## 路由页面
>
### 01-创建路由
>
1. 安装 vue-router 路由模块
>
2. 创建组建的模板对象, `var login = {template: '<h1>登录组件</h1>'}`
>
3. 创建一个路由对象,当导入 vue-router 包之后,在window全局对象中,就有了一个 路由的构造函数,叫做 VueRouter
```js
//路由对象, 为路由构造函数传递一个配置对象
var routerObj = new VueRouter({
    //route 表示[路由匹配规则]的意思
    routes: [ //路由匹配规则
        { path: '/', redirect: '/login' },
        { path: '/login', component: login },
        { path: '/register', component: register }
     ],
      linkActiveClass: 'myactive'
})
```
* 每个路由规则都是,都是一个对象,身上必须有两个属性
    * 属性一 path:表示监听,哪个路由链接地址
    * 属性二 component, 表示,如果路由是前面匹配到的 path 则展示component属性对应的组件
* 注意 component的属性值,必须是一个组件的模板对象,不能是组件的引用名称: 
>
4. 通过 设置router: routerObj 将路由规则对象,注册到 vm实例上,用来监听 URL地址的变化,然后展示对应的组件
* 点击链接 --> 改变url地址 -->触发路由的监听事件 --> 路由监听到url路径改变 --> 进行路由规则匹配 --> 展示组件
>
5. 跳转方式 `<router-link to="/login"></router-link>` 相当于a链接
>
6. 页面设置`<router-view/>` 路由容器
>
* 创建简单路由
    1. 引进vue.js 和 router.js
    2. 2.创建vue实例
    3. 创建组件
    4. 创建路由实例
    5. 跳转页面
    6. 路由容器
>
### 02路由重定向 redirect:[riːdəˈrek]
>
* 默认某页为初始页
>
1. 在路由匹配规则里: `{path: '/', component: login}` 方式一不推荐
>
2. 在路由匹配规则里: `{path: '/', redirect: '/login'}`方式二 重定path路径 
    * 第一次渲染时显示,默认跳转页面
>
### 03-设置导航状态样式两种方式 
>
* vue-router 提供的选中状态类: `linkActiveClass: ''`
>
1. 方式一: linkActiveClass值默认为 : .router-link-active 
2. 方式二: 修改linkActiveClass值 在路由构造函数中,与路由匹配规则同级设置,`linkActiveClass: "类名" ` 在通过修改后的类名设置样式
>
* 精确匹配与包含匹配
1. 包含匹配
router-link添加激活状态样式类的默认依据是对 URL 地址的全包含匹配 举个
，如果 前的路径是/home ，那么 router-link to＝"/" 也会被匹配井设 css 类名
2. 想要链接使用“精确匹配模式”，则使用 exact 属性(只想匹配/home)。 router-link 添加一个属性exact
>
### 04-路由传参
>
* 使用query方式传参
    1. 在router-link的to传参. `<router-link to="/login?id=10&name=zs"/>`
    2. 通过 this.$route.query.id 或.name 得到数据
    3. 也可以直接在页面引用: {{ $route.query.id }}
    * 如果在路由中,使用查询字符串,给路由传递参数,则不需要修改路由规则的 path属性
>
* 使用动态路由params方式传参
    1. 与动态路由一致, 在路由匹配规则中,path后设置; `{path: "login/:id/:name"}`
    2. 在<router-link to="/login/12/张三"> 将id 和name值传入
    3. 通过this.$route.params.id引用
    * 原理: id怎么解析出来的: this.$route里 matched有路由匹配规则 --> 把path  预解析正则表达式regex -->拿正则表达式去解析fullPath --> 解析的结果就是params
>
* 动态路由params传值与query传值的区别
    1. 动态路由传值需要在 path 后写上参数 'url/:id',而query传值在任何一个路由后面都可以添加
>
### 05-命名视图
>
1. 设置三个<router-view/>标签 路由容器
2. 设置三个组件
3. 路由匹配规则: `{path: '/', components:{ 'default':header, 'left': leftbox, 'main':mainbox }}` left是字符串
4. 给路由容器设置属性name  `<router-view name="left"></router-view>` 会通过name值找到对应组件 name值是字符串
5. 给路由容器设置样式; 左右用display: flex设置 flex: 2/8 可以设置按比例平分视窗
>

对象里 定义名 可以加引号可以不加 class-name 带'-'必须加引号
watch 可以监听dom 和 非dom元素 -->路由监听  '$route.path':(new,old){可以监听路径变化}

* 监听事件: 
    * 方式一 @keyup
    * 方式二 watch
    * 方式三 computed 计算属性使用一定要return出去 监听数据变化
* methods 注重业务逻辑,可以将大量的业务逻辑写入
* npm 是从官网上下载: registry.npmjs.org
* webpack 将文件es6转换 webpack '要打包的路径' output '打包好的输出路径'
>
### 06-this.$router和this.$route
>
* this.$route 代表的是当前的路由
* this.$router 代表的是全局的路由
>
### 07-this.$route.matched
>
* this.$route.matched 代表的是与当前路由的所有有关信息(一般用于航代表,面包屑导航)
* 一个数组,包含当前路由的所有嵌套路径片段的路由记录,路由记录就是 `routes` 配置数组中的对象副本(还有children数组),
>
### 08-this.$router.options
>
* this.$router.options 是存放路由信息的配置文件

>
## vue状态管理 vuex
>
### 01-理解vuex
>
* 数据流: 后（qian）端通过action处理数据，然后通过 mutation 把处理后的数据放入数据库（state）中，谁要用就通过
getter从数据库（state）中取。
>
* vuex是为了保存组件之间共享数据而诞生的,如果组件之间有共享数据,可以直接挂载到vuex中,而不必再父子组件之间 传值,如果不需要传值,就不需要共享私有数据,
>
* data props vuex的区别
    1. data 储存私有数据
    2. props 储存父子传的数据
    3. vuex 储存全局共享的数据
>
### 02-创建vuex
>
1. 安装vuex,导入安装包, `import Vuex from 'vuex'`
2. 注册vuex 到vue 里,  `import Vuex from 'vuex'`  `Vue.use('Vuex')`
3. 创建 Vuex实例,new Vuex Store(),得到一个数据仓储对象
```js
export default new Vuex.Store({
  state:{},
  mutations:{},
  actions:{},
  getters:{},
  modules:{},
})
```
>
* state -- vuex store 实例的根状态对象,用于定义共享的状态变量,就像 Vue 实例中的data
* mutations -- 可以理解为,store的methods (只能操作同步数据)
* actions -- 可以理解成store的methods (主要用于异步操作)
* getters -- 读取器,外部程序通过他获取变量的具体值,或者在取值前做一些计算(可以认为是 store的计算属性 )
* modules
>
### 03-获取 state 数据
>
1. 将需要共享的数据放入 state 里
2. 在某个组件获取共享的数据 用computed来接收这个数据
```js
computed:{
    方法名(){
        return this.$store.state.xx(共享的数据)
    }
}
```
3. 页面使用直接使用插值表达式{{方法名}}
>
### 04-使用mutations(同步提交)更改state里数据
>
* 虽然使用 this.$store.state.xx(共享的数据) 可以更改state里数据,但容易造成混乱,唯一方法是 提交 mutations,类似事件methods
>
* 每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
 "同步模式"就是上一段的模式，后一个任务等待前一个任务结束，然后再执行。
>
* 在mutation里面写入更改的函数 函数的第一个参数代表 state 更改vuex中的state是通过更改这个参数实现的 
>
* 为什么必须是同步函数呢 因为在devtools日志里面监测不到数据的变化
1. store.js
>
```js
mutations: {
    updateNum(state){
      state.num ++   // this.$store.commit("updateNum")
    }
  },
```
2. 组件中
```js
methods:{
    add(){
      // this.$store.commit('changecount',3);
      this.$store.commit('changename')
    },
```
3. 页面使用添加点击事件 @click='add'
>
### 05-使用actions (异步提交) 更改state
>
* actions 类似 mutations, 不同:
    1. actions 提交的是 mutations,而不是直接变更状态
    2. actions 里面提交数据的是提交mutations 在mutation里面的直接修改state
    3. actions 可以包含任意异步操作
>
1. 设置点击事件 例 @click="add"
2. 在methods中设置事件: 
```js
methods:{
    add(){
        //通过this.$store.dispatch触发actions事件,3为参数,传参
        this.$store.dispatch('actions事件名',3) 
    }
}
```
3. 给store.js里设置actions,提交给mutations
```js
actions:{
    事件名.(context,val){
        // val为组件传值的形参数
        context.commit('mutations事件名',val)
    }
}
```
4. 给mutations设置需要的事件,操作state
```js
mutations:{
    // val为actions形参
    事件名(state,val){
        state.xx 进行操作
    }
}
```
* 解构赋值
```js
事件名.({commit},val){
        // val为组件传值的形参数
        .commit('mutations事件名',val)
    }
```
>
### 06-getters(相当于计算属性)
>
1. 设置setters
```js
getters:{
    事件名(state){
        state.count+ '元'
    }
}
```
2. 组件计算属性设置
```js
num(){
    return this.$store.getters.事件名
}
```
3. 将计算属性中的num 使用插值表达式插入页面
>
### 07-vuex注意
>
1. 需要直接呈现在页面的数据,以及及时更新的数据放在组件computed计算属性中,
2. 计算属性的数据,虽然本质是方法,调用时只需当做属性来写, 且需要return
3. 点击事件处罚的方法写在methods中,代码逻辑
4. 使用actions处理异步,组件页面方法使用`this.$store.dispatch('actions方法名')`触发actions方法
5. actions里,`context.commit('mutations方法名')`提交到mutations方法里,mutations执行相应的方法
6. mutations第一个参数是 state 第二个参数是需要传的参数,若想传多参数,第二个参数可以写成对象
7. getters不会改变原数组
>
## vuex高级
>
### 01-vuex辅助函数 节省代码
>
1. mapState  --  当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键。(其实就是我们在vuex里面定义的变量  接收的时候还要再定义变量去接收 很麻烦 vuex辅助函数呢 可以帮我们解决这种麻烦)
2. mapGetters -- 将store中的多个getter映射到局部组件的计算属性中
3. mapMutations 将组件中的 methods 映射为 store.commit 调用。
4. mapActions 将组件的 methods 映射为 store.dispatch 调用
>
* ...剩余运算符
>
#### ...mapState 的三种写法
>
1. 先引入 import { mapState , mapGetters , mapMutations , mapActions } from "vuex"
>
```js
computed: {
    ...mapState({
       age:state => state.age, //第一种 箭头函数 
       num:"num",//第二种 字符串 'num'等同于 `state => state.num`
       name(state){
        //第三种 等同于第一种 不过可以使用this 方便vuex里面的数据结合本地的数据
           return this.username + state.name;
       }
    })
}
```
>
#### ...mapGetters  getters的辅助函数
>
1. 先引入
2. 只有一种方法
```js
computed:{
    ...mapGetters({
        price: "price"
    })
}
```
>
#### ...mapMutations mutations的辅助函数的两种写法
>
```js
methods:{
    ...mapMutations([
    //第一种 数组方法
        "add", //在其他方法是调用时,执行this.add() 映射为 `this.$store.commit('add')`
        'adds' //如果需要提交载荷,直接调用 this.adds(num)即可传参
        // 映射为this.$store.commit('adds',num)
    ]),
    ...mapMutations({
        add: "add" //第二种 对象方法
        //将`this.add()`映射为`this.$store.commit('add')`
    })
}
```
>
#### ...mapActions  actions的辅助函数两种方法
>
```js
methods:{
    ...mapActions([
    //第一种 数组
    'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
    'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
        add: "increment" //将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })

}
```
#### 总结
>
* mapState 和 mapGetters写在计算属性computed里
* mapMutations 和 mapActions写事件methods里
* mapState有三种方法,mapGetters只有一种方法,mapMutations两种,mapActions两种
* 计算属性需要return 
* 
>
### 02-modules 创建模块化
>
>
1. 在src文件下创建store文件夹,下设 index.js,
```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import moduleA from "./modules/moduleA"
import moduleB from "./modules/moduleB"
export default new Vuex.Store({
  modules: {
    a: moduleA,   
    b: moduleB
  }
})
```
2. 在index.js同级新建一个modules文件夹,里建moduleA 和modulesB 分别设置内容 例:
```js
const moduleA = {   // moduleA
    state: { num:1 }, //this.$store.state.a.num
    mutations: {  
        addNum(state){
            state.num += 2  // 调用的时候执行 this.$store.commit('a/addNum')
        }
    },
    actions: { 
        syncAddNum(context,val){
            context.commit("addNum",val) // 调用的时候执行 this.$store.dispatch('a/syncAddNum',10)
        }
    },
    getters: { 
        addNums(state){
            return state.num + "元 "  // 调用的时候执行 this.$store.getters['a/addNums']
        }
    }
}
export default moduleA
```
>
### 03-模块化注意点
>
1. 点击事件 都会触发mutations里 addNum 事件 因为mutation不是模块化,两个都会触发
2. mutations里的addNum只能作用于自身的state库的数据
3. getters的数据 要用数组包起来
4. 如果想实现模块化,需要在每个模块添加命名空间: 与getters同级设置: `namespaced: true,`
5. 启用命名空间之后,获取getters  mutations actions 写法都要变
6. 默认 getters mutation active没有模块化  所以不用写成('moduleA/方法名')
>
### 04-模块化的辅助函数
>
```js
export default {
 computed:{
   ...mapState({
     num: state => state.b.num, //箭头函数
   }),
   ...mapGetters({
    num1: "b/price" // `模块/方法名`
   })
 },
 methods:{
    ...mapMutations({
      add: "b/addNum"  // `模块/方法名`
    }),
    ...mapActions({
      change: "b/change" // `模块/方法名`
    })
 },
 created(){
   console.log(this.$store)
 }
}
```
### 05-vuex.Store四种方法对比
>
* 1. state
```js
① return this.$store.state.num  //vuex常规方法
② ...mapState({           //辅助函数
  age: state => state.age, //一
  num: 'num' //二
  name(state){
    return this.username + state.name; //三
  }
})
③ return this.$store.state.moduleA.num  // 模块化
④ ...mapState({       //模块化辅助函数
     num: state => state.moduleA.num, //箭头函数
   }),
```
>
* 2.  getters
```js
① return this.$store.getters.事件名 //vuex常规方法
② ...mapGetters({         //辅助函数
        price: "price"
    })
③ return this.getters['moduleA/price'] //模块化
④ ...mapGetters({       //模块化辅助函数
    num1: "moduleA/price" // `模块/方法名`
   })
```
>
* 3. mutations
```js
① this.$store.commit('add',val) //vuex常规方法
② {...mapMutations(['add']) //一   //辅助函数
    ...mapMutations({add: 'add'}) //二
}
③ this.$store.commit('moduleA/add') //模块化
④ ...mapMutations({     //模块化辅助函数
      add: "b/addNum"  // `模块/方法名`
    }),
```
>
* 4. actions
```js
① this.$store.dispatch('事件名',val) //vuex常规方法
② {...mapActions(['increment']) //一  //辅助函数
  ...mapActions({increment: 'increment'}) //二
}
③ this.$store.dispatch('a/syncAddNum',10) //模块化
④ ...mapActions({         //模块化辅助函数
      change: "b/change" // `模块/方法名`
    })
```
>
>
## webpack
>
### 01-静态属性与实例属性
>
1. 静态属性: 就是直接通过类名,直接访问的属性 例如: Vue.xx
2. 实例属性: 就是通过类的实例来访问的属性, 例如: vm.xx
>
### 创建webpack
>
1. `初始化` 新建webpack项目 --> 初始化 --> npm init -y
2. `安装依赖` npm install webpack webpack-cli --save-dev 因为不支持import;需要依赖
2. `结构` 按照官方文档新建目录结构
3. `创建` index.js 和 index.html
4. `调整` package.json 按照官方文档调整
* 初步创建
>
* 外部引入是隐式依赖关系,可能会出现一些问题
    * 无法立即体现，脚本的执行依赖于外部扩展库(external library)。\
    * 如果依赖不存在，或者引入顺序错误，应用程序将无法正常运行
    * 如果依赖被引入但是并没有使用，浏览器将被迫下载无用代码
>
* 需要显式声明引入 创建一个bundle文件
1. 调整目录 将index.html放到新建dist文件下
2. 本地安装 library: 安装依赖 -->npm install --save lodash
3. 引入 按照官方文档修改 src/index.js
4. 更新html 通过显式声明 按照官方文档修改dist文件下的index.html
5. 执行构建 npx webpack
>
* 使用配置文件
1. `新建webpack.config.js` 设置入口文件 按照官方文档 -->将入口文件index.js打包到path路径dist下filename文件里
2. `执行构建` npx webpack
>
*** NPM 脚本**(NPM Scripts)
1. `添加脚本` 在package.json文件中,添加 `"build": "webpack"`命令,npm run build 命令来代替 npx webpack命令了
2. `执行` npm run build 命令试验
>
* HtmlWebpackPlugin **自动生成index.html** 按照英文文档 中文文档有误
1. `安装`npm install --save-dev html-webpack-plugin
2. 在webpack.config.js添加命令 按照官方文档
3. 将index.html文件删除
4. 当载入图片资源和css资源时,HtmlWebpackPlugin会经常出错,删除node_modules文件,重新下载
>
* webpack默认只能编译js文件,载入图片.css等文件时,需要按照官方文档执行
>
* 制备 **调用js文件**的函数
1. 新建js文件 --> 设置js文件函数
2. index.js中引入
3. index.js创建button标签,button传名,事件,将button标签传入element文档
4. 拆分index.html 分为button app 
5. webpack.config.js添加入口;出口文件
* 具体按照官方文档
>
* **清理/dist文件夹**
1. 安装 npm install --save-dev clean-webpack-plugin
2. webpack.config.js配置 + 配置插件
>
* 使用源地图--提供**源代码错误**地方(内联源映射)
* 因为通过打包后的文件只会显示app.js出错,找不到具体的错误在哪? 源地图应运而生;
1. webpack.config.js -->mode: 'development',
2. devtool: 'inline-source-map',源映射，将已编译的代码映射回原始源代码
>
* 使用webpack-dev-server 简单的Web服务器和使用**实时重新加载**
* 在此之前需要每次修改都需要运行命令; 现在更改后直接用就可以
1. 安装 npm install --save-dev webpack-dev-server
2. webpack.config.js添加插件 开启本地服务器
3. package.json 添加一个脚本来轻松运行开发服务器
>
* 手动**分割代码**将公共部分代码提出,减少代码量 SplitChunksPlugin
1. 优化分割块
>
* 动态导入,拆分代码
1. 官方文档

>
### 02-Babel的loader 第三方
>
* 由于webpack中,只能处理一部分Es6语法,一些更高级的ES6语法以及ES7语法,webpack是处理不了的,所以需要借助 第三方 loader,来帮助webpack来处理这些更高级的语法,当第三方loader把高级语法转换成低级语法之后,会把结果交给webpack 去打包到 bundle.js中
 >
 * 通过 Babel, 可以帮助我们将高级语法转换为 低级语法 ES6语法转ES5语法
 >
* 操作步骤;
 >
1. 在 webpack中,可以运行两套命令,安装两套包,去安装  Babel 相关的loader功能
    * ①第一套包: cnpm i babel-core babel-loader babel-plugin-transform-runtime -D
    * ②第二套包: cnpm i babel-preset-env babel-preset-stage-0 -D
2. 打开webpack配置文件,在 module 节点下的rules数组中,添加一个新的匹配规则: 
    * ①`{ test:/\.js$/, use: 'babel-loader', exclude:/node_modules/ }`
    * ②注意: 在配置 babel的loader规则时,必须把 node_modules目录,通过exclude 选项排除掉: 原因:
        * babel会把node_modules里js文件全部打包,消耗cpu,打包速度慢
        * 最终，Babel 把 所有 node_modules 中的JS转换完毕了，但是，项目也无法正常运行！
3. 在项目根目录中,新建一个 叫`.babelrc`的babel配置文件,这个配置文件,属于JSON格式,所以，在写 .babelrc 配置的时候，必须符合JSON语法规范： 不能写注释，字符串必须用双引号
    *  3.1 在 .babelrc 写如下的配置：  大家可以把 preset 翻译成 【语法】 的意思
    ```js
        // {
        //   "presets": ["env", "stage-0"],
        //   "plugins": ["transform-runtime"]
        // }
    ```
4. 了解: 目前我们安装的 babel-preset-env,是比较新的ES语法,我们安装的是 babel-preset-es2015, 现在，出了一个更新的 语法插件，叫做 babel-preset-env ，它包含了 所有的 和 es***相关的语法
 >
 ### 03-render函数渲染页面组件
 >
 1. 在vm实例中,代替components 组件 设置函数
```js
 var login = {
            template: `<h3>登录组件</h3>`
        }

        //创建vue实例
    var vm = new Vue({
        el:"#app",
        data:{},
        methods:{},
        render: function(created){
    //created是一个方法,调用它可以把指定的组件模板.渲染为 html结构
            return created(login)
        }
    })
```
* return结果会把换代替页面el指定的容器,之前的内容都会消失,只会渲染自己的组件;
* 之前用的<login/>不会清除页面其他的内容
>
### 04-vm实例render函数渲染vue项目组件
>
* 作用就是使用render函数用app.vue代替掉index.html里的#app标签
```js
render: function(created){
    //created是一个方法,调用它可以把指定的组件模板.渲染为 html结构
    return created(login)
}


简写: render: h => h(app)
```
* 在webpack中,若果想通过vue,把一个组件放到页面中去展示,vm实例中的render函数可以实现

>
### 05-查找包--查找规则
>
1. 找项目根目录中有没有 node_modules  的文件夹
2. 在 node_modules中,根据包名,找对应的vue 文件夹
3. 在vue文件夹中,找一个叫做  package.json的包配置文件
4. 在 package.json文件中,查找一个 main属性 [main属性指定了这个包在被加载时候，的入口文件]
* 在vue项目中如果想使用网页版的vue方式,方法一:
    * 需要在main.js中修改vue引入路径
    * import Vue from '相对路径' 相对路径通过上面的包查找规则来查找
* 方法二:
    * 在webpack.config.js中设置resolve --返回一个以给定值解析后的Promise 对象。
    ```js
    resolve: {
        alias: { // 修改 Vue 被导入时候的包的路径
        "vue$": "vue/dist/vue.js"
        }
     }
    ```
    * 需要重新启动下vue项目
>
### 06-webpack如何使用vue
>
1. 安装vue的包: cnpm i vue -s
2. 由于在 webpack中推荐使用 .vue这个组件模块文件定义组件,所以需要安装 能解析这种文件的 loader cnpm i vue-loader
3. 在 main.js中,导入 vue模块, import Vue from 'vue
4. 定义一个 .vue结尾的组件,其中由三部分组成: template script style
5. 使用 import login from './login.vue' 导入这个文件
6. 创建vm 的实例,var vm = new Vue({ el:"#app",render: h => h(login) })
7. 在页面中创建一个 id 为app的div元素,作为我们 vm 实例要控制的区域

>
### 07-命令参数  webpack.json文件中 
>
```js
"scripts": {
    "serve": "vue-cli-service serve --open --port 3000 --contentBase src",
    }
```
* 空格+ --open 自动打开    空格+--port 3000修改url路径后缀  --contentBase src以src为渲染根路径 --hot热重载,热更新,好处是打补丁,无刷新重载,
>
* 第二种 在webpack.config.js里设置命令参数
>
>
### 思路 
>
1. 如果方法想调用自己methods里的方法,可以通过 this.方法名();
2. 如果想调用另一个方法的数据,可以现在data定义 类名为null,被调用方法里 this.类名=需要数据,调用方法里,通过this.类名调用数据. 原理: 先赋值再引用
3. 如果是定时器里使用this 需要用箭头函数 定时器defunction里this指向会改变
4. 写页面
    1. 分析有几部分组成,可以分成几部分,每部分有什么特点,可以怎么实现
    2. 
cyan 青色

### 09-Mint-UI组件使用 基于vue.js
>
1. 按照官方文档下包 npm i mint-ui -S
2. 引入 Mint UI 引入全部组建
```js
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
```
3. 直接把组件拿来用就可以了,根据官方文档提示,按需使用组件
>
### 获取数据  vue-resource
>
1. 下包: npm i vue-resource -s
2. 导入: import VueResource from 'vue-resource'
3. 安装:  
>
>
## axios
>
### 01-创建axios
>
1. 下包: npm install axios --save
2. 需要页面引入: import axios from "axios";
>
### 02-get请求
>
1. 点击事件 init
```js
init(){
   axios.get(`url`)
    //    成功回调
   .then(function (response) {
        console.log(response);
      })
    //   失败回调
      .catch(function (error) {
        console.log(error);
      });
}
```
### 03-get请求传值方式
>
1. 方式一
```js
    axios.get(`http://59.110.138.169/api/douban/movie/in_theaters?start=${1}&limit=${5}`)
    .then((val) =>{
        console.log(val.data)
    })
```
>
2. 方式二
```js
axios.get(`http://59.110.138.169/api/douban/movie/in_theaters`,{
    params:{
        start: 1,
        limit: 10
    }
    })
    .then((val) => {
        console.log(val.data)
    })
```
>
### 04-post请求
>
```js
axios.post('http://order.gjw.com/Order_Api/GetValiCode',datas)
    .then(function (response){
        console.log(response);
    })
    .catch(function(error){
        console.log(error);
    })
```
>
### 05-post传值方式
>
```js
var params = {
    name: '成昆',
    age: '12',
    sex: "0",
    tel: "1515534696",
    address: "光明顶",
    school: "明教",
    }
    axios.post('http://59.110.138.169/api/ajax/user/save',qs.stringify(params))
    .then((val) =>{
        console.log(val.data)
    })
```
>
### 06-请求post数据类型Content-Type
>
* `Content-Type: application/json` ： 请求体中的数据会以json字符串的形式发送到后端(axios默认的)
* `Content-Type: application/x-www-form-urlencoded`：请求体中的数据会以普通表单形式（键值对）发送到后端
>
* 方式一
1. 引入qs  import qs from 'qs'
2. qs.stringify(params) 将post请求体默认json类型改成 普通表单类型
    
* 方式二


>
### 07-axios执行多个并发请求
>
1. 执行多个并发请求是通过`axios.all`完成  
    * `axios.all([function , function , ...])`
    * 请求完成之后 会以数组的形式返回全部的请求数据
>
### 08-全局的 axios默认值
>
1.  `axios.defaults.baseURL` 设置默认公共请求地址baseURL
    * 当我们的项目里面有很多的接口时 设置默认baseURL对后期的维护很有必要 
    * 例如 开发环境访问的是开发时的数据库 生产环境访问的是线上数据库 开发和生产访问的不是一个地址
    * (开发环境是本地开发时的环境 生产环境是打包之后的环境)
2. `axios.defaults.headers.common['Authorization'] = AUTH_TOKEN`;
如果你每次请求接口需要验证，就加这个，不需要验证那就不用加
* `axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'`或`{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}`; // 设置请求头
>
### 09-设置超时
>
1. `axios.defaults.timeout = 2500`; 设置超时
    * 当后端返回数据过慢时设置了超时就会自动断开请求
>
### 10-axios拦截器 interceptors
>
* 页面发送http请求，很多情况我们要对请求和其响应进行特定的处理；如果请求数非常多，单独对每一个请求进行处理会变得非常麻烦，程序的优雅性也会大打折扣。好在强大的axios为开发者提供了这样一个API：拦截器。拦截器分为 请求（request）拦截器和 响应（response）拦截器。
* 前端请求接口时首先向服务端发送请求的接口加参数 这个步骤称之为request
* request 对象代表了一个HTTP请求，其具有一些属性来保存请求中的一些数据，比如query string，body，HTTP headers等等。
    * query get请求附带的参数
    * body post请求附带的参数
    * HTTP headers 提交数据类型
>
* 服务端接收到请求之后响应数据 这个步骤称之为response
response里面存放的就是服务端返回给我们的数据，包括状态码，返回的数据格式等等
* axios拦截器就是对这请求前和返回数据后的这两个过程执行操作
>
### 11-使用封装get与post请求响应拦截
>
1. 引入文件 import axios from '@/api/index.js'
2. 挂载到vue原型链上, Vue.prototype.$ajax = axios;
3. 封装拦截
```js
import axios from "axios" ;
import { Loading } from 'element-ui';
import qs from "qs"
axios.defaults.baseURL = "http://59.110.138.169"
axios.defaults.timeout = 5000;
var loadings ;
// request 是请求服务器执行的拦截函数
axios.interceptors.request.use(function (config) {
    console.log(config,333)
    if(config.method == "post"){
        config.data = qs.stringify(config.data)
    }
    loadings =  Loading.service();
    return config;
}, function (error) {
    // 对请求失败做处理 防止后续promisse不能执行的问题
    return Promise.reject(error);
});


//response 响应浏览器拦截器
axios.interceptors.response.use(function (config) {
    loadings.close();
    return config;
}, function (error) {
    loadings.close();
    return Promise.reject(error);
});
export default axios 
```
4. 调用 this.$ajax.get /post
```js
created(){
    this.$ajax.get('/api/douban/movie/in_theaters')
    .then((res) =>{
      console.log(res)
    })

    var params = {
        name: "吕布",
        age: "28",
        sex: "0",
        tel: "110",
        address: "内蒙古奉先",
        school: "三国武校"
       }
    this.$ajax.post('/api/ajax/user/save',params)
  }
```
* this.$ajax是异步操作, ==> .then会继续执行 ==> 在this.$ajax执行完之前,形参已经被具体化
>
### 12-分页显示数据
>
1. 成功回调的data.data里 
```html
<div class=" footer">
    <!-- 总数 -->
    <span>总数: {{ totalRow }} 条</span>
    <span>
        <!-- 选择列表渲染行数 -->
        <select v-model="limit">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
        </select>
        <span>Selected: {{ limit }}</span>
    </span>
    <div>
        <!-- 翻页 -->
        <button class="flip" v-for="(item,index) in totalPage" :key="index" @click="flip(index+1)">{{ index+1 }}</button>
    </div>
</div>
```
2. 获取用户列表时: 传值 
```js
//获取用户列表 get
getlist(start,limit) {
    this.$ajax.get(`/api/ajax/user/list`,{
        params:{
            start: start,//变量
                imit: limit,
        }
    })
    // 获取用户列表 + 页码 + 总条数
    .then((res) => {
        return this.list = res.data.data.list,
        this.totalPage = res.data.data.totalPage,
        this.totalRow = res.data.data.totalRow,
        console.log(res.data.data)
    })
},

created(){
    //调用获取列表  ==> 传值(实参)
    this.getlist(this.start,this.limit);
}

```
3. 翻页 调用获取列表 ==> 传值(变量) 点击某页
```js
//翻页 flip
flip(val){
    this.getlist(val, this.limit)
}
```
* 方式二
1. 绑定v-model="limit" @change="getlist" 
    * 每当点击某个数字,就会limit值,触发事件,事件的变量limit跟着改变

>
### 13-数据库搜索
>
1. data定义id : ''
2. input输入框绑定 v-model="id"
3. 点击事件 
```js
get(){
    this.$ajax.get('路径'传值this.id)
}
```
>
## 
>
### 01-promise 解决回调的写法---是异步编程的一种解决方案
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
### promise 概念
>
1. Promise 是一个构造函数,可以通过 new Promise()得到一个 Promise的实例
2. 在 Promise上,有两个函数,分别叫做 resolve(成功之后的回调) 和 reject(失败之后的回调)
3. 在 Promise构造函数的 Prototype属性上,有一个.then方法,只要是Promise创建的实例,都可以通过.then方法()访问
4. Promise表示一个异步操作,当new 一个Promise实例,就表示一个具体的异步操作
5. Promise创建的实例 异步操作的结果有能有两种状态
    * 状态一: 执行成功,需要在内部调用 resolve 把结果返回给调用者
    * 状态二: 执行失败,需要在内部调用 reject 把结果返回给调用者
    * 由于 Promise 的实例，是一个异步操作，所以，内部拿到 操作的结果后，无法使用 return 把操作的结果返回给调用者； 这时候，只能使用回调函数的形式，来把 成功 或 失败的结果，返回给调用者；
>
### 02-then方法
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
### 03-promise 捕获异常的两种方式
>
* promise地狱回调时,会前面一个错误会后面的都不执行
* 当我们有这样的需求,哪怕前面的 promise 执行是败了,但是不要影响后续 promise 的正常执行,此时,我们可以单独为每一个 promise,通过 .then 指定一下失败的回调
* 有时,我们有这样的需求,与上面需求正好相反,如果,后续 promise 执行,依赖于前面promise 执行的结果,如果前面的失败,则后面的就没有继续执行下去的意义了,此时.我们想要 实现,一旦有报错,则立即终止所有 promise 的执行;
>
1. 方式一: 直接在 promise 地狱回调中 加 function(err){ return 执行的操作 }
2. 方式二: 在最后面添加 .catch(function (err){})
* .catch 的作用: 如果前面有任何的 promise 执行失败,则立即终止所有 promise 的执行,并马上进入 catch 去处理 promise 中抛出的异常
>

## pc端ui组件
>
### 01-moment.js 时间插件制作全局过滤器
>
1. 下包: npm install moment --save
2. 在main.js中设置
```js
// 1.导入格式化时间的插件
import moment from 'moment'
//定义全局过滤器
Vue.filter('dataFormat',function (dataStr, Pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)
})
```
3. 在时间地方调用管道符 
```html
<!-- 默认时间样式 -->
<span>发表时间: {{ item.time | dataFormat }}</span>
<!-- 传参时间样式 -->
<span>发表时间: {{ item.time | dataFormat('YYYY-MM-DD') }}</span>
```
>
### 02-element-ui使用  vue第十天 
>
* 全局安装参照element-ui官网
* 局部安装: 
    1. cnpm install babel-plugin-component -D 
    2. how do you wan to import element, Fully import 是全局安装 import on demand 局部安装
    3. 可能需要重新安装dependencies里的依赖: cnpm install
    4. 局部引用: main.js中 按需引入
        * import { Button } from 'element-ui';
        * Vue.use(Button)
>
### 03-vant使用 vue第十天
>
* 引入方式分两种: 全局引入和 局部引入
>
* 全局引入参照官网
* 局部引入
1. 安装: npm install babel-plugin-import -D
2. 
>

>
## 项目经验
>
### 移动端经验
>
1. 添加动画后头部和底部导航晃动 
- 解决: 给父盒添加 overflow-x: hidden  给离开的动画添加绝对定位: position: absolute;
2. 头部和底部导航遮挡内容
- 解决: 给内容区域设定padding-top;padding-bottom;
3. 页面左右不靠边
- 解决: 总体设定 padding 0 xxpx;
4. 评论加载更多
- 点击事件 + this.页码 ++(获取数据的页码) 在调用下获取数据的方法
5. 为了防止新数据会覆盖原数据
- 老数据 = 老数据.concat(新数据)
