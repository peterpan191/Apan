## vue进阶
### vuex初始  
> vuex定义    
vuex是一个状态管理的插件，可以解决不同组件之间的数据共享和数据持久化。通俗点的说法就是全局的数据仓库，在组件里面的data是组件里的数据仓库也就是局部的数据仓库，全局数据仓库里面的数据可以在任意组件中共享。
vuex是一个专门为vue.js设计的集中式状态管理架构。状态？我把它理解为在data中的属性需要共享给其他vue组件使用的部分，就叫做状态。简单的说就是data中需要共用的属性。

## Vuex 的基本结构 
Vuex 是一个个专为 vue.js 应用程序开发的状态管理模式。它采用集中式存储来管理应用
所有组件的状态，并以相应的规则来保证状态以一种可预测的方式发生变化。 Vuex 集成
到了 Vue 官方调试工具 devtools extension 
> 安装vue devtools 
1. 直接谷歌商店安装
2. 
```
git clone git@github.com:vuejs/vue-devtools.git

```
[参考](https://segmentfault.com/a/1190000009682735 "参考网址")
### 安装vuex
1. `cnpm install vuex --save `
2. 在main.js的同级目录新建store文件夹 里面新建一个index.js 
3. 在index.js 里面引入 vuex
```
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
```
4. 向外暴露vuex实例 
```
export default new Vuex.Store({
  state:{},
  mutations:{},
  getters:{},
  actions:{},
  modules:{},
})
```
+ state 一－ vuex store 实例的根状态对象，用于定义共享的状态变量，就像 Vue 实例中data
+ mutations 一 可以理解为 store的methods(同步操作 )
+ getters 一 读取器，外部程序通过它获取变量的具体值，或者在取值前做一些计算（可以认为是 store 的计算属性）
+ mutations  以理解为 store的methods(异步操作 如ajax)
+ modules 以模块化的方式写vuex (如购物车对应一个module 个人中心对应一个module )

5. 挂载倒vue实例类上
```
import store from './store/store'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
```
## 开始  
###  获取state里面的值
1. 在state里面放入数据
```
export default new Vuex.Store({
  state: {     <--
    num:1
  },
  mutations: {
    
  },
  actions: {

  }
})
``` 
2. 在某个组件获取这个数据 用computed来接收这个数据
```
computed: { 
    list(){
        return this.$store.state.num
    }
}
```
### 更改state里面的值 mutations(同步提交)
 更改state里面的值 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
 "同步模式"就是上一段的模式，后一个任务等待前一个任务结束，然后再执行。

在mutation里面写入更改的函数 函数的第一个参数代表 state 更改vuex中的state是通过更改这个参数实现的 
[Mutation 必须是同步函数](https://vuex.vuejs.org/zh/guide/mutations.html#mutation-%E5%BF%85%E9%A1%BB%E6%98%AF%E5%90%8C%E6%AD%A5%E5%87%BD%E6%95%B0 "Mutation 必须是同步函数")
为什么必须是同步函数呢 因为在devtools日志里面监测不到数据的变化
```
export default new Vuex.Store({
  state: {
    num:1
  },
  mutations: {
    updateNum(state){
      state.num ++   // this.$store.commit("updateNum")
    }
  },
  actions: {

  }
})
```
> 提交载荷（Payload） 其实就是提交的时候附带参数

```
export default new Vuex.Store({
  state: {
    num:1
  },
  mutations: {
    updateNum(state,val){
      state.num += val;  // this.$store.commit("updateNum",2)
    }
  },
  actions: {

  }
})
```
提交多个载荷 vuex不支持提交多个载荷 提交多个载荷需换种写法
```
export default new Vuex.Store({
  state: {
    num:1
  },
  mutations: {
    updateNum(state,val){
      state.num += val.val;  // this.$store.commit("updateNum",{val:1,val1:2})
    }
  },
  actions: {

  }
})
```

### action(异步更改state)
Action 类似于 mutation，不同在于：

+ Action 提交的是 mutation，而不是直接变更状态。  // action 里面提交数据是提交mutation 在mutation里面是直接修改state
+ Action 可以包含任意异步操作。

```
export default new Vuex.Store({
  state: {
    num:1
  },
  mutations: {
    updateNum(state,val){
        state.num += val; 
      
      
    }
  },
  actions: {
    syncUpdate(context ,val){
      setTimeout(function(){
        context.commit("updateNum",val)  // this.$store.dispatch('syncUpdate',5) 分发 Action
      },400)
      
    },
    syncUpdate({commit} ,val){  // 解构写法
      console.log(context)
      setTimeout(function(){
        commit("updateNum",val)  
      },400)
      
    },
  }
})
```
### getters (相当于计算属性)
```
export default new Vuex.Store({
  state: {
    num:1
  },
  getters:{
    nums(state){
      return state.num + "元"  // this.$store.getters.nums
    }
  },
  mutations: {
    updateNum(state,val){
        state.num += val; 
      
      
    }
  },
  actions: {
    syncUpdate(context ,val){
      console.log(context)
      setTimeout(function(){
        context.commit("updateNum",val)  
      },400)
      
    },
    syncUpdate({commit} ,val){
      console.log(context)
      setTimeout(function(){
        commit("updateNum",val)  
      },400)
      
    },
  }
})

```

#  vuex辅助函数 帮助我们节省代码的语法糖

1. mapState  --  当一个组件需要获取多个状态时候，将这些状态都声明为计算属性会有些重复和冗余。为了解决这个问题，我们可以使用 mapState 辅助函数帮助我们生成计算属性，让你少按几次键。(其实就是我们在vuex里面定义的变量  接收的时候还要再定义变量去接收 很麻烦 vuex辅助函数呢 可以帮我们解决这种麻烦)
2. mapGetters -- 将store中的多个getter映射到局部组件的计算属性中
3. mapMutations 将组件中的 methods 映射为 store.commit 调用。
4. mapActions 将组件的 methods 映射为 store.dispatch 调用


###  mapState 的三种种写法
```
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      username:"用户名"
    }
  },
  computed: {
    ...mapState({+++++++++++++++++++++++++++++++++++
      age:state => state.age,  // 第一种  箭头函数 
      num:"num",  // 传字符串参数 'num'  等同于 `state => state.num`
      name (state) {  // 第三种呢 等同于第一种  只不过第三种可以使用this 方便vuex里面的数据结合本地的数据
        return this.username + state.name ;
      }
    })
  }
}
```
### mapGetters  getters的辅助函数
```
import HelloWorld from '@/components/HelloWorld.vue'
import { mapState , mapGetters , mapMutations , mapActions } from "vuex"
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data () {
    return {
      username:"用户名"
    }
  },
  computed: {
    ...mapState({
      num:"num",
      age:state => state.age,
      name (state) {
        return this.username + state.name ;
      }
    }),
    ...mapGetters({
      price:"price"
    })
  }
}
```
### mapMutations mutations的辅助函数的两种写法
```
methods: {
    ...mapMutations([     // 第一种
      "add",  // 调用的时候执行this.add()  映射为 `this.$store.commit('add')`
      "adds"  // 如果需要提交载荷  直接调用 this.adds(num ) 映射为 `this.$store.commit('adds', num)`
    ]),
    ...mapMutations({
      add: 'add' // 将 `this.add()` 映射为 `this.$store.commit('add')` 
    })
  }
```
### mapActions  actions的辅助函数
```
 methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`

      // `mapActions` 也支持载荷：
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
    })
  }
