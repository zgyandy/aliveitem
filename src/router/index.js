import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
// 首页
import home from '@/pages/home/home.vue'
// 娃娃机列表
import machines from "@/pages/machines/machines.vue"
// 用户
import user from "@/pages/user/user.vue"
// 抓娃娃
import gettoy from "@/pages/gettoy/gettoy.vue"
export default new Router({
    routes: [
        {
            path: '/',
            redirect: "/home"
        },{
            path: "/home",
            name: 'home',
            component: home
        },{
            path: "/machines/:toy_id?",
            name: "machines",
            component: machines
        },{
            path: '/user',
            name: 'user',
            component: user,
        },{
            path: '/gettoy/:toy_id?&:mac_id?',
            name: 'gettoy',
            component: gettoy,
        }
    ]
})
