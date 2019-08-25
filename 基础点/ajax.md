# ajax
>
## 01-ajax简介
>
* AJAX是 “Asynchronous JavaScript And XML”的缩写(即：异步的JavaScript和XML)，是一种实现[无页面刷新]获取服务器数据的混合技术。
>
* 意义
    * 提升用户体验
    * 节省带宽
    * 提高开发能力，开拓设计范围
>
##  02-AJAX技术的核心 - XMLHttpRequest对象
>
`XMLHttpRequest`对象是浏览器提供的一个API（而不是JavaScript原生的），用来顺畅地向服务器发送请求并解析服务器响应。

1. `XMLHttpRequest`只是一个JavaScript对象，确切的说，是一个**构造函数**。有属性，有方法，需要通过`new`关键字进行实例化；
2. `XMLHttpRequest`对象是不断被扩展的。随着XML对象被广泛的接收，W3C也开始着手制定相应的标准来规范其行为。目前，`XMLHttpRequest`有两个级别：1级提供了XML对象的实现细节，2级进一步发展了XML对象，额外添加了一些方法，属性和数据类型。但是，并不是所有浏览器都实现了XML对象2级的内容；
3.  `getAllResponseHeaders()`  把 HTTP 响应头部作为未解析的字符串返回。
    * 如果 `readyState` 小于 3，这个方法返回 null。否则，它返回服务器发送的所有 HTTP 响应的头部。头部作为单个的字符串返回，一行一个头部。每行用换行符 "\r\n" 隔开。
4. `open()`  初始化一个请求. 该方法用于JavaScript代码中;如果是本地代码, 使用 `openRequest()` 方法代替.
> **注意:** 在一个已经激活的 request 下（已经调用open()或者openRequest()方法的request）再次调用这个方法相当于调用了 abort() 方法。
5. `method` 该请求所要访问的URL
  + `async` 一个可选的布尔值参数，默认为 true ,意味着是否执行异步操作，如果值为 false ,则 send() 方法不会返回任何东西，直到接受到了服务器的返回数据。如果为值为 true，一个对开发者透明的通知会发送到相关的事件监听者。
  + `user`  用户名可选参数，为授权使用；默认参数为空字符串
  + `password`  密码，可选参数，为授权使用；默认参数为空字符串
```js
var xhr = new XMLHttpRequest();
```
* 该实例属性,方法有: 
    *  `.open()`：准备启动一个AJAX请求；
    * `.setRequestHeader()`：设置请求头部信息；
    * `.send()`：发送AJAX请求；
    * `.getResponseHeader()`: 获得响应头部信息；
    * `.getAllResponseHeader()`：获得一个包含所有头部信息的长字符串；
    * `.abort()`：取消请求；
>
>
```javascript
  获取数据
  xhr.open("GET", "http://www.bufantec.com/api/douban/movie/in_theaters", true);
  xhr,send(null) 必填项

  传参
  xhr.open("GET", "http://www.bufantec.com/api/douban/movie/in_theaters?limit=10", true);
  xhr.send(null)
```
>
```javascript
  xhr.open("POST", "http://www.bufantec.com.api/douban/movie/in_theaters", true);
  xhr.send(null) 可以传参
```
>
* 属性:
    * `.responseText`：包含响应主体返回文本；
    * `.responseXML`：如果响应的内容类型时`text/xml`或`application/xml`，该属性将保存包含着相应数据的XML DOM文档；
    * `.status`：响应的HTTP状态如 200 表示成功，而 404 表示 "Not Found" 错误。当 `readyState` 小于 3 的时候读取这一属性会导致一个异常；
    * `.statusText`：HTTP状态的说明；
    * `.readyState`：表示“请求”/“响应”过程的当前活动阶段
*  **浏览器还为该对象提供了一个`onreadystatechange`监听事件，每当XML实例的`readyState`属性变化时，就会触发该事件的发生。**
>
## 03-请求方式

+ `GET`

  GET请求用于**获取数据**，有时候我们需要获取的数据需要通过“查询参数”进行定位，在这种情况下，我们会将查询参数追加到URL的末尾，令服务器解析。

  查询参数是指一个由`?`号起始，由`&`符号分割的包含相应**键值对**的字符串。用来告知浏览器所要查询的特定资源。

  ```
  const query = "example.php?name=tom&age=24" // "?name=tom&age=24"即是一个查询参数
  ```

