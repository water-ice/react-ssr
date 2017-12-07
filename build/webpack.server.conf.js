const path = require('path'); 
const WebpackMerge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const Config = require('../config/index')
const ServerConfig = WebpackMerge(baseConf,{
    target:"node",
    entry: {
        "app":path.resolve(__dirname,'../client/entry_server.js')
    },
    externals:Object.keys(require('../package.json').dependencies),
    output: {
        filename: 'server_entry.js',
        // 打包模块方案：amd,umd,cmd,commonjs
        libraryTarget:"commonjs2"
    },
    plugins:[
    ]
})
// 开发环境使用extract-text避免因为style-loader导致的服务器端渲染报错
ServerConfig.module.rules.push( 
    {
        test:/\.css/,
        use:ExtractTextPlugin.extract({
        fallback:'style-loader',
        use:'css-loader'
        })
    },   
    {
        test:/\.less/,
        use:ExtractTextPlugin.extract({
        fallback:'style-loader',
        use:'css-loader!less-loader'
        })
    },          
)
ServerConfig.plugins.push(
    new ExtractTextPlugin('css/main.[contenthash:8].css')
)   
module.exports = ServerConfig;