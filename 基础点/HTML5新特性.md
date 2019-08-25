# HTML5
>
## 一.
>
### 01-简介
>
* H5是一整套技术集合: 包括HTML5,CSS3,javasrcipt,API在内的一套技术集合
> 
### 02-语法规范
>
* 特点: 简洁,宽松
    * 单标签不用写关闭符号 <input>  </br>
	* 双标签省略结束标签 <div></div>,可以但是不推荐
    * html、head、body、colgroup、tbody(可以不写)可以完全省略
>
### 03-语义标签
>
#### 01-语义标签推出的理由
>
* Web游览器之间的兼容性低(IE);
* 怎么看待html的语义化
>
#### 02-语法的改变
>
* DOCTYPE声明
* 指定字符串编码
* 可以省略结束标记的元素
* 具有boolean值的属性（disabled禁用，checked复选框);
* 省略引号
>
#### 03-新增的结构化(语义化)标签元素
> `Section、article、aside、header、hgroup、footer、nav、figure`;
* section元素
    * 表示页面中的一个内容区块,比如章节、页眉、页脚或页面的其他部分。可以和h1、 h2……等元素结合起来使用，表示文档结构。
>
* article元素 
    * 表示页面中一块与上下文不相关的独立内容。比如一篇文章。
>
* aside元素
    * 表示article元素内容之外的、与article元素内容相关的辅助信息。
>
* header元素
    * 表示页面中一个内容区块或真个页面的标题。
>
* hgroup元素
    * 表示对整个页面或页面中的一个内容区块的标题进行组合
>
* footer元素
    * 表示整个页面或页面中一个内容区块的脚注。一般来说，他会包含创作者的姓名、创作日期以及创作者的联系信息。
>
* nav元素
    * 表示页面中导航链接的部分
>
* figure元素
    * 表示一段独立的流内容，一般表示文档主体流内容中的一个独立单元。
    * 比如：https://tympanus.net/Development/HoverEffectIdeas/index2.html
 >
 #### 04-新增的"花样"标签元素
>
 * `video、audio、canvas、embed、mark、progress、meter、time、ruby、rt、rp、wbr、command、details、datalist、datagrid、keygen、output、source、menu`
 >
 #### 05-新增的input类型
 >
 * `email、url、number、range、color`
 >
 #### 06-废除的标签(html是骨架,尽量不要有自己的样式,样式交给css)
>
		 能使用CSS替代的basefont、big、center、font、s、tt、u、strong、em、下划线、打折线等
		 不再使用frame框架 （用iframe代替）
		 只有部分浏览器支持的元素
		 其他被废除的元素

>
#### 07-新增和废除的标签属性
*	新增的标签属性
    *	表单内标签相关的属性
    *	链接相关的属性
    *	其他属性
>
*	废除的标签属性
>在HTML 4中使用的属性|使用该属性的元素|在HTML 5中的替代方案
>
> rev	| link、a | rel
>
> charset	| link、a | 在被链接的资源的中使用HTTP > Content-type头元素
>
> shape、coords | a | 使用area元素代替a元素
>
> longdesc | img、iframe | 使用a元素链接到校长描述
>
> target | link | 多余属性，被省略
>
> nohref | area | 多余属性，被省略
>
> profile	| head | 多余属性，被省略
>
> version	| html | 多余属性，被省略
>
> name | img | id
>
> scheme | meta | 只为某个表单域使用scheme
>
> archive、chlassid、codebose、codetype、declare、standby | object | 使用data与> typc属性类调用插件。需要使用这些属性来设置参数时，使用param属性
>
> valuetype、type	| param	| 使用name与value属性，不声明之的MIME类型
>
> axis、abbr | td、th	| 使用以明确简洁的文字开头、后跟详述文字的形式。可以对更详细内容使用title属性，来使单元格的内容变得简短
>
> scope | td | 在被链接的资源的中使用HTTP Content-type头元素
>
> align | caption、input、legend、div、h1、h2、h3、h4、h5、h6、p | 使用CSS样式表替代
>
> alink、link、text、vlink、background、bgcolor | body | 使用CSS样式表替代
>
> align、char、charoff、height、nowrap、valign | tbody、thead、tfoot | 使用CSS样式表替代
>
> align、bgcolor、char、charoff、height、nowrap、valign、width | td、th | 使用CSS样式表替代
>
> align、bgcolor、char、charoff、valign | tr | 使用CSS样式表替代
>
> align、char、charoff、valign、width	| col、colgroup	| 使用CSS样式表替代
>
> align、border、hspace、vspace | object | 使用CSS样式表替代
>
> clear | br | 使用CSS样式表替代
>
> compace、type | ol、ul、li | 使用CSS样式表替代
>
> compace	| dl | 使用CSS样式表替代
>
> compace	| menu | 使用CSS样式表替代
>
> width | pre	| 使用CSS样式表替代
>
> align、hspace、vspace | img	| 使用CSS样式表替代
>
> align、noshade、size、width	|hr	| 使用CSS样式表替代
>
> align、frameborder、scrolling、marginheight、marginwidth | iframe | 使用CSS样式表替代
>
> autosubmit | menu	
>
#### 08-新增的全局属性
>
* contentEditable属性  单独某一个标签的属性 可以使内容能被编辑
>
* designMode属性让页面所有的标签都可以被编辑 比如div、p、h1等等
>
* hidden属性 隐藏
>
* tabindex属性  (让标签获取到焦点)
>
## 二.
### 01-兼容处理
* CSS hack
    * (我们在测试ie 的兼容的时候，有一个叫做ietester 的软件，这个软件可以模拟ie6-ie11)
     在不支持HTML5新标签的浏览器里，会将这些新的标签解析成行内元素(inline)对待，所以我们只需要将其转换成块元素(block)即可使用，但是在IE9版本以下，并不能正常解析这些新标签，但是却可以识别通过document.createElement('tagName')创建的自定义标签，于是我们的解决方案就是将HTML5的新标签全部通过document.createElement('tagName')来创建一遍，这样IE低版本也能正常解析HTML5新标签了，在实际开发中我们更多采用的是通过检测IE浏览器的版本来加载三方的一个JS库来解决兼容问题。
