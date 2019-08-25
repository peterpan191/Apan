# dom  
>
## 一.DOM第一天
>
### 01-事件三要素
>
  * 事件源
  * 事件
  * 事件驱动程序
>
### 02-DOM节点获得
>
* html都为节点.换行注释文本标签,常用标签
  * 根据id获得
    * document.getElementById("xx");
* 根据class获得
  * cocument.getElementsByClassName("xx")[0];
* 根据标签名获得
  * document.getElementsByTagName("div")[下标,一般为0];
>
### 03-点击子节点作用父节点
>
* 子节点.onclick = function(){};
* 给父节点更改颜色
  * 父节点.style.backgroundColor = 'green';
* 给父节点添加display
  * 父节点.style.display = 'block';
* 点击消失
  * this.style.display = 'none';
>
### 04-获得节点
* 获得节点
  * 父节点
    * 子节点名.parentNode;
>
  * 兄弟节点  
    * 兄弟节点.nextSibling 嫡出 下一个兄弟节点
    * nextSibling  包括 文本节点 换行,空格,注释
    * 在 ie 678 里边 nextSibling  IE678中指下一个元素节点 (（标签、注释）)
>
  * 兄弟节点.nextElementSibling 庶出  下一个元素节点
    * 下一个元素节点(标签)
    * 下一个兄弟节点
  * 兼容写法:nextEl = 兄弟节点.nextElementSibling  || 兄弟节点.nextSibling;  
>
  * previousSibling  嫡出  上一个兄弟节点
  * previousElementSibling  庶出  上一个兄弟节点
  * 兼容写法: previousElementSibling  || previousSibling
>
  * 单个孩子节点
    * 第一个孩子节点
      * 父节点.firstChild);  嫡出  
      * (父节点.firstElementChild);  庶出
    * 兼容写法:firstElementChild || firstChild;
    * 最后一个孩子节点
      * (父节点.lastChild);  嫡出
      * (父节点.lastElementChild);  庶出 
    * 兼容写法: 父节点.lastElementChild || lastChild
>
  * 所有孩子节点  
    * 父节点.childNodes  嫡出
    * 父节点.child  ren  庶出
>
### 05-求除了自己以外的所有兄弟元素
* ```javascript
    var li2 = document.getElementsByClassName('li2')[0];
        console.log(getSiblings(li2));
    	function getSiblings(el){
            var siblings = [];
            var pNode = el.parentNode;
            var children = pNode.children;
            for(var i = 0;i< children.length; i++){
                if(children[i].nodeType==1){
                    if(children[i]!=el){

                        siblings.push(children[i]);
                    }
                }
            }
            return siblings;
        }
     //思路一
         //获得自身节点
         //获得父节点
         //获得所有兄弟节点
         //遍历
           //判断是不是元素节点
           //判断是等于自身
              //等于自身不要
              //不等于把节点push推入一个空的数组里
            //加'!'是不等于,
          //封装函数
            //调用函数
            //把信息return扔出来;
            1```
* ```javascript
    //第二种思路
    //  找到 前边的素有兄弟节点
    // 找到后边的所有兄弟及节点
    // 合并
    // 获取前边的兄弟节点
    function getPrevSiblings(el){
                var rs = []; 
                var pNode = el.parentNode;
                // 所有孩子节点
                var children = pNode.children;
                for (var i = 0; i < children.length; i++) {
                    // 兼容ie8
                    if(children[i].nodeType == 1){
                        if(children[i]!=el){
                            rs.push(children[i]);
                        }else{
                            break;
                        }
                    } 
                }
                return rs;
            }
            // console.log(getNextSiblings(li2));
            // 获取后边的所有兄弟节点,倒着遍历
            // 2. lock 上锁
            function getNextSiblings(el){
                var rs = []; 
                var pNode = el.parentNode;
                // 所有孩子节点
                var children = pNode.children;

                var lock = false;

                for (var i = 0; i < children.length; i++) {
                    if(children[i]==el){
                        lock = true;

                        continue; // 跳出本次循环
                    }
                    
                    if(lock){
                        // 兼容ie8
                        if(children[i].nodeType == 1){
                            rs.push(children[i]);
                        } 
                    }   
                }
                return rs;
            }```
