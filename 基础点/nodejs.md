# node.js
>
## 初识
>
* chrome 内置 V8 引擎,可以快速解析js代码
>
### 01-安装
>
1. 安装: 
2. 运行 ==> cmd ==> 输入 'node -v' 查看版本号
3. 测试本地js代码
    - 在文件夹 shift + 鼠标右击 ==> 此处打开命令窗口
    - 输入 node 01-test.js
    - enter
>
## express
>
### 01-安装
>
* http://www.expressjs.com.cn/ . 基于 Node.js 平台，快速、开放、极简的 Web 开发框架.
>
1. 安装: express生成器,帮我们快速构建 express 项目
    - cnpm install express-generator -g
2. 通过express生成器 帮我们在当前文件夹创建myapp项目 模板引擎采用 "pug"
    - 简易化html
3. 建议采用 "ejs" 模板引擎
    - express --view=ejs myapp
4. 安装依赖
    - cnpm install
5. 项目执行 
    - npm start
6. 访问地址
    - http://localhost:3000/
    - 127.0.0.1 本地 测试使用
>
### 02-基本结构
>
* package.json  项目的基本描述文件
* app.js  项目的入口文件
* bin/www   项目的启动文件,包括端口配置信息
* node_modules  项目的依赖文件夹
* public 项目的静态文件夹,包括css,js,img等
* routes  项目的路由(和vue不同,这个是后台路由)
* views  项目的页面部分
>
### 03-如何访问本地服务
>
* 通过node窗口: ping www.baidu.com 获得ip端口
* 协议: //ip:端口 来访问,比如: http://59.110.138.169
* localhost 本地 测试使用
* 127.0.0.1 本地 测试使用
* 192.160.0.100  局域网以太网固定ip
* ipconfig -all 可以查看所有ip   192.168.0.151  局域网无线ip
    - 如果手机和当前服务的电脑在同一个无线网内,则手机也可用访问这个ip
>
### 04-url转码
>
* encodeURI('张三'); ==> "%E5%BC%A0%E4%B8%89"
* decodeURI('%E5%BC%A0%E4%B8%89') ==> "张三"
>
### 05-域名转ip
>
* 用户通过域名(如: www.baidu.com)访问; --> DNS服务器 把域名与ip做映射 --> 访问到ip端口 
* 通过 node窗口 命令: ping www.baidu.com 回车 ==> 61.135.169.121
>
### 06-后端路由
>
* 流程: 客户端 --> 路由 --> 模板(成功或失败两种) --> 渲染给客户端
* 存在问题: 已经登录后 --> 每次刷新路由都会发起请求
>
* 解决: 客户端 --> 路由 -->内部转发(重定向) --> 模板 --> 渲染给客户端
```js
//登录
router.post('/toLogin', function (req, res, next) {
  console.log(res);
  //解构赋值
  var { username, password } = req.body;
  //判断登录状态
  var isLogin = DB.some(item => item.username == username && item.pas == password);
  //如果登录 
  if (isLogin) {
    session[0] = { username };
    //跳转到成功页面
    res.redirect('/success');
  } else {
    //跳转到失败页面
    res.redirect('/fail');
  }
})

//内部转发(重定向) --> 解决 刷新重新提交问题
//成功转发
router.get('/success', function (req, res, next) {
  if (session.length > 0) {
    //登陆过 --> 跳转到登陆成功的页面
    var username = session[0].username;
    var user = DB.find(item => item.username == username)
    console.log(user,111)
    res.render('succ',{user});
  }else{
    res.redirect('/trespass')
  }
  
})

//失败转发
router.get('/fail', function (req, res, next) {
  res.render('fail');
})

```
>
* router.get(...) 配置了后台路由,通过拦截第一个参数的 url 返回相应的模板
* 拦截提交的url请求
*  http  有两个对象,请求发送就会有返回结果
    -    request  用于包装请求的参数和内容
    -    response  用于包装响应的数据
    -    next() 方法继续往下走
* render第一个参数为向客户端输出的模板文件
    - 默认路径为 views文件夹
    - 模板文件的 .ejs 可省略不写
* render 第二个参数 会替代模板引擎中的占位符
    - 接收: <%= user.username %> 
* url 和 文件名 不是绝对相等的;这个匹配关系 需要路由去配置
>
* 请求过来的参数都在req对象里;
* get 和 post 发送参数的形式不同,express的后台 取值的形式也不同
* get的参数在 query获取 post通过body获取
>
### 07-跳转页面
>
* `<a href="/login">重新登陆</a>`
>
### 08-from表单
>
* 通过from表单提交数据  method属性(提交方式) action属性(提交地址)
* http中提交数据或者获取数据 都是一个http的url 地址
* 提交方式有两种方式:
    - get(表单默认方式)
        1. 参数在地址栏显示
        2. 有缓存 
        3. 不安全
        4. 参数个数有限
    - post
        1. 参数在请求(ewquest)保存
        2. 相对安全
        3. 参数没有上限
