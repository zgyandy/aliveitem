// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入状态管理
import store from "./store/index.js";

// 引入矢量图标
import './assets/iconfont/iconfont.css'

// 引入rem配置
import './config/rem.js'
// 引入初始化样式
import "./assets/css/common.css"

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)
// 懒加载
import { Lazyload } from 'mint-ui'
Vue.use(Lazyload)
// 轮播
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
// navbar顶部导航
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)

// 引过滤器
import filters from "./filters/index.js"
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

// 关闭生产模式提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})