## vue路由
### 路由简介
+ 传统的路由指的是：当用户访问一个url时，对应的服务器会接收这个请求，然后解析url中的路径，从而执行对应的处理逻辑。这样就完成了一次路由分发。
+ 而前端路由是不涉及服务器的，是前端利用hash或者HTML5的history API来模拟实现的，一般用于不同内容的展示和切换。
+ 目前Vue 推荐单页面应用 SPA 开发模式，大型单页应用最显著特点之一就是采用前端路由系统，通过改变URL，在不重新请求页面的情况下，更新页面视图。Vue中的路由解决方案为vue-router。

> Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。我们用vue-cli开发的项目就是单页面应用。
> vue路由能实现哪些功能
+ 嵌套的路由/视图表
+ 模块化的、基于组件的路由配置
+ 路由参数、查询、通配符
+ 基于 Vue.js 过渡系统的视图过渡效果
+ 细粒度的导航控制
+ 带有自动激活的 CSS class 的链接
+ HTML5 历史模式或 hash 模式，在 IE9 中自动降级
+ 自定义的滚动条行为
### 路由安装 (我们在vue-cli创建项目的时候就默认安装路由)

### npm安装vue路由
> 这一步是安装路由 保存到我们package.json 里面的dependencies里面
```
npm install vue-router --save
```
### 路由起步

> 配置路由文件
1. 在main.js的同级目录新建一个router的文件夹(这个文件夹存放的是我们路由的配置文件)
2. 在这个文件夹下创建index.js 里面写上
```
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 上面三个是引入vue-router(你安装路由之后不引入相当于做无用功)
export default new Router({  // 把我们的路由配置文件暴露出去
  mode: 'history', 
  // vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。如果不想/// 要很丑的 hash，我们可以用路由的 history 模式
  routes: [  // 这个存放的是我们路由的配置文件
    
  ]
})

```
3. 在view目录下新建两个文件夹 一个是index 一个是mine 这个文件夹代表两个页面(这个一个规范)  一个是index页面 一个是mine页面 分别在mine和index下面新建index.vue (创建我们的组件) 里面分别写上内容 '首页' 'mine页'
![项目结构]("https://raw.githubusercontent.com/208895638/teachVue/master/%E6%88%AA%E5%9B%BE/vue%E7%9B%AE%E5%BD%95%E6%88%AA%E5%9B%BE.jpg" "项目结构")
4. 在我们的router文件夹下的index.js里面引入我们的组件
```
import index from "@/views/index/index" // 引入index组件
import mine from "@/views/mine/index" // 引入mine组件
```
5. 配置路由

```
export default new Router({
  mode: 'history',  // 启用history路由
  routes: [ // 这里面是路由的配置项
    {
      path: '/',  // 这个是我们访问浏览器的地址
      name: 'index',  // 这个是我们给路由起的名称
      component: index  // 这个是 地址对应的组件
    },
    {
      path: '/mine', // 这个是我们访问浏览器的地址
      name: 'mine',  // 这个是我们给路由起的名称
      component: mine  // 这个是 地址对应的组件
    }
  ]
})
```
6. 上一步就代表路由配置完成 我们需要把我们的路由配置挂载到我们的vue实例上 在main.js里面操作
```
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'  // 引入我们刚刚配置的路由文件
Vue.config.productionTip = false
new Vue({
  router, // 把路由挂载到vue实例上
  render: h => h(App)
}).$mount('#app')
```
7. 最后一步 在我们的app.vue里面加一个组件router-view
```
<router-link to="/">跳转到首页</router-link>
<router-link :to="{path:'/'}">跳转到首页</router-link>
    <router-link to="/mine">跳转到mine页</router-link>

    <router-view></router-view>
```
router-view这个组件是一个容器 我们页面的路由所对应的组件都渲染在这个容器里面
router-link是在vue里面做跳转链接用的 vue会把router-link渲染成a标签
8. 好了 一个最基本的路由完成 
### 自动激活的 CSS class 的链接 当router-link 里面的to地址与地址栏中的路由匹配一样时就自动激活router-link-active
如
当前路由为 /home 而<router-link to="/home" exact></router-link> router-link-active这个class名称就会自动被激活
> 自定义激活class名称  linkActiveClass
```
export default new Router({
  mode: 'history',  // 启用history路由
  linkActiveClass:"r-active",  // 这个就是设置激活是的class名称
  routes: [ // 这里面是路由的配置项
    {
      path: '/',  // 这个是我们访问浏览器的地址
      name: 'index',  // 这个是我们给路由起的名称
      component: index  // 这个是 地址对应的组件
    },
  ]
})
```

### 动态路由
> 简介 我们经常需要把某种模式匹配到的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 各不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用“动态路径参数”(dynamic segment) 来达到这个效果：
+ 配置动态路由
```
{
    path : "/mine/:id", // 动态路由
    name : "mine" ,
    component: mine
}


```
使用的时候 会自动匹配1，2，3，4 到mine组件
```
<router-link to="/mine/1">跳转到mine页</router-link>
<router-link to="/mine/2">跳转到mine页</router-link>
<router-link to="/mine/3">跳转到mine页</router-link>
<router-link to="/mine/4">跳转到mine页</router-link>
<router-link :to="{name:'mine',params:{id:1}}">跳转到mine页</router-link>
这里需要注意的一点就是 当路由是动态路由的时候我们得用命名路由的方式跳转
```
### 嵌套路由 
> 简介 实际生活中的应用界面，通常由多层嵌套的组件组合而成。同样地，URL 中各段动态路径也按某种结构对应嵌套的各层组件，例如：
```
/user/profile                     /user/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+
```
> 嵌套路由的写法
```
const router = new VueRouter({
  routes: [
    { path: '/user', component: User,redirect:"/user/profile"
      children: [
        {
          // 当 /user/profile 匹配成功，
          // UserProfile 会被渲染在 User 的 <router-view> 中
          path: 'profile',
          component: UserProfile
        },
        {
          // 当 /user/posts 匹配成功
          // UserPosts 会被渲染在 User 的 <router-view> 中
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```
### 编程式的导航 除了使用 <router-link> 创建 a 标签来定义导航链接 我们还可以用js的方法跳转页面
```
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' }})

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```

