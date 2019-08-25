# CSS3 简介
>
* 在CSS2基础上，增强或新增了许多特性， 弥补了CSS2的众多不足之处，使得Web开发变得更为高效和便捷。CSS3 新增动画元素效果，媒体查询功能，引入矢量图实现对小图标的控制，减少雪碧图的引用。
>
* CSS3目前的主要问题是浏览器兼容性比较差，尤其 IE，部分属性需要添加私有前缀，见页底。在移动端的兼容性优于PC端，因为移动端的浏览器厂商提供的一般都是最新标准。
>
## 新增知识第一天
>
### 01-选择器
>
* CSS3新增了许多灵活查找元素的方法，极大的提高了查找元素的效率和精准度。* CSS3选择器与jQuery中所提供的绝大部分选择器兼容。
>
#### 01-属性选择器   通过属性来选择元素
	- div[attr] //标签选择器/属性选择器
	- div[attr=mydemo]  attr属性值等于mydemo
	- div[attr*=mydemo]   //任意位置包含xx
	- div[attr^=mydemo]  //开始位置以xx开头
	- div[attr$=demos]  //结束位置以xx结尾
>
#### 02-伪类选择器  
* 除了以前学过的`:link`正常情况下、`:active`点击的瞬间、`:visited`访问过后、`:hover`鼠标悬浮，
>
* a:hover 必须位于 a:link 和 a:visited 之后，这样才能生效！
* a:active 必须位于 a:hover 之后，这样才能生效！
* 简单规律: love hate
* CSS3又新增了其它的伪类选择器
	- 1. 结构伪类   重点通过E来确定元素的父元素。
		+ E:first-child第一个子元素
		+ E:last-child最后一个子元素
		+ E:nth-child(n) 第n个子元素
		+ E:nth-last-child(n) 同E:nth-child(n) 相似，只是倒着计算
        + E:empty 选中没有任何子节点的E元素；注意，无法选择有空格或者回车的标签
		+ n是支持简单表达式的
		+ **注意: n 是从0开始的自然数  E:nth-child(0) 无效**
        + 不能将 n 写在表达式后面,n 写在表达式开头
		+	![](HC2_files/1.jpg)
	- 2. 目标伪类
		+ E:target 结合锚点进行使用，处于当前锚点的元素会被选中
		+ ```js
			li:target{
					font-size: 30px;
					color: blue;
			}
			<a href="#li3">点我</a>
			<li id="li3">li3</li>
			```
	- 伪元素  E::before、E::after  默认行内元素 content: "" 必须写
    - **注意： 伪标签 在js中不能被选中**
		+ E::first-letter文本的第一个字母或字
		+ E::first-line 文本第一行
		+ E::selection  可改变选中文本的样式
		+ ":" 与 "::" 区别在于区分伪类和伪元素
>
### 02-颜色
>
三种颜色的表达方式:
>
* rgba(0,0,0,0)/rgb(0,0,0)  Red、Green、Blue、Alpha 即 RGBA
    - 取值范围:0~255,最后一位 0-1 表示透明度
>
* hsla(0,20%,50%,.7)  Hue、Saturation、Lightness、Alpha 即 HSLA
    * H 色调 取值范围 0~360	360表示红色、120表示绿色、240表示蓝色
    * S 饱和度 取值范围 0%~100%
    * L 亮度 取值范围 0%~100%
    * A 透明度 取值范围 0~1
