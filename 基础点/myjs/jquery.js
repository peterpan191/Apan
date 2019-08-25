/*
 * editor: wang
 * date: 2019-5-20
 */

/**
 * 精简版 jQuery $
 * @param str	 字符串(elementTagName, .elementClassName,  #elementIdName)
 */
function $(str) {
	var eleArr = null;
	if (str[0] === ".") {
		eleArr = document.getElementsByClassName(str.slice(1));
		if (eleArr.length > 1) { return eleArr } else { return eleArr[0] };
	} else if (str[0] === "#") {
		return document.getElementById(str.slice(1));
	} else {
		eleArr = document.getElementsByTagName(str);
		if (eleArr.length > 1) { return eleArr } else { return eleArr[0] };
	}
}

/*
 * 匀速运动函数
 * @param ele 运动的元素
 * @param target 运动的终点
 */
function move(ele, target) {
	var start, step, cha;
	//清除定时器
	clearInterval(ele.timer);
	ele.timer = setInterval(function () {
		// 起点
		start = ele.offsetLeft;
		// 步长
		step = target > start ? 10 : -10;
		// 差值
		cha = target - start;
		// 判断终点临界值
		if (Math.abs(step) > Math.abs(cha)) {
			//清除定时器
			clearInterval(ele.timer);
			ele.style.left = target + "px";
		} else {
			// 运动
			ele.style.left = start + step + "px";
		}
	}, 17)
}

/*
*缓动运动函数
*@param ele 运动的元素
*@param target 运动的终点
*/

// 封装函数
function slowly(ele, target) {
	// 清除定时器
	clearInterval(ele.timer);
	addClass(ele, "active");
	//循环定时器
	ele.timer = setInterval(function () {
		//不断变化的起点
		var stars = ele.offsetLeft;
		//判断步长.
		var step = (target - stars) / 10
		//判断步长临界值 (-1,1)
		if (Math.abs(step) < 1) {
			// if(step>0){
			// 	step = 1;
			// }else{
			// 	step = -1;
			// }
			// step = step>0? 1:-1;
			//细分区间(0.1) (-1.0)
			step = step > 0 ? Math.ceil(step) : Math.floor(step);
		}
		//判断终止条件
		if (stars + step === target) {
			delClass(ele, "active");
			clearInterval(ele.timer);
		}
		//运动
		ele.style.left = stars + step + "px";
	}, 17);
}

/*
*下拉框卷入宽高
*@param 
*@param 
*/
// 封装函数获取被页面卷入的高度
function sct() {
	return document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
}
// 封装函数获取被页面卷入的左边距
function scl() {
	return document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft;
}
/*
* 获取元素样式的兼容写法
*@param ele获取样式的元素
*@param styleName 要获取的样式名字
*/

// 获取样式的元素   要获取的样式名字

function getStyle(ele, styleName) {
	if (ele.currentStyle) {
		return ele.currentStyle[styleName];
	} else {
		return window.getComputedStyle(ele, null)[styleName];
	}
}
/*
*封装多样式动画
*@param ele获取样式的元素
*@param target 目标值
*/
// 封装多样式动画
function mulStyle(ele, target) {
	clearInterval(ele.timer);
	ele.timer = setInterval(function () {
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
}

/**
 * 添加类名
 * @param {Object} ele 元素
 * @param  不限参  要添加的类名
 */
function addClass(ele) {
	// arguments 代表实参的集合
	// 获取旧的类名
	var old = ele.getAttribute("class");
	// arguments[0] === > ele
	// 从 第一位开始才是要添加类名
	if (old) {
		for (var i = 1; i < arguments.length; i++) {
			if (old.indexOf(arguments[i]) === -1) {
				old += " " + arguments[i];
				// old = old.concat(" " + arguments[i]);
				// console.log(old);
			} else {
				continue;
			}
		}
		ele.setAttribute("class", old);
	} else {
		// arguments === > [ele,"d1","d2","d3"]
		var str = "";
		for (var i = 1; i < arguments.length; i++) {
			str += arguments[i] + " ";
		}
		ele.setAttribute("class", str);
	}
}


/**
 * @param {Object} ele 元素
 * @param 不限参  要删除的元素
 */
function delClass(ele) {
	// 获取旧的类名
	var old = ele.getAttribute("class");
	if (old) {
		var oldArr = old.split(" ");
		for (var i = 1; i < arguments.length; i++) {
			// 证明要删除的类名存在
			var index = oldArr.indexOf(arguments[i]);
			if (index !== -1) {
				oldArr.splice(index, 1);
			} else {
				continue;
			}
		}
		ele.setAttribute("class", oldArr.join(" "));
	}
}

/**
 * @param arr数组
 * @param selectSort选择排序
 */
//封装好选择排序
//通过var声明的变量会被提升
// var selectSort = function() {
function selectSort(arr) {
	for (var j = 0; j < arr.length - 1; j++) {
		// 1.找到最小值,并放到第一位
		// 默认最小值下标为0;
		var minIndex = j;
		for (var i = j + 1; i < arr.length; i++) {
			//如果默认最小下标的值> arr[某]个值
			if (arr[minIndex] > arr[i]) {
				minIndex = i; // 1  3 
			}
		}
		// 如果最小下标不是默认值 需要交换,不然无需交换
		if (minIndex != j) {
			//交换位置
			var temp = arr[j];
			arr[j] = arr[minIndex];
			arr[minIndex] = temp;
		}
	}
	return arr;
	//return 后面的代码都不再执行!
}


/**
 * @param arr数组
 * @param bubbleChop冒泡排序
 */
function bubbleChop(arr){
	var arr = [41,32,1,40,12,5];
	for (var i = 1; i < arr.length ; i++) {
		// 外层for 循环 控制  比较几轮
		for (var j = 0; j < arr.length-i; j++) {
			// 内层for循环  找到本轮当中 最大的数
				if(arr[j]>arr[j+1]){
				// 换位置
				var temp = arr[j+1];
				arr[j+1] = arr[j];
				arr[j] = temp;
			}
		}
		console.log(arr);//每一轮比较之后的结果
	}
}




