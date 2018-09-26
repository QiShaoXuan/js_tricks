#   文档对象 DOM

## 判断当前位置是否为页面底部
- 返回值为true/false
```javascript
  function bottomVisible() {
    return document.documentElement.clientHeight + window.scrollY >= (document.documentElement.scrollHeight || document.documentElement.clientHeight)
  }
```

## 判断元素是否在可视范围内
- partiallyVisible为是否为完全可见
```javascript
function elementIsVisibleInViewport(el, partiallyVisible = false) {
    const {top,left,bottom,right} = el.getBoundingClientRect()

    return partiallyVisible ?
      ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
      ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth)) :
      top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth
  },
```

## 获取元素css样式
```javascript
function getStyle(el, ruleName){
  return getComputedStyle(el,null).getPropertyValue(ruleName)
}
```