* lte：就是Less than or equal to的简写，也就是小于或等于的意思。
* lt ：就是Less than的简写，也就是小于的意思。
* gte：就是Greater than or equal to的简写，也就是大于或等于的意思。
* gt ：就是Greater than的简写，也就是大于的意思。
* !： 就是不等于的意思，跟javascript里的不等于判断符相同
* 注意：在非IE浏览器中是看不到效果的
>
## 三.
>
### 01-表单
>
#### 01-输入类型(表单类型，表单元素，表单属性,表单事件)
* email 输入email格式
* tel 手机号码  
* url 只能输入url格式
* number 只能输入数字
* search 搜索框
* range 范围 滑动条
* color 拾色器
* time	时间
* date 日期 不是绝对的
* --datetime 时间日期(移动支持)
* month 月份
* week 星期
* 部分类型是针对移动设备生效的，且具有一定的兼容性，在实际应用当中可选择性的使用。
>
#### 02-表单元素（标签）
>
* <datalist> 数据列表  自动补全
	* 实际开发中：需要自动补全的内容列表项可能很多，不可能挨个展示在页面中，一般是通过ajax局部页面刷新技术实现的。
* 与input 配合使用
>
#### 03-4.3表单属性
>
* placeholder 占位符
>
* autofocus 获取焦点
>
* multiple 文件上传多选或多个邮箱地址 
> 
* autocomplete 自动完成，用于表单元素，也可用于表单自身(on/off)
>
* form 指定表单项属于哪个form，处理复杂表单时会需要 一般一个页面只有一个form
>
* novalidate 关闭验证，可用于<form>标签
>
* required 必填项
>
* pattern 正则表达式 验证表单
>
* 手机号:<input type="tel" name="tel" required="required"       pattern="^(\+86)?1[3,5,8](\d{9})$">
>
* formaction应用于提交按钮上，如：<input type="submit" formaction="xxx.action">
>
#### 04-表单事件
* oninput 用户输入内容时触发，可用于移动端输入字数统计
* oninvalid 验证不通过时触发
>
>
### 02-css hack
* <p contentEditable="true"></p>一段可编辑的段落：
>
* <input type="text" tabindex="1">带有指定 tab 键顺序的链接
>
* document.designMode 控制整个文档是否可编辑。有效值为 “on”和 “off”。根据规范，这个属性是默认为 “off”。
>
### 03-seo优化
* <!-- 2017 9月份   百度清风算法:对于网站恶意堆叠关键词 会降级 -->
		<!-- seo优化 -->
		<!-- 网站描述,会在百度的搜索结果中 -->
		<meta name="description" content="河南郑州不凡学院开设UI设计培训课程和web前端开发课程。北京一线讲师现场教学，学习就等于工作。做自己擅长的事，分享知识与快乐！">
>
* <!-- 关键词: 百度搜索 哪些词 容易被抓取 -->
		<meta name="keywords" content="不凡学院,郑州UI培训,河南郑州UI设计培训,河南郑州前端开发培训,郑州H5培训,郑州WEB前端培训,郑州HTML5前端培训,郑州软件培训">
