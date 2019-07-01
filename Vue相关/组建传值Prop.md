# Prop

1. prop的大小写：   
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