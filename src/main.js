// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

document.documentElement.style = 'margin: 0; padding: 0; height: 100%; width: 100%';
document.body.style = 'margin: 0; padding: 0; height: 100%; width: 100%';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
