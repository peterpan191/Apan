## V-model双向数据绑定
> 基础知识
 1. v-bind 只能实现数据的单向绑定，从 M 自动绑定到 V，无法实现数据的双向绑定。  
 2. v-model 只能运用在表单元素中,实现双向绑定
 3. eval 把字符串解析执行，并拿到解析的结果(不属于此类知识)
>
>v-model制作简易计算器  

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