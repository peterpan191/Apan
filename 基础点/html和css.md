## 4.15_第一天HTML超文本标记语言
1. 注意备注  保证代码的可读性
>
2. lang='en'声明语言环境(英语)
>
3. head辅助游览器解析页面
>
4. meta标签设置网页原数据
>
5. `charset=utf-8` 指定字符集编码utf-8(优化后的全球码)
>
6. 设置关键字`<meta name="keywords" content="xxx" />`
>
7. 设置描述信息 `<meta name="description" content="xxxx" />`
        - `<title></title>`标签 设置页面标题,在浏览器头部tab当中显示
>
8. body标签设置网页主体,多个空格和换行都被当作一个一空格处理
>
9. h1-h6标题标签 通常只有一个h1标签
>
10. p段落标签 自动换行
>
11. br换行标签 
>
12. hr 滑入水平线换行标签
>
13. img图片标签  src-路径  alt图片不显示出现的文字  相对路径/绝对路径/网络路径
>
14. a超链接标签 /href跳转地址 /target:_self默认当前页面跳转  / target:_blank新的地址打开
>
15. 列表ul>li无序列表/list-style:none去掉圆点样式/ol>li有序列表 /dl>dt>dd自定义列表
>
16. 字体标签: 斜体:em/i 加粗:strong/b  上标sup/下标sub比如: `5<sup>2<sup>`  ` H<sub>2</sub>O` 下划线ins  删除线del
>
17. 转义字符: 空格&nbsp;/&#160; 小于号:&lt;/&#60; 大于号:&gt;/&#62;
>
18. 表格:table标签: align:left|center|right 表格的位置 
	* border边框 cellspacing单元格间距/cellpadding文字单元格间距  
	* tr表格行 / th表格一行  /td表格一列
	* rowspan 单元格所占据的行 colspan 单元格所占据的列
>
19. 表单:form:(action提交地址/method提交方法get|post);
	* input:(type=text/name /value默认值); 
	* input:(type:password密码输入框); 
	* input:(type:radio单选框| checked默认选中); 
	* input:(type:checkbox多选框|checked默认选中); select:(option:下拉框/设置name,value,|selected默认选中); 
	* input:(type:file长传|		multiple实现多选); textarea:(多行文本输入框/cols|rows文本框的宽高) 
	* input:(type:submit提交按钮); label:(用于包括输入框的头部和输入框使之为一体,用于单选和多选.readonly只读属性|disabled禁用);fieldset,legend实现表单的分组.
>
* 表单 
+ `<form>` 用于包括输入框,提交数据
	- action 提交的地址,暂时不用理解
	- method 提交数据的方法 get/post,如果不写,默认是get方式.
+ `<input>` 表单输入框,根据tpye的类型,表现不同的形式
	- type: text  必须 单行文本输入框
	- name: 当前表单的名称  目前必须要有,因为提交的时候后台程序需要通过name属性获取表单的内容.
	- value: xx  当前表单的内容.value是提交的结果.如果设置了vlaue,则是当前表单的默认值.
+ `<input>`: type:password  密码输入框
+ `<input>`: type:radio  单选
	- name 必须要有,这里表明当前的单选输入框为一组
	- value 必须要有,因为单选按钮提交的结果是value的值. value一般采用数字编码的形式表示.
	- checked  默认选中
+ `<input>`: type:checkbox  多选
	- name 同radio
	- value 同radio
	- checked  默认选中
+ `<select>`  option  下拉框
	- name 属性需要设置
	- value 每个option都要设置value
	- selected 默认选中
+ `<input>`: type:file  上传
	- 当选中的时候 ,实际文件并没有被上传上来
	- multiple 可以实现多选
+ `<textarea>` 多行文本输入框
	- cols /rows  文本框的宽度和高度
	- name值需要设置,value指的是标签内部的内容
+ `<input>` type:submit 提交按钮
	- value 按钮显示的内容
	- 点击后表单被提交到 form.action 配置的地址
+ `<label>` 用于包括输入框的头部和输入框 使之称为一体。多用于单选和多选。
+ readonly 只读属性，输入框内容不能更改。
+ disabled 禁用  表单的值再提交时会被舍弃。
+ `<fieldset>` `<legend>` 可以实现表单的分组。
+ get提交
	- 参数被放到地址提交,比如: /D:/abc?username=张三&pwd=123&sex=0&experience=0
	- 不安全
	- 地址栏拼接的参数长度有限,一般是<4k
	- 一般用于获取数据
