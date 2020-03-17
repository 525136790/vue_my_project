import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//设置移动端字体适配
import '../src/assets/appview/zepto.js'
import '../src/assets/appview/remstyle.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
