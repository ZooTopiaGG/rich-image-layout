# rich_image_layout

> es6

## Build Setup

### 可以满足的需求

前端开发者经常遇到 处理富文本内容，这只是其中的一个小小需求，我们在为文本设置样式的时候 padding或者margin，图片和文字都被影响了 ，这里解决的是 图片文字，互不影响，你可以设置你文本的padding，也可以把图片宽度铺满。
用过简书的同学就知道 ，为什么 他里面的图片有的能自然居中，宽度够大的话，可以铺满整个屏幕，而文字却设置了padding或者margin，整体风格挺不错。

## 温馨提示： 一般富文本，前端开发者都包含在一个盒子里，在设置的样式的时候需注意，不要对盒子设置样式，只需对文本编辑器的标签设置，所以在使用编辑器的时候，尽量使用较为简单的编辑器，标签尽量单一一点的编辑器，设置样式也不复杂，然后在设置单独的图片样式

### css样式不能回溯，所以不能通过子元素查找父元素，当然可以用js，所以我们这里顺带处理了这个问题，直接找到父元素

#### 涉及到的知识点， 字符串的分割，替换，正则表达式的运用以及匹配文本里的对应元素

##### 以下是仅对Vue项目做的提示， 该插件对任何框架（angular、react、jquery、yui、mui等）都适用。

##### 满足的场景不多， 毕竟单一， 我会努力让它适用更多场景， 所以点星星吧，助我一臂之力

``` 
在入口文件中 直接使用
在vue 中
impory rich_image from 'rich_image_layout' -S

然后直接挂载到Vue原型上

Vue.proptype.$richimage = rich_image

然后在vue项目中 可以打印出 this.$richimage 已经包含在vue项目里了

接着调用this.$richimage.rich_image_layout(options) 即可

options:
    str: '<p>哈哈哈哈</p><p><img src="#"></p>', // 不能为空， 这是你整个富文本字符串
    splitStr1: 'div', // 分割字符串， 一般是你的img标签的父级标签 ，比如 div、p等
    flg: 'class="flex flex-pack-center" data-pimg="has-editor-img"', // 给父元素添加属性。可以自定义 ，用于设置样式
```
