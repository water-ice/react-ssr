module.exports = {
    "apps":[
        {
            name    : "ReactSSR",
            script  : "./server/start.js",
            watch   : ["dist",'server','config'],
            env     : {
                "NODE_ENV":"production",
                "API_ENV":"production"  
            }
        }
    ]
  }