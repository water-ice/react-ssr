module.exports = {
	"apps":[
		{
			name    : "whaleDesignTest",
			script  : "./server/start.js",
			watch   : ["dist",'server','config'],
			env     : {
				"NODE_ENV":"production",
				"API_ENV":"develop"  
			}
		}
	]
}