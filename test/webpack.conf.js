const path = require('path');
const webpack = require('webpack');
// const WebpackDevServer = require('webpack-dev-server');
// const WebpackBaseConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	entry:{
		"core":path.resolve(__dirname,'template.js'),
		"vendor":["react","react-dom","react-router",]
	},
	output:{
		path:path.resolve(__dirname,'dist'),
		filename:"[name].[hash].js",
	},
	devtool:"cheap-module-eval-source-map",
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
          name:"[name].[hash:8].[ext]",
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
        	limit:10000,
          name:"whale.icon.[hash:8].[ext]",
          outputPath:'fonts/',
          publicPath:'../'
        }
      }
		]
	},
	devServer:{
		compress: true,
		hot: true,
		inline: true,
		open: true,
		port: 8089,
		proxy: {

		},	
		stats: {
			colors:true,
			children:false,
	    modules:false,
	    performance:true,
	    timings:true,
	    usedExports:false,
	    version:false,
	    warnings:true,			
		}
	},
	plugins:[
		// create css
		new ExtractTextWebpackPlugin('css/whale.[chunkHash].css'),
		// create html
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname,'template.html'),
			inject:true,
			minify: {
				removeComments:true,
				collapseWhitespace:true
			}
		}),
		// reload
		new webpack.HotModuleReplacementPlugin(),
		// minify js
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings:false,
			},
			mangle: {
        except: ['$super', '$', 'exports', 'require']
    	}			
		}),
		// 压缩css
		new OptimizeCssAssetsPlugin(), 
		// 将entry中的vendor单独分离出来
		new webpack.optimize.CommonsChunkPlugin({
			names: ['vendor']
		}),
		// 分析工具
		// new BundleAnalyzerPlugin()
	],
	resolve:{
		alias: {
			"@style": path.resolve(__dirname,'../src/style'),
			"@pages": path.resolve(__dirname,'../src/pages'),
			"@components": path.resolve(__dirname,'../src/components'),
			"@utils": path.resolve(__dirname,'../src/utils')
		},
		extensions:[".js",".jsx",".less",".css"]
	},
	externals: {
		'react':'window.React',
	}
}