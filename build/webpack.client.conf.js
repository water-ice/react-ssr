const path = require('path');
const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const WebpackBaseConf = require('./webpack.base.conf');
const IsDev = process.env.NODE_ENV === 'develop';
const GlobalConfig = require('../config/index')
// console.log(GlobalConfig,IsDev)
const Config = WebpackMerge(WebpackBaseConf, {
  entry: {
    app: path.resolve(__dirname, '../src/entry_client.js')
  },
  output: {
    filename: "[name].[hash:8].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../src/index.html')
    })
  ]
})
if (IsDev) {
  // 重写entry：提供热刷新功能
  Config.entry = {
    app:[
      'react-hot-loader/patch',
      path.resolve(__dirname, '../src/entry_client.js')
    ]
  }
  Config.devServer = {
    host: "0.0.0.0",
    port: GlobalConfig.port,
    contentBase: path.join(__dirname, '../dist'),
    hot:true,
    // 以黑色弹窗形式显示报错
    overlay: {
      errors: true,
    },
    publicPath: "/public",
    historyApiFallback: {
      index: "/public/index.html"
    }
  }
  Config.plugins.push(new Webpack.HotModuleReplacementPlugin())
}
module.exports = Config;