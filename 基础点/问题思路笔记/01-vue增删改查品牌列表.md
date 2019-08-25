## 增删改查的品牌列表
>
### 01-增加一条数据
>
* 需求: id/name和创建的时间点击添加到表格 ==> id和name不能为空 ==>id名不能重复
>
1. 设置input输入框 ==> v-model="id/name" ==>添加按钮增加点击事件addData
```html
    name: <input type="text" v-model.lazy="/idname"><button @click="addData()">添加</button>
```
>
2. new出来的vue实例对象data里,定义id/name为空 ==> 初始化表格list 
```javascript
     var vm = new Vue({
            el: "#app",
            data() {
                return {
                    id: "",
                    name: "",
                    list: [
                        {
                            id: 1,
                            name: "王希龙",
                            ctime: new Date().toLocaleString(),
                            
                        },
                    ]
                }
```
>
3. methods事件里,控制addData事件 ==>id/name不能为空 ==> id不能相同 ==>push到数组里
```javascript
 methods: {
                addData(){
                    //判断id 是否相同
                    let isId = this.list.some((item,index) => item.id == this.id);
                    //判断id 和 name 不能为空
                    if(this.id === '' || this.name === ''){
                        alert("填写内容不能为空")
                        return
                    }else if(isId){
                            alert("id不能相同")
                            return
                        }
                    //声明arr接收添加的数据
                    let arr = {
                        id: this.id,
                        name: this.name,
                        ctime: new Date().toLocaleString()
                    }
                    //将arr后插入原数组list里 ==> 添加后input表单清空
                    this.list.push(arr);
                    this.id = "",
                    this.name = ""
                },
            }
```
>
4. tr中使用 v-for循环 将每条数据添加到对应的td中 
```html
    <tr v-for="(item,index) in list" >
        <td >{{item.id}}</td>
        <td >{{item.name}}</td>
        <td >{{item.ctime}}</td>
        <td><button @click="del(index)">删除</button></td>
    </tr>
```
* 总结: 分析：
    1. 获取到 id 和 name ,直接从 data 上面获取 
    2. 组织出一个对象
    3. 把这个对象，调用 数组的 相关方法，添加到 当前 data 上的 list 中
    4. 注意：在Vue中，已经实现了数据的双向绑定，每当我们修改了 data 中的数据，Vue会默认监听到数据的改动，自动把最新的数据，应用到页面上；

    5. 当我们意识到上面的第四步的时候，就证明大家已经入门Vue了，我们更多的是在进行 VM中 Model 数据的操作，同时，在操作Model数据的时候，指定的业务逻辑操作；
>
### 02-往数组添加一调数据
>
* 往已有数据库前面或后面添加一条数据
>
1. ```html
    <div id="app">

        <div>
        <label>Id:
            <input type="text" v-model="id">
        </label>

        <label>Name:
            <input type="text" v-model="name">
        </label>

        <input type="button" value="添加" @click="add">
        </div>

        <!-- 注意： v-for 循环的时候，key 属性只能使用 number获取string -->
        <!-- 注意： key 在使用的时候，必须使用 v-bind 属性绑定的形式，指定 key 的值 -->
        <!-- 在组件中，使用v-for循环的时候，或者在一些特殊情况中，如果 v-for 有问题，必须 在使用 v-for 的同时，指定 唯一的 字符串/数字 类型 :key 值 -->
        <p v-for="item in list" :key="item.id">
        <input type="checkbox">{{item.id}} --- {{item.name}}
        </p>
    </div>
    ```
>
2. ```javascript
    var vm = new Vue({
      el: '#app',
      data: {
        id: '',
        name: '',
        list: [
          { id: 1, name: '李斯' },
          { id: 2, name: '嬴政' },
          { id: 3, name: '赵高' },
          { id: 4, name: '韩非' },
          { id: 5, name: '荀子' }
        ]
      },
      methods: {
        add() { // 添加方法
        //添加在数据前面
          this.list.unshift({ id: this.id, name: this.name })
          //添加数据后面
          this.list.push({id: this.id, name: this.name})
        }
      }
    });
    ```
