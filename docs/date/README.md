# 日期 date

## 时间戳转换为时间
- 默认为当前时间转换结果
```javascript
  function timestampToTime(timestamp = Date.parse(new Date()), isPHP = false) {
    const date = new Date(timestamp * (isPHP ? 1000 : 1))
    return `${date.getFullYear()}-${date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  }
```  