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
        // 在代码编译之前先进行eslint
        enforce:"pre",
        test:/.(js|jsx)/,
        loader:"eslint-loader",
        exclude:[
          path.resolve(__dirname,'../node_modules')
        ]
      },
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
      }
    ]
  },
  resolve: {
    extensions: ['.js','.jsx','.less','.css']
  }
}