```

## Module  vuex模块化 

### vuex官方解释 由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割：

### 通俗点的说法就是 当我们写大型的项目的时候  我们所有的需要共享的信息或状态都写在同一个state里面  导致state或其他的操作比较臃肿 那么 为了解决这个问题 vuex提出了模块化  module

下面呢 是我们模块化的写法 在main.js的同级新建一个store文件夹 在这个store文件夹新建一个index.js 里面写上一下内容 

```

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
在index.js的同级新建一个modules的文件夹 这个文件夹分别有两个js 分别为 moduleA 和 moduleB 内容分别为以下内容 再在main.js里面引入index.js 这个模块化的写法就已经完成 
```

const moduleA = {   // moduleA
    state: { num:1 },
    mutations: {  
        addNum(state){
            state.num += 2  // 调用的时候执行 this.$store.commit('addNum')
        }
    },
    actions: { 
        syncAddNum(context,val){
            context.commit("addNum",val) // 调用的时候执行 this.$store.dispatch('syncAddNum')
        }
    },
    getters: { 
        addNums(state){
            return state.num + "元 "  // 调用的时候执行 this.$store.getters.addNums
        }
    }
}
export default moduleA

const moduleB = {
    state: { num:2 },
    mutations: { 
        addNum(state){
            state.num += 3
        }
     },
    actions: {  },
    
  }
export default moduleB
```

### 模块化注意点  
1. 对于上面的模块化的写法  只有state是模块化的 其他的诸如 getters mutations actions不是模块化 
2. 如果想实现getters mutations actions实现模块化 那么 得在每个模块的js里面加入 ***命名空间 ***
`namespaced: true,` 
3. 启用命名空间之后 获取getters mutations actions的写法都要变 


```

const moduleA = {   // moduleA
    namespaced: true,
    state: { num:1 },
    mutations: {  
        addNum(state){
            state.num += 2  // 调用的时候执行 this.$store.commit('a/addNum',3)
        }
    },
    actions: { 
        syncAddNum(context,val){
            context.commit("addNum",val)  // 调用的时候执行 this.$store.dispatch('a/syncAddNum',3)
        }
    },
    getters: { 
        addNums(state){
            return state.num + "元 "  // 调用的时候执行 this.$store.getters['a/addNum2']
        }
    }
}
export default moduleA

const moduleB = {
    namespaced: true,
    state: { num:2 },
    mutations: { 
        addNum(state){
            state.num += 3
        }
     },
    actions: {  },
    
  }
export default moduleB
```

4. 启用命名空间后辅助函数 mapState mapGetters mapMutations mapActions 的写法
+  启用命名空间后的mapState的写法 
``` 
...mapState({
    a1: state => state.b.num,  
}),
```
+  启用命名空间后的mapGetters的写法 
``` 
 ...mapGetters({
    a2: "b/addNum1"
}),
```
+  启用命名空间后的mapMutations的写法 
``` 
 ...mapMutations({event : "b/addNum"})  // this.event(3) 附带参数的写法 
```
+  启用命名空间后的mapActions的写法 
```
...mapActions({events : "b/syncAddNum"}),  // this.events(4) 附带参数的写法 
```