>
* #000000 十六进制表示颜色,这种也能表明透明度,在6位数的颜色值 后 加两位表示透明度,详情将文档底部的附录
* ```js
     附录: 百分比的透明度 		对应的  		十六进制的透明度
		 	100% — FF 
		 	99% — FC 
		 	98% — FA 
		 	97% — F7 
		 	96% — F5 
		 	95% — F2 
		 	94% — F0 
		 	93% — ED 
		 	92% — EB 
		 	91% — E8 
		 	90% — E6 
		 	89% — E3 
		 	88% — E0 
		 	87% — DE 
		 	86% — DB 
		 	85% — D9 
		 	84% — D6 
		 	83% — D4 
		 	82% — D1 
		 	81% — CF 
		 	80% — CC 
		 	79% — C9 
		 	78% — C7 
		 	77% — C4 
		 	76% — C2 
		 	75% — BF 
		 	74% — BD 
		 	73% — BA 
		 	72% — B8 
		 	71% — B5 
		 	70% — B3 
		 	69% — B0 
		 	68% — AD 
		 	67% — AB 
		 	66% — A8 
		 	65% — A6 
		 	64% — A3 
		 	63% — A1 
		 	62% — 9E 
		 	61% — 9C 
		 	60% — 99 
		 	59% — 96 
		 	58% — 94 
		 	57% — 91 
		 	56% — 8F 
		 	55% — 8C 
		 	54% — 8A 
		 	53% — 87 
		 	52% — 85 
		 	51% — 82 
		 	50% — 80 
		 	49% — 7D 
		 	48% — 7A 
		 	47% — 78 
		 	46% — 75 
		 	45% — 73 
		 	44% — 70 
		 	43% — 6E 
		 	42% — 6B 
		 	41% — 69 
		 	40% — 66 
		 	39% — 63 
		 	38% — 61 
		 	37% — 5E 
		 	36% — 5C 
		 	35% — 59 
		 	34% — 57 
		 	33% — 54 
		 	32% — 52 
		 	31% — 4F 
		 	30% — 4D 
		 	29% — 4A 
		 	28% — 47 
		 	27% — 45 
		 	26% — 42 
		 	25% — 40 
		 	24% — 3D 
		 	23% — 3B 
		 	22% — 38 
		 	21% — 36 
		 	20% — 33 
		 	19% — 30 
		 	18% — 2E 
		 	17% — 2B 
		 	16% — 29 
		 	15% — 26 
		 	14% — 24 
		 	13% — 21 
		 	12% — 1F 
		 	11% — 1C 
		 	10% — 1A 
		 	9% — 17 
		 	8% — 14 
		 	7% — 12 
		 	6% — 0F 
		 	5% — 0D 
		 	4% — 0A 
		 	3% — 08 
		 	2% — 05 
		 	1% — 03 
		 	0% — 00```
>		 	
* 关于透明度：
    1. opacity只能针对整个盒子设置透明度，子盒子及内容会继承父盒子的透明度
    2. transparent 不可调节透明度，始终完全透明
>
* 一般元素透明使用 opacity, 制作制作遮罩层常用 rgba, 制作三角形常用  transparent
>
* 透明度的比较:
	* opacity 会影响子类元素		用于单个元素
	* rgba(),hsla() 不会影响自带元素		常用于遮罩层
	* transparent 不可调节透明度，始终完全透明  常用于制作三角形 
>
### 03-阴影
+ 文本阴影
	```js
		text-shadow: h-shadow(x) v-shadow(y) blur(模糊半径) color(颜色)
		1、水平偏移量 正值向右 负值向左
		2、垂直偏移量 正值向下 负值向上
		3、模糊半径是不能为负值
		4、可以有多个影子，用逗号隔开  案例:浮雕文字
	```
>
+ 盒子阴影
	```
	box-shadow: h-shadow(x) v-shadow(y) blur(模糊半径) spread(扩展范围) color(颜色) inset(是否内嵌,可省略);
	案例：扔到桌子上的图片
	```
>	
### 04-盒模型
>
* CSS3中可以通过box-sizing 来指定盒模型，即可指定为content-box.border-box，这样我们计算盒子大小的方式就发生了改变
* ```css
	content-box: 对象的实际宽度等于设置的 width 值和 border、padding 之和  (默认方式)
	border-box： 对象的实际宽度就等于设置的 width 值，即使定义有 border 和 padding 也不会改变对象的实际宽度，即 ( Element width = width ) 
	我们把这种方式叫做 css3 盒模型```
>
### 05-补充前缀
>
现在主要流行的浏览器内核主要有: 
```
Trident内核: 主要代表为 IE 浏览器  -ms
Gecko内核：主要代表为 Firefox 	-moz
Presto内核：主要代表为 Opera -o
Webkit内核：产要代表为 Chrome 和 Safari -webkit
```
>
而这些不同内核的浏览器，CSS3属性（部分需要添加前缀的属性）对应需要添加不同的前缀，也将其称之为浏览器的私有前缀，添加上私有前缀之后的CSS3属性可以说是对应浏览器的私有属性：
>
```
Trident内核：前缀为-ms
Gecko内核：前缀为-moz
Presto内核：前缀为-o
Webkit内核：前缀为-webkit
```
>
简单的示例:
```css
.box{
	border-radius: 5px;
	-moz-border-radius: 5px;
	-webkit-border-radius: 5px;
	-o-border-radius: 5px;
	-ms-border-radius: 5px;
}
```
## css3第二天
### 01-边框图片
>
* border-image 属性是一个简写属性，用于设置以下属性：
	*	border-image-source  图片
	*	border-image-slice	图片边框向内偏移量
	*	border-image-outset  边框图像区域超出边框的量(默认 0 ,每次移动 1*border 的宽的距离)
	*	border-image-width	边框宽度(不写默认边框宽度)
	*	border-image-repeat   图像边框是否应平铺(repeat)、铺满(round)或拉伸(stretch)。		
	* 会使边框原本的颜色失效
	* dotted: 定义一个点线边框
	* dashed: 定义一个虚线边框
	* solid: 定义实线边框
	* double: 定义两个边框。 两个边框的宽度和 border-width 的值相同
	* groove: 定义3D沟槽边框。效果取决于边框的颜色值
	* ridge: 定义3D脊边框。效果取决于边框的颜色值
	* inset:定义一个3D的嵌入边框。效果取决于边框的颜色值
	* outset: 定义一个3D突出边框。 效果取决于边框的颜色值
