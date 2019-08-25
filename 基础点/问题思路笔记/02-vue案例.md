##
>
### 01-文字跑马灯
>
1. ```html
    <input type="button" value="开始" @click="start">
    <input type="button" value="结束" @click="stop">
    <h3>{{ mag }}</h3>
    ```
>
2. ```javascript
    var vm = new Vue ({
        el: "#app",
         data(){
            return{
                mag: "2006夏天。我拿着中考成绩单，狂奔向还在田边插秧的父母。告诉他们我考上重点高中了，父亲把秧苗一扔。走，回家吃饭去。[流泪][流泪][流泪]",
                intervalId: null

            }
        },
        methods:{
            start(){
                if(this.intervalId != null) return;

                this.intervalId = setInterval(() => {
                    var start = this.mag.substring(0, 1)
                        //获取后面所有的字符
                    var end = this.mag.substring(1)
                        //重新拼接新的字符串,并赋值this.mag
                    this.mag = end + start
                },400)
            },
            stop(){
                clearInterval(this.intervalId)
                    // 清除定时器后,intervalId重新为null
                this.intervalId = null;
            }
        }
    })
    ```
>
3.  分析：
     1. 给 【开始】 按钮，绑定一个点击事件   v-on   @
     2. 在按钮的事件处理函数中，写相关的业务逻辑代码：拿到 msg 字符串，然后 调用 字符串的 substring 来进行字符串的截取操作，把 第一个字符截取出来，放到最后一个位置即可；
     3. 为了实现点击下按钮，自动截取的功能，需要把 2 步骤中的代码，放到一个定时器中去；
>
>
### 02-简易计算器
>
1. ```html
    <div id="app">
        <input type="text" v-model="n1">
        <select v-model="opt">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
        </select>

        <input type="text" v-model="n2">
        <input type="button" value="=" @click="calc">
        <input type="text" v-model="result">
    </div>
    ```
>
2. ```javascript
      // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        n1: 0,
        n2: 0,
        result: 0,
        opt: '+'
      },
      methods: {
        calc() { // 计算器算数的方法  
          // 逻辑：
           switch (this.opt) {
            case '+':
              this.result = parseInt(this.n1) + parseInt(this.n2)
              break;
            case '-':
              this.result = parseInt(this.n1) - parseInt(this.n2)
              break;
            case '*':
              this.result = parseInt(this.n1) * parseInt(this.n2)
              break;
            case '/':
              this.result = parseInt(this.n1) / parseInt(this.n2)
              break;
          } 

          // 注意：这是投机取巧的方式，正式开发中，尽量少用
          // eval 将字符串解析执行,并返回结果
          // var codeStr = 'parseInt(this.n1) ' + this.opt + ' parseInt(this.n2)'
          // this.result = eval(codeStr)
        }
      }
    });
    ```