>
>
### 03-删除一条数据
>
* 需求: 添加删除按钮删除一条数据 ==> 通过查找下标/通过id删除
>
1. 给删除按钮添加点击事件
```html
    <td><button @click="del(index)">删除</button></td>
```
>
2. methods事件中删除数据
```javascript
    // 删除方法一
    del(index){
        this.list.splice(index,1)
    },
    // 删除方法二
    // 分析:
        //1. 如何根据Id,找到要删除这一项的索引
        //2. 如果找到了,直接调用数组的 splice方法删除
    /*del(id){
        this.list.some((item, index) =>{
            this.list.splice(index,1)
            //在数组的 some 方法中,如果return true, 就会立即终止这个数组的后续循环
            return true; 
        })
    //删除方法三
    @click="del(item.id)"
    /*del(val){
        var index = this.list.findIndex(item =>{
            if(item.id == val){
                return true;
            }
        })
        简写: var index= this.list.findIndex(item => item.id = val)
        this.list.splice(index,1)
    }
    */
   //删除方法四
   /* this.list.some((item, i) => {
        if (item.id == id) {
            this.list.splice(i, 1)
            // 在 数组的 some 方法中，如果 return true，就会立即终止这个数组的后续循环
            return true;
            }
    }) */
    }
```
>
>
### 04-修改一条数据
>
* 需求: 点击name出现修改框 ==> 修改完成
>
* 一. 输入框集体显现
    1. 设置两个name的td ==> v-if判断何时渲染 ==> v-model绑定name ==> @blur获得焦点
    ```html
        <td v-if="isModify"><input type="text" v-model="item.name" @blur="focus"></td>
        <td v-else @click="modify()">{{item.name}}</td>
    ```
    >
    2. vue实例出来的对象data里,定义isModify为false
    >
    3. methods事件里  v-model绑定的输入框为false  点击name时isModify为true
    ```javascript
        modify(){
            this.isModify = true
        },
        focus(){
            this.isModify = false
        }
    ```
>
* 二. 输入框单个获得焦点
    1. 点击显示修改输入框,原来的隐藏,输入框获得焦点;
    ```html
        <td>
            <div v-if="!item.isShow" @click=" ($event,item.id)">{{ item.name }}</div>
            <input @blur="item.isShow = !item.isShow" v-else type="text" v-model="item.name">
        </td>
    ```
    2. 获得显示和隐藏的两个节点,因为v-if需要时间才能隐藏,所以设定时器让ele[0]可以查找到元素
    ```javascript
        showInput(e,val){
            var ele = e.target.parentNode.childNodes;
            var ite = this.list.find(ele => ele.id == val);
            ite.isShow = !ite.isShow;
            setTimeout(()=>{
                ele[0].focus(); //当元素获得焦点时，发生 focus 事件。
                console.log(ele[0])
            })
        }
    ```
>
>
### 05-搜索数据
>
* 需求: 输入数据显示对应的数据 ==> 清除恢复原来的数据
>
* 一.简单页面搜索
    1. 搜索输入框 v-model绑定 
    ```html
        <input type="text" placeholder="搜索" v-model="search">
    ```
    >
    2. vue里new出来的实例对象里,声明search为空
    >
    3. tr里设置 v-if 查找id name ==>清空恢复原来数据
    ```html
        <tr v-for="(item,index) in list" v-if="search == item.id || search == '' || search == item.name">
    ```
