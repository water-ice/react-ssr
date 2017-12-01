const path = require('path');
const webpack = require('path');
const env = process.env.NODE_ENV;
module.exports = {
	output:{
		path:path.resolve(__dirname,'../dist'),
		filename:"js/[name].[hash].js",
	},
	devtool:(env=='develop')?'cheap-module-source-map':"",
	resolve:{
		alias: {
			"@style": path.resolve(__dirname,'../src/style'),
			"@pages": path.resolve(__dirname,'../src/pages'),
			"@components": path.resolve(__dirname,'../src/components'),
			"@utils": path.resolve(__dirname,'../src/utils'),
			"@image": path.resolve(__dirname,'../static/images'),
			"@actions": path.resolve(__dirname,'../src/actions'),
			"@config": path.resolve(__dirname,'../config')
		},
		extensions:[".js",".jsx",".less",".css"]
	},
}