+ post提交
	- 地址栏不显示提交内容,再请求体显示
	- 相对安全
	- 提交的数据量没有上限
	- 一般用于提交保存数据
```html
	<!-- action 是当前表单提交的地址 -->
	<form action="www.bufanui.com" method="get">
		<fieldset>
			<legend>基本信息</legend>
			用户名: <input type="text" readonly  name="username" value="张三"> <br>
			曾用名： <input type="text" disabled  name="oldname" value="张小三"><br>
			密码: <input type="password" name="pwd"> <br>	
			性别: 
				<label>
					男: <input type="radio" name="sex"  value="0"> 
				</label>
				<label>
					女: <input type="radio" checked  name="sex"  value="1"> <br>
				</label>
		</fieldset>
		
		<fieldset>
			<legend>补充信息</legend>
			爱好: 
			<label>
				篮球: <input type="checkbox" name="like" value="basketball">
			</label>
			<label>
				足球: <input type="checkbox" checked name="like" value="football">
			</label>
			<label>
				乒乓: <input type="checkbox" name="like" value="pingpang"><br>
			</label>

	    工作年龄: 
	    	<select name="experience">
	    		<option value="0">--无--</option>
	    		<option value="1">1年</option>
	    		<option value="2" selected>2~3年</option>
	    		<option value="3">3~5年</option>
	    	</select> <br>
    	上传头像: <input type="file" name="avatar" multiple> <br>
    	个人描述: <textarea name="desc" cols="30" rows="4">
    				我对工作有极大地热情,我喜欢写代码!
    			</textarea> <br>
		</fieldset>				
    	<input type="submit" value="提交">
	</form>
```
>
20. div自动换行用于布局;
>
21. span不自动换行,用于照顾特殊字符
>
22. 标签名 + tab ,自动补全标签
>
23. html规范 
	* html不区分大小写,但是尽量使用小写
	* html的注释不能嵌套(注释是给代码加说明,不能再页面中显示) 
	* html的标签必须完整. 
	* html标签是可以嵌套的.(嵌套的时候一定要注意缩进)
	* 标签的属性必须加双引号.
>
24. * html初始化
* ```html
	<!DOCTYPE html>
		<!-- 声明文档类型的,告诉浏览器以html5的标准去解析页面 -->
		<!-- 添加注释的方法 ctrl + / -->
		<!-- 注释用来 解释代码 ,方便你 项目的维护 -->
		<html lang="en">
		<!-- html中 大多数标签 都是成对出现的 -->
		<!-- 标签的形式: <开始标签 (标签的属性)>标签里边的内容(可以是其他标签,也可以文本)</结束标签> -->
		<!-- 标签属性: 标签的附加信息 -->
		<!-- lang="en" 英文环境 -->
	<head>
		<!-- 辅助浏览器解析页面的,这一部分内容并不会在网页当中站是 -->
		<meta charset="UTF-8">
		<!-- charset="UTF-8" 字符集编码 (优化后的全球码) -->
		<!-- meta 包含了网站的一些元信息 -->
		<meta name="description" content="河南郑州不凡学院开设UI设计培训课程和web前端开发课程。北京一线讲师现场教学，学习就等于工作。做自己擅长的事，分享知识与快乐！">
		<!-- 保存网站的 描述信息 搜索结果的内容 -->
		<meta name="keywords" content="不凡学院,郑州UI培训,河南郑州UI设计培训,河南郑州前端开发培训,郑州H5培训,郑州WEB前端培训,郑州HTML5前端培训,郑州软件培训">
		<!-- 网站的关键词,百度搜索结果的标题 -->
		<!-- seo优化,搜索引擎优化 -->
		<title>document</title>
		<!-- 展示在tab蓝当中 网站的标题 -->
	</head>
	<body>
		<!-- 网站的 主体 ,这里边的内容会在网页当中展示 -->
		<!-- 回车换行 被当做了一个空格处理 
		多个空格  也被当作一个空格处理,回车,空格都是不敏感的 -->
		今天天气很哈啊
		不凡学院
	</body>
	</html>
	
	
>
25. 内联框架 iframe 小网页版
>
>
## 4.16_第二天CSS层叠样式表
>
1. 书写位置: 行内样式(耦合,少使用)|内部样式(测试使用,只能当前页面使用) |外部样式(上线使用,复用,需要引入)
>
2. 选择器 简单选择器(标签选择器/id选择器(#)/class选择器(.)); 复杂选择器(交集选择器(.)/并集选择器(,)/后代选择器(空格)/通配符(*));
>
3. css继承性 a标签不会继承父类颜色
>
4. css层叠性,只有一个样式生效
>
5. css权重问题: 行内样式(1000)>id选择器(100)>class(10)>标签选择器(1)>通配符>继承性; 权重一样-选择器一样遵循就近原则,
>
6. css单位 px像素;em字体 %百分比 缩进:text-indent:2em;
>
7. 颜色: blue  yellow  pink  purple  red  等/十六进制(#);rgba(三原色+透明度)
>
8. css常用属性:
	| 属性名称 | 属性作用 | 值 |
	| ------ | ------ | ------ |
	| width / height  | 宽高(块状单位有效) | px 百分比 em等 |
	| background-color | 背景颜色 | color |
	| cololr | 字体颜色 | color |
	| font-size | 字体大小 | px  em等 |
	| text-align | 文字对齐方式 | center left right  
	| text-index | 首行缩进 | px  em等 |
	| font-family | 字体 | 微软雅黑	Microsoft YaHei、黑体 SimHei、Arial等 |
	| font-weight | 字体加粗 | 100-900.加粗700-900/ bolder lighter normal |
	| font-style | 字体样式 | Italic 斜体 / normal 正常 |
	| line-height | 行高 | 单位： px  /倍数 /  百分比 ;- 设置文字的行间距- 单行文字垂直居中 ：行高=父类盒子高度  |
	| font | 字体缩写 | `font:italic bolder 20px/1.2 'Arial','Microsoft YaHei'   |
