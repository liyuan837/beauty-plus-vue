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
                    plugins:['transform-runtime'],//函数
                    //排除对mui.min.js使用严格模式
                    // ignore: [
                    //     "./src/static/vendor/mui/js/mui.min.js",
                    //     "./src/static/vendor/mui/js/mui.zoom.js",
                    //     "./src/static/vendor/mui/js/mui.previewimage.js"
                    // ]
                },
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