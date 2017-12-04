const path = require('path');
const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge'); 
// webpack
const WebpackBaseConf = require('./webpack.base.conf');

const IsDev = process.env.NODE_ENV === 'develop';

const Config = WebpackMerge(WebpackBaseConf,{
  // 当前的宿主环境：node/web
  target:"node",
  // 入口:src 下的entry_server.js
  entry: {
    app: path.resolve(__dirname,'../src/entry_server.js')
  },
  output: {
    // 输入文件名
    filename: "entry_server.js",
    // 打包出来的JS模块机制：umd,cmd,amd,commonjs,global
    libraryTarget:'commonjs2'
  }, 
}) 
module.exports = Config;