import Vue from 'vue'
import App from './App.vue'
import '../tools/rem'
import Footer from './component/Footer.vue'
// 引入路由
import router from './router'
// 引入插件
import { Tabbar, TabbarItem, Button, Icon } from 'vant'


Vue.config.productionTip = false
// 注册成全局组件
Vue.component(Footer.name, Footer)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(Icon)

new Vue({
  render: h => h(App),
  // 注册路由
  router
}).$mount('#app')
