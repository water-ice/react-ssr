const path = require('path'); 
const WebpackMerge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')

module.exports = WebpackMerge(baseConf,{

    target:"node",

    entry: {
        "app":path.resolve(__dirname,'../client/entry_server.js')
    },
    output: {
        // name = entry.app 
        filename: 'server_entry.js',
        // 生成文件
        path: path.resolve(__dirname,'../dist'),
        // 静态资源的引用路径,区分静态资源
        publicPath: '/',
        // 打包模块方案：amd,umd,cmd,commonjs
        libraryTarget:"commonjs2"
    },
    module: {
        rules:[
            {
                test:/\.jsx/,
                loader:"babel-loader"
            },
            {
                test:/\.js/,
                loader:"babel-loader",
                exclude:[
                    path.resolve(__dirname,'../node_modules')
                ]
            }
        ]
    }, 
    resolve:{
        extensions:['.js','.jsx','.less']
    }
})