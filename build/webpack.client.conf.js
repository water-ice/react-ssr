const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin')
const WebpackMerge = require('webpack-merge')
const baseConf = require('./webpack.base.conf')
const Config = require('../config/index') 
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const clientConf =  WebpackMerge(baseConf,{
    entry: {
        "app":path.resolve(__dirname,'../client/entry_client.js'),
    },
    output: {
        // name = entry.app 
        filename: 'js/[name].[hash:8].js', 
    },
    plugins:[
        // 生成客户端页面
        new HtmlPlugin({
            template:path.resolve(__dirname,'../client/client.template.html')
        }),
        // 生成服务器端模板
        new HtmlPlugin({
            template:'!!ejs-compiled-loader!'+path.resolve(__dirname,'../client/server.template.ejs'),
            filename:'server.ejs'
        })
    ]
})

if(Config.isDev) {
    // 热更新entry配置
    clientConf.entry = {
        app:[
            // 热更新代码的入口
            "react-hot-loader/patch",
            path.join(__dirname,'../client/entry_client.js')
        ]
    }
    clientConf.output.path=path.resolve(__dirname,'../dev_dist'),

    // 开发服务器
    clientConf.devServer = {
        // 指向本机IP 也可以是localhost(无法联机访问)
        host:"0.0.0.0",
        // 端口号
        port:Config.port.client,
        // 服务器根目录为打包出来的dist文件夹
        contentBase:path.resolve(__dirname,'../dist'),
        // 热刷新配置：需要配合app.jsx中的module.hot
        hot:true,
        // 以黑色弹窗形式展示错误
        overlay: {
            errors: true,
        },
        // 所有的静态路径都在public下面，这块儿还有一些地方想不通=>是publicPath而不是output.PublicPath！
        publicPath:'/static',
        // 指定index.html是public下面的，所有404都返回这个页面，加这个的原因就是要区分路由与静态资源
        historyApiFallback: {
            index: '/static/index.html'
        },
        proxy:{
            '/api':'http://localhost:'+Config.port.develop
        }
    }
    // 热更新
    clientConf.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('develop'),
                API_ENV: JSON.stringify('develop'),
            }
        }),        
    )
}
if(Config.isDev) {
    console.log('environment:dev-client')
    // 开发环境，客户端使用style-loader插入dom进行热更替
    clientConf.module.rules.push(
        {
            test:/\.css/,
            loaders:"style-loader!css-loader"
        }, 
        {
            test:/\.less/,
            loaders:"style-loader!css-loader!less-loader"
        },               
    )
} 
else {
    clientConf.entry.vendor = ['react','react-dom','mobx','mobx-react','react-router','react-router-dom','axios']
    clientConf.module.rules.push( 
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
    clientConf.plugins.push(
        new ExtractTextPlugin('css/main.[contenthash:8].css'),
        
		// 压缩js
		new UglifyJSPlugin(),
		// 压缩css
        new OptimizeCssAssetsPlugin(), 		
        // 将entry中的vendor单独分离出来
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor'], 
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest',
            chunks: ['vendor']
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
                API_ENV: JSON.stringify('production'),
            }
        }),                   
    )    
}


module.exports = clientConf;