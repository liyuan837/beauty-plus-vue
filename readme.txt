项目搭建流程：

##一键初始化package.json
// npm init -y
##安装vue依赖
// npm i mint-ui vue-preview axios vue-router moment vue -S
##安装项目开发依赖
// npm i webpack html-webpack-plugin
                                     css-loader style-loader less less-loader
                                     autoprefixer-loader
                                     babel-loader babel-core babel-preset-es2015 babel-plugin-transform-runtime
                                     url-loader file-loader
                                     vue-loader vue-template-compiler
##npm i webpack-dev-server -D

##修改package.json文件：添加命令脚本
"scripts": {
    "dev": ".\\node_modules\.bin\\webpack-dev-server --inline --hot --open --port 9999",
    "build":"webpack"
  }

##新建打包配置文件webpack.config.js
'use strict';
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    //入口
    entry:{
        main:'./src/main.js'
    },
    //出口
    output:{
        //所有产出资源路径
        path:path.join(__dirname,'dist'),
        filename:'build.js'
    },
    resolve: {
            extensions: ['.js', '.json', '.vue', '.scss', '.css']
     },
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader!autoprefixer-loader'
            },
            {
                test:/\.less/,
                loader:'style-loader!css-loader!autoprefixer-loader!less-loader'
            },
            {
                test:/\.(jpg|png|svg|ttf|woff|woff2|gif)$/,
                loader:'url-loader',
                options:{
                    limit:4096,//4096字节以上生成文件，否则base64
                    name:'[name].[ext]'
                }
            },
            {
                test:/\.js$/,
                exclude: /node_modules/,
                loader:'babel-loader',
                options:{
                    presets:['es2015'],//关键字
                    plugins:['transform-runtime']//函数
                }
            },
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
}

##创建目录结构
创建index.html、app.vue、main.js


##编写入口文件main.js
'use strict'

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

//Axios：引入axios
import Axios from 'axios'
Vue.prototype.$ajax = Axios

//引入三方包  结束

//引入自己的vue文件 开始
import App from './app'
import Home from './components/home'

//引入自己的vue文件 结束

//创建对象并配置路由规则
let router = new VueRouter({
    routes:[
        //配置路由规则
        {
            path:'/',redirect:{name:'home'}//重定向
        },
        {
            name:'home',path:'/home',component:Home
        }
    ]
})


//创建vue实例
new Vue({
    el:'#app',
    router,
    render:c => c(App)
})

##这个说明文件没啥用