>
### 06-判断节点类型: 
* 语法: document.body.nodeType;
  * nodeType 属性返回以数字值返回指定节点的节点类型。
    * 如果节点是元素节点，则 nodeType 属性将返回 1。
    * 如果节点是属性节点，则 nodeType 属性将返回 2。
>
>
## 二.DOM第二天
>
### 01-dom节点操作/增删改查
* 创建节点
  * document.createElement('标签名');
  * 不插入节点 ,是不会在页面当中显示的
>
* 插入节点
  * 父节点.appendChild(要插入的节点);
    * 同一个 节点 不能重复插入
  * 父节点.insertBefore(要插入的节点，参考节点)；
    * 如果参考节点为null，那么他将在节点最后插入一个节点。  
>
* 删除节点
    * 用法：父节点.removeChild（子节点）。
    * 节点自己删除自己
      * 子节点.parentNode.removeChild(子节点);
>
* 复制节点
  * 以复制body为例
    * 父节点.cloneNode（true）
      * 参数 true，深层复制，如果是false，只复制节点本身。
      *  //给插入节点一个参照物document.getElementsByTagName('script')[0];//insertBefore需要参照物
      * //插入复制的节点 document.body.**insertBefore**(cloneNode,scriptEl);
      * document.body.appendChild(cloneNode);
>
###  02-节点属性
>
* 获取: getAttribute(名称)  
  * 节点.getAttribute(名称/class/id) 
  * 但是 我们很少在 js 当中设置css样式
  * 通常使用class控制样式的变化
  * 重新设class 
    * 节点名.setAttribute('class','danger');
>
* 设置：setAttribute(名称, 值)
  * 设置类名
  * 删除：removeAttribute(名称,'');
  * 节点.removeAttribute(名称/class)
>
### 03插入文本表单
>
* Value只对表单有效果，是属性
  * 节点.value=内容
>
* innerHTML插入可执行的标签，标签和样式会被解析，常用于动态生成页面元素
  * 节点.innerHTML=
>
* innerText 插入文本内容，标签和样式会被当做文本内容处理
  * 节点.innerText
>
* textContent插入文本
  * 节点. textContent;
>
* 拼接公式
  * 空数组.concat(要放入的节点);
>		
* split() 方法用于把一个字符串分割成字符串数组
  * 添加节点
  ```javascript
    function addClass(el,className){
			//获取旧样式
			var oldClassStr = el.getAttribute('class'); //null
			//如果连class属性都没有 直接添加即可
			if(!oldClassStr){
				el.setAttribute('class',className);
				return;
			}
			//判断是否有重复元素
			// 'danger active  strong' 判断是否存在 'strong'
			// 'danger active  stronglalal'.indexOf('strong'); 判断有问题
			//danger active  strong' ==> ['danger','active','strong']
			var oldClassArr = oldClassStr.split(' ');
			//!=-1 说明存在
			if(oldClassArr.indexOf(className)!=-1){
				return ;
			}
			//给旧样式添加新样式 'danger' ==> 'danger strong'
			oldClassStr += ' '+className; //
			// 重新赋值
			el.setAttribute('class',oldClassStr);
		}
  删除节点
    function delClass(el,className){
			// 1.判断是否具有class属性
			// 如果没有class属性直接返回 后面代码不执行
			if(!el.getAttribute('class')){
				return;
			}
			// 'danger active strong'  ==> 删除active
			var oldClassStr = el.getAttribute('class');
			//转换为数组
			var oldClassArr = oldClassStr.split(' ');
			//删除某一个元素  获取className在数组的下标
			var index = oldClassArr.indexOf(className);
			if(index!=-1){
				//do del
				oldClassArr.splice(index,1);
				//还原 重新赋值
				oldClassStr = oldClassArr.join(' ');
				el.setAttribute('class',oldClassStr);
			}
			
		}```
>
### 04-相册走廊
>
* ```javascript
    var imgEl = document.getElementsByTagName('img')[0];
      var lis = document.getElementsByClassName('img-item');
      console.log(lis);

      for(var i=0; i<lis.length; i++){
        lis[i].onclick = function(){
          var imgUrl = this.children[0].src;
          console.log(imgUrl);
          imgEl.src = imgUrl;
          console.log(i);
        }
      }```
1. 先获取节点   注意获取lis时是个数组,不要加下标
2. 遍历
3. 点击每个节点时的状态
4. 拿到lis的所有的子节点的地址
5. banner的img地址等于拿到的子节点的地址
