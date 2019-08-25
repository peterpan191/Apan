# jquery dom驱动
>
## 一.jquery_第一天
>
### 01-入口函数
* $(document).ready(function(){});//点击document执行 DOM结构绘制完毕后就执行，不必等到加载完毕。
>
* window.onload = function(){};//入口执行 必须等到页面内包括图片的所有元素加载完毕后才能执行。
>
* $(function(){});简写推荐//入口执行
>
* jQuery(function(){});//入口执行
>
* $与jquery相互代替;
>
### 02-jquery好处
* 好处
    * 1.快速简单操作dom元素
	* 2.封装javascript常用功能函数
>
* 注意:必须先引入jquery,在编写(在引入插件);
>
### 03-获取节点
>
* var $pEl = $('.p1');//class属性;
* 函数
    * $pEl.click(function(){
			$pEl.css('color','green');//设置样式
		})
    * 加$符
	* click鼠标点击不加on
	* 样式.css();
	* js是属性/jq是方法
>
### 04-css选择器
>
* 基本选择器
    * // 通过标签选择器
        * $('h2').css('color','red');
    *    // 通过class选择器
        * $('.p1').css('color','blue');
    *    // 通过id
        * $('#d1').css('background-color','green');

    *    // 后代选择器
        * $('.d3 .box').css('color','orange');

    *    // 并集选择器
        * $('.d2,.d3').css('backgroundColor','black')

    *    // 交集选择器
        * $('.d3.active').css('background-color','pink')
    * 层级选择器
        * 下一个兄弟元素
           *  $('.li3+li').css('color','red');
        * 下面所有的兄弟元素
            * $('.li3~li').css('background-color','red');
        * 子级所有元素(包括孙子)
            * $('.d1>.box').css('width','400px')
    * 过滤选择器
        * 通过下标寻找节点
            * $('li:eq(1)').css('background','red');
        * 选择序号大于index的元素
            * $('li:gt(5)').css('background','red');      
        * 选择小于index 的元素
            * $('li:lt(5)').css('background','blue');
        * index为奇数
            * $('li:odd').css('background','orange');
        * 为偶数
            * $('li:even').css('background','pink');
        * 第一个元素
            * $('li:first').css('background','red');
        * 最后一个元素
            * $('li:last').css('background','red');
    * 属性选择器
        * //寻找带"s"的节点
		    * $('p[title*="s"]').css('color','red');
		* //标题属性
		    * $('p[title]').css('background','pink');
		* //内容
		    * $('p[title="我是标题"]').css('color','white');
		* //不等于的所有节点
		    * $('p[title!="我是标题"]').css('background','black');
		* //开头以w的节点
		    * $('p[title^="w"]').css('color','pink');
		* //结尾以h的节点
		    * $('p[title$="h"]').css('color','pink');
    * 筛选选择器
        * //查找所有后代(子子孙孙);
		    * $('ul').find('li').css('color','red');
		* //所有直接子节点(亲儿子)
		    * $('.box').children('div').css('color','red');
		* //除了自己其他的兄弟节点
		    * $('.li3').siblings().css('background','pink');
		* //父节点(亲的)
		    * $('.box1').parent().css('width','200px');
		* //通过下标查找节点
		    * $('li').eq(5).css('color','green');
