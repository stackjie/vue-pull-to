# Vue-Pull-To
A pull-down refresh and pull-up load more and infinite scroll component for Vue.js.

[zh-CN中文文档](https://github.com/stackjie/vue-pull-to/tree/master/README.zh-CN.md)

[![Build Status](https://travis-ci.org/stackjie/vue-pull-to.svg?branch=master)](https://travis-ci.org/stackjie/vue-pull-to)
[![Coverage Status](https://coveralls.io/repos/github/stackjie/vue-pull-to/badge.svg?branch=master)](https://coveralls.io/github/stackjie/vue-pull-to?branch=master)
[![GitHub issues](https://img.shields.io/github/issues/stackjie/vue-pull-to.svg)](https://github.com/stackjie/vue-pull-to/issues)
[![GitHub stars](https://img.shields.io/github/stars/stackjie/vue-pull-to.svg)](https://github.com/stackjie/vue-pull-to/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/stackjie/vue-pull-to/master/LICENSE)
[![npm](https://img.shields.io/npm/v/vue-pull-to.svg)](https://www.npmjs.com/package/vue-pull-to) 

## Live Examples
<img src="http://ot6wx4ryg.bkt.clouddn.com/vuepullto_qrcode.png" style="display: block;" alt="qrcode">

[examples](http://www.vuepullto.top)

## Installation
```
 npm install vue-pull-to --save
```

## Use Setup
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

The component will occupy 100% height of the parent element by default. props top-load-method and bottom-load-method will default to a loaded parameter, which is a function that changes the state of the component's load, and must be called once loaded. The component will always be loaded, if `loaded('done')` The internal state of the component will become a successful state of loading, `loaded('fail')` for the failure.

[For more examples, please refer to examples of the code](https://github.com/stackjie/vue-pull-to/tree/master/examples)
 
 ## API Docs
 
 ### props
| Attribute | Description | type | Default |
| --- | --- | --- | --- | 
| distance-index | Slip the threshold (the greater the value the slower the sliding) | Number | 2 |
| top-block-height | The height of the block element area outside the top of the scroll container | Number | 50 |
| bottom-block-height | The height of the block element area outside the scrolling container | Number | 50 |
| wrapper-height | The height of the scrolling container | String | '100%' |
| top-load-method | Top drop-down method | Function | |
| bottom-load-method | Bottom pull-up method | Function | |
| is-throttle-top-pull | Whether the disable of the `top-pull` throttle event is triggered to ensure performance if the real-time trigger is set to false | Boolean | true |
| is-throttle-bottom-pull | Whether the disable of the `bottom-pull` throttle event is triggered to ensure performance if the real-time trigger is set to false | Boolean | true |
| is-throttle-scroll | Whether the disable of the `scroll` throttle event is triggered to ensure performance if the real-time trigger is set to false | Boolean | true |
| is-top-bounce | Whether to enable the pull-down bounce effect | Boolean | true |
| is-bottom-bounce | Whether to enable the pull-up bounce effect | Boolean | true |
| top-config | Scroll the container at the top of the configuration | Object | default config |
| bottom-config | Scroll the container at the bottom of the configuration | Object | default config |

`topConfig` and `bottomConfig` Configurable options and default configuration item values
``` javascript
const TOP_DEFAULT_CONFIG = {
  pullText: '下拉刷新', // The text is displayed when you pull down
  triggerText: '释放更新', // The text that appears when the trigger distance is pulled down
  loadingText: '加载中...', // The text in the load
  doneText: '加载完成', // Load the finished text
  failText: '加载失败', // Load failed text
  loadedStayTime: 400, // Time to stay after loading ms
  stayDistance: 50, // Trigger the distance after the refresh
  triggerDistance: 70 // Pull down the trigger to trigger the distance
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
| Name | Description | scope |
| --- | --- | --- |
| default | The default slot scrolls the contents of the container |
| top-block | Scroll the contents of the top of the container outer (support the scope slot need to use `template` tag with scope `attribute`) | `state`：Current state、`state-text`：State corresponding to the text |
| bottom-block | Scroll the contents of the bottom of the container outer (support the scope slot need to use `template` tag with scope `attribute`) | `state`：Current state、`state-text`：State corresponding to the text |

 ### events
| name | Description |
| --- | --- |
| top-state-change | When the top state has changed, the first parameter is the current state |
| bottom-state-change | When the bottom state has changed, the first parameter is the current state |
| top-pull | Pull down the trigger, the first parameter for the current pull of the distance value, the default will be throttle, config `isThrottle` to real-time trigger |
| bottom-pull | Pull up the trigger, the first parameter for the current pull of the distance value, the default will be throttle, config `isThrottle` to real-time trigger |
| infinite-scroll | Triggered when the scroll container scrolls to the end |
| scroll | When scrolling, the event callback function, the first parameter, is the native `event` object |