>
9. 背景图片:
	| 属性名称 | 属性作用 | 值 |
	| ------ | ------ | ------ |
	| background-color  | 背景图片颜色 | color |
	| background-image  | 背景图片 | url(‘1.png’);  |
	| background-repeat  | 平铺方式 | repeat 、 no-repeat  、 repeat-x 、 repeat-y  |
	| background-position  | 图片位置 | left、 right、 top、 bottom、 center |
	| background-attachment  | 背景滚动 | scroll、fixed (注意：基于body的定位） |
	| background  | 简写（顺序不能错） | background: green url(1.jpg) no-repeat center center fixed; |
>
10. 回顾:标签的表现形式:
	* 块状标签  独占一行，宽高有效。 比如： div   p  h1~h6  form  table   hr  br  ul>li   ol>li dl>dt/dd 
	+ 行内块标签  可以同一行显示，宽高有效。  比如: input select  img   button 
	+ 行内标签  可以同一行显示，但是宽高无效， margin-top/margin-bottom 无效。。  比如： a   span   strong  del ins  em  i  b  等字体标签
	+ 1.display：inline-block 标签的换行符会被显示为空格
>
11. 属性与属性之间空格隔开
>
12. title 标签的描述信息 鼠标悬浮的时候  会出现
>
>
## 4.17_第三天
01. 盒子模型,(内容,padding内边距,border表框,margin外边距)
>
02. 影响盒子大小的因素:border;padding;display,block/inline/inline-block/none隐藏元素;  visibility占据位置
>
03. overflow: visible默认值;scroll添加滚动条;auto根据需要添加滚动条; hidden隐藏超出部分
>
04. 文档流 块独行,行同行,自上而下
>
05. 浮动: float: none不浮动| left左浮动| right右浮动 脱离文档流 right会改变标签的前后顺序
>
06. 清除浮动影响:
	* 1 严格计算父类盒子高度; 
	* 2.clear: left/right/both 
	* 3.在浮动元素的最后面追加一个空的div,设置clear:both即可清除浮动的影响。
	* 
>
07. 补充:1.display：inline-block 标签的换行符会被显示为空格; 2.float:right  会改变标签的前后顺序。
>
08. 定位:position: static默认 | relative相对定位 | absolute绝对定位 | fixed固定定位  子绝父相
>
09. z-index: 默认为0;值越大优先级越高
>
10. 规避脱标流 
>经验： 一般布局采用标准流，如果布局实现不了用浮动。定位一般用于解决小范围的某个标签的位置。
	能用标准流（没有脱标）解决就不用浮动
	解决不了就考虑有浮动（页面布局类型，“不完全脱标”）
	浮动解决不了用定位（小图标，完全脱标，不影响内容）
>
11. title 标签的描述信息 鼠标悬浮的时候  会出现
>
12. margin-top 垂直方向上会出现重叠现象,谁大谁生效 
>
13. margin重叠-嵌套崩塌:
	* 1 给父类  增加  overflow:hidden;
	* 2.给父类盒子 加一个 极小的padding
>
14. 显示和隐藏 display:none  || visibility: hidden 隐藏了还占位置
>
15. margin-top/margin-bottom 对于行内元素无效。
>
16. 缩写:border:1px solid red  边框: border-widht:  border-style border-color
>
17. border-style: none (默认)  /  dashed(虚线) / dotted（点）  / solid(实线)  /  double(双实线)
>
18. 也可以单独设置单条边框:例:border-right:1px solid red;
>

## 04-emmit快捷键
* 基本语法
1. 后代: nav>ul>li
>
2. 兄弟: div+p+bq
>
3. 上级: 缩写：div+div>p>span+em^bq  || 上两级div+div>p>span+em^^bq
> 
4. 分组: div>(header>ul>li*2>a)+footer>p || 开始同级 (div>dl>(dt+dd)*3)+footer>p
>
5. 乘法: ul>li*5
>
6. 自增:$ 缩写：属性自增 ul>li.item$*5 || 属性自增+内容自增 h$[title=item$]{Header $}*3  || 属性自增 ul>li.item$$$*5   || 属性n到n自增 缩写：ul>li.item$@3*5 
>
7. 属性自减 缩写：ul>li.item$@-*5 
>
8. ID和类属性: 缩写：#header
>
9. class类名缩写：.title
>
10. id+class类名: 缩写：form#search.wide //`<form id="search" class="wide"></form>`
>
11. 多个clas类名: 缩写：p.class1.class2.class3
>
12. 自定义属性:缩写：td[rowspan=2 colspan=3 title] //`<td rowspan="2" colspan="3" title=""></td>`
>
13. 自定义属性: p[title="Hello world"] 
>
14. 自定义属性: [a='value1' b="value2"] //`<div a="value1" b="value2"></div>`
>
15. 文本: 缩写：a{Click me}  || 多个文本p>{Click }+a{here}+{ to continue} 
>
16. 隐式标签: .class || em>.class  || ul>.class  ||table>.row>.col
>
* HTML标签语法:
>
1. 所有未知缩写会转换成标签 hangge //`<hangge></hangge>`
>
2. 标签缩写 a
>
3. a:link: `<a href="http://"></a>`
>
4. meta:utf: `<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />`
>
5. meta:win: `<meta http-equiv="Content-Type" content="text/html;charset=windows-1251" />`
>
6. meta:vp: `<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />`
>
7. meta:compat: `<meta http-equiv="X-UA-Compatible" content="IE=7" />`
>
## 05-简单的问题
1. html中title属性和alt属性的区别？
* ```html
	1.<img src="#" alt="alt信息" />

	//1.当图片不输出信息的时候，会显示alt信息 鼠标放上去没有信息，当图片正常读取，不会出现alt信息

	2.<img src="#" alt="alt信息" title="title信息" />

	// 2.当图片不输出信息的时候，功能是提示会显示alt信息 鼠标放上去会出现title信息

	//当图片正常输出的时候，不会出现alt信息，鼠标放上去会出现title信息
	
	//title属性有一个很好的用途，即为链接添加描述性文字，特别是当连接本身并不是十分清楚的表达了链接的目的
	```
2. 垂直居中有哪些方法？
	* 单行文本的话可以使用height和line-height设置同一高度。
	* position+margin：设置父元素:position: relative;，子元素height: * 100px; position:absolute;top: 50%; margin: -50px 0 0 0;（定高）
	* position+transform：设置父元素position:relative,子元素：* position: absolute;top: 50%;transform: translate(0, -50%);（不定高）
	* 百搭flex布局(ie10+)，设置父元素display:flex;align-items: center;（不定高）
