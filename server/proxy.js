// 全部代理
const axios = require('axios');
const qs = require('query-string') 
const http = require('../config/http')
const Config = require('../config/index')

module.exports = function(req,res,next){
    // /api/user/login => /user/login
    let path = req.path.replace('/api',''); 
    // 通过request的host中是否含有whalesdesign关键字判断环境
    let ApiDomain = Config.GetHostByRequest(req)
    // 传入完整域名，请求方式，请求参数，header
    http.ajax(`${ApiDomain}${path}`,req.method,{},{
        access:req.cookies.access
    })  
    .then(resp => {        
        if(resp.status == 200) {
            res.send(resp.data)
        }
        else {
            res.status(resp.status).send(resp.data)
        }
    })
    .catch(err => {
        // console.log('当前接口转发错误信息为:'+err)
        if(err.response) {
            res.status(500).send(err.response.data)
        }
        else {
            res.status(501).send({
                success:false,
                msg:'未知错误'
            })
        }
    })
}