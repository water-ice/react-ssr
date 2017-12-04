const path = require('path'); 
const WebpackMerge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')

module.exports = WebpackMerge(baseConf,{
    target:"node",
    entry: {
        "app":path.resolve(__dirname,'../client/entry_server.js')
    },
    output: {
        filename: 'server_entry.js',
        // 打包模块方案：amd,umd,cmd,commonjs
        libraryTarget:"commonjs2"
    }
})