>
* <title>[官网] 不凡学院_河南郑州UI设计培训_河南郑州前端开发培训_郑州软件开发</title>
>
* <!-- 1. 关键词很重要  根据经验,title 目前应该比 keywords 权重高
			 2. 注意清风算法
			 	a) 在标题<head>部分不能随意堆叠关键词
			 	b) img不能alt堆叠关键词
			 	c) 可以在页面的内容的适当部分体现关键词
			 	d) logo 一定要写关键词
		 	 3. 注意网站链接(外链 内链)
		 	 4. 优质内容 原创内容 体现关键词
		 	 5. 更新 经常更新
		 -->
>
* Seo是前端开发最重要也最需要注意的一个事项，怎么实现一个页面能更好的支持浏览器搜索，怎么使排名靠前
>
1.	注意：h1标签一个页面只有一个，搜索引擎对h1标签的权重很大。
>
2.	Description和keyword 
>
3.	在页面中尽量多的地方显示当前页面的关键词 比如写到alt里面
>
4.	善用a标签和img，如果只展示图片，不展示内容，用 text-indent:-90000px,logo
>
5.	Class命名很重要，百度搜索权重很大
>
* 怎么优化网页的seo?
>
1. keyword 要设置好
>
### 04-多媒体
>
* 属性
	- currentTime 视频播放的当前进度、
	- duration:视频的总时间
	- paused:视频播放的状态
