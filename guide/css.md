从优化的角度来说，能用 CSS 解决问题的话就不要用图片了。<br />
<br />CSS3 强大的动画功能，可以实现很炫酷动效。<br />

## CSS3 动画基础

<br />作为一个小白，首先来看下用 CSS 怎么让元素动起来。<br />

### transform

<br />主要使用的属性之一，可以给元素进行 2D 或 3D 转换。主要就包括移动(translate)、旋转(rotate)、缩放(scale)和倾斜(skew)。一般来说，方法都是既有针对两轴或者三轴的，也有单独针对某个轴设置的，通常是 '方法Y'，轴大写即可。<br />

### 2D 转换

<br />有个转换点的问题<br />

#### 啊发发但是transform-origin

<br />默认的转换点在中心。<br />

```css
transform-origin: x-axis y-axis z-axis;
```

<br />单位一般来说就是百分比，z 轴的一般用不上。对于 translate 位移来说没有意义。<br />

#### translate() 位移

<br />根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动。<br />被移动的元素类似于相对定位，不会影响其他元素。<br />
<br />值的单位一般是 `px`<br />

```css
div{
    transform: translate(50px, 50px)
}
```

<br />其他相关方法： `translateX()`和 `translateY()`<br />

#### rotate() 旋转

<br />这个比较简单，就一个参数，单位是 `deg`，代表°，允许负值。<br />

```css
div{
    transform: rotate(30deg)
}
```

<br />默认是旋转中心就是 div 的中心，可以通过 `transform-origin` 改变中心位置。<br />

#### scale() 缩放

<br />宽度和高度的缩放，参数是数值，代表缩放倍数。<br />

```css
div{
    transform: scale(2,3);
}
```

<br />默认是旋转中心就是 div 的中心，可以通过 `transform-origin` 改变中心位置。<br />

#### skew() 倾斜

<br />分别表示X轴和Y轴倾斜的角度，可以用来做**平行四边形**，这是之前没想到的。<br />

```css
div {
    transform: skew(30deg,20deg);
}
```

<br />默认是旋转中心就是 div 的中心，可以通过 `transform-origin` 改变中心位置。<br />

### 3D转换

<br />与 2D 的区别在于有 Z 轴方向或者其他能够起到3维效果上的变化。<br />
<br />相对就很好理解。<br />
<br />除此之外，还有几个伴生属性<br />

#### tansform-style

<br />规定子元素在空间中如何显示。<br />

```css
transform-style: flat|preserve-3d;
```

<br />flat: 子元素在2D平面呈现。<br />preserve-3d: 子元素在3D平面呈现。<br />
<br />具体还要看实例。<br />

#### perspective 透视视图

<br />用在子元素使用了转换的父元素上，表示元素距离视图的距离。<br />
<br />这个距离只，我还没理解清除，但是效果倒是很明显：<br />

```html
<style>
#div1
{
    position: relative;
    height: 150px;
    width: 150px;
    margin: 50px;
    padding:10px;
    border: 1px solid black;
    perspective:150px;
}

#div2
{
    padding:50px;
    position: absolute;
    border: 1px solid black;
    background-color: red;
    transform: rotateY(45deg);
}
</style>

<div id="div1">
  <div id="div2">HELLO</div>
</div>
```

