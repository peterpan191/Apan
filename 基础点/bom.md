# BOM
>
## 一.BOM_第一天
>
### 01-BOM简介
>
* `ECMAScript` 是 `javascript` 的核心，但是如果要在 `web` 中使用 * * `javascript`，那么 `BOM` (浏览器对象模型)才是真正的核心。BOM提供了很多对象，用于访问浏览器的功能，这些功能与任何网页内容无关。
> 
* `BOM` 的核心对象是 `window` ，它表示浏览器的一个实例。在浏览器中， `window` 对象有双重角色，它既是通过 `javascript` 访问浏览器窗口的一个接口，又是 `ECMAScript` 规定的 `Global` 对象。所有全局作用域中声明的变量、函数都会变成 `window` 对象的属性和方法。
>
### 02-js三大家族
>
#### 01-第一家族-offset家族
>
* 家族成员： `offsetWidth` `offsetHeight` `offsetLeft` `offsetTop` `offsetParent`
>
* offsetWidth  offsetHeight  （检测盒子自身宽高）
    * 这两个属性，他们绑定在了所有的节点元素上。获取之后，只要调用这两个属性，我们就能够获取元素节点的宽和高。
    *  offset宽/高  =  盒子自身的宽/高(width/height) + padding +border
>
* offsetLeft  和  offsetTop  （检测距离父盒子有定位的左/上面的距离）
    * 如果父级都没有定位则以 `body` 为准, `offsetLeft` 从父亲的 `padding` 开始算,父亲的 `border` 不算。
    * 在父盒子有定位的情况下，offsetLeft == style.left(去掉 px)
>
* offsetTop/Left 和 style.top/left 的区别：
    * 1. 最大区别在于 offsetTop/Left 可以返回没有定位盒子的距离左侧的位置。而 style.top/left 不可以
    * 2. offsetTop/Left 返回的是整数，而 style.top/left 返回的是字符串，除了数字外还带有单位：`px`
    * 3. offsetTop/Left 只读，而 style.top/left 可读写。（只读是获取值，可写是赋值）
    * 4. `obj.style.xxx` 只能获取行内样式
>
* `offsetParent`   （检测父系盒子中带有定位的父盒子节点）
    * 1、返回该对象的父级 （带有定位）
        * &emsp;&ensp;如果当前元素的父级元素没有进行 CSS 定位(absolute,relative,fixed) `offsetParent` 为 `body`
    * 2、如果当前元素的父级元素中有 CSS 定位 `offsetParent` 取最近的
    那个父级元素。
>
#### 02-第二家族-Scroll家族
>
* 家族成员: `scrollWidth` , `scrollHeight` , `scrollTop` , `scrollLeft`
>
* scrollWidth 和 scrollHeight
    * 检测盒子的宽高  内容高度 + padding。（调用者：节点元素。属性。）
    * 盒子内容的宽高。（如果有内容超出了，显示内容的宽/高度）
>
* scrollTop , scrollLeft 可读写的
    * 被浏览器或父类遮挡的头部和左边部分。
    * 可以获取或设置一个元素的内容垂直滚动的像素数。element.scrollTop/Left = XXX
>
* 获取页面卷入高度的浏览器兼容问题:
    1. 各浏览器下 scrollTop的差异 
    2. IE6/7/8： 
    3. 对于没有 doctype 声明的页面里可以使用  document.body.scrollTop 来获取 scrollTop高度 ； 
    4. 对于有 doctype 声明的页面则可以使用 document.documentElement.scrollTop； 
    5. Safari: 
    6. safari 比较特别，有自己获取scrollTop的函数 ： window.pageYOffset ； 
    7. Firefox: 
        火狐等等相对标准些的浏览器就省心多了，直接用 document.documentElement.scrollTop ；
>
* 兼容写法：
    * `var scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop`
>
*  `onscroll` 事件
    * 解释：当元素的滚动条滚动时触发的事件。
    * `onscroll`事件貌似任何实体元素都可以绑定，这里的实体元素包括DOM元素、window元素、document元素。
    * 用法即：`element.onscroll=function(){};` **需要注意的是,设置此事件的元素一定要有滚动条**
>
* 关于`window.scroll()`,`window.scrollBy()`,`window.scrollTo()`
    * `window.scroll(x,y)`是让window滚动条滚动到那个x,y坐标。//x是水平坐标，y是垂直坐标。
    * `window.scrollBy(-x,-y)`是让window滚动条相对滚动到某个坐标，- 10即相对向左/向上滚动10像素。
    * `window.scrollTo(x,y)`和`window.scroll(x,y)`一样.
