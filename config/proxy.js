const env = process.env.NODE_ENV;
const Domain = require('./domain');
module.exports =  {
    '/index/contest':{
        target:Domain['test'],
        changeOrigin:true,
        pathRewrite: {
            '/index/contest':"/index/contest"
        }
    }    
}