const path = require('path'); 
const WebpackMerge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
module.exports = WebpackMerge(baseConf,{
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
        new ExtractTextPlugin('main.[hash:8].css'),
    ]
})