>
* 方法
	- `load()` 重新加载音频/视频元素
		+ 语法: `audio|video.load()`
		+ 用于在更改来源或其他设置后对音频/视频元素进行更新
	- `多媒体名.play()` 播放
	- `多媒体名.pause()` 暂停
	- 更多精彩请自行查阅 [W3](http://www.w3school.com.cn/tags/html_ref_audio_video_dom.asp)
>
* 事件
	- oncanplay: 事件在用户可以开始播放视频/音频（audio/video）时触发。
	- ontimeupdate: 通过该事件来报告当前的播放进度.
	- onended: 播放完时触发
    - controls - 带有浏览器默认控件的 video 元素
>
* 全屏：video.webkitRequestFullScreen()
* ```js
    *       function (){
				if(ifFullscreen()){
					//退出全屏必须使用 document的api
					if (document.exitFullscreen) {
						document.exitFullscreen();
					}else if (document.webkitCancelFullScreen) {
						document.webkitCancelFullScreen();
					}else if (document.mozCancelFullScreen) {
						document.mozCancelFullScreen();
					}
				}else{
					// 开启全屏 需要作用到元素上面
					if (box.requestFullscreen) {
						box.requestFullscreen();
					}else if (box.webkitRequestFullscreen) {
						box.webkitRequestFullscreen();
					}else if (box.mozRequestFullscreen) {
						box.mozRequestFullscreen();
					}else{
						alert("sorry,无法全屏");
					}
				}
			}
			// 判断是否是全屏
			function ifFullscreen(){
				return document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || false;
			}```
>
* 音频视频
    * autoplay 自动播放
    * controls 是否显不默认播放控件
    * loop 循环播放
    * preload 预加载 同时设置autoplay时此属性失效
>
* 视频
    * width 设置播放窗口宽度
    * height 设置播放窗口的高度
>
>
## 四.DOM扩展
>
> 
### 01-H5新选择器
>
* document.querySelector();  单个选择器 只选择第一个符合条件的元素
> 
* document.querySelectorAll();  选择符合条件的元素的集合
>
### 02-Java基础语法
* Ssh     struts(1.X  2.X)   spring  hibernate 复杂 (老)
>
* Ssm	  struts  sping（框架之王） ibatis  mybatis  简单(新)
>
* SpringMVC   spring （很好用，但是出现的晚啦！ 自己干活用）
>
* 前端：重复的轮子特别多。有甄别能力。
	* 不是越新越好，也不是越简单越好，真正要看市场哪个占用率高。
    * 比如：angular.js 本来是一统江湖，google认为angular.js难度高，坡度大，不适合新手，于是就you除了个angular.js2(重做)，  这个时候出现了facebook ，react.js 和ng平分市场。
    * 比如vue.js   weex（阿里的）
>
### 03-操作类名
>
* // **以往操作类名**
	1. 已知元素类名   ele.className = "xxx xxxx"   ele.setAttribute("class","xxx xxx");
	2. 未知  封装函数
	3. jq addClass removeClass
	4. 作类名新方法: classList    ele.classList.add()/remove()/toggle()/contains() 只能操作单个类名
    * contains用法;
    * ```js
        btns[3].onclick = function (){
				var status = pEle.classList.contains("bg");
				console.log(status)
				if(status){
					pEle.classList.remove("bg");
				}else{
					pEle.classList.add("bg");
				}
			}``` 
>
* Node.classList.add('class') 添加class
>
* Node.classList.remove('class') 移除class
>
* Node.classList.toggle('class') 切换class，有则移除，无则添加
>
* Node.classList.contains('class') 检测是否存在class
>
### 04-自定义属性
>
*   在HTML5中我们可以自定义属性，其格式如下data-*=""，例如data-info="我是自定义属性"，通过Node.dataset['info'] 我们便可以获取到自定义的属性值。
>
*   Node.dataset是以类对象形式存在的
>
*   当我们如下格式设置时，则需要以驼峰格式才能正确获取
>
*   data-my-name="mm"，获取Node.dataset['myName']
>
### 05-存储
* localStorage
    * localStorage.getItem(key):获取指定key本地存储的值
    * localStorage.setItem(key,value)：将value存储到key字段
    * localStorage.removeItem(key):删除指定key本地存储的值
>
* 获取本地数据库: var userArr = JSON.parse(localStorage.getItem("userArr")); 把数据库获取的值由json字符串转化为json对象
>
* localStorage.setItem("userArr",JSON.stringify(userArr));将数据添加到数据库;   
>
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
>
## canvas 画布
>
### 创建画布
>
1. 页面: 
```html
 <!-- 1. 不能再css中声明canvas的宽和高 内容会变形 -->
    <canvas class="cvs" width="500" height="500">
        您的浏览器不支持canvas!
    </canvas>
```
>
2. js 获取cvs
```js
var cvs = document.querySelector('.cvs');
```
>
3. js 获取上下文对象
```js
var ctx = cvs.getContext('2d');
```
>
4. 执行绘画
```js
    // 开启路径
    ctx.beginPath();
    // 落笔
    ctx.moveTo(100,100);
    // 划线
    ctx.lineTo(300,100);
    ctx.lineTo(250,250);
    ctx.lineTo(100,100);
    // 描边(stroke) 还是填充(fill)
	// ctx.fill();
	// ctx.fillStyle = 'green';
    ctx.strokeStyle = 'red';
    ctx.stroke();
    // 闭合路径
    ctx.closePath();

```
>
### 02-面向对象画小球动画
>
```js
<!-- 1. 不能再css中声明canvas的宽和高 内容会变形 -->
    <canvas class="cvs" width="600" height="600">
        您的浏览器不支持canvas!
    </canvas>

// 1.获取cvs
var cvs = document.querySelector('.cvs');
// 2. 获取上下文对象
ar ctx = cvs.getContext('2d');
// 3.执行绘画  eAngle单位是弧度
// ctx.arc(x,y,r,sAngle,eAngle,counterclockwise);
        
function Ball(x,y,r,cvs){
    this.x = x;
    this.y = y;
    this.r = r;
    this.cvs = cvs;
    this.ctx = cvs.getContext('2d');
    this.init();
}
Ball.prototype = {
    init: function(){
        // 初始化 运动的向量 
        this.stepX = this.rdStep();
        this.stepY = this.rdStep();
        this.ctx.fillStyle = this.rdColor();
        this.draw();
        this.play();

    },
	// 执行绘画
    draw: function(){
        this.ctx.beginPath();
        this.ctx.moveTo(this.x,this.y);
        this.ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
        this.ctx.fill();
        this.ctx.closePath();
    },
    play: function(){

        setInterval(()=>{
            // 1.清除之前的记录
            this.ctx.clearRect(0,0,this.cvs.width,this.cvs.height);
                   
            // 修正step
            if(this.r+this.x>this.cvs.width){
                this.stepX = -1*Math.abs(this.stepX);
            }
            if(this.r+this.y>this.cvs.height){
                this.stepY = -1*Math.abs(this.stepY);
            }
            if(this.x<this.r){
                this.stepX = Math.abs(this.stepX);
            }
            if(this.y<this.r){
                this.stepY = Math.abs(this.stepY);
            }
            // 2.改变x,y
            this.x += this.stepX;
            this.y += this.stepY;
            // 3. 执行绘画
            this.draw();
        },17)
    },
	// 随机颜色
    rdColor(){
        // 0-255
        function rd(){
            return Math.floor(Math.random()*256);
        }
        return 'rgb('+rd()+','+rd()+','+rd()+')';
    },
    //随机方向
    rdStep(){
        return Math.floor(Math.random()*11);
    }
}


var ball = new Ball(0,0,50,cvs);
        // ball.play();

        // for(var i = 0 ; i < 30 ; i ++){
        //     new Ball(0,0,30,cvs);
        // }

```