>
### 02-线性渐变
>
* 线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
* 语法：background: linear-gradient(direction, color-stop1, color-stop2, ...);
>			
* direction: 方向 可以是 角度(10deg)顺时针  也可以是 to top/left/right/bottom
>			
* 颜色后面可以跟百分比,表示从百分几开始渐变
>			
* 重复渐变: background: repeating-linear-gradient(to right, red 10%, green 20%)
>		
* 一般是通过ui设计稿 直接提取的渐变 角度 颜色比重
>
* 渐变的兼容写法 方向是相反的  而且不带to
>
### 03-径向渐变
>
* radial-gradient径向渐变指从一个中心点开始沿着四周产生渐变效果
	* 语法：background: radial-gradient(center, shape size, start-color, ..., last-color);
	* 谷歌background: -webkit-radial-gradient(10% 20%,yellow,red,green);
>
* shape size:参考 http://www.runoob.com/try/try.php?filename=trycss3_gradient-radial_size
>
### 03-背景加强
>
* 	Background:url  repeat  position
*	background-image
*	background-size  设置背景图片的尺寸
	*	width height 直接设置宽高 百分比
	*	cover  会自动调整缩放比例，保证图片始终填充满背景区域，如有溢出部分则会被隐藏。
	*	contain  会自动调整缩放比例，保证图片始终完整显示在背景区域,可能会有留白。
>
*	background-origin  (原点，起点)设置背景定位的原点
	*	border-box 		以边框做为参考原点；
	*	padding-box 	以内边距做为参考原点；
	*	content-box 	以内容区做为参考点；
>
*	background-clip 	设置背景区域clip(裁切)
	*	border-box    裁切边框以内为背景区域；
	*	padding-box   裁切内边距以内为背景区域；
	*	content-box   裁切内容区做为背景区域；
* 	以逗号分隔可以设置多背景，可用于自适应局
	* 	background: url("img/1.jpg") no-repeat left top, url(img/2.jpg) no-repeat right top;
>	
### 04-过渡
>
* transition: transition-property transition-duration	transition-timing-function transition-delay
	* transition-property   规定应用过渡的 CSS 属性的名称 (一般都写 all);
	* transition-duration   定义过渡效果花费的时间。默认是 0
	* transition-timing-function: 规定过渡效果的时间曲线。默认是 "ease"。
	* 匀速	linear| 先快后慢 ease| 先慢后快ease-in|先快再慢再快 ease-out| 先慢再快再慢ease-in-out|cubic-bezier(n,n,n,n);
	* transition-delay 			规定过渡效果何时开始。默认是 0。
>
### 05-2D转换
>
* transform:
	* 缩放 scale(x, y) 可以对元素进行水平和垂直方向的缩放，x、y的取值可为小数，不可为负值； 1个值代表 x,y一个值表示 x/y 都缩放
	* 移动 translate(x, y) 可以改变元素的位置，x、y可为负值   一个值表示x
	* 旋转 rotate(deg) 可以对元素进行旋转，正值为顺时针，负值为逆时针
	* 倾斜skew(x-angle,y-angle)	定义沿着 X 和 Y 轴的 2D 倾斜转换。
	* transform-origin: center bottom; 中心点;
>
## css3第三天	
### 01-3D转换
>
* rotateX/Y/Z 		沿X/Y/Z轴旋转  X轴上下  Y轴左右 Z轴以中心原地
* translateX/Y/Z 	沿X/Y/Z轴移动
* transform-style: preserve-3d 使被转换的子元素保留其 3D 转换
>
### 02-透视
>
* 电脑显示屏是一个 2D 平面，图像之所以具有立体感（3D效果），其实只是一种视觉呈现，通过透视可以实现此目的。透视可以将一个 2D 平面，在转换的过程当中，呈现3D效果。
* perspective有两种写法
	* a) 作为一个属性，设置给父元素，作用于所有3D转换的子元素
	* b) 作为 transform 属性的一个值，作用于元素自身,子元素的3D效果可呈现
	* c) 透视会产生近大远小的效果

