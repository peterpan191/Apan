# javascript
>
## 一.js基础_第一天
>
### 01-js发展历程
>
* 全称 javaScript  (js)
* w3c标准
* js 组成  ECMAscript * dom + bom
* ajax 异步
>
### 02-js引入
>
* 可以写在head标签里,也可以在body里边所有标签的末尾
* 外部引入(外链式)
* 内部书写(内嵌式)
* js输出内容
	* alert() 页面弹出窗口
	* console.log()  控制台打印
	* document.write()
	* prompt() 用户录入信息
>
### 03-js变量
>
* 存储数据的容器 
* 运行期间 可以改变
* 变量名 命名规则
* 定义(声明)变量 var 用于给数据开辟内存空间
	* var age = 20; number
	* var name = ''; string
	* var sex = true/false
* 数据类型不同 "="为赋值运算符
* 变量的命名必须是  字母 数字  _   $
	* 由字母,数字,下划线,$组成
	* 不能以数字开头
	* 不能是 js 中的关键字和保留字
	* 严格区分大小写
	* 驼峰命名法(firstName,getStyle)
	* 见名知意
>
### 04-数据类型
>
* 基本数据类型
	* 字符串 String 
		* 字符串需要使用引号引起来，使用双引号或单引号都可以，但是不要混着用
		* 引号不能嵌套：双引号里不能再放双引号，单引号里不能再放单引号。但是单引号里可以嵌套双引号。
	* 数字 Number
		* 整数和浮点数（小数）
	* 布尔值 boolean
		* 包括 true 和 false
		* 通常用在流程控制语句，选择判断语句
		* false 值
			* 数字 0
			* NaN
			* " "，空字符串
			* false
			* undefined
			* null
	* undefined 声明了没有被赋值
	* null 一个空对象
* 复杂数据类型
	* object
	* 数组
	* 函数
>
### 05-判断数据类型
>
* typeof;
* isNaN();
	* 是一个特殊的数字，表示Not a Number，非数值
	* console.log(NaN == NaN); // false  面试:
	* 1、表示不是数字，但是其实它是一个特殊的数字（NaN：Not a Number）
	* 2、当运算操作符错误的时候，一般会得到 NaN
	* 3、NaN 具有传染性，即 NaN 参与任何运算，结果都为 NaN
	* 4、NaN 与任何数值都不相等
* instanceof 判断某个某个对象是某个构造函数的实例对象
>
### 06-数据类型的转换
>
* xx==>字符串 string
	* number==> string + 拼接的作用 = 123+"";
	* null ==> string = null+"";
	* undefined==> 字符串 = undefined+"";
* xx==>数字number 类型
	* Number() 例Number(null) / Number(undefined) / Number('123.99')
* xx==>boolean
	* 
* parseInt() 转换为整数
	* 转换规则：从第一个非空白字符（空格、换行、tab）开始转换，直到遇到一个非数字字符为止。
* parseFloat() 转换成浮点数
	* 从第一个非空白字符（空格、换行、tab）开始转换，直到遇到一个非数字字符为止
	* 遇到的第一个小数点有效，第二个小数点就无效了
>
### 07-比较运算符
* 隐式转换
* == 和 === 的区别
	* = 赋值
	* == 等于只比较数值,不比较类型
	* === 严格等于,数值和类型全等才行
* 比较规则
>
### 08-算术运算符
>
* 加 + 
	* `+` 数字类型相加==> 数字求和
	* number类型+ string类型 ==> 拼接 string类型
	* string类型 直接拼接
	* 1.如果操作数都是数值，则执行常规的加法运算
	* 2.如果有一个操作数是 NaN，则返回 NaN
	* 3.Infinity + Infinity = Infinity
	* 4.(-Infinity) + (-Infinity) = -Infinity
	* 5.Infinity + (-Infinity) = NaN
	* 6.两个都是字符串，则拼接字符串
	* 7.一个数值，一个字符串，则现将数值转为 String 类型，然后拼接字符串
	
* 减 - 
	* number-字符串number可以把stirng转换为number运算
	* 1.如果操作数都是数值，则执行常规的减法运算
	* 2.如果有一个操作数是 NaN，则返回 NaN
	* 3.Infinity - Infinity = NaN
	* 4.(-Infinity) - (-Infinity) = NaN
	* 5.Infinity - (-Infinity) = Infinity
	* 6.-Infinity - Infinity = -Infinity
	* 7.一个数值，一个数字字符串，则先将字符串变为数字,再相减 (13-'2')
