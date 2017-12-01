const path = require('path');
const webpack = require('webpack');  

const Merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');

const BaseConfig = require('./webpack.base.conf');
const Proxy = require('../config/proxy');
const Config = require('../config/index');

module.exports = Merge(BaseConfig,{
	entry:{
		"core":path.resolve(__dirname,'../src/index.js'),
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
				loaders:[
					"style-loader",
					// "css-loader?modules&localIdentName=CSS-[hash:base64:8]",
					"css-loader",
					"less-loader"
				]
			},
			{
				test:/\.css/,
				loaders:"style-loader!css-loader"
			},			
      {
        test: /\.(png|jpe?g|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name:"[name].[hash:8].[ext]",
          outputPath:"images/",
          publicPath:"/"
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
        	limit:10000,
          name:"whale.icon.[hash:8].[ext]",
          outputPath:'fonts/',
          publicPath:'/'
        }
      }
		]
	},
	devServer:{
		compress: true,
		hot: true,
		inline: true,
		open: true,
		port: Config.port,
		proxy:Proxy,	
		stats: {
			colors:true,
			children:false,
	    modules:false,
	    performance:true,
	    timings:true,
	    usedExports:false,
	    version:false,
	    warnings:true,
	    hash:false,
	    assets:false,			
		}
	},
	plugins:[
    new webpack.NoEmitOnErrorsPlugin(),
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'../src/template/index.html'),
			inject:true,
		}),
		new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin()
	],
})