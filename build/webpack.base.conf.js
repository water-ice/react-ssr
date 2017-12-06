const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
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
              path.join(__dirname,'../node_modules')
            ]
          },
          {
            test:/\.less/,
            use:ExtractTextPlugin.extract({
              fallback:'style-loader',
              use:'css-loader!less-loader'
            })
          },  
          {
            test:/\.css/,
            use:ExtractTextPlugin.extract({
              fallback:'style-loader',
              use:'css-loader'
            })
          },      
          {
            test: /\.(png|jpe?g|gif)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name:"[hash:8].[ext]",
              outputPath:"images/",
              publicPath:"/public/"
            }
          },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name:"[hash:8].[ext]",
              outputPath:"videos/",
              publicPath:"/public/"
            }        
          },
          {
            test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit:10000,
              name:"icon.[hash:8].[ext]",
              outputPath:'fonts/',
              publicPath:'/public/'
            }
          }
        ]
  },
  devtool:process.env.NODE_ENV ==='develop'?"cheap-module-source-map":"",
  resolve: {
      alias: {
          "@style":path.resolve(__dirname,'../client/styles'),
          "@pages":path.resolve(__dirname,'../client/pages'),
          "@components":path.resolve(__dirname,'../client/components'),
          "@store":path.resolve(__dirname,'../client/store'),
          "@image":path.resolve(__dirname,'../client/static/images')
      },
      extensions: ['.js','.jsx','.less','.css']
  },
  plugins:[
    new ExtractTextPlugin('css/main.[hash:8].css'),
  ]
}