# 数字 Number

## 数字千分位分割
```javascript
function commafy(num) {
  return (num.toString().indexOf ('.') !== -1) ? num.toLocaleString() : num.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
}
```