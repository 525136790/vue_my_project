import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//设置移动端字体适配
import '../src/assets/appview/zepto.js'
import '../src/assets/appview/remstyle.js'

//使用mint-ui
import { Field } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Field.name, Field);
// 设置swiper样式
import 'swiper/css/swiper.css'
//设置Mui
import '../src/mui/css/mui.min.css'

// 设置公用样式
import '../src/assets/css/index.css'


Vue.filter('formatPrice', function (value = 0) {
	return Number(value).toFixed(2)
})

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