> perspective透视加旋转才(rotate)有效;
* transform-style: preserve-3d 3D动画==>使被转换的子元素保留其 3D 转换
* backface-visibility：visible/ hidden 		设置元素背面是否可见
>
### 03-动画
>
动画是CSS3中具有颠覆性的特征之一，可通过设置多个节点来精确控制一个或一组动画，常用来实现复杂的动画效果
>
1. 必要元素：
+	a、通过@keyframes指定动画序列；
+	b、通过百分比将动画序列分割成多个节点；亦可以使用 from/to 不推荐
+	c、在各节点中分别定义各属性
+	d、通过animation将动画应用于相应元素
>
2. 关键属性:
+ Animation-name			 动画名称(必填)
>
+ Animation-duration	 动画持续时间
>
+ animation-timing-function 过渡类型
	- linear/ease/ease-in/ease-out/ease-in-out/cubic-bezier(n,n,n,n)：	特定的贝塞尔曲线类型，4个数值需在[0, 1]区间内
>
+ animation-delay		 动画延迟（只是第一次）
>
+ animation-iteration-count	 重复次数	infinite 无限次
>
+ animation-direction		动画是否重置后再开始播放
	- alternate动画直接从上一次停止的位置开始执行，倒着来
	- normal	动画第二次直接跳到0%的状态开始执行
>
+ animation-fill-mode		动画执行完毕后状态
	- forwards	结束在终点==>当动画完成后，保持最后一个属性值（在最后一个关键帧中定义）。
	- backwards	结束在起点==>在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值（在第一个关键帧中定义）。
	- both	设置对象状态为动画结束或开始的状态，结束时状态优先
>
语法:   animation: 动画名 动画持续时间 过渡类型 动画延迟 重复次数 动画重置后播放状态  动画执行完毕状态
>
语法:	`animation: name duration timing-function delay iteration-count direction fill-mode;`
**name duration 必须写,其余可以都不写**
>
* `animation-play-state		播放状态（ running 播放 和 paused 暂停 ）`
>
### 04-动画思绪
>
* 立方体
	* X轴左右; Y轴上下; Z轴前后;
	* X轴==>左负右正; Y轴==>上负下正; Z轴==>前正后负 ; 
	* 画立方体: 前后沿Z轴移动; 左右沿X轴移动再旋转; 上下沿Y轴移动再旋转;
>
* 表针
	* 设时针,分针,秒针
	* 设动画序列0deg--360deg==>transform:rotate角度;
	* 设时间间隔==>利用transform:rotate 设六条线==>设遮盖层-zindex留出间隔==>外圆;
	* animation: circle(动画序列) 43200s(时间) steps(12)(步长) infinite(循环次数) both(结束状态);
>
* 帧动画
	* 设动画序列==>背景定位(background-position)0 0(图片活动高度);
	* animation: fish(动画序列名) 1s steps(2) infinite both;
>
* 点距式导航
	* * 根据弧度算 x,y坐标
		* 
		* Math.sin(x) 	x 的正弦值。返回值在 -1.0 到 1.0 之间
			Math.cos(x) 	x 的余弦值。返回的是 -1.0 到 1.0 之间的数
			x 指弧度,不能写角度
		* 
		* 弧度的英文 rad
		* 定义：弧长等于半径的弧，其所对的圆心角为1弧度。(即两条射线从圆心向圆周射出，形成一个夹角和夹角正对的一段弧。当这段弧长正好等于圆的半径时，两条射线的夹角的弧度为1)
		* 
		* 数学上计算弧长的公式 			弧长 = nπr/180		在这里n就是角度数，即圆心角n所对应的弧长。
		* 
		* 弧度 换算 度 的公式推导
		* 圆的周长是 2πr  一周的弧度 = 2πr / r =====> 一周弧度 = 2π
		* 一周的圆有 360度   360° = 2π*弧度 ====> 弧度 = 180° / π   约等于 57.3°
		* 周角为 2π*弧度  平角为 π*弧度		直角为 π/2*弧度
		* ```js
			function getXY(rad) {
			return {
				x: Math.cos(rad)*R,
				y: Math.sin(rad)*R
			}
		}```
