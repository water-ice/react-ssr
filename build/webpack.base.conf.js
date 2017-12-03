const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname,'../dist'),
    publicPath: '/public/'
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
        loaders:[
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },  
      {
        test:/\.css/,
        loaders:[
          "style-loader",
          "css-loader"
        ]
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
  resolve: {
    alias: {
      "@style":path.resolve(__dirname,'../src/styles'),
      "@pages":path.resolve(__dirname,'../src/pages'),
      "@components":path.resolve(__dirname,'../src/components'),
      "@store":path.resolve(__dirname,'../src/store'),
      "@image":path.resolve(__dirname,'../src/static/images')
    },
    extensions: ['.js','.jsx','.less','.css']
  }
}
