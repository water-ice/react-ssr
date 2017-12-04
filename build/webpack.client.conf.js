const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const WebpackMerge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')

module.exports = WebpackMerge(baseConf,{
    entry: {
        "app":path.resolve(__dirname,'../client/entry_client.js')
    },
    output: {
        // name = entry.app 
        filename: '[name].[hash:8].js', 
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
    plugins:[
        new HtmlPlugin({
            template:path.resolve(__dirname,'../client/index.html')
        })
    ]
})