>
* 滚动的心
	* div旋转45deg
	* ::before伪元素沿X轴移动; ::after伪元素沿Y轴移动;
	* 设动画序列==>transform:scale(1--1.2)缩放 rotate(45deg)旋转;
>
* 滚屏
* js
	* 判断鼠标停留的时间是否超过一秒  鼠标点击的时间 - 开始获取的当前时间
	* 当移动时更新当前时间
	* 判断鼠标往上还是往下  监听事件 event.wheelDelta 上正下负;
	* 判断 往上第一张结束  往下最后一张结束
	* 有类名移动往上往下;
	* 删除自身类名
	* 往上给前一个兄弟节点添加类名 往下给下一个兄弟节点添加类名
	* 兄弟节点移动清空
* css
	* 1.设置移动==>100%
    * 2.父盒设置==>超出隐藏
    * 3.第一张取消移动
>
* 炫酷的鼠标跟随
* css
	* 透明度1==>1==>0;
	* 100%==>移动越来越多 scale缩放随机 rotate旋转45度
* ```js
	<script>
        /*色调*/
        var H = 0;

        setInterval(function(){
            /*色调自增*/
            H<=360 ? H++ : H=0;

        },20)

        /*字体大小*/
        var drawSize = 50;

        /*浮动库*/
        var floatArr = ["floatOne","floatTwo","floatThree","floatFour","floatFive"];

        /*获取ul*/
        var ul = document.querySelector("ul");

        /*点击事件*/
        ul.onclick = function(e){

            e = event || window.event;

                /*获取实际点击目标*/
            var target = e.target || e.srcElement;

            /*判断点击的li的话执行下面操作*/
            if(target.tagName === "LI"){

                /*获取激活点*/
                var active = document.querySelector(".active");

                /*删除自身激活点*/
                active.classList.remove("active");

                /*给实际点击的目标添加激活点*/
                target.classList.add("active");
            }

        }

    /*鼠标移动事件*/
    window.onmousemove = function(e){

        e = event || window.event;

        /*获取active*/
        var active = document.querySelector(".active"),

            /*随机播放动画名*/
        folattype = floatArr[Math.floor(Math.random()*floatArr.length)],

                    /*鼠标相距页面的位置*/
                    xPos = e.pageX,
                    yPos = e.pageY,

                    /*移动的盒子*/
                    drawEle = document.createElement("div");
                    console.log(drawEle)

        /*div属性*/
        // drawEle.className = "draw";
        drawEle.className = "draw";

        /*字体*/
        drawEle.style.fontSize = drawSize +"px";

        /*color颜色*/
        drawEle.style.color = "hsla("+ H +", 100%, 70%, 1)";

        /*移动*/
        drawEle.style.left = xPos - 25 +"px";
        drawEle.style.top = yPos - 25 +"px";

        /*动画animation*/
        drawEle.style.animation = folattype +".9s 1";

        /*图标与div*/
        drawEle.innerText = active.innerText;

        /*div与body*/
        document.body.appendChild(drawEle);

        /*炸弹定时器*/
        setTimeout(function(){
            drawEle.parentNode.removeChild(drawEle);
        },800);
    }```

        

    </script>
## css3第五天
>
### 01-字体
>
* 不同浏览器所支持的字体格式是不一样的，我们有必要了解一下有关字体格式的知识:
1. TureTpe(.ttf)格式
	* ttf字体是Windows和Mac的最常见的字体，是一种RAW格式，支持这种字体的浏览器有IE9+、Firefox3.5+、Chrome4+、Safari3+、Opera10+、iOS Mobile、Safari4.2+；

2. OpenType(.otf)格式
	* otf字体被认为是一种原始的字体格式，其内置在TureType的基础上，支持这种字体的浏览器有Firefox3.5+、Chrome4.0+、Safari3.1+、Opera10.0+、iOS Mobile、Safari4.2+；

3. Web Open Font Format(.woff)格式
	* woff字体是Web字体中最佳格式，他是一个开放的TrueType/OpenType的压缩版本，同时也支持元数据包的分离，支持这种字体的浏览器有IE9+、Firefox3.5+、Chrome6+、Safari3.6+、Opera11.1+；

4. Embedded Open Type(.eot)格式
	* eot字体是IE专用字体，可以从TrueType创建此格式字体，支持这种字体的浏览器有IE4+；

