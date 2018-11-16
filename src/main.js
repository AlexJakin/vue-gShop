/*
main.js入口
 */
import Vue from 'vue'
import App from './App'
import router from './router'
// 在入口文件中引入基本样式
import './common/styles/reset.css'
import './common/styles/border.css'
import "./common/iconfont/iconfont.css"

new Vue({
  el:'#app',
  render: h => h(App),
  router
})
