// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'amfe-flexible'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Config from './config'
import enablePermission from './utils/permission'
import './utils/http'

Vue.config.productionTip = false

// 开启登录权限
if (Config.enablePermission) {
  enablePermission()
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