+ `POST`

  POST请求主要用于**向服务器发送应该被保存的数据**，因此POST请求天然比GET请求多需要一份**需要被保存的数据**。那么这些数据应该放在何处呢？毕竟.open()`方法接收的三个参数都不是需要传的参数

  这里就需要用到`.send()`方法，需要发送的数据会作为`.send()`方法的参数最终被发往服务器，该数据可以是任意大小，任意类型。注意`.send()`方法的参数一般不可为空，也就是说，对于不需要发送任何数据的GET请求，也需要在调用`.send()`方法时，向其传入`null`值。

  

## 04-设置请求头

每个HTTP请求和响应都会带有相应的头部信息，包含一些与数据，收发者网络环境与状态等相关信息。XMLHttpRequest对象提供的`.setRequestHeader()`方法为开发者提供了一个操作这两种头部信息的方法，并允许开发者自定义请求头的头部信息。

默认情况下，当发送AJAX请求时，会附带以下头部信息：

- `Accept`：浏览器能够处理的内容类型；
- `Accept-Charset`: 浏览器能够显示的字符集；
- `Accept-Encoding`：浏览器能够处理的压缩编码；
- `Accept-Language`：浏览器当前设置的语言；
- `Connection`：浏览器与服务器之间连接的类型；
- `Cookie`：当前页面设置的任何Cookie；
- `Host`：发出请求的页面所在的域；
- `Referer`：发出请求的页面URI；
- `User-Agent`：浏览器的用户代理字符串；
>
## 05-处理响应

先来处理一下同步的`GET`请求的响应

```js
var xhr = new XMLHttpRequest()
xhr.open("get", "example.php", false)
xhr.send(null)
// 由于是同步的AJAX请求，因此只有当服务器响应后才会继续执行下面的代码
// 因此xhr.status的值一定不为默认值
if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
    alert(xhr.responseText)
} else {
    alert("Request was unsuccessful: " + xhr.status)
}
```

通过之前提到的xhr`.status`属性（它存储着响应的HTTP状态）判断请求是否成功，如果成功的话，我们将读取xhr`.responseText`属性中存储的返回值。但是，当我们的请求为异步时，问题就稍微变得复杂了，由于是异步的请求，在`xhr.open(...)`语句被执行后，JavaScript引擎会紧接着执行下面的判断语句，而这时由于尚未来得及响应，我们注定会得到一个默认的xhr.status值，因此，我们永远都不可能获取请求的资源了。

怎么解决呢？通过为XMLHTTPRequest实例添加`onreadystatechange`事件处理程序。

xhr实例的`readystatechange`事件会监听xhr`.readyState`属性的变化，你可以将这个属性想象为一个计数器，随着AJAX流程的推进而不断累加，其可取的值如下：

- **0**：未初始化 -- 尚未调用`.open()`方法；
- **1**：启动 -- 已经调用`.open()`方法，但尚未调用`.send()`方法；
- **2**：发送 -- 已经调用`.send()`方法，但尚未接收到响应；
- **3**：接收 -- 已经接收到部分响应数据；
- **4**：完成 -- 已经接收到全部响应数据，而且已经可以在客户端使用了；

有了这个时间处理程序对AJAX进程做监听，剩下的事就简单多了，一个异步的GET请求代码如下：

```js
const xhr = new XMLHttpRequest()
xhr.onreadystatechange = () => {
    if (xhr.readyState  ==  4 && xhr.status == 200)
    {
    	console.log(xhr.responseText)
    }
  }
}
xhr.open("get", "example.php", true)
xhr.send(null)
```

**注意**：为了确保跨浏览器的兼容性，必须要在调用`.open()`方法之前指定事件处理程序，因为`.open()`方法的执行也包含在该事件处理程序的监听范围之内



++++++++++

## 06-取消请求

调用`.abort()`方法。

该方法会令XHR对象实例停止触发事件，并且不再允许访问任何和响应有关的对象属性。
>
## 07-更多
>
此内容为 XMLHttpRequest2 级规范（七伤拳），还没有全面普及，存在一定的兼容性问题（有一定走火入魔的概率），习此技者，切记看安全事项（浏览器兼容表）

+ 第一式：超时设定

  当我们发送一个AJAX请求，却迟迟得不到服务器响应，这种感觉是很糟糕的。为了缓解这种糟糕的感觉，XMLHttpRequest 2级规范为我们提供了一个额外的属性和事件监听事件：

  + `timeout`属性：设置超时时间，单位为毫秒；
  + `timeout`事件：当响应时间超出实例对象timeout属性时被触发；

  使用方式如下：

  ```js
  // 当响应时间超过1秒时，请求中止，弹出提示框
  xhr.timeout = 1000
  xhr.ontimeout = () => { alert("Request did not return in a second.") }
  ```

  注意，当请求终止时，会调用`ontimeout`事件处理程序，此时xhr的`readyState`属性的值可能已变为4，这意味着会继续调用`onreadystatechange`事件处理程序。

  浏览器兼容性：

  + 桌面端 
    - IE 10+ 与其他浏览器均支持
  + 移动端 
    - IE Mobile 10+ 与其他浏览器均支持

+ 第二式：进度事件

  Progress Events规范是W3C制定的一个工作草案。该规范定义了与客户端与服务器通信相关的一系列事件，这些事件监听了通信进程中的各个关键节点，使我们能够以更细的颗粒度掌控数据传输过程中的细节。目前共有6个进度事件，他们会随数据传输进展被顺序触发（除了error，abort事件），让我们看看他们的定义和浏览器兼容情况：

  - `loadstart`：在接收到响应数据的第一个字节时触发； 
    - 桌面端：除 Safari Mobile 未知外，其他浏览器均支持
    - 移动端：除 Safari Mobile 未知外，其他浏览器均支持
  - `progress`：在接收响应期间持续不断地触发； 
    - 桌面端：IE10+ 与其他浏览器均支持
    - 移动端：均支持
  - `error`：在请求发生错误时触发； 
    - 桌面端：所有浏览器均支持（[信息来源](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FErrorEvent)）
    - 移动端：除IE Mobile不支持外，其他浏览器均支持（[信息来源](https://link.juejin.im?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fen-US%2Fdocs%2FWeb%2FAPI%2FErrorEvent)）
  - `abort`：在调用`abort()`方法时触发； 
    - 桌面端：未知
    - 移动端：未知
  - `load`：在接收到完整的响应数据时触发； 
    - 桌面端：IE7+ 与其他浏览器均支持
    - 移动端：Chrome for Android，Edge，Firefox Mobile支持，其余浏览器未知
  - `loadend`：在通信完成或者触发`error`，`abort`，或`load`事件后触发； 
    - 桌面端：所有浏览器不支持
    - 移动端：所有浏览器不支持
>
1. load事件

   该事件帮助我们节省了`readstatechange`事件，我们不必在XHR对象实例上绑定该事件监听函数以追踪实例上`readState`属性的变化，而是可以直接使用以下代码：

   ```js
   const xhr = new XMLHttpRequest()
   xhr.onload = () => {
       if ((xhr.status >= 200 && xhr.status <300) || xhr.status == 304) {
           alert(xhr.responseText)
       } else {
           alert("Something wrong!")
       }
   }
   xhr.open("get", "example.php", true)
   xhr.send(null)
   ```

2. progress事件

   该事件令我们可以实现我们梦寐以求的加载进度条效果。因为`onprogress`事件处理程序会接收到一个`event`对象，其`target`属性为XHR对象实例，但却额外包含着三个属性：

   - `lengthComputable`：表示进度信息是否可用的布尔值；
   - `position`：表示目前接收的字节数；
   - `totalSize`：表示根据Content-Length响应头部确定的预期字节数；

   很显然，我们的加载进度条所需的一切资源都准备就绪，我们只需写出下面的代码：

   ```js
   const xhr = new XMLHttpRequest()
   xhr.onload = () => {
       if ((xhr.status >= 200 && xhr.status <300) || xhr.status == 304) {
           alert(xhr.responseText)
       } else {
           alert("Something wrong!")
       }
   }
   // 加载进度条
   xhr.onprogress = function(event) {
       const divStatus = document.getElementById("status")
       if (event.lengthComputable) {
           divStatus.innerHTML = `Received ${event.postion} of ${event.totalSize} bytes`
       }
   }
   xhr.open("get", "example.php", true)
   xhr.send(null)
   ```

   **注意：需要在`.open()`方法前调用`onprogress`事件处理程序哦**
>
## 08-Ajax原生 js 实现
>
```js
var ajax = {};
ajax.httpRequest = function () {
    //判断是否支持XMLHttpRequest对象
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
    //兼容IE浏览器
    var versions = [
        "MSXML2.XmlHttp.6.0",
        "MSXML2.XmlHttp.5.0",
        "MSXML2.XmlHttp.4.0",
        "MSXML2.XmlHttp.3.0",
        "MSXML2.XmlHttp.2.0",
        "Microsoft.XmlHttp"
    ];
    //定义局部变量xhr,储存IE浏览器的ActiveXObject对象
    var xhr;
    for (var i = 0; i < versions.length; i++) {
        try {
            xhr = new ActiveXObject(versions[i]);
            break;
        } catch (e) {
        }
    }
    return xhr;
};

ajax.send = function (url, callback, method, data, async) {
    //默认异步
    if (async === undefined) {
        async = true;
    }
    var httpRequest = ajax.httpRequest();
    //初始化HTTP请求
    httpRequest.open(method, url, async);
    //onreadystatechange函数对象
    httpRequest.onreadystatechange = function () {
        //readyState 的值等于4，从服务器拿到了数据
        if (httpRequest.readyState == 4) {
            //回调服务器响应数据
            callback(httpRequest.responseText)
        }
    };
    if (method == 'POST') {
          //给指定的HTTP请求头赋值
        httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    }
      //发送HTTP请求
    httpRequest.send(data);
};
//实现GET请求
ajax.get = function (url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url + (query.length ? '?' + query.join('&') : ''), callback, 'GET', null, async)
};
//实现POST请求
ajax.post = function (url, data, callback, async) {
    var query = [];
    for (var key in data) {
        query.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
    }
    ajax.send(url, callback, 'POST', query.join('&'), async)
};
```
>
* 