```html
<h3>恭喜您: <%= user.username %>   登录成功</h3>
<img src="<%= user.url %>" alt="sorry" class="img-circle">
<button><a href="/toLoginout">退出登录</a></button>
```
>
### 09-状态码
>
* 500 后台错误
* 404 没有找到
* 302 内部转发 重定向
* 200 请求成功
>
## ajax
>
### 01-封装原生ajax get/post请求
>
```js
/*
* 封装ajax 把get和post全部封装
* 
*ajax({
    type: 'get',
    url: 'xxx',
    params: 'xxx',
    succ: function(){

    }
})
*/

function myAjax(options){
  // 1. 创建xhr实例 
  var xhr = new XMLHttpRequest();
// toLowerCase()转换为小写
  if(options.type.toLowerCase() == "post"){
      // 2. 设置请求类型和访问地址
      xhr.open('post',options.url);
      xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      xhr.send(options.params);
  }else{
      var url = options.url;
      if(options.params){
          url += '?'+options.params;
      }
      // 设置请求类型 访问地址
      xhr.open("get",url);
      xhr.send(null);
  }

  // 3. 监听状态 onreadystatechange当状态发生变化后触发
  xhr.onreadystatechange = function(){
    //如果发送成功, 并响应结果
      if(xhr.readyState == 4 && xhr.status == 200){
          // 4. 返回结果  并更新dom
          // 返回的结果 被封装在 xhr.resopneText
              // console.log('获取结果:',xhr.responseText);
              // 把结果集 放到回调函数
          options.succ(JSON.parse(xhr.responseText));
      }
  }
}

```
>
### 02-ajax注意
>
* ajax发送的是文本类型,返回的也是文本类型;
>
* ajax请求 必须用send给客户端返回数据 
* express的send方法可以把对象/json转换成字符串并发送给后台
  - express封装的能力
>
* render渲染的是 ejs模板,并返回html 不适合ajax
* res.send() 用于向客户直接返回 字符串
>
### 03-ajax步骤
>
* 类似打电话
  1. 拿出手机
  2. 拨号
  3. 说话
  4. 挺对方说话
>
* ajax
  1. 创建ajax对象
  2. 连接到服务器
  3. 发送请求（告诉服务器我要什么文件）
  4. 接收返回值
>
1. 创建xhr实例对象
  - var xhr = new XMLHttpRequest();
2. 设置请求的类型和访问的地址
  - xhr.open('post',options.url);
3. 监听的状态 
  - xhr.onreadystatechange = 触发函数
  - xhr.readyState == 4 && xhr.status == 200
  - 如果发送成功,并响应结果
4. 获取结果 并更新dom
  - xhr.responseText
5. 执行发送
  - xhr.seng(null);
>
### 03-node-express 配置路由
>
1. 调用 ./routes/ajax
  - var ajaxRouter = require('./routes/ajax');
2. 配置路由的命名空间
  - app.use('/ajax',ajaxRouter);
  - 默认路径前缀是 '/ajax'
3. 在router文件下设置新js文件即可
>
###  04-跨域问题
>
* 四种
1. jsonp 
  - 原理 通过script标签 img a 等可以绕过跨域
  - 现在几乎不用
  - jsonp只能 获取数据 不能提交数据
>
* 目前解决跨域比较主流的方法
2. 服务器nginx转发(后端服务器配置 )
3. 客户端 webpack配置代理,打完包 webpack就不存在了
4. cors 
>
### 05-原生js代码与jquery实现效果有什么优劣势
>
1.  用jquery也是原生的js
* 原生js 
  - 原生的js可以根据自己的业务逻辑写代码
  - 更有针对性,没有多余的代码
  - 缺点: 要注意代码的兼容性和扩展能力
  - 代码抽象层次较低,需要时间和精力,经验;
* jquery
  - 代码兼容性好,扩展能力强
  - 对DOM操作简易,开发效率高
  - 缺点: 业务简单时,有一部分代码是无用的
 >
### 06-原生js Ajax与 JQ Ajax 
>
* 原生js 
  - 注意兼容性 -- 判断IE是否支持XMLHttpRequest对象
  - 通过 new ActiveXObject() 通过它可以访问windows的本地文件系统和应用程序，
  - 
* ajax 数据交互
* 不利于seo优化
>
### 07-ajax使用场景
>
* 在适合的场合使用Ajax，才能充分发挥它的长处，改善系统性能和用户体验,Ajax的特点在于异步交互，动态更新web页面
1. 用Ajax进行数据验证
  - 表单验证数据唯一性
>
2. 按需取数据
  - 应用Ajax改进分类树的实现机制按需取数据.
>
3. 自动更新页面
>
### 08-Ajax的优势和不足
>
* 优势
  - 不需要插件的支持 -- 用户只需要允许javascript在浏览器上即可
  - 优秀的用户体验 -- 能在不刷新整个页面的前提下更新数据
  - 提高Web程序的性能 -- Ajax模式只是通过XMLHttpRequest对象向服务器端提交希望提交的数据，即按需发送。
  - 减轻服务器和带宽的负担 -- Ajax的工作原理相当于在用户和服务器之间加了一个中间层,使用户操作与服务器响应异步化;便于客户端资源来处理，减轻服务器和带宽的负担。

* 缺点
  - 浏览器对XMLHttpRequest对象的支持度不足
  - 破坏浏览器前进，“”后退“”按钮的正常功能
  - 对搜索引擎的支持度不足
  - 开发和调试工具的缺乏
>
### 09-Ajax状态
>
* readyState有五种状态：
  - 0 (未初始化)： (XMLHttpRequest)对象已经创建，但还没有调用open()方法；
  - 1 (载入)：已经调用open() 方法，但尚未发送请求；
  - 2 (载入完成)： 请求已经发送完成；
  - 3 (交互)：可以接收到部分响应数据；
  - 4 (完成)：已经接收到了全部数据，并且连接已经关闭。
* status 辅状态判断
  - 100——客户必须继续发出请求
  - 101——客户要求服务器根据请求转换HTTP协议版本
  - 200——成功
  - 201——提示知道新文件的URL
  - 300——请求的资源可在多处得到
  - 301——删除请求数据
  - 404——没有发现文件、查询或URl
  - 500——服务器产生内部错误