>
#### 03-下拉框卷入宽高
>
* 封装函数
    * @param 
    * @param
    * ```javascript
        sct || scl
            // 封装函数获取被页面卷入的高度
        function sct(){
            return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
        }
        // 封装函数获取被页面卷入的左边距
        function scl(){
            return document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
        }``` 
>
#### 04-第三家族-Client家族
>
* 家族成员 `clientWidth` `clientHeight` `clientTop` `clientLeft`
* `clientWidth` `clientHeight`
    * 检测盒子的宽高 clientHeight/W 盒子 自身宽高 + padding 内容溢出不算
    * 
    *  offsetHeight/W 盒子 自身宽高+ padding + border
    * 
    *  scrollHeight/W 内容宽高 + padding
    * 
    *  document.documentElement.clientWidth/clientHeight  获取浏览器可视区域的宽高		没有兼容问题
    * 
    *  window.innerWidth/innerHeight		IE <= 8 不支持			表示获取 window 可视区域的内部大小
    * 
    *  window.outerWidth/outerHeight		IE <= 8 不支持			表示整个浏览器窗体的大小
    * `clientTop` `clientLeft`		只读
    * 表示内容区域的左上角相对于整个元素左上角的位置   实际上就是 border 的宽度
    * 
    * 内容区域 内容+padding		padding 之外就剩 border
    * 
    * 一个元素顶部和左侧边框(border)的宽度
>
* 获取元素的样式
    * 内嵌样式	  行内样式  	可以通过 `ele.style.styleName` 获取
    *  
    *  内联样式和外联样式可以通过以下两种方式获取
>
* 表达式
    * 1. `window.getComputedStyle(element, [pseudoElt]).styleName`		返回的是一个字符串,`window`可省略
    * 仅用于谷歌和火狐等标准浏览器
	* `element` 用于获取计算样式的元素。
	* `pseudoElt` 指定一个要匹配的伪元素的字符串。必须对普通元素省略（或`null`）,一般都写成 `null`.  如果要获取伪元素的样式,则写上要获取的伪元素的名字
    * 
    * 2. `element.currentStyle.styleName` 仅用于 IE 
    * 
    * 3.兼容写法:
    * ```javascript
        * function getStyle(ele, styleName) {
			if (ele.currentStyle) {
				return ele.currentStyle[styleName];
			} else {
				return window.getComputedStyle(ele, null)[styleName];
			}
		}```
>
## 二.BOM_第二天
>
### 01-事件对象 event
* `Event` 对象代表事件的状态，比如事件在其中发生的元素、键盘按键的状态、鼠标的位置、鼠标按钮的状态
>
* 获得event对象兼容性写法 `event || window.event`
>
* `event.target` 事件的目标	获得target兼容型写法  `event.target || event.srcElement`
>
* `e.pageX/Y`	获取鼠标点击的相对于页面的位置
* `e.clientX/Y`	获取鼠标点击的相对于可视区域的位置
* `e.screenX/Y`	获取鼠标点击的相对于屏幕的位置
* `e.offsetX/Y`	表示鼠标指针位置相对于触发事件的对象的位置
>
* `event.type`	事件的类型
>
* `event.button` 鼠标点击的按键(只认识三个键) 可在 `onmousedown` 事件中测试 鼠标左键=0 鼠标滚轮=1 鼠标右击=2
>
* 属性	当以下情况发生时，出现此事件
	onabort	图像加载被中断
>
	onblur	元素失去焦点
>
	onchange	用户改变域的内容
>
	onclick	鼠标点击某个对象
>
	ondblclick 鼠标双击某个对象
>
	onerror	当加载文档或图像时发生某个错误
>
	onfocus	元素获得焦点
>
	onkeydown	某个键盘的键被按下
>
	onkeypress	某个键盘的键被按下或按住
>
	onkeyup	某个键盘的键被松开
>
	onload	某个页面或图像被完成加载
>
	onmousedown	某个鼠标按键被按下
>
	onmousemove	鼠标被移动跟随
>
	onmouseout	鼠标从某元素移开
>
	onmouseover	鼠标被移到某元素之上
>
    onmouseenter 鼠标放上
>
    onmouseleave 鼠标离开
>
	onmouseup	某个鼠标按键被松开
>
	onreset	重置按钮被点击
>
	onresize	窗口或框架被调整尺寸
>
	onselect	文本被选定
>
	onsubmit	提交按钮被点击
