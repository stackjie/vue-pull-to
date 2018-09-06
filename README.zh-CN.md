# Vue-Pull-To
一个集成了下拉刷新、上拉加载、无限滚动加载的Vue组件。

[![Build Status](https://travis-ci.org/stackjie/vue-pull-to.svg?branch=master)](https://travis-ci.org/stackjie/vue-pull-to)
[![Coverage Status](https://coveralls.io/repos/github/stackjie/vue-pull-to/badge.svg?branch=master)](https://coveralls.io/github/stackjie/vue-pull-to?branch=master)
[![GitHub issues](https://img.shields.io/github/issues/stackjie/vue-pull-to.svg)](https://github.com/stackjie/vue-pull-to/issues)
[![GitHub stars](https://img.shields.io/github/stars/stackjie/vue-pull-to.svg)](https://github.com/stackjie/vue-pull-to/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/stackjie/vue-pull-to/master/LICENSE)
[![npm](https://img.shields.io/npm/v/vue-pull-to.svg)](https://www.npmjs.com/package/vue-pull-to)

## 在线示例
<img src="http://ot6wx4ryg.bkt.clouddn.com/vuepullto_qrcode.png" style="display: block;" alt="qrcode">

[examples](http://www.vuepullto.top)

## 安装
```
 npm install vue-pull-to --save
```

## 快速上手
``` vue
<template>
  <div>
    <pull-to :top-load-method="refresh">
      <ul v-for="item in dataList">
        <li>{{ item }}</li>
      </ul>
    </pull-to>
  </div> 
</template>

<script>
  import PullTo from 'vue-pull-to'
  import { fetchDataList } from 'api'
  
  export default {
    name: 'example',
    components: {
      PullTo
    },
    data() {
      return {
        dataList: []
      }
    },
    methods: {
      refresh(loaded) {
       fetchDataList()
        .then((res) => {
          this.dataList = res.data.dataList
          loaded('done')
        })
      }
    }
  }
</script>
 ```
组件会默认占据父元素的百分之百高度。props `top-load-method`和`bottom-load-method`会默认传进一个`loaded`参数，该参数是一个改变组件加载状态的函数，必须调用一次`loaded`不然组件就会一直处于加载状态，如果执行`loaded('done')`组件内部状态就会变成成功加载的状态，`loaded('fail')`为失败。

[更多使用示例请参考Examples的代码](https://github.com/stackjie/vue-pull-to/tree/master/examples)
 
 ## API文档
 
 ### props
| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- | 
| distance-index | 滑动的阀值（值越大滑动的速度越慢） | Number | 2 |
| top-block-height | 顶部在滚动容器外的块级元素区域高度 | Number | 50 |
| bottom-block-height | 底部在滚动容器外的块级元素区域高度 | Number | 50 |
| wrapper-height | 滚动容器的高度 | String | '100%' |
| top-load-method | 顶部下拉时执行的方法 | Function | |
| bottom-load-method | 底部上拉时执行的方法 | Function | |
| is-throttle-top-pull | 是否截流`top-pull`事件的触发以保证性能，如果需要实时触发设为false | Boolean | true |
| is-throttle-bottom-pull | 是否截流`bottom-pull`事件的触发以保证性能，如果需要实时触发设为false | Boolean | true |
| is-throttle-scroll | 是否截流`scroll`事件的触发以保证性能，如果需要实时触发设为false | Boolean | true |
| is-top-bounce | 是否启用下拉回弹效果 | Boolean | true |
| is-bottom-bounce | 是否启用上拉回弹效果 | Boolean | true |
| top-config | 滚动容器顶部信息的一些配置 | Object | 默认配置 |
| bottom-config | 滚动容器底部信息的一些配置 | Object | 默认配置 |

`topConfig`和`bottomConfig`可配置的选项和默认配置项的值
``` javascript
const TOP_DEFAULT_CONFIG = {
  pullText: '下拉刷新', // 下拉时显示的文字
  triggerText: '释放更新', // 下拉到触发距离时显示的文字
  loadingText: '加载中...', // 加载中的文字
  doneText: '加载完成', // 加载完成的文字
  failText: '加载失败', // 加载失败的文字
  loadedStayTime: 400, // 加载完后停留的时间ms
  stayDistance: 50, // 触发刷新后停留的距离
  triggerDistance: 70 // 下拉刷新触发的距离
}

const BOTTOM_DEFAULT_CONFIG = {
  pullText: '上拉加载',
  triggerText: '释放更新',
  loadingText: '加载中...',
  doneText: '加载完成',
  failText: '加载失败',
  loadedStayTime: 400,
  stayDistance: 50,
  triggerDistance: 70
}
```
 ### slots
| 名称 | 说明 | scope |
| --- | --- | --- |
| default | 默认slot滚动容器的内容 |
| top-block | 滚动容器外顶部的内容（支持作用域slot需用`template`标签加上`scope`属性）| `state`：当前的状态、`state-text`：状态对应的文本 |
| bottom-block | 滚动容器外底部的内容（支持作用域slot需用`template`标签加上`scope`属性）| `state`：当前的状态、`state-text`：状态对应的文本 |

 ### events
| 事件名 | 说明 |
| --- | --- |
| top-state-change | 顶部状态发生了改变时触发，第一个参数为当前的状态 |
| bottom-state-change | 底部状态发生了改变时触发，第一个参数为当前的状态 |
| top-pull | 下拉时触发，第一个参数为当前拉动的距离值，默认会被截流，可配置props `isThrottle`来实时触发 |
| bottom-pull | 上拉时触发，第一个参数为当前拉动的距离值，默认会被截流，可配置props `isThrottle`来实时触发 |
| infinite-scroll | 当滚动容器滚动到底部时触发 |
| scroll | 滚动时触发，事件回调函数第一个参数为原生的`event`对象 |
