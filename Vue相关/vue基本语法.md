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