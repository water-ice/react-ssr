const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const isDev = require('../config/index');
let baseConf = {
  output:{
    path:path.resolve(__dirname,'../dist'),
    // 引用静态资源文件路径
    publicPath: '/static/'
  },
  module:{
      rules: [
          {
            test: /\.jsx$/,
            loader: "babel-loader"
          },
          {
            test: /\.js$/,
            loader: "babel-loader",
            exclude:[
              path.join(__dirname,'../node_modules'),
              path.join(__dirname,'../client/static/fonts/iconfont.js')
            ]
          },     
          {
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit:2048,
              name:"[hash:8].[ext]",
              outputPath:"images/",
              publicPath:"/static/"
            }
          },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit:2048,
              name:"[hash:8].[ext]",
              outputPath:"videos/",
              publicPath:"/static/"
            }        
          },
          {
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: { 
              limit:2048,
              name:"icon.[hash:8].[ext]",
              outputPath:'fonts/',
              publicPath:'/static/'
            }
          }
        ]
  },
  devtool:process.env.NODE_ENV ==='develop'?"cheap-module-source-map":"",
  resolve: {
      alias: {
          "@style":path.resolve(__dirname,'../client/styles'),
          "@page":path.resolve(__dirname,'../client/pages'),
          "@component":path.resolve(__dirname,'../client/components'),
          "@store":path.resolve(__dirname,'../client/store'),
          "@image":path.resolve(__dirname,'../client/static/images'),
          "@util":path.resolve(__dirname,'../client/utils'),
          "@clientConfig":path.resolve(__dirname,'../client/config'),
          "@serverConfig":path.resolve(__dirname,'../config'),
          "@vendor": path.resolve(__dirname,'../client/vendor'),
          '@plugin':path.resolve(__dirname,'../client/plugins'),
      },
      extensions: ['.js','.jsx','.css','less']
  },
  plugins:[]
}
// console.log(isDev)

module.exports = baseConf