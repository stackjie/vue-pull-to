import Vue from 'vue';
import AppHeader from './components/AppHeader.vue';
import RouterView from './components/RouterView.vue';
require('./assets/icon/iconfont');
require('./base.less');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  components: {
    AppHeader,
    RouterView
  },
  created() {
    window.addEventListener('popstate', () => {
      this.currentRoute = window.location.pathname;
    });
  }
});