>
	onunload	用户退出页面
>
    onload 事件会在页面或图像加载完成后立即发生
>
	onmouseover:当鼠标指针进入（穿过）元素时，改变元素的背景色
>
	onmouseleave事件在鼠标移除元素时触发
>
    setTimeout()定时炸弹,设时间,一回只执行一次:两个参数,第一个要执行的函数,只打印函数名/第二个间隔的时间,单位毫秒/返回值是定时器的标识
>
	setInterval()闹钟设时间,重复执行,两个参数同上
>
    clearInterval()关闭定时器
>
    addEventListener() 方法用于向指定元素添加事件句柄
>
    classList属性:classList 属性是只读的，但你可以使用 add() 和 remove() 方法修改它
>
    HTML中鼠标滚轮事件onmousewheel
>
### 02-匀速动画 
> 
* 封装函数 
    * @param ele 运动的元素
    * @param target 运动的终点
    * ```js
        uniform
        function uniform(ele,target){
			var start,step,cha;
            //清除定时器
            clearInterval(ele.timer)
            //循环定时器
			ele.timer = setInterval(function(){
				//起点
				start = ele.offsetLeft;
				//步长
				step = target > start? 10:-10;
				//差值
				cha = target - start;
				//判断临界值
				if(step>cha){
					//清除定时器
					clearInterval(ele.timer);
					//直接跳到终点
					box.style.left = target +"px";
				}else{
                    //运动
					box.style.left = start + step + "px";
				}
			},17)
		}```
### 03-缓动动画 
>
* 封装函数
    * @param ele 运动的元素
    * @param target 运动的终点
    * ```js
        move
        function move(ele,target){
			//清除定时器
            clearInterval(ele,timer);
            //循环定时器
			ele.timer = setInterval(function(){
				//不断变化的起点
				var stars = ele.offsetLeft;
				//判断步长.
				var step = (target-stars)/10
				// 判断临界值
				// if(step<1){
				// 	step=1;
				// }
				if(Math.abs(step)<1){
					// if(step>0){
					// 	step = 1;
					// }else{
					// 	step = -1;
					// }
                    //细分区间(0.1) (-1:0)
					// step = step>0? 1:-1;
					step = step>0? Math.ceil(step):Math.floor(step);
				}
                //判断终止条件
				if(stars+step===target){
					clearInterval(ele.timer);
				}
                //运动
				ele.style.left = stars + step +"px";
			},20);
		}```
* step = (target - start) / 10;
    * 步长(速度) = (终点 - 起点) /10;
>
### 04-获取样式的兼容写法
>
* 封装函数
    * @param ele 获取样式的元素
    * @param styleName 要获取的样式名字
    * ```js
        getStyle
        function getStyle(ele, styleName) {
				if (ele.currentStyle) {
					return ele.currentStyle[styleName];
				} else {
					return window.getComputedStyle(ele, null)[styleName];
				}
			}```
>
### 05-封装多样式动画
* 封装函数
    * @param ele 获取样式的元素
    * @param target 目标值
    * ```js
        // 封装多样式动画
        function mulStyle(ele, target) {
        clearInterval(ele.timer);
        ele.timer = setInterval(function() {
            // 声明是否成功的状态
            var status = true;
            for (var i in target) {
                // 判断是否是层级
                if (i === "zIndex") {
                    ele.style.zIndex = target[i];
                    continue;
                }
                // 判断样式是否是透明度
                if (i === "opacity") {
                    // 获取起点值
                    var start = parseInt(getStyle(ele, i) * 100);
                    // 获取终点值
                    var t = target[i] * 100;
                } else {
                    // 获取起点值
                    var start = parseInt(getStyle(ele, i));
                    var t = target[i];
                }
                // 步长
                var step = (t - start) / 10;
                // 步长临界值
                if (Math.abs(step) < 1) {
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                }
                // 判断是否到终点,改变status值
                if (start + step !== t) {
                    status = false;
                }
                // 开始动画
                if (i === "opacity") {
                    ele.style[i] = (start + step) / 100;
                } else {
                    ele.style[i] = start + step + "px";
                }
            }
            // 判断是否都到了终点
            if (status) {
                console.log("stop ...");
                clearInterval(ele.timer);
            }
        }, 17)
    }```
>
### 06-分页器点击事件封装
* ```js
     for(var i=0; i<dots.length; i++){
        dots[i].index = i;
        dots[i].onclick = function(){
            count = this.index;
            slowy(ele,-count*w);
            $('.act').className = "";
            dots[count].className = "act";
        }
    }```