```
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1)

// 后退一步记录，等同于 history.back()
router.go(-1)

// 前进 3 步记录
router.go(3)

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100)
router.go(100)
```
### 命名路由
> 简介
有时候，通过一个名称来标识一个路由显得更方便一些，特别是在链接一个路由，或者是执行一些跳转的时候。可以在创建 Router 实例的时候，在 routes 配置中给某个路由设置名称。
```
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})
要链接到一个命名路由，可以给 router-link 的 to 属性传一个对象：
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>
router.push({ name: 'user', params: { userId: 123 }})
```
### 重定向
> 重定向  把地址重定向到某个路由 重定向”的意思是，当用户访问 /a时，URL 将会被替换成 /b，然后匹配路由为 /b
```
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```
### html5 History模式
> 简介vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。

如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。
当使用 history 模式时，URL 就像正常的 url，例如 http://yoursite.com/user/id，也好看！
不过这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问 http://oursite.com/user/id 就会返回 404。
> 解决方法
在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。

# vue-router路由高级
## 导航守卫
vue-router官方解释 导航”表示路由正在发生改变。 vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航。
理解: 导航守卫可以看做是 vue-router 的生命周期钩子 假设用户要查看个人信息(用户直接输入url进入个人信息页面) 如果没登陆是不是不让获取用户信息 但是用户已经进入了个人信息页面 这个导航守卫呢 就是帮助开发者处理这种事件
### 全局守卫(只要加了全局守卫，每次路由的跳转都要经过全局守卫，一般是用的都是前置守卫)
> 全局前置守卫  
```
router.beforeEach((to, from, next) => { 
    // 里面三个参数  to代表我们将要跳转的路径
    // from 代表从那个路径跳转过来 就是上一个路径
    // next代表 守卫可以通过next控制下一步的跳转 如果写了前置守卫 一定要添加next()到下一步 
    // 因为路由还没有跳转 next可以是路由跳转
    // 需要注意的是 如果当跳转的地址带参数的时候(动态路由) 跳转的时候就会忽略后面传递的参数 
    // 如 next({path:"/user",params:{id:1}})
    // 解决方法 换一种写法
    // next("/user/1") 或用命名路由的方式跳转next({name:"user",params:{id:1}})
  // ...
})
```
> 全局前置守卫应用场景(进入页面登录判断、管理员权限判断、浏览器判断等)

> 全局后置守卫(没啥用)
```
router.afterEach((to, from) => {   
  
})
```
### 路由守卫  运行在路由上的守卫  (相比上面的全局守卫 全局守卫是只要有跳转就会执行守卫函数 而路由守卫呢 是只有跳转到当前的守卫时才执行路由守卫函数) 用处做跳转判断
```
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
### 组件内的守卫 (也可以理解为这个组件的生命周期 与全局守卫使用方法一致)
> beforeRouteEnter 这个守卫不做什么操作 在这一步的时候this都还没有绑定到vue实例类上(组件实例还没有被创建) 也就是说在这一步我们还不能用this
> beforeRouteUpdate  (在组件复用的时候调用 用于解决组件复用问题)
> beforeRouteLeave (导航离开该组件的对应路由时调用 这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过 next(false) 来取消。 还可以用来清除定时器)
```
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
```
beforeRouteLeave (to, from , next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```
### 路由元信息 在路由列表中，每个路由都有一个 meta 元数据字段， 我们可以在这里设置一些自定义信息，供页面组件或者路由钩子函数中使用。（如设置网页标题,设置某个页面是否需要登陆才能进入）
```
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
router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
  next();
})
```
### 过渡动效 通过transition组件实现路由切换效果
```
<transition :name="names">
      <router-view></router-view>
    </transition>
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
### 滚动行为 （使用前端路由，当切换到新路由时，想要页面滚到顶部，或者是保持原先的滚动位置，这个时候就可以使用router的滚动行为）
> 理解 vue在页面切换的时候 比如a页面跳转到b页面的时候 滚动条的位置是保持不变的 跟传统路由切换页面相差很大 
如果要实现和前端路由一样的效果 这个时候就可以使用router提供的滚动行为 这个更好[vue-router官方issues](https://github.com/vuejs/vue-router/issues/2533 "官方issues") (浏览器后退时返回到顶部)
```
scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve({ x: 0, y: 0 })
        })
    })
    }
```
### 路由懒加载 像vue这种单页面应用，如果没有应用懒加载，运用webpack打包后的文件将会异常的大，造成进入首页时，需要加载的内容过多，时间过长，会出啊先长时间的白屏，即使做了loading也是不利于用户体验，而运用懒加载则可以将页面进行划分，需要的时候加载页面，可以有效的分担首页所承担的加载压力，减少首页加载用时。简单的说就是：进入首页不用一次加载过多资源造成用时过长！！！
```
component:() => import( '@/view/mine/mine.vue')
```