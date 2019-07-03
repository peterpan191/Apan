# vue中$parent $children $refs $root之间的关系

>vue提供的这几种方法可以随便调用父子组件跟组件data里的值还有method中的方法

+ $parent 是子组件调用父组件的属性或方法，返回的是一个对象，因为只有一个父组件。写法：this.$parent.getParent()  

+ $children 是父组件调用子组件的属性或方法，返回的是一个数组，因为最少有一个子组件。  

+ $refs 是父组件调用某一个子组件的属性或方是指定的一个法，返回的是一个对象，因为子组件。 写法：this.$refs.child.getChild()  

+ $root 是子组件调用根组件的属性或方法，返回的是一个对象，因为只有一个根组件。写法：this.$root.getRoot()