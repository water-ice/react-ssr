// 全部代理
const axios = require('axios');
const qs = require('query-string') 
const http = require('../config/http')
const Config = require('../config/index')
const apiDomain = Config.isApiDev ? Config.domain.dev:Config.domain.prod;

module.exports = function(req,res,next){
    let path = req.path.replace('/api/',''); 
    // console.log("当前API_ENV为: "+process.env.API_ENV)
    // console.log('当前Ajax完整请求路径为：'+`${apiDomain}${path}`)

    http.ajax(`${apiDomain}${path}`,req.method,'')  
    .then(resp => {
        console.log("代理返回为："+resp)
        console.log("接口返回状态:"+resp.status)
        console.log("返回数据为："+resp)
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