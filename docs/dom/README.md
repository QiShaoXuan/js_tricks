#   文档对象 DOM
## 判断当前位置是否为页面底部
- 返回值为true/false
```javascript
  function bottomVisible() {
    return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight);
  }
```  

## 返回当前网页地址
```javascript
  function currentURL() {
    return window.location.href
  }
```  

## 获取滚动条位置
```javascript
  function getScrollPosition(el = window) {
    return {
      x: (el.pageXOffset !== undefined) ? el.pageXOffset : el.scrollLeft,
      y: (el.pageYOffset !== undefined) ? el.pageYOffset : el.scrollTop
    }
  }
```  

## 获取url中的参数
```javascript
  function getURLParameters(url) {
    return url.match(/([^?=&]+)(=([^&]*))/g).reduce(
      (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
    )
  }
```  

##  页面跳转，是否记录在history中
```javascript
  function redirect(url, asLink = true) {
    asLink ? window.location.href = url : window.location.replace(url)
  }
```  

##  滚动条回到顶部动画
```javascript
  function scrollToTop() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollTop > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    } else {
      window.cancelAnimationFrame(scrollToTop);
    }
  }
```  