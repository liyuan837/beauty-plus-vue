
//引入三方包  开始
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)



//Mint：引入mint-ui
import Mint from 'mint-ui'
//Mint：引入css
import 'mint-ui/lib/style.css'
//Mint：安装插件
Vue.use(Mint)

//Mui：引入mui的样式和js
import './static/vendor/mui/css/mui.min.css'

import './static/js/jquery.min'

//引入自己的样式
import './static/css/base.css'
import './static/css/global.css'

//Axios：引入axios
import Axios from 'axios'
Vue.prototype.$ajax = Axios

//引入三方包  结束

//引入自己的vue文件 开始
import App from './app'
import Home from './page/home'
import Login from './page/login'

import Main from './components/index/main'
import Collect from './components/index/collect'
import Community from './components/index/community'
import BuyerShow from './components/index/community/buyershow'
import SellerSay from './components/index/community/sellersay'
import Fork from './components/index/community/fork'
import Cart from './components/index/cart'
import User from './components/index/user'

//引入自己的vue文件 结束

//引入全局组件  开始
import  HeaderVue from './components/common/header'
Vue.component('HeaderVue',HeaderVue)//使用的时候

//引入全局组件  结束

import Moment from 'moment'
//定义全局过滤器
Vue.filter('convertDate',function(value){

    return Moment(value).format('YYYY-MM-DD HH:mm:ss')
})




//创建对象并配置路由规则
let router = new VueRouter({
    linkActiveClass:'mui-active',
    routes:[
        //配置路由规则
        {
            path:'/',redirect:{name:'home'}//重定向
        },
        {
            name:'home',path:'/home',component:Home,
            children:[
                //子路由中，如果path写/则是指绝对路径，如果不写/，则是相对于/music的路径
                {
                    //name属性这么命名只是标识一下父子关系
                    name:'home_main',
                    path:'main',
                    component:Main
                },
                {
                    name:'home_collect',
                    path:'collect',
                    component:Collect
                },
                {
                    name:'home_community',
                    path:'community',
                    component:Community,
                    children:[
                        {
                            name:'home_community_buyershow',
                            path:'buyershow',
                            component:BuyerShow,
                        },
                        {
                            name:'home_community_sellersay',
                            path:'sellersay',
                            component:SellerSay,
                        },
                        {
                            name:'home_community_fork',
                            path:'fork',
                            component:Fork,
                        }
                    ]
                },
                {
                    name:'home_cart',
                    path:'cart',
                    component:Cart
                },
                {
                    name:'home_user',
                    path:'user',
                    component:User
                }
            ]
        },
        {
            name:'login',path:'/login',component:Login
        },
        {
            name:'collect',path:'/collect',component:Collect
        },
        {
            name:'community',path:'/community',component:Community
        },
        {
            name:'cart',path:'/cart',component:Cart
        },
        {
            name:'user',path:'/user',component:User
        }
    ]
})


//创建vue实例
new Vue({
    el:'#app',
    router,
    render:c => c(App)
})