>
### 07-阻止冒泡兼容写法:
* `event.button` 鼠标点击的按键(只认识三个键) 可在 `onmousedown` 事件中测试
* stopPropagation ? stopPropagation() : cancelBubble = true;

### 08-事件委托
* bom事件委托
    * document.createElement()是在对象中创建一个对象，要与appendChild() 或 insertBefore()方法联合使用。其中，appendChild() 方法在节点的子节点列表末添加新的子节点。insertBefore() 方法在节点的子节点列表任意位置插入新的节点。
    * ```js
        var liEl = document.createElement("li");
            liEl.innerText= "li_7";
            $('ul').appendChild(liEl);
            $("ul").onclick = function(e){
                e=event || window.event;
                var target = e.target || e.srcElement;
                if(target.tagName ==="LI"){
                    target.style.color = "red"
                }
            }```
>
### 09-dom事件委托
>
*  后生成的li 并没有添加上点击事件 用到事件委托
    *   ```js
        $('.btn1').click(function(){
            var str = '<li>我是后生成的li</li>';
            $('ul').append(str);
        })
        // 事件委托 
        // $('ul').on('click','li',function(){
        //     alert($(this).text());
        // })
        //  利用 event 实现
        $('ul').click(function(event){
            // 实际点击的是谁  event.target
            alert($(event.target).text());         
        })```
>
### 10-取对象的属性  如果该属性是变量,那么需要用[]的形式获取
* ```js
    var abc = "name";
    var user = {
	    name:'张三',
	    age:20
    }
    console.log(user[abc]);
    console.log(user.name)```
>
* 在每个 <p> 元素前面插入内容，并设置所插入内容的样式：
    * ::before
    { 
    content:"台词：";
    }
>
2. 动画原理
	+ 物体运动： 起点，终点，速度（距离/时间）
	+ 盒子的位置 = 盒子本身所在的位置 + 步长
>
* <!-- ondragstart="return false;"  让 img 元素无法被选中拉扯 -->
* 放大镜
    * 放大的 img 反方向移动两倍的距离
	* imgEle.style.marginLeft = -2 * distanceX + "px";
	* imgEle.style.marginTop= -2 * distanceY + "px";
>
### 11-自动轮播
* ```javascript
    var ele = $(".list");
			// 一个li的宽度
			var w = ele.children[0].offsetWidth;
			// 计数器
			var count = 0;
			
			var btns = $("button");
			// 获取小点元素的数组集合
			var dotts = $(".dotts").children;
			
			
			var timer = null;
			autoplay();
			// 自动轮播的函数
			function autoplay(){
				timer = setInterval(function (){
					btns[1].onclick();
				},1500)
			}
			ele.onmouseenter = function (){
				// 放上 停止
				clearInterval(timer);
			}
			ele.onmouseleave = function (){
				// 离开执行
				autoplay();
			}
			
			
			btns[0].onclick = function (){
				if(count === 0){
					ele.style.left = -(ele.children.length - 1) * w + "px";
					count = 5;
				}
				count --;
				slowly(ele,-count * w);

				// 清除激活小点的样式
				$(".act").className = "";
				dotts[count].className = "act";
			}
			
			btns[1].onclick = function (){
				if(count === ele.children.length - 1){
					ele.style.left = "0px";
					count = 0;
				}
				count ++;
				slowly(ele,-count * w);
				
				// 清除激活小点的样式
				$(".act").className = "";
				if(count === ele.children.length - 1){
					// 临界值 最后一张  第一个小点激活
					dotts[0].className = "act";
				}else{
					// 给当前激活小点添加样式
					dotts[count].className = "act";
				}
				
			}
			
			for(var i = 0 ; i < dotts.length; i ++){
				dotts[i].index = i;
				dotts[i].onclick = function (){
					count = this.index;
					slowly(ele,-count * w);
					$(".act").className = "";
					this.className = "act";
				}
            }```
