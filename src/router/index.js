import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入路由
import routes from './routes'
// 重写路由跳转的replace方法，解决跳转时候的bug
const originPathReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function (location, onComplete = () => { }, onAbort) {
  return originPathReplace.call(this, location, onComplete, onAbort)
}
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes
})