* 乘法 *
	* console.log(3*(5-2)); // 9
	* 1.如果操作数都是数值，则执行常规的乘法运算，如果结果超过 JS 数值范围，则返回 Infinity 或者-Infinity
	* 2.NaN 参与乘法运算，则结果返回 NaN
	* 3.Infinity*0，返回 NaN
	* 4.Infinity 与非 0 操作数运算时，结果返回 Infinity 或者-Infinity。取决于有符号操作数的符号。
	* 5.Infinity * Infinity，结果是 Infinity
	* 6.如果有一个操作数不是数值，那么在参与运算前会先对操作数执行 Number()将其转化为数值，再应用上面的规则
* 除法 /
	* console.log(3/0);  // Infinity  无限大
	* 1.如果操作数都是数值，则执行常规的除法运算，如果结果超过 JS 数值范围，则返回 Infinity 或者-Infinity
	* 2.NaN 参与除法运算，则结果返回 NaN
	* 3.Infinity / Infinity，结果为 NaN
	* 4./  0 / 0， 结果为 NaN
	* 5.如果是非 0 的有限数被 0 除，则结果是 Infinity 或者-Infinity，取决于有符号操作数的符号
	* 6.如果是 Infinity 被任何非 0 整数值除，则结果是 Infinity 或者-Infinity
	* 7.如果有一个操作数不是数值，那么在参与运算前会先对操作数执行 Number()将其转化为数值，再应用上面的规则
* 取余 %
	* 1.如果操作数都是数值，则执行常规的取余运算
	* 2.如果被除数是无穷大值，而除数是有限大值，结果为 NaN
	* 3.如果被除数是有限大值，除数是 0，结果为 NaN
	* 4.被除数是 0，结果为 0
	* 5.如果有一个操作数不是数值，那么在参与运算前会先对操作数执行 Number()将其转化为数值，再应用上面的规则
* 优先级 有()先计算()里边的
>
* ```javascript
		//利用空的字符串转换为字符串/123
	result = 123+"" 
	//"+"的拼接作用/helloworld
	result = "hello"+"world"  
	//1和2先进行加法运算,在拼接字符串"3"/33
	result = 1+2+"3"
	//会把2先转换为字符串在进行运算/"+"在这是拼接的作用 /123
	result = "1"+2+3                                       
	console.log("result ="+result);
	console.log(typeof(result));
	//减法运算/95
	result = 100-5;
	//会将boolean先转换为number/99
	result = 100-true;
	//会先将字符串转换为number/99
	result = 100-"1";
	//乘法
	result = 2*4;
	//除法
	result = 2/4;
	//先将字符串转换为number
	result = "4"-0
	//取余/取模
	// result = 5 % 2;
	<!-- 分割 -->
	//无变化
	a = +a;
	//成负数
	a = -a;
	//会先将boolean值转换为number
	a = +true;
	console.log(a);
	//会先将boolean值转换为number
	a = -true;
	//先将字符串转换为number
	1```
>
### 09-js输出内容
>
* 注意: 输出的内容,必须用''/""包括,单引号双引号都可以.
* ""内部的双引号需要用转义字符\来转义
* 1.console.log('') 控制台输出,一般用于调试代码
* 2.alert('xxx') 弹出窗,可用于用户错误提示(很少),或者用于代码调试
* 3.confirm()  确认对话框 (浏览器自带,一般也很少用)
* 4.prompt('请输入姓名') 录入信息对话框
* 5.write 往页面输出内容,(也不常用)
* confirm('你好吗?');
* prompt('请输入用户名?');
>
### 10-注释
* html的注释
	* <-- -->
* css的注释
	* /* */
* js的注释,单行注释/多行注释
	* 快捷键 ctrl+/
	* 单行注释 //
	* 多行注释 /* */
