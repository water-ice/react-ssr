// 全部代理
const axios = require('axios');
const qs = require('query-string') 
const http = require('../config/http')
const Config = require('../config/index')

module.exports = function(req,res,next){
    let path = req.path.replace('/api',''); 
    let isApiDev = req.headers.host.indexOf('whalesdesign')> -1? false:true;
    let ApiDomain = isApiDev ? Config.domain.dev:Config.domain.prod
    http.ajax(`${ApiDomain}${path}`,req.method,'')  
    .then(resp => {

        if(resp.status == 200) {
            res.send(resp.data)
        }
        else {
            res.status(resp.status).send(resp.data)
        }
    })
    .catch(err => {
        console.log('当前接口转发错误信息为:'+err)
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