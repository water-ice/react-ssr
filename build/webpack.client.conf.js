const path = require('path');
const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const WebpackBaseConf = require('./webpack.base.conf');
const IsDev = process.env.NODE_ENV === 'develop';

const Config = WebpackMerge(WebpackBaseConf,{
  entry: {
    app: path.resolve(__dirname,'../src/entry_client.js')
  },
  output: {
    filename: "[name].[hash:8].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname,'../src/index.html')
    })
  ]

})
module.exports = Config;