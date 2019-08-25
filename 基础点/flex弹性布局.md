## flex弹性布局
>
### 01-Flex 布局是什么？
>
* 传统的布局 float margin padding position 的短板很多，css3中的 弹性布局方便很多
* Flex 是 Flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。
任何一个容器都可以指定为 Flex 布局。
* 
* ```css
    .box{
    display: flex;
    }```
>
* 行内元素也可以使用 Flex 布局。
* ```css
    .box{
    display: inline-flex;
    }```
>
* Webkit 内核的浏览器，必须加上-webkit前缀。
* ```css
    .box{
    display: -webkit-flex; /* Safari */
    display: flex;
    }```
>
* 注意，设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。
>
### 02-calc
>
1. `calc(expression)` 函数用于动态计算长度值
    + `expression` 	必须，一个数学表达式，结果将采用运算后的返回值。
    + 需要注意的是，运算符前后都需要保留一个空格，例如：`width: calc(100% - 10px)`
    + 任何长度值都可以使用`calc()`函数进行计算
    + `calc()`函数支持 "+", "-", "*", "/" 运算
    + `calc()`函数使用标准的数学运算优先级规则
------------------
2. `display: flex` 的使用，以及注意事项，兼容性等
    + [image.png](https://upload-images.jianshu.io/upload_images/6784887-690af0aeebadfcc9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/620)
    + 每个弹性容器都有两根轴：主轴（横轴）和交叉轴（侧轴、纵轴），两轴之间成90度关系。注意：水平的不一定就是主轴。
    + 每根轴都有起点和终点，这对于元素的对齐非常重要。
    + 弹性容器中的所有子元素称为<弹性元素>，弹性元素永远沿主轴排列。
    + 弹性元素也可以通过`display:flex`设置为另一个弹性容器，形成嵌套关系。因此一个元素既可以是弹性容器也可以是弹性元素。
>
### 02-基本概念
>
* 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。
项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。
>
### 03-容器的属性
>
* flex-direction  属性决定主轴的方向（即项目的排列方向）。
>
* flex-wrap  如果一条轴线排不下，如何换行。
>
* flex-flow  flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
>
* justify-content  属性定义了项目在主轴上的对齐方式
>
* align-items  属性定义项目在交叉轴上如何对齐。
>
* align-content 定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
>
* flex-direction  属性决定主轴的方向（即项目的排列方向）。
    * row（默认值）：主轴为水平方向，起点在左端。
    * row-reverse：主轴为水平方向，起点在右端。
    * column：主轴为垂直方向，起点在上沿。
    * column-reverse：主轴为垂直方向，起点在下沿。
* 注意： flex-direction 改为垂直方向时，jusitify控制垂直方向，align控制水平方向
* ```css
    .box {
        flex-direction: row | row-reverse | column | column-reverse;
    }```
>
* flex-wrap  如果一条轴线排不下，如何换行。
    * nowrap（默认）：不换行。
    * wrap：换行，第一行在上方。
    * wrap-reverse：换行，第一行在下方。
* ```css
    .box{
        flex-wrap: nowrap | wrap | wrap-reverse;
    }```
>
* flex-flow  flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。
* ```css
    .box {
        flex-flow: <flex-direction> || <flex-wrap>;
    }```
>
* justify-content属性  属性定义了项目在主轴上的对齐方式
    * flex-start（默认值）：左对齐
    * flex-end：右对齐
    * center： 居中
    * space-between：两端对齐，项目之间的间隔都相等。
    * space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。
    * space-evenly 每个项目两侧的间隔相等,两端也相等;
* ```css
    .box {
        justify-content: flex-start | flex-end | center | space-between | space-around;
    }```
>
* align-items属性定义项目在交叉轴上如何对齐。
    * flex-start：交叉轴的起点对齐。
    * flex-end：交叉轴的终点对齐。
    * center：交叉轴的中点对齐。
    * baseline: 项目的第一行文字的基线对齐。
    * stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。
* ```css
    .box {
        align-items: flex-start | flex-end | center | baseline | stretch;
    }```
>
* align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用
    * flex-start：与交叉轴的起点对齐。
    * flex-end：与交叉轴的终点对齐。
    * center：与交叉轴的中点对齐。
    * space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
    * space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
    * stretch（默认值）：轴线占满整个交叉轴。
* ```css
    .box {
        align-content: flex-start | flex-end | center | space-between | space-around | stretch;
    }```
>
### 04-项目的属性
>
* order  属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。
* ```css
    .item {
        order: <integer>;
    }```
>
* flex-grow  属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。
    * 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。
* ```css
    .item {
        flex-grow: <number>; /* default 0 */
    }```
>
* flex-shrink  属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小
    * 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。 负值对该属性无效。
* ```css
    .item {
        flex-shrink: <number>; /* default 1 */
    }```
>
* flex-basis  属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。 
    * 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
* ```css
    .item {
        flex-basis: <length> | auto; /* default auto */
    }```
>
* flex  flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。
    * 该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。
    * 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。
* ```css
    .item {
        flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
    }```
>
* align-self  align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖
    * align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
* ```css
    .item {
        align-self: auto | flex-start | flex-end | center | baseline | stretch;
    }```
>
### 05-居中
>
* 元素居中方式:
	* 已知子盒子宽高
		1. h = (父盒子 - 子盒子)高度的一半 margin: h auto;
		2. position top 50% left 50% margin-top -子盒子h/2 margin-left -子盒子w/2
		3. position top calc(50% - 子盒子h/2) left calc(50% - 子盒子w/2)
	* 未知子盒子宽高
		1. position top 50% left 50%  transform: translate(-50%,-50%)
		2. postion top 0 left 0 bottom 0 right 0 margin auto
		3. flex justify-content center align-items center
>
### 06-!important权重优先级
>
>
## Promise 
>
### Promise概念介绍
>
1. Promise 是一个构造函数,既然是构造函数,那么,我们就可以 new Promise() 得到一个Promise实例
2. 在 Promise上,有两个函数,分别叫做 resolve(成功之后的回调函数) 和 reject(失败之后的回调函数)
3. 在 Promise 构造函数的 Prototype属性上,有一个 .then()方法 ,也就是,只要是 Promise构造函数创建出来的实例,都可以访问到 .then()方法
4. Promise 表示一个异步操作: 每当我们 new一个 Promise的实例,这个实例,就表示一个具体的异步操作
5. 既然 Promise 创建的实例,是一个异步操作,那么,这个异步操作的结果,只能有两种状态
    * 状态一: 异步执行成功了,需要在内部调用,成功的回调函数 resolve 把结果返回给调用者
    * 状态二: 异步执行失败了,需要在内部调用,失败的回调函数 reject 把结果返回给调用者
    *  由于 Promise的实例,是一个异步操作,所以内部拿到操作的结果后,无法使用 return 把操作的结果返回给调用者;这时候,只能使用回调函数的形式,来把成功 或 失败的结果返回给调用者
6. 我们可以在 new 出来的 Primise实例上,调用 .then()方法,[预先] 为这个Promise 异步操作,指定成功(resolve) 和失败(reject)回调函数