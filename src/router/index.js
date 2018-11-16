/*
路由器对象模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// 引入四个组件
import MSite from '../pages/MSite/MSite'
import Search from '../pages/Search/Search'
import Order from '../pages/Order/Order'
import Profile from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'

//声明使用插件
Vue.use(VueRouter)

//每一个数组代表一个路由
export default new VueRouter({
  //配置所有路由
  routes:[
    {
      path: '/msite',
      component: MSite,
      meta: {
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta: {
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta: {
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter:true
      }
    },
    {
      path: '/login',
      component: Login,
      meta: {
        showFooter:false
      }
    },
    {
      path: '/',
      redirect: '/msite',
      meta: {
        showFooter:true
      }
    },
  ]
})