>
* 二.名字搜索
    1. 搜索输入框页面绑定
    ```html
        <input type="text" class="form-control" v-model="keywords">
    ```
    2. v-for循环中
    ```html
    <!-- 之前,v-for中的数据,都是直接从data上的list中直接渲染过来的 -->
    <!-- 现在,我们定义了一个 search(keywords) 方法,同时,把所有的关键字,通过传参的形式,传递给了 search方法 -->
    <!-- 在search方法内部,通过执行for 循环,把所有符合搜索关键字的数据,保存在一个新数组里,返回 -->
         <tr v-for="item in search(keywords)" :key="item.id">
    ```
    3. search方法
    ```javascript
      data(){
        return{
          keywords:''
        }
      }
        //方法一
        search(keywords) {
             return this.list.filter(item => {
                 if (item.name.includes(keywords)) {
              return item
            }
          })
        }
        //方法二
        search(keywords) {
              var newList = []
          this.list.forEach(item => {
            if (item.name.indexOf(keywords) != -1) {
            //indexOf() ==-1 与 includes == false一样
              newList.push(item)
            }
          })
          return newList 
        }
        //注意 ： ES6中，为字符串提供了一个新方法，叫做  String.prototype.includes('要包含的字符串')
        //  如果包含，则返回 true ，否则返回 false
        // $.contains() 方法用于判断指定元素内是否包含另一个元素。即判断另一个DOM元素是否是指定DOM元素的后代
        //方法三
        //页面设置v-for="item in lists"
        /*computed: {
            lists(){
                var list1 = this.list.filter(ele => ele.name.includes(this.search) )
                return list1;
            }
        },*/

        //方法三
        1. v-model="id"
        <button @click="get"><button/>
        get(){
            this.$ajax.get(`/pai/user/dateail?id=${this.id}`)
        }

    ```
>
>
## 数据库添加和删除
>
### 01-添加和删除
>
```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <script src="./lib/vue-2.4.0.js"></script>
  <script src="./lib/vue-resource-1.3.4.js"></script>
  <link rel="stylesheet" href="./lib/bootstrap-3.3.7.css">
</head>

<body>
  <div id="app">
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">添加品牌</h3>
      </div>
      <div class="panel-body form-inline">

        <label>
          Name:
          <input type="text" v-model="name" class="form-control">
        </label>

        <input type="button" value="添加" @click="add" class="btn btn-primary">
      </div>
    </div>

    <table class="table table-bordered table-hover table-striped">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Ctime</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{item.name}}</td>
          <td>{{item.ctime}}</td>
          <td>
            <a href="" @click.prevent="del(item.id)">删除</a>
          </td>
        </tr>
      </tbody>
    </table>

  </div>
</body>

</html>  
```
```javascript
  <script>
    // 如果我们通过全局配置了，请求的数据接口 根域名，则 ，在每次单独发起 http 请求的时候，请求的 url 路径，应该以相对路径开头，前面不能带 /  ，否则 不会启用根路径做拼接；
    Vue.http.options.root = 'http://vue.studyit.io/';
    // 全局启用 emulateJSON 选项
    Vue.http.options.emulateJSON = true;

    // 创建 Vue 实例，得到 ViewModel
    var vm = new Vue({
      el: '#app',
      data: {
        name: '',
        list: [ // 存放所有品牌列表的数组
        ]
      },
      created() { // 当 vm 实例 的 data 和 methods 初始化完毕后，vm实例会自动执行created 这个生命周期函数
        this.getAllList()
      },
      methods: {
        getAllList() { // 获取所有的品牌列表 
          // 分析：
          // 1. 由于已经导入了 Vue-resource这个包，所以 ，可以直接通过  this.$http 来发起数据请求
          // 2. 根据接口API文档，知道，获取列表的时候，应该发起一个 get 请求
          // 3. this.$http.get('url').then(function(result){})
          // 4. 当通过 then 指定回调函数之后，在回调函数中，可以拿到数据服务器返回的 result
          // 5. 先判断 result.status 是否等于0，如果等于0，就成功了，可以 把 result.message 赋值给 this.list ; 如果不等于0，可以弹框提醒，获取数据失败！

          this.$http.get('api/getprodlist').then(result => {
            // 注意： 通过 $http 获取到的数据，都在 result.body 中放着
            var result = result.body
            if (result.status === 0) {
              // 成功了
              this.list = result.message
            } else {
              // 失败了
              alert('获取数据失败！')
            }
          })
        },
        add() {  // 添加品牌列表到后台服务器
          // 分析：
          // 1. 听过查看 数据API接口，发现，要发送一个 Post 请求，  this.$http.post
          // 2. this.$http.post() 中接收三个参数：
          //   2.1 第一个参数： 要请求的URL地址
          //   2.2 第二个参数： 要提交给服务器的数据 ，要以对象形式提交给服务器 { name: this.name }
          //   3.3 第三个参数： 是一个配置对象，要以哪种表单数据类型提交过去， { emulateJSON: true }, 以普通表单格式，将数据提交给服务器 application/x-www-form-urlencoded
          // 3. 在 post 方法中，使用 .then 来设置成功的回调函数，如果想要拿到成功的结果，需要 result.body

          /* this.$http.post('api/addproduct', { name: this.name }, { emulateJSON: true }).then(result => {
            if (result.body.status === 0) {
              // 成功了！
              // 添加完成后，只需要手动，再调用一下 getAllList 就能刷新品牌列表了
              this.getAllList()
              // 清空 name 
              this.name = ''
            } else {
              // 失败了
              alert('添加失败！')
            }
          }) */

          this.$http.post('api/addproduct', { name: this.name }).then(result => {
            if (result.body.status === 0) {
              // 成功了！
              // 添加完成后，只需要手动，再调用一下 getAllList 就能刷新品牌列表了
              this.getAllList()
              // 清空 name 
              this.name = ''
            } else {
              // 失败了
              alert('添加失败！')
            }
          })
        },
        del(id) { // 删除品牌
          this.$http.get('api/delproduct/' + id).then(result => {
            if (result.body.status === 0) {
              // 删除成功
              this.getAllList()
            } else {
              alert('删除失败！')
            }
          })
        }
      }
    });
  </script>
```
  >