>
### 11-自增自减运算符( ++ --)
* 变量++ 后++ , 先取值再加 1 , 表达式的结果(值)是 变量+1 之前的值 ,但是此时 变量 已被 加 1
* ++变量 先++ , 先加 1 再取值 , 表达式的结果(值)是 变量+1 之后的值
* 功能(常用) : 都实现变量的 自动加 1(只是表达式结果不一样而已 ,并不影响实现变量加 1)
* a++;  先参与运算 再执行++  ++a;  先执行++  再参与运算
* --同理
>
>
>
## 二.js基础_第二天
>
### 01-Date对象用法(内置对象)
* 获取当前时间对象 var date = new Date();
* 获取年  date.getFullYear();
* 获取月 date.getMonth();
* 获取日 date.getDate();
* 获取星期 date.getDay();
* 获取时 date.getHours();
* 获取分 date.getMinutes();
* 获取秒 date.getSeconds();
* 获取毫秒 date.getMilliseconds();
* new Date() 当前时间
* 获取当前时间距离1970年1月1日0时的毫秒数 date.getTime();
* Date对象间的运算 两个时间对象相减，得到的是两个对象间相差的毫秒数
* 求每天是这一年中第几天
* ```javascript
	// 输入某年某月某日，判断这一天是这一年的第几天？（闰年）
		// （四年一闰，百年不闰，四百年在闰）
		// 只有在闰年的时候366天  在2月29天多一天
		// 其余的时间2月都是28
		// 1.是否是闰年
		// 2.每个月多少天
		// 3.Date提供了一个构造函数 可以接受一个yyyy-MM-dd HH:mm:ss类型的字符串 可以转换为date对象
		var totalDay = 0;
		var date = new Date('2015-02-28');
		console.log(date);
		// 获取年份
		var year = date.getFullYear();
		// 获取月份
		var month = date.getMonth()+1;
		// 获取日
		var day = date.getDate();
		var monthArr = [31,28,31,30,31,30,31,31,30,31,30,31];
		for (var i = 0; i < month-1; i++) {
			totalDay += monthArr[i];
		}
		// 加上当月天数
		totalDay = totalDay + day;
		// 判读是否闰年
		if(isRun(year)&&month>2){
			totalDay = totalDay+1;
		}

		console.log(totalDay);
		function isRun(year){
			if((year%4===0&&year%100!==0) || year%400===0){
				return true
			}
			return false
		}```
>
### 02-Math对象用法(内置对象)
* 向上取整 Math.ceil();
* 向下取整 Math.floor();
* 最大值 Math.max();
* 最小值 Math.min();
* π的值通过Math.PI；
* 伪随机 Math.random();[0-1) 范围函数Math.random()*数量+min;
* 幂运算 Math.pow(x,y); x的y次方
* 四舍五入(不严格) Math.round();
>
### 03-逻辑运算符
* 与(且) &&  都真才真 两个值都为true,返回值为后面的值(true)
* 或 ||  有一个真,即为真  两个值都为false时,返回值为后面的值
* 非 !  取反
* 逻辑运算符常用于布尔（逻辑）值之间; 当操作数都是布尔值时，返回值也是布尔值。 不过实际上 &&和||返回的是一个特定的操作数的值 ，所以当它用于非布尔值的时候，返回值就可能是非布尔值。
* 换种说法来讲，逻辑运算符返回的其实是其中的操作数
* 
>
### 04- 短路求值
>
* false && anything    // 被短路求值为false（遇到false就返回）
* true || anything       // 被短路求值为true（遇到true就返回）
* 也就是说 上述 anything 部分并不会进行求值。
>
### 05-if语句-条件判断语句
>
* 语句的三种表达式
	* if(){}else{};
	* if()()else{} if(){}else{};也可以多个
	* 三元运算符:a>b? a:b;
	* 表达式?如果表达式结果为true执行这里的代码:如果表达式结果为false执行冒号后面的代码;
* 补充: else部分可以省略,也就是没有否则
* 如果要做得事情,只有一句话,可以省略花括号(不推荐)
>
### 06-switch条件分支语句
* switch条件分支语句
	* switch...case...语句
	* 在执行时会一次将case后表达式的值和switch表达式后的值进行全等比较
	* 比较结果为true,则从当前case处开始执行代码;
	* 结果为true,case后的所有代码都会执行;如果不需要执行后面所有代码,加break即可;
	* 比较结果为false,则继续向下比较
	* 如果结果都为false,则执行defauit命令;
* switch条件分支语句和if条件判断语句的区别:
	* switch语句与if语句的功能实际上有重复的,使用switch语句也可以实现if语句的功能;使用if语句也可以实现switch语句的功能;也就是可以相互代替的,
	* if语句使用较多 switch条件比较清晰;
* 语句:表达式
* ```javascript
	* var score = xx;
	          seitch(score/10){
				case 10:
				case 9:
				case 8:
				case 7:
				console.log("合格");
				break;
			default:
				console.log("不合格");
				break;
	}```
>
### 07-while循环语句
>
* 通过循环语句可以反复执行一段代码多次
* while循环语法:
* ```javascript
	var n=1;
	while(条件表达式){
		语句....
	}
	while(true){
		语句....
		if(n<10){
			break;
		}
	}```
