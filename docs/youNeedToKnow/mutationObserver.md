## MutationObserver
Mutation Observer API 用来监视 DOM 变动。DOM 的任何变动，比如节点的增减、属性的变动、文本内容的变动，这个 API 都可以得到通知。

DOM 的变动会触发 Mutation Observer 事件，但与事件不同的是，Mutation Observer 是异步触发，也就是说，Mutation Observer 事件会在所有的 DOM 操作完成后才触发一次。

### 实例
回调函数接受两个参数，一个是变动的数组，一个是观察器实例
```javascript
let observer = new MutationObserver(function (mutations, observer) {
  mutations.forEach(function(mutation) {
    console.log(mutation)
  })
})
```

### 方法

#### 1. observe
`observe`方法用来启动监听，它接受两个参数

第一个是需要观察的节点

第二个是配置对象，配置项的前三项必须至少设置一项，否则会报错

```javascript
var container = document.querySelector('.container');

observer.observe(container, {
  childList:true, // 子节点的变动（指新增，删除或者更改）
  attributes:true, // 属性的变动
  characterData:true, // 节点内容或节点文本的变动
  subtree:false, // 是否将该观察器应用于该节点的所有后代节点
  attributeOldValue:false, // 观察attributes变动时，是否需要记录变动前的属性值
  characterDataOldValue:false, // 表示观察characterData变动时，是否需要记录变动前的值
  attributeFilter:[], // 表示需要观察的特定属性,如 ['class','src']
})
```

#### 2.disconnect
`disconnect()`方法用来停止观察

#### 3. takeRecords
`takeRecords()`方法用来清除变动记录，即不再处理未处理的变动。该方法返回变动记录的数组。

### MutationRecord
DOM 每次发生变化，就会生成一条变动记录（MutationRecord 实例）。该实例包含了与变动相关的所有信息。Mutation Observer 返回的第一个参数就是一个个MutationRecord实例所组成的数组。

`MutationRecord`中包含的信息
- type：观察的变动类型（attribute、characterData或者childList）。
- target：发生变动的DOM节点。
- addedNodes：新增的DOM节点。
- removedNodes：删除的DOM节点。
- previousSibling：前一个同级节点，如果没有则返回null。
- nextSibling：下一个同级节点，如果没有则返回null。
- attributeName：发生变动的属性。如果设置了attributeFilter，则只返回预先指定的属性。
- oldValue：变动前的值。这个属性只对attribute和characterData变动有效，如果发生childList变动，则返回null。
