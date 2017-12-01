const path = require('path');
const Webpack = require('webpack');
const WebpackMerge = require('webpack-merge'); 

const WebpackBaseConf = require('./webpack.base.conf');
const IsDev = process.env.NODE_ENV === 'develop';

const Config = WebpackMerge(WebpackBaseConf,{
  target:"node",
  entry: {
    app: path.resolve(__dirname,'../src/entry_server.js')
  },
  output: {
    filename: "entry_server.js",
    libraryTarget:'commonjs2'
  }, 
}) 
module.exports = Config;