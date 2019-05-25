<template>
  <div class="app">
    <AppHeader />
    <div class="view-wrapper">
      <RouterView :current-route="currentRoute" default-route="/" />
    </div>
  </div>
</template>

<style scoped>
.app {
  background: #f6f6f6;
  height: 100%;
}
</style>

<style rel="stylesheet/less" lang="less">
* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  overflow: hidden;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 14px;
  color: #34495e;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: #34495e;
}

.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

.list {
  font-size: 16px;

  li:nth-child(even) {
    background: #eee;
  }

  li {
    padding-left: 15px;
    height: 50px;
    line-height: 50px;
    background: #fff;

    a {
      display: block;
      height: 100%;
    }

    .icon-arrow {
      display: inline-block;
      float: right;
      margin-right: 15px;
      height: 100%;
      width: 20px;
      color: #444;
    }
  }
}

.view-wrapper {
  box-sizing: border-box;
  padding-top: 50px;
  height: 100%;
  background: #f6f6f6;
}
</style>

<script type="text/babel">
  import AppHeader from './components/AppHeader';
  import RouterView from './components/RouterView';

  export default {
    data() {
      return {
        currentRoute: window.location.pathname
      };
    },
    components: { AppHeader, RouterView },
    created() {
      window.addEventListener('popstate', () => {
        this.currentRoute = window.location.pathname;
      });
    }
  };
</script>