5. SVG(.svg)格式
	* svg字体是基于SVG字体渲染的一种格式，支持这种字体的浏览器有Chrome4+、Safari3.1+、Opera10.0+、iOS Mobile Safari3.2+；

	* 了解了上面的知识后，我们就需要为不同的浏览器准备不同格式的字体，通常我们会通过字体生成工具帮我们生成各种格式的字体，因此无需过于在意字体格式间的区别差异。 

[下载字体的网站](http://www.zhaozi.cn/、http://www.youziku.com/)
* 使用方法
	* 1. 把字体下载解压放到目标库里
	* 2. 在style里设置 
	* ```css
		@font-face{
            /*规定自定义字体名*/
            font-family: 'mzd';
            /*引入字体库*/
            src: url('font/mzdzt.ttf');
        }
        @font-face{
            font-family: 'yz';
            src: url('font/yz.ttf');
		}
		.p1{
            font-family: 'mzd';
            font-size: 26px;
        }
        .p2{
            font-family: 'yz';
            font-size: 26px;
        }```
>
### 02-滚动监听
* document.addEventListener("事件名称", 函数, false);
	* addEventListener里最后一个参数决定该事件的响应顺序
	* 如果为true事件执行顺序为 addEventListener ---- 标签的onclick事件 ---- document.onclick
	* 如果为false事件的顺序为 标签的onclick事件 ---- document.onclick  ---- addEventListener
```js
document.addEventListener("事件名称", 函数, false);
if(window.addEventListener){
	window.addEventListener("DOMMouseScroll",this.scroll,false);  //火狐
}
window.onmousewheel = this.scroll;   //IE  除了火狐之外 ，这种方式都能处理
```
* mousewheel除了火狐都支持 属性值:event.wheelDelta 上正下负
* 火狐Firefox 3.5+ 支持DOMMouseScroll; 属性值: event.detail  上负下正
>
* ```js
	windowAddMouseWheel();
		function windowAddMouseWheel(){
			var scrollFn = function (e){
				e = e || window.event;
				if (e.wheelDelta) {  // 判断浏览器IE，谷歌滑轮事件
					if (e.wheelDelta > 0) { // 当滑轮向上滚动时
						alert("滑轮向上滚动");
					}
					if (e.wheelDelta < 0) { // 当滑轮向下滚动时
						alert("滑轮向下滚动");
					}
				} else if (e.detail) {  // Firefox滑轮事件
					if (e.detail< 0) { 	// 当滑轮向上滚动时
						alert("滑轮向上滚动");
					}
					if (e.detail> 0) { 	// 当滑轮向下滚动时
						alert("滑轮向下滚动");
					}
				}
			}
			//给页面绑定滑轮滚动事件  火狐监听 DOMMouseScroll 事件
			if (document.addEventListener) {
			  document.addEventListener('DOMMouseScroll', scrollFn, false);
			}
			//滚动滑轮触发scrollFunc方法
			window.onmousewheel = scrollFn;
		}```
		
>
* wheelDelta可以测试滚动 `e. wheelDelta`
	* 可以判断滚动方向 但是无法判断滚动幅度
	* 方向: -120 往上滚动  ; 120 往下滚动 火狐
	* 有兼容问题,也可能是 -150往下 150往上 除了火狐的其他游览器
* animationstart - CSS 动画开始后触发
* animationiteration - CSS 动画重复播放时触发
* animationend - CSS 动画完成后触发
>
### 03-fullpage
>
* 	1 引入库的样式
*	2 .引入库依赖的包 比如jq
*	3.引入插件核心库
*	4.初始化插件
*	5.个性化配置
*	6.根据需求修改源码
### 04-H5拖拽
* 拖拽元素: 	页面中设置了draggable="true"属性的元素 <p draggable="true">这是一段可移动的段落。请把该段落拖入上面的矩形。</p> 
* 目标元素:  页面中任何一个元素都可以成为目标元素

拖拽元素
+ ondrag 			应用于拖拽元素，整个拖拽过程都会调用
+ ondragstart	应用于拖拽元素，当拖拽开始时调用
+ ondragleave	应用于拖拽元素，当鼠标离开拖拽元素时调用
+ ondragend		应用于拖拽元素，当拖拽结束时调用

目标元素
+ ondragenter	应用于目标元素，当拖拽元素进入时调用
+ ondragover	应用于目标元素，当停留在目标元素上时调用
+ ondrop			应用于目标元素，当在目标元素上松开鼠标时调用
+ ondragleave	应用于目标元素，当拖拽元素离开目标元素时调用
>
* 注意： 在拖动元素时，每隔 350 毫秒会触发 ondrag 事件。
>
### 05-百度地图
>
* ```js							
		<!-- 创建地图元素 -->
		<div id="allmap"></div>
		</body>
		</html>
		<script type="text/javascript">
			// 百度地图API功能
			var map = new BMap.Map("allmap");    // 创建Map实例
			// 初始化地图,设置中心点坐标和地图级别
			map.centerAndZoom(new BMap.Point(113.764401,34.76981), 16);
			//添加地图类型控件
			map.addControl(new BMap.MapTypeControl({
				mapTypes:[
					BMAP_NORMAL_MAP,
					BMAP_HYBRID_MAP
				]}));
			// 左上角，添加比例尺
			map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT}));	
			//左上角，添加默认缩放平移控件        
			map.addControl(new BMap.NavigationControl());    
			//右上角，仅包含平移和缩放按钮    
			map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}));        
			// map.addControl(top_left_navigation);     
			// map.addControl(top_right_navigation);   	  
			map.setCurrentCity("郑州");          		// 设置地图显示的城市 此项是必须设置的
			// map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
			var point = new BMap.Point(113.774139,34.77657);
			//添加涂层
			//自定义图标
			var myIcon = new BMap.Icon("./img/logo.png", new BMap.Size(50,37));
			var marker = new BMap.Marker(point,{icon:myIcon});  // 创建标注
			map.addOverlay(marker);               // 将标注添加到地图中
			marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
		</script>```
>
### 06-H5拖拽
>
* 拖拽元素: 	页面中设置了draggable="true"属性的元素
	* 目标元素:  页面中任何一个元素都可以成为目标元素		
	* 拖拽元素
		* ondrag 			应用于拖拽元素，整个拖拽过程都会调用
		* ondragstart	应用于拖拽元素，当拖拽开始时调用
		* ondragleave	应用于拖拽元素，当鼠标离开拖拽元素时调用
		* ondragend		应用于拖拽元素，当拖拽结束时调用
	* 目标元素
		* ondragenter	应用于目标元素，当拖拽元素进入时调用
		* ondragover	应用于目标元素，当停留在目标元素上时调用
		* ondrop			应用于目标元素，当在目标元素上松开鼠标时调用
		* ondragleave	应用于目标元素，当拖拽元素离开目标元素时调用
* event.preventDefault();取消事件的默认动作  在目标元素松开鼠标前一个指令设置取消默认,不然不生效;
>
### 07-classList
* classList 属性返回元素的类名，作为 DOMTokenList 对象
* 该属性用于在元素中添加，移除及切换 CSS 类。 
* classList 属性是只读的，但你可以使用 add() 和 remove() 方法修改它。
* 参数
	* length :返回类列表中类的数量   该属性是只读的;
	* add(class1, class2, ...) :在元素中添加一个或多个类名。如果指定的类名已存在，则不会添加 
	* contains(class) :返回布尔值，判断指定的类名是否存在。 
		* 可能值： true - 元素包已经包含了该类名; false - 元素中不存在该类名
	* item(index) :	返回元素中索引值对应的类名。索引值从 0 开始。如果索引值在区间范围外则返回 null
	* remove(class1, class2, ...) :移除元素中一个或多个类名。注意： 移除不存在的类名，不会报错。
	* toggle(class, true|false) :在元素中切换类名;
		* 参数
			* 第一个参数为要在元素中移除的类名，并返回 false。如果该类名不存在则会在元素中添加类名，并返回 true
			* 第二个是可选参数，是个布尔值用于设置元素是否强制添加或移除类，不管该类名是否存在。例如：
				* 移除一个 class: element.classList.toggle("classToRemove", false); 
				* 添加一个 class: element.classList.toggle("classToAdd", true);
			* 注意： Internet Explorer 或 Opera 12 及其更早版本不支持第二个参数。
### 08-追加元素
* appendChild() 方法在指定元素节点的最后一个子节点之后添加节点。
* innerText;--innerText特性用来修改起始标签和结束标签之间的文本的,html标签以普通字符串形式显示
* innerHTML-- 可获取或设置指定元素标签内的 html内容; html标签被游览器解析执行;
* 数组.concat(插入的内容);
* arr.push()--从后推入   arr.pop()从后删除
* arr.unshift()--从前插入 arr.shift() 从前删除;
* 数组.split(" ")用于把一个字符串分割成字符串数组;
* prop() 方法设置或返回被选元素的属性和值。注意：prop() 方法应该用于检索属性值 返回布尔值 false和ture
* 如需检索 HTML 属性，请使用 attr() 方法代替
* 如需移除属性，请使用 removeProp() 方法。
* 自己删除自己: this.parentNode.removeChild(this)
* splice(index下标,number数量,obj要添加的项目) 方法向/从数组中添加/删除项目，然后返回被删除的项目。
* $.trim() 函数用于去除字符串两端的空白字符。
* ele.getAttribute("class名") 方法返回指定属性名的属性值。可以得到class名
* ele.setAttribute("class名") 方法返回指定属性名的属性值。可以设置class名
* Document.createElement("元素名") 和 Document.createTextNode() - 创建元素节点和文本节点
* insertBefore()方法联合使用,insertBefore() 方法在节点的子节点列表任意位置插入新的节点。
* 父节点.appendChild(子节点);appendChild() 方法在节点的子节点列表末添加新的子节点。
* parseInt("数字")装换成整数
* p:nth-child(2) ==规定属于其父元素的第二个子元素的每个 p 的背景色：
* Math函数		
	* parseInt() 函数可解析一个字符串，并返回一个整数。
	* Math.ceil()   天花板函数
	* Math.floor()  地板函数
	* Math.max(x,y) 返回x,y之间最大值
	* Math.min(x,y) 返回x,y之间最小值
	* Math.random()  伪随机 范围[0.1)
	* Math.pow(x,y) 返回x值的y次方
	* Math.round(x) 四舍五入
* inner.offsetTop/offsetLeft==>父类里border不参与其中运算;
* box.offsetWidth/offsetHeight==>设置的宽高 + padding + border;
* 鼠标属性
	* 属性	当以下情况发生时，出现此事件
	* onabort	图像加载被中断
	* onblur	元素失去焦点
	* onchange	用户改变域的内容
	* onclick	鼠标点击某个对象
	* ondblclick 鼠标双击某个对象
	* onerror	当加载文档或图像时发生某个错误
	* onfocus	元素获得焦点
	* onkeydown	某个键盘的键被按下
	* onkeypress	某个键盘的键被按下或按住
	* onkeyup	某个键盘的键被松开
	* onload	某个页面或图像被完成加载
	* onmousedown	某个鼠标按键被按下
	* onmousemove	鼠标被移动
	* onmouseout	鼠标从某元素移开
	* onmouseover	鼠标被移到某元素之上
	* onmouseup	某个鼠标按键被松开
	* onreset	重置按钮被点击
	* onresize	窗口或框架被调整尺寸
	* onselect	文本被选定
	* onsubmit	提交按钮被点击
	* onunload	用户退出页面
	* onmouseover:当鼠标指针进入（穿过）元素时，改变元素的背景色
	* onmouseleave事件在鼠标移除元素时* 触发
* 阻止冒泡:e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
* 阻止默认事件:event.preventDefault();
* var target = e.target || e.srcElement; 实际点击目标
* terget.tagName ==="LI" 可以获取li元素;
* setInterval();定时器
* clearInterval(); 清除定时器;
* setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式。只调用一次;
* 绑定事件 在js中绑定多个事件用到的是两个方法:attachEvent和addEventListener, attachEvent方法  只支持IE678,不兼容其他浏览器 addEventListener方法   兼容火狐谷歌,不兼容IE8及以下
* 解绑事件 detachEvent方法  只支持IE678,不兼容其他浏览器  removeEventListener方法   兼容火狐谷歌,不兼容IE8及以下 
	* 表达式 ele.detachEvent("onclick",fn);
	* 表达式 ele.removeEventListener("click",fn);
* ele.removeEventListener()
* ele.removeChild();
* ele.remove();
* Date.now()  返回当前的毫秒数与new Date().getTime()相同;
* box.dataset	//方法获取属性 dataset : 数据集 主要用于传输数据；拿取属性不区分大小写。
* box.removeAttribute	();	//删除属性
* document.write() 方法可向文档写入 HTML 表达式或 JavaScript 代码。
* write() 与 writeln() 的区别:
	* 注意write()方法不会在每个语句后面新增一行 两个write内容会连在一起; 可以加`<br>`
	* 注意writeln()方法在每个语句后面新增一行
>

>
### 09-this事件
* 解析器在调用函数每次都会向函数内部传递一个隐含的参数==>这个隐含的参数就是this;
* 根据函数的调用方式的不同,this指向不同的调用对象;
	* 1. 以函数的形式调用时,this是指向永远都是window;
	* 2. 以方法的方式调用时,this就是调用方法的那个对象;
	* 