# 数字 Number

## 数字千分位分割
```javascript
function commafy(num) {
  return num.toString().replace(/(\d{1,3})(?=(\d{3})+$)/g,'$1,')
}
```
