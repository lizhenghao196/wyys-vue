import Vue from 'vue'
import App from './App.vue'
import '../tools/rem'
import Footer from './component/Footer.vue'
// 引入路由
import router from './router'
// 引入iconfont
import './assets/font_1854219_7ci36qzyxaj/iconfont.css'
// 引入插件
import { Tabbar, TabbarItem, Button, Icon, Col, Row, Search, Tab, Tabs, Swipe, SwipeItem, Lazyload } from 'vant'


Vue.config.productionTip = false
// 注册成全局组件
Vue.component(Footer.name, Footer)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Button)
Vue.use(Icon)
Vue.use(Col)
Vue.use(Row)
Vue.use(Search)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)

new Vue({
  render: h => h(App),
  // 注册路由
  router
}).$mount('#app')