### 02-数据库增删改查
```html
<template>
    <div class="operation">
        <!--header -- 头部信息 -->
        <div class="header">
            <label>
                请输入用户id:
                <input type="text" placeholder="请输入id查询" v-model.lazy="keywords">
            </label>
            <input class="btn" type="button" value="查询" @click='search'>
            <input class="btn" type="button" value="添加用户" @click="isaddmask">
        </div>
        <div class="mask" v-show=ismask>
            <div class="mask-c">
                <label>
                    请输入地址:
                    <input type="text" v-model.lazy="address">
                </label>
                <label>
                    请输入学校:
                    <input type="text" v-model.lazy='school'>
                </label>
                <label>
                    请输入性别:
                    <input type="radio" id="0" value="0" v-model.lazy="sex">
                    <label>男</label>
                    <input type="radio" id="1" value="1" v-model.lazy="sex">
                    <label>女</label>
                </label>
                <label>
                    请输入名字:
                    <input type="text" v-model.lazy="name">
                </label>
                <label>
                    请输入电话号码:
                    <input type="text" v-model.lazy="tel">
                </label>
                <label>
                    请输入年龄:
                    <input type="text" v-model.lazy="age">
                </label><br>
                <button class="btns" @click="add" v-if="isadd">添加</button>
                <div v-else>
                    <button @click='modify'>修改</button>
                    <button @click="del">删除</button>
                </div>
            </div>


        </div>
        <!-- main -- 内容table部分 -->
        <table class="main">
            <tr>
                <th>ID</th>
                <th>地址</th>
                <th>添加时间</th>
                <th>学校</th>
                <th>性别</th>
                <th>名称</th>
                <th>电话号码</th>
                <th>年龄</th>
            </tr>

            <tr v-for="item in search(keywords)" :key="item.id" @click="change(item.id)">
                <td>{{ item.id }}</td>
                <td>{{ item.address }}</td>
                <td>{{ item.addTime }}</td>
                <td>{{ item.school }}</td>
                <td>{{ item.sex }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.tel }}</td>
                <td>{{ item.age }}</td>
            </tr>
        </table>

        <!-- footer -- 底部分页部分 -->
        <div class=" footer">
            <span>总数: {{ totalRow }} 条</span>
            <span>
                <select v-model="limit">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                </select>
                <!-- <span>Selected: {{ limit }}</span> -->
            </span>
            <div>
                <button class="flip" v-for="(item,index) in totalPage" :key="index" @click="flip(index+1)">{{ index+1 }}</button>
            </div>
        </div>

    </div>
</template>
```
```js
<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                list: [],
                keywords: '',
                ismask: false,
                isadd: false,
                id: '',
                address: "",
                addtime: '',
                school: "",
                sex: "",
                name: "",
                tel: "",
                age: "",
                selected: "",
                totalRow: "",
                start: 1,
                limit: 5,
                lists: [],
                totalPage:[],
            }
        },
        watch:{
            limit: function(){
                this.getlist(this.start, this.limit)
            }
        },
        methods: {
            //获取用户列表 get
            getlist(start,limit) {
                this.$ajax.get(`/api/ajax/user/list`,{
                    params:{
                        start: start,//变量
                        limit: this.limit,
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


            
            
            //显示添加弹窗
            isaddmask() {
                this.isadd = this.ismask = true;
            },

            //查询id
            search(keywords) {
                return this.list.filter(item => {
                    if (item.id.includes(keywords)) {
                        return item
                    }
                })
            },

            //add 添加用户 post
            add() {
                var params = {
                    id: this.id,
                    name: this.name,
                    age: this.age,
                    sex: this.sex,
                    tel: this.tel,
                    address: this.address,
                    school: this.school
                }
                //请求添加用户
                this.$ajax.post('/api/ajax/user/save', params)
                var obj = {
                    id: this.id,
                    name: this.name,
                    age: this.age,
                    sex: this.sex,
                    tel: this.tel,
                    address: this.address,
                    school: this.school
                }
                //本地添加用户 
                this.list.push(obj)
                //清空
                this.id = this.name = this.age = this.sex = this.tel = this.address = this.school = '';
                // 隐藏弹窗
                this.ismask = false;
            },

            //change 显示修改
            change(val) {
                // 添加隐藏
                this.isadd = false;
                // 弹窗
                this.ismask = true;
                var item = this.list.find(item => item.id == val)
                this.id = item.id
                this.address = item.address
                this.school = item.school
                this.sex = item.sex
                this.name = item.name
                this.tel = item.tel
                this.age = item.age
            },

            //修改modify
            modify() {
                console.log(5212121)
                var params = {
                    id: this.id,
                    name: this.name,
                    age: this.age,
                    sex: this.sex,
                    tel: this.tel,
                    address: this.address,
                    school: this.school
                }
                this.$ajax.post('/api/ajax/user/update', params)
                this.id = this.name = this.age = this.sex = this.tel = this.address = this.school = '';
                this.ismask = false;
            },

            //del 删除
            del() {
                var index = this.list.findIndex(item => item.id == this.id)
                console.log(index)
                this.list.splice(index, 1)
                this.ismask = false;
            },

            //翻页 flip
            flip(val){
                this.getlist(val, this.limit)
            }
                
        },
        created() {
            //调用获取列表
            this.getlist(this.start,this.limit);
        },

        updated() {

        }

    }
</script>
```
```css
<style lang="scss" scoped>
    .operation {

        /* header头部 */
        .header {
            .btn {
                margin-left: 30px;
                margin-bottom: 50px;
            }
        }

        /* main部分 */
        table {
            /* margin-top: 100px; */
            border-collapse: collapse;
            margin: 0 auto;
            text-align: center;
            margin-bottom: 50px;
        }

        table th,
        table td {
            border: 1px solid #cad9ea;
            color: #666;
            height: 30px;
        }

        table th {
            background-color: #CCE8EB;
            width: 200px;
        }

        table th:nth-child(2n) {
            width: 150px;
        }

        table th:nth-child(1) {
            width: 400px;
        }

        table th:nth-child(4) {
            width: 250px;
        }

        table th:nth-child(5) {
            width: 150px;
        }

        .mask {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .3);
            color: #fff;
        }

        .mask-c {
            margin: 100px auto;
            width: 300px;
            height: 500px;
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;
            flex-wrap: wrap;
        }

        label {
            margin-bottom: 20px;
        }

        .btns {
            /* background:none; */
        }

        .footer {
            width: 300px;
            height: 50px;
            margin: 20px auto;
        }
    }
</style>
```
>
