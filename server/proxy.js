// 全部代理  
const http = require('../config/http')
const Config = require('../config/index');
const base64 = require('../config/base64') 
module.exports = function(req,res,next){  
    let realPath =  req.path.replace('/api','');
    let wholePath = Config.getDomain()+realPath; 
    http.ajax(wholePath,req.method,req.body,req.params,{
        token:req.session.token || ''
    })  
    .then(resp => {    
        res.status(resp.status).send(resp.data)
    })
    .catch(err => {
        console.log('【proxy代理报错】')
        console.log(err)
        if(err.response) {
            res.status(err.response.status).send(err.response.data)
        }
        else {
            res.status(501).send({
                success:false,
                msg:'【proxy代理报错】未知错误'
            })
        }
    })
}