const path = require('path');
const webpack = require('webpack');

const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const Proxy = require('../config/proxy')
const BaseConfig = require('./webpack.base.conf');

module.exports = Merge(BaseConfig,{
	entry:{
		"core":path.resolve(__dirname,'../src/index.js'),
		"vendor": ['react','react-dom','react-router','redux','react-redux']
	},
	module: {
		loaders: [
			{
				test:/\.jsx?$/,
				loader:"babel-loader",
				exclude:/node_modules/,
				query:{
					presets:["es2015",'react']
				}
			}, 
			{
				test:/\.less/,
				use:ExtractTextWebpackPlugin.extract({
					fallback:"style-loader",
					use:["css-loader","less-loader"]
				})
			},
			{
				test:/\.css/,
				use:ExtractTextWebpackPlugin.extract({
					fallback:"style-loader",
					use:["css-loader"]
				})
			},			
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name:"whale-[name].[hash:8].[ext]",
          outputPath:"images/",
          publicPath:"/"

        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name:"whale-[hash:8].[ext]",
          outputPath:"videos/",
          publicPath:"/"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
        	limit:10000,
          name:"whale-icon.[hash:8].[ext]",
          outputPath:'fonts/',
          publicPath:'/'
        }
      }
		]
	},
	stats: {
			colors:true,
			children:false,
	    modules:false,
	    performance:true,
	    timings:true,
	    version:false,
	    warnings:true,
	    hash:false,	
	},
	plugins:[
		// create css
		new ExtractTextWebpackPlugin('css/whale.[chunkHash].css'),
		// create html
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'../src/template/index.html'),
			inject:true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
     },			
		}),
		// 压缩js
		new UglifyJSPlugin(),
		// 压缩css
		new OptimizeCssAssetsPlugin(), 
		// 将entry中的vendor单独分离出来
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor'], 
		}),
	],
	
})