>
### 05-	mouseover事件跟mouseenter事件的区别
>
* mouseover/mouseout事件，鼠标经过的时候会触发多次，每遇到一个子元素就会触发一次。
* mouseenter/mouseleave事件，鼠标经过的时候只会触发一次
>
### 06-DOM对象跟jQuery对象相互转换
>
* jQuery对象转换成DOM对象:
    * 方式一：$(“#btn”)[0]
    * 方式二：$(“#btn”).get(0)
>
* DOM对象转换成jQuery对象：
    * $(document) 	-> 把DOM对象转成了jQuery对象
    * var btn = document.getElementById(“btn”);
    * btn 	-> $(btn);
>
>
## 二.jquery_第二天
>
### 01-jquery(dom操作)
*  样式	.css()
    	获取样式
    	设置单个属性样式
    	设置多个属性样式  参数为json对象或者对象形式
>
* 属性attr()
    	获取属性
    	设置属性
    	removeAttr()
>
* 取值，设置值
    	text() 获取标签内容 text
    	html() 获取html
    	val() 表单的值是 value
>
* 操作类
    	addClass() - 向被选元素添加一个或多个类
    	removeClass() - 从被选元素删除一个或多个类
    	toggleClass() - 对被选元素进行添加/删除类的切换操作
    	hasClass()- 判断是否存在类,如果不写参数，必写
>
*  dom查找
    	siblings()  除了自己以外的所有的兄弟节点
    	next()	下一个兄弟
    	nextAll()		后面所有的兄弟
    	nextUntil()	后面所有的兄弟直到…
    	prev()	前面的兄弟
    	prevAll()		前面所有的兄弟
    	prevUntil()		…前面所有的兄弟直到…
    	parent()		父亲
    	parents()		所有的父节点
    	parentsUntil()		获得当前匹配元素集合中每个元素的祖先元素,直到规定在何处停止对祖先元素进行匹配的选择器表达式
>
### 02-添加元素
* html();
    * 创建元素
    * 可以把字符串转变为一个jq的dom对象
>
* append()   
    * 参数 $node   或   标签字符串
    * 作用：在被选元素内部的最后一个子元素（或内容）后面插入内容（存在或者创建出来的元素都可以 
    * 如果是页面中存在的元素，那么调用append()后，会把这个元素放到相应的目标元素里面去；但是，原来的这个元素，就不存在了。
    * 如果是给多个目标追加元素，那么方法的内部会复制多份这个元素，然后追加到多个目标里面去。
>
* appendTo()
    * 作用：把$(selector)追加到node中去
    * $(selector).appendTo(node);
    * 被字句==> 把字句
>
* prepend()
    * 作用：在元素的第一个子元素前面追加内容或节点
    * $(selector).prepend(node);
    ====================区分=====================
* after()
    * 作用：在被选元素之后，作为兄弟元素插入内容或节点
    * $(selector).after(node);
>
* before()
    * 作用：在被选元素之前，作为兄弟元素插入内容或节点
    * $(selector).before(node);
>
### 03-清空元素
    * $(selector).empty();//清空子节点和内容
    * $(selector).html(“”);//清空子节点和内容
    * $(selector).remove();  //会把对象也干掉//包括自己
>
### 04-复制元素
* $(selector).clone();
>
>
## 三jquery_第三天
>
### 01-jquery动画
* 3.1隐藏显示动画
    * show方法
    * 作用：让匹配的元素展示出来
        	$(xx).show(2000)
        	$(xx).show()		slow：600ms、normal：400ms、fast：200ms
        	$(xx).show(2000,function(){});
        	$(xx).show()
    * hide方法
    * 作用：让匹配元素隐藏掉
        * 用法参考show方法
>
* 3.2滑入滑出动画
    * 3.2.1滑入动画效果
	    * $(xx).slideDown(speed,callback);
        * 注意：省略参数或者传入不合法的字符串，那么则使用默认值：400毫秒（同样适用于fadeIn/slideDown/slideUp）
	    * $(xx).slideUp();
    * 3.2.2滑入滑出切换动画效果
	    * $(xx).slideToggle(speed,callback);
>
* 3.3淡入淡出动画
    * 3.3.1 淡入动画效果
	    * $(xx).fadeIn(speed, callback);
    * 3.3.2 淡出动画效果
		* $(xx).fadeOut(1000);
    * 3.3.3淡入淡出切换动画效果
		* $(xx).fadeToggle('fast',function(){});
    * 3.3.4改变透明度到某个值
    * 作用：调节匹配元素的不透明度 
		* $(xx).fadeTo(1000, .5); //  0全透，1全不透
>
* 	自定义动画
    * 注意：所有能够执行动画的属性必须只有一个数字类型的值。
    * 语法：$(selector).animate(styles,speed,easing,callback)
	    * 第一个参数表示：要执行动画的CSS属性（必选）
 	    * 第二个参数表示：执行动画时长（可选）
	    * 第三个参数表示：动画执行完后立即执行的回调函数（可选）

动画支持的属性：见附件。

*	停止动画
    * 1.stop()
        * 作用：停止当前正在执行的动画
        * 为什么要停止动画？如果多个动画同时作用于一个单位上面，那么多个动画会进入排队。后一个动画的执行必须等前面的执行完毕。
    * 2.stop(stopAll,goToEnd);
    * stopAll  是否全部停止，默认false 停止队列中所有的动画
    * goToEnd  是否将停止的动画  停止在当前动画的最后一个状态  
>
### 02-操作form表单
>
* .prop() 用于遍历 form表单中的多选框和单选框的选中状态
>
### 03-尺寸位置操作（bom）
>
* 5.1	高度和宽度操作
    	height()    取值类型为num  可以直接参与运算
    	height(200)
    	width()
    	width(100)
* 5.2	坐标值操作
    * offset() 
    * 作用：获取或设置元素相对于文档的位置
    * 之前的offsetLeft  找有定位的父类 相对于有定位的父类的距离
	* $(selector).offset();
	* $(selector).offset({left:100, top: 150});
    * 注意点：设置offset后，如果元素没有定位(默认值：static)，则被修改为relative
>
* position() 
    * 作用：获取相对于其最近的具有定位的父元素的位置。
	* $(selector).position();
    * 注意：只能获取，不能设置。
>
* scrollTop() 
    * 作用：获取或者设置元素垂直方向滚动的位置
	* $(selector).scrollTop();
	* $(selector).scrollTop(100);
>
* scrollLeft() 
    * 作用：获取或者设置元素水平方向滚动的位置
    * $(selector).scrollLeft(100);
>
* 附件
•	backgroundPosition
•	borderWidth
•	borderBottomWidth
•	borderLeftWidth
•	borderRightWidth
•	borderTopWidth
•	borderSpacing
•	margin
•	marginBottom
•	marginLeft
•	marginRight
•	marginTop
•	outlineWidth
•	padding
•	paddingBottom
•	paddingLeft
•	paddingRight
•	paddingTop
•	height
•	width
•	maxHeight
•	maxWidth
•	minHeight
•	minWidth
•	font
•	fontSize
•	bottom
•	left
•	right
•	top
•	letterSpacing
•	wordSpacing
•	lineHeight
•	textIndent
>
>
## 四.jquery_第四天  jquery事件机制
>
### 01-jQuery 事件的绑定
* 简单事件绑定bind事件绑定 delegate事件绑定 on
    * 	简单事件绑定：
        * click(handler) 				单击事件
        * blur(handler) 				失去焦点事件
        * mouseenter(handler) 		鼠标进入事件
        * mouseleave(handler)			鼠标离开事件
        * dbclick(handler) 			双击事件
        * change(handler) 		改变事件，如：文本框值改变，下来列表值改变等
        * focus(handler) 				获得焦点事件
        * keydown(handler) 			键盘按下事件
        * 更多：http://www.w3school.com.cn/jquery/jquery_ref_events.asp
    * 	bind方式（不推荐，1.7以后的jQuery版本被on取代）
        * 作用：给匹配到的元素直接绑定事件
	    * $("p").bind("click mouseenter", function(e){});
    * 	delegate方式（特点：性能高，支持动态创建的元素）
        * 作用：给匹配到的元素绑定事件，对支持动态创建的元素有效 
        * $(".parentBox").delegate("p", "click", function(){});
    * 	on方式
    * jQuery1.7版本后，jQuery用on统一了所有的事件处理的方法
        * 作用：给匹配的元素绑定事件，包括了上面所有绑定事件方式的优点
    * 语法：
        * 	$(selector).on(events[,selector][,data],handler);
        * 	$(selector).on(events[,selector], handler);
        * 	$(selector).on(events,handler);
>
### 02-事件解绑
* 	unbind() 方式
    * 作用：解绑 bind方式绑定的事件
    * $(selector).unbind();    // 解绑所有事件
    * $(selector).unbind(“click”,fn);   //  解绑固定事件
    * $(selector).unbind(“click”);   //  解除一类事件
>
* 	undelegate() 方式
    * 作用：解绑delegate方式绑定的事件
    * $( selector ).undelegate();
    * $( selector).undelegate( “click” ); 
    * $( selector).undelegate( “xx”,“click”); 
    * $( selector).undelegate( “xx”,“click”,fn ); 
>
* 	off解绑on方式绑定的事件
    * $(selector).off();
    * $(selector).off(“click”);
    * // 解绑所有代理的click事件，元素本身的事件不会被解绑 
    * $(selector).off( “click”, “xx” ); 
    * $(selector).off( “click”, “xx” ,fn); 
>
### 03-事件触发
* 简单事件触发
	* $(selector).click(); //触发 click事件
>
* trigger方法触发指定事件
	* $(selector).trigger(“click”);

	* triggerHandler() 方法触发被选元素的指定事件类型。	
	* $(selector).triggerHandler(“click”);
    * triggerHandler与 trigger() 方法相比的不同之处
        * 它不会引起事件（比如表单提交）的默认行为（细节，开发并不在意）
        * .trigger() 会操作 jQuery 对象匹配的所有元素，而 .triggerHandler() 只影响第一个匹配元素。
        * 由 .triggerHandler() 创建的事件不会在 DOM 树中冒泡；如果目标元素不直接处理它们，则不会发生任何事情。
        * 该方法的返回的是事件处理函数的返回值，而不是具有可链性的 jQuery 对象。此外，如果没有处理程序被触发，则这个方法返回 undefined。
>
### 04-jQuery事件对象介绍
* 对象
    * event.data 					传递给事件处理程序的额外数据
    * event.currentTarget 			等同于this，当前DOM对象
    * event.pageX 					鼠标相对于文档左部边缘的位置
    * event.target 					触发事件源，不一定===this
* 阻止冒泡
    * event.stopPropagation()；	阻止事件冒泡
    * event.preventDefault(); 	阻止默认行为
    * event.type 					事件类型：click，dbclick…
    * event.which 					鼠标的按键类型：左1 中2 右3
    * event.keyCode				键盘按键代码
>
>
### 05-链式编程
* 链式
    * 链式编程原理：return this;  调用”任何”一个方法都是返回了对象本身
    * 通常情况下，只有设置操作才能把链式编程延续下去。因为获取操作的时候，会返回获取到的相应的值，无法返回 this。
    * end(); // 结束当前链最近的一次过滤操作，并且返回匹配元素之前的状态。
>
* 02-隐式迭代
    * 隐式迭代的意思是：在方法的内部会为匹配到的所有元素进行循环遍历，执行相应的方法；而不用我们再进行循环，简化我们的操作，方便我们调用。
    * 如果获取的是多元素的值，大部分情况下返回的是第一个元素的值。
>
* 案例【五角星评分控件】
* 03-each方法
    * 大部分情况下是不需要使用each方法的，因为jQuery的隐式迭代特性。
    * 如果要对每个元素做不同的处理，这时候就用到了each方法
    * 作用：遍历jQuery对象集合，为每个匹配的元素执行一个函数
	* $(selector).each(function(index,element){});
    * Element是一个 js对象，需要转换成jquery对象
>
* 04-多库共存
    * 此处多库共存指的是：jQuery占用了$ 和jQuery这两个变量。当在同一个页面中引用了jQuery这个js库，并且引用的其他库（或者其他版本的jQuery库）中也用到了$或者jQuery这两个变量，那么，要保证每个库都能正常使用，这时候就有了多库共存的问题。
    * 其他一些 JavaScript 框架包括：MooTools、Backbone、Sammy、Cappuccino、Knockout、JavaScript MVC、Google Web Toolkit、Google Closure、Ember、Batman 以及 Ext JS。
    * 其中某些框架也使用 $ 符号作为简写（就像 jQuery），如果您在用的两种不同的框架正在使用相同的简写符号，有可能导致脚本停止运行。
    * jQuery 的团队考虑到了这个问题，并实现了 noConflict() 方法。
>
* 解决方式：
    * **$.noConflict();**让jQuery释放对$的控制权，让其他库能够使用$符号，达到多库共存的目的。此后，只能使用jQuery来调用jQuery提供的方法
>
### 06-jQuery插件机制
* jQuery这个js库，虽然功能强大，但也不是面面俱到包含所有的功能。
    * jQuery是通过插件的方式，来扩展它的功能：
    * 当你需要某个插件的时候，你可以“安装”到jQuery上面，然后，使用。
    * 当你不再需要这个插件，那你就可以从jQuery上“卸载”它。
    * （联想：手机软件，安装的app就好比插件，用的时候安装上，不用的时候卸载掉）
>
### 07-判断数组和对象分别都有好几种方法，其中用prototype.toString.call()兼容性最好
* ```javascript
    function isObjArr(variable){

        if (Object.prototype.toString.call(value) === "[object Array]") {

                console.log('value是数组');

        }else if(Object.prototype.toString.call(value)==='[object Object]'){//这个方法兼容性好一点

                console.log('value是对象');

        }else{

            console.log('value不是数组也不是对象')

        }
    }```