* 解析:
	* while语句在执行时,
	* 先对条件表达式进行求值判断
	* 如果为true,则执行循环体循环体执行完毕后,继续对表达式进行求值判断,如果为true,则继续执行循环体,以此类推
	* 如果结果为false,则终止循环;
	* 条件表达式写死为true的循环,叫死循环;该循环不会终止.除非游览器关闭;慎用;
* 创建一个循环需要三个步骤
	* 1. 创初始化一个变量
	* 2. 再循环中设置一个条件表达式
	* 3. 定义一个更新表达式,每次更新初始化变量;
>
* do...while循环
* 语法表达式:
* ```javascipt
	do{
		语句...
	}while(条件表达式)```
* 解析:
	* do...while语句在执行时,会先执行循环体;
	* 循环体执行完毕后,在对while后条件表达式进行判断;
	* 如果结果为true,则继续执行循环体,执行完毕后继续判断,以此类推;
	* 如果结果为false,则终止循环
* do...while与while语句功能相似,不同的是while是先判断后执行;而do...while是先执行后判断
* do...while至少保证循环体执行一次,而while不能;
>
### 08-break与continue
>
* 外部循环
* ```javascript
	var i=0;
	for(;i<arr.length;){
		alert(i++);
	}```
>	
* break: 退出当前循环语句,当for循环嵌套时只能退出当前整个循环
* continue: 跳出本次循环,继续下一次循环
### 09-for循环
>
* for(1.初始化表达式; 2.条件表达式; 4.更新表达式){
	3.语句....
}
>
* for循环三个部分都可以省略,也可以写在外面
	* 如果for循环里不写任何表达式,只写两个';' ==>此时是个死循环,无限循环下去;
>
* ```javascript
	for(var i = 1; i <= 100; i++){
    console.log(i)
	//分析for循环的 执行流程:
	/*1.执行初始化表达式(只执行一次)
	2.执行条件表达式,判断是否执行,
		为true,则执行循环体语句3; 为false则终止循环;
	3. 执行更新表达式,更新表达式执行完后继续重复,直至结束..*/
	//写循环 要避免死循环 还有无效循环
	}
	
	```
>
>
## 三.js基础_第三天
>
### 01-数组
>
* 定义:
	* 1. 利用关键词new var arr = new Array();
	* 2. 直接创建数组  arr=[];
* 赋值: 数组中的每一个元素都有它对应的下标，下标从0开始。通过下标，我们能够查找，修改数组当中的元素
	* 1. 查找: var nameArr = ['张三'];
	* 2. 添加: var nameArr[3] = '王五';
	* 3. 修改: var nameArr[3] = '赵六';
* 数组属性:
	* length:数组中元素个数,数组长度