>
>
### 03-简单的组件图片删改查看大图
>
* 需求: 全部用一个组件完成,v-for生成五个组件
```html
    <div id="app" >
        <!-- 组件 -->
        <login v-for="(item,index) in list" :key="index" :image="item.image" :text="item.text" :id="item.id" :show="item.show" :imgshow="item.imgshow" @parentevent="parentdel(item.id)"></login>
        
    </div>
    <img src="" alt="">
    <!-- 自定义组件 挂靠-->
    <template id="temp">
        <div class="com" >
            <!-- 图片 -->
            <div class="image"><img :src="image" alt=""> </div>
            <div>
                <!-- 文本 -->
                <div>
                    <p class="text" v-if="!dshow">{{ dtext }}</p> 
                    <input v-else @blur="fonts" v-focus type="text" v-model="dtext">
                </div>
                <!-- 操作项 -->
                <div class="operation">
                    <input type="button" value="删除" @click="del(id)">
                    <input type="button" value="编辑" @click="showinput($event,id)">
                    <input type="button" value="查看大图" @click.prevent="mask">
                </div>
            </div>
            <!-- 查看大图 -->
            <div class="bgc" v-show="imageshow" @click="noshow">
                <div class="mask" @click.stop="isshow">
                    <img :src="image" alt="">
                </div>
            </div>
        </div>
    </template>
```
>
* 
 ```javascript
<script>
    //注册一个全局自定义指令 v-focus 自动获得焦点
        Vue.directive('focus',{
          inserted: function(el){
            el.focus()
          },
        })
        var vm = new Vue({
            el:"#app",
            data(){
                return{
                    image:"",
                    text:"",
                    list:[
                        {   
                            image: "A:/E/课件/07-Html5和Css3新特性/css3-31_第四天/img/m1.jpg",
                            text: "小米Max 2",
                            id: 1,
                            show: false,
                            imgshow: false
                        },
                        {
                            image: "A:/E/课件/07-Html5和Css3新特性/css3-31_第四天/img/m2.jpg",
                            text: "小米Note 2",
                            id: 2,
                            show: false,
                            imgshow: false
                        },
                        {
                            image: "A:/E/课件/07-Html5和Css3新特性/css3-31_第四天/img/m3.jpg",
                            text: "红米4X",
                            id: 3,
                            show: false,
                            imgshow: false
                        },
                        {
                            image: "A:/E/课件/07-Html5和Css3新特性/css3-31_第四天/img/m4.jpg",
                            text: "小米电视",
                            id: 4,
                            show: false,
                            imgshow: false
                        },
                        {
                            image: "A:/E/课件/07-Html5和Css3新特性/css3-31_第四天/img/m5.jpg",
                            text: "小米笔记本",
                            id: 5,
                            show: false,
                            imgshow: false
                        }
                    ]
                }
            },
            methods:{
                //删除事件
                parentdel(val){
                    var index = this.list.findIndex(item => item.id == val)
                    this.list.splice(index,1)
                },
            },
            //父组件传递数据库
            components:{
                "login":{
                    props:[
                        'list',
                        'image',
                        'text',
                        'id',
                        'item',
                        'show',
                        'imgshow'
                    ],
                    template: "#temp",
                    //避免直接更改数据,可以通过data或computeded更改
                    data(){
                        return{
                            dshow:this.show,
                            dtext: this.text,
                            imageshow: this.imgshow
                        }
                    },
                    methods:{
                        //删除事件
                        del(val){
                            this.$emit('parentevent',val)
                        },
                        //编辑事件
                        showinput($event,id){
                            this.$emit('parent',$event,id)
                            this.dshow = !this.dshow
                        },
                        //自动获得焦点后更改状态,显示更改后的数据
                        fonts(){
                            this.dshow = !this.dshow
                        },
                        //遮盖层状态 ==> 点击显示
                        mask(){
                            this.imageshow = true;
                        },
                        //点击其他区域隐藏
                        noshow(){
                            this.imageshow = false;
                        },
                        //点击图片不隐藏
                        isshow(){
                            this.imageshow = true;
                        }
                    }
                }
            }
        })    
</script>
```
>
### 04-全局时间过滤器
>
* 按时间格式得到时间
1. ```javascript
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
> 
2. ```html
    <!-- 采用管道符调用 -->
    {{ time | dateFormat}} 
    ```
>
>
### 05-名称案例
>
* 我们要监听到 文本框数据的变化,这样才能知道,什么时候去拼接出一个fullname
* 如何监听文本框的变化
>
* 方式一 @keyup
1. 创建vue实例,使用 @keyup触发点击事件 监听数据变化
```html
<div id="app">
    <!-- 分析： -->
    <!-- 1. 我们要监听到 文本框数据的改变，这样才能知道 什么时候去拼接 出一个 fullname -->
    <!-- 2. 如何监听到 文本框的数据改变呢？？？ -->
    <input type="text" v-model="firstname" @keyup="getFullname"> +
    <input type="text" v-model="lastname" @keyup="getFullname"> =
    <input type="text" v-model="fullname">
  </div>
  ```
  ```js
    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        firstname: '',
        lastname: '',
        fullname: ''
      },
      methods: {
        getFullname() {
          this.fullname = this.firstname + '-' + this.lastname
        }
      }
    });
  ```
  >
  * 方式二 watch监听器
  1. watch属性可以监听data数据库指定数据的变化,
```html
 <div id="app">
    <input type="text" v-model="firstname"> +
    <input type="text" v-model="lastname"> =
    <input type="text" v-model="fullname">
  </div>  
  ```
 ```js
  // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        firstname: '',
        lastname: '',
        fullname: ''
      },
      methods: {},
      watch: { // 使用这个 属性，可以监视 data 中指定数据的变化，然后触发这个 watch 中对应的 function 处理函数
        'firstname': function (newVal, oldVal) {
          // console.log('监视到了 firstname 的变化')
          // this.fullname = this.firstname + '-' + this.lastname

          // console.log(newVal + ' --- ' + oldVal)

          this.fullname = newVal + '-' + this.lastname
        },
        'lastname': function (newVal) {
          this.fullname = this.firstname + '-' + newVal
        }
      }
    });
``` 
>
* 方式三 计算属性
>
1. 计算属性里所用到的任何data中的数据发生了改变,都立即重新计算,如果没有发生变化,不会重新求值
2. 在computed中,可以定义一些属性,这些属性叫做计算属性,计算属性本质就是一个方法,只不过,我们在使用时,这些计算属性的时候,把它们的名称直接当做属性来使用,并不会当做方法去调用
```js
computed: { // 在 computed 中，可以定义一些 属性，这些属性，叫做 【计算属性】， 计算属性的，本质，就是 一个方法，只不过，我们在使用 这些计算属性的时候，是把 它们的 名称，直接当作 属性来使用的；并不会把 计算属性，当作方法去调用；

    // 注意1： 计算属性，在引用的时候，一定不要加 () 去调用，直接把它 当作 普通 属性去使用就好了；
    // 注意2： 只要 计算属性，这个 function 内部，所用到的 任何 data 中的数据发送了变化，就会 立即重新计算 这个 计算属性的值
    // 注意3： 计算属性的求值结果，会被缓存起来，方便下次直接使用； 如果 计算属性方法中，所以来的任何数据，都没有发生过变化，则，不会重新对 计算属性求值；
    'fullname': function () {
        console.log('ok')
        return this.firstname + '-' + this.middlename + '-' + this.lastname
    }
}
```