<br />![](https://cdn.nlark.com/yuque/0/2021/png/1529429/1631949055949-86f74468-0207-47e5-b932-ef031106cfc4.png#clientId=u9308a4cf-b735-4&crop=0&crop=0&crop=1&crop=1&from=paste&id=u06431dc9&margin=%5Bobject%20Object%5D&originHeight=337&originWidth=350&originalType=url&ratio=1&rotation=0&showTitle=false&status=done&style=none&taskId=u6c8cd981-09fa-40cc-be0e-c8341fa89cf&title=)<br />

<a name="dc2f7699"></a>
#### perspective-origin 底面位置

<br />同样是用在子元素使用了转换的父元素上，具体就搞得我有点晕，[例子](https://www.runoob.com/try/try.php?filename=trycss3_perspective-origin1)<br />

<a name="a50d46c2"></a>
### css3 过渡 transition
| 属性 | 描述 | CSS |
| --- | --- | --- |
| [transition](https://www.runoob.com/cssref/css3-pr-transition.html) | 简写属性，用于在一个属性中设置四个过渡属性。 | 3 |
| [transition-property](https://www.runoob.com/cssref/css3-pr-transition-property.html) | 规定应用过渡的 CSS 属性的名称。 | 3 |
| [transition-duration](https://www.runoob.com/cssref/css3-pr-transition-duration.html) | 定义过渡效果花费的时间。默认是 0。 | 3 |
| [transition-timing-function](https://www.runoob.com/cssref/css3-pr-transition-timing-function.html) | 规定过渡效果的时间曲线。默认是 "ease"。 | 3 |
| [transition-delay](https://www.runoob.com/cssref/css3-pr-transition-delay.html) | 规定过渡效果何时开始。默认是 0。 | 3 |


<br />一般来说，直接使用 transition 就进行了，<br />语法<br />

```
transition: property duration timing-function delay, property duration timing-function delay;
```

<br />多个CSS属性需要过度，就使用逗号隔开。<br />

```html
<style> 
div
{
	width:100px;
	height:100px;
	background:red;
	transition:width 2s, height 2s;	

}

div:hover
{
	width:300px;
	height: 200px
}
</style>
</head>
<body>
<p><b>注意：</b>该实例无法在 Internet Explorer 9 及更早 IE 版本上工作。</p>

<div></div>

<p>鼠标移动到 div 元素上，查看过渡效果。</p>

</body>
```


<a name="Yoz54"></a>
### CSS3 动画
两个比较重要的东西，一个是 animation，是元素的动画属性，规定了一个完整的动画的相关的参数，比如动画一个周期时间、速度曲线、播放模式、延迟时间等等

| 属性 | 描述 | CSS |
| --- | --- | --- |
| [animation](https://www.runoob.com/cssref/css3-pr-animation.html) | 所有动画属性的简写属性。 | 3 |
| [animation-name](https://www.runoob.com/cssref/css3-pr-animation-name.html) | 规定 @keyframes 动画的名称。 | 3 |
| [animation-duration](https://www.runoob.com/cssref/css3-pr-animation-duration.html) | 规定动画完成一个周期所花费的秒或毫秒。默认是 0。 | 3 |
| [animation-timing-function](https://www.runoob.com/cssref/css3-pr-animation-timing-function.html) | 规定动画的速度曲线。默认是 "ease"。 | 3 |
| [animation-fill-mode](https://www.runoob.com/cssref/css3-pr-animation-fill-mode.html) | 规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。 | 3 |
| [animation-delay](https://www.runoob.com/cssref/css3-pr-animation-delay.html) | 规定动画何时开始。默认是 0。 | 3 |
| [animation-iteration-count](https://www.runoob.com/cssref/css3-pr-animation-iteration-count.html) | 规定动画被播放的次数。默认是 1。 | 3 |
| [animation-direction](https://www.runoob.com/cssref/css3-pr-animation-direction.html) | 规定动画是否在下一周期逆向地播放。默认是 "normal"。 | 3 |
| [animation-play-state](https://www.runoob.com/cssref/css3-pr-animation-play-state.html) | 规定动画是否正在运行或暂停。默认是 "running"。 | 3 |

​

​

另一个东西就是定义动画到底怎么动，@keyframes。<br />​

@keyframes 规定动画名称，使用 form（0%）、to（100%） 来表示元素在动画某个阶段（百分比表示）的 css 属性的指。
```html
@keyframes myfirst
{
    0%   {background: red; left:0px; top:0px;}
    25%  {background: yellow; left:200px; top:0px;}
    50%  {background: blue; left:200px; top:200px;}
    75%  {background: green; left:0px; top:200px;}
    100% {background: red; left:0px; top:0px;}
}
```
​

连起来，就是一个完整动画。<br />​

​

到这里，CSS3的动画，就基本上差不多了，剩下的就是熟练。<br />​

网上有很多现成的、优秀的动画库：<br />​<br />

1.  [Animate.css](https://animate.style/)

纯CSS，使用比较简单，直接给元素添加相对应的 css 类就完事。当然，还可以对动效进行调整，可以看源码，或者看官网提供的详细的API。另外，有种说法，最好在给元素添加动效样式完成动效后，马上将这个动效样式去掉。<br />​<br />

2. ​[Bounce.js](http://bouncejs.com/)

这个就有意思了，是一个能够生成CSS3动效的小工具，它是用JavaScript编写的'，提供了一个Web界面，你可以添加一个组件然后就可以选择包括Scale，Translate，Rotate，Skew这些动效类型，还有一些预制的效果，然后分别设置它们的参数，当达到你想要的效果后，你可以将这个动效以CSS的方式导出，这样你就可以将它应用到你的应用中了。<br />​<br />

3. [Anicollection](http://anicollection.github.io/#/)

与Animate.css十分类似，也是一个预定义了一系列动效的CSS库。但与Animate.css的最大区别可能是，它定义的那些动效更炫也更酷一些，如果你的网站也很新潮，那可以考虑使用这个CSS动效库<br />​<br />

4. ​[AniJS](http://anijs.github.io/)　　

AniJS是一个通过JavaScript控制的动效库。它允许你通过它的链式语法来定义动效。内置的动效基于Anicollection，这个也相当的有意思了。<br />

5. ​[Hover.css](http://ianlunn.github.io/Hover/#effects)　　

Hover.css提供了大量的Hover效果，包括2D变换，图标变换，背景变换等等。而且几乎可以应用于所有元素，包括链接，按钮，logo，SVG甚至图片等等。<br />​<br />
