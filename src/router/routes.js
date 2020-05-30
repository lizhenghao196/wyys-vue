// 引入组件
import Buy from '../pages/Buy'
import Category from '../pages/Category'
import Home from '../pages/Home'
import Self from '../pages/Self'
import carBuy from '../pages/carBuy'

export default [
  // 首页
  {
    path: '/home',
    component: Home
  },
  // 值得买
  {
    path: '/buy',
    component: Buy
  },
  // 分类
  {
    path: '/category',
    component: Category
  },
  // 个人
  {
    path: '/self',
    component: Self
  },
  // 购物车
  {
    path: '/carBuy',
    component: carBuy
  },
  // 重定向
  {
    path: '/',
    redirect: '/home'
  }
]