>
### 02-遍历数组
>
* for循环
* for in
    * for(var key in movieJson){
    	console.log(key);
	* key 是 数组 age 的下标
   	 console.log(movieJson[key]);
    * // xx.xx 这种形式 只能取原来具有的属性  
    * //非常重要! xx.abc  abc是变量,就必须通过  xx[abc] 形式取值  
    * // key是变量 需要用 obj[key]的形式获取对象属性值

* 反转数组
* 两个方法
* ```javascript
	var arr = ['a','b','c','d','e'];
	var newArr = [];
		// ['e','d','c','b','a']
		// 倒叙
		function reverse (arr){
			var newArr = [];
			for (var i = arr.length-1; i >= 0; i--) {
				newArr.push(arr[i]);
			}
			return newArr
		}
	function reverse2 (arr){
			//地板函数;  以中间为基点更换位置
			for (var i = 0; i < Math.floor(arr.length/2); i++) {
				//长度-1再减下标
				var index = arr.length-1-i;
				var temp = arr[i];
				arr[i] = arr[index];
				arr[index] = temp;
			}
			return arr;
			/*共两轮 第一轮"a"与"e"交换位置 第二轮"b"与"d"交换位置*/
			//["e", "b", "c", "d", "a"]
			//["e", "d", "c", "b", "a"]
		}```
>
### 03-数组部分方法
>
* 数组合并
	* Arr1(原数组).concat(Arr2(新数组));不影响原数组
>
* 数组==>字符串
	* 数组名.join(分隔符);
	* 分隔符可选，如果省略，默认用逗号做分隔符
>
* 字符串==>数组
	* 数组名.split(分隔符,数组长度);
	* 通过指定分隔符，如果省略，默认以逗号分隔，将字符串分割为字符串数组。
	* 第二个参数，制定返回数组的最大长度。打断之后 取几个数组的值,可有可无
	* emailArr =email.split(';');
>
* 数组里添加元素
	* 数组名.push(元素) 从后推入
	* 数组名.unshift(元素) 从前插入
	* 每一次 调用 push() 或者 unshift() 都改变了原数组，所以当我想使用修改后的添加过元素后的数组时，直接使用arr即可,所以没有必要用一个新数组去接收。
>
* 数组删除元素
	* 数组名.pop(元素) 从后删除
	* 数组名.shift(元素) 从前删除
	* 每一次 调用 pop() 或者 shift() 都改变了原数组。
>
* 截取数组元素
	* substring(start,length) 方法可在字符串中抽取从 start 下标开始的指定数目的字符
>
* 阶乘 
* ```javascript
	function getFactorial(num){
			jc=1
			for(var i=1; i<=num; i++){
				jc = jc * i;
			}
			return jc;
		}```
>
* 递归
* 自己调用自己的函数,称之为递归算法;
* ```javascript
	function foo (num){
			// 递归的跳出条件
			//需要注意 递归必须有跳出条件
			if(num===1){
				return 1
			}
			return foo(num-1)*num
		}```
>
### 04-数组排序
>
* 冒泡排序
	1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
	2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
	3. 针对所有的元素重复以上的步骤，除了最后一个。
	4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
	5. 之所以叫冒泡排序，每一轮两辆比较之后，都会冒出一个本轮最大的数，将其移动到本轮尾部。
* ```javascript
	// 需要几个轮次 6个数排序 最大需要5轮
	// 外层循环控制轮次
	for (var i = 1; i < arr.length; i++) {
		for (var j = 0; j < arr.length-i; j++) {
			// 经过这样for循环,我们能找到本轮最大的数,并排在本轮尾部
			if(arr[j]>arr[j+1]){
				// 交换位置
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	console.log(arr); // [1, 5, 12, 32, 40, 41]
	1```
>
* 选择排序
	* 选择排序是一种简单直观的排序算法。
	* 它的工作原理是每一次从待排序的数据元素中选出最小（或最大）的一个元素，存放在序列的起始位置，
	* 然后，再从剩余未排序元素中继续寻找最小（大）元素，
	* 然后放到已排序序列的末尾。以此类推，直到全部待排序的数据元素排完。 
	* 选择排序是不稳定的排序方法。
* ```javascript
	for (var i = 0; i < arr.length; i++) {
		var minIndex = i;
		for (var j = i+1; j < arr.length; j++) {
			if (arr[minIndex]>arr[j]) {
				minIndex = j;
			}
		}
		if (minIndex!==i) {
			// 交换位置
			var temp = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = temp;
		}
	}
	console.log(arr)
	1```
>
* 插入排序
* ```javascript
	  //第一个无序列往有序列表往前插
        //换位置
        var arr=[5,2,4,8,6,7,3];
        
        var temp = null;

        //假定数组的第一位 是有序数列 从第一位后是无序列表
        //每次提出来的无序数列,往有序数列中插入
        //外轮控制次数
        for(var i=1; i<arr.length; i++){
            //提取无序数列中第一个数
            var temp = arr[i];
            //跟有序数列进行比较  从后往前
            for(var j=i; j>0; j--){
                //无序数和前一个比较
                if(temp<arr[j-1]){
                    //换位
                    arr[j] = arr[j-1];

                }else{
                    //结束
                    break;
                }
                console.log(arr);
            }
            //证明前面的数往后移了,位置空出来了
            if(j != i ){
                // 插进去
                arr[j] = temp;
            }
        }```
>
### 05-函数
* 函数声明,调用
	* 函数，是一种封装。就是将一些语句，封装到函数里面。通过调用的形式，执行这些语句。
>
* 函数的定义：
	* function 函数名字(){};
	* 具名函数(自定义函数)
		* function fn(){alert("你好")};
		* 可以先调用,后声明
	* 匿名函数
		* var sing = function(){};
		* 必须先声明,后调用
		* 通过var 声明的变量,变量名会被提升
	* 自执行函数
		* ;(function (){alert('你好')})();8
>
* 函数的调用
	* 函数名字(); 代表的就是整个函数体 只要加了(),那么该函数就会执行;
	* fn();
	* sing();
	* xx.xx() ==>调用对象方法的
	* xx.xx ==> 调用对象的属性
	* 定义函数，可以在调用的后面，这是JS的语法特性，函数声明提升.
>
* 封装函数好处:
	* 将会被大量重复的语句写在函数里面,直接调用函数
	* 简化编程，让编程变的模块化
>
* 函数的参数
	* 参数是函数和外界进行沟通的桥梁
	* 形参：形式上参与运算的变量，无实际值，为实参占位置。（可以理解为函数的内部变量外部无法访问）
	* 实参：实际参与运算的变量。形参为他占位置，真实参与运算的变量。
	* 如果实参个数比形参个数多，可以运算，但是多余实参不参与运算。
	* 如果实参个数小于形参个数，计算错误。通常形参个数和实参个数保持一致。
>
* 函数的返回值
	1. 函数程序运行后的结果外部需要使用的时候，我们不能拿到，需要通过return返回。
	2. 函数使用return语句后，这个函数会在执行完 return 语句之后停止并立即退出，也就是说return后面的所有其他代码都不会再执行。
	3. 函数里面可以没有return。 
>
* 参数的数据类型
	* 基本数据类型作为参数:
		* 基本数据类型作为参数传递，函数内部会创建该数据的副本，一切修改不会影响传进来的数据本身
	* 复杂数据类型作为参数
		* 复杂数据类型作为参数传递,在函数内部对该参数的修改，会直接影响到函数外部的该参数，因为本质上他们是同一个对象。
>
### 06-变量和作用域
* 在JavaScript中，用var声明的变量实际上是有作用域的。作用域指一个变量的作用范围。
* 根据变量的作用范围   可以分为  全局变量 和 局部变量
* 全局变量
	* 在最外层声明的变量。
		1. 创建的变量都会作为window对象的属性保存。
    	2. 创建的函数都会作为window对象的方法保存。
	* 在函数体内部，但是没有声明var 的变量也是全局变量。
	* 在页面的任意的部分都可以访问的到。
>
* 局部变量
	* 在函数体内部的 声明的变量
	* 如果一个变量在函数体内部声明，则该变量的作用域为整个函数体，在函数体外不可引用该变量
>
### 07-作用域的上下级关系
* 当在函数作用域操作一个变量时，它会先在自身作用域中寻找，如果有就直接使用（就近原则）。如果没有则向上一级作用域中寻找，直到找到全局作用域；如果全局作用域中依然没有找到，则会报错ReferenceError。
* 换句话来讲，就是当前作用域中，可以使用其父级作用域的变量，但是不能使用其（兄弟作用域和后代作用域）的变量。(在我这里声明的变量,除了我能用,就是我的后代能用)
* 在函数中要访问全局变量可以使用window对象。（比如说，全局作用域和函数作用域都定义了变量a，如果想访问全局变量，可以使用window.a）
>
### 08-变量和函数 声明提升
* 变量声明提升:
	1. 使用var关键字声明的变量（ 比如 var a = 1），会在所有的代码执行之前被声明（但是不会赋值）
	2. 但是如果声明变量时不是用var关键字（比如直接写a = 1），则变量不会被声明提前。
>
* 函数声明提升:	
	1. 使用函数声明的形式创建的函数function foo(){}，会被声明提前。也就是说，整个函数会在所有的代码执行之前就被创建完成，所以我们可以在函数声明之前，调用函数。
	2. 使用函数表达式创建的函数var foo = function(){}，不会被声明提前，所以不能在声明前调用。很好理解，因为此时foo被声明了，且为undefined，并没有把 function(){} 赋值给 foo。
>
### 09-在函数作用域也有声明提前的特性：
1. 使用var关键字声明的变量，会在函数中所有的代码执行之前被声明。
2. 函数声明也会在函数中所有的代码执行之前执行。
3. 在函数中，没有var声明的变量都是全局变量，而且并不会提前声明。
>
>
## 四.js基础_第四天
>
### 01-对象(具有属性和方法)
>
* 对象分类
	* 内置对象
		* 比如：Math、Date、String、Number、Boolean、Function、Object....
	* 宿主对象
		* 由JS的运行环境提供的对象，目前来讲主要指由浏览器提供的对象。
	* 自定义对象
		* 由开发人员自己创建的对象
>
* 创建对象
	* new Object();
		* 创建了一个空对象
		* 这里Object 是 js 内置对象,所有对象的顶级对象
		* 给对象添加属性和方法
		* 向obj添加一个name属性也可以是函数(方法)
	* Object.create()
		* 创建的对象是一个空对象
		* 该对象上没有继承 Object.prototype 原型链上的属性或者方法
		* 例如：toString(), hasOwnProperty() 返回true和false 等方法
		* Object.create()方法接受两个参数:Object.create(obj,propertiesObject) ;
		* obj:一个对象，应该是新创建的对象的原型。
		* propertiesObject：可选。该参数对象是一组属性与值
		* 通过打印发现， 将{}点开，显示的是 No Properties ，也就是在对象本身不存在属性跟方法，原型链上也不存在属性和方法，
		* 使用Object.create()是将对象继承到__proto__属性上
	* 字面量
		* 使用对象字面量来创建一个对象：
		```javascript
			var obj2 = {
				name: "猪八戒",
				age: 13,
				test: {
					name: "沙僧"
				},
				sayName: function(){
				console.log('smyhvae');
				}
			};```
	* 自定义构造函数
		* ```javascript
			// 在js中 所有的对象都是函数 所有的函数也可以称为"对象"
			// 此时 这个Human为手动创建的自定义构造函数对象
			// 在js中 this的指向在调用前是不确定的.
			// 面试: 构造函数对象的this指向new出来的实例对象
			function Human () {
				this.name = '张三';
				this.age = 20;
				this.say = function () {
					alert(this.name+'的年龄为:'+this.age);
				}
			}
			// zs为通过Human创建的一个实例对象
			var zs = new Human();
			// 通过zs的实例对象调用的属性 和方法
			alert('手动弹出name==>'+zs.name);
			zs.say();
			// var date = new Date();
			// date.getFullYear()
			// 如果不通过new实例对象,那么this指向调用者!!!
			window.Human();```
>
### 02-this指向问题
>
* this在调用之前 是不知道指向谁的
* 面试: 1. 构造函数对象的this指向new出来的实例对象
* 2.如果不通过new实例对象,那么this指向调用者!!!
>
### 03-json对象
>
* json本质是一个字符串,可以进行网络传输
* var movieObj = JSON.parse(movieStr);
	* 从后台拿来数据需要json 字符串 转换为 JSON对象   
    * 只有json 字符串能转换为JSon对象  
	* 但是如果希望字符串转换json对象 必须用"" 
    * 数据类型变成对象
* var movieStr = JSON.stringify(movieJson);  
	* 对象和json类型的对象都可以通过 JSON.stringify() 转换为字符串,
    * 向后台传输数据,需要把对象转换为json字符串
    * 也可以把 普通对象 转换为 json字符串
    * // {"a":"Hello","b":"World"}
>
### 04-数组高级API
>
* toString() 把数组转换成字符串,每一项用,隔开 
>
* reverse() 反转数组 会改变原数组
>
* sort() 给数组排序 改变原数组
	* 无参：按照数组元素的首字符对应的Unicode编码值从小到大排列数组元素。
	* 带参：1.必须为函数（回调函数--callback）。函数中带有两个参数，
        2. 代表数组中的前后元素。如果计算后（a-b），返回值为负数，a排b前面。等于0不动。		
        3. 返回值为正数，a排b后面。
>
* indexOf() 查找下标  没有返回-1; 从左往右查找对应元素
>
* lastIndexOf() 最后一个下标 从后往前查找对应元素
>
* slice('start','end') 从当前数组中截取一个新的数组，不影响原来的数组，参数start从0开始,end从1开始
>
* splice(index,howmany,element1) 删除或替换当前数组的某些项目
	* index 必选，规定从何处添加/删除元素
	* howmany：必选 规定应该删除多少元素
	* element1:可选 规定要添加到数组的新元素
>	
* 清空数组 1. arr.length 赋值为0   2. 赋值为[] arr=[];
>
### 05-字符串对象的常用方法
>
* charAt() 获取相应位置的字符
>
* charCodeAt() 指定位置字符 的Unicode编码
>
* indexOf() 返回字符在字符串中的位置
>
* lastIndexOf() 返回最后字符字符在字符串中的位置
>
* concat() 连接字符串
>
* slice() 提取字符串的某个部分
>
* substr() 截取字符串
>
* toUpperCase() 方法用于把字符串转换为大写
>
* toLowerCase() 方法用于把字符串转换为小写。
>
toUpperCase 大写
toLowerCase 小写
>
>
## 五.js基础_第五天
>
### 01-压缩
* 精简:减代码,减小网络传输时间,提高页面响应 
> 
* arguments对象(函数的实参对象);
	* arguments.length; 返回实参的个数;
	* 只能在正在使用的函数内使用
	* instanceof 用于判断  是不是某个构造函数的实例对象 
	* 可以判断 是不是数组,是不是函数
>
* arguments.callee(返回正在执行的函数本身)
	* 在使用函数递归调用时推荐使用arguments.callee代替函数名本身。 
>
### 02-函数
* 具名函数
	* 表达式 function foo(){};
* 匿名函数
	* 表达式
		* 1，var A = function(){ };

		* 2, (function (x,y){ })(2,3);

		* 3, function() { };
* 自执行函数(立即执行函数);
	* 表达式;(function(n){})(传参);
		* 函数传参 可以是任意的数据类型 可以是其他函数
>
### 03-addEventListener使用W3C注册事件监听器
>
* 表达式
	* boxEl.addEventListener('click',function(){
         alert('我是外部box')
    })
    * 可以注册多个事件
    * 	boxEl.addEventListener('click',function(){
            alert('edf');
        })

    * 第一个参数: 字符串 事件类型  不带"on"
    * 第二个参数: 函数 (要执行的程序)
    * 第三个参数: 是否捕获执行,默认false   false/true
*  removeEventListener 移除绑定 
	* innerBox.removeEventListener('click',foo,true); // 捕获
	* innerBox.removeEventListener('click',foo); // 冒泡
>
### 04- 冒泡与捕获
>
* 从里到外==>冒泡
	* target(目标) - div - body - document - window
* 从外到里==>捕获
	* 执行顺序: window - document - body - div - target(目标)
* 阻止冒泡
	* 函数名.stopPropagation();
	* 兼容写法: stopPropagation? e..stopPropagation() : e.cancelBubble=true;
	* 如果同一个监听事件分别为“事件捕获”和“事件冒泡”注册了一次，一共两次，这两次事件需要分别移除。两者不会互相干扰。
	* 移除的事件必须为外部事假
>
### 05定时器
>
* 延迟执行表达式(执行一次)
	* setTimeout(函数名, 毫秒数);
>
* 循环执行表达式
* ```javascript
		setInterval(function(){
			清除循环clearInterval()写在setInterval函数里
			setInterval(function(){
				clearInterval(time);
			},10000);
		},17)```   
>
* 清除循环clearInterval();
* 倒计时
	* 思路
		* 1.先设置html
		* 2.获取节点
		* 3.将距离目标时间传进html
		* 4.将字符串时间转换成标准时间格式
		* 5.
		* 6.获取现在的标准时间
		* 7.计算时间差
		* 8.获取时间戳
		* 9(将毫秒转换成几时几分几秒);
		* 10.声明时分秒
		* 11.将时分秒拼起来
		* 12.传入html
		* 13设置循环
>
## 简单问题
>
* 1. 数组去重
	* 1、Set结构去重。
		这是ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
		```javascript
		let unique= [...new Set(array)];

		//es6 Set数据结构类似于数组，成员值是唯一的，有重复的值会自动去重。

		//Set内部使用===来判断是否相等，类似'1'和1会两个都保存，NaN和NaN只会保存一个
		1```
	* 2、遍历，将值添加到新数组，用indexOf()判断值是否存在，已存在就不添加，达到去重效果。
		```javascript	
		let a = ['1','2','3',1,NaN,NaN,undefined,undefined,null,null, 'a','b','b'];

		let unique= arr =>{

			let newA=[];

			arr.forEach(key => {

			if( newA.indexOf(key)<0 ){ //遍历newA是否存在key，如果存在key会大于0就跳过push的那一步

				newA.push(key);

			}

			});

			return newA;

		}

		console.log(unique(a)) ;//["1", "2", "3", 1, NaN, NaN, undefined, null, "a", "b"]
		1```
	//ps:这个方法不能分辨NaN,会出现两个NaN。是有问题的，下面那个方法好一点.
	* 3、遍历，将数组的值添加到一个对象的属性名里，并给属性赋值，对象不能添加相同属性名，以这个为依据可以实现数组去重，然后用Object.keys(对象)返回这个对象可枚举属性组成的数组，这个数组就是去重后的数组。
	```javascript
		let a = ['1', '2', '3', 1,NaN,NaN,undefined,undefined,null,null, 'a', 'b', 'b'];

		const unique = arr => {

			var obj = {}

			arr.forEach(value => {

				obj[value] = 0;//这步新添加一个属性，并赋值，如果不赋值的话，属性会添加不上去

			})

			return Object.keys(obj);//`Object.keys(对象)`返回这个对象可枚举属性组成的数组，这个数组就是去重后的数组

		}

		console.log(unique(a));//["1", "2", "3", "NaN", "undefined", "null", "a", "b"]
	1```
	`这个方法会将 number,NaN,undefined,null，变为字符串形式，因为对象的属性名就是一个字符串，根据需求来吧，想想还是Set去重最简单也最有效。`