>
### 12-生成柱状图
>
* ```javascript
    var column = $('.column');
        var btns = $('button');
        
        btns[0].onclick = function(){
            var hArr = [];
            var str = "";
            for(var i=0; i<10; i++){
                //区间[20,280]
                var h= Math.floor(Math.random()*13)*20+20
                if(hArr.indexOf(h)===-1){
                    hArr.push(h);
                }else{
                    i--;
                }
            }
            for(var j=0; j<hArr.length; j++){
                var l = 40+90*j;
                str+='<li style="left : '+l+'px; height : '+hArr[j]+'px"></li>';
            }
            column.innerHTML = str;
        }
        var lis = column.children;
        console.log(lis);
        btns[1].onclick = function(){
            var i=0;//内环 i 控制每一圈的下标
            var j=0; //外环j 控制圈数
            //定时循环
            var timer = setInterval(function(){
                // 比较第一个和后一个的高度
                if(lis[i].offsetHeight>lis[i+1].offsetHeight){
                    //parentNode.insertBefore(要插入的节点,参考节点)
                    lis[i].parentNode.insertBefore(lis[i+1],lis[i]);
                    //交换位置
                    var temp = lis[i+1].offsetLeft;
                    // 动画 元素,目标值
                    slowly(lis[i+1],lis[i].offsetLeft);
                    slowly(lis[i],temp);
                    console.log(temp);
                }
                i++;

                if(i==lis.length -1-j){
                    addClass(lis[i],"done");
                    j++;
                    i=0;
                }
                if(j === lis.length - 1){
                    clearInterval(timer);
                    addClass(lis[0],"done")
                }
            },1000)
        //生成柱状图
        /*1.获取高==>for循环 去重 如果不存在就加到数组里 存在i--;
        2.获取left==>str
        //开始排序
        1.j控制外轮 i控制内轮
        2.清除定时器
        {3.定时器==>三个if语句
        (4.判断1高>2高
        5.交换位置 onsertBefore(参照物,要插入元素)
        6.声明temp
        7.动画展示 换位置)==>内轮
        8.i++
        9.if j++ i=0
        10.if 结束
        }*/ 
        }```
>
## 三.BOM_第三天
>
* 存储
* 可以用于存储用户数据
* 存储数据的格式都是字符串形式
* 存储的数据都有大小限制
>
* localStorage
    * localStorage.getItem(key):获取指定key本地存储的值
    * localStorage.setItem(key,value)：将value存储到key字段
    * localStorage.removeItem(key):删除指定key本地存储的值
>
* 1. 获取本地数据库: var userArr = JSON.parse(localStorage.getItem("userArr")); 把数据库获取的值由json字符串转化为json对象
```js
// 获取存储到 name 的键上的值
    var name = localStorage.getItem('name');
    // var name = localStorage.name;
    // var name = localStorage['name'];
    // 获取存储到user的键上的值
    var user = JSON.parse(localStorage.getItem('user'));
```
>
* 2. localStorage.setItem("userArr",JSON.stringify(userArr));将数据添加到数据库;  
```js
// 把一个用户名(lilei)存储到 name 的键上
    localStorage.setItem('name', 'lilei');
    // localStorage.name = 'lilei';
    // localStorage['name'] = 'lilei';
    // 把一个用户存储到user的键上
    localStorage.setItem('user', JSON.stringify(id:1, name:'lilei'));
```
>
* 3. 清除所有键值对：localStorage.clear(); clear用于删除所有存储的内容，它和removeItem不同的地方是removeItem 删除的是某一项，而clear是删除所有。
```js
// 清除 localStorage
    localStorage.clear();
    var len = localStorage.length; // 0
```
* 获取 localStorage 中保存的键值对的数量：localStorage.length; length 属性用于获取 localStorage 中键值对的数量。
```js
localStorage.setItem('name','lilei');
var len = localStorage.len; // 1
localStorage.setItem('age', 10);
len = localStorage.len; // 2
```
* 可以缓存当前页面的停留的子页面和展开的数据，当切换出去该页面再回来的时候，展示的仍然是离开时的页面和数据。
>
* HTML5种的web storage包含两种存储方式：localStorage和sessionStorage，这两种方式存储的数据不会自动发给服务器，仅仅是本地保存，有大小限制。
>
* `localStorage`是持久化的本地保存，只要你找不到其所在地没有主动删掉，就会一直存在。就像一些缓存，都把APP删了还有。
>
* `sessionStorage`是会话级别的本地保存，比如一个页面关闭的时候该页面设置的sessionStorage数据会自动消失，在不同浏览器窗口不会共享的，即使是同一个浏览器的同一个页面。根Java里面的会话有点类似的。
>
* 一般我们会将JSON存入localStorage中，但是在localStorage会自动将localStorage转换成为字符串形式
>
*  这个时候我们可以使用JSON.stringify()这个方法，来将JSON转换成为JSON字符串
>
*  读取之后要将JSON字符串转换成为JSON对象，使用JSON.parse()方法
* JSON.stringfy()将对象、数组转换成字符串；JSON.parse()将字符串转成json对象。