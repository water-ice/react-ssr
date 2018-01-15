module.exports = {
    "apps":[
        {
            name    : "ProductionServer",
            script  : "./server/start.js",
            watch   : ["dist",'server','config'],
            env     : {
                "NODE_ENV":"production",
                "API_ENV":"production"  
            }
        }
    ]
  }