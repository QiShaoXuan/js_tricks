# you need to kow

## insertAdjacentHTML

`insertAdjacentHTML()`将指定的文本解析为HTML或XML，并将结果节点插入到DOM树中的指定位置。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接innerHTML操作更快。

```javascript
element.insertAdjacentHTML(position, text)
```

> position是相对于元素的位置，并且必须是以下字符串之一：

- 'beforebegin'
    元素自身的前面。
- 'afterbegin'
    插入元素内部的第一个子节点之前。
- 'beforeend'
    插入元素内部的最后一个子节点之后。
- 'afterend'
    元素自身的后面。

## document.implementation

implementation 属性可返回处理该文档的 DOMImplementation 对象。

```javascript
function parseHTML(str) {
  var tmp = document.implementation.createHTMLDocument()
  tmp.body.innerHTML = str
  return tmp.body.children
}

parseHTML(htmlString)
```

## 函数节流 throttle

指某些代码不可以在没有间断的情况下连续重复执行

```javascript
function throttle (method,wait=1000,context){
    clearTimeout(method.tid)
    method.tid = setTimeout(function(){
        method.call(context)
    },wait)
}
```

##  函数防抖 debounce

指一个事件如果频繁触发，会隔一段时间执行一次

```javascript
function debounce(fn,delay,mustRunDelay){
    var timer = null
    var t_start
    return function(){
        var context = this
        var args = arguments
        var t_curr = +new Date()
        clearTimeout(timer)
        if(!t_start){
            t_start = t_curr
        }
        if(t_curr - t_start >= mustRunDelay) {
            fn.apply(context,args)
            t_start = t_curr
        } else {
            timer = setTimeout(function(){
                fn.apply(context,args)
            },delay)
        }
    }
}
```



