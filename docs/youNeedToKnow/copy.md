## 深拷贝&&浅拷贝
中所周知，Object是引用数据类型，存储在内存的堆中，浅拷贝只是拷贝了另一个对象的内存地址，所以在修改时会同时修改另一个对象，而深拷贝会开辟新的内存地址，所以不会影响另一个对象

### 浅拷贝
```javascript
let obj1 = {a:'1',b:{c:1}}
// 直接赋值
let obj2 = obj1
// 使用Object.assign
//Object.assign()拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值
let obj3 = Object.assign({},obj1)
```

### 深拷贝
```javascript
//  JSON.parse && JSON.stringify
// 性能最高，速度最快，但是只能拷贝纯json
function deepClone(obj){
    let str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj)
        newobj = JSON.parse(str)
    } else {
        for(let i in obj){
            newobj[i] = typeof obj[i] === 'object' ? cloneObj(obj[i]) : obj[i]
        }
    }
    return newobj
}

// 递归
function deepClone(initalObj, finalObj ={}) {
  for (let i in initalObj) {
    let prop = initalObj[i]
    if(prop === finalObj) {
      continue
    }
    if (typeof prop === 'object') {
      finalObj[i] = (prop.constructor === Array) ? [] : {}
      arguments.callee(prop, finalObj[i]);
    } else {
      finalObj[i] = prop
    }
  }
  return finalObj
}

//  Object.create()
function deepClone(initalObj, finalObj) {
  let obj = finalObj || {}
  for (let i in initalObj) {
    let prop = initalObj[i]
    if(prop === obj) {
      continue
    }
    if (typeof prop === 'object') {
      obj[i] = (prop.constructor === Array) ? [] : Object.create(prop)
    } else {
      obj[i] = prop
    }
  }
  return obj
}

//  History API
function deepClone(obj) {
  const oldState = history.state
  history.replaceState(obj, document.title)
  const copy = history.state
  history.replaceState(oldState, document.title)
  return copy
}

//MessageChannel
//异步方法，用时需注意
const obj = /* ... */
const clone = await deepClone(obj)
function deepClone(obj) {
  return new Promise(resolve => {
    const {port1, port2} = new MessageChannel()
    port2.onmessage = ev => resolve(ev.data)
    port1.postMessage(obj)
  });
}
```
