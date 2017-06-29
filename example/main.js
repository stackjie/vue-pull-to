import Vue from 'vue'
import AppHeader from './components/AppHeader.vue'
import RouterView from './components/RouterView.vue'
require('./base.less');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    AppHeader,
    RouterView
  }
})
